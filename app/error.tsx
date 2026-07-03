'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center bg-brand-dark px-6 py-10 text-brand-light">
      <div className="glass-panel max-w-xl rounded-3xl border border-white/10 p-10 text-center shadow-soft">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold/80">Something went wrong</p>
        <h1 className="mt-6 text-3xl font-semibold">Page failed to load</h1>
        <p className="mt-4 text-sm leading-7 text-brand-light/80">Please refresh the page or try again later.</p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-brand-gold/30 bg-brand-gold/10 px-6 py-3 text-sm font-semibold text-brand-gold transition hover:border-brand-gold hover:bg-brand-gold/15"
        >
          Retry
        </button>
      </div>
    </main>
  );
}
