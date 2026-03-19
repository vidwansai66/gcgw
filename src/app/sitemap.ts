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
      url: `${baseUrl}/about`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
    },
  ]
}
