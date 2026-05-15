import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          ONA Restoration
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
          <Link href="/" className="hover:text-white">
            Home
          </Link>

          <div className="group relative py-3">
            <Link href="/restoration" className="flex items-center gap-1 hover:text-white">
              Restoration
              <span className="text-xs">▾</span>
            </Link>

            <div className="invisible absolute left-0 top-full z-50 w-72 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-white/10 bg-neutral-950 p-3 shadow-2xl">
                <Link
                  href="/restoration/water-damage"
                  className="block rounded-xl px-4 py-3 text-neutral-300 hover:bg-white/5 hover:text-white"
                >
                  Water Damage Restoration
                </Link>

                <Link
                  href="/restoration/fire-smoke-damage"
                  className="block rounded-xl px-4 py-3 text-neutral-300 hover:bg-white/5 hover:text-white"
                >
                  Fire & Smoke Damage
                </Link>

                <Link
                  href="/restoration/mold-remediation"
                  className="block rounded-xl px-4 py-3 text-neutral-300 hover:bg-white/5 hover:text-white"
                >
                  Mold Remediation
                </Link>

                <Link
                  href="/restoration/reconstruction"
                  className="block rounded-xl px-4 py-3 text-neutral-300 hover:bg-white/5 hover:text-white"
                >
                  Reconstruction
                </Link>

                <Link
                  href="/locations"
                  className="block rounded-xl px-4 py-3 text-neutral-300 hover:bg-white/5 hover:text-white"
                >
                  Service Areas
                </Link>
              </div>
            </div>
          </div>

          <div className="group relative py-3">
            <Link href="/kitchen-bathroom-remodeling" className="flex items-center gap-1 hover:text-white">
              Remodeling
              <span className="text-xs">▾</span>
            </Link>

            <div className="invisible absolute left-0 top-full z-50 w-64 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="rounded-2xl border border-white/10 bg-neutral-950 p-3 shadow-2xl">
                <Link
                  href="/kitchen-remodeling"
                  className="block rounded-xl px-4 py-3 text-neutral-300 hover:bg-white/5 hover:text-white"
                >
                  Kitchen Remodeling
                </Link>

                <Link
                  href="/bathroom-remodeling"
                  className="block rounded-xl px-4 py-3 text-neutral-300 hover:bg-white/5 hover:text-white"
                >
                  Bathroom Remodeling
                </Link>
              </div>
            </div>
          </div>

          <Link href="/insurance-claims" className="hover:text-white">
            Claims
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
