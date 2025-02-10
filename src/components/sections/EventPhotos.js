'use client';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import PillButton from '@/components/elements/PillButton';
import { useTranslations } from 'next-intl';

const EventPhotos = () => {
  const t = useTranslations('eventPhoto');

  const photosWithUUIDs =
    t.raw('photos') &&
    t.raw('photos').map((eventPhoto) => ({
      ...eventPhoto,
      uuid: uuidv4(),
    }));

  return (
    <div className="flex flex-col gap-3 md:gap-6 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title={t('title')}
        subTitle={t('description')}
        titleClassName="max-w-4xl"
        subTitleClassName="max-w-xl"
      />

      {/*/!*Video Section*!/*/}

      <div
        className={`relative w-full pt-[56.25%] rounded-2xl overflow-hidden`}
      >
        <iframe
          src={`https://www.youtube.com/embed/${t('videoId')}?playlist=${t('videoId')}&autoplay=1&mute=1&loop=1&controls=0&showinfo=0`}
          className="absolute top-0 left-0 w-full h-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="WTM 2024 Event Highlights"
        />
      </div>

      <div className="columns-1 gap-3 md:gap-6 sm:columns-2 md:columns-3 lg:columns-3 md:[&>img:not(:first-child)]:mt-6 place-items-center place-content-center">
        {photosWithUUIDs.map((eventPhoto) => {
          return (
            <Image
              key={eventPhoto.uuid}
              src={eventPhoto.image}
              alt={eventPhoto.title}
              className="rounded-2xl mt-4 md:mt-6 bg-white w-auto [&:first-child]:mt-0 shadow-lg"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
            />
          );
        })}
      </div>

      <div className="flex gap-4 justify-center">
        <PillButton href={t('photoLink')} label={t('photoButtonText')} />
        <PillButton href={t('videosLink')} label={t('videoButtonText')} />
      </div>
    </div>
  );
};

export default EventPhotos;
