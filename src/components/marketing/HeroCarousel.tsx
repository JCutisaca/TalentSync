"use client";
import { Button } from "@/components/ui/Button";
import { useState, useEffect } from "react";

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const RecruiterView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-gray-100 leading-tight mb-4">
            Encuentra y conecta talento de manera fácil con{" "}
            <span className="text-indigo-500 dark:text-indigo-400">
              TalentSync
            </span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            La forma más eficiente de gestionar talento para tu equipo
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-300 text-white"
          >
            Empieza ahora
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-indigo-500 text-indigo-500 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-indigo-400/10"
          >
            Ver cómo funciona
          </Button>
        </div>

        <div className="flex items-center">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700"
              />
            ))}
          </div>
          <div className="ml-4">
            <div className="flex items-center">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-800 dark:text-gray-100 font-medium">
                4.9/5
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              De más de 500 empresas satisfechas
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-indigo-500/20 dark:from-cyan-300/20 dark:to-indigo-400/20 rounded-lg transform -rotate-3"></div>
        <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg p-6 transform rotate-3">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                Dashboard de reclutamiento
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Vista general de candidatos
              </p>
            </div>
            <div className="bg-indigo-500 dark:bg-indigo-400 text-white text-xs px-2 py-1 rounded-full">
              PRO
            </div>
          </div>

          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="p-3 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div className="ml-3">
                    <div className="font-medium text-gray-800 dark:text-gray-100">
                      Candidato {i + 1}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Desarrollador Full Stack
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-1 rounded-md bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button className="p-1 rounded-md bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Mostrando 3 de 24 candidatos
            </span>
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === 0
                      ? "bg-indigo-500 dark:bg-indigo-400"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CandidateView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-gray-100 leading-tight mb-4">
            Impulsa tu carrera profesional con{" "}
            <span className="text-cyan-400 dark:text-cyan-300">TalentSync</span>
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            Conecta con las mejores oportunidades laborales para tu perfil
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-cyan-400 hover:bg-cyan-500 dark:bg-cyan-300 dark:hover:bg-cyan-200 text-white"
          >
            Crea tu perfil
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-50 dark:border-cyan-300 dark:text-cyan-300 dark:hover:bg-cyan-300/10"
          >
            Explorar ofertas
          </Button>
        </div>

        <div className="flex items-center">
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-gray-200 dark:bg-gray-700"
              />
            ))}
          </div>
          <div className="ml-4">
            <div className="flex items-center">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-800 dark:text-gray-100 font-medium">
                4.8/5
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              De más de 12,000 profesionales
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-400/20 dark:from-indigo-400/20 dark:to-cyan-300/20 rounded-lg transform -rotate-3"></div>
        <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg p-6 transform rotate-3">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                Perfil profesional destacado
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Vista de tu perfil público
              </p>
            </div>
            <div className="bg-cyan-400 dark:bg-cyan-300 text-white text-xs px-2 py-1 rounded-full">
              Premium
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="ml-4">
                <div className="font-semibold text-lg text-gray-800 dark:text-gray-100">
                  Ana García
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Desarrolladora Frontend Senior
                </div>
                <div className="flex items-center mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Madrid, España
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                  Habilidades destacadas
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  Top 10%
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "UI/UX", "Next.js", "Tailwind"].map(
                  (skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                Solicitudes recientes
              </span>
              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium text-gray-800 dark:text-gray-100">
                      Empresa Innovadora
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Lead Frontend Developer
                    </div>
                  </div>
                  <div className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full">
                    Nuevo
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Perfil completo al 85%
            </span>
            <div className="w-20 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-cyan-400 dark:bg-cyan-300"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-gray-800">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-cyan-400/10 dark:bg-cyan-300/10" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-500/10 dark:bg-indigo-400/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveIndex(0)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeIndex === 0
                  ? "bg-indigo-500 dark:bg-indigo-400 text-white"
                  : "bg-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
              }`}
            >
              Para Empresas
            </button>
            <button
              onClick={() => setActiveIndex(1)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeIndex === 1
                  ? "bg-cyan-400 dark:bg-cyan-300 text-white"
                  : "bg-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
              }`}
            >
              Para Candidatos
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            <div className="w-full flex-shrink-0 overflow-hidden">
              <RecruiterView />
            </div>
            <div className="w-full flex-shrink-0 overflow-hidden">
              <CandidateView />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index
                    ? "bg-indigo-500 dark:bg-indigo-400"
                    : "bg-gray-200 dark:bg-gray-700"
                }`}
                aria-label={`Ir a la diapositiva ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
