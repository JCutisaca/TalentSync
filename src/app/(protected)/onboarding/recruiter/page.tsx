"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const recruiterSchema = z.object({
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Número de teléfono inválido"),
  position: z.string().min(3, "El cargo debe tener al menos 3 caracteres"),
  bio: z.string().optional(),
});

type RecruiterFormData = z.infer<typeof recruiterSchema>;

export default function RecruiterOnboarding() {
  const router = useRouter();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecruiterFormData>({
    resolver: zodResolver(recruiterSchema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
    },
  });

  const onSubmit = async (data: RecruiterFormData) => {
    setIsLoading(true);

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
          publicMetadata: {
            phone: data.phone,
            position: data.position,
            bio: data.bio,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el usuario");
      }

      toast.success("Perfil completado exitosamente");
      router.push("/dashboard/home");
    } catch (error) {
      console.error("Error al guardar el perfil:", error);
      toast.error("Error al guardar el perfil");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Completa tu perfil
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Cuéntanos más sobre ti para personalizar tu experiencia
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nombre</Label>
              <Input
                id="firstName"
                {...register("firstName")}
                className="bg-white dark:bg-gray-900"
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Apellido</Label>
              <Input
                id="lastName"
                {...register("lastName")}
                className="bg-white dark:bg-gray-900"
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1234567890"
              {...register("phone")}
              className="bg-white dark:bg-gray-900"
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="position">Cargo</Label>
            <Input
              id="position"
              placeholder="Ej: Reclutador Senior"
              {...register("position")}
              className="bg-white dark:bg-gray-900"
            />
            {errors.position && (
              <p className="text-sm text-red-500">{errors.position.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Biografía</Label>
            <Textarea
              id="bio"
              placeholder="Cuéntanos sobre tu experiencia y especialidades..."
              {...register("bio")}
              className="min-h-[100px] bg-white dark:bg-gray-900"
            />
            {errors.bio && (
              <p className="text-sm text-red-500">{errors.bio.message}</p>
            )}
          </div>

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/dashboard/home")}
              className="bg-white dark:bg-gray-900"
            >
              Omitir por ahora
            </Button>
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-accent-light hover:bg-accent-light/90 dark:bg-accent-dark dark:hover:bg-accent-dark/90"
            >
              {isLoading ? "Guardando..." : "Completar perfil"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
