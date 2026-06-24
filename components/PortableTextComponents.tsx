import Image from 'next/image';
import { urlFor } from '../sanity/lib/image';

export const PortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-96 my-10 rounded-2xl overflow-hidden shadow-md">
          <Image
            src={urlFor(value).url()}
            alt="Blog content image"
            fill
            className="object-cover"
          />
        </div>
      );
    },
    youtube: ({ value }: any) => {
      const { url } = value;
      if (!url) return null;
      
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = url.match(regExp);
      const videoId = (match && match[2].length === 11) ? match[2] : null;

      if (!videoId) return null;

      return (
        <div className="w-full my-10 rounded-2xl overflow-hidden shadow-md aspect-video relative border border-gray-100">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
          />
        </div>
      );
    }
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-12 mb-6">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-5">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-8 mb-4">{children}</h3>,
    normal: ({ children }: any) => <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 text-justify">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-orange-500 pl-6 italic text-lg text-gray-600 my-8 bg-orange-50/50 py-4 pr-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-outside text-base md:text-lg text-gray-700 space-y-2 mb-6 ml-6">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-outside text-base md:text-lg text-gray-700 space-y-2 mb-6 ml-6">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic text-orange-700">{children}</em>,
    link: ({ children, value }: any) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined;
      return (
        <a href={value?.href} target={target} rel={target === '_blank' ? 'noindex nofollow' : ''} className="text-orange-600 hover:text-orange-500 underline underline-offset-4 decoration-orange-300 hover:decoration-orange-500 transition-colors">
          {children}
        </a>
      );
    },
  },
};
