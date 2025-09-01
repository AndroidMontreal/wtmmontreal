import { getPageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params: { lang } }) {
  return getPageMetadata(lang, 'media');
}

export default function PodcastLayout({ children }) {
  return children;
}
