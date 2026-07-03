'use client';

const links = ['About', 'Community', 'Ecosystems', 'Updates'];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-10 text-brand-light">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-gold/80">NFTs Onchain</p>
          <p className="text-2xl font-semibold text-brand-light">HOME OF ALL NFTs</p>
        </div>

        <nav className="flex flex-wrap items-center gap-4">
          {links.map((link) => (
            <a key={link} href="#" className="text-sm text-brand-light/80 transition hover:text-brand-gold">
              {link}
            </a>
          ))}
        </nav>

        <div className="text-sm text-brand-light/60">© {new Date().getFullYear()} NFTs Onchain. All rights reserved.</div>
      </div>
    </footer>
  );
}
