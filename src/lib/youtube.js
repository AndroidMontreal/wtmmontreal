const YOUTUBE_CHANNEL_ID = 'UCoFthyfjoNbD-yclJ8ZqdjA';
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

// Fallback video IDs in case API fails or is not configured
const FALLBACK_VIDEOS = [
  'z61XZZEWaBA', // Replace with actual video IDs from the channel
  'OvQZXn1f0_8', // Replace with actual video IDs from the channel
  '4B28-hLqbcg', // Replace with actual video IDs from the channel
  '7gYMCdJ8qlc'  // Replace with actual video IDs from the channel
];

// Helper function to create consistent video object structure
function createVideoObject(videoId, title = null, description = '', publishedAt = null, thumbnail = null, index = 0) {
  const defaultTitle = `WTM Montreal Video ${index + 1}`;
  // Use a fixed date to prevent hydration mismatches
  const defaultDate = '2024-01-01T00:00:00.000Z';

  return {
    videoId: videoId || 'z61XZZEWaBA',
    title: title || defaultTitle,
    description: description || 'Women Techmakers Montreal video content',
    publishedAt: publishedAt || defaultDate,
    thumbnail: thumbnail || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  };
}

/**
 * Fetches the latest videos from WTM Montreal YouTube channel
 * Uses YouTube Data API v3 if API key is available, otherwise returns fallback videos
 */
export async function getLatestYouTubeVideos(maxResults = 4) {
  try {
    if (!YOUTUBE_API_KEY) {
      console.log('YouTube API key not found, using fallback videos');
      return FALLBACK_VIDEOS.slice(0, maxResults).map((videoId, index) =>
        createVideoObject(videoId, null, '', null, null, index)
      );
    }

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${YOUTUBE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`,
      {
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      throw new Error('No videos found');
    }

    return data.items.map((item, index) =>
      createVideoObject(
        item.id.videoId,
        item.snippet.title,
        item.snippet.description,
        item.snippet.publishedAt,
        item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
        index
      )
    );

  } catch (error) {
    console.error('Error fetching YouTube videos:', error);

    // Return fallback videos on error
    return FALLBACK_VIDEOS.slice(0, maxResults).map((videoId, index) =>
      createVideoObject(videoId, null, '', null, null, index)
    );
  }
}

/**
 * Alternative method using RSS feed (no API key required)
 * Less reliable but doesn't require API key
 */
export async function getLatestYouTubeVideosRSS(maxResults = 4) {
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`;

    const response = await fetch(rssUrl, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`RSS fetch error: ${response.status}`);
    }

    const xmlText = await response.text();

    // Parse XML to extract video information
    const videoMatches = xmlText.match(/<entry>[\s\S]*?<\/entry>/g);

    if (!videoMatches) {
      throw new Error('No videos found in RSS feed');
    }

    const videos = videoMatches.slice(0, maxResults).map((entry, index) => {
      const videoIdMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
      const titleMatch = entry.match(/<title>(.*?)<\/title>/);
      const publishedMatch = entry.match(/<published>(.*?)<\/published>/);

      const videoId = videoIdMatch ? videoIdMatch[1] : FALLBACK_VIDEOS[index] || 'dQw4w9WgXcQ';
      const title = titleMatch ? titleMatch[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&') : null;
      const publishedAt = publishedMatch ? publishedMatch[1] : null;

      return createVideoObject(videoId, title, '', publishedAt, null, index);
    });

    return videos;

  } catch (error) {
    console.error('Error fetching YouTube videos:', error);

    // Return fallback videos on error
    return FALLBACK_VIDEOS.slice(0, maxResults).map((videoId, index) =>
      createVideoObject(videoId, null, '', null, null, index)
    );
  }
}
