'use client';
import Image from 'next/image';
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';
import PillButton from '@/components/elements/PillButton';
import Link from 'next/link';
import col1img1 from '@/public/images/eventHeader/woman_techmaker_202401.jpg';
import col2img1 from '@/public/images/eventHeader/woman_techmaker_202402.jpg';
import col2img2 from '@/public/images/eventHeader/woman_techmaker_202405.jpg';
import col3img1 from '@/public/images/eventHeader/woman_techmaker_202406.jpg';
import col3img2 from '@/public/images/eventHeader/woman_techmaker_202407.jpg';
import { useTranslations } from 'next-intl';

const EventHeader = () => {
  const t = useTranslations('event');

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Pattern */}
      <svg
        className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="grid-pattern"
            width="200"
            height="200"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#grid-pattern)"
        />
      </svg>

      {/* Gradient Blur Effect for background */}
      <div className="hidden md:block absolute md:left-1/4 right-0 md:top-0 -bottom-44 md:bottom-0 -z-10 lg:-ml-24 -ml-2.5  transform-gpu overflow-hidden blur-3xl xl:ml-24 2xl:ml-48">
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-l from-[#CAE6FF] to-[#54A7ED] opacity-30"
          style={{
            clipPath:
              'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-8xl md:pb-48 pt-10  lg:px-8">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 md:flex flex-col xl:flex-row lg:max-w-none lg:items-center justify-center 2xl:justify-between">
          {/* Left Content Section */}
          <div className="w-full md:max-w-3xl xl:max-w-lg items-start lg:shrink-0 2xl:max-w-2xl ">
            <h1 className="md:text-7xl text-4xl leading-[1.3] tracking-tight font-bold text-[#2480F0]">
              {t('title')}
            </h1>
            <p className="mt-1 md:mt-3 md:text-2xl text-xl leading-8 tracking-normal text-transparent bg-clip-text bg-gradient-to-b from-black to-gray-700 font-semibold">
              {t('subTitle')}
            </p>

            <p className="mt-7 md:text-lg leading-7 md:leading-8  text-gray-600">
              {t('shortDescription')}
            </p>

            <p className="mt-6  md:text-lg leading-7 md:leading-8 text-gray-600">
              {t('longDescription')}
            </p>

            {/* event actions {Date, Location} */}
            <div className="flex flex-col xl:flex-row text-black font-medium my-7 gap-3">
              <div className="flex">
                <CalendarDaysIcon className="h-6 w-6 text-gray-500 mr-2" />
                <p className="text-gray-700">{t('date')}</p>
              </div>

              <div className="flex">
                <MapPinIcon className="h-6 w-6 text-gray-500 mr-2" />
                <p className="text-gray-700 underline">
                  <Link href={t('locationLink')}>{t('location')}</Link>
                </p>
              </div>
            </div>

            {/*
            <PillButton
            className="my-6 flex"
            href={t('buttonLink')}
            label={t('buttonText')}
            >
            */}
          </div>

          {/* Right Image Grid Section */}
          <div className="mt-14 flex lg:justify-end gap-5 md:gap-8 sm:-mt-28 justify-center lg:mt-0 lg:pl-0">
            {/* First Column */}
            <div className=" md:flex  ml-auto w-48  space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
              <div className="relative">
                <Image
                  src={col1img1}
                  alt="Women Techmakers Montreal 2024 discussion"
                  width={300}
                  height={500}
                  placeholder="blur"
                  loading="lazy"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-xl"
                />
              </div>
            </div>

            {/* Second Column */}
            <div className="mr-auto w-48 space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div className="relative">
                <Image
                  src={col2img1}
                  alt="Women Techmakers Montreal 2024 panel"
                  width={300}
                  height={500}
                  placeholder="blur"
                  loading="lazy"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-xl"
                />
              </div>
              <div className="relative">
                <Image
                  src={col2img2}
                  alt="Women Techmakers Montreal 2024 panel"
                  width={300}
                  height={500}
                  placeholder="blur"
                  loading="lazy"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-xl"
                />
              </div>
            </div>

            {/* Third Column */}
            <div className="w-48  space-y-8 pt-32 sm:pt-0">
              <div className="relative">
                <Image
                  src={col3img1}
                  alt="Women Techmakers Montreal 2024 celebration"
                  width={400}
                  height={500}
                  placeholder="blur"
                  loading="lazy"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-xl"
                />
              </div>
              <div className="relative">
                <Image
                  src={col3img2}
                  alt="Women Techmakers Montreal 2024 celebration"
                  width={300}
                  height={500}
                  placeholder="blur"
                  loading="lazy"
                  className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventHeader;
