import { generateNFTs } from '../utils/generateNFTs';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import NFTStream from '../components/nft-stream';
import Sidebar from '../components/sidebar';
import Features from '../components/features';
import Stats from '../components/stats';
import Footer from '../components/footer';

const nfts = generateNFTs(7000);

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(245,179,1,0.12),_transparent_30%),radial-gradient(circle_at_55%_0%,_rgba(255,255,255,0.08),_transparent_25%),linear-gradient(180deg,_#0A0A0A_0%,_#060606_100%)] text-brand-light">
      <Navbar />

      <div className="mx-auto flex max-w-[1600px] flex-col gap-16 px-4 pb-20 pt-8 sm:px-6 lg:px-12">
        <Hero />

        <div className="relative flex flex-col gap-10 xl:flex-row xl:items-start">
          <section className="flex-1 rounded-[40px] border border-white/10 bg-black/30 p-5 shadow-soft backdrop-blur-xl sm:p-6 lg:p-8">
            <NFTStream nfts={nfts} />
          </section>

          <aside className="hidden xl:block xl:w-[380px] xl:flex-none">
            <div className="sticky top-24 xl:top-28">
              <Sidebar />
            </div>
          </aside>
        </div>

        <aside className="xl:hidden">
          <details className="fixed bottom-4 left-4 right-4 z-50 overflow-hidden rounded-[32px] border border-white/10 bg-black/90 shadow-2xl backdrop-blur-3xl">
            <summary className="flex cursor-pointer items-center justify-between gap-3 px-5 py-4 text-sm font-semibold text-brand-light transition hover:bg-white/5">
              <span>NFT Insights</span>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-gold">Open</span>
            </summary>
            <div className="max-h-[70vh] overflow-y-auto border-t border-white/10">
              <Sidebar />
            </div>
          </details>
        </aside>

        <section className="space-y-8">
          <Features />
        </section>

        <section className="rounded-[38px] border border-white/10 bg-black/25 p-8 shadow-soft backdrop-blur-xl">
          <Stats />
        </section>
      </div>

      <Footer />
    </main>
  );
}
