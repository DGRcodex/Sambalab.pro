import { client } from '../../../sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../../sanity/lib/image';
import { FaExternalLinkAlt, FaTools, FaCodeBranch, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    author->{name, image}
  }`;
  return client.fetch(query);
}

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const remainingPosts = posts.length > 1 ? posts.slice(1) : [];

  // Tech Radar mock data
  const techNews = [
    {
      title: "Linus Torvalds sobre el futuro del Kernel",
      source: "Kernel.org",
      url: "#",
      date: "24 Jun, 2026",
      tag: "Open Source"
    },
    {
      title: "Next.js 16: Qué trae el nuevo App Router",
      source: "Vercel Blog",
      url: "#",
      date: "20 Jun, 2026",
      tag: "React"
    },
    {
      title: "Cómo la IA está reescribiendo la infraestructura Cloud",
      source: "AWS News",
      url: "#",
      date: "15 Jun, 2026",
      tag: "Cloud/AI"
    }
  ];

  const categories = ["Todos", "Frontend", "Backend", "IA & ML", "Arquitectura", "DevOps", "Cultura Dev"];

  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-orange-500 selection:text-white">

      {/* ═══════════ BACKGROUND TEXTURES ═══════════ */}
      {/* Dot grid pattern */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #d4d4d8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.4,
        }}
      />
      {/* Gradient base */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-br from-white via-gray-50 to-purple-50/30" />
      {/* Animated blobs */}
      <div className="fixed top-20 -left-32 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none z-0 animate-blob" />
      <div className="fixed top-96 -right-32 w-[500px] h-[500px] bg-purple-200/15 rounded-full blur-3xl pointer-events-none z-0 animate-blob animation-delay-2000" />
      <div className="fixed bottom-20 left-1/3 w-80 h-80 bg-orange-100/20 rounded-full blur-3xl pointer-events-none z-0 animate-blob animation-delay-4000" />

      {/* ═══════════ CONTENT (relative z-10) ═══════════ */}
      <div className="relative z-10">

        {/* Hero Header */}
        <header className="pt-32 pb-16 px-6 sm:px-10 lg:px-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-600 text-xs font-bold uppercase tracking-widest mb-6 border border-orange-500/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse mr-2" />
            Laboratorio Técnico
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-[0.9]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">Lab Notes</span>
            <br />
            <span className="text-3xl md:text-4xl font-light text-gray-400 tracking-normal">&amp; Ecosistema Sambalab</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Ideas crudas, ingeniería profunda y el detrás de escena de cómo construimos productos reales. Desde la terminal hasta producción.
          </p>
        </header>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">

          {/* ═══════════ FEATURED ARTICLE ═══════════ */}
          {featuredPost && (
            <section className="mb-20">
              <Link href={`/labnotes/${featuredPost.slug.current}`} className="group block">
                <article className="relative rounded-3xl overflow-hidden h-[420px] md:h-[480px] shadow-2xl">
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
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/30 backdrop-blur-sm">
                      Artículo Destacado
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight group-hover:text-orange-200 transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg max-w-2xl line-clamp-2 mb-6">
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

          {/* ═══════════ SVG WAVE SEPARATOR ═══════════ */}
          <div className="mb-16 -mx-6 sm:-mx-10 lg:-mx-20">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-gray-100">
              <path d="M0 30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0V30Z" fill="currentColor"/>
            </svg>
          </div>

          {/* ═══════════ NEXUS & PLUGINS SECTION ═══════════ */}
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-purple-500 rounded-full" />
              <h2 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
                <FaCodeBranch className="text-orange-500" /> Sambalab Nexus & Plugins
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Plugin Showcase */}
              <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
                {/* Texture overlay */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <FaTools className="w-32 h-32 text-white" />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/30">
                    Micro-Soluciones
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Repositorio de Plugins</h3>
                  <p className="text-gray-300 mb-6 max-w-md">
                    Fragmentos de código de alto rendimiento, integraciones pre-configuradas para Stripe, y hooks avanzados de React listos para producción.
                  </p>
                  <Link href="#" className="inline-flex items-center text-white font-medium hover:text-orange-400 transition-colors group/link">
                    Explorar Repositorio <FaExternalLinkAlt className="ml-2 text-xs group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Nexus Sandboxes */}
              <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500" />
                {/* Subtle texture */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative z-10">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4">
                    Plantillas Gratuitas
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Sandboxes Prototipables</h3>
                  <p className="text-gray-500 mb-6 max-w-md">
                    Inicia tu próximo MVP con nuestras plantillas maestras en Next.js. Empieza gratis, valida visualmente y contáctanos para la ingeniería pesada.
                  </p>
                  <Link href="#" className="inline-flex items-center text-gray-900 font-medium hover:text-purple-600 transition-colors group/link">
                    Ver Plantillas <FaExternalLinkAlt className="ml-2 text-xs group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ═══════════ MAIN GRID: ARTICLES + SIDEBAR ═══════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

            {/* Latest Articles */}
            <section className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-300 rounded-full" />
                <h2 className="text-3xl font-extrabold text-gray-900">Últimas Notas</h2>
                {posts.length > 0 && (
                  <span className="ml-auto text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                    {posts.length} {posts.length === 1 ? 'nota' : 'notas'}
                  </span>
                )}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {remainingPosts.map((post: any, idx: number) => (
                  <Link key={post.slug.current} href={`/labnotes/${post.slug.current}`} className="group block h-full">
                    <article
                      className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="relative h-52 w-full overflow-hidden">
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
                        {/* Corner accent */}
                        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <div className="text-xs text-orange-600 font-bold mb-3 uppercase tracking-wider">
                          {new Date(post.publishedAt || new Date()).toLocaleDateString('es-ES', {
                            month: 'short', day: 'numeric', year: 'numeric'
                          })}
                        </div>

                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors leading-tight">
                          {post.title}
                        </h3>

                        <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed flex-1 mb-5">
                          {post.excerpt}
                        </p>

                        {/* Author Footer */}
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
                          <svg className="ml-auto w-4 h-4 text-gray-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
                {posts.length === 0 && (
                  <div className="col-span-full py-16 text-center bg-white/60 backdrop-blur-sm rounded-3xl border border-dashed border-gray-300">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-100 flex items-center justify-center">
                      <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <p className="text-gray-500 mb-2">No hay artículos publicados aún.</p>
                    <Link href="/studio" className="text-orange-600 hover:text-orange-500 font-medium text-sm transition-colors">
                      Ve al Studio para crear el primero →
                    </Link>
                  </div>
                )}
              </div>
            </section>

            {/* Sidebar: Tech Radar */}
            <aside className="lg:col-span-4">
              <div className="sticky top-32 space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
                    Tech Radar
                  </h3>
                  <div className="space-y-5">
                    {techNews.map((news, idx) => (
                      <a key={idx} href={news.url} className="block group/news">
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
                            Vía {news.source} <FaExternalLinkAlt className="ml-1 opacity-50 text-[10px]" />
                          </div>
                        </article>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Newsletter CTA */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/80 backdrop-blur-sm rounded-3xl p-6 text-center border border-orange-200/50">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold text-orange-800 mb-1">¿Quieres estar al día?</p>
                  <p className="text-xs text-orange-600/80 mb-4">Newsletter técnica quincenal. Sin spam, solo código y arquitectura.</p>
                  <button className="w-full bg-orange-500 text-white font-semibold text-sm py-2.5 rounded-xl hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md">
                    Suscribirse
                  </button>
                </div>
              </div>
            </aside>

          </div>

          {/* ═══════════ SVG WAVE SEPARATOR (bottom) ═══════════ */}
          <div className="-mx-6 sm:-mx-10 lg:-mx-20 mb-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-gray-900">
              <path d="M0 30C360 60 720 0 1080 30C1260 45 1350 15 1440 30V60H0V30Z" fill="currentColor"/>
            </svg>
          </div>

          {/* ═══════════ BOTTOM: ABOUT LAB NOTES ═══════════ */}
          <section className="-mx-6 sm:-mx-10 lg:-mx-20 bg-gray-900 px-6 sm:px-10 lg:px-20 py-16 relative overflow-hidden">
            {/* Texture dots on dark bg */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            {/* Glow accents */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
                ¿Qué es <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-300">Lab Notes</span>?
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                No es un blog corporativo genérico. Es el cuaderno de laboratorio de Sambalab: artículos técnicos densos sobre problemas arquitectónicos reales, decisiones de ingeniería, y las herramientas que usamos día a día para construir productos que funcionan.
              </p>
              <div className="flex justify-center gap-6">
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
