import LocationPage from '@/components/LocationPage'

export const metadata = {
  title: 'Restoration Company in Ridgefield WA | ONA Restoration',
  description:
    'Water damage restoration, fire damage restoration, mold remediation support, reconstruction, kitchen remodeling, and bathroom remodeling in Ridgefield WA.',
}

export default function RidgefieldPage() {
  return (
    <LocationPage
      city="Ridgefield"
      state="WA"
      intro="ONA Restoration provides water damage restoration, fire and smoke damage support, mold remediation planning, reconstruction, and remodeling services for homeowners in Ridgefield and surrounding Clark County areas."
      nearbyAreas={[
        { label: 'Vancouver WA', href: '/vancouver-wa' },
        { label: 'Battle Ground WA', href: '/battle-ground-wa' },
        { label: 'Salmon Creek WA', href: '/salmon-creek-wa' },
      ]}
    />
  )
}
