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

      <div className="mx-auto flex max-w-[1600px] flex-col gap-20 px-6 pb-20 pt-8 lg:px-12">
        <Hero />

        <div className="relative flex flex-col gap-10 xl:flex-row">
          <section className="flex-1 rounded-[40px] border border-white/10 bg-black/30 p-6 shadow-soft backdrop-blur-xl lg:p-8">
            <NFTStream nfts={nfts} />
          </section>

          <aside className="hidden xl:block xl:w-[380px] xl:self-start">
            <Sidebar />
          </aside>
        </div>

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
