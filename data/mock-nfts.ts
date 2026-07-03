export type NFTData = {
  id: string;
  name: string;
  collection: string;
  blockchain: string;
  marketplace: string;
  floorPrice: string;
  volume: string;
  category: string;
  verified: boolean;
};

export const placeholderNFTs: NFTData[] = [];
