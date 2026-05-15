export const metadata = {
  title: 'Restoration & Remodeling Resources | ONA Restoration',
  description:
    'Water damage, fire damage, mold remediation, reconstruction, kitchen remodeling, bathroom remodeling, and property repair resources for Vancouver WA homeowners.',
}

const articles = [
  {
    title: 'What To Do After Water Damage In Vancouver WA',
    href: '/blog/what-to-do-after-water-damage-vancouver-wa',
    category: 'Water Damage',
  },
  {
    title: 'Does Water Damage Lead To Mold?',
    href: '/blog/does-water-damage-lead-to-mold',
    category: 'Mold',
  },
  {
    title: 'Kitchen Remodeling After A Leak Or Pipe Burst',
    href: '/blog/kitchen-remodeling-after-water-damage',
    category: 'Kitchen Remodeling',
  },
  {
    title: 'Bathroom Remodeling After Water Damage',
    href: '/blog/bathroom-remodeling-after-water-damage',
    category: 'Bathroom Remodeling',
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
          Resources
        </p>

        <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
          Restoration & remodeling resources.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-400">
          Educational content related to water damage, fire damage, mold,
          reconstruction, remodeling, and property repair planning.
        </p>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {articles.map((article) => (
            <a
              key={article.href}
              href={article.href}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/25 hover:bg-white/[0.05]"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-500">
                {article.category}
              </p>

              <h2 className="mt-5 text-2xl font-medium leading-tight">
                {article.title}
              </h2>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
