export const siteContent = {
  name: 'BARDHAMAN CHHATRA KALYAN SAMITY',
  founder: 'Sri Baidyanath Singha Roy',
  founderRole: 'Founder and founder-secretary; now on the Advisory Committee',
  founderBackground:
    'Former Assistant Headmaster of Bardhaman Raj Collegiate School and co-founder of Students Health Home, Bardhaman.',
  established: 2011,
  registration: 'A society registered under the Society Registration Act and registered with DARPAN.',
  mission:
    'To work for the welfare of deserving school students from financially weaker sections of society.',
  vision: 'Students are the future of society. By supporting underprivileged students, we can help build a better society.',
  activities: ['Scholarships', 'Cultural competitions', 'Health camps and seminars'],
  fees: {
    newMembership: 2000,
    renewal: 500,
    minimumDonation: 500,
    personalScholarship: 2000,
    smritiPuraskar: 20000,
  },
  payment: {
    upiId: '[TODO: verified UPI ID]',
    qrAsset: '[TODO: verified UPI QR image]',
    accountName: '[TODO: verified bank account name]',
    accountNumber: '[TODO: verified bank account number]',
    ifsc: '[TODO: verified IFSC code]',
    bankBranch: '[TODO: verified bank and branch]',
  },
  legal: {
    registrationNumber: '[TODO: registration number]',
    actName: '[TODO: applicable registration act]',
    twelveA: '[TODO: 12A number, if applicable]',
    eightyG: '[TODO: 80G number, if applicable]',
  },
} as const;

export const isPlaceholder = (value: string) => value.startsWith('[TODO:');
