import { client } from '../../../../sanity/lib/client';
import Image from 'next/image';
import { urlFor } from '../../../../sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { PortableTextComponents } from '../../../../components/PortableTextComponents';
import ShareButtons from '../../../../components/ShareButtons';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export const revalidate = 60;

export async function generateStaticParams() {
  const query = `*[_type == "post"]{ slug }`;
  const posts = await client.fetch(query);
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage,
    publishedAt,
    body
  }`;
  
  const post = await client.fetch(query, { slug: resolvedParams.slug });

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
          <Link href="/labnotes" className="text-orange-600 hover:text-orange-500 flex items-center justify-center gap-2 font-medium transition-colors">
            <FaArrowLeft /> Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = '';

  return (
    <article className="min-h-screen bg-white pt-32 pb-20 px-6 sm:px-10 lg:px-20 font-sans">
      <div className="max-w-3xl mx-auto">

        {/* Navegación */}
        <Link href="/labnotes" className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-600 transition-colors mb-10 font-medium text-sm">
          <FaArrowLeft className="text-xs" /> Todos los artículos
        </Link>

        {/* Cabecera del artículo */}
        <header className="mb-12">
          <div className="text-orange-600 font-semibold mb-4 tracking-wider uppercase text-xs">
            {new Date(post.publishedAt || new Date()).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          <div className="w-16 h-1 bg-orange-500 rounded-full mb-8" />

          {post.mainImage && (
            <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        {/* Contenido del artículo */}
        <div className="prose prose-lg max-w-none">
          {post.body ? (
            <PortableText value={post.body} components={PortableTextComponents} />
          ) : (
            <p className="text-gray-400 italic text-center">Este artículo no tiene contenido aún.</p>
          )}
        </div>

        <ShareButtons url={shareUrl} title={post.title} />
      </div>
    </article>
  );
}
