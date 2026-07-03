"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

const socials = [
  { label: "X", href: "https://x.com/nfts_onchain?s=21", color: "#1DA1F2" },
  { label: "Discord", href: "https://discord.gg/AHwUFb98v", color: "#7289DA" },
  { label: "Telegram", href: "https://t.me/nftsonchain", color: "#2AABEE" },
  { label: "YouTube", href: "https://youtube.com/@nfts_onchain?si=AdjYjhcEIoihXnI_", color: "#FF0000" },
  { label: "TikTok", href: "https://www.tiktok.com/@nfts_onchain?_r=1&_t=ZS-95oe6sXkSwh", color: "#000000" },
  { label: "Instagram", href: "https://www.instagram.com/nfts_onchain", color: "#E1306C" },
  { label: "Facebook", href: "https://www.facebook.com/share/1AxrJpxfwm", color: "#1877F2" },
];

export default function CommunityModal({ open, onClose }: Props) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          aria-modal="true"
          role="dialog"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="relative z-10 mx-3 w-full max-w-3xl rounded-t-[40px] rounded-b-3xl border border-white/10 bg-black/30 p-5 shadow-2xl backdrop-blur-2xl sm:mx-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-brand-light">Join the NFTs Onchain Community</h3>
                <p className="mt-2 text-sm text-brand-light/80">Only use trusted and verified links to protect your information and keep our community secure.</p>
              </div>
              <button aria-label="Close" onClick={onClose} className="rounded-full p-2 text-brand-light/80 transition hover:bg-white/5">
                <X />
              </button>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center gap-3 rounded-3xl border border-white/6 bg-white/5 p-4 text-center transition hover:scale-[1.02] hover:shadow-glow"
                >
                  <div style={{ borderColor: 'rgba(245,179,1,0.12)' }} className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/40 text-brand-gold transition group-hover:brightness-110">
                    <span className="text-sm font-bold" style={{ color: s.color }}>{s.label[0]}</span>
                  </div>
                  <div className="text-sm font-semibold text-brand-light">{s.label}</div>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-yellow-800/12 bg-black/25 p-4 text-sm text-brand-light/80">
              <p className="font-semibold">⚠ WARNING:</p>
              <p className="mt-2">Stay away from fake links, impersonator accounts, and unofficial messages claiming to represent NFTs Onchain.</p>
              <p className="mt-2">Always verify you are interacting with official handles listed here.</p>
              <p className="mt-3 font-semibold">We will NEVER:</p>
              <ul className="mt-2 list-inside list-disc text-sm">
                <li>Ask for your seed phrase, recovery phrase, or private keys</li>
                <li>Request access to your wallet or personal accounts</li>
                <li>Ask you to send NFTs or digital assets for verification, rewards, or support</li>
                <li>Contact you first via DM for official support</li>
              </ul>
              <p className="mt-3">If anyone makes such requests, it is a scam.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
