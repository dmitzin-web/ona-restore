export default function ReviewSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'ONA Restoration',
    url: 'https://onarestore.com',
    telephone: '+1-360-000-0000',
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Michael R.',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody:
          'Very professional and organized throughout the water damage process. Communication was excellent and the documentation helped simplify the insurance side of the project.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Felicity T.',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody:
          'ONA Restoration helped us after a major leak and mold issue. The process felt much more structured and transparent than we expected.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Benjamin K.',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody:
          'The rebuild quality was excellent. Drywall, paint, trim, and flooring all came out great after the mitigation work was completed.',
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
