"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const jobSchema = z.object({
  title: z.string().min(5, "El título debe tener al menos 5 caracteres"),
  company: z.string().min(2, "El nombre de la empresa es requerido"),
  description: z
    .string()
    .min(50, "La descripción debe tener al menos 50 caracteres"),
  location: z.string().min(2, "La ubicación es requerida"),
  modality: z.enum(["REMOTE", "ON_SITE", "HYBRID"], {
    required_error: "Selecciona una modalidad",
  }),
  salaryMin: z.string().optional(),
  salaryMax: z.string().optional(),
  jobType: z.enum(
    ["FULL_TIME", "PART_TIME", "FREELANCE", "CONTRACT", "INTERNSHIP", "OTHER"],
    {
      required_error: "Selecciona un tipo de trabajo",
    }
  ),
});

type JobFormData = z.infer<typeof jobSchema>;

export default function CreateJobPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      modality: "REMOTE",
      jobType: "FULL_TIME",
    },
  });

  const onSubmit = async (data: JobFormData) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/jobsearch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Error al crear la oferta");
      }

      toast.success("Oferta creada correctamente");
      router.push("/dashboard/jobs");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al crear la oferta");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg dark:bg-gray-800">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Crear nueva oferta
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-300">
          Completa el formulario para publicar una nueva oferta de trabajo
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-gray-700 dark:text-white">
              Título del puesto *
            </Label>
            <Input
              id="title"
              {...register("title")}
              placeholder="Ej: Desarrollador Frontend Senior"
              className="border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
            {errors.title && (
              <p className="text-sm text-red-500 dark:text-red-400">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company" className="text-gray-700 dark:text-white">
              Empresa *
            </Label>
            <Input
              id="company"
              {...register("company")}
              placeholder="Nombre de la empresa"
              className="border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
            {errors.company && (
              <p className="text-sm text-red-500 dark:text-red-400">
                {errors.company.message}
              </p>
            )}
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label
              htmlFor="description"
              className="text-gray-700 dark:text-white"
            >
              Descripción *
            </Label>
            <Textarea
              id="description"
              {...register("description")}
              rows={6}
              placeholder="Describe el puesto, responsabilidades y requisitos..."
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
            {errors.description && (
              <p className="text-sm text-red-500 dark:text-red-400">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-gray-700 dark:text-white">
              Ubicación *
            </Label>
            <Input
              id="location"
              {...register("location")}
              placeholder="Ej: Madrid, España"
              className="border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
            {errors.location && (
              <p className="text-sm text-red-500 dark:text-red-400">
                {errors.location.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="modality" className="text-gray-700 dark:text-white">
              Modalidad *
            </Label>
            <select
              id="modality"
              {...register("modality")}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            >
              <option value="REMOTE">Remoto</option>
              <option value="ON_SITE">Presencial</option>
              <option value="HYBRID">Híbrido</option>
            </select>
            {errors.modality && (
              <p className="text-sm text-red-500 dark:text-red-400">
                {errors.modality.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="salaryMin"
              className="text-gray-700 dark:text-white"
            >
              Salario mínimo
            </Label>
            <Input
              id="salaryMin"
              type="number"
              {...register("salaryMin")}
              placeholder="Ej: 30000"
              className="border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="salaryMax"
              className="text-gray-700 dark:text-white"
            >
              Salario máximo
            </Label>
            <Input
              id="salaryMax"
              type="number"
              {...register("salaryMax")}
              placeholder="Ej: 45000"
              className="border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-indigo-500 dark:focus:ring-indigo-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="jobType" className="text-gray-700 dark:text-white">
              Tipo de contrato *
            </Label>
            <select
              id="jobType"
              {...register("jobType")}
              className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            >
              <option value="FULL_TIME">Tiempo completo</option>
              <option value="PART_TIME">Tiempo parcial</option>
              <option value="CONTRACT">Contrato</option>
              <option value="FREELANCE">Freelance</option>
              <option value="INTERNSHIP">Internship</option>
              <option value="OTHER">Otro</option>
            </select>
            {errors.jobType && (
              <p className="text-sm text-red-500 dark:text-red-400">
                {errors.jobType.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            disabled={isLoading}
            className="border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-indigo-600 dark:bg-indigo-600 hover:bg-indigo-700 dark:hover:bg-indigo-700 text-white"
          >
            {isLoading ? "Creando..." : "Crear oferta"}
          </Button>
        </div>
      </form>
    </div>
  );
}
