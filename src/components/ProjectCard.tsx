import { Link } from 'react-router-dom'
import { getProjectImage } from '../data/projectImages'
import type { Project } from '../data/types'
import ProjectImage from './ProjectImage'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/project/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:border-accent/40 hover:bg-white/[0.04]"
    >
      <ProjectImage
        src={getProjectImage(project.slug)}
        title={project.title}
        className="h-44 w-full object-cover"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-accent-light">
          {project.tag}
        </span>
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        {project.blurb && (
          <p className="line-clamp-3 text-sm text-neutral-400">{project.blurb}</p>
        )}
        <span className="mt-auto pt-3 text-sm font-medium text-accent-light opacity-0 transition group-hover:opacity-100">
          View project →
        </span>
      </div>
    </Link>
  )
}
