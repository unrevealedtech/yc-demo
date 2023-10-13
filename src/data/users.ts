import type { TeamTraits, UserTraits } from '@unrevealed/react';

export type Team = TeamTraits & { id: string };
export type User = UserTraits & { id: string; team: Team };

const prodTeams: Record<string, Team> = {
  unrevealed: {
    id: 'c37fd4d1-965c-47fd-81a1-f5b051e41ccf',
    name: 'Unrevealed',
    industry: 'SaaS',
    country: 'Belgium',
  },
  feedspan: {
    id: '4f3cb831-4f67-4680-a4f3-151debfc096f',
    name: 'Feedspan',
    industry: 'Major Banks',
    country: 'United States',
  },
  fivechat: {
    id: 'd92d9057-c1a3-4465-9e1e-7b7fb9899414',
    name: 'Fivechat',
    industry: 'Electrical Products',
    country: 'Canada',
  },
};

const prodUsers: User[] = [
  {
    id: '6e13c67a-0044-4675-aa11-2ce8f77a75be',
    firstName: 'Thomas',
    lastName: 'Groutars',
    age: 32,
    email: 'thom@unrevealed.tech',
    jobTitle: 'Founder',
    team: prodTeams.unrevealed,
  },
  {
    id: '5932631e-134a-4946-9899-aec4f647ccec',
    firstName: 'Bradley',
    lastName: 'Libbis',
    email: 'blibbis0@feedspan.com',
    age: 84,
    jobTitle: 'Quality Control Specialist',
    team: prodTeams.feedspan,
  },
  {
    id: '16c07474-5754-40c9-9a55-06044d78dfc9',
    firstName: 'Obadiah',
    lastName: 'Taylot',
    email: 'otaylot1@feedspan.com',
    age: 18,
    jobTitle: 'Sales Representative',
    team: prodTeams.feedspan,
  },
  {
    id: 'e76139a7-6ee9-45b2-abc1-d9dc7074bddb',
    firstName: 'Bartie',
    lastName: 'Sulter',
    email: 'bsulter2@feedspan.com',
    age: 39,
    jobTitle: 'Structural Analysis Engineer',
    team: prodTeams.feedspan,
  },
  {
    id: '0e534994-32b4-4943-841c-0a1bc2345820',
    firstName: 'Zia',
    lastName: 'Alentyev',
    email: 'zalentyev3@feedspan.com',
    age: 22,
    jobTitle: 'Software Consultant',
    team: prodTeams.feedspan,
  },
  {
    id: 'be6b9347-d81f-4687-8dff-4f554a606a27',
    firstName: 'Wandie',
    lastName: 'Pulver',
    email: 'wpulver4@fivechat.com',
    age: 30,
    jobTitle: 'Structural Engineer',
    team: prodTeams.fivechat,
  },
  {
    id: '85136fa5-d3cd-410b-81a2-3e3994a79236',
    firstName: 'Andrej',
    lastName: 'Gaudin',
    email: 'agaudin5@fivechat.com',
    age: 62,
    jobTitle: 'Office Assistant III',
    team: prodTeams.fivechat,
  },
  {
    id: '63a3f623-bc22-44b9-8acc-f56c8bcf59c6',
    firstName: 'Morena',
    lastName: 'Gull',
    email: 'mgull6@fivechat.com',
    age: 88,
    jobTitle: 'Senior Cost Accountant',
    team: prodTeams.fivechat,
  },
];

const devTeams: Record<string, Team> = {
  unrevealed: {
    id: 'ba56f236-7cd4-4681-aa15-48318a426e2c',
    name: 'Unrevealed',
    industry: 'SaaS',
    country: 'Belgium',
  },
};

const devUsers: User[] = [
  {
    id: '86926f6d-e872-4bc0-b34b-75b2fc531e12',
    firstName: 'Thomas',
    lastName: 'Groutars',
    age: 32,
    email: 'thom@unrevealed.tech',
    jobTitle: 'Founder',
    team: devTeams.unrevealed,
  },
];

export const users =
  process.env.NODE_ENV === 'development' ? devUsers : prodUsers;
