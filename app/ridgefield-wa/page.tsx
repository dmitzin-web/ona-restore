import LocationPage from '@/components/LocationPage'

export const metadata = {
  title: 'Restoration Company in Ridgefield WA',
  description:
    'Water damage, fire damage, mold remediation, reconstruction, and remodeling services in Ridgefield WA and Clark County.',
}

export default function RidgefieldPage() {
  return (
    <LocationPage
      city="Ridgefield"
      state="WA"
      intro="ONA Restore provides water damage restoration, fire and smoke damage support, mold remediation planning, reconstruction, and remodeling services for homeowners in Ridgefield and surrounding Clark County areas."
      nearbyAreas={[
        { label: 'Vancouver WA', href: '/vancouver-wa' },
        { label: 'Battle Ground WA', href: '/battle-ground-wa' },
        { label: 'Salmon Creek WA', href: '/salmon-creek-wa' },
      ]}
    />
  )
}