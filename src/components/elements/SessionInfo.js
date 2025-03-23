'use client';
import { useTranslations } from 'next-intl';

export const SessionInfo = ({ session, index }) => {
  // Get schedule data from translations
  const s = useTranslations('schedule');
  const timeSlots = Array.isArray(s.raw('timeSlots')) ? s.raw('timeSlots') : [];
  const rooms = Array.isArray(s.raw('rooms')) ? s.raw('rooms') : [];

  const timeSlot = timeSlots.find((ts) =>
    ts.tracks.find((tracks) =>
      tracks.sessions.some((s) => s.sessionUUID === session.uuid)
    )
  );

  const room = rooms.find(
    (r) =>
      r.uuid ===
      timeSlot?.tracks.find((track) =>
        track.sessions.some((s) => s.sessionUUID === session.uuid)
      ).roomUUID
  );
  /*Temporary comment*/
  // If no timeSlot is found, return null or an error message
  if (!timeSlot) {
    return null;
  }

  const formattedStartTime = new Date(
    `2025-04-05 ${timeSlot.startTime}`
  ).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const formattedEndTime = new Date(
    `2025-04-05 ${timeSlot.endTime}`
  ).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <div key={session.uuid} id="sessionDetails" className="prose">
      <h3 className="text-[min(7vw,25px)] leading-[1.3] tracking-tight font-semibold text-[#2480F0] mt-6 mb-0">
        {session.title}
      </h3>
      <div className="flex mb-6">
        {/*Temporary comment*/}
        <p className="text-gray-600 mt-2 text-sm font-semibold ">
          {room?.name} ({formattedStartTime} ~ {formattedEndTime})
        </p>
      </div>
      <div className="prose lg:prose-base">
        {session.description.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
