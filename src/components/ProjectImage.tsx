interface ProjectImageProps {
  src: string | null
  title: string
  className?: string
}

const GRADIENTS = [
  'from-fuchsia-700/40 via-purple-800/30 to-neutral-900',
  'from-indigo-700/40 via-purple-800/30 to-neutral-900',
  'from-purple-700/40 via-fuchsia-900/30 to-neutral-900',
]

function gradientFor(title: string) {
  const index = title.charCodeAt(0) % GRADIENTS.length
  return GRADIENTS[index]
}

export default function ProjectImage({ src, title, className = '' }: ProjectImageProps) {
  if (src) {
    return <img src={src} alt={title} className={className} loading="lazy" />
  }

  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br ${gradientFor(title)} ${className}`}
    >
      <span className="px-4 text-center text-sm font-medium tracking-wide text-neutral-400">
        {title}
      </span>
    </div>
  )
}
