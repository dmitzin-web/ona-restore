import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://onarestore.com'

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/restoration`, lastModified: new Date() },
    { url: `${baseUrl}/kitchen-bathroom-remodeling`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/projects`, lastModified: new Date() },
    { url: `${baseUrl}/reviews`, lastModified: new Date() },
    { url: `${baseUrl}/learn`, lastModified: new Date() },
    { url: `${baseUrl}/learn/water-damage-first-24-hours`, lastModified: new Date() },
    { url: `${baseUrl}/learn/water-damage-insurance-claim`, lastModified: new Date() },
    { url: `${baseUrl}/learn/hidden-moisture-after-water-damage`, lastModified: new Date() },
    { url: `${baseUrl}/locations`, lastModified: new Date() },
    { url: `${baseUrl}/restoration/water-damage`, lastModified: new Date() },
    { url: `${baseUrl}/restoration/fire-smoke-damage`, lastModified: new Date() },
    { url: `${baseUrl}/restoration/mold-remediation`, lastModified: new Date() },
    { url: `${baseUrl}/restoration/reconstruction`, lastModified: new Date() },
    { url: `${baseUrl}/kitchen-remodeling`, lastModified: new Date() },
    { url: `${baseUrl}/bathroom-remodeling`, lastModified: new Date() },
    { url: `${baseUrl}/vancouver-wa`, lastModified: new Date() },
  ]
}
