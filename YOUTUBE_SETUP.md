# YouTube Integration Setup

The media page automatically fetches the latest videos from the WTM Montreal YouTube channel. Here's how to configure it:

## Option 1: YouTube Data API v3 (Recommended)

### Setup Instructions

1. **Get a YouTube API Key:**
   - Go to [Google Cloud Console](https://console.developers.google.com/)
   - Create a new project or select existing one
   - Enable "YouTube Data API v3"
   - Create credentials (API Key)
   - Restrict the key to YouTube Data API v3 (optional but recommended)

2. **Add API Key to Environment:**
   ```bash
   cp .env.example .env.local
   ```
   Edit `.env.local` and add your API key:
   ```
   YOUTUBE_API_KEY=your_actual_api_key_here
   ```

3. **Benefits:**
   - Real-time video data
   - Video titles, descriptions, thumbnails
   - Publish dates
   - Reliable and fast

### API Limits
- 10,000 units/day (free tier)
- Each video search costs ~100 units
- Page caches results for 1 hour

## Option 2: RSS Feed (Fallback)

If no API key is provided, the system automatically uses YouTube's RSS feed:
- No API key required
- Basic video information
- Less reliable than API
- May have parsing limitations

## Option 3: Manual Fallback

If both methods fail, the system displays placeholder videos. To customize these:

Edit `/src/lib/youtube.js` and update the `FALLBACK_VIDEOS` array with actual video IDs from your channel:

```javascript
const FALLBACK_VIDEOS = [
  'YOUR_VIDEO_ID_1', // Replace with actual video ID
  'YOUR_VIDEO_ID_2', // Replace with actual video ID
  'YOUR_VIDEO_ID_3', // Replace with actual video ID
  'YOUR_VIDEO_ID_4'  // Replace with actual video ID
];
```

## How It Works

1. **Primary**: Try YouTube Data API v3 (if key available)
2. **Secondary**: Fall back to RSS feed parsing
3. **Tertiary**: Use manually configured fallback videos
4. **Caching**: Results cached for 1 hour for performance
5. **Error Handling**: Graceful degradation at each level

## Testing

To test the integration:

1. **With API Key**: Videos should load with full metadata
2. **Without API Key**: Should fall back to RSS feed
3. **No Internet**: Should show fallback videos
4. **Check Console**: Error messages help debug issues

## Excluding Videos

The system automatically filters out podcast-related content to prevent duplication between the Spotify podcast section and YouTube videos section.

### Automatic Filtering
- Videos with titles containing "podcast", "interview" combined with "WTM" or "Montreal"  
- Videos explicitly marked as podcast episodes
- Audio-only interview content

### Manual Exclusions
To exclude specific video IDs, edit `/src/lib/youtube.js`:

```javascript
const EXCLUDED_VIDEO_IDS = [
  'VIDEO_ID_TO_EXCLUDE_1',
  'VIDEO_ID_TO_EXCLUDE_2',
  // Add more video IDs as needed
];
```

## Updating Channel

To change the YouTube channel, edit the `YOUTUBE_CHANNEL_ID` in `/src/lib/youtube.js`:

```javascript
const YOUTUBE_CHANNEL_ID = 'YOUR_CHANNEL_ID_HERE';
```

The current channel ID `UCoFthyfjoNbD-yclJ8ZqdjA` corresponds to `@wtmmontreal`.