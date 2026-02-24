// app/sitemap.js
export default async function sitemap() {
  const baseUrl = 'https://androidmontreal.github.io/wtmmontreal/'; // Use your actual domain

  // Import speaker data from JSON files
  const enSpeakersData = require('@/locales/en/speaker.json'); // Adjust the path as needed
  const frSpeakersData = require('@/locales/fr/speaker.json'); // Adjust the path as needed

  // Access the speakers array
  const enSpeakers = enSpeakersData.speakers;
  const frSpeakers = frSpeakersData.speakers;

  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en/code-of-conduct`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fr/code-of-conduct`, // Fixed typo
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/team`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/fr/team`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/speakers`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/fr/speakers`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ];

  // Generate dynamic routes for English speakers
  const enSpeakerRoutes = enSpeakers.map((speaker) => ({
    url: `${baseUrl}/en/speakers/${speaker.slug}`, // Use the `slug` field
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Generate dynamic routes for French speakers
  const frSpeakerRoutes = frSpeakers.map((speaker) => ({
    url: `${baseUrl}/fr/speakers/${speaker.slug}`, // Use the `slug` field
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Combine static and dynamic routes
  return [...staticRoutes, ...enSpeakerRoutes, ...frSpeakerRoutes];
}

// Required for `output: export`
export function generateStaticParams() {
  return [{ __metadata_id__: ['sitemap.xml'] }];
}
