export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'ONA Restore',
    url: 'https://onarestore.com',
    telephone: '+1-360-000-0000',
    description:
      'Restoration and remodeling company serving Vancouver WA, Clark County, and the Portland metro area. Services include water damage restoration, fire and smoke damage restoration, mold remediation, reconstruction, and remodeling.',
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
    serviceType: [
      'Water Damage Restoration',
      'Fire Damage Restoration',
      'Smoke Damage Restoration',
      'Mold Remediation',
      'Reconstruction',
      'Remodeling',
      'Insurance Claim Documentation Support',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
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