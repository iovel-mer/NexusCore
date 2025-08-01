"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Header } from "../components/Header/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Home,
  ArrowRight,
} from "lucide-react";

const Page = () => {
  const t = useTranslations("help");

  const helpCategories = [
    {
      icon: TrendingUp,
      title: t("categories.trading.title"),
      description: t("categories.trading.description"),
      gradient: "from-violet-400 via-fuchsia-500 to-purple-600",
      bgGlow: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
      items: [
        t("categories.trading.items.0"),
        t("categories.trading.items.1"),
        t("categories.trading.items.2"),
      ],
    },
    {
      icon: Shield,
      title: t("categories.security.title"),
      description: t("categories.security.description"),
      gradient: "from-amber-400 via-orange-500 to-red-600",
      bgGlow: "bg-gradient-to-br from-amber-500/20 to-red-500/20",
      items: [
        t("categories.security.items.0"),
        t("categories.security.items.1"),
        t("categories.security.items.2"),
      ],
    },
    {
      icon: Users,
      title: t("categories.account.title"),
      description: t("categories.account.description"),
      gradient: "from-teal-400 via-cyan-500 to-blue-600",
      bgGlow: "bg-gradient-to-br from-teal-500/20 to-blue-500/20",
      items: [
        t("categories.account.items.0"),
        t("categories.account.items.1"),
        t("categories.account.items.2"),
      ],
    },
    {
      icon: Zap,
      title: t("categories.features.title"),
      description: t("categories.features.description"),
      gradient: "from-emerald-400 via-green-500 to-teal-600",
      bgGlow: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
      items: [
        t("categories.features.items.0"),
        t("categories.features.items.1"),
        t("categories.features.items.2"),
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className=" bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative px-4 py-16 sm:px-6 lg:px-8 mx-auto min-h-screen overflow-hidden text-white">
        {/* Animated Mesh Background */}
        {/* <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(139,69,19,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(6,182,212,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] animate-pulse" style={{animationDuration: '4s'}}></div>
        </div> */}

        {/* Dynamic Floating Orbs */}
        {/* <div className="absolute top-20 right-16 w-64 h-64 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-br from-teal-500/25 to-cyan-500/25 rounded-full blur-3xl animate-bounce" style={{animationDuration: '6s'}}></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-2xl animate-ping" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-56 h-56 bg-gradient-to-br from-emerald-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse" style={{animationDuration: '5s'}}></div> */}

        {/* Page Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-24">
            {/* Back to Home Link */}
            <div className='flex justify-start mb-12'>
              <Link 
                href="/" 
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800/80 to-slate-800/80 backdrop-blur-xl rounded-2xl border border-gray-600/40 hover:from-gray-700/80 hover:to-slate-700/80 hover:border-violet-400/50 transition-all duration-300 group text-base font-bold text-white shadow-xl hover:shadow-violet-500/20 hover:scale-105'
              >
                <Home className='h-6 w-6 mr-3 group-hover:-translate-x-1 transition-transform duration-300 text-white' />
                {t('backToHome')}
                <ArrowRight className='h-5 w-5 ml-3 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-white' />
              </Link>
            </div>

            {/* Hero Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 rounded-full border border-violet-400/30 mb-8 backdrop-blur-md">
              <Sparkles className="w-5 h-5 mr-2 text-white animate-pulse" />
              <span className="text-white font-semibold">{t('helpCenter')}</span>
            </div>

            {/* Hero Title */}
            <h1 className="text-6xl md:text-7xl font-black mb-6 text-white leading-tight">
             {t('title')}
            </h1>
            <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
             {t('subtitle')}
            </p>
          </section>

          {/* Help Categories Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6 text-white">{t("browse.title")}</h2>
              <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto">{t("browse.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {helpCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card
                    key={index}
                    className="group relative bg-gradient-to-br from-gray-800/50 to-slate-900/60 backdrop-blur-xl border border-gray-600/40 hover:border-gray-400/60 transition-all duration-500 hover:scale-110 cursor-pointer overflow-hidden rounded-3xl shadow-2xl"
                  >
                    {/* Enhanced Glow Effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl rounded-3xl`}
                    />
                    
                    {/* Background Glow Pattern */}
                    <div className={`absolute inset-0 ${category.bgGlow} opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl`}></div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                        style={{
                          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          maskComposite: 'xor',
                          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                          WebkitMaskComposite: 'xor',
                          padding: '2px'
                        }}
                      />
                    </div>

                    <CardHeader className="relative z-10 pb-4">
                      <div
                        className={`w-18 h-18 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-2xl`}
                      >
                        <IconComponent className="w-9 h-9 text-white drop-shadow-lg" />
                      </div>
                      <CardTitle className="text-white text-xl font-black group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300 mb-3">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-base font-medium leading-relaxed">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="relative z-10 pt-0 pb-6">
                     
                        {category.items.map((item, itemIndex) => (
                          <p
                            key={itemIndex}
                            className="text-gray-500 text-sm hover:text-gray-200 transition-colors duration-300  flex items-center gap-3 group/item font-medium"
                          >
                            <span className="group-hover/item:translate-x-1 transition-transform duration-300">
                              {item}
                            </span>
                          </p>
                        ))}
                      
                    </CardContent>
                    
                    {/* Enhanced Bottom Accent */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center rounded-b-3xl shadow-lg`}
                    />
                  </Card>
                );
              })}
            </div>
          </section>

      
        </div>
      </main>
    </>
  );
};

export default Page;