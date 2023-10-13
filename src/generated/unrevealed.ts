import type { FeatureKey } from '@unrevealed/react';

declare module '@unrevealed/react' {
  interface Features {
    'dark-mode': boolean;
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
  'dark-mode': {
    name: "Dark mode",
    description: "",
  },
};

export const featureKeys: FeatureKey[] = [
  'dark-mode',
];
