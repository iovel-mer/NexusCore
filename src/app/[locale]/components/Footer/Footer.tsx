'use client';

import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Hexagon, Rocket, Zap } from 'lucide-react';

export default function Footer() {
  const tFooter = useTranslations('footer');
  const locale = useLocale();

  const routeMapping = {
    'About Us': `/${locale}/about`,
    Security: `/${locale}/security`,
    'Help Center': `/${locale}/help`,
    'Contact Us': `/${locale}/contact`,
    Blog: `/${locale}/blog`,
    Documentation: `/${locale}/documentation`,
    TermsOfService: `/${locale}/terms`,
    PrivacyPolicy: `/${locale}/privacy`,
    CookiePolicy: `/${locale}/cookie`,
  };

  const translationMapping = {
    'About Us': 'aboutUs',
    Security: 'security',
    'Help Center': 'helpCenter',
    'Contact Us': 'contactUs',
    Blog: 'blog',
    Documentation: 'documentation',
    TermsOfService: 'terms.title',
    PrivacyPolicy: 'privacy.title',
    CookiePolicy: 'cookies.title',
  };

  return (
    <div className='relative'>
      {/* Footer */}
      <footer className='py-24 px-6 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 relative text-white overflow-hidden'>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Cyberpunk Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.15)_2px,transparent_2px),linear-gradient(90deg,rgba(255,0,255,0.1)_2px,transparent_2px)] bg-[size:50px_50px] opacity-40"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-conic from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-conic from-green-500/15 via-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        
        {/* Neon Border Top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r text-white animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-pink-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

        <div className='container mx-auto relative z-10'>
          <div className='grid md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16'>
            <div className='lg:col-span-2 md:col-span-2 px-8'>
              <div className='flex items-center space-x-3 mb-6'>
               <div className="relative group">
  <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 border border-white/20 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rotate-45 translate-x-full transition-transform duration-1000" />
    <Hexagon size={28} className="text-white drop-shadow-lg relative z-10 transition-transform duration-500" />
  </div>
  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-700 rounded-2xl blur opacity-30 transition duration-300" />
</div>

                <span className='text-3xl font-black uppercase tracking-wider bg-gradient-to-r text-white bg-clip-text '>
                  NexusCore
                </span>
              </div>
              <p className='text-gray-300 mb-6 max-w-sm text-lg leading-relaxed font-light'>
                {tFooter('description')}
              </p>
              
              {/* Glitch Effect Lines */}
              <div className="space-y-1 opacity-30">
                <div className="h-px bg-gradient-to-r text-white to-transparent w-3/4"></div>
                <div className="h-px bg-gradient-to-r text-white to-transparent w-1/2"></div>
                <div className="h-px bg-gradient-to-r text-white to-transparent w-2/3"></div>
              </div>
            </div>

            {[
              {
                title: tFooter('company'),
                links: ['About Us', 'Security'],
                color: 'text-white'
              },
              {
                title: tFooter('terms.title'),
                links: ['TermsOfService', 'PrivacyPolicy', 'CookiePolicy'],
                color: 'text-white'
              },
              {
                title: tFooter('support'),
                links: ['Help Center', 'Contact Us'],
                color: 'text-white'
              },
              {
                title: tFooter('resources'),
                links: ['Blog', 'Documentation'],
                color: 'text-white'
              },
            ].map((section, index) => (
              <div key={section.title} className='md:col-span-1'>
                <h3 className={`font-black mb-6 text-lg uppercase tracking-wider bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                  {section.title}
                </h3>
                <ul className='space-y-4'>
                  {section.links.map(link => (
                    <li key={link} className="relative group">
                      <Link
                        href={routeMapping[link as keyof typeof routeMapping]}
                        className='text-white hover:text-white transition-all duration-300 cursor-pointer font-medium text-base relative inline-block group-hover:text-cyan-300'
                      >
                        <span className="relative z-10">
                          {tFooter(
                            translationMapping[
                              link as keyof typeof translationMapping
                            ]
                          )}
                        </span>
                        {/* Hover underline effect */}
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${section.color} w-0 group-hover:w-full transition-all duration-300`}></div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Separator with Neon Effect */}
          <div className="relative mb-12">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_20px_rgba(0,255,255,0.5)]" 
                 style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}></div>
          </div>
          
          {/* Legal Info Section */}
          <div className='relative bg-gradient-to-r from-gray-900/30 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 p-8 mb-12 overflow-hidden'
               style={{clipPath: 'polygon(0% 10%, 10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%)'}}>
            
            {/* Corner Decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/60"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-purple-400/60"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-pink-400/60"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-green-400/60"></div>
            
            <div className='flex flex-col w-full space-y-6'>
              <p className='text-white font-medium text-base leading-relaxed'>{tFooter('company_info')}</p>
              <p className='text-white font-medium text-base leading-relaxed'>{tFooter('risk_warning')}</p>
              <p className='text-white text-base leading-relaxed'>{tFooter('execution_notice')}</p>
              <p className='text-white font-medium text-base leading-relaxed'>{tFooter('age_restriction')}</p>
            </div>
          </div>

          {/* Copyright with Terminal Style */}
          <div className="relative">
              
             
              <span className="text-gray-300">
                © {new Date().getFullYear()} NexusCore {tFooter('rights')}
              </span>
           
          </div>
        </div>
        
        {/* Bottom Scan Line */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
      </footer>
    </div>
  );
}