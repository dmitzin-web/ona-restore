type FaqItem = {
  question: string
  answer: string
}

type FaqSectionProps = {
  title?: string
  items: FaqItem[]
}

export default function FaqSection({
  title = 'Frequently Asked Questions',
  items,
}: FaqSectionProps) {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
          {title}
        </h2>

        <div className="mt-12 divide-y divide-white/10">
          {items.map((item) => (
            <div key={item.question} className="py-8">
              <h3 className="text-xl font-medium">
                {item.question}
              </h3>

              <p className="mt-4 leading-8 text-neutral-400">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}