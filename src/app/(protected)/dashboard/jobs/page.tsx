"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  BriefcaseIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/Button";
import RecruitmentLoading from "@/components/ui/RecruitmentLoading";
import { useOrganization } from "@clerk/nextjs";
import Link from "next/link";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  description: string;
  createdAt: string;
  jobType:
    | "FULL_TIME"
    | "PART_TIME"
    | "FREELANCE"
    | "CONTRACT"
    | "INTERNSHIP"
    | "OTHER";
  modality: "REMOTE" | "ON_SITE" | "HYBRID";
  recruiter: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    profileImageUrl: string;
    bio: string;
  } | null;
}

const JobCard = ({ job }: { job: Job }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const getModalityLabel = (modality: Job["modality"]) => {
    const labels: Record<Job["modality"], string> = {
      REMOTE: "Remoto",
      ON_SITE: "Presencial",
      HYBRID: "Híbrido",
    };
    return labels[modality];
  };

  const getJobTypeLabel = (jobType: Job["jobType"]) => {
    const labels: Record<Job["jobType"], string> = {
      FULL_TIME: "Tiempo completo",
      PART_TIME: "Medio tiempo",
      FREELANCE: "Freelance",
      CONTRACT: "Contrato",
      INTERNSHIP: "Pasantía",
      OTHER: "Otro",
    };
    return labels[jobType];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "short",
    }).format(date);
  };

  return (
    <div
      className={`bg-white cursor-pointer dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full w-80 ${
        isHovered ? "transform scale-[1.02]" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        router.push(`/dashboard/jobs/${job.id}`);
      }}
    >
      <div
        className={`h-1 w-full ${
          job.modality === "REMOTE"
            ? "bg-emerald-500"
            : job.modality === "ON_SITE"
            ? "bg-amber-500"
            : "bg-indigo-500"
        }`}
      ></div>

      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <BriefcaseIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">
              {job.company}
            </span>
          </div>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200">
            {getJobTypeLabel(job.jobType)}
          </span>
        </div>

        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
          {job.title}
        </h2>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <MapPinIcon className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm truncate">{job.location}</span>
          </div>
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              job.modality === "REMOTE"
                ? "bg-emerald-50 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-200"
                : job.modality === "ON_SITE"
                ? "bg-amber-50 dark:bg-amber-900 text-amber-700 dark:text-amber-200"
                : "bg-indigo-50 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200"
            }`}
          >
            {getModalityLabel(job.modality)}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {job.description}
        </p>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-300">
            <CurrencyDollarIcon className="h-5 w-5" />
            <span className="font-semibold">
              {job.salaryMin} - {job.salaryMax}
              <span className="text-xs text-gray-500 dark:text-gray-400">
                (USD)
              </span>
            </span>
          </div>
          <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs">
            <CalendarIcon className="h-4 w-4" />
            <span>{formatDate(job.createdAt)}</span>
          </div>
        </div>
      </div>

      {job.recruiter && (
        <div className="px-6 py-4 bg-gradient-to-r from-indigo-50 to-sky-50 dark:from-gray-800 dark:to-gray-900 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={job.recruiter.profileImageUrl || "/default-avatar.png"}
                alt={`${job.recruiter.firstName} ${job.recruiter.lastName}`}
                width={32}
                height={32}
                className="rounded-full border-2 border-white dark:border-gray-700 shadow-sm"
              />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-white">
                  {job.recruiter.firstName} {job.recruiter.lastName}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Reclutador
                </p>
              </div>
            </div>
            <span className="text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors">
              <ChevronRightIcon className="h-5 w-5" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default function JobsPage() {
  const { organization } = useOrganization();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobsearch/org");
        if (!response.ok) {
          throw new Error("Error al cargar los trabajos");
        }
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (!organization) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 dark:text-gray-400">
          No hay una organización seleccionada
        </p>
      </div>
    );
  }

  if (isLoading) {
    return <RecruitmentLoading />;
  }

  if (jobs.length === 0) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-6 text-center">
        <BriefcaseIcon className="h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          No hay ofertas de trabajo
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Crea tu primera oferta de trabajo para comenzar a reclutar talento
        </p>
        <Link
          href="/dashboard/jobs/create"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Crear oferta
        </Link>
      </div>
    );
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 ">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Ofertas de trabajo
          </h1>
          <Button
            onClick={() => router.push("/dashboard/jobs/create")}
            className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white"
          >
            + Crear oferta
          </Button>
        </div>
        <div className="mx-auto flex justify-center flex-wrap gap-8">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
}
