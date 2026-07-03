export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-brand-dark text-brand-light">
      <div className="flex flex-col items-center gap-4 px-6 py-10 text-center">
        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-brand-gold via-transparent to-white shadow-glow"></div>
        <p className="text-sm uppercase tracking-[0.35em] text-brand-gold/90">NFTs Onchain</p>
        <div className="space-y-2">
          <div className="h-3 w-36 rounded-full skeleton"></div>
          <div className="h-3 w-24 rounded-full skeleton"></div>
        </div>
      </div>
    </div>
  );
}
