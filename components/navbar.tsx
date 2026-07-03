 'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Sparkles } from 'lucide-react';
import useTheme from '../hooks/useTheme';
import CommunityModal from './community-modal';

const navDots = [0, 1, 2];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handler() {
      setOpen(true);
    }
    window.addEventListener('openCommunityModal', handler as EventListener);
    return () => window.removeEventListener('openCommunityModal', handler as EventListener);
  }, []);

  return (
    <>
      <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="sticky top-0 z-50 mx-auto w-full border-b border-white/5 bg-black/30 backdrop-blur-3xl"
    >
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-12">
        <div className="flex flex-1 flex-wrap items-center gap-4">
          <div className="relative flex-shrink-0 rounded-full overflow-hidden border-2 border-[#F5B301] shadow-glow transition-transform duration-300 hover:scale-105" style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.45)' }}>
            <div className="relative h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12">
              <Image src="/yhxyWdcf_400x400.jpg" alt="NFTs Onchain logo" fill className="object-cover" priority />
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.22em] text-brand-gold/90 sm:text-sm">NFTs Onchain ◉</p>
            <div className="flex flex-wrap items-center gap-2 text-2xl font-semibold leading-tight text-brand-light sm:text-3xl md:text-4xl">
              <span>HOME OF ALL NFTs</span>
            </div>
          </div>

          <div className="hidden h-8 gap-2 md:flex">
            {navDots.map((index) => (
              <motion.span
                key={index}
                animate={{ y: [0, -8, 0] }}
                transition={{ delay: index * 0.12, duration: 1.8, repeat: Infinity }}
                className="h-2.5 w-2.5 rounded-full bg-brand-gold/80 shadow-[0_0_12px_rgba(245,179,1,0.35)]"
              />
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-brand-light transition hover:border-brand-gold/40 hover:bg-brand-gold/10 sm:px-5 sm:text-sm">
            Main App Coming Soon
          </button>
          <button onClick={() => setOpen(true)} className="rounded-full bg-brand-gold px-4 py-3 text-sm font-semibold text-brand-dark transition hover:brightness-110 sm:px-5">
            Join Community
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-brand-light transition hover:border-brand-gold/40 hover:bg-brand-gold/10"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <details className="relative w-full md:hidden">
          <summary className="inline-flex w-full items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-brand-light transition hover:border-brand-gold/40 hover:bg-brand-gold/10">
            <span>Menu</span>
            <span className="inline-flex h-5 w-5 flex-col items-center justify-between">
              <span className="block h-[2px] w-5 bg-brand-light" />
              <span className="block h-[2px] w-5 bg-brand-light" />
              <span className="block h-[2px] w-5 bg-brand-light" />
            </span>
          </summary>
          <div className="mt-3 space-y-3 rounded-3xl border border-white/10 bg-black/90 p-4 shadow-soft backdrop-blur-2xl">
            <button className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-brand-light transition hover:border-brand-gold/40 hover:bg-brand-gold/10">
              Main App Coming Soon
            </button>
            <button onClick={() => setOpen(true)} className="w-full rounded-full bg-brand-gold px-4 py-3 text-sm font-semibold text-brand-dark transition hover:brightness-110">
              Join Community
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-brand-light transition hover:border-brand-gold/40 hover:bg-brand-gold/10"
            >
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        </details>
      </div>
      </motion.header>
      <CommunityModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
