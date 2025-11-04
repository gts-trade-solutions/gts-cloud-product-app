import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { HeaderNav } from '@/components/header-nav';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GTS Cloud | Seamless, Secure Cloud Hosting',
  description: 'High-performance infrastructure, rock-solid uptime, and support that scales with you.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
