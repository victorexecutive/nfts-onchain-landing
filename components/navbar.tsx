'use client';

import { motion } from 'framer-motion';
import { Moon, Sun, Sparkles } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const navDots = [0, 1, 2];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="sticky top-0 z-50 mx-auto w-full border-b border-white/5 bg-black/30 backdrop-blur-3xl"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 lg:px-12">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12 overflow-hidden rounded-3xl border border-brand-gold/20 bg-gradient-to-br from-brand-gold/30 via-transparent to-transparent shadow-glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(245,179,1,0.45),_transparent_45%)]" />
            <div className="absolute inset-0 flex items-center justify-center text-xs font-black uppercase tracking-[0.35em] text-black">NO</div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-brand-gold/90">NFTs Onchain</p>
            <div className="flex items-center gap-2 text-2xl font-semibold text-brand-light">
              <span>HOME OF ALL NFTs</span>
              <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-gold/20 text-brand-gold shadow-glow">
                ◉
              </span>
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

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-brand-light transition hover:border-brand-gold/40 hover:bg-brand-gold/10">
            Main App Coming Soon
          </button>
          <button className="rounded-full bg-brand-gold px-5 py-3 text-sm font-semibold text-brand-dark transition hover:brightness-110">
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
      </div>
    </motion.header>
  );
}
