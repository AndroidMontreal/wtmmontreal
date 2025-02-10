// app/dddd.js
'use client'; // Mark this as a Client Component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dddd() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/fr'); // Redirect to /fr
  }, [router]);

  return <div>{/* ... */}</div>;
}
