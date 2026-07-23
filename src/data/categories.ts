import type { Category } from './types'

export const categories: Category[] = [
  {
    slug: 'pm-projects',
    title: 'PM Projects',
    tag: 'Product',
    blurb: 'Product management work, internal tooling, B2B SaaS and platform tools.',
    order: 1,
  },
  {
    slug: 'solo-projects',
    title: 'Solo Projects',
    tag: 'Independent',
    blurb: 'Independent apps built end-to-end to solve real world consumer problems.',
    order: 2,
  },
  {
    slug: 'platform-rd',
    title: 'Platform R&D',
    tag: 'R&D',
    blurb: 'R&D platform engineering for offsite construction manufacturing at Veev.',
    order: 3,
  },
  {
    slug: 'construction',
    title: 'Construction Projects',
    tag: 'Engineering',
    blurb: 'Design & engineering on major UK and international developments.',
    order: 4,
  },
]
