import { useUser } from "@clerk/nextjs";
import type { UserRole } from "@/types/auth";

export function useUserRole() {
  const { user } = useUser();
  const role = user?.publicMetadata?.role as UserRole | undefined;

  return {
    role,
    isAdmin: role === "admin",
    isEmpresa: role === "empresa",
    isPostulante: role === "postulante",
    isLoaded: !!user,
  };
}
