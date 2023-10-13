import type { FeatureKey } from '@unrevealed/react';

declare module '@unrevealed/react' {
  interface Features {
    boost: boolean;
    dislike: boolean;
    instagram: boolean;
    like: boolean;
    superlike: boolean;
    'unlimited-likes': boolean;
    'view-likes': boolean;
  }

  interface UserTraits {
    name: string | null;
  }

  interface TeamTraits {
    name: string | null;
  }
}

export interface Feature {
  name: string;
  description: string;
}

export const features: Record<FeatureKey, Feature> = {
  boost: {
    name: "Boost",
    description: "Boost your profile to get in front of everyone",
  },
  dislike: {
    name: "Dislike",
    description: "Swipe left to dislike",
  },
  instagram: {
    name: "Link instagram account",
    description: "Show instagram account on your profile",
  },
  like: {
    name: "Like",
    description: "Swipe right to like",
  },
  superlike: {
    name: "Superlike",
    description: "Send super likes to others",
  },
  'unlimited-likes': {
    name: "Unlimited likes",
    description: "Unlock unlimited likes",
  },
  'view-likes': {
    name: "View who likes you",
    description: "Unlock profiles who liked you",
  },
};

export const featureKeys: FeatureKey[] = [
  'boost',
  'dislike',
  'instagram',
  'like',
  'superlike',
  'unlimited-likes',
  'view-likes',
];
