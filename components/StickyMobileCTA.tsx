export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-neutral-950/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href="tel:+13600000000"
          className="rounded-full bg-white px-5 py-3 text-center text-sm font-medium text-black"
        >
          Call Now
        </a>

        <a
          href="/contact"
          className="rounded-full border border-white/15 px-5 py-3 text-center text-sm font-medium text-white"
        >
          Request Help
        </a>
      </div>
    </div>
  )
}