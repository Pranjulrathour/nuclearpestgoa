'use client';

import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { LoadingProvider, useLoading } from './context/LoadingContext';
import Loader from './components/Loader';
import { useEffect, useState, Suspense } from 'react';
import { usePathname } from 'next/navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

function RootLayoutContent({ children }) {
  const { isLoading, setIsLoading } = useLoading();
  const pathname = usePathname();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const hasVisited = sessionStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsInitialLoading(false);
      setIsLoading(false);
    } else {
      sessionStorage.setItem('hasVisited', 'true');
      const timer = setTimeout(() => {
        setIsInitialLoading(false);
        setIsLoading(false);
      }, 3000); // Show loader for 3 seconds on first visit
      return () => clearTimeout(timer);
    }
  }, [isMounted, setIsLoading]);

  useEffect(() => {
    if (!isMounted || isInitialLoading) return;

    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Show loader for 1.5 seconds on page change

    return () => clearTimeout(timer);
  }, [pathname, isInitialLoading, isMounted, setIsLoading]);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-body`}>
        {isMounted && isLoading && <Loader />}
        {children}
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return (
    <LoadingProvider>
      <Suspense fallback={<Loader />}>
        <RootLayoutContent>{children}</RootLayoutContent>
      </Suspense>
    </LoadingProvider>
  );
}
