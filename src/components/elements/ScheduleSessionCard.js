// Session component
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarPlus, FaRegIdBadge } from 'react-icons/fa';
import { MdOutlineFastfood } from 'react-icons/md';
import { useTranslations } from 'next-intl';
import { PiCoffee } from 'react-icons/pi';
import { TbNotes } from 'react-icons/tb';

function generateGoogleCalendarLink(event) {
  const startTime = event.start.toISOString().replace(/-|:|\.\d+/g, '');
  const endTime = event.end.toISOString().replace(/-|:|\.\d+/g, '');

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startTime}/${endTime}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
}

function timeToMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

// Function to calculate weight of each session relative to the track
function calculateSessionWeights(timeSlot, session) {
  const timeSlotStartTime = timeToMinutes(timeSlot.startTime);
  const timeSlotEndTime = timeToMinutes(timeSlot.endTime);

  const totalTimeSlotDuration = timeSlotEndTime - timeSlotStartTime; // Track duration in minutes
  // Calculate the weight for the session
  return (session.duration / totalTimeSlotDuration) * 100;
}

export const ScheduleSessionCard = ({
  timeSlot,
  session,
  sessionIndex,
  room,
}) => {
  const sessionT = useTranslations('session');
  const speakersT = useTranslations('speaker');

  const sessionDetails = sessionT
    .raw('sessions')
    .find((s) => s.uuid === session.sessionUUID);

  const speakers = sessionDetails?.speakerUUID?.map((speakerId) =>
    speakersT.raw('speakers').find((speaker) => speaker.uuid === speakerId)
  );

  const sessionClassName = timeSlot.commonAllRooms
    ? 'col-start-2 col-end-[-1]'
    : 'basis-0';

  const speakersClass = timeSlot.commonAllRooms
    ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
    : 'grid grid-cols-1 gap-4 mt-4';

  const speakerClass = timeSlot.commonAllRooms
    ? 'flex items-center gap-4 '
    : 'flex flex-col';

  const sessionHeightClassName = calculateSessionWeights(timeSlot, session);

  return (
    <div
      key={sessionIndex}
      className={`p-5 relative flex flex-col justify-start border border-[#e2e2e2] hover:bg-[#f7f7f7]  rounded-lg text-left ${sessionClassName}`}
      style={{ flexGrow: sessionHeightClassName }}
    >
      <div className="flex flex-col justify-between items-start">
        {/* Add a flex container */}
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col mb-4">
            {session.startTime && (
              <h7 className="mb-1 tracking-normal text-gray-600">
                {session?.startTime + ' - ' + session?.endTime}
              </h7>
            )}
            <div className="flex items-center  text-xs font-medium text-gray-600">
              {room?.name}
            </div>
          </div>
          <div>
            {!timeSlot.icon && session.startTime && (
              <FaCalendarPlus
                className="w-6 h-6 text-[#424242] hover:cursor-pointer"
                onClick={() => {
                  const link = generateGoogleCalendarLink({
                    title: `${room?.name}: ${sessionDetails?.title}`,
                    start: new Date(`2025-04-05T${session.startTime}`),
                    end: new Date(`2025-04-05T${session.endTime}`),
                    description: sessionDetails?.description,
                    location: room?.name,
                  });
                  window.open(link, '_blank');
                }}
              />
            )}
          </div>
        </div>
        <h5 className="text-md mb-2 tracking-normal leading-normal text-gray-800 pt-3 font-semibold">
          {sessionDetails?.title || 'Session Title'}
        </h5>
        <div className="text-xs leading-normal line-clamp-4 text-gray-700">
          {sessionDetails?.shortDescription || sessionDetails?.description}
        </div>
        {/* Add the icon */}
        {sessionDetails?.tags?.length > 0 && (
          <div className="flex flex-wrap pt-3">
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
      </div>

      {timeSlot.icon ? (
        <div className="-bottom-4 right-8 absolute">
          {timeSlot.icon === 'FaRegIdBadge' && (
            <FaRegIdBadge className="w-28 h-28 text-[#e2e2e2] opacity-40" />
          )}
          {timeSlot.icon === 'TbNotes' && (
            <TbNotes className="w-28 h-28 text-[#e2e2e2] opacity-40" />
          )}
          {timeSlot.icon === 'MdOutlineFastfood' && (
            <MdOutlineFastfood className="w-28 h-28 text-[#e2e2e2] opacity-40" />
          )}
          {timeSlot.icon === 'PiCoffee' && (
            <PiCoffee className="w-28 h-28 text-[#e2e2e2] opacity-40" />
          )}
        </div>
      ) : (
        ''
      )}
      {speakers?.length > 0 && (
        <div className={`group ${speakersClass} mt-8`}>
          {speakers?.map((speaker, speakerIndex) => (
            <div className={`${speakerClass}`} key={speakerIndex}>
              <Link href={`../speakers/${speaker.slug}`}>
                <div className="flex items-center">
                  <Image
                    src={speaker?.image || '/default-speaker-image.jpg'}
                    alt={speaker?.name || 'Speaker Name'}
                    className="single w-14 h-14 rounded-md mr-2 shadow aspect-square object-cover"
                    width={52}
                    height={52}
                  />
                  <div className="flex-1">
                    <p className="text-md opacity-70">
                      {speaker?.name || 'Speaker Name'}
                    </p>
                    <p className="text-xs opacity-70">
                      {speaker?.title || 'Speaker Company'}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          {
            //   sessionDetails.tags && (
            //   <div className="flex">
            //     {sessionDetails.tags.map((tag, tagIndex) => (
            //       <Link
            //         key={tagIndex}
            //         href={`/schedule?tags=${tag.toLocaleLowerCase()}`}
            //       >
            //         <div
            //           key={tagIndex}
            //           className="bg-[#f1f1f1] text-[#424242] text-xs px-2 py-1 rounded-md mr-2"
            //         >
            //           {tag}
            //         </div>
            //       </Link>
            //     ))
            //   }
            //   </div>
            // )
          }
        </div>
      )}
    </div>
  );
};
