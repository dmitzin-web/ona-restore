import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://onarestore.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/restoration/water-damage`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/restoration/fire-smoke-damage`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/restoration/mold-remediation`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/restoration/reconstruction`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insurance-claims`,
      lastModified: new Date(),
    },
  ]
}