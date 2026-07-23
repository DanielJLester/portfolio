export interface Category {
  slug: string
  title: string
  tag: string
  blurb: string
  order: number
}

export interface Project {
  slug: string
  title: string
  categorySlug: string
  tag: string
  blurb: string | null
  description: string | null
  image: string | null
  galleryImages: string[]
  year: string | null
  role: string | null
  tools: string | null
  timeline: string | null
  order: number
}

export interface Role {
  period: string
  name: string
  org: string
  order: number
}
