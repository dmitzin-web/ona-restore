export default function EmergencyBanner() {
  return (
    <div className="border-b border-white/10 bg-white text-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-2 text-center text-sm font-medium sm:flex-row">
        <span>
          Emergency property damage? Water, fire, smoke, mold, or rebuild support.
        </span>

        <a href="tel:+13608233196" className="underline underline-offset-4">
          Call ONA Restoration
        </a>
      </div>
    </div>
  )
}