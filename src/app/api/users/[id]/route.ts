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
    const { firstName, lastName, bio } = body;

    const user = await (
      await clerkClient()
    ).users.updateUser(params.id, {
      firstName,
      lastName,
      publicMetadata: {
        bio,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("[USER_UPDATE]", error);
    return new NextResponse("Error interno", { status: 500 });
  }
}
