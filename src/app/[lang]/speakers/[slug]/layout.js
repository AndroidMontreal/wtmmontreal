import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({ params }) {
  const t = await getTranslations('speaker');
  const speakers = Array.isArray(t.raw('speakers')) ? t.raw('speakers') : [];
  const speaker = speakers.find((s) => s.slug === params.slug);

  return {
    title: speaker?.name,
    description: speaker?.title,
    openGraph: {
      images: [speaker?.image],
    },
  };
}

export default function SpeakerDetailsLayout({ children, params: { lang } }) {
  setRequestLocale(lang);
  return children;
}
