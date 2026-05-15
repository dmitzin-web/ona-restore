import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          ONA Restore
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <Link href="/restoration/water-damage" className="hover:text-white">
            Water Damage
          </Link>

          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </nav>

        <a
          href="tel:+13600000000"
          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black hover:bg-neutral-200"
        >
          Call Now
        </a>
      </div>
    </header>
  )
}