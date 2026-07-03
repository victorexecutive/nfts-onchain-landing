'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Globe } from 'lucide-react';

const cards = [
  { title: 'Ethereum Culture', label: 'Art + Collectibles' },
  { title: 'Solana Drops', label: 'Gaming + Music' },
  { title: 'Polygon Pulses', label: 'Bridge + DAO' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-black/30 p-8 shadow-soft backdrop-blur-xl sm:p-12">
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
      <div className="grid gap-10 lg:grid-cols-[1.25fr_0.95fr] lg:items-center">
        <div className="space-y-8">
          <div className="flex flex-wrap items-center gap-3 rounded-full border border-brand-gold/20 bg-brand-gold/5 px-4 py-2 text-sm text-brand-gold shadow-glow">
            <Sparkles size={16} />
            Elite cross-chain NFT discovery for builders, collectors, and communities.
          </div>

          <div className="space-y-6">
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-brand-light sm:text-6xl">
              HOME OF ALL NFTs
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-brand-light/80">
              Discover, explore, and connect with NFT projects, cultures and communities across every blockchain.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-4 text-sm font-semibold text-brand-dark transition hover:brightness-110">
              Explore Ecosystems
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => window.dispatchEvent(new Event('openCommunityModal'))}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-brand-light transition hover:border-brand-gold/40 hover:bg-brand-gold/10"
            >
              Join Community
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.32em] text-brand-gold/80">Trusted by</p>
              <div className="mt-4 flex items-center gap-4 text-sm font-semibold text-brand-light">
                <ShieldCheck size={20} />
                Cross-chain projects, artists and communities.
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.32em] text-brand-gold/80">Live stream</p>
              <div className="mt-4 flex items-center gap-4 text-sm font-semibold text-brand-light">
                <Globe size={20} />
                Real-time NFT culture updates across 8 chains.
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#090909]/80 p-6 shadow-soft backdrop-blur-2xl">
          <div className="hero-grid absolute inset-0 opacity-80" />
          <div className="relative grid gap-4">
            <div className="flex flex-col gap-4">
              {cards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * index, duration: 0.6 }}
                  className="rounded-3xl border border-white/10 bg-black/40 p-5 shadow-soft backdrop-blur-xl"
                >
                  <p className="text-base font-semibold text-brand-light">{card.title}</p>
                  <p className="mt-2 text-sm text-brand-light/70">{card.label}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-gold/90">
                    <span className="inline-flex h-3 w-3 rounded-full bg-brand-gold" />
                    Live now
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative mt-8 h-72 rounded-[32px] border border-brand-gold/10 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent p-4 shadow-glow">
              <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-brand-gold/10 blur-3xl" />
              <div className="absolute right-8 top-20 h-24 w-24 rounded-full bg-white/5 blur-3xl" />
              <div className="relative flex h-full items-center justify-center">
                <div className="grid gap-3">
                  <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/50 p-4 shadow-soft backdrop-blur-xl">
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-brand-gold/80">Chain</p>
                      <p className="text-lg font-semibold text-brand-light">Ethereum</p>
                    </div>
                    <div className="rounded-2xl bg-white/5 px-3 py-1 text-xs text-brand-light">OpenSea</div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/60 p-4 shadow-soft backdrop-blur-xl">
                    <p className="text-xs uppercase tracking-[0.35em] text-brand-gold/80">NFT Spotlight</p>
                    <p className="mt-3 text-lg font-semibold text-brand-light">Aurora Frame</p>
                    <p className="mt-2 text-sm text-brand-light/70">Cross-chain gallery pulse with glowing rarity.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {['Ethereum', 'Solana', 'Polygon', 'Base'].map((chain) => (
                <div key={chain} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-brand-light transition hover:border-brand-gold/40 hover:bg-brand-gold/10">
                  {chain}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
