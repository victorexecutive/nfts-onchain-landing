'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle, Search, Sparkles } from 'lucide-react';
import type { NFTData } from '../data/mock-nfts';

const categories = ['All', 'Art', 'Music', 'Gaming', 'Collectible', 'Utility', 'Metaverse'];

type NFTStreamProps = {
  nfts: NFTData[];
};

export default function NFTStream({ nfts }: NFTStreamProps) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [range, setRange] = useState({ start: 0, end: 22 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  const filteredNFTs = useMemo(() => {
    return nfts.filter((item) => {
      const query = search.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(query) || item.collection.toLowerCase().includes(query) || item.marketplace.toLowerCase().includes(query);
      const matchesCategory = filter === 'All' || item.category === filter;
      return matchesSearch && matchesCategory;
    });
  }, [nfts, search, filter]);

  const visibleNFTs = useMemo(() => {
    return filteredNFTs.slice(range.start, Math.min(range.end, filteredNFTs.length));
  }, [filteredNFTs, range]);

  const handleScroll = useCallback(() => {
    const element = containerRef.current;
    if (!element) return;
    const scrollLeft = element.scrollLeft;
    const viewportWidth = element.clientWidth;
    const cardWidth = 260;
    const start = Math.max(0, Math.floor(scrollLeft / cardWidth) - 6);
    const end = Math.min(filteredNFTs.length, start + Math.ceil(viewportWidth / cardWidth) + 20);
    setRange({ start, end });
  }, [filteredNFTs.length]);

  useEffect(() => {
    handleScroll();
  }, [filteredNFTs.length, handleScroll]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-5 rounded-[32px] border border-white/10 bg-black/40 p-6 shadow-soft backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-brand-gold/80">Live NFT Ecosystem Stream</p>
          <h2 className="mt-3 text-2xl font-semibold text-brand-light">7,000+ NFTs streaming from every major chain.</h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {['Ethereum', 'Solana', 'Polygon', 'Base', 'Avalanche', 'BNB Chain', 'Arbitrum', 'Optimism'].map((chain) => (
            <span key={chain} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-brand-light">
              {chain}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-[32px] border border-white/10 bg-black/40 p-5 shadow-soft backdrop-blur-xl sm:flex-row sm:items-center">
        <label className="relative flex-1">
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-brand-light/60" />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search NFT name, collection, marketplace"
            className="w-full rounded-full border border-white/10 bg-[#111]/80 py-4 pl-12 pr-5 text-sm text-brand-light outline-none transition focus:border-brand-gold/40"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${filter === category ? 'bg-brand-gold text-brand-dark' : 'border border-white/10 bg-white/5 text-brand-light hover:bg-brand-gold/10'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[32px] border border-white/10 bg-black/30 p-4 shadow-soft backdrop-blur-xl sm:p-5">
        <div ref={containerRef} className="grid min-w-full gap-4 overflow-x-auto pb-4 grid-flow-col auto-cols-[minmax(260px,1fr)] lg:auto-cols-[minmax(260px,1fr)]">
          {visibleNFTs.map((nft) => (
            <div key={nft.id} className="min-w-[260px] rounded-[28px] border border-white/10 bg-[#070707]/90 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:bg-[#111]/95 hover:shadow-glow">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm uppercase tracking-[0.32em] text-brand-gold/80">{nft.collection}</p>
                  <h3 className="mt-2 text-lg font-semibold text-brand-light">{nft.name}</h3>
                </div>
                <div className="rounded-2xl bg-brand-gold/10 px-3 py-2 text-[0.72rem] font-semibold text-brand-gold">
                  {nft.category}
                </div>
              </div>
              <div className="mt-4 space-y-3 text-sm text-brand-light/70">
                <div className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-3">
                  <span>Chain</span>
                  <span>{nft.blockchain}</span>
                </div>
                <div className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-3">
                  <span>Marketplace</span>
                  <span>{nft.marketplace}</span>
                </div>
              </div>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <div className="rounded-3xl bg-white/5 px-4 py-3">
                  <p className="text-[0.7rem] uppercase tracking-[0.25em] text-brand-gold/80">Floor</p>
                  <p className="mt-1 text-base">{nft.floorPrice}</p>
                </div>
                <div className="rounded-3xl bg-white/5 px-4 py-3">
                  <p className="text-[0.7rem] uppercase tracking-[0.25em] text-brand-gold/80">Volume</p>
                  <p className="mt-1 text-base">{nft.volume}</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-brand-light/70">
                <Sparkles size={18} className="text-brand-gold" />
                <span className="inline-flex items-center gap-2">
                  {nft.verified ? (
                    <CheckCircle size={16} className="text-brand-gold" />
                  ) : (
                    <span className="h-3 w-3 rounded-full bg-white/10" />
                  )}
                  {nft.verified ? 'Verified listing' : 'Verification pending'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 rounded-[32px] border border-white/10 bg-black/40 p-6 text-sm text-brand-light/80 shadow-soft backdrop-blur-xl sm:grid-cols-3">
        <div className="rounded-3xl bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Entries</p>
          <p className="mt-3 text-3xl font-semibold text-brand-light">{filteredNFTs.length.toLocaleString()}</p>
        </div>
        <div className="rounded-3xl bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Filters</p>
          <p className="mt-3 text-3xl font-semibold text-brand-light">{filter}</p>
        </div>
        <div className="rounded-3xl bg-white/5 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gold/80">Search</p>
          <p className="mt-3 text-3xl font-semibold text-brand-light">{search ? 'Active' : 'Any'}</p>
        </div>
      </div>
    </div>
  );
}
