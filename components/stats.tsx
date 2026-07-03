'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Supported Chains', value: '8+' },
  { label: 'Major Marketplaces', value: '7+' },
  { label: 'NFT Entries', value: '10,000+' },
  { label: 'Community Discovery', value: 'Unlimited' },
];

export default function Stats() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
          className="rounded-[30px] border border-white/10 bg-black/35 p-8 shadow-soft backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-brand-gold/80">{item.label}</p>
          <p className="mt-4 text-4xl font-semibold text-brand-light">{item.value}</p>
        </motion.div>
      ))}
    </div>
  );
}
