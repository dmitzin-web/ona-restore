export const metadata = {
  title: 'Restoration Guides | ONA Restoration',
  description:
    'Water damage, fire damage, mold, insurance claims, and reconstruction guides for Vancouver WA homeowners.',
}

const guides = [
  {
    title: 'What To Do In The First 24 Hours After Water Damage',
    href: '/learn/water-damage-first-24-hours',
    label: 'Water Damage',
  },
  {
    title: 'How Water Damage Insurance Claims Usually Work',
    href: '/learn/water-damage-insurance-claim',
    label: 'Insurance Claims',
  },
  {
    title: 'Hidden Moisture After Water Damage',
    href: '/learn/hidden-moisture-after-water-damage',
    label: 'Moisture',
  },
]

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          Guides
        </p>

        <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Restoration guides for homeowners.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
          Clear, practical restoration and insurance-related guides for
          homeowners dealing with water damage, smoke damage, mold concerns,
          and reconstruction decisions.
        </p>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {guides.map((guide) => (
            <a key={guide.href} href={guide.href} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/25">
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                {guide.label}
              </p>
              <h2 className="mt-5 text-2xl font-semibold leading-tight">
                {guide.title}
              </h2>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
