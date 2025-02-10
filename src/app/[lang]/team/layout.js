import { getPageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params: { lang } }) {
  return getPageMetadata(lang, 'team');
}

export default function TeamLayout({ children }) {
  return <div>{children}</div>;
}
