import Image from 'next/image';
import Link from 'next/link';

const TeamMemberCard = ({ member }) => {
  return (
    <Link
      href={member.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex hover:text-red-700"
    >
      <div className="flex flex-col">
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          {/* Fixed aspect ratio container */}
          <Image
            src={member.image}
            alt={`${member.name}'s avatar`}
            height={500}
            loading="lazy"
            width={500}
            className="rounded-2xl aspect-square object-cover shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="w-full py-3 text-start ">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 py-1 group-hover:text-gray-500 tracking-tight">
            {member.name}
          </h3>
          <p className="text-xs md:text-base text-gray-600 group-hover:text-gray-500">
            {member.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TeamMemberCard;
