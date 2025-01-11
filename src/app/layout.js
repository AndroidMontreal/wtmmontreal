import GoogleAnalytics from '@/lib/GoogleAnalytics';
import '@/styles/globals.css';
import { Open_Sans } from 'next/font/google';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

const openSans = Open_Sans({
  weight: ['400', '700'], // Include the font weights you'll use
  style: 'normal', // or italic
  subsets: ['latin'],
  display: 'swap',
});
export const metadata = {
  metadataBase: new URL('http://wtmmontreal.com'),
  title: 'Women Techmakers Montreal 2025 | GDG Montreal | WTM Montreal | Flutter Montreal',
  description: 'Conference promoting talented and passionate women, increasing the visibility of the Montreal technology community and empowering women in technology' ,
   openGraph: {
    images: ['/images/logo/eventHeader.gif'],
  }
};

export default function RootLayout({ children }) {
  return (<html lang="en">
    <body className={openSans.className}>
      <Header />
      <main className="container flex mx-auto px-5 flex-col flex-grow"> {/* Allow main content to expand */}
        {children}
      </main>
      <Footer />
      <GoogleAnalytics />
    </body>
  </html>
  );
}
