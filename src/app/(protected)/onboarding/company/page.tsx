"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useUser, useOrganizationList } from "@clerk/nextjs";

const companySchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  website: z.string().url("Ingresa una URL válida").optional(),
  description: z.string().optional(),
  industry: z.string().optional(),
  logo: z.any().optional(),
});

type CompanyFormData = z.infer<typeof companySchema>;

export default function OnboardingCompany() {
  const router = useRouter();
  const { user } = useUser();
  const { setActive } = useOrganizationList();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyFormData>({
    resolver: zodResolver(companySchema),
  });

  const onSubmit = async (data: CompanyFormData) => {
    if (!user) return;

    try {
      setIsLoading(true);
      const response = await fetch("/api/organizations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          userId: user.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Error creating organization");
      }

      const organization = await response.json();

      if (setActive) {
        await setActive({ organization: organization.id });
      }
      router.push("/dashboard/home?welcome=true");
    } catch (error) {
      console.error("Error al crear la organización:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Configura tu empresa
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Completa la información para comenzar a buscar talento
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-8 py-6 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                Nombre de la empresa *
              </label>
              <input
                type="text"
                {...register("name")}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                placeholder="Ej: TalentSync"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                Sitio web o red social
              </label>
              <input
                type="url"
                {...register("website")}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                placeholder="https://www.ejemplo.com"
              />
              {errors.website && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.website.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                Descripción
              </label>
              <textarea
                {...register("description")}
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                placeholder="Cuéntanos sobre tu empresa..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-800 dark:text-gray-100 mb-2">
                Sector o industria
              </label>
              <select
                {...register("industry")}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
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

            <div className="flex justify-end pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-colors duration-200"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creando...
                  </>
                ) : (
                  "Crear empresa"
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 flex items-center justify-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 dark:bg-indigo-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}
