export const metadata = {
  title: 'Water Damage Insurance Claim Guide | ONA Restoration',
  description:
    'How water damage insurance claims usually work, including mitigation, reconstruction, documentation, estimates, deductibles, and carrier review.',
}

export default function WaterDamageInsuranceClaimPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <article className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          Insurance Claim Guide
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          How water damage insurance claims usually work.
        </h1>

        <p className="mt-8 text-lg leading-8 text-neutral-400">
          ONA Restoration does not make coverage decisions or act as a public
          adjuster. This guide explains the repair-process side homeowners often face.
        </p>

        <div className="mt-14 space-y-12 text-lg leading-8 text-neutral-300">
          <section>
            <h2 className="text-3xl font-semibold text-white">Mitigation usually comes first.</h2>
            <p className="mt-4">If water is actively affecting the home, mitigation may be needed before final reconstruction scope is clear.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white">Reconstruction is a separate phase.</h2>
            <p className="mt-4">After affected materials are removed or dried, the home may still need drywall, texture, paint, trim, flooring, cabinets, and finish repairs.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white">Documentation matters.</h2>
            <p className="mt-4">Photos, measurements, affected-material notes, moisture observations, and room-by-room repair scope help make the project easier to review.</p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white">Coverage depends on the policy.</h2>
            <p className="mt-4">The insurance carrier determines coverage under the policy. A contractor can document visible repair needs, but does not decide policy coverage.</p>
          </section>
        </div>
      </article>
    </main>
  )
}
