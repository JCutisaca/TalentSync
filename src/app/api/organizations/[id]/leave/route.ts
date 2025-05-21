import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("No autorizado", { status: 401 });
    }

    const id = (await context.params).id;
    const clerk = await clerkClient();

    const memberships = await clerk.organizations.getOrganizationMembershipList(
      {
        organizationId: id,
      }
    );

    const membership = memberships.data.find(
      (m) => m.publicUserData?.userId === userId
    );

    if (!membership || membership.publicMetadata?.role !== "recruiter") {
      return new NextResponse(
        "Solo los reclutadores pueden abandonar la organización",
        {
          status: 403,
        }
      );
    }

    await clerk.organizations.deleteOrganizationMembership({
      organizationId: id,
      userId,
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[LEAVE_ORGANIZATION]", error);
    return new NextResponse("Error interno", { status: 500 });
  }
}
