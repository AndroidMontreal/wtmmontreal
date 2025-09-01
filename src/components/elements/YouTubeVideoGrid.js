export default function YouTubeVideoGrid({ videos, lang }) {
  if (!videos || videos.length === 0) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <div className="text-gray-500">
              {lang === 'fr' ? 'Chargement...' : 'Loading...'}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
      {videos.map((video, index) => (
        <div key={video.videoId || index} className="group">
          <div className="aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}`}
              title={video.title || (lang === 'fr' ? `Vidéo WTM Montréal ${index + 1}` : `WTM Montreal Video ${index + 1}`)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-md transition-transform group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          {video.title && video.title !== `WTM Montreal Video ${index + 1}` && (
            <div className="mt-3 px-1">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-gray-700 transition-colors">
                {video.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(video.publishedAt).toLocaleDateString(lang === 'fr' ? 'fr-CA' : 'en-CA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}