'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'

type TrackedLinkProps = {
  href: string
  eventName: string
  className?: string
  children: ReactNode
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function TrackedLink({
  href,
  eventName,
  className,
  children,
}: TrackedLinkProps) {
  function track() {
    window.gtag?.('event', eventName, {
      link_url: href,
    })
  }

  if (href.startsWith('http') || href.startsWith('tel:')) {
    return (
      <a href={href} className={className} onClick={track}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} onClick={track}>
      {children}
    </Link>
  )
}
