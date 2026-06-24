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
    <div className="flex flex-col items-center py-10 border-t border-gray-200 mt-16">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Comparte este artículo</h3>
      <div className="flex gap-3">
        <a
          href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 flex items-center justify-center rounded-full bg-[#25D366] text-white hover:scale-110 transition-transform shadow-sm"
          aria-label="Compartir en WhatsApp"
        >
          <FaWhatsapp size={20} />
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 flex items-center justify-center rounded-full bg-[#0077b5] text-white hover:scale-110 transition-transform shadow-sm"
          aria-label="Compartir en LinkedIn"
        >
          <FaLinkedinIn size={18} />
        </a>

        <button
          onClick={handleCopyLink}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:scale-110 transition-transform shadow-sm"
          aria-label="Compartir en Instagram"
        >
          <FaInstagram size={20} />
        </button>

        <button
          onClick={handleCopyLink}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-[#5865F2] text-white hover:scale-110 transition-transform shadow-sm"
          aria-label="Compartir en Discord"
        >
          <FaDiscord size={20} />
        </button>

        <button
          onClick={handleCopyLink}
          className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-orange-100 hover:text-orange-600 hover:scale-110 transition-all shadow-sm"
          aria-label="Copiar enlace"
        >
          <FaLink size={16} />
        </button>
      </div>
      
      {copied && (
        <p className="mt-4 text-sm text-orange-600 animate-pulse font-medium">
          ¡Enlace copiado al portapapeles!
        </p>
      )}
    </div>
  );
}
