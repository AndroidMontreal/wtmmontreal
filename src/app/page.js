'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const defaultLang = 'fr';
    router.replace(`/${defaultLang}`);
  }, [router]);

  return null;
}
