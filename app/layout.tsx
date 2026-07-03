import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import ThemeProvider from '../components/theme-provider';

export const metadata: Metadata = {
  title: 'NFTs Onchain ◉ | Home of All NFTs',
  description: 'A premium Web3 NFT discovery hub connecting projects, communities, and collectors across all chains.',
  metadataBase: new URL('https://nfts-onchain.com'),
  icons: {
    icon: '/yhxyWdcf_400x400.jpg',
    shortcut: '/favicon.ico',
    apple: '/yhxyWdcf_400x400.jpg',
  },
  openGraph: {
    title: 'NFTs Onchain ◉',
    description: 'A premium Web3 NFT discovery hub connecting projects, communities, and collectors across all chains.',
    type: 'website',
    url: 'https://nfts-onchain.com',
    images: [{ url: 'https://nfts-onchain.com/og-image.png', width: 1200, height: 630, alt: 'NFTs Onchain' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NFTs Onchain ◉',
    description: 'A premium Web3 NFT discovery hub connecting projects, communities, and collectors across all chains.',
    images: ['https://nfts-onchain.com/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function () {
            try {
              const stored = window.localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const theme = stored === 'light' ? 'light' : stored === 'dark' ? 'dark' : prefersDark ? 'dark' : 'light';
              document.body.classList.toggle('light', theme === 'light');
              document.body.classList.toggle('dark', theme === 'dark');
            } catch (error) {
              console.warn(error);
            }
          })()`}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
