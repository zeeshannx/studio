'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FirebaseClientProvider } from '@/firebase';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';
  const isDashboard = pathname.startsWith('/dashboard-talent') || pathname.startsWith('/dashboard-recruiter');

  return (
    <html lang="en" className="dark">
      <head>
        <title>CredAble</title>
        <meta name="description" content="The #1 job board for creators, influencers, and social media professionals." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <FirebaseClientProvider>
          {!isLoginPage && !isDashboard && <Header />}
          <main className="flex-grow">{children}</main>
          {!isLoginPage && !isDashboard && <Footer />}
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
