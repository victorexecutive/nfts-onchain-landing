import { Facebook, Instagram, Music, Youtube, X } from 'lucide-react';

const faqItems = [
  'What is NFTs Onchain?',
  'Which chains are supported?',
  'When is the main app launching?',
  'Will wallet support be added?',
  'Can creators submit collections?',
];

const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/?utm_source=chatgpt.com', icon: Facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/?utm_source=chatgpt.com', icon: Instagram },
  { label: 'TikTok', href: 'https://www.tiktok.com/?utm_source=chatgpt.com', icon: Music },
  { label: 'YouTube', href: 'https://www.youtube.com/?utm_source=chatgpt.com', icon: Youtube },
  { label: 'X', href: 'https://x.com/?utm_source=chatgpt.com', icon: X },
];

export default function Sidebar() {
  return (
    <aside className="sticky top-28 space-y-8 rounded-[40px] border border-white/10 bg-black/25 p-8 shadow-soft backdrop-blur-xl">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.34em] text-brand-gold/80">About NFTs Onchain</p>
        <p className="text-sm leading-7 text-brand-light/80">
          NFTs Onchain is a global NFT discovery engine and cultural meeting point across all chains. It is where NFT projects are discovered, NFT cultures are explored, NFT communities connect, and enthusiasts learn and share knowledge.
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.34em] text-brand-gold/80">FAQ</p>
        <div className="space-y-3 text-sm text-brand-light/80">
          {faqItems.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:border-brand-gold/30 hover:bg-brand-gold/10">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.34em] text-brand-gold/80">Socials</p>
        <div className="grid grid-cols-2 gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-brand-light transition hover:border-brand-gold/30 hover:bg-brand-gold/10"
              aria-label={label}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-brand-gold transition group-hover:shadow-glow">
                <Icon size={18} />
              </span>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
