"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import {
  ArrowLeft,
  Building2,
  Clock,
  MapPin,
  Briefcase,
  DollarSign,
  Mail,
  Calendar,
  Share2,
  Bookmark,
} from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import toast from "react-hot-toast";
import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useUser, useOrganization } from "@clerk/nextjs";
import RecruitmentLoading from "@/components/ui/RecruitmentLoading";

type JobDetails = {
  id: string;
  title: string;
  company: string;
  description: string;
  location: string;
  modality: string;
  salaryMin: number;
  salaryMax: number;
  jobType: string;
  createdAt: string;
  createdByClerkId: string;
  recruiter: {
    id: string;
    firstName: string;
    lastName: string;
    email: string | null;
    profileImageUrl: string | null;
    bio: string;
    role?: string;
  };
};

export default function JobDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useUser();
  const { memberships } = useOrganization({
    memberships: {
      infinite: true,
    },
  });
  const [job, setJob] = useState<JobDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [canEdit, setCanEdit] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`/api/jobsearch/${params.id}`);
        if (!response.ok) {
          if (response.status === 404) {
            router.push("/dashboard/jobs");
            toast.error("Oferta no encontrada");
            return;
          }
          throw new Error("Error al cargar la oferta");
        }
        const data = await response.json();
        setJob(data);
        const isOwner = data.createdByClerkId === user?.id;
        const isAdmin =
          memberships?.data?.find((m) => m.publicUserData?.userId === user?.id)
            ?.publicMetadata?.role === "admin_empresa";
        setCanEdit(isOwner || isAdmin);
      } catch (error) {
        console.error("Error:", error);
        toast.error("Error al cargar la oferta");
      } finally {
        setIsLoading(false);
      }
    };

    if (params.id) {
      fetchJob();
    }
  }, [params.id, router, user?.id, memberships?.data]);

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const response = await fetch(`/api/jobsearch/${params.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar la oferta");
      }

      toast.success("Oferta eliminada correctamente");
      router.push("/dashboard/jobs");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error al eliminar la oferta");
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return <RecruitmentLoading message="Cargando oferta..." />;
  }

  if (!job) {
    return null;
  }

  const getModalityLabel = (modality: string) => {
    const labels: Record<string, string> = {
      REMOTE: "Remoto",
      ON_SITE: "Presencial",
      HYBRID: "Híbrido",
    };
    return labels[modality] || modality;
  };

  const getJobTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      FULL_TIME: "Tiempo completo",
      PART_TIME: "Tiempo parcial",
      FREELANCE: "Freelance",
      CONTRACT: "Contrato",
      INTERNSHIP: "Prácticas",
      OTHER: "Otro",
    };
    return labels[type] || type;
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header de navegación */}
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="group mb-4 transition-all hover:bg-indigo-50 dark:hover:bg-gray-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
            <span className="group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              Volver
            </span>
          </Button>
        </div>

        {/* Cabecera de la oferta */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                {job.title}
              </h1>
              <div className="flex items-center text-gray-600 dark:text-gray-300">
                <Building2 className="h-5 w-5 mr-2 text-indigo-500 dark:text-indigo-400" />
                <span className="font-medium">{job.company}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                className="border-indigo-100 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-700"
              >
                <Bookmark className="h-4 w-4 mr-2 text-indigo-500 dark:text-indigo-400" />
                Guardar
              </Button>
              <Button
                variant="outline"
                className="border-indigo-100 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-700"
              >
                <Share2 className="h-4 w-4 mr-2 text-indigo-500 dark:text-indigo-400" />
                Compartir
              </Button>
            </div>
          </div>

          {/* Datos principales */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="flex items-center p-3 bg-indigo-50 dark:bg-gray-700 rounded-lg">
              <MapPin className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-3" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Ubicación
                </p>
                <p
                  className="font-medium text-gray-800 dark:text-gray-200 truncate"
                  title={job.location}
                >
                  {job.location}
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-indigo-50 dark:bg-gray-700 rounded-lg">
              <Briefcase className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-3" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Tipo</p>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  {getJobTypeLabel(job.jobType)}
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-indigo-50 dark:bg-gray-700 rounded-lg">
              <Clock className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-3" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Modalidad
                </p>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  {getModalityLabel(job.modality)}
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-indigo-50 dark:bg-gray-700 rounded-lg">
              <DollarSign className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-3" />
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Salario
                </p>
                <p
                  className="font-medium text-gray-800 dark:text-gray-200 truncate"
                  title={
                    job.salaryMin && job.salaryMax
                      ? `${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}`
                      : "No especificado"
                  }
                >
                  {job.salaryMin && job.salaryMax
                    ? `${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}`
                    : "No especificado"}
                  <span className="text-xs">(USD)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Fecha de publicación */}
          <div className="mt-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-2" />
            <span>
              Publicado el{" "}
              {format(new Date(job.createdAt), "d 'de' MMMM 'de' yyyy", {
                locale: es,
              })}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna principal */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 mb-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4 flex items-center">
                <span className="inline-block w-1 h-6 bg-indigo-500 mr-3 rounded"></span>
                Descripción del puesto
              </h2>

              <div className="prose dark:prose-invert max-w-none">
                <div className="whitespace-pre-wrap break-words text-gray-700 dark:text-gray-300 leading-relaxed">
                  {job.description}
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            {canEdit && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() =>
                      router.push(`/dashboard/jobs/edit/${job.id}`)
                    }
                    className="w-full sm:w-auto hover:bg-indigo-50 dark:hover:bg-gray-700 border-indigo-200 dark:border-gray-700"
                  >
                    Editar oferta
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="default"
                        className="w-full sm:w-auto bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"
                        disabled={isDeleting}
                      >
                        {isDeleting ? "Eliminando..." : "Eliminar oferta"}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="bg-white dark:bg-gray-800">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-gray-900 dark:text-white">
                          ¿Estás seguro?
                        </AlertDialogTitle>
                        <AlertDialogDescription className="text-gray-500 dark:text-gray-300">
                          Esta acción no se puede deshacer. Se eliminará
                          permanentemente la oferta de trabajo.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">
                          Cancelar
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={handleDelete}
                          className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white"
                        >
                          Eliminar
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            )}
          </div>

          {/* Columna lateral */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                <span className="inline-block w-1 h-6 bg-indigo-500 mr-3 rounded"></span>
                Reclutador
              </h2>

              <div className="flex items-center space-x-4 mb-6">
                <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-indigo-100 dark:border-gray-700 bg-indigo-50 dark:bg-gray-700 flex-shrink-0">
                  {job.recruiter.profileImageUrl ? (
                    <Image
                      src={job.recruiter.profileImageUrl}
                      alt={`${job.recruiter.firstName} ${job.recruiter.lastName}`}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-xl font-bold text-indigo-500 dark:text-indigo-400">
                      {job.recruiter.firstName[0]}
                      {job.recruiter.lastName[0]}
                    </div>
                  )}
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">
                    {job.recruiter.firstName} {job.recruiter.lastName}
                  </h3>
                  {job.recruiter.email && (
                    <a
                      href={`mailto:${job.recruiter.email}`}
                      className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline flex items-center mt-1 truncate"
                      title={job.recruiter.email}
                    >
                      <Mail className="h-3 w-3 mr-1 flex-shrink-0" />
                      <span className="truncate">{job.recruiter.email}</span>
                    </a>
                  )}
                </div>
              </div>

              {job.recruiter.bio && (
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                    Biografía
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 italic break-words">
                    &quot;{job.recruiter.bio}&quot;
                  </p>
                </div>
              )}

              <div className="mt-8">
                <Button
                  variant="default"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-700"
                  onClick={() =>
                    (window.location.href = `mailto:${job.recruiter.email}`)
                  }
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contactar reclutador
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
