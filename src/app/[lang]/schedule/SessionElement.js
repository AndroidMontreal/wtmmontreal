// components/SessionElement.jsx
import React from 'react';

export default function SessionElement({ session, dayName }) {
  // Function to determine background color based on track
  const getBackgroundColor = (trackName) => {
    const colorMap = {
      'Main Stage': 'bg-blue-50 border-blue-200',
      'Track 1': 'bg-green-50 border-green-200',
      'Workshop 1': 'bg-yellow-50 border-yellow-200',
      'Workshop 2': 'bg-pink-50 border-pink-200',
    };

    return colorMap[trackName] || 'bg-white border-gray-200';
  };

  // Function to determine badge color based on complexity
  const getComplexityColor = (complexity) => {
    const colorMap = {
      Beginner: 'bg-green-100 text-green-800',
      Intermediate: 'bg-blue-100 text-blue-800',
      Advanced: 'bg-purple-100 text-purple-800',
    };

    return colorMap[complexity] || 'bg-gray-100 text-gray-800';
  };

  const trackName = session.track?.name || '';
  const backgroundColor = getBackgroundColor(trackName);
  const complexityColor = getComplexityColor(session.complexity);

  return (
    <div
      className={`p-3 ${backgroundColor} border rounded-lg shadow-sm hover:shadow transition-shadow h-full flex flex-col`}
    >
      <h3 className="font-medium text-sm sm:text-base">{session.title}</h3>

      <div className="mt-auto pt-2 flex flex-wrap items-center justify-between text-xs sm:text-sm gap-1">
        {session.complexity && (
          <span
            className={`px-2 py-0.5 rounded-full text-xs ${complexityColor}`}
          >
            {session.complexity}
          </span>
        )}

        {session.duration && (
          <span className="px-2 py-0.5 bg-gray-100 text-gray-800 rounded-full text-xs">
            {session.duration}
          </span>
        )}
      </div>
    </div>
  );
}
