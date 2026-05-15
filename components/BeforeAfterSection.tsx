const projects = [
  {
    title: 'Water Damage Reconstruction',
    location: 'Vancouver WA',
    type: 'Water Damage · Reconstruction',
    before: '/projects/project-placeholder-before.svg',
    after: '/projects/project-placeholder-after.svg',
  },
  {
    title: 'Kitchen Rebuild After Leak',
    location: 'Clark County WA',
    type: 'Kitchen Remodeling · Water Damage',
    before: '/projects/project-placeholder-before.svg',
    after: '/projects/project-placeholder-after.svg',
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
            Before & after project documentation.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Real project photos will be added here as ONA Restoration documents
            completed restoration, reconstruction, kitchen, and bathroom work.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                    {project.type}
                  </p>

                  <h3 className="mt-3 text-2xl font-medium">
                    {project.title}
                  </h3>
                </div>

                <span className="text-sm text-neutral-500">
                  {project.location}
                </span>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
                    Before
                  </p>

                  <img
                    src={project.before}
                    alt={`${project.title} before restoration work in ${project.location}`}
                    className="aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover"
                  />
                </div>

                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
                    After
                  </p>

                  <img
                    src={project.after}
                    alt={`${project.title} after restoration work in ${project.location}`}
                    className="aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm leading-6 text-neutral-600">
          Project images should be original, compressed, and named with relevant
          service and location keywords before upload.
        </p>
      </div>
    </section>
  )
}
