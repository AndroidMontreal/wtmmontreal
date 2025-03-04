export async function getPageMetadata(lang, pageKey, slug = null) {
  const metadata = (await import(`@/locales/${lang}/metadata.json`)).default;

  // Get the site-wide metadata (for fallback)
  const siteMetadata = metadata.site;

  // Get the page-specific metadata
  const pageMetadata = metadata[pageKey] || {};

  // Base URL
  const baseUrl = 'https://wtmmontreal.com';

  // Construct the page path
  let pagePath = pageKey === 'home' ? '' : `/${pageKey}`;
  if (slug && pageKey === 'speakers') {
    pagePath = `/speakers/${slug}`; // Handle dynamic speaker pages
  }
  const currentUrl = `${baseUrl}/${lang}${pagePath}`;

  return {
    metadataBase: new URL(baseUrl),
    title: pageMetadata.title || siteMetadata.title,
    description: pageMetadata.description || siteMetadata.description,
    openGraph: {
      title: pageMetadata.title || siteMetadata.title,
      description: pageMetadata.description || siteMetadata.description,
      images: [pageMetadata.og_image || siteMetadata.og_image],
      locale: lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMetadata.title || siteMetadata.title,
      description: pageMetadata.description || siteMetadata.description,
      images: [pageMetadata.og_image || siteMetadata.og_image],
    },
    alternates: {
      languages: {
        en: `${baseUrl}/en${pagePath}`,
        fr: `${baseUrl}/fr${pagePath}`,
        'x-default': `${baseUrl}/en${pagePath}`,
      },
    },
  };
}
