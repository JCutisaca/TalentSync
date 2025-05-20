"use client";

import {
  UsersIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { PricingTable } from "@clerk/nextjs";
import { useOrganization } from "@clerk/nextjs";
import Link from "next/link";

const stats = [
  {
    id: 1,
    name: "Total de Postulantes",
    value: "1,234",
    icon: UsersIcon,
    change: "+12%",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Empleos Activos",
    value: "45",
    icon: BriefcaseIcon,
    change: "+5%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "Ingresos Mensuales",
    value: "$12,345",
    icon: CurrencyDollarIcon,
    change: "+8%",
    changeType: "increase",
  },
  {
    id: 4,
    name: "Tasa de Conversión",
    value: "23%",
    icon: ChartBarIcon,
    change: "-2%",
    changeType: "decrease",
  },
];

const postulacionesData = [
  { name: "Ene", total: 120 },
  { name: "Feb", total: 180 },
  { name: "Mar", total: 150 },
  { name: "Abr", total: 210 },
  { name: "May", total: 240 },
  { name: "Jun", total: 280 },
];

const empleosData = [
  { name: "Frontend", total: 45 },
  { name: "Backend", total: 35 },
  { name: "DevOps", total: 25 },
  { name: "UX/UI", total: 30 },
  { name: "QA", total: 20 },
];

export default function HomeDashboard() {
  const [showPricing, setShowPricing] = useState(true);
  const { organization } = useOrganization();
  const [hasSubscription, setHasSubscription] = useState(false);

  useEffect(() => {
    const checkSubscription = async () => {
      if (organization) {
        const subscriptions = await organization.getSubscriptions();
        setHasSubscription(subscriptions.data.length > 0);
      }
    };
    checkSubscription();
  }, [organization]);

  if (!organization) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-6 text-center">
        <BuildingOffice2Icon className="h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          No hay organización activa
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          Necesitas crear una organización para comenzar
        </p>
        <Link
          href="/onboarding/company"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Crear organización
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {showPricing && !hasSubscription && (
          <div className="mb-8">
            <Card className="bg-white dark:bg-gray-800 border dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">
                  Actualiza a Premium
                </CardTitle>
              </CardHeader>
              <CardContent>
                <PricingTable forOrganizations />
                <div className="mt-4 flex justify-end">
                  <Button
                    variant="outline"
                    onClick={() => setShowPricing(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    Cerrar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="flex items-center justify-center gap-3 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            Dashboard
          </h1>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
            {hasSubscription ? "Premium" : "Demo"}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.name}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p
                  className={`text-xs ${
                    stat.changeType === "increase"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {stat.change} desde el mes pasado
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Postulaciones por Mes</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={postulacionesData}>
                  <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value: number) => `${value}`}
                  />
                  <Bar
                    dataKey="total"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-indigo-500"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Empleos más Populares</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={empleosData}>
                  <XAxis
                    dataKey="name"
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value: number) => `${value}`}
                  />
                  <Bar
                    dataKey="total"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-cyan-500"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
