// Session component
import { scheduleData } from '@/data/scheduleData';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarPlus, FaRegIdBadge } from 'react-icons/fa';
import { MdOutlineFastfood } from 'react-icons/md';
import { PiCoffee } from 'react-icons/pi';
import { TbNotes } from 'react-icons/tb';
import { useTranslations } from 'next-intl';
import { ScheduleSessionCard } from '@/components/elements/ScheduleSessionCard';


function generateGoogleCalendarLink(event) {
  const startTime = event.start.toISOString().replace(/-|:|\.\d+/g, '');
  const endTime = event.end.toISOString().replace(/-|:|\.\d+/g, '');

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startTime}/${endTime}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
}

export const TrackTimeSlotSection = ({ timeSlot, track, sessionIndex }) => {
  const scheduleData = useTranslations('schedule');
  const room = scheduleData.raw("rooms").find((r) => r.uuid === track.roomUUID);

  const sessionClassName = timeSlot.commonAllRooms
    ? 'col-start-2 col-end-[-1]'
    : '';

  return (
    <div className={`relative h-full flex flex-col overflow-hidden justify-between text-left ${sessionClassName}`}>

        {track.sessions.map((session, sessionIndex) => (
          <ScheduleSessionCard
            key={sessionIndex}
            timeSlot={timeSlot}
            session={session}
            sessionIndex={sessionIndex}
            room = {room}
          />
        ))}
    </div>
  );
};
