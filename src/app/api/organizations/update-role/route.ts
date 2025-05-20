import { clerkClient, auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.orgId) {
      return new NextResponse("No autorizado", { status: 401 });
    }

    const { userId, role } = await request.json();

    if (!userId || !role) {
      return new NextResponse("UserId y rol son requeridos", { status: 400 });
    }

    const clerk = await clerkClient();
    await clerk.organizations.updateOrganizationMembership({
      organizationId: session.orgId,
      userId,
      role: role === "admin_empresa" ? "org:admin" : "org:member",
    });

    await clerk.organizations.updateOrganizationMembershipMetadata({
      organizationId: session.orgId,
      userId,
      publicMetadata: {
        role,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al actualizar rol:", error);
    return new NextResponse("Error interno del servidor", { status: 500 });
  }
}
