'use client';
import Image from 'next/image';
import logo from '@/public/images/logo/wtm_logo_year_color.svg';
import anniversary from '@/public/images/logo/anniversary.png';
import Link from 'next/link';
import Navbar from '@/components/elements/Navbar';
import MobileDrawer from '@/components/elements/MobileDrawer';
import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import PillButton from '@/components/elements/PillButton';
import { generalLinks } from '@/data/generalLink';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 mt-0 px-3">
      <div className="bg-white container mx-auto flex items-center justify-between pt-5">
        <div className="bg-gray-50 container mx-auto flex items-center justify-between p-5 rounded-2xl shadow">
          {/* Logo and other elements on the left */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image
                src={logo}
                width={250}
                alt="Women Techmakers 2025 Montreal"
                priority={true}
              />
            </Link>
            <Image
              src={anniversary}
              width={65}
              alt="10 Years Anniversary Icon"
              priority={true}
            />
          </div>

          <div className="flex flex-row ">
            {/* Navigation (Desktop) on the right */}
            <Navbar isMobile={false} />
            <PillButton
              className="ml-3 hidden md:flex"
              href={generalLinks.ticketLink}
              label="Get Tickets"
            />
          </div>
          {/* Hamburger Menu (Mobile) */}
          <button
            className="md:hidden text-gray-800 hover:text-black focus:outline-none p-2 hover:bg-gray-200 rounded-full"
            onClick={() => setIsMenuOpen(true)}
            role="button"
            aria-label="menu"
            aria-pressed="false"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>

        {/*App Drawer overlay background*/}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}

        {/* App Drawer (Mobile) */}
        <MobileDrawer
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
