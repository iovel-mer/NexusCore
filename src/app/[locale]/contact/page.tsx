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
import { Mail, Phone, Users, Clock, Home, ArrowRight } from "lucide-react";
import { Header } from "../components/Header/Header";

const ContactPage = () => {
  const t = useTranslations("contact");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("✨ Your message has been sent successfully!");
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
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8  bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(236,72,153,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(59,130,246,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:25px_25px] animate-pulse" style={{animationDuration: '6s'}}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-16 w-48 h-48 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500/25 to-cyan-500/25 rounded-full blur-3xl animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-orange-500/35 to-red-500/35 rounded-full blur-2xl animate-ping" style={{animationDuration: '3s'}}></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Back to Home Link */}
          <div className='flex justify-start mb-12'>
            <Link 
              href="/" 
              className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800/90 to-slate-800/90 backdrop-blur-xl rounded-2xl border border-gray-600/40 hover:from-gray-700/90 hover:to-slate-700/90 hover:border-pink-400/50 transition-all duration-300 group text-base font-bold text-white shadow-xl hover:shadow-pink-500/20 hover:scale-105'
            >
              <Home className='h-6 w-6 mr-3 group-hover:-translate-x-1 transition-transform duration-300 text-white' />
              {t('backToHome')}
              <ArrowRight className='h-5 w-5 ml-3 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-white' />
            </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl sm:text-7xl font-black  mb-6 bg-gradient-to-r from-pink-300 via-purple-200 to-blue-300 bg-clip-text text-transparent leading-tight">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Options */}
            <div className="space-y-8">
              {contactOptions.map((item, index) => (
                <Card key={index} className="group relative bg-gradient-to-br from-gray-800/60 to-slate-900/70 backdrop-blur-xl border border-gray-600/40 hover:border-gray-400/60 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden rounded-3xl shadow-2xl">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl rounded-3xl`} />
                  
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 ${item.bgGlow} opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl`}></div>

                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center gap-4 text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-lg font-medium">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-3 text-base">
                    <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300 flex items-center gap-3 font-medium">
                      <Clock className="h-5 w-5 text-gray-400" /> {item.hours}
                    </p>
                  </CardContent>
                  
                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center rounded-b-3xl`} />
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="h-fit shadow-2xl border border-gray-600/40 bg-gradient-to-br from-gray-800/60 to-slate-900/70 backdrop-blur-xl rounded-3xl overflow-hidden">
              {/* Form Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-500 blur-2xl rounded-3xl"></div>
              
              <CardHeader className="relative z-10 pb-6">
                <CardTitle className="text-3xl text-white font-black bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text ">
                  {t("form.title")}
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg font-medium">
                  {t("form.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="text-white font-semibold text-base">{t("form.name")}</Label>
                    <Input
                      className="text-white bg-gray-700/50 border-gray-600/50 focus:border-pink-400/50 rounded-xl h-12 text-base backdrop-blur-sm"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="email" className="text-white font-semibold text-base">{t("form.email")}</Label>
                    <Input
                      className="text-white bg-gray-700/50 border-gray-600/50 focus:border-pink-400/50 rounded-xl h-12 text-base backdrop-blur-sm"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="subject" className="text-white font-semibold text-base">{t("form.subject")}</Label>
                    <Select name="subject">
                      <SelectTrigger className="text-white bg-gray-700/50 border-gray-600/50 focus:border-pink-400/50 rounded-xl h-12 text-base backdrop-blur-sm" id="subject">
                        <SelectValue placeholder={t("form.placeholder")} />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-600 rounded-xl">
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
                  <div className="grid gap-3">
                    <Label htmlFor="message" className="text-white font-semibold text-base">{t("form.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("form.placeholderMessage")}
                      className="min-h-[140px] text-white bg-gray-700/50 border-gray-600/50 focus:border-pink-400/50 rounded-xl text-base backdrop-blur-sm resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full text-lg font-bold bg-black text-white hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 rounded-xl h-14"
                  >
                    {t("form.button")}
                  </Button>

                  {successMessage && (
                    <div className="text-emerald-400 text-base text-center mt-6 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 backdrop-blur-sm">
                      {successMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;