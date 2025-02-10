export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://wtmmontreal.com/sitemap.xml', // Add your sitemap URL here
  };
}
