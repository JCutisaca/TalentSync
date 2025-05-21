"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useOrganization, useOrganizationList, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/Button";
import toast from "react-hot-toast";
import { SignUp } from "@clerk/nextjs";
import RecruitmentLoading from "@/components/ui/RecruitmentLoading";

export default function OnboardingPage() {
  return (
    <Suspense fallback={<RecruitmentLoading />}>
      <OnboardingContent />
    </Suspense>
  );
}

function OnboardingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isLoaded: isUserLoaded } = useUser();
  const { organization, isLoaded: isOrgLoaded } = useOrganization();
  const { userMemberships, isLoaded: isOrgListLoaded } = useOrganizationList();
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const handleInvitation = async () => {
      if (!isUserLoaded || !isOrgLoaded || !isOrgListLoaded) {
        return;
      }

      const ticket = searchParams.get("__clerk_ticket");
      const status = searchParams.get("__clerk_status");

      if (!ticket || status !== "sign_up") {
        router.push("/dashboard/home");
        return;
      }

      if (organization) {
        toast.success("¡Bienvenido a la organización!");
        router.push("/dashboard/home");
        return;
      }

      if (userMemberships.data.length > 0) {
        toast.error(
          "Ya perteneces a otra organización. Debes abandonarla antes de unirte a esta."
        );
        router.push("/dashboard/home");
        return;
      }
    };

    handleInvitation();
  }, [
    isUserLoaded,
    isOrgLoaded,
    isOrgListLoaded,
    organization,
    router,
    searchParams,
    userMemberships,
  ]);

  const handleAcceptInvitation = async () => {
    setIsProcessing(true);
    try {
      router.push("/onboarding/recruiter");
    } catch (error) {
      console.error("Error al aceptar la invitación:", error);
      toast.error("Error al procesar la invitación");
    } finally {
      setIsProcessing(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
              Completa tu registro
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Has sido invitado a unirte a una organización. Por favor, completa
              tu registro para continuar.
            </p>
          </div>
          <SignUp
            path="/onboarding"
            routing="path"
            signInUrl="/login"
            redirectUrl="/onboarding/recruiter"
            appearance={{
              elements: {
                card: "bg-white dark:bg-gray-800 shadow-none",
                headerTitle: "text-gray-800 dark:text-gray-100",
                headerSubtitle: "text-gray-500 dark:text-gray-400",
                socialButtonsBlockButton:
                  "border-gray-200 dark:border-gray-700",
                socialButtonsBlockButtonText:
                  "text-gray-600 dark:text-gray-300",
                dividerLine: "bg-gray-200 dark:bg-gray-700",
                dividerText: "text-gray-500 dark:text-gray-400",
                formFieldLabel: "text-gray-800 dark:text-gray-100",
                formFieldInput:
                  "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700",
                formButtonPrimary:
                  "bg-accent-light hover:bg-accent-light/90 dark:bg-accent-dark dark:hover:bg-accent-dark/90",
                footerActionLink:
                  "text-accent-light hover:text-accent-light/90 dark:text-accent-dark dark:hover:text-accent-dark/90",
              },
            }}
          />
        </div>
      </div>
    );
  }

  if (!isUserLoaded || !isOrgLoaded || !isOrgListLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Cargando...
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Preparando tu invitación...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            ¡Bienvenido!
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Has sido invitado a unirte a una organización. Por favor, completa
            tu perfil antes de continuar.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <Button
            onClick={handleAcceptInvitation}
            disabled={isProcessing}
            className="w-full bg-accent-light hover:bg-accent-light/90 dark:bg-accent-dark dark:hover:bg-accent-dark/90"
          >
            {isProcessing ? "Procesando..." : "Completar perfil"}
          </Button>
        </div>
      </div>
    </div>
  );
}
