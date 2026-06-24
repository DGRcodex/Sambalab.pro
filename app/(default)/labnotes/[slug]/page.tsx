import { client } from '../../../../sanity/lib/client';
import Image from 'next/image';
import { urlFor } from '../../../../sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { PortableTextComponents } from '../../../../components/PortableTextComponents';
import ShareButtons from '../../../../components/ShareButtons';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export const revalidate = 60; // Revalidate every 60 seconds

export async function generateStaticParams() {
  const query = `*[_type == "post"]{ slug }`;
  const posts = await client.fetch(query);
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    mainImage,
    publishedAt,
    body
  }`;
  
  const post = await client.fetch(query, { slug: params.slug });

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
          <Link href="/labnotes" className="text-teal-400 hover:text-teal-300 flex items-center justify-center gap-2">
            <FaArrowLeft /> Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  // Obtenemos la URL actual para el componente de compartir
  // En Next.js App Router server components, la URL base se puede reconstruir o pasar al cliente
  // Usaremos un placeholder que ShareButtons reemplazará en el cliente con window.location.href
  const shareUrl = ''; 

  return (
    <article className="min-h-screen bg-slate-900 py-20 px-6 sm:px-10 lg:px-20 font-sans selection:bg-teal-500/30">
      <div className="max-w-4xl mx-auto">
        <Link href="/labnotes" className="inline-flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors mb-10 font-medium">
          <FaArrowLeft /> Todos los artículos
        </Link>

        <header className="mb-12 text-center">
          <div className="text-teal-400 font-semibold mb-4 tracking-wider uppercase text-sm">
            {new Date(post.publishedAt || new Date()).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-8">
            {post.title}
          </h1>

          {post.mainImage && (
            <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
            </div>
          )}
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          {post.body ? (
            <PortableText value={post.body} components={PortableTextComponents} />
          ) : (
            <p className="text-slate-400 italic text-center">Este artículo no tiene contenido aún.</p>
          )}
        </div>

        <ShareButtons url={shareUrl} title={post.title} />
      </div>
    </article>
  );
}
