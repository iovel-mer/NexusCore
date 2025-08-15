"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { getHeroMarketData, type MarketData } from "@/app/api/market/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Coins, BarChart3, Globe, Rocket, Play, ChevronRight, TrendingUp, Users, DollarSign, Crown, Star, Zap, UserPlus } from "lucide-react"

export const Hero: React.FC = () => {
  const t = useTranslations("hero")
  const locale = useLocale();
  const [marketData, setMarketData] = useState<MarketData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await getHeroMarketData()
        if (result.success) {
          setMarketData(result.data as any)
          setError(null)
        } else {
          setError(result.error || "Failed to load data")
        }
      } catch (err) {
        setError("Failed to load market data")
        console.error("Hero data fetch error:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const result = await getHeroMarketData()
        if (result.success) {
          setMarketData(result.data as any)
        }
      } catch (err) {
        console.warn("Failed to update hero data:", err)
      }
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)
  }

  return (
    <section className="container mx-auto w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:40px_40px] pointer-events-none" />
      
      {/* Dynamic Background - Responsive */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 text-white rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-20 sm:top-40 right-10 sm:right-20 w-1 h-1 text-white rounded-full animate-bounce opacity-70"></div>
          <div className="absolute bottom-20 sm:bottom-40 left-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 text-white rounded-full animate-ping opacity-50"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 sm:w-3 sm:h-3 text-white rounded-full animate-pulse opacity-40"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border border-purple-500/30 rounded-full shadow-2xl">
              <Crown size={16} className="sm:w-[18px] sm:h-[18px] text-yellow-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-bold text-xs sm:text-sm">{t("liveMarkets")}</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 text-white rounded-full animate-pulse"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-yellow-400 rounded-full animate-pulse animation-delay-100"></div>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 rounded-full animate-pulse animation-delay-200"></div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-none tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 drop-shadow-lg">{t("nextGen")}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse drop-shadow-2xl">{t("trading")}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-lg">{t("platform")}</span>
              </h1>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 text-gray-300">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Zap size={16} className="sm:w-5 sm:h-5 text-yellow-400" />
                    <span className="font-mono text-xs sm:text-sm md:text-base">{t("specs.execution")}</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Globe size={16} className="sm:w-5 sm:h-5 text-green-400" />
                    <span className="font-mono text-xs sm:text-sm md:text-base">{t("specs.uptime")}</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <Star size={16} className="sm:w-5 sm:h-5 text-purple-400" />
                    <span className="font-mono text-xs sm:text-sm md:text-base">{t("specs.grade")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
              {t("description")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link href={`/${locale}/register`}>
                <Button className="group relative overflow-hidden flex items-center cursor-pointer gap-2 sm:gap-3 px-5 sm:px-6 md:px-7 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl text-sm font-semibold 
                  bg-transparent text-white border-2 border-transparent shadow-lg
                  hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out
                  before:absolute before:inset-0 before:rounded-xl sm:before:rounded-2xl before:p-[2px] 
                  before:bg-gradient-to-r before:from-slate-500 before:to-slate-300 
                  before:content-[''] before:-z-10
                  after:absolute after:inset-[2px] after:rounded-[10px] sm:after:rounded-[14px] after:bg-slate-900 after:content-[''] after:-z-10">
                  
                  {/* Hover gradient background */}
                  <div className="absolute inset-[2px] rounded-[10px] sm:rounded-[14px] bg-gradient-to-r from-slate-500/10 to-slate-300/10 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                    -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  
                  <UserPlus size={16} className="sm:w-[18px] sm:h-[18px] relative z-10 group-hover:rotate-3 transition-transform duration-300" />
                  <span className="text-sm sm:text-base">{t("startTrading")}</span>
                </Button>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl group-hover:blur-xl sm:group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center mb-2 sm:mb-3">
                    <DollarSign size={20} className="sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">$2.4T</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{t("stats.volume")}</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl group-hover:blur-xl sm:group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center mb-2 sm:mb-3">
                    <Users size={20} className="sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">5.7M</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{t("stats.traders")}</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl group-hover:blur-xl sm:group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 text-center hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center mb-2 sm:mb-3">
                    <TrendingUp size={20} className="sm:w-6 sm:h-6 text-orange-400" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">0.08%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{t("stats.fees")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Terminal */}
          <div className="lg:col-span-5 mt-6 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl"></div>
              <Card className="relative bg-black/60 backdrop-blur-2xl border border-gray-700 shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500">
                <CardHeader className="p-4 sm:p-5 md:p-6 border-b border-gray-700 bg-gradient-to-r from-gray-900/80 to-purple-900/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                        <BarChart3 size={20} className="sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">{t("marketFeed")}</h3>
                        <p className="text-xs sm:text-sm text-gray-400">{t("Advanced")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="relative">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-2.5 h-2.5 sm:w-3 sm:h-3 text-white rounded-full animate-ping opacity-75"></div>
                      </div>
                      <span className="text-green-400 text-xs sm:text-sm font-bold uppercase tracking-wider">{t("live")}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-4 sm:p-5 md:p-6">
                  {loading ? (
                    <div className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20">
                      <div className="relative mb-4 sm:mb-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-purple-200/20 border-t-purple-500 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 border-4 border-transparent border-t-pink-500 rounded-full animate-spin animation-delay-75"></div>
                      </div>
                      <div className="text-center space-y-1 sm:space-y-2">
                        <h4 className="text-white font-bold text-base sm:text-lg">{t("loading.title")}</h4>
                        <p className="text-gray-400 text-xs sm:text-sm">{t("loading.sub")}</p>
                      </div>
                    </div>
                  ) : error ? (
                    <div className="text-center py-12 sm:py-16 md:py-20">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <h4 className="text-red-400 font-bold mb-1 sm:mb-2 text-sm sm:text-base">{t("error.title")}</h4>
                      <p className="text-gray-500 text-xs sm:text-sm">{t("error.sub")}</p>
                    </div>
                  ) : (
                    <div className="space-y-3 sm:space-y-4">
                      {marketData.map((coin, index) => (
                        <div key={coin.symbol} className="group">
                          <div className="relative overflow-hidden bg-gray-900/50 hover:bg-gray-800/60 border border-gray-700 hover:border-purple-500/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                                <div className="relative">
                                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:border-purple-500/50 transition-all duration-300 flex-shrink-0">
                                    <img
                                      src={`/assets/images/${coin.symbol.toLowerCase()}.png`}
                                      alt={`${coin.symbol} logo`}
                                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        const fallback = target.nextElementSibling as HTMLElement;
                                        target.style.display = 'none';
                                        if (fallback) fallback.style.display = 'block';
                                      }}
                                    />
                                    <Coins size={20} className="sm:w-6 sm:h-6 text-purple-400 hidden" />
                                  </div>
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-white font-bold text-base sm:text-lg md:text-xl truncate">{coin.symbol}</div>
                                  <div className="text-gray-400 text-xs sm:text-sm font-medium">{t("USD")}</div>
                                </div>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <div className="text-white font-black text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">{formatPrice(coin.price)}</div>
                                <div className={`inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold ${
                                  coin.change >= 0
                                    ? "text-green-300 bg-green-500/20 border border-green-500/30"
                                    : "text-red-300 bg-red-500/20 border border-red-500/30"
                                }`}>
                                  <TrendingUp size={12} className={`sm:w-[14px] sm:h-[14px] ${coin.change >= 0 ? "" : "rotate-180"}`} />
                                  {coin.change >= 0 ? "+" : ""}
                                  {coin.change.toFixed(2)}%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>

                <CardFooter className="p-4 sm:p-5 md:p-6 border-t border-gray-700 bg-gradient-to-r from-gray-900/60 to-purple-900/10">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full text-xs sm:text-sm text-gray-400 font-mono gap-2 sm:gap-0">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span>{t("updated")}: {mounted ? new Date().toLocaleTimeString() : "--:--:--"}</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <BarChart3 size={14} className="sm:w-4 sm:h-4 text-purple-400" />
                      <span>{t("volume")}: {marketData[0]?.volume || "$3.2T"}</span>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}