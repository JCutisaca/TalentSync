import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

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

export async function POST(req: Request) {
  const { userId, orgId } = await auth();
  if (!userId || !orgId) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

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
    const newJobSearch = await prisma.jobSearch.create({
      data: {
        createdByClerkId: userId,
        organizationClerkId: orgId,
        company: company,
        title: title,
        description: description,
        location: location,
        modality: modality,
        salaryMin: Number(salaryMin),
        salaryMax: Number(salaryMax),
        jobType: jobType,
      },
    });

    return NextResponse.json(newJobSearch, { status: 201 });
  } catch (error) {
    console.error("Error creating job search:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
