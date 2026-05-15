import LocationPage from '@/components/LocationPage'

export const metadata = {
  title: 'Restoration Company in Hazel Dell WA',
  description:
    'Water damage, fire damage, mold remediation, reconstruction, and remodeling services in Hazel Dell WA and Clark County.',
}

export default function HazelDellPage() {
  return (
    <LocationPage
      city="Hazel Dell"
      state="WA"
      intro="ONA Restoration provides water damage restoration, fire and smoke damage support, mold remediation planning, reconstruction, and remodeling services for homeowners in Hazel Dell and the Vancouver WA area."
      nearbyAreas={[
        { label: 'Vancouver WA', href: '/vancouver-wa' },
        { label: 'Salmon Creek WA', href: '/salmon-creek-wa' },
        { label: 'Ridgefield WA', href: '/ridgefield-wa' },
      ]}
    />
  )
}
