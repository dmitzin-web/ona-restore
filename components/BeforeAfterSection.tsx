const projects = [
  {
    title: 'Water Damage Reconstruction',
    before:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    after:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Kitchen Rebuild After Leak',
    before:
      'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=1200&auto=format&fit=crop',
    after:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function BeforeAfterSection() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Projects
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Before & after restoration work.
          </h2>
        </div>

        <div className="mt-16 space-y-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium">
                  {project.title}
                </h3>

                <span className="text-sm text-neutral-500">
                  Vancouver WA
                </span>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
                    Before
                  </p>

                  <img
                    src={project.before}
                    alt={`${project.title} before`}
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                </div>

                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
                    After
                  </p>

                  <img
                    src={project.after}
                    alt={`${project.title} after`}
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}