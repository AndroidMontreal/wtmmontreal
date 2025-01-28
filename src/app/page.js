// app/page.js
'use client'; // Mark this as a Client Component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/fr'); // Redirect to /fr
  }, [router]);

  return null; // Render nothing while redirecting
}
