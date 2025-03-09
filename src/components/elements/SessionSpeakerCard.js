'use client';

import Image from 'next/image';

export default function SessionSpeakerCard({ speaker }) {
  return (
    <div className="flex items-center">
      {/* Speaker Avatar */}
      <div className="w-10 h-10 rounded overflow-hidden mr-3">
        {speaker.image ? (
          <Image
            src={speaker.image}
            alt={speaker.name}
            width={25}
            height={25}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 font-bold">?</span>
            {/* Fallback if no image */}
          </div>
        )}
      </div>
      {/* Speaker Details */}
      <div>
        <p className="font-semibold text-gray-900">{speaker.name}</p>
        <p className="text-gray-500 text-xs">{speaker.title}</p>
      </div>
    </div>
  );
}
