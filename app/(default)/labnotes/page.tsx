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

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 py-20 px-6 sm:px-10 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 mb-6">
            Sambalab Insights
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Innovación, ideas y el detrás de escena de nuestro trabajo. Todo lo que necesitas saber para escalar.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post: any) => (
            <Link key={post.slug.current} href={`/labnotes/${post.slug.current}`} className="group block">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 w-full overflow-hidden">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900" />
                  )}
                </div>
                <div className="p-8">
                  <div className="text-sm text-teal-400 font-semibold mb-3">
                    {new Date(post.publishedAt || new Date()).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          {posts.length === 0 && (
            <div className="col-span-full text-center py-20 text-slate-500">
              <p className="text-xl">Aún no hay artículos publicados. ¡Ve al Studio para crear el primero!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
