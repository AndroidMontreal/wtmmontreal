import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import { useTranslations } from 'next-intl';

const Navbar = ({ isMobile }) => {
  const pathname = usePathname();
  const { lang } = useParams();

  const t = useTranslations('navigation.header');

  const headerNavigationWithUUIDs = Array.isArray(t.raw('headerNavigation'))
    ? t.raw('headerNavigation').map((nav) => ({
        ...nav,
        uuid: uuidv4(),
      }))
    : [];

  // Normalize pathname by removing the locale prefix
  const normalizedPathname =
    pathname.replace(new RegExp(`^/${lang}`), '') || '/';

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={
        isMobile
          ? 'flex flex-col space-y-2 '
          : 'hidden lg:flex space-x-3 items-center'
      }
    >
      {headerNavigationWithUUIDs.map((link) => {
        const isActive =
          normalizedPathname === link.href ||
          (normalizedPathname === '/' && link.href === '/') ||
          (link.href !== '/' && normalizedPathname.startsWith(link.href));

        return (
          <Link
            key={link.uuid}
            href={link.newWindow ? link.href : `/${lang}${link.href}`}
            target={link.newWindow ? '_blank' : '_self'}
            rel={link.newWindow ? 'noopener noreferrer' : undefined}
            className={`
            text-gray-800
            px-4
            py-2
            text-md
            hover:text-black
            hover:bg-gray-200
            ${!isMobile && 'rounded-full'}
            ${isActive ? 'bg-gray-200 text-gray-800' : ''} 
          `}
            aria-current={isActive ? 'page' : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
