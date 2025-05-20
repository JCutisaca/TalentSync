import { createClerkClient } from "@clerk/nextjs/server";
import type { UserRole, MembershipRole } from "@/types/auth";

const clerk = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export async function setUserRole(userId: string, role: UserRole) {
  try {
    await clerk.users.updateUser(userId, {
      publicMetadata: { role },
    });
    return true;
  } catch (error) {
    console.error("Error setting user role:", error);
    return false;
  }
}

export async function createOrganizationForCompany(
  userId: string,
  companyName: string
) {
  try {
    const organization = await clerk.organizations.createOrganization({
      name: companyName,
      createdBy: userId,
      publicMetadata: {
        createdAt: new Date().toISOString(),
      },
    });

    await clerk.organizations.updateOrganizationMembership({
      organizationId: organization.id,
      userId,
      role: "admin_empresa" as MembershipRole,
    });

    await clerk.organizations.updateOrganizationMembershipMetadata({
      organizationId: organization.id,
      userId,
      publicMetadata: {
        role: "admin_empresa",
      },
    });

    return organization;
  } catch (error) {
    console.error("Error creating organization:", error);
    return null;
  }
}

export async function inviteRecruiter(organizationId: string, email: string) {
  try {
    const invitation = await clerk.organizations.createOrganizationInvitation({
      organizationId,
      emailAddress: email,
      role: "reclutador" as MembershipRole,
      redirectUrl: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
    });

    return invitation;
  } catch (error) {
    console.error("Error inviting recruiter:", error);
    return null;
  }
}
