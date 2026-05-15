export const metadata = {
  title: 'What To Do After Water Damage | First 24 Hours',
  description:
    'What homeowners should do in the first 24 hours after water damage, including safety, photos, moisture, insurance documentation, and restoration planning.',
}

export default function WaterDamageFirst24HoursPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <article className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          Water Damage Guide
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          What to do in the first 24 hours after water damage.
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-400">
          The first day after water damage is about safety, documentation,
          stopping additional damage, and getting a clear restoration plan.
        </p>

        <div className="mt-14 space-y-12 text-lg leading-8 text-neutral-300">
          <section>
            <h2 className="text-3xl font-semibold text-white">1. Stop the source if it is safe.</h2>
            <p className="mt-4">Shut off the water supply if the source is a plumbing leak. Do not enter areas with electrical hazards, sewage, sagging ceilings, or unsafe structural conditions.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white">2. Photograph everything before moving items.</h2>
            <p className="mt-4">Photos help document visible conditions, affected rooms, wet materials, flooring, cabinets, walls, ceilings, and contents before cleanup changes the scene.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white">3. Do not assume dry surfaces are actually dry.</h2>
            <p className="mt-4">Water can travel under flooring, behind baseboards, inside cabinets, into wall cavities, and into crawlspaces. Hidden moisture is one reason early inspection matters.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white">4. Separate mitigation from reconstruction.</h2>
            <p className="mt-4">Mitigation addresses active damage and moisture. Reconstruction repairs drywall, flooring, trim, cabinets, paint, and finishes after the damage is stabilized.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white">5. Start an organized claim file.</h2>
            <p className="mt-4">Keep photos, invoices, estimates, drying records, repair notes, emails, and carrier communications together. Organized documentation makes the repair path easier to understand.</p>
          </section>
        </div>
      </article>
    </main>
  )
}
