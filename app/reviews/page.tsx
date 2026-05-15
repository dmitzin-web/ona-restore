export const metadata = {
  title: 'Reviews | ONA Restoration',
  description:
    'Customer reviews and restoration project feedback for ONA Restoration in Vancouver WA and Clark County.',
}

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          Reviews
        </p>

        <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Homeowner feedback and project trust.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
          Real Google reviews will be added here as ONA Restoration completes
          restoration, reconstruction, kitchen remodeling, and bathroom remodeling projects.
        </p>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            'Water damage restoration',
            'Fire and smoke damage',
            'Kitchen and bathroom reconstruction',
          ].map((item) => (
            <div key={item} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <div className="text-lg">★★★★★</div>
              <h2 className="mt-5 text-2xl font-semibold">{item}</h2>
              <p className="mt-4 leading-8 text-neutral-400">
                Verified review content will be displayed after real customer
                feedback is collected.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
