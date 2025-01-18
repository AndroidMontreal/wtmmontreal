// components/SocialLinks.js

import {
  FaDiscord,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaSpotify,
  FaFacebook,
} from 'react-icons/fa6';

const socialLinksData = [
  {
    href: 'https://www.linkedin.com/company/women-techmakers-montreal',
    icon: FaLinkedinIn,
    label: 'Linkedin',
  },
  {
    href: 'https://www.instagram.com/wtmmontreal/',
    icon: FaInstagram,
    label: 'Instagram',
  },
  {
    href: 'https://www.facebook.com/wtm.montreal',
    icon: FaFacebook,
    label: 'Facebook',
  },
  {
    href: 'https://discord.com/invite/rKMxWWDSTT',
    icon: FaDiscord,
    label: 'Discord',
  },
  {
    href: 'https://youtube.com/@wtmmontreal',
    icon: FaYoutube,
    label: 'YouTube',
  },
  {
    href: 'https://open.spotify.com/show/30lv57o8Hgz5VOvaX4C1gW',
    icon: FaSpotify,
    label: 'Spotify',
  },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-3">
      {socialLinksData.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="hover:text-gray-400 text-gray-200"
        >
          <span className="sr-only">{link.label}</span>
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}
