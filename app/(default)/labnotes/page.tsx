import { client } from '../../../sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../../../sanity/lib/image';

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt
  }`;
  return client.fetch(query);
}

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 sm:px-10 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* Header con identidad Sambalab */}
        <header className="mb-20 text-center flex flex-col items-center">
          <Image
            src="/sambalablogo.png"
            alt="Sambalab Logo"
            width={280}
            height={90}
            className="w-auto h-16 md:h-24 mb-4"
            priority
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Lab Notes
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded-full mb-6" />
          <p className="text-base md:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed text-justify">
            Innovación, ideas y el detrás de escena de nuestro trabajo. Todo lo que necesitas saber para escalar.
          </p>
        </header>

        {/* Grid de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link key={post.slug.current} href={`/labnotes/${post.slug.current}`} className="group block">
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-56 w-full overflow-hidden">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 via-orange-50 to-purple-50 flex items-center justify-center">
                      <Image
                        src="/sambalablogo.png"
                        alt="Sambalab"
                        width={120}
                        height={40}
                        className="opacity-20"
                      />
                    </div>
                  )}
                  {/* Acento naranja superior */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400" />
                </div>
                <div className="p-6">
                  <div className="text-xs text-orange-600 font-semibold mb-2 uppercase tracking-wider">
                    {new Date(post.publishedAt || new Date()).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-800 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm line-clamp-3 text-justify leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center text-orange-600 text-sm font-medium group-hover:text-orange-500 transition-colors">
                    Leer más
                    <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
          {posts.length === 0 && (
            <div className="col-span-full text-center py-24">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-orange-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-lg text-gray-400 mb-2">Aún no hay artículos publicados.</p>
              <Link href="/studio" className="text-orange-600 hover:text-orange-500 font-medium text-sm transition-colors">
                Ve al Studio para crear el primero →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
