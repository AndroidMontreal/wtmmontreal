import GoogleAnalytics from '@/lib/GoogleAnalytics';
import '@/styles/globals.css';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { locales } from '@/i18n';
import { loadTranslations, namespaces } from '@/i18n/request';
import { getPageMetadata } from '@/lib/metadata';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

const openSans = Open_Sans({
  weight: ['400', '700'], // Include the font weights you'll use
  style: 'normal', // or italic
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export async function generateMetadata({ params: { lang } }) {
  return getPageMetadata(lang, 'site'); // Pass the page key!
}

export default async function RootLayout({ children, params: { lang } }) {
  if (!locales.includes(lang)) notFound();
  // Enable static rendering
  setRequestLocale(lang);
  // Load the messages using the loadTranslations function
  let messages;
  try {
    messages = await loadTranslations(lang, namespaces);
  } catch (error) {
    return notFound();
  }

  return (
    <html lang={lang} className={openSans.className}>
      <body className="flex flex-col min-h-screen">
        <NextIntlClientProvider
          locale={lang}
          timeZone="UTC"
          messages={messages}
        >
          <Header />
          <main className="container flex mx-auto px-5 flex-col flex-grow">
            {/* Allow main content to expand */}
            {children}
          </main>
          <Footer />
          <GoogleAnalytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Generate static paths for all supported languages

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}
