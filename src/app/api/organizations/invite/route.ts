import { clerkClient, auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.orgId) {
      return new NextResponse("No autorizado", { status: 401 });
    }

    const { email, role } = await request.json();

    if (!email || !role) {
      return new NextResponse("Email y rol son requeridos", { status: 400 });
    }

    const clerkRole = role === "admin_empresa" ? "org:admin" : "org:member";

    const clerk = await clerkClient();

    const normalizedEmail = email.toLowerCase().trim();

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const invitationData = {
      organizationId: session.orgId,
      emailAddress: normalizedEmail,
      role: clerkRole,
      redirectUrl: `${baseUrl}/onboarding`,
      publicMetadata: {
        role: role,
      },
    };

    const invitation = await clerk.organizations.createOrganizationInvitation(
      invitationData
    );

    return NextResponse.json(invitation);
  } catch (error) {
    if (error instanceof Error && "errors" in error) {
      const clerkError = error as { errors?: Array<{ message: string }> };
      const errorMessage =
        clerkError.errors?.[0]?.message || "Error al crear la invitación";
      return new NextResponse(errorMessage, { status: 422 });
    }
    return new NextResponse("Error interno del servidor", { status: 500 });
  }
}
