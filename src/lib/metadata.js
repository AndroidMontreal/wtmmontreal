export async function getPageMetadata(lang, pageKey) {
  const metadata = (await import(`@/locales/${lang}/metadata.json`)).default;

  // Get the site-wide metadata (for fallback)
  const siteMetadata = metadata.site;

  // Get the page-specific metadata
  const pageMetadata = metadata[pageKey] || {}; // Use empty object if not found

  return {
    metadataBase: new URL('https://wtmmontreal.com'), // USE HTTPS!
    title: pageMetadata.title || siteMetadata.title, // Page title, fallback to site title
    description: pageMetadata.description || siteMetadata.description, // Page description, fallback
    openGraph: {
      title: pageMetadata.title || siteMetadata.title,
      description: pageMetadata.description || siteMetadata.description,
      images: [pageMetadata.og_image || siteMetadata.og_image], // Page image, fallback
      locale: lang,
      type: 'website', // You might want to make this dynamic too
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMetadata.title || siteMetadata.title,
      description: pageMetadata.description || siteMetadata.description,
      images: [pageMetadata.og_image || siteMetadata.og_image],
    },
  };
}
