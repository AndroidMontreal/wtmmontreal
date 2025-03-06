'use client';

import { useState } from 'react';
import EventSchedule from '@/components/sections/EventSchedule';
import TitleWithSubtitle from '@/components/elements/TitleWithSubtitle';
import { useTranslations } from 'next-intl';

export default function SchedulePage() {
  const t = useTranslations('schedule');
  const [selectedType, setSelectedType] = useState('talk');

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };
  // Get available types from scheduleData
  const types = t.raw('types');
  return (
    <div
      id="schedule"
      className="flex flex-col gap-6 items-center justify-center my-24"
    >
      <TitleWithSubtitle
        title={t('title')}
        subTitle={t('description')}
        titleClassName="max-w-2xl"
        subTitleClassName="max-w-xl"
      />
      {/* Filter Chips */}
      <div className="mb-6 flex gap-4">
        {types.map((typeObj) => (
          <button
            key={typeObj.type}
            onClick={() => handleTypeChange(typeObj.type)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              selectedType === typeObj.type
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {typeObj.name}
          </button>
        ))}
      </div>

      {/* Render the selected schedule */}
      <div key={selectedType} className="w-full">
        <EventSchedule type={selectedType} eventTypesData={types} />
      </div>
    </div>
  );
}
