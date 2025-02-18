import Link from 'next/link';
import notFoundsvg from '@/public/images/404-computer.svg';
import '@/styles/globals.css';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 text-center">
      {/* Error message */}
      <h1 className="text-blue-500 text-3xl md:text-4xl font-bold mb-4">
        404 Not Found
      </h1>

      {/* Subtitle */}
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-6 bg-clip-text">
        Whoops! That page does not exist.
      </h2>

      {/* Helper text */}
      <p className="text-gray-400 text-lg mb-8">
        Here are some helpful links instead:
      </p>

      {/* Navigation links */}
      <nav className="flex flex-wrap justify-center gap-6 text-gray-300">
        <Link href="/" className="hover:text-blue-500 transition-colors">
          Home
        </Link>
      </nav>
    </div>
  );
}
