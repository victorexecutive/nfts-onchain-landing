import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '../components/theme-provider';

export const metadata: Metadata = {
  title: 'NFTs Onchain ◉ | Home of All NFTs',
  description: 'A premium Web3 NFT discovery hub connecting projects, communities, and collectors across all chains.',
  metadataBase: new URL('https://nfts-onchain.com'),
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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
