import type { TeamTraits, UserTraits } from '@unrevealed/react';

export type Team = TeamTraits & { id: string };
export type User = UserTraits & { id: string; team: Team };

const prodTeams: Record<string, Team> = {
  unrevealed: {
    id: 'c37fd4d1-965c-47fd-81a1-f5b051e41ccf',
    name: 'Unrevealed',
  },
  yc: {
    id: '4f3cb831-4f67-4680-a4f3-151debfc096f',
    name: 'Y Combinator',
  },
};

const prodUsers: User[] = [
  {
    id: '6e13c67a-0044-4675-aa11-2ce8f77a75be',
    name: 'Thomas Groutars',
    team: prodTeams.unrevealed,
  },
  {
    id: '7050d68b-cad6-4053-bbd9-5fcd2b03c705',
    name: "Vladimir d'Ursel",
    team: prodTeams.unrevealed,
  },
  {
    id: '5932631e-134a-4946-9899-aec4f647ccec',
    name: 'Garry Tan',
    team: prodTeams.yc,
  },
  {
    id: '93dd2af6-83d8-4e45-92a7-bc02af8070e3',
    name: 'Gustaf Alstromer',
    team: prodTeams.yc,
  },
  {
    id: '0bc68235-6a7f-4b5d-9630-2309a4ba7327',
    name: 'Dalton Caldwell',
    team: prodTeams.yc,
  },
  {
    id: '320dca5b-57b0-40e9-9bd9-8d84c868745c',
    name: 'Jared Friedman',
    team: prodTeams.yc,
  },
];

const devTeams: Record<string, Team> = {
  unrevealed: {
    id: 'ba56f236-7cd4-4681-aa15-48318a426e2c',
    name: 'Unrevealed',
  },
};

const devUsers: User[] = [
  {
    id: '86926f6d-e872-4bc0-b34b-75b2fc531e12',
    name: 'Thomas Groutars',
    team: devTeams.unrevealed,
  },
];

export const users =
  process.env.NODE_ENV === 'development' ? devUsers : prodUsers;
