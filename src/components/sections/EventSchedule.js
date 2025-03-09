'use client';
import SessionInfoCard from '@/components/elements/SessionInfoCard';
import { useMemo } from 'react';

export default function EventSchedule({ type, eventTypesData }) {
  // Filter the schedule data by the specified type
  const filteredType = useMemo(() => {
    return eventTypesData.find((item) => item.type === type);
  }, [eventTypesData, type]);
  if (!filteredType) {
    return (
      <div className="text-black">
        No schedule data found for the selected type.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 p-4 md:p-8">
      <div className="container mx-auto">
        {/*<h2 className="text-2xl font-bold mb-6 text-blue-600">*/}
        {/*  {filteredType.name}*/}
        {/*</h2>*/}
        {/* Grid for rooms side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-16 xl:gap-32">
          {filteredType.rooms.map((room) => (
            <div key={room.uuid} className="p-6 ">
              <h2 className="text-4xl font-bold mb-14">{room.name}</h2>
              {room.sessions.map((session) => (
                <div key={session.sessionUUID} className="flex gap-5">
                  {/* Time */}
                  <p className="w-24 text-sm text-gray-500 text-right">
                    {session.time}
                  </p>
                  {/* Vertical Line */}
                  <div className="w-px bg-gray-300"></div>
                  {/* Session Details Component */}
                  <SessionInfoCard session={session} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
