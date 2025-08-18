"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import type { LoginCredentials } from "@/app/api/types/auth"
import { postLogin } from "@/app/api/auth/postLogin"
import { useCredentials } from "@/hooks/use-credentials"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useLocale, useTranslations } from "next-intl"

export default function LoginPage() {
  const { storeCredentials } = useCredentials()
  const router = useRouter()
  const t = useTranslations("login")
  const locale = useLocale();
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
    twoFactorCode: "",
    rememberMe: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showTwoFactor, setShowTwoFactor] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const credentials: LoginCredentials = {
      emailOrUsername: formData.emailOrUsername,
      password: formData.password,
      ...(showTwoFactor && { twoFactorCode: formData.twoFactorCode }),
      ...(formData.rememberMe && { rememberMe: formData.rememberMe }),
    }

    const response = await postLogin(credentials)

    if (!response.success) {
      setError(response.message || "Login failed")
      setIsLoading(false)
      return
    }

    // Store credentials for Web Trader access
    storeCredentials(credentials)
    window.location.href = "/dashboard"
  }

  const benefits = [
    t("benefits.pairAccess"),
    t("benefits.advancedTools"),
    t("benefits.secureWallet"),
    t("benefits.customerSupport"),
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex items-center justify-center p-4 sm:p-8">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl rounded-2xl overflow-hidden shadow-2xl bg-white/60 backdrop-blur-lg border border-emerald-200/50">
        {/* Left Side - Login Form */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
          <Link href={`/${locale}`} className="inline-flex items-center max-w-[130px] text-white hover:text-emerald-700 transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("backToHome")}
          </Link>
          <Card className="w-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 border-emerald-200/60 text-white shadow-xl backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-white">{t("signIn")}</CardTitle>
              <CardDescription className="text-white">{t("welcomeBack")}</CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="emailOrUsername" className="text-white">
                    {t("emailOrUsername")}
                  </Label>
                  <Input
                    id="emailOrUsername"
                    name="emailOrUsername"
                    type="text"
                    placeholder={t("placemail")}
                    value={formData.emailOrUsername}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="bg-white/70 text-white border-emerald-200  placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20 disabled:bg-slate-100 disabled:opacity-70"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    {t("password")}
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder= {t("placepass")}
                    value={formData.password}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    className="bg-white/70 border-emerald-200 text-white placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20 disabled:bg-slate-100 disabled:opacity-70"
                    required
                  />
                </div>
                {showTwoFactor && (
                  <div className="space-y-2">
                    <Label htmlFor="twoFactorCode" className="text-slate-700">
                      {t("twoFactorCode")}
                    </Label>
                    <Input
                      id="twoFactorCode"
                      name="twoFactorCode"
                      type="text"
                      placeholder="Enter 2FA code"
                      value={formData.twoFactorCode}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      className="bg-white/70 text-white border-emerald-200  placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20 disabled:bg-slate-100 disabled:opacity-70"
                    />
                  </div>
                )}
               
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-emerald-500/25 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {t("signingIn")}
                    </div>
                  ) : (
                    t("signIn")
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center flex flex-col">
              <p className="text-white">
                {t("dontHaveAccount")}{" "}
                <Link href="/register" className="text-emerald-600 hover:text-emerald-700 font-medium">
                   {t("signUp")}
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
        {/* Right Side - Trading Benefits */}
       <div className="flex-1 p-8 lg:p-12 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 flex flex-col justify-center border-l border-emerald-200/30 lg:border-t-0 border-t">
      <h2 className="text-3xl font-bold text-white mb-8">{t("startTrading")}</h2>

      <div className="space-y-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-4 h-4 text-white" />
            </div>
            <p className="text-slate-300 leading-relaxed">{benefit}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-8 border-t border-slate-700">
        <div className="text-center">
          <p className="text-slate-400 text-sm mb-1">{t("totalVolume")}</p>
          <p className="text-2xl font-bold text-emerald-400">$2.8B+</p>
        </div>
        <div className="text-center">
          <p className="text-slate-400 text-sm mb-1">{t("activeTraders")}</p>
          <p className="text-2xl font-bold text-emerald-400">500K+</p>
        </div>
        <div className="text-center">
          <p className="text-slate-400 text-sm mb-1">{t("countries")}</p>
          <p className="text-2xl font-bold text-emerald-400">180+</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}