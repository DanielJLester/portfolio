import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/site'

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === ''

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-sm font-semibold tracking-tight text-white">
          {site.name}
        </Link>
        {isHome && (
          <nav className="hidden gap-8 text-sm text-neutral-400 sm:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
          </nav>
        )}
        <a
          href={`mailto:${site.email}`}
          className="rounded-full border border-accent/40 px-4 py-1.5 text-sm text-accent-light transition hover:border-accent hover:bg-accent/10"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
