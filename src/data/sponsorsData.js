import { generalLinks } from '@/data/generalLink';

export const sponsorLevels = [
  { title: 'Platinum', level: 'platinum' },
  { title: 'Gold', level: 'gold' },
  { title: 'Silver', level: 'silver' },
];

export const sponsorsData = {
  title: 'Our Sponsors',
  description:
    "Let's Make a Difference Together! Become Our Community Sponsor.",
  buttonText: 'Become a partner',
  buttonLink: generalLinks.sponsorshipLink,
  sponsors: [
    {
      level: 'platinum',
      logo: '/images/partners/Dialog.svg',
      company: 'Dialog',
      website: 'https://www.dialogue.co/en/careers',
    },
    {
      level: 'platinum',
      logo: '/images/partners/Distech.svg',
      company: 'Distech',
      website: 'https://www.distech-controls.com/',
    },
    {
      level: 'gold',
      logo: '/images/partners/go_rock_it_2025.svg',
      company: 'GO ROCK IT',
      website: 'https://gorockit.ca/',
    },
    {
      level: 'gold',
      logo: '/images/partners/ctrlweb.svg',
      company: 'ctrlweb',
      website: 'https://ctrlweb.ca/',
    },
    {
      level: 'silver',
      logo: '/images/partners/mirego_2025.svg',
      company: 'Mirego',
      website:
        'https://www.mirego.com/fr?utm_source=wtmmontreal&utm_medium=referral&utm_content=logo&utm_campaign=2025sponsorship',
    },
    {
      level: 'silver',
      logo: '/images/partners/GameAddik.svg',
      company: 'GameAddik',
      website: 'https://gameaddik.com/',
    },
  ],
};
