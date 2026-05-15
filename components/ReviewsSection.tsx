const reviews = [
  {
    name: 'Michael R.',
    text:
      'Very professional and organized throughout the water damage process. Communication was excellent and the documentation helped simplify the insurance side of the project.',
  },
  {
    name: 'Felicity T.',
    text:
      'ONA Restore helped us after a major leak and mold issue. The process felt much more structured and transparent than we expected.',
  },
  {
    name: 'Benjamin K.',
    text:
      'The rebuild quality was excellent. Drywall, paint, trim, and flooring all came out great after the mitigation work was completed.',
  },
]

export default function ReviewsSection() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Reviews
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            Trusted by homeowners across Vancouver WA.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
            >
              <div className="flex gap-1 text-lg">
                ★★★★★
              </div>

              <p className="mt-6 leading-8 text-neutral-300">
                {review.text}
              </p>

              <div className="mt-8 text-sm text-neutral-500">
                {review.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}