export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://androidmontreal.github.io/wtmmontreal/sitemap.xml', // Add your sitemap URL here
  };
}
