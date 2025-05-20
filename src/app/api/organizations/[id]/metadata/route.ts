import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("No autorizado", { status: 401 });
    }

    const body = await req.json();
    const { publicMetadata } = body;

    const organization = await (
      await clerkClient()
    ).organizations.updateOrganization(params.id, {
      publicMetadata,
    });

    return NextResponse.json(organization);
  } catch (error) {
    console.error("[ORGANIZATION_METADATA_PATCH]", error);
    return new NextResponse("Error interno", { status: 500 });
  }
}
