import { useMemo, useState } from 'react'
import { categories } from '../data/categories'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null)

  const sortedCategories = useMemo(
    () => [...categories].sort((a, b) => a.order - b.order),
    [],
  )

  const visibleProjects = useMemo(() => {
    const filtered = activeSlug
      ? projects.filter((project) => project.categorySlug === activeSlug)
      : projects
    return [...filtered].sort((a, b) => a.order - b.order)
  }, [activeSlug])

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Selected work</h2>
          <p className="mt-2 max-w-xl text-sm text-neutral-400">
            Product management, R&amp;D platform engineering, independent apps, and construction
            engineering.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveSlug(null)}
          className={`rounded-full border px-4 py-1.5 text-sm transition ${
            activeSlug === null
              ? 'border-accent bg-accent/10 text-accent-light'
              : 'border-white/10 text-neutral-400 hover:border-white/30 hover:text-white'
          }`}
        >
          All
        </button>
        {sortedCategories.map((category) => (
          <button
            key={category.slug}
            type="button"
            onClick={() => setActiveSlug(category.slug)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              activeSlug === category.slug
                ? 'border-accent bg-accent/10 text-accent-light'
                : 'border-white/10 text-neutral-400 hover:border-white/30 hover:text-white'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {activeSlug && (
        <p className="mt-6 max-w-xl text-sm text-neutral-500">
          {categories.find((category) => category.slug === activeSlug)?.blurb}
        </p>
      )}

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
