import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

const PartnerCard = ({ partners }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className=" -mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 md:grid-cols-3">
        {partners.map((organizer) => (
          <a
            key={organizer.uuid} // Add a unique key for each organizer
            href={organizer.website}
            className="flex items-center justify-center  p-8 sm:p-10"
          >
            <Image
              className="max-h-52 w-auto object-contain hover:opacity-80 transition-opacity hover:grayscale grayscale-0"
              src={organizer.logo}
              alt={organizer.company}
              width={200}
              height={48}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PartnerCard;
