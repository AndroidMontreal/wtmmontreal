import { generalLinks } from '@/data/generalLink';

export const headerNavData = [
  {
    href: '/',
    label: 'Home',
  },
  {
    //   href: '/speakers', label: 'Speakers',
    // }, {
    //   href: '/schedule', label: 'Schedule',
    // }, {
    href: '/team',
    label: 'Team',
  },
  {
    href: generalLinks.papercallLink,
    label: 'Call for Speakers',
    newWindow: true,
  },
];

export const footerNavData = [
  {
    href: generalLinks.papercallLink,
    label: 'Call for Speakers',
    newWindow: true,
  },
  {
    href: generalLinks.sponsorshipLink,
    label: 'Get Sponsorship Proposal',
  },
  {
    href: '/code-of-conduct',
    label: 'Code of Conduct',
  },
];
