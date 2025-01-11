import { generalLinks } from '@/data/generalLink';

export const headerNavData = [{
  href: '/', label: 'Home',
}, {
  href: '/speakers', label: 'Speakers',
}, {
  href: '/schedule', label: 'Schedule',
}, {
  href: '/team', label: 'Team',
}];


export const footerNavData = [{
  href: generalLinks.papercallLink, label: 'Call for paper',
}, {
  href: 'https://docs.google.com/presentation/d/1ezmE9o9o-EXhEa_ofPospL9hFGxAYm8xtnV_0m3AqSo/edit?usp=sharing',
  label: 'Sponsorship proposal',
}, {
  href: '/code-of-conduct', label: 'Code of conduct',
}];
