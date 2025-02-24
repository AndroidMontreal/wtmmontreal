import { getPageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params: { lang } }) {
  return getPageMetadata(lang, 'speaker');
}

export default function SpeakerLayout({ children }) {
  return <div>{children}</div>;
}
