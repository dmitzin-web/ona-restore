type ServiceSchemaProps = {
  name: string
  description: string
  url: string
}

export default function ServiceSchema({
  name,
  description,
  url,
}: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: 'ONA Restoration',
      url: 'https://onarestore.com',
      telephone: '+1-360-000-0000',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Vancouver',
        addressRegion: 'WA',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Clark County',
        addressRegion: 'WA',
      },
      {
        '@type': 'City',
        name: 'Portland',
        addressRegion: 'OR',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
