import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { site } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-8 py-14 text-center sm:px-16">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Let's talk</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-neutral-400">
          Open to product roles, collaborations, and interesting problems at the intersection of
          hardware and software.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-light"
          >
            <Mail size={16} />
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-neutral-300 transition hover:border-accent/50 hover:text-white"
          >
            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-neutral-300 transition hover:border-accent/50 hover:text-white"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
