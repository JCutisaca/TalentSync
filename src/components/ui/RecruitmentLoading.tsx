import { useState, useEffect } from "react";

const RecruitmentLoading = ({
  message = "Preparando tu plataforma",
  submessage = "Cargando herramientas de reclutamiento",
}) => {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative z-10">
        <div className="relative bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-lg shadow-xl border border-white/20 p-8 w-80 sm:w-96 flex flex-col items-center justify-center overflow-hidden">
          <div className="relative w-24 h-24 mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900 dark:to-blue-800 shadow-inner" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="relative w-12 h-14 animate-pulse"
                style={{ animationDuration: "2s" }}
              >
                <div
                  className="absolute inset-0 bg-white dark:bg-slate-700 rounded shadow-md transform rotate-3 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute inset-0 bg-white dark:bg-slate-700 rounded shadow-md transform -rotate-3 animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <div className="absolute inset-0 bg-white dark:bg-slate-700 rounded shadow-md" />

                <div className="absolute top-3 left-2 right-2 h-1 bg-blue-200 dark:bg-blue-700 rounded-full" />
                <div className="absolute top-5 left-2 right-4 h-1 bg-blue-200 dark:bg-blue-700 rounded-full" />
                <div className="absolute top-7 left-2 right-3 h-1 bg-blue-200 dark:bg-blue-700 rounded-full" />
                <div className="absolute top-9 left-2 right-5 h-1 bg-blue-200 dark:bg-blue-700 rounded-full" />

                <div className="absolute -top-1 -right-1 w-4 h-6 bg-blue-400 dark:bg-blue-600 rounded-tr-md rounded-br-md transform rotate-12" />
              </div>
            </div>
            <svg
              className="absolute inset-0 w-full h-full animate-spin"
              style={{ animationDuration: "8s" }}
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeDasharray="8 6"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="mt-4 text-center">
            <p className="font-['Montserrat',_sans-serif] text-slate-700 dark:text-slate-200 text-lg font-medium">
              {message}
              {dots}
            </p>
            <p className="font-['Montserrat',_sans-serif] text-slate-500 dark:text-slate-400 text-xs mt-2 max-w-xs">
              {submessage}
            </p>
          </div>

          <div className="w-full mt-6 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
            <div className="h-full w-full absolute">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full absolute animate-loading-bar"
                style={{ width: "30%" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 w-full h-full">
            {Array.from({ length: 120 }).map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-blue-800" />
            ))}
          </div>
        </div>

        <div className="absolute top-1/4 -left-8 w-16 h-16 rounded-lg border-2 border-blue-200/20 dark:border-blue-500/20 transform rotate-12 opacity-30" />
        <div className="absolute bottom-1/3 -right-8 w-24 h-24 rounded-lg border-2 border-blue-200/20 dark:border-blue-500/20 transform -rotate-12 opacity-30" />
        <div className="absolute top-1/3 right-16 w-32 h-4 rounded-full bg-blue-200/10 dark:bg-blue-500/10 opacity-50" />
        <div className="absolute bottom-1/4 left-16 w-24 h-4 rounded-full bg-blue-200/10 dark:bg-blue-500/10 opacity-50" />
      </div>

      <div
        className="absolute top-1/4 left-1/4 w-8 h-8 text-blue-200/30 dark:text-blue-700/30 animate-float"
        style={{ animationDuration: "6s", animationDelay: "1s" }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
        </svg>
      </div>
      <div
        className="absolute top-2/3 right-1/3 w-6 h-6 text-blue-200/30 dark:text-blue-700/30 animate-float"
        style={{ animationDuration: "5s", animationDelay: "0.5s" }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
        </svg>
      </div>
      <div
        className="absolute bottom-1/4 left-1/3 w-7 h-7 text-blue-200/30 dark:text-blue-700/30 animate-float"
        style={{ animationDuration: "7s", animationDelay: "1.5s" }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        @keyframes loading-bar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RecruitmentLoading;
