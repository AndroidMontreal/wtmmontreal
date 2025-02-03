'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { locales } from '@/i18n';

const LanguageSwitcher = () => {
  const pathName = usePathname();
  const currentLocale = useLocale();

  // Get the alternative locale
  const alternativeLocale = locales.find((locale) => locale !== currentLocale);

  const redirectedPathName = (locale) => {
    if (!pathName) return '/';

    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  return (
    <div className="flex items-center">
      {alternativeLocale && (
        //   <Link
        //     href={redirectedPathName(alternativeLocale)}
        //     className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100"
        //   >
        //     {alternativeLocale.toUpperCase()}
        //   </Link>
        // )}
        <Link
          href={redirectedPathName(alternativeLocale)}
          className="text-gray-800 px-4 py-2 text-md hover:text-black hover:bg-gray-200 rounded-full"
        >
          {alternativeLocale.toUpperCase()}
        </Link>
      )}
    </div>
  );
};

export default LanguageSwitcher;
