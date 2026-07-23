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
  year: string | null
  role: string | null
  tools: string | null
  timeline: string | null
  /** Building type for construction projects (e.g. Residential, Hospitality). */
  buildingClass: string | null
}

export interface Role {
  period: string
  name: string
  org: string
  order: number
}
