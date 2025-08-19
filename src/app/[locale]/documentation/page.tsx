"use client";

import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";
import Link from "next/link";
import { ArrowRight, Home, BookOpen, Shield, TrendingUp, Lightbulb } from "lucide-react";

const page = () => {
  const t = useTranslations("docs");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background with Animated Elements */}
      <div className="fixed inset-0 z-[-1]">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900"></div>
        
        {/* Animated radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.3),transparent_50%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.25),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.15),transparent_60%)]"></div>
        
        {/* Enhanced grid pattern with glow */}
        <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-60deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        
        {/* Floating orbs for depth */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <Header />
      
      <main className="text-white relative z-10">
        <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-12 md:py-16 lg:py-20">
          {/* Enhanced Back to Home Button */}
          <div className="mb-8 sm:mb-12">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 border border-indigo-500/30 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-white hover:from-indigo-500/30 hover:to-purple-500/30 hover:border-indigo-400/50 transition-all duration-500 rounded-full text-sm font-bold tracking-wider backdrop-blur-xl group whitespace-nowrap shadow-lg hover:shadow-indigo-500/25 hover:shadow-xl transform hover:scale-105"
            >
              <Home className="h-4 w-4 mr-3 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-indigo-300 flex-shrink-0" />
              <span className="hidden sm:inline bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">{t("backToHome")}</span>
              <ArrowRight className="h-4 w-4 ml-3 rotate-180 transition-all duration-300 group-hover:-translate-x-1 group-hover:text-indigo-300 flex-shrink-0" />
            </Link>
          </div>

          <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12 md:space-y-16">
            {/* Enhanced Title Section */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <div className="relative inline-block">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-white via-indigo-200 to-purple-300 bg-clip-text text-transparent px-2 leading-tight">
                  {t("title")}
                </h1>
                {/* Glow effect behind title */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl -z-10 scale-150"></div>
              </div>
            </div>

            {/* Enhanced Sections */}
            {[
              {
                icon: <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-lg" />,
                title: t("blockchain.title"),
                text: t("blockchain.text"),
                colors: "from-blue-500 via-indigo-500 to-purple-600",
                shadowColor: "shadow-blue-500/20",
                hoverShadow: "hover:shadow-blue-500/40",
                borderColor: "border-blue-500/20 hover:border-blue-400/40",
              },
              {
                icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-lg" />,
                title: t("popular.title"),
                colors: "from-orange-500 via-pink-500 to-red-600",
                shadowColor: "shadow-orange-500/20",
                hoverShadow: "hover:shadow-orange-500/40",
                borderColor: "border-orange-500/20 hover:border-orange-400/40",
                content: (
                  <ul className="space-y-4 sm:space-y-5 text-gray-200 text-sm sm:text-base md:text-lg font-medium">
                    <li className="flex items-start gap-3 sm:gap-4 group">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full mt-3 flex-shrink-0 shadow-lg shadow-orange-400/50 group-hover:shadow-orange-400/70 transition-all duration-300"></div>
                      <span className="group-hover:text-white transition-colors duration-300">
                        <strong className="text-transparent bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text">Bitcoin (BTC):</strong> {t("popular.bitcoin")}
                      </span>
                    </li>
                  </ul>
                ),
              },
              {
                icon: <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-lg" />,
                title: t("buy.title"),
                colors: "from-cyan-500 via-teal-500 to-emerald-600",
                shadowColor: "shadow-cyan-500/20",
                hoverShadow: "hover:shadow-cyan-500/40",
                borderColor: "border-cyan-500/20 hover:border-cyan-400/40",
                content: (
                  <ol className="space-y-4 sm:space-y-5 text-gray-200 text-sm sm:text-base md:text-lg font-medium">
                    {[1, 2].map((step) => (
                      <li key={step} className="flex items-start gap-3 sm:gap-4 group">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full mt-3 flex-shrink-0 shadow-lg shadow-cyan-400/50 group-hover:shadow-cyan-400/70 transition-all duration-300"></div>
                        <span className="group-hover:text-white transition-colors duration-300">{t(`buy.step${step}`)}</span>
                      </li>
                    ))}
                  </ol>
                ),
              },
              {
                icon: <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-white drop-shadow-lg" />,
                title: t("tips.title"),
                colors: "from-violet-500 via-purple-500 to-fuchsia-600",
                shadowColor: "shadow-violet-500/20",
                hoverShadow: "hover:shadow-violet-500/40",
                borderColor: "border-violet-500/20 hover:border-violet-400/40",
                content: (
                  <ul className="space-y-4 sm:space-y-5 text-gray-200 text-sm sm:text-base md:text-lg font-medium">
                    {[1, 2].map((tip) => (
                      <li key={tip} className="flex items-start gap-3 sm:gap-4 group">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 rounded-full mt-3 flex-shrink-0 shadow-lg shadow-violet-400/50 group-hover:shadow-violet-400/70 transition-all duration-300"></div>
                        <span className="group-hover:text-white transition-colors duration-300">{t(`tips.tip${tip}`)}</span>
                      </li>
                    ))}
                  </ul>
                ),
              },
            ].map(({ icon, title, text, content, colors, shadowColor, hoverShadow, borderColor }, i) => (
              <section
                key={i}
                className={`relative bg-gradient-to-br from-slate-800/40 via-slate-800/60 to-slate-900/80 backdrop-blur-2xl border ${borderColor} rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-2xl ${shadowColor} overflow-hidden transition-all duration-500 hover:scale-[1.02] ${hoverShadow} hover:shadow-2xl group`}
              >
                {/* Animated background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors} opacity-5 group-hover:opacity-10 transition-all duration-500 rounded-3xl sm:rounded-[2rem]`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${colors} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
                      {icon}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                      {title}
                    </h2>
                  </div>
                  
                  {text && (
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-medium mb-6 sm:mb-8 group-hover:text-gray-200 transition-colors duration-300">
                      {text}
                    </p>
                  )}
                  {content}
                </div>

                {/* Enhanced hover effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl sm:rounded-[2rem] pointer-events-none"></div>
                
                {/* Subtle border glow on hover */}
                <div className={`absolute inset-0 rounded-3xl sm:rounded-[2rem] bg-gradient-to-br ${colors} opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500 -z-10`}></div>
              </section>
            ))}
          </div>
        </div>

        {/* Enhanced bottom spacing with gradient fade */}
        <div className="h-40 bg-gradient-to-t from-transparent to-slate-950/20"></div>
      </main>
    </div>
  );
};

export default page;