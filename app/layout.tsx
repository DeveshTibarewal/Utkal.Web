import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Utkal Textorium - Ladies & Kids Wear | Cuttack, Odisha',
  description:
    'Utkal Textorium is a retail store in Cuttack offering quality ladies and kids wear including kurtis, suits, dresses, sets and seasonal collections. Visit us at CDA Sector 9, Cuttack.',
  openGraph: {
    title: 'Utkal Textorium - Ladies & Kids Wear | Cuttack, Odisha',
    description:
      'Utkal Textorium is a retail store in Cuttack offering quality ladies and kids wear including kurtis, suits, dresses, sets and seasonal collections.',
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
    title: 'Utkal Textorium - Ladies & Kids Wear | Cuttack, Odisha',
    description:
      'Utkal Textorium is a retail store in Cuttack offering quality ladies and kids wear including kurtis, suits, dresses, sets and seasonal collections.',
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
