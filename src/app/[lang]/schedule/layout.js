import { getPageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params: { lang } }) {
  return getPageMetadata(lang, 'schedule');
}

export default function ScheduleLayout({ children }) {
  return <div>{children}</div>;
}
