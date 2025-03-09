'use client';

import NonSessionCard from '@/components/elements/NonSessionCard';
import SessionSpeakerCard from '@/components/elements/SessionSpeakerCard';
import { useTranslations } from 'next-intl';
import { Fragment } from 'react';

export default function SessionInfoCard({ session }) {
  // Fetch session data from locales/en/sessions
  const sessionTranslations = useTranslations('session');
  const sessions = sessionTranslations.raw('sessions') || [];

  // Fetch speaker data from locales/en/speakers
  const speakerTranslations = useTranslations('speaker');
  const speakers = speakerTranslations.raw('speakers') || [];

  // Find session details using sessionUUID
  const sessionDetails = sessions.find((s) => s.uuid === session.sessionUUID);
  return (
    <div className="flex-1 mb-20  rounded-lg ">
      {session.isSession && sessionDetails ? (
        <Fragment>
          <h3 className="text-xl font-bold mb-2 text-gray-900">
            {sessionDetails.title}
          </h3>
          <p className="text-gray-400 text-xs leading-normal line-clamp-2">
            {sessionDetails.shortDescription}
          </p>
          {sessionDetails?.tags?.length > 0 && (
            <div className="flex flex-wrap pt-2">
              {sessionDetails.tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="bg-[#f1f1f1] text-[#424242] text-xs px-2 py-1 rounded-md mr-2 mb-2"
                >
                  #{tag}
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-wrap gap-4 mt-4">
            {sessionDetails.speakerUUID.map((speakerId) => {
              const speaker = speakers.find((sp) => sp.uuid === speakerId);
              return speaker ? (
                <div key={speakerId} className="w-full xl:w-[calc(50%-8px)]">
                  <SessionSpeakerCard speaker={speaker} />
                </div>
              ) : null;
            })}
          </div>
        </Fragment>
      ) : (
        <NonSessionCard session={sessionDetails || {}} />
      )}
    </div>
  );
}
