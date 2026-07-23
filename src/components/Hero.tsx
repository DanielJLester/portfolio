import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { site } from '../data/site'

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
      <p className="text-sm font-medium uppercase tracking-widest text-accent-light">
        {site.role}
      </p>
      <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
        {site.headline}
      </h1>
      <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-neutral-400">
        {site.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-light"
        >
          View my work
        </a>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="rounded-full border border-white/10 p-2.5 text-neutral-400 transition hover:border-accent/50 hover:text-white"
          >
            <Mail size={18} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-2.5 text-neutral-400 transition hover:border-accent/50 hover:text-white"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-2.5 text-neutral-400 transition hover:border-accent/50 hover:text-white"
          >
            <GithubIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
