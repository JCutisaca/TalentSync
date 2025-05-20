export default function Testimonials() {
  const testimonials = [
    {
      content:
        "TalentSync ha revolucionado nuestra forma de reclutar. La automatización y el matching inteligente nos han permitido reducir el tiempo de contratación en un 60% y encontrar candidatos mejor calificados.",
      author: "María González",
      position: "Directora de RRHH",
      company: "Tech Innovations",
      avatar: "/avatars/maria.jpg",
    },
    {
      content:
        "Como candidato, TalentSync me ha facilitado enormemente la búsqueda de empleo. El seguimiento de postulaciones y el feedback personalizado han sido fundamentales para mi desarrollo profesional.",
      author: "Carlos Rodríguez",
      position: "Desarrollador Senior",
      company: "Startup Growth",
      avatar: "/avatars/carlos.jpg",
    },
    {
      content:
        "La colaboración entre departamentos nunca había sido tan fluida. Los formularios personalizables y la gestión centralizada nos permiten tomar mejores decisiones en equipo.",
      author: "Ana Martínez",
      position: "Talent Acquisition Manager",
      company: "Global Solutions",
      avatar: "/avatars/ana.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Empresas y profesionales están transformando su experiencia en el
            mundo del reclutamiento con TalentSync
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 text-amber-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0"></div>
                <div className="ml-4">
                  <div className="font-medium text-gray-800 dark:text-gray-100">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                Únete a más de 500 empresas que ya mejoraron su proceso de
                contratación
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                TalentSync está transformando la forma en que las empresas
                encuentran y conectan con el talento. Nuestros usuarios
                experimentan:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  60% menos tiempo en contratación
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  40% mejor calidad de contrataciones
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  85% más eficiencia en el proceso
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-500 dark:text-indigo-400 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  90% satisfacción de usuarios
                </li>
              </ul>
              <div className="flex flex-wrap gap-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-12 w-24 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center"
                  >
                    <span className="text-gray-400 dark:text-gray-500 text-sm">
                      Logo {i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="w-full sm:w-auto bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-300 text-white px-8 py-4 rounded-lg font-medium transition-colors">
                Ver casos de éxito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
