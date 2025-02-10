'use client'; // Mark this as a Client Component
import '@/styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/fr'); // Redirect to /fr
  }, [router]);

  return null; // Render nothing while redirecting
}
