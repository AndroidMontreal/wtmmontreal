import '@/styles/globals.css';
import { locales } from '@/i18n';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}
