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
    <section className="min-h-screen container mx-auto bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative text-white  overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-2 h-2 text-white rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-1 text-white rounded-full animate-bounce opacity-70"></div>
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 text-white rounded-full animate-ping opacity-50"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 text-white rounded-full animate-pulse opacity-40"></div>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className=" px-6 py-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center my-40">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border border-purple-500/30 rounded-full shadow-2xl">
              <Crown size={18} className="text-yellow-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 font-bold text-sm">{t("liveMarkets")}</span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 text-white rounded-full animate-pulse"></div>
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse animation-delay-100"></div>
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse animation-delay-200"></div>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <div className="space-y-4">
                {/* <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 block">
                    {t("nextGen")}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 block animate-pulse">
                    {t("trading")}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 block">
                    {t("platform")}
                  </span>
                </h1> */}
                
                <div className="flex items-center gap-4 text-lg text-gray-300">
                  <div className="flex items-center gap-2">
                    <Zap size={20} className="text-yellow-400" />
                    <span className="font-mono">{t("specs.execution")}</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Globe size={20} className="text-green-400" />
                    <span className="font-mono">{t("specs.uptime")}</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <Star size={20} className="text-black" />
                    <span className="font-mono">{t("specs.grade")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-light">
              {t("description")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href={`/${locale}/register`}>
          <Button className="group relative overflow-hidden flex items-center cursor-pointer gap-3 px-7 p-6 rounded-2xl text-sm font-semibold 
            bg-transparent text-white border-2 border-transparent shadow-lg
            hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-out
            before:absolute before:inset-0 before:rounded-2xl before:p-[2px] 
            before:bg-gradient-to-r before:from-slate-500 before:to-slate-300 
            before:content-[''] before:-z-10
            after:absolute after:inset-[2px] after:rounded-[14px] after:bg-slate-900 after:content-[''] after:-z-10">
            
            {/* Hover gradient background */}
            <div className="absolute inset-[2px] rounded-[14px] bg-gradient-to-r from-slate-500/10 to-slate-300/10 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
              -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            
            <UserPlus size={18} className="relative z-10 group-hover:rotate-3 transition-transform duration-300" />
            <span>{t("startTrading")}</span>
          </Button>
        </Link>
            
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700 rounded-3xl p-6 text-center hover:border-purple-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <DollarSign size={24} className="text-green-400" />
                  </div>
                  <div className="text-3xl font-black text-white mb-2">$2.4T</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{t("stats.volume")}</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700 rounded-3xl p-6 text-center hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <Users size={24} className="text-blue-400" />
                  </div>
                  <div className="text-3xl font-black text-white mb-2">5.7M</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{t("stats.traders")}</div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-yellow-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700 rounded-3xl p-6 text-center hover:border-orange-500/50 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <TrendingUp size={24} className="text-orange-400" />
                  </div>
                  <div className="text-3xl font-black text-white mb-2">0.08%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold">{t("stats.fees")}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Terminal */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl"></div>
              <Card className="relative bg-black/60 backdrop-blur-2xl border border-gray-700 shadow-2xl rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-500">
                <CardHeader className="p-6 border-b border-gray-700 bg-gradient-to-r from-gray-900/80 to-purple-900/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                        <BarChart3 size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{t("marketFeed")}</h3>
                        <p className="text-sm text-gray-400">{t("Advanced")}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-3 h-3 text-white rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 w-3 h-3 text-white rounded-full animate-ping opacity-75"></div>
                      </div>
                      <span className="text-green-400 text-sm font-bold uppercase tracking-wider">{t("live")}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                      <div className="relative mb-6">
                        <div className="w-16 h-16 border-4 border-purple-200/20 border-t-purple-500 rounded-full animate-spin"></div>
                        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-pink-500 rounded-full animate-spin animation-delay-75"></div>
                      </div>
                      <div className="text-center space-y-2">
                        <h4 className="text-white font-bold text-lg">{t("loading.title")}</h4>
                        <p className="text-gray-400 text-sm">{t("loading.sub")}</p>
                      </div>
                    </div>
                  ) : error ? (
                    <div className="text-center py-20">
                      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <h4 className="text-red-400 font-bold mb-2">{t("error.title")}</h4>
                      <p className="text-gray-500 text-sm">{t("error.sub")}</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {marketData.map((coin, index) => (
                        <div key={coin.symbol} className="group">
                          <div className="relative overflow-hidden bg-gray-900/50 hover:bg-gray-800/60 border border-gray-700 hover:border-purple-500/30 rounded-2xl p-5 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="relative">
                                  <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 rounded-2xl flex items-center justify-center group-hover:border-purple-500/50 transition-all duration-300">
                                    <img
                                      src={`/assets/images/${coin.symbol.toLowerCase()}.png`}
                                      alt={`${coin.symbol} logo`}
                                      className="w-8 h-8"
                                      onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        const fallback = target.nextElementSibling as HTMLElement;
                                        target.style.display = 'none';
                                        if (fallback) fallback.style.display = 'block';
                                      }}
                                    />
                                    <Coins size={24} className="text-purple-400 hidden" />
                                  </div>
                                 
                                </div>
                                <div>
                                  <div className="text-white font-bold text-xl">{coin.symbol}</div>
                                  <div className="text-gray-400 text-sm font-medium">{t("USD")}</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-white font-black text-2xl mb-2">{formatPrice(coin.price)}</div>
                                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${
                                  coin.change >= 0
                                    ? "text-green-300 bg-green-500/20 border border-green-500/30"
                                    : "text-red-300 bg-red-500/20 border border-red-500/30"
                                }`}>
                                  <TrendingUp size={14} className={coin.change >= 0 ? "" : "rotate-180"} />
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

                <CardFooter className="p-6 border-t border-gray-700 bg-gradient-to-r from-gray-900/60 to-purple-900/10">
                  <div className="flex justify-between items-center w-full text-sm text-gray-400 font-mono">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span>{t("updated")}: {mounted ? new Date().toLocaleTimeString() : "--:--:--"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 size={16} className="text-purple-400" />
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