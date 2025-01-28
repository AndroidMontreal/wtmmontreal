export async function generatePageMetadata(lang) {
  const metadata = (await import(`@/locales/${lang}/metadata.json`)).default;
  return {
    metadataBase: new URL('http://wtmmontreal.com'),
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      images: ['/images/logo/eventHeader.gif'],
    },
  };
}
