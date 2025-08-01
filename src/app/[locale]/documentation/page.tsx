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
      <main className="min-h-screen relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-12 px-6 md:px-20 overflow-hidden">
        {/* Static Background Patterns */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.1),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(-60deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:35px_35px] pointer-events-none"></div>
        </div>

        <div className="relative z-10">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 rounded-2xl border border-gray-600/40 text-base font-bold text-white shadow-xl mb-12"
          >
            <Home className="h-6 w-6 mr-3" />
            {t("backToHome")}
            <ArrowRight className="h-5 w-5 ml-3 rotate-180" />
          </Link>

          <div className="max-w-5xl mx-auto mt-8 space-y-12">
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-7xl font-black mb-6 text-white">
                {t("title")}
              </h1>
            </div>

            {/* SECTION TEMPLATE */}
            {[
              
              {
                icon: <Shield className="w-6 h-6 text-white" />,
                title: t("blockchain.title"),
                text: t("blockchain.text"),
                colors: "from-blue-500 to-purple-600",
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-white" />,
                title: t("popular.title"),
                colors: "from-orange-500 to-pink-600",
                content: (
                  <ul className="space-y-4 text-gray-300 text-lg font-medium">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-3"></div>
                      <span><strong className="text-orange-300">Bitcoin (BTC):</strong> {t("popular.bitcoin")}</span>
                    </li>
                    
                   
                  </ul>
                ),
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-white" />,
                title: t("buy.title"),
                colors: "from-cyan-500 to-emerald-600",
                content: (
                  <ol className="space-y-4 text-gray-300 text-lg font-medium">
                    {[1, 2].map((step) => (
                      <li key={step} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {step}
                        </div>
                        <span>{t(`buy.step${step}`)}</span>
                      </li>
                    ))}
                  </ol>
                ),
              },
              {
                icon: <Lightbulb className="w-6 h-6 text-white" />,
                title: t("tips.title"),
                colors: "from-violet-500 to-fuchsia-600",
                content: (
                  <ul className="space-y-4 text-gray-300 text-lg font-medium">
                    {[1, 2].map((tip) => (
                      <li key={tip} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-3"></div>
                        <span>{t(`tips.tip${tip}`)}</span>
                      </li>
                    ))}
                  </ul>
                ),
              },
            ].map(({ icon, title, text, content, colors }, i) => (
              <section
                key={i}
                className="relative bg-gradient-to-br from-gray-800/60 to-slate-900/70 backdrop-blur-xl border border-gray-600/40 rounded-3xl p-8 shadow-2xl overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${colors} rounded-xl flex items-center justify-center shadow-lg`}>
                      {icon}
                    </div>
                    <h2 className="text-3xl font-black mb-0 text-white">{title}</h2>
                  </div>
                  {text && <p className="text-gray-300 text-lg leading-relaxed font-medium">{text}</p>}
                  {content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
