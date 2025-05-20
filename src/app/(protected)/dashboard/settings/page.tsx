"use client";

import { useOrganization, useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast, { Toaster } from "react-hot-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { useRouter } from "next/navigation";
import RecruitmentLoading from "@/components/ui/RecruitmentLoading";
import { PricingTable } from "@clerk/nextjs";

const userProfileSchema = z.object({
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  phone: z.string().optional(),
  bio: z
    .string()
    .max(500, "La biografía no puede exceder los 500 caracteres")
    .optional(),
});

const organizationSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  description: z
    .string()
    .max(1000, "La descripción no puede exceder los 1000 caracteres")
    .optional(),
  website: z.string().url("Debe ser una URL válida").optional(),
  industry: z.string().optional(),
  size: z.string().optional(),
});

type UserProfileFormData = z.infer<typeof userProfileSchema>;
type OrganizationFormData = z.infer<typeof organizationSchema>;

export default function SettingsPage() {
  const router = useRouter();
  const { user } = useUser();
  const { organization, membership } = useOrganization();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  const isAdmin = membership?.publicMetadata?.role === "admin_empresa";
  const isRecruiter = membership?.publicMetadata?.role === "recruiter";

  const userForm = useForm<UserProfileFormData>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      phone: user?.phoneNumbers[0]?.phoneNumber || "",
      bio: (user?.publicMetadata?.bio as string) || "",
    },
  });

  useEffect(() => {
    if (user) {
      userForm.reset({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        phone: user.phoneNumbers[0]?.phoneNumber || "",
        bio: (user.publicMetadata?.bio as string) || "",
      });
    }
  }, [user, userForm]);

  const orgForm = useForm<OrganizationFormData>({
    resolver: zodResolver(organizationSchema),
    defaultValues: {
      name: organization?.name || "",
      description: (organization?.publicMetadata?.description as string) || "",
      website: (organization?.publicMetadata?.website as string) || "",
      industry: (organization?.publicMetadata?.industry as string) || "",
      size: (organization?.publicMetadata?.size as string) || "",
    },
  });

  useEffect(() => {
    if (organization) {
      orgForm.reset({
        name: organization.name || "",
        description: (organization.publicMetadata?.description as string) || "",
        website: (organization.publicMetadata?.website as string) || "",
        industry: (organization.publicMetadata?.industry as string) || "",
        size: (organization.publicMetadata?.size as string) || "",
      });
    }
  }, [organization, orgForm]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (user && organization) {
          setIsLoading(false);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
        setIsLoading(false);
      }
    };

    fetchData();
  }, [user, organization]);

  useEffect(() => {
    const checkSubscription = async () => {
      if (organization) {
        const subscriptions = await organization.getSubscriptions();
        setHasSubscription(subscriptions.data.length > 0);
      }
    };
    checkSubscription();
  }, [organization]);

  const onUserProfileSubmit = async (data: UserProfileFormData) => {
    setIsSaving(true);
    try {
      if (!user) {
        throw new Error("No hay usuario");
      }

      const response = await fetch(`/api/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          bio: data.bio,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el usuario");
      }

      toast.success("Perfil actualizado correctamente");
    } catch (error) {
      toast.error("Error al actualizar el perfil");
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  const onOrganizationSubmit = async (data: OrganizationFormData) => {
    if (!isAdmin) return;

    setIsSaving(true);
    try {
      await organization?.update({
        name: data.name,
      });

      await fetch(`/api/organizations/${organization?.id}/metadata`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          publicMetadata: {
            description: data.description,
            website: data.website,
            industry: data.industry,
            size: data.size,
          },
        }),
      });

      toast.success("Organización actualizada correctamente");
    } catch (error) {
      toast.error("Error al actualizar la organización");
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleLeaveOrganization = async () => {
    if (!organization) return;

    setIsLeaving(true);
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
      router.push("/dashboard/home");
    } catch (error) {
      console.error("Error al abandonar la organización:", error);
      toast.error("Error al abandonar la organización");
    } finally {
      setIsLeaving(false);
    }
  };

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

  if (!organization) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 dark:text-gray-300">
          No hay una organización seleccionada
        </p>
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
              Configuración
            </h1>
            <p className="text-secondary-light dark:text-gray-300 mt-1">
              Administra tu cuenta y preferencias
            </p>
          </div>
          {isRecruiter && (
            <Button
              variant="outline"
              onClick={handleLeaveOrganization}
              disabled={isLeaving}
              className="whitespace-nowrap text-red-500 hover:text-red-600 border-red-500 hover:border-red-600 dark:text-red-400 dark:hover:text-red-300 dark:border-red-700 dark:hover:border-red-600"
            >
              {isLeaving ? "Abandonando..." : "Abandonar organización"}
            </Button>
          )}
        </div>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="dark:bg-gray-800 dark:border-gray-700">
          <TabsTrigger
            value="profile"
            className="dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white dark:text-gray-300"
          >
            Perfil Personal
          </TabsTrigger>
          {isAdmin && (
            <TabsTrigger
              value="organization"
              className="dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white dark:text-gray-300"
            >
              Organización
            </TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="profile">
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="dark:text-white">
                Información Personal
              </CardTitle>
              <CardDescription className="dark:text-gray-300">
                Actualiza tu información personal y preferencias
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={userForm.handleSubmit(onUserProfileSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="dark:text-white">
                      Nombre
                    </Label>
                    <Input
                      id="firstName"
                      {...userForm.register("firstName")}
                      className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-indigo-500"
                    />
                    {userForm.formState.errors.firstName && (
                      <p className="text-sm text-red-500 dark:text-red-400">
                        {userForm.formState.errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="dark:text-white">
                      Apellido
                    </Label>
                    <Input
                      id="lastName"
                      {...userForm.register("lastName")}
                      className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-indigo-500"
                    />
                    {userForm.formState.errors.lastName && (
                      <p className="text-sm text-red-500 dark:text-red-400">
                        {userForm.formState.errors.lastName.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="dark:text-white">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      {...userForm.register("phone")}
                      className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-indigo-500"
                    />
                    {userForm.formState.errors.phone && (
                      <p className="text-sm text-red-500 dark:text-red-400">
                        {userForm.formState.errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="bio" className="dark:text-white">
                      Biografía
                    </Label>
                    <Textarea
                      id="bio"
                      {...userForm.register("bio")}
                      className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-indigo-500"
                      rows={4}
                    />
                    {userForm.formState.errors.bio && (
                      <p className="text-sm text-red-500 dark:text-red-400">
                        {userForm.formState.errors.bio.message}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSaving}
                  className="dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:text-white"
                >
                  {isSaving ? "Guardando..." : "Guardar cambios"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {isAdmin && (
          <TabsContent value="organization">
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="dark:text-white">
                  Información de la Organización
                </CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Actualiza la información de tu organización
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  onSubmit={orgForm.handleSubmit(onOrganizationSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="orgName" className="dark:text-white">
                        Nombre de la Organización
                      </Label>
                      <Input
                        id="orgName"
                        {...orgForm.register("name")}
                        className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-indigo-500"
                      />
                      {orgForm.formState.errors.name && (
                        <p className="text-sm text-red-500 dark:text-red-400">
                          {orgForm.formState.errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website" className="dark:text-white">
                        Sitio Web
                      </Label>
                      <Input
                        id="website"
                        {...orgForm.register("website")}
                        className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-indigo-500"
                      />
                      {orgForm.formState.errors.website && (
                        <p className="text-sm text-red-500 dark:text-red-400">
                          {orgForm.formState.errors.website.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="industry" className="dark:text-white">
                        Industria
                      </Label>
                      <select
                        id="industry"
                        {...orgForm.register("industry")}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      >
                        <option value="">Selecciona un sector</option>
                        <option value="tecnologia">Tecnología</option>
                        <option value="finanzas">Finanzas</option>
                        <option value="salud">Salud</option>
                        <option value="educacion">Educación</option>
                        <option value="retail">Retail</option>
                        <option value="manufactura">Manufactura</option>
                        <option value="servicios">Servicios</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="size" className="dark:text-white">
                        Tamaño de la Empresa
                      </Label>
                      <select
                        id="size"
                        {...orgForm.register("size")}
                        className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                      >
                        <option value="">Selecciona un tamaño</option>
                        <option value="1-10">1-10 empleados</option>
                        <option value="11-50">11-50 empleados</option>
                        <option value="51-200">51-200 empleados</option>
                        <option value="201-500">201-500 empleados</option>
                        <option value="501-1000">501-1000 empleados</option>
                        <option value="1000+">Más de 1000 empleados</option>
                      </select>
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="description" className="dark:text-white">
                        Descripción
                      </Label>
                      <Textarea
                        id="description"
                        {...orgForm.register("description")}
                        className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-indigo-500"
                        rows={4}
                      />
                      {orgForm.formState.errors.description && (
                        <p className="text-sm text-red-500 dark:text-red-400">
                          {orgForm.formState.errors.description.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSaving}
                    className="dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:text-white"
                  >
                    {isSaving ? "Guardando..." : "Guardar cambios"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="dark:bg-gray-800 dark:border-gray-700 mt-6">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="dark:text-white">
                      Plan de Suscripción
                    </CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      {hasSubscription
                        ? "Gestiona tu suscripción actual"
                        : "Actualiza a un plan premium para desbloquear todas las funciones"}
                    </CardDescription>
                  </div>
                  {hasSubscription ? (
                    <Button
                      variant="outline"
                      onClick={() => setShowPricing(true)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      Cambiar Plan
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setShowPricing(true)}
                      className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
                    >
                      Actualizar a Premium
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {showPricing ? (
                  <div>
                    <PricingTable forOrganizations />
                    <div className="mt-4 flex justify-end">
                      <Button
                        variant="outline"
                        onClick={() => setShowPricing(false)}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        Cerrar
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {hasSubscription ? "Plan Premium" : "Plan Gratuito"}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {hasSubscription
                            ? "Acceso completo a todas las funciones"
                            : "Funciones básicas"}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {hasSubscription ? "$9.99/mes" : "Gratis"}
                        </p>
                        {hasSubscription && (
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Renovación automática
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
