import LocationPage from '@/components/LocationPage'

export const metadata = {
  title: 'Restoration Company in Salmon Creek WA',
  description:
    'Water damage, fire damage, mold remediation, reconstruction, and remodeling services in Salmon Creek WA and Clark County.',
}

export default function SalmonCreekPage() {
  return (
    <LocationPage
      city="Salmon Creek"
      state="WA"
      intro="ONA Restore provides water damage restoration, fire and smoke damage support, mold remediation planning, reconstruction, and remodeling services for homeowners in Salmon Creek and nearby Vancouver WA communities."
      nearbyAreas={[
        { label: 'Vancouver WA', href: '/vancouver-wa' },
        { label: 'Hazel Dell WA', href: '/hazel-dell-wa' },
        { label: 'Ridgefield WA', href: '/ridgefield-wa' },
      ]}
    />
  )
}
