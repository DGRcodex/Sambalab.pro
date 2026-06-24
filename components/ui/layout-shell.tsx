'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import CustomCursor from '@/components/ui/custom-cursor';
import ScrollProgress from '@/components/ui/scroll-progress';

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith('/studio');

  if (isStudio) {
    // Render children directly without any chrome for Sanity Studio
    return <>{children}</>;
  }

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
