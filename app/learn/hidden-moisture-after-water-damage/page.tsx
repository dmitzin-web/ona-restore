export const metadata = {
  title: 'Hidden Moisture After Water Damage | ONA Restoration',
  description:
    'Hidden moisture after water damage can affect flooring, drywall, cabinets, trim, crawlspaces, and wall cavities. Learn what homeowners should watch for.',
}

export default function HiddenMoisturePage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <article className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          Moisture Guide
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Hidden moisture after water damage.
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-400">
          Water often travels farther than the first visible stain. Hidden
          moisture can affect repair scope, mold risk, and reconstruction needs.
        </p>

        <div className="mt-14 space-y-12 text-lg leading-8 text-neutral-300">
          <section>
            <h2 className="text-3xl font-semibold text-white">Where moisture hides.</h2>
            <p className="mt-4">Common hidden areas include under flooring, behind baseboards, inside cabinets, beneath vanities, inside wall cavities, and in crawlspaces.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white">Why visual inspection is not enough.</h2>
            <p className="mt-4">A surface may look dry while concealed materials remain wet. Moisture mapping and material review help define what needs to be dried, removed, or repaired.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white">How it affects reconstruction.</h2>
            <p className="mt-4">Hidden moisture can change the repair scope for drywall, trim, flooring, cabinets, insulation, and paint.</p>
          </section>
        </div>
      </article>
    </main>
  )
}
