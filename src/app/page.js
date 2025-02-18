'use client';
import '@/styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const defaultLang = 'fr'; // Set your default language here
    router.replace(`/${defaultLang}`);
  }, [router]);

  return null; // Render nothing while redirecting
}
