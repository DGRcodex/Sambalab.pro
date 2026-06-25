'use client';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import { useLanguage } from '@/context/language-context';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed w-full z-30 bg-white/90 backdrop-blur-md border-b border-gray-100 transition duration-300 group">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo y branding */}
          <div className="shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Sambalab">
              <Image
                src="/sambalablogo.png"
                alt="Sambalab Logo"
                width={240}
                height={80}
                className="w-auto h-16 md:h-20"
                priority
              />
            </Link>
          </div>

          {/* Navegación escritorio */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center gap-6 text-sm font-semibold text-gray-700">
              <li>
                <Link
                  href="/#services"
                  className="hover:text-orange-500 transition duration-150 ease-in-out"
                >
                  {t.navbar.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/#proyectos"
                  className="hover:text-orange-500 transition duration-150 ease-in-out"
                >
                  {t.navbar.projects}
                </Link>
              </li>
              <li>
                <Link
                  href="/labnotes"
                  className="hover:text-orange-500 transition duration-150 ease-in-out"
                >
                  {t.navbar.blog}
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="hover:text-orange-500 transition duration-150 ease-in-out"
                >
                  {t.navbar.contact}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Controls & Language Toggle */}
          <div className="flex items-center gap-4 ml-8">
            {/* Language Switcher (Visible on Mobile & Desktop) */}
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="font-bold text-xs tracking-wider uppercase text-gray-500 hover:text-orange-600 transition-colors px-3 py-1 border border-gray-200 hover:border-orange-200 rounded-full bg-white"
              aria-label="Switch Language"
            >
              {language === 'es' ? 'EN' : 'ES'}
            </button>

            {/* Menú móvil */}
            <MobileMenu />
          </div>

        </div>
      </div>
    </header>
  );
}
