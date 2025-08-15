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
      <main className="min-h-screen container mx-auto bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 lg:py-20 relative">
        {/* Decorative grid background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none" />

        {/* Back button - top left */}
       <div className='p-20'>
                <Link
              href="/"
              className="inline-flex items-center px-5 py-2.5 border text-white hover:text-white hover:border-white transition-all duration-300 rounded-full text-sm font-semibold tracking-wider   backdrop-blur-md"
            >
              <Home className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              {t("backToHome")}
              <ArrowRight className="h-4 w-4 ml-2 rotate-180 transition-transform group-hover:-translate-x-1" />
            </Link>
              </div>

        {/* Centered content wrapper */}
        <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-12">
            
            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6 sm:mb-8 md:mb-10 bg-clip-text text-white">
              {t("title")}
            </h1>

            {/* Sections */}
            <section className="space-y-6 sm:space-y-8 md:space-y-10 text-xs sm:text-sm md:text-base leading-relaxed text-gray-200">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="space-y-2 sm:space-y-3">
                  <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold text-white">
                    {t(`section${index + 1}.title`)}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {t(`section${index + 1}.description`)}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}