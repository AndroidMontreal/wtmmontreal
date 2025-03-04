import Image from 'next/image';
import Link from 'next/link';

const SpeakerCard = ({ speaker }) => {
  return (
    <Link
      href={speaker.slug}
      rel="noopener noreferrer"
      target="_self" // Open 2023 links in new tab
      className="group flex"
    >
      <div className="flex flex-col">
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
          {/* Fixed aspect ratio container */}
          <Image
            src={speaker.image}
            alt={`${speaker.name}'s avatar`}
            height={400}
            width={400}
            className="rounded-2xl aspect-square object-cover w-fit group-hover:scale-105 transition"
          />
        </div>

        <div className="w-full py-3 text-start ">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 py-1 group-hover:text-gray-500 tracking-tight">
            {speaker.name}
          </h3>
          <p className="text-xs md:text-base text-gray-600 group-hover:text-gray-500">
            {speaker.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SpeakerCard;
