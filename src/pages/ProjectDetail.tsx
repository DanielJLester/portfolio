import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProjectImage from '../components/ProjectImage'
import { categories } from '../data/categories'
import { getProjectGallery, getProjectImage } from '../data/projectImages'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return <Navigate to="/" replace />
  }

  const category = categories.find((item) => item.slug === project.categorySlug)
  const gallery = getProjectGallery(project.slug)
  const meta = [
    { label: 'Role', value: project.role },
    { label: 'Year', value: project.year },
    { label: 'Timeline', value: project.timeline },
    { label: 'Tools', value: project.tools },
  ].filter((item) => item.value)

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-white"
      >
        <ArrowLeft size={16} />
        Back to work
      </Link>

      <div className="mt-8">
        <span className="text-xs font-medium uppercase tracking-wide text-accent-light">
          {category?.title ?? project.tag}
        </span>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{project.title}</h1>
        {project.blurb && <p className="mt-4 text-lg text-neutral-400">{project.blurb}</p>}
      </div>

      <ProjectImage
        src={getProjectImage(project.slug)}
        title={project.title}
        className="mt-10 h-72 w-full rounded-2xl object-cover sm:h-96"
      />

      {meta.length > 0 && (
        <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-white/10 py-6 sm:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-xs uppercase tracking-wide text-neutral-500">{item.label}</dt>
              <dd className="mt-1 text-sm text-neutral-200">{item.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {project.description ? (
        <div className="mt-10 space-y-5 whitespace-pre-line text-base leading-relaxed text-neutral-300">
          {project.description}
        </div>
      ) : (
        <p className="mt-10 text-sm italic text-neutral-500">
          Full write-up coming soon.
        </p>
      )}

      {gallery.length > 0 && (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {gallery.map((image) => (
            <img
              key={image}
              src={image}
              alt={project.title}
              className="w-full rounded-xl object-cover"
            />
          ))}
        </div>
      )}
    </article>
  )
}
