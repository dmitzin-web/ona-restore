export const metadata = {
  title: 'Projects | ONA Restoration',
  description:
    'Restoration, reconstruction, kitchen remodeling, bathroom remodeling, and property damage repair project examples in Vancouver WA and Clark County.',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          Projects
        </p>

        <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Real restoration and remodeling projects.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
          Project photos and case studies will be added as ONA Restoration
          documents completed water damage, fire damage, mold-related repair,
          kitchen remodeling, and bathroom remodeling work.
        </p>
      </section>
    </main>
  )
}
