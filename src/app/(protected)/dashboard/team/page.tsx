"use client";

import { useOrganization, useUser } from "@clerk/nextjs";
import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { OrganizationMembershipResource } from "@clerk/types";
import { Search, Pencil, Trash2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import RecruitmentLoading from "@/components/ui/RecruitmentLoading";
import { useRouter } from "next/navigation";

const inviteFormSchema = z.object({
  email: z.string().email("Correo electrónico inválido"),
  role: z.enum(["admin_empresa", "recruiter"], {
    required_error: "Por favor selecciona un rol",
  }),
});

type InviteFormData = z.infer<typeof inviteFormSchema>;

interface ExtendedMember extends OrganizationMembershipResource {
  publicMetadata: {
    role?: Role;
  };
}

const roleLabels = {
  admin_empresa: "Administrador de Empresa",
  recruiter: "Reclutador",
} as const;

type Role = keyof typeof roleLabels;

const getRoleFromMember = (member: ExtendedMember): Role => {
  if (!member.publicMetadata?.role) {
    const clerkRole =
      member.role === "org:admin" ? "admin_empresa" : "recruiter";
    return clerkRole;
  }

  return member.publicMetadata.role;
};

export default function TeamSettings() {
  const router = useRouter();
  const { organization, memberships } = useOrganization({
    memberships: {
      infinite: false,
      pageSize: 10,
    },
  });
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<ExtendedMember | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 5;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch,
  } = useForm<InviteFormData>({
    resolver: zodResolver(inviteFormSchema),
    defaultValues: {
      role: "recruiter",
    },
  });

  const selectedRole = watch("role");

  const filteredMembers = useMemo(() => {
    if (!memberships?.data) return [];

    return memberships.data.filter((member) => {
      const searchLower = searchTerm.toLowerCase().trim();
      if (!searchLower) return true;

      const firstName = member.publicUserData?.firstName?.toLowerCase() || "";
      const lastName = member.publicUserData?.lastName?.toLowerCase() || "";
      const email = member.publicUserData?.identifier?.toLowerCase() || "";
      const role = roleLabels[getRoleFromMember(member)].toLowerCase();

      return (
        firstName.includes(searchLower) ||
        lastName.includes(searchLower) ||
        email.includes(searchLower) ||
        role.includes(searchLower) ||
        `${firstName} ${lastName}`.includes(searchLower) ||
        (searchLower === "admin" && role.includes("administrador")) ||
        (searchLower === "reclutador" && role.includes("reclutador"))
      );
    });
  }, [memberships?.data, searchTerm]);

  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
  const paginatedMembers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredMembers.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredMembers, currentPage]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user && organization && memberships) {
          setIsLoading(false);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user, organization, memberships]);

  if (isLoading) {
    return <RecruitmentLoading />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center">
            <div className="text-red-500 dark:text-red-400">{error}</div>
          </div>
        </div>
      </div>
    );
  }

  const onSubmit = async (data: InviteFormData) => {
    setIsSaving(true);
    const inviteToast = toast.loading("Enviando invitación...");

    try {
      const response = await fetch("/api/organizations/invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Error al enviar la invitación");

      toast.success(`Se ha enviado una invitación a ${data.email}`, {
        id: inviteToast,
      });
      setIsInviteModalOpen(false);
      reset();
    } catch {
      toast.error("No se pudo enviar la invitación", {
        id: inviteToast,
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdateRole = async () => {
    if (!selectedMember) return;

    setIsSaving(true);
    const editToast = toast.loading("Actualizando rol...");

    try {
      const response = await fetch("/api/organizations/update-role", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: selectedMember.publicUserData?.userId,
          role: selectedRole,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error);
      }

      toast.success("Rol actualizado correctamente", {
        id: editToast,
      });
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error al actualizar rol:", error);
      toast.error("No se pudo actualizar el rol", {
        id: editToast,
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleEditClick = (member: ExtendedMember) => {
    setSelectedMember(member);
    setValue("role", getRoleFromMember(member));
    setIsEditModalOpen(true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(searchQuery);
    setCurrentPage(1);
  };

  const handleRemoveMember = async (memberId: string) => {
    if (!organization) return;

    setIsSaving(true);
    try {
      const response = await fetch(
        `/api/organizations/${organization.id}/members/${memberId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error al eliminar el miembro");
      }

      toast.success("Miembro eliminado correctamente");
      window.location.reload();
    } catch (error) {
      console.error("Error al eliminar miembro:", error);
      toast.error("Error al eliminar el miembro");
    } finally {
      setIsSaving(false);
    }
  };

  const isAdmin =
    memberships?.data?.find((m) => m.publicUserData?.userId === user?.id)
      ?.publicMetadata?.role === "admin_empresa";
  const isRecruiter =
    memberships?.data?.find((m) => m.publicUserData?.userId === user?.id)
      ?.publicMetadata?.role === "recruiter";

  console.log(memberships?.data);

  const handleLeaveOrganization = async () => {
    if (!organization) return;

    setIsSaving(true);
    try {
      const response = await fetch(
        `/api/organizations/${organization.id}/leave`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Error al abandonar la organización");
      }

      toast.success("Has abandonado la organización correctamente");
      router.push("/dashboard");
    } catch (error) {
      console.error("Error al abandonar la organización:", error);
      toast.error("Error al abandonar la organización");
    } finally {
      setIsSaving(false);
    }
  };

  if (!organization) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">No hay una organización seleccionada</p>
      </div>
    );
  }

  return (
    <div className="p-6 w-full overflow-hidden bg-base-light dark:bg-[#111827]">
      <Toaster position="top-right" />
      <div className="w-full max-w-7xl mx-auto mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-primary-light dark:text-white">
              Gestión del Equipo
            </h1>
            <p className="text-secondary-light dark:text-gray-300 mt-1">
              Administra los miembros de tu organización
            </p>
          </div>
          <div className="flex gap-2">
            {isAdmin && (
              <Dialog
                open={isInviteModalOpen}
                onOpenChange={setIsInviteModalOpen}
              >
                <DialogTrigger asChild>
                  <Button className="whitespace-nowrap bg-accent-light hover:bg-accent-light/90 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:text-white">
                    + Invitar miembro
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-section-light dark:bg-gray-800 border dark:border-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-primary-light dark:text-white">
                      Invitar nuevo miembro
                    </DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4 py-4"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary-light dark:text-white">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="correo@ejemplo.com"
                        className="bg-section-light dark:bg-gray-700 text-primary-light dark:text-white border-gray-200 dark:border-gray-600"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary-light dark:text-white">
                        Rol
                      </label>
                      <Select
                        value={selectedRole}
                        onValueChange={(value) =>
                          setValue("role", value as InviteFormData["role"])
                        }
                      >
                        <SelectTrigger className="bg-section-light dark:bg-gray-700 text-primary-light dark:text-white border-gray-200 dark:border-gray-600">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-section-light dark:bg-gray-700 border dark:border-gray-600">
                          <SelectItem
                            value="admin_empresa"
                            className="text-primary-light dark:text-white"
                          >
                            Administrador de Empresa
                          </SelectItem>
                          <SelectItem
                            value="recruiter"
                            className="text-primary-light dark:text-white"
                          >
                            Reclutador
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.role && (
                        <p className="text-sm text-red-500">
                          {errors.role.message}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      disabled={isSaving}
                      className="w-full bg-accent-light hover:bg-accent-light/90 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:text-white"
                    >
                      {isSaving ? "Enviando..." : "Enviar invitación"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            )}
            {isRecruiter && (
              <Button
                variant="outline"
                onClick={handleLeaveOrganization}
                disabled={isSaving}
                className="whitespace-nowrap text-red-500 hover:text-red-600 border-red-500 hover:border-red-600 dark:text-red-400 dark:hover:text-red-300 dark:border-red-700 dark:hover:border-red-600"
              >
                {isSaving ? "Abandonando..." : "Abandonar organización"}
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto mb-6">
        <form onSubmit={handleSearch} className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Buscar por nombre, email o rol..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-300 focus:ring-2 focus:ring-accent-light dark:focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <Button
            type="submit"
            className="h-11 px-6 bg-accent-light hover:bg-accent-light/90 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-medium shadow-sm hover:shadow-md transition-all duration-200"
          >
            Buscar
          </Button>
        </form>
        {searchTerm && (
          <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
            Mostrando {filteredMembers.length} resultados
          </p>
        )}
      </div>
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-[425px] bg-section-light dark:bg-gray-800 border dark:border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-primary-light dark:text-white">
              Editar rol de miembro
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-primary-light dark:text-white">
                Rol
              </label>
              <Select
                value={selectedRole}
                onValueChange={(value) => {
                  console.log("Rol seleccionado:", value);
                  setValue("role", value as InviteFormData["role"]);
                }}
              >
                <SelectTrigger className="bg-section-light dark:bg-gray-700 text-primary-light dark:text-white border-gray-200 dark:border-gray-600">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-section-light dark:bg-gray-700 border dark:border-gray-600">
                  <SelectItem
                    value="admin_empresa"
                    className="text-primary-light dark:text-white"
                  >
                    Administrador de Empresa
                  </SelectItem>
                  <SelectItem
                    value="recruiter"
                    className="text-primary-light dark:text-white"
                  >
                    Reclutador
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.role && (
                <p className="text-sm text-red-500">{errors.role.message}</p>
              )}
            </div>
            <Button
              onClick={handleUpdateRole}
              disabled={isSaving}
              className="w-full bg-accent-light hover:bg-accent-light/90 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:text-white"
            >
              {isSaving ? "Actualizando..." : "Actualizar rol"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="w-full max-w-7xl mx-auto dark:bg-[#111827]">
        <div className="rounded-lg border dark:border-gray-700 shadow-sm w-full bg-section-light dark:bg-gray-800">
          <div className="overflow-x-auto w-full">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-base-light dark:bg-gray-900 dark:border-gray-700">
                  <TableHead className="w-[300px] whitespace-nowrap text-primary-light dark:text-gray-200 font-semibold">
                    Usuario
                  </TableHead>
                  <TableHead className="hidden sm:table-cell whitespace-nowrap text-primary-light dark:text-gray-200 font-semibold">
                    Email
                  </TableHead>
                  <TableHead className="w-[120px] whitespace-nowrap text-primary-light dark:text-gray-200 font-semibold">
                    Rol
                  </TableHead>
                  <TableHead className="w-[120px] whitespace-nowrap text-primary-light dark:text-gray-200 font-semibold">
                    Estado
                  </TableHead>
                  {isAdmin && (
                    <TableHead className="w-[100px] whitespace-nowrap text-primary-light dark:text-gray-200 font-semibold">
                      Acciones
                    </TableHead>
                  )}
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedMembers.map((member: ExtendedMember) => (
                  <TableRow
                    key={member.id}
                    className="hover:bg-base-light dark:hover:bg-gray-700 transition-colors dark:border-gray-700"
                  >
                    <TableCell className="max-w-xs">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 relative">
                          <Image
                            className="rounded-full object-cover"
                            src={
                              member.publicUserData?.imageUrl ||
                              "/placeholder.png"
                            }
                            alt=""
                            fill
                            sizes="40px"
                          />
                        </div>
                        <div className="ml-4 overflow-hidden">
                          <div className="font-medium truncate text-primary-light dark:text-white">
                            {member.publicUserData?.firstName}{" "}
                            {member.publicUserData?.lastName}
                          </div>
                          <div className="text-sm text-secondary-light dark:text-gray-300 sm:hidden truncate">
                            {member.publicUserData?.identifier}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell truncate max-w-xs text-secondary-light dark:text-gray-300">
                      {member.publicUserData?.identifier}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 text-xs rounded-full whitespace-nowrap
                        ${(() => {
                          const role = getRoleFromMember(member);
                          switch (role) {
                            case "admin_empresa":
                              return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
                            case "recruiter":
                              return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
                            default:
                              return "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300";
                          }
                        })()}`}
                      >
                        {roleLabels[getRoleFromMember(member)]}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 whitespace-nowrap">
                        Activo
                      </span>
                    </TableCell>
                    {isAdmin && (
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className={`text-brand-light hover:text-brandHover-light dark:text-indigo-400 dark:hover:text-indigo-300 p-2
                                    ${
                                      member.id === user?.id
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                    }`}
                                  disabled={member.id === user?.id}
                                  onClick={() => handleEditClick(member)}
                                >
                                  <Pencil className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent className="bg-gray-900 text-white">
                                <p>Editar rol</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          {member.id !== user?.id &&
                            member.publicUserData?.userId && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 p-2"
                                      onClick={() => {
                                        if (member.publicUserData?.userId) {
                                          handleRemoveMember(
                                            member.publicUserData.userId
                                          );
                                        }
                                      }}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent className="bg-gray-900 text-white">
                                    <p>Eliminar miembro</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                        </div>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="bg-section-light dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
            >
              Anterior
            </Button>
            <span className="text-primary-light dark:text-white">
              Página {currentPage} de {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="bg-section-light dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
            >
              Siguiente
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
