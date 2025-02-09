'use client'; // This component will need client-side interactions for the Swiper

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { v4 as uuidv4 } from 'uuid';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Venue = () => {
  const t = useTranslations('venue');

  const venueImagesWithUUIDs =
    t.raw('images') &&
    t.raw('images').map((imagePath) => ({
      imagePath: imagePath,
      uuid: uuidv4(),
    }));

  return (
    <section id="venue" className="container mx-auto py-12">
      <TitleWithSubtitle
        title={t('title')}
        subTitle={t('description')}
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-xl"
      />

      <div className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative h-full rounded-lg overflow-hidden">
          <div className="aspect-video h-full">
            <iframe
              src={t('embededMapLink')}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('title')}
            ></iframe>
          </div>
          <div className="absolute bottom-2 left-2 bg-white p-2 rounded-md shadow-md">
            <Link
              href={t('href')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('name')}
            >
              <Image
                src={t('logo')}
                alt={t('name')}
                width={250}
                height={50}
                className="w-[120px] sm:w-[150px] md:w-[180px] h-auto"
              />
            </Link>
          </div>
        </div>
        {/* Right Column (Swiper Slider) */}
        <div className="h-[400px] lg:h-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]} // Add Swiper modules
            spaceBetween={50}
            navigation
            pagination={{ type: 'bullets', clickable: true }}
            slidesPerView={1} // Show one slide at a time
            autoplay={{ delay: 6000 }} // Autoplay with 3-second delay
            loop={true}
            className="h-full"
          >
            {venueImagesWithUUIDs.map((image, index) => (
              <SwiperSlide
                key={image.uuid}
                className="w-full h-[400px] lg:h-full relative"
              >
                <Image
                  src={image.imagePath}
                  alt={`Venue Image ${index + 1}`}
                  fill
                  className="rounded-lg object-cover" // Added object-cover here
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Navigation arrows */}
        </div>
      </div>
    </section>
  );
};

export default Venue;
