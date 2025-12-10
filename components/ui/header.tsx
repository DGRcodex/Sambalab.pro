'use client';
import Link from 'next/link';
import MobileMenu from './mobile-menu';
import { useLanguage } from '@/context/language-context';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed w-full z-30 bg-purple-100 transition duration-300 hover:bg-purple-200 group">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">

          {/* Logo y branding */}
          <div className="shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Sambalab">
              <span className="font-bold text-lg text-purple-700 group-hover:text-black transition duration-150 ease-in-out">
                Sambalab
              </span>
            </Link>
          </div>

          {/* Navegación escritorio */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center gap-6 text-sm font-medium text-purple-900">
              <li>
                <Link
                  href="#services"
                  className="hover:text-black transition duration-150 ease-in-out"
                >
                  {t.navbar.services}
                </Link>
              </li>
              <li>
                <Link
                  href="#proyectos"
                  className="hover:text-black transition duration-150 ease-in-out"
                >
                  {t.navbar.projects}
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/sambalab/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition duration-150 ease-in-out"
                >
                  {t.navbar.blog}
                </a>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="hover:text-black transition duration-150 ease-in-out"
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
              className="font-bold text-sm uppercase text-purple-700 hover:text-black transition-colors px-3 py-1 border border-purple-200 rounded-full bg-white/50 hover:bg-white"
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
