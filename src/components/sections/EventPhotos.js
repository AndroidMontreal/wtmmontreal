'use client';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { aboutLastYearSession } from '@/data/aboutLastYearSession';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';
import PillButton from '@/components/elements/PillButton';


const EventPhotos = () => {
  return (
    <div className="flex flex-col gap-8 text-center items-center justify-center my-10">
      <TitleWithSubtitle
        title="Last Year at Women Techmakers Montreal"
        subTitle="Last year, we had 180+ attendees, 15+ speakers, 10+ sessions, and 1 amazing event."
        titleClassName="max-w-4xl"
        subTitleClassName="max-w-xl" />

      <iframe src={`https://www.youtube.com/embed/${aboutLastYearSession.videoId}?autoplay=1&mute=1&loop=1`}
          frameborder="0" allow="autoplay"  width="1500" height="844" />

      <div
        className="columns-1 gap-6 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3 [&>img:not(:first-child)]:mt-8 place-items-center place-content-center"
      >
        {aboutLastYearSession.eventPhotos.map((eventPhoto) => {
          return (
            <Image
              key={uuidv4()}
              src={eventPhoto.image}
              alt={eventPhoto.title}
              className="rounded-2xl mt-6 bg-white w-auto"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
            />
          );

        })}
      </div>

      <PillButton href={aboutLastYearSession.photoLink} label="All pictures" />
    </div>
  );
};

export default EventPhotos;
