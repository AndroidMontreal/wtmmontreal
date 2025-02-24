// utils/loadSpeakers.js
import fs from 'fs';
import path from 'path';

export function loadSpeakers(locale) {
  const filePath = path.join(process.cwd(), 'locale', locale, 'speakers.json');
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent).speakers;
}

export function getAllSpeakerSlugs() {
  // We can use any locale to get slugs since they're consistent across languages
  const speakers = loadSpeakers('en');
  return speakers.map((speaker) => speaker.slug);
}

export function getSpeakerData(slug, locale) {
  const speakers = loadSpeakers(locale);
  return speakers.find((speaker) => speaker.slug === slug);
}
