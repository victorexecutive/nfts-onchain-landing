'use client';

import { Github, Link } from 'lucide-react';

const links = ['About', 'Community', 'Ecosystems', 'Updates'];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-10 text-brand-light">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-gold/80">NFTs Onchain ◉</p>
          <p className="text-2xl font-semibold text-brand-light">HOME OF ALL NFTs</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {links.map((link) => (
            <a key={link} href="#" className="text-sm text-brand-light/80 transition hover:text-brand-gold">
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 text-brand-light/80">
          <Github size={18} />
          <span>Deploy-ready, premium Web3 landing page</span>
        </div>
      </div>
    </footer>
  );
}
