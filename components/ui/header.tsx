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
              {/* Language Switcher */}
              <li className="ml-4 border-l border-purple-300 pl-4">
                <button
                  onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                  className="flex items-center gap-1 font-bold text-xs uppercase hover:text-purple-600 transition-colors"
                >
                  <span className={language === 'es' ? 'text-purple-700' : 'text-gray-400'}>ES</span>
                  <span className="text-gray-400">/</span>
                  <span className={language === 'en' ? 'text-purple-700' : 'text-gray-400'}>EN</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Menú móvil */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
