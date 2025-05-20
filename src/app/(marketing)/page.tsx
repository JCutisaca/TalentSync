"use client";
import ThemeToggle from "@/components/marketing/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import Features from "@/components/marketing/Features";
import Testimonials from "@/components/marketing/Testimonials";
import Benefits from "@/components/marketing/Benefits";
import Footer from "@/components/marketing/Footer";
import HeroCarousel from "@/components/marketing/HeroCarousel";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-x-8 lg:gap-x-12">
            <Logo />
            <nav className="hidden lg:flex space-x-4 xl:space-x-6">
              <NavLink href="#features">Características</NavLink>
              <NavLink href="#benefits">¿Para quién es?</NavLink>
              <NavLink href="#testimonials">Testimonios</NavLink>
            </nav>
          </div>
          <div className="flex items-center gap-x-2 sm:gap-x-4">
            <ThemeToggle />
            <div className="hidden lg:flex items-center gap-x-3">
              <Link href="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap"
                >
                  Iniciar sesión
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="whitespace-nowrap">
                  Registrarse
                </Button>
              </Link>
            </div>
            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      <main>
        <HeroCarousel />
        <Features />
        <Benefits />
        <Testimonials />
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
              Empieza a conectar con el mejor talento hoy mismo
            </h2>
            <p className="max-w-2xl mx-auto mb-10 text-gray-500 dark:text-gray-400">
              Únete a cientos de empresas que ya están transformando su forma de
              reclutar y gestionar talento con TalentSync.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-400 dark:hover:bg-indigo-300"
              >
                Prueba TalentSync gratis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 dark:border-cyan-300 dark:text-cyan-300"
              >
                Ver demostración
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function NavLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 font-medium transition-colors text-sm lg:text-base whitespace-nowrap",
        className
      )}
    >
      {children}
    </a>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
        aria-label="Menú principal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50 animate-in fade-in-80 slide-in-from-top-5">
          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
            <div className="flex flex-col space-y-2">
              <Link href="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                >
                  Iniciar sesión
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="w-full justify-center">
                  Registrarse
                </Button>
              </Link>
            </div>
          </div>
          <div className="py-1">
            <NavLink
              href="#features"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Características
            </NavLink>
            <NavLink
              href="#benefits"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              ¿Para quién es?
            </NavLink>
            <NavLink
              href="#testimonials"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Testimonios
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}
