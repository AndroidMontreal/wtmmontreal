'use client';

export default function NonSessionCard({ session }) {
  return (
    <div className="bg-gray-100 px-5 py-8 rounded-lg">
      <h3 className="text-xl font-bold mb-2 text-gray-900">{session?.title}</h3>
      <p className="text-gray-600 text-sm mb-3">{session?.description}</p>
    </div>
  );
}
