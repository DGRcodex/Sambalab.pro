import Link from 'next/link';
import MobileMenu from './mobile-menu';

export default function Header() {
  
  return (
    <header className="fixed w-full z-30 bg-purple-100 transition duration-300 hover:bg-[#4B4ACF] group">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-11">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Gaud-E">
              <span className="font-bold text-lg text-[#4B4ACF] group-hover:text-black transition duration-150 ease-in-out">
                Gaud-E
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-[#4B4ACF] group-hover:text-black px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm text-white bg-[#4B4ACF] hover:bg-[#4B4ACF] hover:text-white ml-3 transition duration-150 ease-in-out"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
