"use client"

import Link from "next/link"
import type React from "react"
import { useState } from "react"
import { LogIn, UserPlus, Hexagon, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { useLocale, useTranslations } from "next-intl"

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const locale = useLocale()
  const t = useTranslations("Header")

  return (
   <header className="bg-gradient-to-br sticky top-0  mx-auto from-slate-900 via-gray-900 to-slate-950 z-50 border-b border-emerald-400/20">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
  <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(-60deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:25px_25px] pointer-events-none"></div>
  
  <div className="relative  mx-auto px-6 py-5">
    <div className="flex items-center justify-between">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-4">
        <Link href={`/${locale}`} className="flex items-center space-x-4">
          <div className="relative group ">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl  transition-all duration-300  border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-45 translate-x-full  transition-transform duration-1000"></div>
              <Hexagon size={28} className="text-white drop-shadow-lg relative z-10  transition-transform duration-500" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-700 rounded-2xl blur opacity-30  transition duration-300"></div>
          </div>
        <div>
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-cyan-300 drop-shadow-sm">
            NexusCore
          </h1>
         
        </div>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href={`/${locale}/login`}>
          <Button className="group relative overflow-hidden flex items-center gap-3 p-6 cursor-pointer rounded-2xl text-sm font-semibold 
            bg-gradient-to-r from-emerald-600 to-cyan-600 text-white border-0 shadow-xl shadow-emerald-500/25
            hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-[1.02] 
            transition-all duration-300 ease-out">
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
              -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            
            {/* Subtle glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-cyan-400/0 
              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <LogIn size={18} className="relative z-10 group-hover:rotate-3 transition-transform duration-300" />
            <span className="relative z-10">{t("signIn")}</span>
          </Button>
        </Link>
        
        <Link href={`/${locale}/register`}>
          <Button className="group relative overflow-hidden flex items-center cursor-pointer gap-3 px-7 py-6 rounded-2xl text-sm font-semibold 
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
            <span className="relative z-10">{t("getStarted")}</span>
          </Button>
        </Link>

        <div className="ml-2">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative p-2 text-white/80  focus:outline-none rounded-xl  transition-all duration-200"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="md:hidden mt-6 space-y-4 flex flex-col items-start bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10">
        <Link href={`/${locale}/login`} onClick={() => setIsMenuOpen(false)} className="w-full">
          <Button className="group relative overflow-hidden flex items-center gap-3 px-6 py-3 rounded-2xl text-sm font-semibold w-full
            bg-gradient-to-r from-emerald-600 to-cyan-600 text-white border-0 shadow-xl shadow-emerald-500/25
            hover:shadow-2xl hover:shadow-emerald-500/40 hover:scale-[1.01] 
            transition-all duration-300 ease-out">
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
              -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            
            <LogIn size={18} className="relative z-10" />
            <span className="relative z-10">{t("signIn")}</span>
          </Button>
        </Link>
        
        <Link href={`/${locale}/register`} onClick={() => setIsMenuOpen(false)} className="w-full">
          <Button className="group relative overflow-hidden flex items-center gap-3 px-6 py-3 rounded-2xl text-sm font-semibold w-full
            bg-white/10 backdrop-blur-md text-white border border-white/20 shadow-xl
            hover:bg-white/20 hover:border-white/30 hover:shadow-2xl hover:scale-[1.01]
            transition-all duration-300 ease-out">
            
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-600/20 rounded-2xl
              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
              -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <UserPlus size={18} className="relative z-10 drop-shadow-sm" />
            <span className="relative z-10 drop-shadow-sm">{t("getStarted")}</span>
          </Button>
        </Link>
        
        <div className="w-full pt-2">
          <LanguageSwitcher />
        </div>
      </div>
    )}
  </div>
</header>
  )
}