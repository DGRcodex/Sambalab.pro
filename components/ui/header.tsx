import Link from 'next/link';
import MobileMenu from './mobile-menu';

export default function Header() {
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
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-black transition duration-150 ease-in-out"
                >
                  Proyectos
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-black transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-black transition duration-150 ease-in-out"
                >
                  Contacto
                </Link>
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
