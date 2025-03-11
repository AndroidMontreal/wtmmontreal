// Session component
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ScheduleSessionCard } from '@/components/elements/ScheduleSessionCard';

export const TrackTimeSlotSection = ({ timeSlot, track, sessionIndex }) => {
  const scheduleData = useTranslations('schedule');
  const room = scheduleData.raw('rooms').find((r) => r.uuid === track.roomUUID);

  const sessionClassName = timeSlot.commonAllRooms
    ? 'col-start-2 col-end-[-1]'
    : '';

  return (
    <div
      className={`h-full flex flex-col gap-2 overflow-hidden   text-left ${sessionClassName}`}
    >
      {track.sessions.map((session, sessionIndex) => (
        <ScheduleSessionCard
          key={sessionIndex}
          timeSlot={timeSlot}
          session={session}
          sessionIndex={sessionIndex}
          room={room}
        />
      ))}
    </div>
  );
};
