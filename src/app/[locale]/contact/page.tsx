"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Users, Clock, Home, ArrowRight, AlertCircle } from "lucide-react";
import { Header } from "../components/Header/Header";

const ContactPage = () => {
  const t = useTranslations("contact");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [validationMessage, setValidationMessage] = useState<string | null>(null);
  const router = useRouter();

  const validateForm = () => {
    // Check if name is empty or too short
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      return "Please enter a valid name (at least 2 characters)";
    }

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      return "Please enter a valid email address";
    }

    // Check if subject is selected
    if (!formData.subject) {
      return "Please select a subject for your inquiry";
    }

    // Check message length
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      return "Please provide a detailed message (at least 10 characters)";
    }

    return null;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear validation message when user starts typing
    if (validationMessage) {
      setValidationMessage(null);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setValidationMessage(validationError);
      return;
    }

    // If validation passes, proceed with submission
    setValidationMessage(null);
    setSuccessMessage("Message sent successfully! Redirecting...");
    
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  const contactOptions = [
    {
      icon: Mail,
      title: t("general.title"),
      description: t("general.description"),
      hours: t("general.hours"),
      gradient: "from-rose-400 via-pink-500 to-purple-600",
      bgGlow: "bg-gradient-to-br from-rose-500/20 to-purple-500/20",
    },
    {
      icon: Phone,
      title: t("technical.title"),
      description: t("technical.description"),
      hours: t("technical.hours"),
      gradient: "from-blue-400 via-cyan-500 to-teal-600",
      bgGlow: "bg-gradient-to-br from-blue-500/20 to-teal-500/20",
    },
    {
      icon: Users,
      title: t("partnership.title"),
      description: t("partnership.description"),
      hours: t("partnership.hours"),
      gradient: "from-amber-400 via-orange-500 to-red-600",
      bgGlow: "bg-gradient-to-br from-amber-500/20 to-red-500/20",
    },
  ];

  return (
    <>
      <Header />
      <div className="w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(236,72,153,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:15px_15px] sm:bg-[size:20px_20px] md:bg-[size:25px_25px] animate-pulse" style={{animationDuration: '6s'}}></div>
        </div>

        {/* Floating Elements - Responsive */}
        <div className="absolute top-10 sm:top-20 right-8 sm:right-16 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-500/25 to-cyan-500/25 rounded-full blur-2xl sm:blur-3xl animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gradient-to-br from-orange-500/35 to-red-500/35 rounded-full blur-xl sm:blur-2xl animate-ping" style={{animationDuration: '3s'}}></div>

        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative z-10">
          {/* Back to Home Link - Fixed Size */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center px-5 py-2.5 border text-white hover:text-white hover:border-white transition-all duration-300 rounded-full text-sm font-semibold tracking-wider backdrop-blur-md group whitespace-nowrap"
            >
              <Home className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1 flex-shrink-0" />
              <span className="hidden sm:inline">{t("backToHome")}</span>
              <span className="sm:hidden">Home</span>
              <ArrowRight className="h-4 w-4 ml-2 rotate-180 transition-transform group-hover:-translate-x-1 flex-shrink-0" />
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-pink-300 via-purple-200 to-blue-300 bg-clip-text text-transparent leading-tight px-2">
              {t("title")}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto px-4">{t("subtitle")}</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-16 md:mb-20">
              {/* Contact Options */}
              <div className="space-y-6 sm:space-y-8">
                {contactOptions.map((item, index) => (
                  <Card key={index} className="group relative bg-gradient-to-br from-gray-800/60 to-slate-900/70 backdrop-blur-xl border border-gray-600/40 hover:border-gray-400/60 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl">
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl rounded-2xl sm:rounded-3xl`} />
                    
                    {/* Background Pattern */}
                    <div className={`absolute inset-0 ${item.bgGlow} opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}></div>

                    <CardHeader className="relative z-10 p-4 sm:p-6">
                      <CardTitle className="flex items-center gap-3 sm:gap-4 text-lg sm:text-xl md:text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base md:text-lg font-medium">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10 space-y-2 sm:space-y-3 text-sm sm:text-base p-4 sm:p-6">
                      <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300 flex items-center gap-2 sm:gap-3 font-medium">
                        <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" /> {item.hours}
                      </p>
                    </CardContent>
                    
                    {/* Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center rounded-b-2xl sm:rounded-b-3xl`} />
                  </Card>
                ))}
              </div>

              {/* Contact Form */}
              <Card className="h-fit shadow-2xl border border-gray-600/40 bg-gradient-to-br from-gray-800/60 to-slate-900/70 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden">
                {/* Form Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-500 blur-2xl rounded-2xl sm:rounded-3xl"></div>
                
                <CardHeader className="relative z-10 pb-4 sm:pb-6 p-4 sm:p-6">
                  <CardTitle className="text-2xl sm:text-3xl text-white font-black bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text">
                    {t("form.title")}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base sm:text-lg font-medium">
                    {t("form.description")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10 p-4 sm:p-6">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid gap-2 sm:gap-3">
                      <Label htmlFor="name" className="text-white font-semibold text-sm sm:text-base">{t("form.name")}</Label>
                      <Input
                        className="text-white bg-gray-700/50 border-gray-600/50 focus:border-pink-400/50 rounded-lg sm:rounded-xl h-10 sm:h-12 text-sm sm:text-base backdrop-blur-sm"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2 sm:gap-3">
                      <Label htmlFor="email" className="text-white font-semibold text-sm sm:text-base">{t("form.email")}</Label>
                      <Input
                        className="text-white bg-gray-700/50 border-gray-600/50 focus:border-pink-400/50 rounded-lg sm:rounded-xl h-10 sm:h-12 text-sm sm:text-base backdrop-blur-sm"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2 sm:gap-3">
                      <Label htmlFor="subject" className="text-white font-semibold text-sm sm:text-base">{t("form.subject")}</Label>
                      <Select 
                        name="subject" 
                        value={formData.subject}
                        onValueChange={(value) => handleInputChange('subject', value)}
                      >
                        <SelectTrigger className="text-white bg-gray-700/50 border-gray-600/50 focus:border-pink-400/50 rounded-lg sm:rounded-xl h-10 sm:h-12 text-sm sm:text-base backdrop-blur-sm" id="subject">
                          <SelectValue placeholder={t("form.placeholder")} />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 rounded-lg sm:rounded-xl">
                          <SelectItem value="general" className="text-white hover:bg-gray-700">
                            {t("form.options.general")}
                          </SelectItem>
                          <SelectItem value="technical" className="text-white hover:bg-gray-700">
                            {t("form.options.technical")}
                          </SelectItem>
                          <SelectItem value="billing" className="text-white hover:bg-gray-700">
                            {t("form.options.billing")}
                          </SelectItem>
                          <SelectItem value="partnership" className="text-white hover:bg-gray-700">
                            {t("form.options.partnership")}
                          </SelectItem>
                          <SelectItem value="other" className="text-white hover:bg-gray-700">
                            {t("form.options.other")}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2 sm:gap-3">
                      <Label htmlFor="message" className="text-white font-semibold text-sm sm:text-base">{t("form.message")}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t("form.placeholderMessage")}
                        className="min-h-[120px] sm:min-h-[140px] text-white bg-gray-700/50 border-gray-600/50 focus:border-pink-400/50 rounded-lg sm:rounded-xl text-sm sm:text-base backdrop-blur-sm resize-none"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                      />
                    </div>

                    {/* Validation Message */}
                    {validationMessage && (
                      <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg sm:rounded-xl backdrop-blur-sm">
                        <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 flex-shrink-0" />
                        <p className="text-orange-200 text-xs sm:text-sm font-medium">{validationMessage}</p>
                      </div>
                    )}

                    {/* Success Message */}
                    {successMessage && (
                      <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-green-500/10 border border-green-500/30 rounded-lg sm:rounded-xl backdrop-blur-sm">
                        <div className="h-4 w-4 sm:h-5 sm:w-5 bg-green-400 rounded-full flex-shrink-0"></div>
                        <p className="text-green-200 text-xs sm:text-sm font-medium">{successMessage}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full text-base sm:text-lg font-bold bg-black text-white hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 rounded-lg sm:rounded-xl h-12 sm:h-14"
                    >
                      {t("form.button")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;