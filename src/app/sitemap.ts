import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gcgw.vercel.app'
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/about.html`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/services.html`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/projects.html`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/careers.html`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/contact.html`,
      lastModified: currentDate,
    },
  ]
}
