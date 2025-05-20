import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden bg-section-light dark:bg-section-dark">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-accent-light/10 dark:bg-accent-dark/10" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-brand-light/10 dark:bg-brand-dark/10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary-light dark:text-primary-dark leading-tight mb-4">
                Encuentra y conecta talento de manera fácil con{" "}
                <span className="text-brand-light dark:text-brand-dark">
                  TalentSync
                </span>
              </h1>
              <p className="text-xl text-secondary-light dark:text-secondary-dark">
                La forma más eficiente de gestionar talento para tu equipo
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">Empieza ahora</Button>
              <Button size="lg" variant="outline">
                Ver cómo funciona
              </Button>
            </div>

            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-section-light dark:border-section-dark bg-gray-300 dark:bg-gray-600"
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
                  <span className="ml-2 text-primary-light dark:text-primary-dark font-medium">
                    4.9/5
                  </span>
                </div>
                <p className="text-sm text-secondary-light dark:text-secondary-dark">
                  De más de 500 empresas satisfechas
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light/20 to-brand-light/20 dark:from-accent-dark/20 dark:to-brand-dark/20 rounded-lg transform -rotate-3"></div>
            <div className="relative bg-section-light dark:bg-section-dark border border-border-light dark:border-border-dark shadow-lg rounded-lg p-6 transform rotate-3">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-semibold text-primary-light dark:text-primary-dark">
                    Dashboard de reclutamiento
                  </h3>
                  <p className="text-sm text-secondary-light dark:text-secondary-dark">
                    Vista general de candidatos
                  </p>
                </div>
                <div className="bg-brand-light dark:bg-brand-dark text-white text-xs px-2 py-1 rounded-full">
                  PRO
                </div>
              </div>

              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="p-3 bg-base-light dark:bg-base-dark rounded-md border border-border-light dark:border-border-dark flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                      <div className="ml-3">
                        <div className="font-medium text-primary-light dark:text-primary-dark">
                          Candidato {i + 1}
                        </div>
                        <div className="text-xs text-secondary-light dark:text-secondary-dark">
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
                <span className="text-xs text-secondary-light dark:text-secondary-dark">
                  Mostrando 3 de 24 candidatos
                </span>
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i === 0
                          ? "bg-brand-light dark:bg-brand-dark"
                          : "bg-border-light dark:bg-border-dark"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
