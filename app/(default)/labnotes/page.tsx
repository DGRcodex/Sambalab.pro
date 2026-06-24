import { client } from '../../../sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../../sanity/lib/image';
import { FaExternalLinkAlt, FaTools, FaCodeBranch } from 'react-icons/fa';

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

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 font-sans selection:bg-orange-500 selection:text-white">
      {/* Hero Header */}
      <header className="mb-20 px-6 sm:px-10 lg:px-20 text-center flex flex-col items-center">
        <Image
          src="/sambalablogo.png"
          alt="Sambalab Logo"
          width={280}
          height={90}
          className="w-auto h-16 md:h-24 mb-6 drop-shadow-sm"
          priority
        />
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900">
          Lab Notes & Ecosystem
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Innovación profunda, ideas crudas y el detrás de escena de nuestro trabajo en Sambalab. Todo lo que necesitas saber para escalar al siguiente nivel.
        </p>
      </header>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 space-y-24">
        
        {/* Nexus & Plugins Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
              <FaCodeBranch className="text-orange-500" /> Sambalab Nexus & Plugins
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Plugin Showcase */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 overflow-hidden shadow-2xl hover:shadow-orange-500/20 transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
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
                <Link href="#" className="inline-flex items-center text-white font-medium hover:text-orange-400 transition-colors">
                  Explorar Repositorio <FaExternalLinkAlt className="ml-2 text-xs" />
                </Link>
              </div>
            </div>

            {/* Nexus Sandboxes */}
            <div className="group relative bg-white border border-gray-200 rounded-3xl p-8 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500" />
              <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4">
                  Plantillas Gratuitas
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Sandboxes Prototipables</h3>
                <p className="text-gray-500 mb-6 max-w-md">
                  Inicia tu próximo MVP con nuestras plantillas maestras en Next.js. Empieza gratis, valida visualmente y contáctanos para la ingeniería pesada.
                </p>
                <Link href="#" className="inline-flex items-center text-gray-900 font-medium hover:text-purple-600 transition-colors">
                  Ver Plantillas <FaExternalLinkAlt className="ml-2 text-xs" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Grid: Articles + Tech Radar Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Latest Articles */}
          <section className="lg:col-span-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b border-gray-200 pb-4">
              Últimas Notas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post: any) => (
                <Link key={post.slug.current} href={`/labnotes/${post.slug.current}`} className="group block h-full">
                  <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                    <div className="relative h-56 w-full overflow-hidden">
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
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-xs text-orange-600 font-bold mb-3 uppercase tracking-wider flex items-center gap-2">
                        {new Date(post.publishedAt || new Date()).toLocaleDateString('es-ES', {
                          month: 'short', day: 'numeric', year: 'numeric'
                        })}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed flex-1 mb-6">
                        {post.excerpt}
                      </p>

                      {/* Author Footer */}
                      <div className="flex items-center pt-4 border-t border-gray-50 mt-auto">
                        {post.author?.image ? (
                          <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3 border border-gray-200">
                            <Image src={urlFor(post.author.image).url()} alt={post.author.name} fill className="object-cover" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-xs mr-3">
                            {post.author?.name ? post.author.name.charAt(0) : 'S'}
                          </div>
                        )}
                        <span className="text-sm font-medium text-gray-700">
                          {post.author?.name || 'Sambalab Team'}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
              {posts.length === 0 && (
                <div className="col-span-full py-12 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-300">
                  <p className="text-gray-500 mb-2">No hay artículos publicados aún.</p>
                </div>
              )}
            </div>
          </section>

          {/* Sidebar: Tech Radar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32">
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
                  Tech Radar
                </h3>
                <div className="space-y-6">
                  {techNews.map((news, idx) => (
                    <a key={idx} href={news.url} className="block group">
                      <article>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                            {news.tag}
                          </span>
                          <span className="text-xs text-gray-400">{news.date}</span>
                        </div>
                        <h4 className="text-sm font-bold text-gray-800 group-hover:text-orange-600 transition-colors leading-snug mb-1">
                          {news.title}
                        </h4>
                        <div className="text-xs text-gray-500 flex items-center">
                          Vía {news.source} <FaExternalLinkAlt className="ml-1 opacity-50 text-[10px]" />
                        </div>
                      </article>
                    </a>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-5 text-center">
                    <p className="text-sm font-bold text-orange-800 mb-2">¿Quieres estar al día?</p>
                    <p className="text-xs text-orange-600 mb-4">Suscríbete a nuestra newsletter técnica quincenal.</p>
                    <button className="w-full bg-orange-500 text-white font-semibold text-sm py-2 rounded-xl hover:bg-orange-600 transition-colors shadow-sm">
                      Suscribirse
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
}
