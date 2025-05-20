import { Button } from "@/components/ui/Button";

export default function Benefits() {
  const recruiterBenefits = [
    {
      title: "Automatización inteligente",
      description: "Reduce tareas manuales y optimiza el proceso de selección",
    },
    {
      title: "Gestión centralizada",
      description: "Toda la información de candidatos en un solo lugar",
    },
    {
      title: "Procesos personalizables",
      description: "Adapta el flujo de trabajo a las necesidades de tu empresa",
    },
    {
      title: "Colaboración en equipo",
      description: "Facilita la comunicación y toma de decisiones",
    },
    {
      title: "Análisis y reportes",
      description: "Métricas detalladas para mejorar tu proceso de selección",
    },
  ];

  const candidateBenefits = [
    {
      title: "Seguimiento de postulaciones",
      description: "Mantente informado del estado de tus aplicaciones",
    },
    {
      title: "Perfil profesional destacado",
      description: "Muestra tus habilidades y experiencia de forma efectiva",
    },
    {
      title: "Preguntas personalizadas",
      description: "Prepárate mejor para cada proceso de selección",
    },
    {
      title: "Feedback constructivo",
      description: "Recibe retroalimentación útil para tu desarrollo",
    },
    {
      title: "Oportunidades relevantes",
      description: "Encuentra ofertas que coincidan con tu perfil",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            ¿Para quién es TalentSync?
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Una plataforma diseñada para satisfacer las necesidades tanto de
            empresas como de candidatos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="bg-indigo-500/10 dark:bg-indigo-400/10 py-4 px-6">
              <h3 className="text-2xl font-bold text-indigo-500 dark:text-indigo-400">
                Para empresas
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {recruiterBenefits.map((benefit, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-500 dark:text-indigo-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-800 dark:text-gray-100">
                        {benefit.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button className="w-full bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-300">
                  Empieza a reclutar
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="bg-cyan-400/10 dark:bg-cyan-300/10 py-4 px-6">
              <h3 className="text-2xl font-bold text-cyan-400 dark:text-cyan-300">
                Para candidatos
              </h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {candidateBenefits.map((benefit, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-cyan-400 dark:text-cyan-300"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-800 dark:text-gray-100">
                        {benefit.title}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button className="w-full bg-cyan-400 hover:bg-cyan-500 dark:bg-cyan-300 dark:hover:bg-cyan-200 text-white">
                  Crea tu perfil
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
