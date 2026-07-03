import { type NFTData } from '../data/mock-nfts';

const chains = ['Ethereum', 'Solana', 'Polygon', 'Base', 'Avalanche', 'BNB Chain', 'Arbitrum', 'Optimism'] as const;
const marketplaces = ['OpenSea', 'Blur', 'Magic Eden', 'Tensor', 'Zora', 'Foundation', 'LooksRare'] as const;
const categories = ['Art', 'Music', 'Gaming', 'Collectible', 'Utility', 'Metaverse'] as const;
const collections = ['LumenVerse', 'ChainGlass', 'PixelPulse', 'NovaRealm', 'GoldenFrame', 'Aura Labs'];

const verifiedPool = [true, false, true, true, false, true];

const priceBase = {
  Ethereum: 1.8,
  Solana: 3.2,
  Polygon: 0.55,
  Base: 0.95,
  Avalanche: 1.1,
  'BNB Chain': 0.88,
  Arbitrum: 1.15,
  Optimism: 1.03,
};

export function generateNFTs(count = 7000): NFTData[] {
  return Array.from({ length: count }, (_, index) => {
    const chain = chains[index % chains.length];
    const marketplace = marketplaces[index % marketplaces.length];
    const collection = collections[index % collections.length];
    const category = categories[index % categories.length];
    const floor = (priceBase[chain] * (0.4 + ((index % 40) / 40))).toFixed(2);
    const volume = (Math.round((Number(floor) * (15 + (index % 40))) * 100) / 100).toFixed(2);

    return {
      id: `nft-${index + 1}`,
      name: `Onchain Artifact ${index + 1}`,
      collection,
      blockchain: chain,
      marketplace,
      floorPrice: `${floor} ETH`,
      volume: `${volume} ETH`,
      category,
      verified: verifiedPool[index % verifiedPool.length],
    };
  });
}
