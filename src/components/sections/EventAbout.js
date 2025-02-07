'use client';
import Image from 'next/image';
import eventAbout from '@/public/images/about/wtm_2025_redefine_possible.gif';
import { useTranslations } from 'next-intl';
import formatText from '@/lib/formatText';

const EventAbout = () => {
  const t = useTranslations('about');

  return (
    <section className="relative py-1 overflow-hidden">
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

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-6">
          {/* Left Image Section */}
          <div className="w-full xl:w-3/5 ">
            <Image
              src={eventAbout}
              alt="Redefine possible women techmakers montreal 2025"
              className="object-cover"
              loading="lazy"
              placeholder="empty"
            />
          </div>

          {/* Right Content Section */}
          <div className="w-full xl:w-2/5 space-y-6">
            <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-[#0F7C67] leading-[1.3] 2xl:leading-[1.2] tracking-tight">
              {t('title')}
            </h2>

            <p className="mt-7 md:text-lg leading-7 md:leading-8  text-gray-600">
              {formatText(t('shortDescription'))}
            </p>
            <p className="mt-7 md:text-lg leading-7 md:leading-8  text-gray-600">
              {formatText(t('longDescription'))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventAbout;
