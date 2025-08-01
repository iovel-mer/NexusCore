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
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
        
        {/* Professional Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        
        {/* Subtle Background Orbs */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-slate-600/10 to-blue-600/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10 px-6 py-16">
          <div className="max-w-5xl mx-auto">
            
            {/* Header Section */}
            <div className="mb-12">
              <Link 
                href="/" 
                className='inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group text-sm font-semibold text-white shadow-lg mb-8'
              >
                <Home className='h-5 w-5 mr-3 group-hover:scale-110 transition-transform duration-300 text-blue-300' />
                <span>{t('backToHome')}</span>
                <ArrowRight className='h-5 w-5 ml-3 rotate-180 group-hover:scale-110 transition-transform duration-300 text-blue-300' />
              </Link>
              
              <div className="text-center mb-8">
                <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                  {t("title")}
                </h1>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  {t("description")}
                </p>
                <div className="mt-6 inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
                  {t("lastUpdated")}
                </div>
              </div>
            </div>

            {/* Content Sections */}
            <div className="space-y-8">
              {Array.from({ length: 2 }, (_, i) => {
                const section = i + 1
                return (
                  <div 
                    key={section}
                    className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                  >
                    {/* Section Number Badge */}
                    <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg">
                      {section}
                    </div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    
                    <div className="relative z-10">
                      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white group-hover:text-blue-200 transition-colors duration-300">
                        {t(`section${section}.title`)}
                      </h2>
                      
                      <p className="text-lg text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-300">
                        {t(`section${section}.description`)}
                      </p>
                      
                      {t.raw(`section${section}.list`)?.length > 0 && (
                        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                          <ul className="space-y-3">
                            {t.raw(`section${section}.list`).map((item: string, idx: number) => (
                              <li key={idx} className="flex items-start gap-3 text-slate-300">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-base leading-relaxed">{item}</span>
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