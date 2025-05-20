import { NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const { userId, orgId } = await auth();

    if (!userId || !orgId) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }
    const jobs = await prisma.jobSearch.findMany({
      where: {
        organizationClerkId: orgId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const recruiterIds = [...new Set(jobs.map((job) => job.createdByClerkId))];

    const recruiterClient = await clerkClient();

    const recruiters = await Promise.all(
      recruiterIds.map((id) => recruiterClient.users.getUser(id))
    );

    const recruiterMap = new Map(
      recruiters.map((user) => [
        user.id,
        {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.emailAddresses[0]?.emailAddress || null,
          profileImageUrl: user.imageUrl || null,
          bio: user.publicMetadata?.bio || "",
        },
      ])
    );

    const jobsWithRecruiters = jobs.map((job) => ({
      ...job,
      recruiter: recruiterMap.get(job.createdByClerkId) || null,
    }));

    return NextResponse.json(jobsWithRecruiters);
  } catch (error) {
    console.error("[JOBS_ORG_GET]", error);
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
