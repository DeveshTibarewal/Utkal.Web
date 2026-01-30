import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'UTKAL TEXTORIUM - Coming Soon',
  description:
    'UTKAL TEXTORIUM is launching soon. Stay tuned for our official launch announcement.',
  openGraph: {
    title: 'UTKAL TEXTORIUM - Coming Soon',
    description:
      'UTKAL TEXTORIUM is launching soon. Stay tuned for our official launch announcement.',
    type: 'website',
    url: 'https://www.utkaltextorium.com',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UTKAL TEXTORIUM - Coming Soon',
    description:
      'UTKAL TEXTORIUM is launching soon. Stay tuned for our official launch announcement.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <meta
          name="facebook-domain-verification"
          content="PASTE_VERIFICATION_CODE_HERE"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
