"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "../components/Header/Header"
import { ArrowRight, Home } from "lucide-react"

export default function CookiePage() {
  const t = useTranslations("Cookie")

  return (
    <>
      <Header />
      <main className="min-h-screen pt-10 container mx-auto bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
        
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,19,0.08)_2px,transparent_2px),linear-gradient(90deg,rgba(139,69,19,0.08)_2px,transparent_2px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-purple-500/10 via-pink-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-conic from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        
              <div className="p-20">
                <Link
                href="/"
                className="inline-flex items-center px-5 py-2.5 border text-white hover:text-white hover:border-white transition-all duration-300 rounded-full text-sm font-semibold tracking-wider   backdrop-blur-md"
                            >
                <Home className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                {t("backToHome")}
                <ArrowRight className="h-4 w-4 ml-2 rotate-180 transition-transform group-hover:-translate-x-1" />
                            </Link>
              </div>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-7xl font-black mb-6 text-white  animate-pulse">
                {t("title")}
              </h1>
              
              <p className="text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed font-light">
                {t("description")}
              </p>
            </div>

            {/* Cookie Jar Layout */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              
              {/* Left Column - Main Sections */}
              <div className="space-y-8">
                
                

                {/* Section 3 */}
                <div className="group relative bg-gradient-to-br from-purple-900/30 to-indigo-900/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full translate-y-10 -translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-4 text-purple-200 flex items-center gap-3">
                      <span className="text-4xl">🌐</span>
                      {t("section3.title")}
                    </h2>
                    <p className="text-lg text-purple-200 leading-relaxed">{t("section3.text")}</p>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="group relative bg-gradient-to-br from-green-900/30 to-emerald-900/20 backdrop-blur-xl border border-green-500/30 rounded-3xl p-8 hover:border-green-400/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-1/2 right-0 w-16 h-16 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full translate-x-8 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-4 text-green-200 flex items-center gap-3">
                      <span className="text-4xl">✅</span>
                      {t("section5.title")}
                    </h2>
                    <p className="text-lg text-green-200 leading-relaxed">{t("section5.text")}</p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                
                {/* Section 2 - Special List Design */}
                <div className="group relative bg-gradient-to-br from-blue-900/30 to-cyan-900/20 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl font-black mb-6 text-blue-200 flex items-center gap-3">
                      <span className="text-4xl">📊</span>
                      {t("section2.title")}
                    </h2>
                    <div className="space-y-4">
                      {t.raw("section2.items").map((item: string, i: number) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-700/30 transition-all duration-300">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                          <div className="text-blue-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

               

                
              </div>
            </div>

          
          </div>
        
        
        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 opacity-50"></div>
      </main>
    </>
  )
}