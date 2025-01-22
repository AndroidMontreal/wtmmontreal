import Link from 'next/link';
import { footerNavData } from '@/data/headerNavData';
import SocialLinks from '@/components/elements/SocialLinks';
import Image from 'next/image';
import logo from '@/public/images/logo/wtm_logo_year_mono_2025.svg';

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-9">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <Image
                src={logo}
                width={250}
                alt="Women Techmakers 2025 Montreal"
                priority={true}
              />
            </Link>
            <p className="text-xs text-gray-400 italic pt-3">
              © {new Date().getFullYear()} WTM Montreal. All rights reserved.
            </p>
          </div>
          <div className="lg:space-x-3 flex flex-col lg:flex-row justify-between">
            {footerNavData.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-gray-300"
                target={item.newWindow ? '_blank' : '_self'}
                rel={item.newWindow ? 'noopener noreferrer' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-center space-y-3">
            <SocialLinks />
            <Link
              href="https://wtmmontreal.us12.list-manage.com/subscribe?u=d1707279f0dde7f68a6f98ab0&id=35def8d91c"
              className="text-xs text-gray-400 italic hover:text-gray-300"
            >
              Subscribe to our newsletter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
