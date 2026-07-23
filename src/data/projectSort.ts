import type { Project } from './types'

function mostRecentYear(year: string | null): number {
  const matches = year?.match(/\d{4}/g)
  if (!matches) return -Infinity
  return Math.max(...matches.map(Number))
}

export function sortByRecency(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => mostRecentYear(b.year) - mostRecentYear(a.year))
}
