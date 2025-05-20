import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

type ClerkError = Error & {
  status?: number;
  errors?: Array<{ message: string }>;
  clerkTraceId?: string;
};

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, website, description, industry, userId } = data;

    if (!name || !userId) {
      return NextResponse.json(
        { error: "Name and userId are required" },
        { status: 400 }
      );
    }

    const clerk = await clerkClient();

    const organization = await clerk.organizations.createOrganization({
      name,
      createdBy: userId,
      publicMetadata: {
        website,
        description,
        industry,
        createdAt: new Date().toISOString(),
      },
    });

    await clerk.organizations.updateOrganizationMembershipMetadata({
      organizationId: organization.id,
      userId,
      publicMetadata: {
        role: "admin_empresa",
      },
    });

    return NextResponse.json(organization);
  } catch (error) {
    const clerkError = error as ClerkError;
    return NextResponse.json(
      {
        error: "Error creating organization",
        details: clerkError.errors?.[0]?.message || clerkError.message,
        clerkTraceId: clerkError.clerkTraceId,
      },
      { status: clerkError.status || 500 }
    );
  }
}
