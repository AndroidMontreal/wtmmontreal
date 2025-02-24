'use client';
import Link from 'next/link';
import notFoundsvg from '@/public/images/404-computer.svg';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 text-center">
      <div>
        <Image
          src={notFoundsvg}
          alt="404 illustration"
          width={400}
          height={300}
        />
      </div>

      {/* Subtitle */}
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 bg-clip-text">
        Whoops! That page does not exist.
      </h2>

      {/* Navigation links */}
      <nav className="flex flex-wrap justify-center gap-6 text-gray-300">
        <Link href="/" className="hover:text-blue-500 transition-colors">
          Return to Home Page
        </Link>
      </nav>
    </div>
  );
}
