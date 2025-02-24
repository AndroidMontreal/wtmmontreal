import { getTranslations, setRequestLocale } from 'next-intl/server';
import SpeakerInfo from '@/components/elements/SpeakerInfo';
import { notFound } from 'next/navigation';

export default async function SpeakerPage({ params }) {
  const { lang } = params;
  // Fetch translations and data
  const t = await getTranslations({ locale: lang, namespace: 'speaker' });
  const s = await getTranslations({ locale: lang, namespace: 'session' });

  // Get speakers data from translations
  const speakers = Array.isArray(t.raw('speakers')) ? t.raw('speakers') : [];
  const speaker = speakers.find((s) => s.slug === params.slug);

  // Get sessions data from translations
  const sessions = Array.isArray(s.raw('sessions')) ? s.raw('sessions') : [];
  const speakerSessions = sessions.filter((session) =>
    session.speakerUUID.includes(speaker?.uuid)
  );

  if (!speaker && !speakerSessions) {
    notFound();
  }

  return (
    <SpeakerInfo
      speaker={speaker}
      speakerSessions={speakerSessions}
      locale={lang}
    />
  );
}

export async function generateStaticParams({ params: { lang } }) {
  const t = await getTranslations({ locale: lang, namespace: 'speaker' });
  const speakers = Array.isArray(t.raw('speakers')) ? t.raw('speakers') : [];
  return speakers.map((speaker) => ({
    slug: speaker.slug,
  }));
}
