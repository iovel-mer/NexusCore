"use client"

import { parseISO, format } from "date-fns"
import type React from "react"
import { useState, useEffect } from "react"
import { ArrowLeft, Check, ChevronDown, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Command, CommandInput, CommandEmpty, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { postRegistration } from "@/app/api/auth/postRegistration"
import { getCountries } from "@/app/api/countries/getCountries"
import { getLanguages } from "@/app/api/languages/getLanguages"
import type { Country } from "@/app/api/types/countries"
import type { Language } from "@/app/api/types/languages"
import { useTranslations } from "next-intl"

export default function RegisterPage() {
  const router = useRouter()
   const t = useTranslations("Register")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    phoneNumber: "",
    telephone: "",
    country: "",
    language: "",
    dateOfBirth: "",
    source: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [countries, setCountries] = useState<Country[]>([])
  const [languages, setLanguages] = useState<Language[]>([])
  const [countrySearch, setCountrySearch] = useState("")
  const [languageSearch, setLanguageSearch] = useState("")
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false) // State for date picker popover

  useEffect(() => {
    if (typeof window !== "undefined") {
      setFormData((prev) => ({
        ...prev,
        source: window.location.origin,
      }))
    }
    const fetchData = async () => {
      try {
        const [countriesResponse, languagesData] = await Promise.all([getCountries(), getLanguages()])
        if (countriesResponse.success && countriesResponse.data) {
          const allCountries = countriesResponse.data
          setCountries(allCountries)
          // 🟢 Detect country from IP and set default
          try {
            const res = await fetch("https://ipapi.co/json/")
            const locationData = await res.json()
            const detectedCountryCode = locationData?.country_code
            if (detectedCountryCode) {
              const matched = allCountries.find((c) => c.code === detectedCountryCode)
              if (matched) {
                setFormData((prev) => ({
                  ...prev,
                  country: matched.code,
                }))
              }
            }
          } catch (geoError) {
            console.warn("Could not detect location via IP:", geoError)
          }
        }
        setLanguages(languagesData)
      } catch (error) {
        console.error("Error fetching countries or languages:", error)
      }
    }
    fetchData()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value === "" ? "" : value,
    }))
  }

  const handleDateSelect = (date: Date | undefined) => {
    setFormData((prev) => ({
      ...prev,
      dateOfBirth: date ? format(date, "yyyy-MM-dd") : "", 
    }))
    setShowDatePicker(false) 
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    const response = await postRegistration(formData)
    if (response.errors) {
      setError(response.message ?? "An unknown error occurred")
      setIsLoading(false)
      return
    }
    router.push("/login?registered=true")
    setIsLoading(false)
  }

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      country.code.toLowerCase().includes(countrySearch.toLowerCase()),
  )
  const filteredLanguages = languages.filter(
    (language) =>
      language.name.toLowerCase().includes(languageSearch.toLowerCase()) ||
      language.code.toLowerCase().includes(languageSearch.toLowerCase()),
  )

  const handleCountrySelect = (countryCode: string) => {
    setFormData((prev) => ({ ...prev, country: countryCode }))
    setCountrySearch("")
    setShowCountryDropdown(false)
  }

  const handleLanguageSelect = (languageCode: string) => {
    setFormData((prev) => ({ ...prev, language: languageCode }))
    setLanguageSearch("")
    setShowLanguageDropdown(false)
  }

  const selectedCountry = countries.find((c) => c.code === formData.country)
  const selectedLanguage = languages.find((l) => l.code === formData.language)

  // Parse dateOfBirth string to Date object for Calendar component
  const dateOfBirthDate = formData.dateOfBirth ? parseISO(formData.dateOfBirth) : undefined

  return (
     <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex flex-col lg:flex-row">
      {/* Left-side Registration Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
        <Card className="w-full max-w-md bg-white/80 backdrop-blur-sm border-emerald-200/50 text-slate-800 shadow-2xl shadow-emerald-500/10">
          <CardHeader className="pb-4">
            <Link href="/" className="inline-flex items-center text-black  mb-4 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> {t("backToHome")}
            </Link>
            <CardTitle className="text-3xl font-bold text-slate-800 text-center">{t("title")}</CardTitle>
            <p className="text-slate-600 text-center">{t("subtitle")}</p>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="p-3 mb-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-700">
                    {t("firstName")}
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder={t("firstNamePlaceholder")}
                    value={formData.firstName}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    required
                    className="bg-white/70 border-emerald-200 text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-700">
                    {t("lastName")}
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder={t("lastNamePlaceholder")}
                    value={formData.lastName}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    required
                    className="bg-white/70 border-emerald-200 text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700">
                  {t("email")}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                  className="bg-white/70 border-emerald-200 text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username" className="text-slate-700">
                  {t("username")}
                </Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder={t("usernamePlaceholder")}
                  value={formData.username}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                  className="bg-white/70 border-emerald-200 text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-slate-700">
                  {t("password")}
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder={t("passwordPlaceholder")}
                  value={formData.password}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                  className="bg-white/70 border-emerald-200 text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-slate-700">
                  {t("phoneNumber")}
                </Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder={t("phoneNumberPlaceholder")}
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  disabled={isLoading}
                  required
                  className="bg-white/70 border-emerald-200 text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:ring-emerald-500/20"
                />
              </div>
              {/* Country Selector */}
              <div className="space-y-2">
                <Label htmlFor="country" className="text-slate-700">
                  {t("country")}
                </Label>
                <Popover open={showCountryDropdown} onOpenChange={setShowCountryDropdown}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={showCountryDropdown}
                      className="w-full justify-between bg-white/70 border-emerald-200 text-slate-800 hover:bg-emerald-50 hover:text-slate-800 focus:ring-emerald-500/20"
                      disabled={isLoading}
                    >
                      {selectedCountry ? selectedCountry.name : t("selectCountry")}
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] p-0 bg-white border-emerald-200 text-slate-800">
                    <Command className="bg-white text-slate-800">
                      <CommandInput
                        placeholder={t("searchCountries")}
                        value={countrySearch}
                        onValueChange={setCountrySearch}
                        className="bg-white border-emerald-200 text-slate-800 placeholder:text-slate-400 focus:ring-emerald-500/20"
                      />
                      <CommandList className="max-h-60 overflow-y-auto">
                        <CommandEmpty>{t("noCountryFound")}</CommandEmpty>
                        <CommandGroup>
                          {filteredCountries.map((country) => (
                            <CommandItem
                              key={country.code}
                              value={country.name}
                              onSelect={() => handleCountrySelect(country.code)}
                              className="cursor-pointer hover:bg-emerald-50 bg-white text-slate-800 data-[selected=true]:bg-emerald-100 data-[selected=true]:text-emerald-800"
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  formData.country === country.code ? "opacity-100" : "opacity-0",
                                )}
                              />
                              {country.name}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              {/* Language Selector */}
              <div className="space-y-2">
                <Label htmlFor="language" className="text-slate-700">
                  {t("language")}
                </Label>
                <Popover open={showLanguageDropdown} onOpenChange={setShowLanguageDropdown}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={showLanguageDropdown}
                      className="w-full justify-between bg-white/70 border-emerald-200 text-slate-800 hover:bg-emerald-50 hover:text-slate-800 focus:ring-emerald-500/20"
                      disabled={isLoading}
                    >
                      <span className={selectedLanguage ? "text-slate-800" : "text-slate-400"}>
                        {selectedLanguage ? selectedLanguage.name : t("selectLanguage")}
                      </span>
                      <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[--radix-popover-trigger-width] p-0 bg-white border-emerald-200 text-slate-800">
                    <Command className="bg-white text-slate-800">
                      <CommandInput
                        placeholder={t("searchLanguages")}
                        value={languageSearch}
                        onValueChange={setLanguageSearch}
                        className="bg-white border-emerald-200 text-slate-800 placeholder:text-slate-400 focus:ring-emerald-500/20"
                      />
                      <CommandList className="max-h-60 overflow-y-auto">
                        <CommandEmpty>{t("noLanguageFound")}</CommandEmpty>
                        <CommandGroup>
                          {filteredLanguages
                            .sort((a, b) => {
                              const priorityOrder = ["en", "de"] // English, then German
                              const indexA = priorityOrder.indexOf(a.code)
                              const indexB = priorityOrder.indexOf(b.code)
                              if (indexA !== -1 || indexB !== -1) {
                                return (
                                  (indexA === -1 ? Number.POSITIVE_INFINITY : indexA) -
                                  (indexB === -1 ? Number.POSITIVE_INFINITY : indexB)
                                )
                              }
                              return a.name.localeCompare(b.name)
                            })
                            .map((language) => (
                              <CommandItem
                                key={language.code}
                                value={language.name}
                                onSelect={() => handleLanguageSelect(language.code)}
                                className="cursor-pointer text-slate-800 hover:bg-emerald-50 data-[selected=true]:bg-emerald-100 data-[selected=true]:text-emerald-800"
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    formData.language === language.code ? "opacity-100" : "opacity-0",
                                  )}
                                />
                                {language.name}
                              </CommandItem>
                            ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              {/* Date of Birth */}
              <div className="space-y-2">
                <Label htmlFor="dateOfBirth" className="text-slate-700">
                  {t("dateOfBirth")}
                </Label>
                <Popover open={showDatePicker} onOpenChange={setShowDatePicker}>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white/70 border-emerald-200 text-slate-800 hover:bg-emerald-50 hover:text-slate-800 focus:ring-emerald-500/20",
                        !formData.dateOfBirth && "text-slate-400",
                      )}
                      disabled={isLoading}
                    >
                      <CalendarDays className="mr-2 size-4" />
                      {formData.dateOfBirth ? format(dateOfBirthDate!, "PPP") : <span>{t("pickDate")}</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white border-emerald-200 text-slate-800">
                    <Calendar
                      mode="single"
                      selected={dateOfBirthDate}
                      onSelect={handleDateSelect}
                      initialFocus
                      captionLayout="dropdown"
                      fromYear={1900}
                      toYear={new Date().getFullYear()}
                      className="[&_td]:text-slate-700 [&_th]:text-slate-600 [&_button]:text-slate-700 [&_button]:hover:bg-emerald-50 [&_button]:focus:bg-emerald-50 [&_div.rdp-day_selected]:bg-emerald-500 [&_div.rdp-day_selected]:text-white [&_div.rdp-day_today]:text-emerald-600 [&_select]:bg-white [&_select]:text-slate-800 [&_select]:border-emerald-200 [&_select]:rounded-md [&_select]:focus:ring-emerald-500/20"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {t("creatingAccount")}
                  </div>
                ) : (
                  t("createAccount")
                )}
              </Button>
            </form>
            <p className="text-center text-slate-600 mt-4">
              {t("alreadyHaveAccount")}{" "}
              <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
                {t("signIn")}
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
      {/* Right-side Benefits Panel */}
      <div className="flex-1 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-8 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {/* Subtle background pattern/texture */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>
        <div className="max-w-lg space-y-8 z-10 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold text-white mb-8 leading-tight">{t("unlockTradingPotential")}</h2>
          <div className="space-y-6">
            {[t("benefit1"), t("benefit2"), t("benefit3"), t("benefit4")].map((benefit, idx) => (
              <div key={idx} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center mt-0.5 shadow-md">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-slate-300 leading-relaxed text-lg">{benefit}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-700 mt-8">
            <div className="text-center">
              <p className="text-slate-400 text-sm mb-1">{t("totalTradingVolume")}</p>
              <p className="text-3xl font-bold text-emerald-400">$2.8B+</p>
            </div>
            <div className="text-center">
              <p className="text-slate-400 text-sm mb-1">{t("activeTraders")}</p>
              <p className="text-3xl font-bold text-emerald-400">500K+</p>
            </div>
            <div className="text-center">
              <p className="text-slate-400 text-sm mb-1">{t("countries")}</p>
              <p className="text-3xl font-bold text-emerald-400">180+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}