"use client";

import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";
import Link from "next/link";
import { ArrowRight, Home, BookOpen, Shield, TrendingUp, Lightbulb } from "lucide-react";

const page = () => {
  const t = useTranslations("docs");

  return (
    <>
      <Header />
      <main className=" mx-auto w-full relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
        {/* Static Background Patterns - Responsive */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.1),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(-60deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:25px_25px] md:bg-[size:35px_35px] pointer-events-none"></div>
        </div>

        <div className=" mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
          {/* Back to Home Button - Fixed Size */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center px-5 py-2.5 border text-white hover:text-white hover:border-white transition-all duration-300 rounded-full text-sm font-semibold tracking-wider backdrop-blur-md group whitespace-nowrap"
            >
              <Home className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1 flex-shrink-0" />
              <span className="hidden sm:inline">{t("backToHome")}</span>
            
              <ArrowRight className="h-4 w-4 ml-2 rotate-180 transition-transform group-hover:-translate-x-1 flex-shrink-0" />
            </Link>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 text-white px-2">
                {t("title")}
              </h1>
            </div>

            {/* SECTION TEMPLATE */}
            {[
              {
                icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                title: t("blockchain.title"),
                text: t("blockchain.text"),
                colors: "from-blue-500 to-purple-600",
              },
              {
                icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                title: t("popular.title"),
                colors: "from-orange-500 to-pink-600",
                content: (
                  <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base md:text-lg font-medium">
                    <li className="flex items-start gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-400 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                      <span><strong className="text-orange-300">Bitcoin (BTC):</strong> {t("popular.bitcoin")}</span>
                    </li>
                  </ul>
                ),
              },
              {
                icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                title: t("buy.title"),
                colors: "from-cyan-500 to-emerald-600",
                content: (
                  <ol className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base md:text-lg font-medium">
                    {[1, 2].map((step) => (
                      <li key={step} className="flex items-start gap-2 sm:gap-3 md:gap-4">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                        <span>{t(`buy.step${step}`)}</span>
                      </li>
                    ))}
                  </ol>
                ),
              },
              {
                icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                title: t("tips.title"),
                colors: "from-violet-500 to-fuchsia-600",
                content: (
                  <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base md:text-lg font-medium">
                    {[1, 2].map((tip) => (
                      <li key={tip} className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                        <span>{t(`tips.tip${tip}`)}</span>
                      </li>
                    ))}
                  </ul>
                ),
              },
            ].map(({ icon, title, text, content, colors }, i) => (
              <section
                key={i}
                className="relative bg-gradient-to-br from-gray-800/60 to-slate-900/70 backdrop-blur-xl border border-gray-600/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden hover:border-gray-500/50 transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${colors} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg`}>
                      {icon}
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-0 text-white">{title}</h2>
                  </div>
                  {text && (
                    <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-medium mb-4 sm:mb-6">
                      {text}
                    </p>
                  )}
                  {content}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl pointer-events-none"></div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default page;