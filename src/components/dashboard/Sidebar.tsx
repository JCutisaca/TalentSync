"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import type { OrganizationResource } from "@clerk/types";
import {
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  Cog6ToothIcon,
  BuildingOffice2Icon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import Logo from "../ui/Logo";

interface ExtendedOrganization extends OrganizationResource {
  privateMetadata: {
    industry?: string;
    website?: string;
    description?: string;
  };
}

const navigation = [
  { name: "Inicio", href: "/dashboard/home", icon: HomeIcon },
  {
    name: "Búsquedas",
    href: "/dashboard/jobs",
    icon: BriefcaseIcon,
  },
  { name: "Equipo", href: "/dashboard/team", icon: UserGroupIcon },
  {
    name: "Configuración",
    href: "/dashboard/settings",
    icon: Cog6ToothIcon,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const orgData = useOrganization({
    memberships: true,
  });
  const {
    userMemberships,
    isLoaded: isOrgListLoaded,
    setActive,
  } = useOrganizationList();
  const [hasSubscription, setHasSubscription] = useState(false);

  useEffect(() => {
    const checkSubscription = async () => {
      if (orgData.organization) {
        const subscriptions = await orgData.organization.getSubscriptions();
        setHasSubscription(subscriptions.data.length > 0);
      }
    };
    checkSubscription();
  }, [orgData.organization]);

  if (
    orgData.isLoaded &&
    !orgData.organization &&
    isOrgListLoaded &&
    userMemberships.data.length > 0
  ) {
    setActive({ organization: userMemberships.data[0].organization.id });
  }

  if (orgData.isLoaded && !orgData.organization && isOrgListLoaded) {
    return (
      <div className="flex h-full flex-col items-center justify-center bg-white dark:bg-gray-800 p-6 text-center">
        <BuildingOffice2Icon className="h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          No hay organización activa
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {userMemberships.data.length === 0
            ? "Necesitas crear una organización para comenzar"
            : "Selecciona una organización para continuar"}
        </p>
        <button
          onClick={() => router.push("/onboarding/company")}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {userMemberships.data.length === 0
            ? "Crear organización"
            : "Seleccionar organización"}
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="hidden lg:flex h-16 shrink-0 items-center px-6">
        <Logo size="md" />
      </div>

      <div className="flex-1 overflow-y-auto">
        <nav className="flex-1 space-y-1 px-4 py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors
                  ${
                    isActive
                      ? "bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }
                `}
              >
                <item.icon
                  className={`
                    mr-3 h-6 w-6 flex-shrink-0 transition-colors
                    ${
                      isActive
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400"
                    }
                  `}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center relative">
            {orgData.organization?.name?.charAt(0) || "T"}
            {hasSubscription && (
              <div className="absolute -top-1 -right-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-1">
                <SparklesIcon className="h-3 w-3 text-white" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                {orgData.isLoaded
                  ? orgData.organization?.name || "Sin organización"
                  : "Cargando..."}
              </p>
              {hasSubscription && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                  Premium
                </span>
              )}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {orgData.isLoaded &&
              (orgData.organization as ExtendedOrganization)?.privateMetadata
                ?.industry
                ? `Sector: ${
                    (orgData.organization as ExtendedOrganization)
                      .privateMetadata.industry
                  }`
                : orgData.membership?.role || "Sin rol asignado"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
