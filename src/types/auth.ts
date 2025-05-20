export type UserRole = "admin" | "empresa" | "postulante";
export type MembershipRole = "admin_empresa" | "reclutador";

export interface UserMetadata {
  role: UserRole;
}

export interface OrganizationMetadata {
  name: string;
  createdAt: string;
}
