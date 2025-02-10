// app/sitemap.js
export default async function sitemap() {
  const baseUrl = 'https://wtmmontreal.com'; //  USE YOUR ACTUAL DOMAIN!

  const routes = [
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fr`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/code-of-conduct`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fr/code-of-conduct`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/en/team`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fr/team`,
      lastModified: new Date(),
    },

    // ...add all other pages...
  ];

  return routes;
}
