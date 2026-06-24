'use client';

import { useState, useEffect } from 'react';
import { FaWhatsapp, FaLinkedinIn, FaInstagram, FaDiscord, FaLink } from 'react-icons/fa';

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [currentUrl, setCurrentUrl] = useState(url);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!currentUrl) {
      setCurrentUrl(window.location.href);
    }
  }, [currentUrl]);

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopyLink = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          url: currentUrl,
        });
      } else {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing', err);
    }
  };

  return (
    <div className="flex flex-col items-center py-10 border-t border-slate-800 mt-16">
      <h3 className="text-xl font-bold text-white mb-6">Comparte este artículo</h3>
      <div className="flex gap-4">
        <a
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:scale-110 transition-transform shadow-lg shadow-[#25D366]/20"
          aria-label="Compartir en WhatsApp"
        >
          <FaWhatsapp size={24} />
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0077b5] text-white hover:scale-110 transition-transform shadow-lg shadow-[#0077b5]/20"
          aria-label="Compartir en LinkedIn"
        >
          <FaLinkedinIn size={22} />
        </a>

        {/* Discord e Instagram no tienen un "share link" web directo útil para URLs, así que usamos el portapapeles/share API nativo */}
        <button
          onClick={handleCopyLink}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:scale-110 transition-transform shadow-lg shadow-[#bc1888]/20"
          aria-label="Compartir en Instagram"
        >
          <FaInstagram size={24} />
        </button>

        <button
          onClick={handleCopyLink}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-[#5865F2] text-white hover:scale-110 transition-transform shadow-lg shadow-[#5865F2]/20"
          aria-label="Compartir en Discord"
        >
          <FaDiscord size={24} />
        </button>

        <button
          onClick={handleCopyLink}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-700 text-white hover:scale-110 transition-transform shadow-lg shadow-slate-700/50"
          aria-label="Copiar enlace"
        >
          <FaLink size={20} />
        </button>
      </div>
      
      {copied && (
        <p className="mt-4 text-sm text-teal-400 animate-pulse">
          ¡Enlace copiado al portapapeles! Pégalo en tu red favorita.
        </p>
      )}
    </div>
  );
}
