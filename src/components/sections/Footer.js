'use client';
import Link from 'next/link';
import SocialLinks from '@/components/elements/SocialLinks';
import Image from 'next/image';
import logo from '@/public/images/logo/wtm_logo_year_mono_2025.svg';
import { useTranslations } from 'next-intl';
import { v4 as uuidv4 } from 'uuid';

const Footer = () => {
  const t = useTranslations('navigation.footer');

  const footerNavigationWithUUIDs =
    t.raw('footerNavigation') &&
    t.raw('footerNavigation').map((link) => ({
      ...link,
      uuid: uuidv4(),
    }));

  return (
    <footer className="bg-black bg-opacity-90 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-9">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <Image
                src={logo}
                width={250}
                alt="Women Techmakers 2025 Montréal"
                priority={true}
              />
            </Link>
            <p className="text-xs text-gray-400 italic pt-3">
              © {new Date().getFullYear()} {t('footerCopyright')}
            </p>
          </div>
          <div className="lg:space-x-3 flex flex-col lg:flex-row justify-between">
            {footerNavigationWithUUIDs.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-gray-300"
                target={link.newWindow ? '_blank' : '_self'}
                rel={link.newWindow ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center space-y-3">
            <SocialLinks />
            <Link
              href="https://wtmmontreal.us12.list-manage.com/subscribe?u=d1707279f0dde7f68a6f98ab0&id=35def8d91c"
              className="text-xs text-gray-400 italic hover:text-gray-300"
            >
              {t('newsletter')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
