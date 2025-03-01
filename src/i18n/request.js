import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, locales } from '@/i18n/index';

// list of all namespaces for translations expect metadata file
export const namespaces = [
  'navigation',
  'event',
  'about',
  'eventPhoto',
  'sponsor',
  'partner',
  'venue',
  'team',
  'code_of_conduct',
  'speaker',
  'session',
  'schedule',
];

export async function loadTranslations(locale, namespaces) {
  const messages = {};
  for (const ns of namespaces) {
    try {
      const data = (await import(`@/locales/${locale}/${ns}.json`)).default;
      messages[ns] = data;
    } catch (error) {
      console.error(
        `Error loading translations for ${locale}/${ns}.json:`,
        error
      );
      throw error;
    }
  }
  return messages;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locales.includes(locale)) {
    locale = defaultLocale; // Fallback to 'en' if invalid
  }
  const messages = await loadTranslations(locale, namespaces);

  return {
    locale,
    messages,
    timeZone: 'UTC',
    now: new Date(),
    defaultLocale,
    locales,
  };
});
