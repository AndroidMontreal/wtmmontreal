'use client';
import SpeakerCard from '@/components/elements/SpeakerCard';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { useTranslations } from 'next-intl';
import { sortTeamByFirstName } from '@/lib/utils';
import { getPageMetadata } from '@/lib/metadata';

const Speakers = () => {
  const t = useTranslations('speaker');

  // error check for data
  const speakers = Array.isArray(t.raw('speakers')) ? t.raw('speakers') : [];

  // sort method for speaker by name
  const sortedSpeakers = sortTeamByFirstName(speakers);

  return (
    <div
      id="speakers"
      className="flex flex-col gap-6 text-center items-center justify-center my-24"
    >
      <TitleWithSubtitle
        title={t('title')}
        subTitle={t('description')}
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-xl"
      />

      <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-7xl mx-auto ">
        {sortedSpeakers.map((speaker) => (
          <li key={speaker.uuid} className="flex items-start">
            <SpeakerCard speaker={speaker} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Speakers;
