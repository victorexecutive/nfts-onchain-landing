'use client';

import { motion } from 'framer-motion';
import { Globe2, BookOpen, MessageSquare, Layers, Sparkles, Users } from 'lucide-react';

const features = [
  {
    title: 'Cross-chain discovery',
    description: 'Surf NFT culture and liquidity across every major chain with unified discovery tools.',
    icon: Globe2,
  },
  {
    title: 'NFT culture education',
    description: 'Learn about emerging communities, drops, and trends with curated insights.',
    icon: BookOpen,
  },
  {
    title: 'Community discussions',
    description: 'Connect with builders, collectors, and creators inside one premium hub.',
    icon: MessageSquare,
  },
  {
    title: 'Ecosystem visibility',
    description: 'Amplify projects and collections with immersive discovery experiences.',
    icon: Layers,
  },
  {
    title: 'Builder connections',
    description: 'Match builders with collaborators, curators, and supportive communities.',
    icon: Users,
  },
  {
    title: 'Knowledge sharing',
    description: 'Access educational paths, resources, and insights from industry leaders.',
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.32em] text-brand-gold/80">Features</p>
        <h2 className="text-3xl font-semibold text-brand-light">Premium Web3 experiences, designed to elevate NFT discovery.</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group rounded-[32px] border border-white/10 bg-black/30 p-6 shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:border-brand-gold/30 hover:bg-brand-gold/10"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-gold/10 text-brand-gold shadow-glow">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-brand-light">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-light/70">{feature.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
