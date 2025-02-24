'use client';
import '@/styles/globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  weight: ['400', '700'], // Include the font weights you'll use
  style: 'normal', // or italic
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={openSans.className}>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
