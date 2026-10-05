export const siteContent = {
  name: 'Bardhaman Chhatra Kalyan Samiti',
  founder: 'Sri Baidyanath Singha Roy',
  founderRole: 'Founder and founder-secretary; now on the Advisory Committee',
  founderBackground:
    'Former Assistant Headmaster of Bardhaman Raj Collegiate School and co-founder of Students Health Home, Bardhaman.',
  mission:
    'To support deserving students with education, financial assistance, and opportunities that help them achieve their goals and build a better future.',
  vision: 'To create a society where financial limitations never prevent a deserving student from pursuing education and realizing their potential.',
  activities: ['Scholarships', 'Quiz competitions', 'Drawing and cultural competitions', 'Health checkups'],
  fees: {
    newMembership: 2000,
    renewal: 500,
    minimumDonation: 200,
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
