'use client';

import { useTranslations } from 'next-intl';
import { Header } from '../components/Header/Header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  Zap,
  Shield,
  HelpCircle,
  Clock,
  User,
  Home,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const Page = () => {
  const t = useTranslations('blog');

  const tableOfContents = [
    { id: 'overview', title: t('overview.title'), icon: BookOpen },
    { id: 'quickStart', title: t('quickStart.title'), icon: Zap },
    { id: 'authentication', title: t('authentication.title'), icon: Shield },
    { id: 'faq', title: t('faq.title'), icon: HelpCircle },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <div className='container mx-auto min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative'>
        <div className='absolute inset-0 z-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none'></div>
        <main className=' px-4 py-8 md:py-12 lg:py-16'>
          <div className='p-20'>
               <Link
                href="/"
                className="inline-flex items-center px-5 py-2.5 border text-white hover:text-white hover:border-white transition-all duration-300 rounded-full text-sm font-semibold tracking-wider   backdrop-blur-md"
                            >
                <Home className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
                {t("backToHome")}
                <ArrowRight className="h-4 w-4 ml-2 rotate-180 transition-transform group-hover:-translate-x-1" />
                            </Link>
            </div>
           
            <div className='text-center mb-12'>
              <h1 className='text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-6'>
                {t('title')}
              </h1>
              <p className='text-xl text-white max-w-3xl mx-auto leading-relaxed'>
                {t('subtitle')}
              </p>

              {/* Meta Info */}
              <div className='flex items-center justify-center gap-6 mt-8 text-sm text-white'>
                <div className='flex items-center gap-2 px-3 py-2 bg-black rounded-full border border-violet-200/30'>
                  <Clock className='w-4 h-4 text-white' />
                  <span>{t('meta.readTime')}</span>
                </div>
                <div className='flex items-center gap-2 px-3 py-2 bg-black rounded-full border border-violet-200/30'>
                  <User className='w-4 h-4 text-white' />
                  <span>{t('meta.updated')}</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className='lg:col-span-3'>
              <article className='prose prose-lg prose-gray max-w-none'>
                {/* Overview */}
                <section id='overview' className='mb-12'>
                  <Card className=' backdrop-blur-sm border-violet-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:shadow-violet-500/10'>
                    <CardContent className='p-8'>
                      <div className='flex items-center gap-3 mb-6'>
                        <div className='p-3 b rounded-xl shadow-sm'>
                          <BookOpen className='w-6 h-6' />
                        </div>
                        <h2 className='text-2xl font-semibold text-white m-0'>
                          {t('overview.title')}
                        </h2>
                      </div>
                      <p className='text-white leading-relaxed m-0'>
                        {t('overview.content')}
                      </p>
                    </CardContent>
                  </Card>
                </section>
              </article>
            </div>
          
        </main>
      </div>
    </>
  );
};

export default Page;
