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
    <div className="flex flex-col gap-8 text-center items-center justify-center my-10">
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
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/*<iframe*/}
      {/*  id="ytplayer"*/}
      {/*  src={`https://www.youtube.com/embed/${t('videoId')}?playlist=${t('videoId')}&autoplay=1&mute=1&loop=1&controls=0&showinfo=0`}*/}
      {/*  frameBorder="0"*/}
      {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
      {/*  width="1500"*/}
      {/*  height="844"*/}
      {/*/>*/}

      <div className="columns-1 gap-5 sm:columns-2 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-5 place-items-center place-content-center">
        {photosWithUUIDs.map((eventPhoto) => {
          return (
            <Image
              key={eventPhoto.uuid}
              src={eventPhoto.image}
              alt={eventPhoto.title}
              className="rounded-2xl mt-5 bg-white w-auto [&:first-child]:mt-0 shadow-lg"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
            />
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <PillButton href={t('photoLink')} label={t('photoButtonText')} />
        <PillButton href={t('videosLink')} label={t('videoButtonText')} />
      </div>
    </div>
  );
};

export default EventPhotos;
