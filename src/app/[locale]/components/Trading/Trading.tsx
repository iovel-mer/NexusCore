"use client"

import React from "react"
import { useLocale, useTranslations } from "next-intl"
import { CheckCircle, TrendingUp, Shield, Zap, DollarSign, HeadphonesIcon, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Trading: React.FC = () => {
  const t = useTranslations("trade")
  const locale = useLocale();

  const featureIcons = [
    TrendingUp,
    Shield,
    Zap,
    DollarSign,
    HeadphonesIcon,
    Globe
  ]

  const features = [
    {
      icon: featureIcons[0],
      title: t("features.analytics.title"),
      description: t("features.analytics.description"),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: featureIcons[1],
      title: t("features.security.title"),
      description: t("features.security.description"),
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: featureIcons[2],
      title: t("features.speed.title"),
      description: t("features.speed.description"),
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: featureIcons[3],
      title: t("features.fees.title"),
      description: t("features.fees.description"),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: featureIcons[4],
      title: t("features.support.title"),
      description: t("features.support.description"),
      gradient: "from-red-500 to-rose-500"
    },
    {
      icon: featureIcons[5],
      title: t("features.access.title"),
      description: t("features.access.description"),
      gradient: "from-indigo-500 to-blue-500"
    }
  ]

  return (
    <section className="relative py-16 px-4 mx-auto overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Neon Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      
      {/* Cyberpunk Orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-conic from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-conic from-green-400 via-blue-500 to-purple-500 rounded-full blur-3xl opacity-25 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      
      {/* Scan Lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-2 animate-pulse"></div>
      
      <div className="text-center relative z-10 max-w-6xl mx-auto">
        {/* Futuristic Badge */}
        <div className="mb-8 inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-lg border border-cyan-400/30 px-6 py-3 text-sm font-mono uppercase tracking-wider text-cyan-300 shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300">
          <CheckCircle className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-cyan-100">{t("badge")}</span>
        </div>

        {/* Cyberpunk Title */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tight font-mono">
          <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            {t("title.line1")}
          </span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,255,255,0.5)] animate-pulse">
            {t("title.line2")}
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto font-light">
          {t("description")}
        </p>

        {/* Hexagon Grid Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index} 
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 overflow-hidden"
                style={{
                  clipPath: 'polygon(15% 0%, 85% 0%, 100% 25%, 100% 75%, 85% 100%, 15% 100%, 0% 75%, 0% 25%)'
                }}
              >
                {/* Neon Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                
                {/* Icon */}
                <div className="relative mb-4 flex justify-center">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] transition-all duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative text-center px-4">
                  <h3 className="text-base font-bold mb-2 text-cyan-100 group-hover:text-white transition-colors font-mono uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            )
          })}
        </div>
      </div>
      
    
    </section>
  )
}