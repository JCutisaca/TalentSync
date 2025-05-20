import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string; memberId: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("No autorizado", { status: 401 });
    }

    const { id: organizationId, memberId } = params;
    const clerk = await clerkClient();

    const memberships = await clerk.organizations.getOrganizationMembershipList(
      {
        organizationId,
      }
    );

    const requesterMembership = memberships.data.find(
      (m) => m.publicUserData?.userId === userId
    );

    if (
      !requesterMembership ||
      requesterMembership.raw?.public_metadata?.role !== "admin_empresa"
    ) {
      return new NextResponse("No tienes permisos para realizar esta acción", {
        status: 403,
      });
    }

    const targetMembership = memberships.data.find(
      (m) => m.publicUserData?.userId === memberId
    );

    if (!targetMembership) {
      return new NextResponse("Miembro no encontrado", { status: 404 });
    }

    await clerk.organizations.deleteOrganizationMembership({
      organizationId,
      userId: memberId,
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[MEMBER_DELETE]", error);
    return new NextResponse("Error interno", { status: 500 });
  }
}
