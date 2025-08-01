"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { getMarketData, type MarketData } from "@/app/api/market/actions"
import { TrendingUp, TrendingDown, Activity, RefreshCw, BarChart3 } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { log } from "console"

export const Market: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const t = useTranslations("Market")

  const fetchData = async () => {
    try {
      setLoading(true)
      const result = await getMarketData()
      console.log(result)
      if (result.success) {
        setMarketData(result.data as any)
        setError(null)
      } else {
        setError(result.error || t("errorGeneric"))
      }
    } catch (err) {
      setError(t("errorFetch"))
      console.error("Market data fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [t])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData()
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    const fractionDigits = price >= 1000 ? 2 : price >= 1 ? 4 : 6
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }).format(price)
  }

  const formatChange = (change: number) => {
    const sign = change >= 0 ? "+" : ""
    return `${sign}${change.toFixed(2)}%`
  }

  const handleImageError = (symbol: string) => {
    setImageErrors((prev) => new Set(prev).add(symbol))
  }

  const CryptoLogo = ({ coin, size = 48 }: { coin: MarketData; size?: number }) => {
    const hasError = imageErrors.has(coin.symbol)
    const logoSrc = `/assets/images/${coin.symbol.toLowerCase()}.png`

    if (hasError) {
      return (
        <div
          className="flex items-center justify-center bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 text-white font-black shadow-2xl border-2 border-white/20"
          style={{ 
            width: size, 
            height: size,
            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
          }}
        >
          <span className="text-xs">{coin.symbol?.slice(0, 2) || "??"}</span>
        </div>
      )
    }

    return (
      <div 
        className="relative overflow-hidden  shadow-lg"
        style={{ 
          width: size, 
          height: size,
          // clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
        }}
      >
        <Image
          src={logoSrc}
          width={size}
          height={size}
          alt={`${coin.name || coin.symbol} logo`}
          className="object-cover"
          onError={() => handleImageError(coin.symbol)}
          unoptimized
        />
      </div>
    )
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,165,0,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(255,165,0,0.1)_2px,transparent_2px)] bg-[size:80px_80px] animate-pulse opacity-30"></div>
      
  
      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r text-white backdrop-blur-xl border border-orange-400/40 text-sm font-bold  shadow-[0_0_30px_rgba(255,165,0,0.3)] mb-6" 
               style={{clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'}}>
            <span className="uppercase tracking-widest">{t("badge")}</span>
          </div>
          
          <h3 className="text-5xl md:text-7xl font-black mb-6  bg-clip-text text-white  uppercase tracking-tight">
            {t("title")}
          </h3>
          
          <p className="text-xl text-orange-100 max-w-3xl mx-auto font-medium">
            {t("description")}
          </p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="relative">
              <div className="w-20 h-20 border-4 border-orange-500 border-t-transparent animate-spin" 
                   style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'}}></div>
              <RefreshCw className="w-8 h-8 text-orange-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </div>
            <p className="mt-8 text-orange-200 text-xl font-bold uppercase tracking-wider">{t("loading")}</p>
            <div className="mt-4 flex space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-24">
            <div className="bg-white backdrop-blur-xl border border-red-500/50 p-10 max-w-lg mx-auto shadow-2xl"
                 style={{clipPath: 'polygon(0% 20%, 20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%)'}}>
              <div className="w-16 h-16 bg-gradient-to-br bg-white flex items-center justify-center mx-auto mb-6 rounded-full shadow-lg">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <p className="text-red-200 text-xl font-bold uppercase tracking-wide">{error}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-24">
            {marketData.map((coin, index) => (
              <div
                key={coin.symbol}
                className="group relative bg-gradient-to-br w-80  from-slate-800/40 to-slate-900/40 backdrop-blur-xl 
                 p-8 transition-all  overflow-hidden"
                style={{
                  clipPath: 'polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-white opacity-0  transition-opacity duration-500"></div>
                
                {/* Glitch Lines */}
                <div className="absolute top-4 left-0 right-0 h-px bg-white to-transparent opacity-0  transition-opacity"></div>
                <div className="absolute bottom-4 left-0 right-0 h-px bg-white to-transparent opacity-0  transition-opacity"></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <CryptoLogo coin={coin} size={56} />
                      <div>
                        <h4 className="font-black text-lg text-orange-100 uppercase tracking-wide">{coin.name}</h4>
                        <p className="text-orange-300/80 text-sm font-bold uppercase tracking-widest">{coin.symbol}</p>
                      </div>
                    </div>
                    
                    <div
                      className={`flex items-center gap-2 px-4 py-2 font-black text-xs uppercase tracking-wider shadow-lg ${
                        coin.change >= 0
                          ? "bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-green-300 border border-green-400/50 shadow-green-500/20"
                          : "bg-gradient-to-r from-red-500/30 to-pink-500/30 text-red-300 border border-red-400/50 shadow-red-500/20"
                      }`}
                      style={{clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)'}}
                    >
                      {coin.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      {formatChange(coin.change)}
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="mb-8">
                    <p className="text-4xl font-black  text-yellow mb-2 tracking-tight">
                      {formatPrice(coin.price)}
                    </p>
                    <p className="text-white text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      {t("currentPrice")}
                    </p>
                  </div>

                  {/* Movement Section */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold text-sm uppercase tracking-wider">{t("movement")}</span>
                      <span className={`font-black text-lg ${coin.change >= 0 ? "text-white" : "text-white"}`}>
                        {Math.abs(coin.change).toFixed(2)}%
                      </span>
                    </div>
                    
                   
                   
                  </div>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-orange-400/60 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-pink-400/60 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-purple-400/60 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400/60 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 opacity-60"></div>
    </section>
  )
}