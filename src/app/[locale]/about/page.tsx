"use client";

import Link from "next/link";
import { Header } from "../components/Header/Header";
import { useTranslations } from "next-intl";
import { Home, ArrowRight } from 'lucide-react';

const Page = () => {
  const t = useTranslations("about");

  return (
    <>
      <Header />
      <section className="min-h-screen  mx-auto relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 pt-0 overflow-hidden">
          <div className="p-4 sm:p-6 md:p-8">
  <Link
    href="/"
    className="inline-flex items-center px-5 py-2.5 border text-white hover:text-white hover:border-white transition-all duration-300 rounded-full text-sm font-semibold tracking-wider backdrop-blur-md group whitespace-nowrap"
  >
    <Home className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1 flex-shrink-0" />
    <span className="hidden sm:inline">{t("backToHome")}</span>
    
    <ArrowRight className="h-4 w-4 ml-2 rotate-180 transition-transform group-hover:-translate-x-1 flex-shrink-0" />
  </Link>
</div>
        {/* Animated texture background */}
        <div className="absolute inset-0 z-0 bg-[url('/noise.svg')] opacity-5 mix-blend-soft-light pointer-events-none"></div>

        {/* HERO SECTION */}
        <section className="py-24 md:py-32 text-center px-6 md:px-12 max-w-5xl mx-auto relative z-10">

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight  bg-clip-text text-white mb-6 drop-shadow-lg uppercase">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-light tracking-wide">
            {t("subtitle")}
          </p>
        </section>

        {/* HIGHLIGHTS */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 max-w-6xl mx-auto pb-24 relative z-10">
          <div className="p-6 rounded-2xl border border-yellow-400/30 bg-yellow-200/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-white-300 mb-3 uppercase tracking-wider">
              {t("missionTitle")}
            </h2>
            <p className="text-white-100">{t("missionText")}</p>
          </div>
          <div className="p-6 rounded-2xl border border-teal-400/30 bg-teal-200/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-white mb-3 uppercase tracking-wider">
              {t("whoTitle")}
            </h2>
            <p className="text-white">{t("whoText")}</p>
          </div>
          <div className="p-6 rounded-2xl border border-fuchsia-400/30  backdrop-blur-sm shadow-xl hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-white mb-3 uppercase tracking-wider">
              {t("whyTitle")}
            </h2>
            <p className="text-white">{t("whyText")}</p>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="py-24 px-6 md:px-12 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400 mb-16 uppercase tracking-tight">
              {t("guidesTitle")}
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="p-8 rounded-xl border border-indigo-400/40 bg-indigo-200/10 shadow-md backdrop-blur-sm hover:shadow-2xl transition duration-300">
                <h3 className="text-lg font-bold text-indigo-200 mb-2 uppercase tracking-wider">
                  {t("value1Title")}
                </h3>
                <p className="text-indigo-100 text-sm leading-relaxed">{t("value1Text")}</p>
              </div>
              <div className="p-8 rounded-xl border border-rose-400/40 bg-rose-200/10 shadow-md backdrop-blur-sm hover:shadow-2xl transition duration-300">
                <h3 className="text-lg font-bold text-rose-200 mb-2 uppercase tracking-wider">
                  {t("value2Title")}
                </h3>
                <p className="text-rose-100 text-sm leading-relaxed">{t("value2Text")}</p>
              </div>
              <div className="p-8 rounded-xl border border-emerald-400/40 bg-emerald-200/10 shadow-md backdrop-blur-sm hover:shadow-2xl transition duration-300">
                <h3 className="text-lg font-bold text-emerald-200 mb-2 uppercase tracking-wider">
                  {t("value3Title")}
                </h3>
                <p className="text-emerald-100 text-sm leading-relaxed">{t("value3Text")}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Page;
