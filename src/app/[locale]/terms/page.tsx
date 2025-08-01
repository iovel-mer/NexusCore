'use client';

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";
import { ArrowRight, Home } from "lucide-react";

export default function TermsOfService() {
  const t = useTranslations("terms");

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white px-6 py-20 relative flex items-center justify-center">
        {/* Decorative grid background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-lg p-8 sm:p-12">
          {/* Navigation link */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center px-5 py-2.5 bg-indigo-700/20 hover:bg-indigo-700/40 border border-indigo-500/30 text-indigo-100 rounded-full text-sm font-medium transition-all duration-300 group"
            >
              <Home className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              {t('goBackHome')}
              <ArrowRight className="h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold mb-10  bg-clip-text text-white">
            {t("title")}
          </h1>

          {/* Sections */}
          <section className="space-y-10 text-sm sm:text-base leading-relaxed text-gray-200">
            {[...Array(8)].map((_, index) => (
              <div key={index}>
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  {t(`section${index + 1}.title`)}
                </h2>
                <p className="text-gray-300">
                  {t(`section${index + 1}.description`)}
                </p>
              </div>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}
