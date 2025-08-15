"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "../components/Header/Header"
import { ArrowRight, Home } from "lucide-react"

const PrivacyPolicyPage = () => {
  const t = useTranslations("Privacy")

  return (
    <>
      <Header />
      <div className="w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
        
        {/* Professional Grid Background - Responsive */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:40px_40px] pointer-events-none"></div>
        
        {/* Subtle Background Orbs - Responsive */}
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-gradient-to-br from-slate-600/10 to-blue-600/5 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 lg:py-20 relative z-10">
          {/* Back to Home Button - Fixed Size */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center px-5 py-2.5 border text-white hover:text-white hover:border-white transition-all duration-300 rounded-full text-sm font-semibold tracking-wider backdrop-blur-md group whitespace-nowrap"
            >
              <Home className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1 flex-shrink-0" />
              <span className="hidden sm:inline">{t("backToHome")}</span>
              <span className="sm:hidden">Home</span>
              <ArrowRight className="h-4 w-4 ml-2 rotate-180 transition-transform group-hover:-translate-x-1 flex-shrink-0" />
            </Link>
          </div>

          <div className="max-w-5xl mx-auto">
            
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent px-2">
                {t("title")}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
                {t("description")}
              </p>
              <div className="mt-4 sm:mt-6 inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium">
                {t("lastUpdated")}
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-6 sm:space-y-8">
              {Array.from({ length: 2 }, (_, i) => {
                const section = i + 1
                return (
                  <div 
                    key={section}
                    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                  >
                    {/* Section Number Badge */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-base sm:text-lg shadow-lg">
                      {section}
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                    
                    <div className="relative z-10 pr-12 sm:pr-16">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-white group-hover:text-blue-200 transition-colors duration-300">
                        {t(`section${section}.title`)}
                      </h2>
                      
                      <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed mb-4 sm:mb-6 group-hover:text-slate-200 transition-colors duration-300">
                        {t(`section${section}.description`)}
                      </p>
                      
                      {t.raw(`section${section}.list`)?.length > 0 && (
                        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                          <ul className="space-y-2 sm:space-y-3">
                            {t.raw(`section${section}.list`).map((item: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-2 sm:gap-3 text-slate-300">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                                <span className="text-xs sm:text-sm md:text-base leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        
        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>
    </>
  )
}

export default PrivacyPolicyPage