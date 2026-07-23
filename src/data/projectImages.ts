import manifest from './projectImageManifest.json'

interface ManifestEntry {
  image?: string
  gallery?: string[]
}

const entries = manifest as Record<string, ManifestEntry>

function toUrl(filename: string) {
  return `${import.meta.env.BASE_URL}images/projects/${encodeURIComponent(filename)}`
}

export function getProjectImage(slug: string): string | null {
  const image = entries[slug]?.image
  return image ? toUrl(image) : null
}

export function getProjectGallery(slug: string): string[] {
  return entries[slug]?.gallery?.map(toUrl) ?? []
}
