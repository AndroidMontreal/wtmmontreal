import { setRequestLocale } from 'next-intl/server';
import { getLatestYouTubeVideos, getLatestYouTubeVideosRSS } from '@/lib/youtube';
import YouTubeVideoGrid from '@/components/elements/YouTubeVideoGrid';

export default async function MediaPage({ params: { lang } }) {
  setRequestLocale(lang);

  // Fetch the latest YouTube videos dynamically
  let youtubeVideos;
  
  try {
    // Try API first, fallback to RSS if API key is not available
    youtubeVideos = await getLatestYouTubeVideos(4);
    
    // If API didn't return videos or returned fallback, try RSS method
    if (youtubeVideos.length === 0 || youtubeVideos[0]?.videoId === 'dQw4w9WgXcQ') {
      const rssVideos = await getLatestYouTubeVideosRSS(4);
      if (rssVideos && rssVideos.length > 0) {
        youtubeVideos = rssVideos;
      }
    }
  } catch (error) {
    console.error('Error loading YouTube videos:', error);
    // Fallback videos will be used from the utility function
    youtubeVideos = await getLatestYouTubeVideos(4);
  }

  // Ensure we always have an array
  if (!youtubeVideos) {
    youtubeVideos = [];
  }

  return (
    <div className="py-8 space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {lang === 'fr' ? 'Médias WTM Montréal' : 'WTM Montreal Media'}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {lang === 'fr' 
            ? 'Découvrez notre podcast et nos vidéos présentant des histoires inspirantes de femmes en technologie.' 
            : 'Explore our podcast and videos featuring inspiring stories from women in technology.'}
        </p>
      </div>

      {/* Spotify Podcast Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {lang === 'fr' ? 'Podcast' : 'Podcast'}
        </h2>
        <div className="flex justify-center px-4">
          <iframe 
            data-testid="embed-iframe"
            style={{borderRadius: '12px'}} 
            src="https://open.spotify.com/embed/show/30lv57o8Hgz5VOvaX4C1gW/video?utm_source=generator" 
            width="624" 
            height="351" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            className="max-w-full"
          ></iframe>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          {lang === 'fr' ? 'Vidéos Récentes' : 'Recent Videos'}
        </h2>
        <YouTubeVideoGrid videos={youtubeVideos} lang={lang} />
        <div className="text-center mt-8">
          <a
            href="https://www.youtube.com/@wtmmontreal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
          >
            {lang === 'fr' ? 'Voir plus sur YouTube' : 'View More on YouTube'}
            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}