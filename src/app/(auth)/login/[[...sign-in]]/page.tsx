"use client";

import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <SignIn
        path="/login"
        routing="path"
        fallbackRedirectUrl="/dashboard/home"
        appearance={{
          elements: {
            card: "bg-white dark:bg-gray-800 shadow-none",
            headerTitle: "text-gray-800 dark:text-gray-100",
            headerSubtitle: "text-gray-500 dark:text-gray-400",
            socialButtonsBlockButton: "border-gray-200 dark:border-gray-700",
            socialButtonsBlockButtonText: "text-gray-600 dark:text-gray-300",
            dividerLine: "bg-gray-200 dark:bg-gray-700",
            dividerText: "text-gray-500 dark:text-gray-400",
            formFieldLabel: "text-gray-800 dark:text-gray-100",
            formFieldInput:
              "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700",
            formButtonPrimary:
              "bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-300",
            footerActionLink:
              "text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300",
          },
        }}
      />
    </div>
  );
}
