import { NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function GET(
  _: Request,
  context: { params: Promise<{ id: string }> }
) {
  const id = (await context.params).id;
  try {
    const { orgId } = await auth();
    if (!orgId) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }

    const job = await prisma.jobSearch.findUnique({
      where: {
        id: id,
        organizationClerkId: orgId,
      },
    });

    if (!job) {
      return NextResponse.json(
        { message: "Oferta no encontrada" },
        { status: 404 }
      );
    }

    const recruiter = await clerkClient();
    const user = await recruiter.users.getUser(job.createdByClerkId);

    return NextResponse.json({
      ...job,
      recruiter: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.emailAddresses[0]?.emailAddress || null,
        profileImageUrl: user.imageUrl || null,
        bio: user.publicMetadata?.bio || "",
      },
    });
  } catch (error) {
    console.error("[JOB_GET]", error);
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { userId, orgId } = await auth();

  if (!userId || !orgId) {
    return NextResponse.json({ message: "No autorizado" }, { status: 401 });
  }
  const jobSearchId = (await context.params).id;

  if (!jobSearchId) {
    return NextResponse.json(
      { message: "Falta el ID de la búsqueda" },
      { status: 400 }
    );
  }

  try {
    const jobSearch = await prisma.jobSearch.findUnique({
      where: { id: jobSearchId },
    });

    if (!jobSearch) {
      return NextResponse.json(
        { message: "Búsqueda no encontrada" },
        { status: 404 }
      );
    }

    const isOwner = jobSearch.createdByClerkId === userId;

    const clerk = await clerkClient();

    const memberships = await clerk.organizations.getOrganizationMembershipList(
      {
        organizationId: orgId,
      }
    );

    const membership = memberships.data.find(
      (m) => m.publicUserData?.userId === userId
    );
    const role = membership?.publicMetadata?.role;

    console.log(role);

    const isAdmin = role === "admin_empresa";

    if (!isOwner && !isAdmin) {
      return NextResponse.json(
        { message: "No tiene permiso para eliminar esta búsqueda" },
        { status: 403 }
      );
    }

    await prisma.jobSearch.delete({
      where: { id: jobSearchId },
    });

    return NextResponse.json(
      { message: "Búsqueda eliminada con éxito" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al eliminar búsqueda:", error);
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

type JobSearchBody = {
  company: string;
  title: string;
  description: string;
  location: string;
  modality: "REMOTE" | "ON_SITE" | "HYBRID";
  salaryMin: number;
  salaryMax: number;
  jobType:
    | "FULL_TIME"
    | "PART_TIME"
    | "FREELANCE"
    | "CONTRACT"
    | "INTERNSHIP"
    | "OTHER";
};

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { userId, orgId } = await auth();
  if (!userId || !orgId) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const jobSearchId = (await context.params).id;

  const {
    company,
    title,
    description,
    location,
    modality,
    salaryMin,
    salaryMax,
    jobType,
  } = (await req.json()) as JobSearchBody;

  if (
    !company ||
    !title ||
    !description ||
    !location ||
    !modality ||
    !salaryMin ||
    !salaryMax ||
    !jobType
  ) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const updatedJobSearch = await prisma.jobSearch.update({
      where: {
        id: jobSearchId,
      },
      data: {
        company,
        title,
        description,
        location,
        modality,
        salaryMin: Number(salaryMin),
        salaryMax: Number(salaryMax),
        jobType,
      },
    });

    return NextResponse.json(updatedJobSearch, { status: 200 });
  } catch (error) {
    console.error("Error updating job search:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
