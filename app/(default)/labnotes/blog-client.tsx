'use client';

import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../../sanity/lib/image';
import { FaExternalLinkAlt, FaTools, FaCodeBranch, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import ParticleNetwork from '@/components/ui/particle-network';
import { useLanguage } from '@/context/language-context';

export default function BlogClient({ posts, settings }: { posts: any[], settings?: any }) {
  const { language, t } = useLanguage();

  const heroLabel = settings?.heroLabel?.[language] || t.blog.title;
  const heroTitle = settings?.heroTitle?.[language] || t.blog.title;
  const heroSubtitle = settings?.heroSubtitle?.[language] || t.blog.social;
  const heroDescription = settings?.heroDescription?.[language] || t.blog.subtitle;

  const radarTitle = settings?.radarTitle?.[language] || t.blog.radarTitle;

  const newsletterTitle = settings?.newsletterTitle?.[language] || (language === 'en' ? "Want to stay updated?" : "¿Quieres estar al día?");
  const newsletterDescription = settings?.newsletterDescription?.[language] || (language === 'en' ? "Biweekly technical newsletter. No spam, just code and architecture." : "Newsletter técnica quincenal. Sin spam, solo código y arquitectura.");
  const newsletterButton = settings?.newsletterButton?.[language] || (language === 'en' ? "Subscribe" : "Suscribirse");

  const footerTitle = settings?.footerTitle?.[language] || t.blog.footerTitle;
  const footerDescription = settings?.footerDescription?.[language] || t.blog.footerDesc;

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const remainingPosts = posts.length > 1 ? posts.slice(1) : [];

  // Tech Radar data from Sanity
  const techNews = settings?.techRadar || [];

  const categories = [t.blog.all, "Frontend", "Backend", "IA & ML", "Arquitectura", "DevOps", "Cultura Dev"];

  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-orange-500 selection:text-white">

      {/* ═══════════ BACKGROUND TEXTURES ═══════════ */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-gradient-to-br from-gray-50 via-gray-100 to-purple-50/40" />
      <ParticleNetwork />
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #9ca3af 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          opacity: 0.1,
        }}
      />
      
      {/* Animated blobs for color bleeding */}
      <div className="fixed top-20 -left-32 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl pointer-events-none z-0 animate-blob" />
      <div className="fixed top-96 -right-32 w-[500px] h-[500px] bg-blue-300/15 rounded-full blur-3xl pointer-events-none z-0 animate-blob animation-delay-2000" />
      <div className="fixed bottom-20 left-1/3 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none z-0 animate-blob animation-delay-4000" />

      {/* ═══════════ CONTENT (relative z-10) ═══════════ */}
      <div className="relative z-10">

        {/* Hero Header */}
        <header className="pt-28 pb-10 px-6 sm:px-10 lg:px-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 text-xs font-bold uppercase tracking-widest mb-6 border border-orange-500/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse mr-2" />
            {heroLabel}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tighter leading-[0.9]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">{heroTitle}</span>
            <br />
            <span className="text-lg sm:text-xl lg:text-2xl font-light text-gray-400 tracking-normal">&amp; {heroSubtitle}</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {heroDescription}
          </p>
        </header>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">

          {/* ═══════════ FEATURED ARTICLE ═══════════ */}
          {featuredPost && (
            <section className="mb-12">
              <Link href={`/labnotes/${featuredPost.slug.current}`} className="group block">
                <article className="relative rounded-3xl overflow-hidden h-[320px] md:h-[380px] shadow-2xl">
                  {/* Background image */}
                  {featuredPost.mainImage ? (
                    <Image
                      src={urlFor(featuredPost.mainImage).url()}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                      priority
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider mb-3 lg:mb-4 border border-orange-500/30 backdrop-blur-sm">
                      {heroLabel}
                    </div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 lg:mb-4 leading-tight group-hover:text-orange-200 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl line-clamp-2 mb-4 lg:mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      {featuredPost.author?.image ? (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
                          <Image src={urlFor(featuredPost.author.image).url()} alt={featuredPost.author.name} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-orange-500/30 text-orange-200 flex items-center justify-center font-bold text-sm border border-orange-500/40">
                          {featuredPost.author?.name ? featuredPost.author.name.charAt(0) : 'S'}
                        </div>
                      )}
                      <div>
                        <span className="text-white text-sm font-medium block">{featuredPost.author?.name || 'Sambalab Team'}</span>
                        <span className="text-gray-400 text-xs">
                          {new Date(featuredPost.publishedAt || new Date()).toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </section>
          )}

          {/* ═══════════ MAIN GRID: ARTICLES + SIDEBAR ═══════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">

            {/* Latest Articles */}
            <section className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full" />
                <h2 className="text-3xl font-extrabold text-gray-900">{t.blog.latestNotes}</h2>
              </div>

              {/* Category chips */}
              <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((cat, idx) => (
                  <button
                    key={cat}
                    className={`whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                      idx === 0
                        ? 'bg-gray-900 text-white border-gray-900 shadow-sm'
                        : 'bg-white/80 backdrop-blur-sm text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {remainingPosts.map((post: any, idx: number) => (
                  <Link key={post.slug.current} href={`/labnotes/${post.slug.current}`} className="group block h-full">
                    <article
                      className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="relative h-44 w-full overflow-hidden">
                        {post.mainImage ? (
                          <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                            <Image src="/sambalablogo.png" alt="Sambalab" width={100} height={30} className="opacity-20 grayscale" />
                          </div>
                        )}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="text-xs text-orange-600 font-bold mb-3 uppercase tracking-wider">
                          {new Date(post.publishedAt || new Date()).toLocaleDateString('es-ES', {
                            month: 'short', day: 'numeric', year: 'numeric'
                          })}
                        </div>

                        <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors leading-tight">
                          {post.title}
                        </h3>

                        <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed flex-1 mb-5">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center pt-4 border-t border-gray-100 mt-auto">
                          {post.author?.image ? (
                            <div className="relative w-7 h-7 rounded-full overflow-hidden mr-2.5 border border-gray-200 shadow-sm">
                              <Image src={urlFor(post.author.image).url()} alt={post.author.name} fill className="object-cover" />
                            </div>
                          ) : (
                            <div className="w-7 h-7 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs mr-2.5">
                              {post.author?.name ? post.author.name.charAt(0) : 'S'}
                            </div>
                          )}
                          <span className="text-sm font-medium text-gray-600">
                            {post.author?.name || 'Sambalab Team'}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
                {posts.length === 0 && (
                  <div className="col-span-full py-16 text-center bg-white/60 backdrop-blur-sm rounded-3xl border border-dashed border-gray-300">
                    <p className="text-gray-500 mb-2">{t.blog.empty}</p>
                  </div>
                )}
              </div>
            </section>

            {/* Sidebar: Tech Radar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                
                {techNews.length > 0 && (
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
                      {radarTitle}
                    </h3>
                    <div className="space-y-5">
                      {techNews.map((news: any, idx: number) => (
                        <a key={idx} href={news.url} target="_blank" rel="noopener noreferrer" className="block group/news">
                          <article className="pb-5 border-b border-gray-50 last:border-0 last:pb-0">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                                {news.tag}
                              </span>
                              <span className="text-xs text-gray-400">{news.date}</span>
                            </div>
                            <h4 className="text-sm font-bold text-gray-800 group-hover/news:text-orange-600 transition-colors leading-snug mb-1">
                              {news.title}
                            </h4>
                            <div className="text-xs text-gray-500 flex items-center">
                              {t.blog.source} {news.source} <FaExternalLinkAlt className="ml-1 opacity-50 text-[10px]" />
                            </div>
                          </article>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Newsletter CTA */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/80 backdrop-blur-sm rounded-3xl p-6 text-center border border-orange-200/50">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold text-orange-800 mb-1">{newsletterTitle}</p>
                  <p className="text-xs text-orange-600/80 mb-4">{newsletterDescription}</p>
                  <button className="w-full bg-orange-500 text-white font-semibold text-sm py-2.5 rounded-xl hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md">
                    {newsletterButton}
                  </button>
                </div>

              </div>
            </aside>

          </div>

          {/* ═══════════ BOTTOM: ABOUT LAB NOTES ═══════════ */}
          <section className="-mx-6 sm:-mx-10 lg:-mx-20 bg-gray-900 px-6 sm:px-10 lg:px-20 py-16 relative mt-10">
            {/* SVG Wave on Top (Symmetrical Curve with Gradient Stroke) */}
            <div className="absolute top-0 left-0 right-0 -mt-[39px] overflow-hidden leading-[0] pointer-events-none">
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10">
                <path d="M0,0 Q600,80 1200,0 L1200,120 L0,120 Z" className="fill-gray-900"></path>
                <path d="M0,0 Q600,80 1200,0" fill="none" stroke="url(#wave-gradient)" strokeWidth="3"></path>
                <defs>
                  <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              {/* Lab Ornament */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-gray-800 bg-gray-950/40 text-[10px] font-mono tracking-widest text-orange-500 uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                {"// ABOUT_LAB_NOTES_"}
              </div>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-6">
                {footerTitle}
              </h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                {footerDescription}
              </p>

              {/* Social Icons */}
              <div className="flex justify-center gap-6 mt-6">
                <a href="https://github.com/dgrcodex" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/101243899" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="https://instagram.com/sambalabnexus" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <FaInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* ═══════════ CSS ANIMATIONS ═══════════ */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(20px, 40px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 20s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
