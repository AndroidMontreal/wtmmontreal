'use client';
import Link from 'next/link';
import SocialLinks from '@/components/elements/SocialLinks';
import Image from 'next/image';
import logo from '@/public/images/logo/wtm_logo_year_footer_2025.svg';
import { useTranslations } from 'next-intl';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'next/navigation';
import { CiCircleChevRight } from 'react-icons/ci';

const Footer = () => {
  const t = useTranslations('navigation.footer');
  const { lang } = useParams();

  const quickLinksWithUUIDs =
    t.raw('quickLinks.links') &&
    t.raw('quickLinks.links').map((link) => ({
      ...link,
      uuid: uuidv4(),
    }));

  const pastEventLinkWithUUIDs =
    t.raw('pastEvents.eventLinks') &&
    t.raw('pastEvents.eventLinks').map((link) => ({
      ...link,
      uuid: uuidv4(),
    }));

  return (
    <footer className="bg-black bg-opacity-90 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:place-items-start lg:justify-items-center">
          {/* Column 1: Logo, Description and Social */}
          <div className="space-y-4 px-2 ">
            <Link href={`/${lang}`}>
              <Image
                src={logo}
                width={280}
                alt="Women Techmakers 2025 Montréal"
                priority={true}
              />
            </Link>
            <p className="text-sm text-gray-400 leading-normal pt-1">
              {t('description')}
            </p>
            <div className="pt-2">
              <SocialLinks />
            </div>
            <p className="text-xs text-gray-400 italic pt-3">
              © {new Date().getFullYear()} {t('copyrightTitle')}
            </p>
          </div>

          {/* Column 2: Previous Years Event */}
          <div className="space-y-4 px-2 ">
            <h3 className="text-lg font-semibold tracking-normal">
              {t('pastEvents.title')}
            </h3>
            <ul className="space-y-2 ">
              {pastEventLinkWithUUIDs.map((link) => (
                <li key={link.uuid}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                    target={link.newWindow ? '_blank' : '_self'}
                    rel={link.newWindow ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4 px-2 ">
            <h3 className="text-lg font-semibold tracking-normal">
              {t('quickLinks.title')}
            </h3>
            <ul className="space-y-2">
              {quickLinksWithUUIDs.map((link) => (
                <li key={link.uuid}>
                  <Link
                    key={link.uuid}
                    href={link.newWindow ? link.href : `/${lang}${link.href}`}
                    className="text-gray-400 hover:text-gray-300 transition-colors"
                    target={link.newWindow ? '_blank' : '_self'}
                    rel={link.newWindow ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Subscribe */}
          <div className="space-y-6 px-2 ">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{t('newsletter.title')}</h3>
              <p className="text-sm text-gray-400 leading-normal pt-1 mb-2">
                {t('newsletter.description')}
              </p>
              <div className="pt-3">
                <Link
                  href={t('newsletter.href')}
                  aria-label={t('newsletter.title')}
                  className="group inline-flex items-center justify-center px-5 py-2.5 text-base font-medium shadow-md rounded-full bg-[#0F7C67] text-white hover:bg-[#038067] transition-colors duration-300"
                >
                  <span>{t('newsletter.buttonText')}</span>
                  <CiCircleChevRight className="h-6 w-6 text-white ml-1 transition-transform duration-300 group-hover:scale-110"></CiCircleChevRight>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
