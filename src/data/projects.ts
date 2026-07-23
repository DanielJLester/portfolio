import type { Project } from './types'

// `image` / `galleryImages` are left null until real project photos are added to
// public/images/projects/. Intended filenames are noted per project below.
export const projects: Project[] = [
  {
    slug: 'color-forecasting',
    title: 'Color Forecasting',
    categorySlug: 'pm-projects',
    tag: 'Product',
    blurb:
      'Color Forecasting is an AI-powered data pipeline that predicts the specific color or finish a homebuyer selected for materials like flooring, siding, and countertops.',
    description: `What it is
A multi-stage data pipeline that ingests purchase order data from the ERP system and buyer preference selections captured in the CRM, matches them using weighted text scoring, and uses an LLM to extract the exact color/finish for each purchase order line. The output is a forecast dataset that gives supply chain and purchasing teams — and their manufacturer partners — visibility into color-level demand that previously lived only in disconnected, unstructured text fields.

Value
Before this pipeline, purchase orders carried item and quantity data but not the specific color or finish selected, preventing manufacturers from staging inventory accurately and leaving a manual, incomplete process as the only workaround. Color Forecasting automates that matching and enrichment step, giving suppliers reliable color-level estimates that unlock manufacturer incentives and reduce inventory mis-staging, while creating a reusable dataset for broader forecasting and plan-intelligence use cases.

Customer base
Internal purchasing and supply chain teams use the forecast data directly, and it's designed to be shared downstream with external material manufacturers and suppliers so they can plan production and inventory around expected color/finish demand. It was piloted with purchasing leadership before scaling across divisions and material categories (tile, carpet, siding, brick, countertops, and more).

My involvement
I owned this product from problem definition through MVP. I wrote the PRD, defined scope and success criteria, and ran proof-of-concept demos for purchasing leadership. I partnered with data and engineering teams to design the preference-matching and LLM-based color-detection pipeline, and defined the roadmap to integrate the output into the Trade Partner Portal.`,
    image: null, // intended: /images/projects/color-forecasting.png
    galleryImages: [],
    year: '2026',
    role: 'Product Manager',
    tools: 'Palantir Foundry, Figma',
    timeline: 'Q1 2026',
    order: 2,
  },
  {
    slug: 'tpp-platform',
    title: 'TPP Platform',
    categorySlug: 'pm-projects',
    tag: 'Product',
    blurb:
      'The Trade Partner Platform is a unified system for managing the full lifecycle of trade partner relationships, from onboarding through bidding, contracts, and payments.',
    description: `What it is
A homebuilder-scale platform covering trade partner onboarding and prequalification, a searchable trade directory, bid management, volume forecast sharing, contract lifecycle management, performance scorecards, and payments — designed to integrate with existing scheduling and payment systems rather than replace them. The Onboarding module is the first phase: a guided, self-service application flow with document collection, automated compliance checks, and status visibility for both trade partners and internal reviewers.

Value
The platform consolidates work that was previously spread across emails, spreadsheets, and disconnected legacy tools into a single system of record, cutting down duplicated data entry and reducing compliance risk (expired licenses, missing documentation, unclear contract ownership). It also lays the foundation for higher-value capabilities — like forecast sharing and performance-linked trade tiering — that don't exist in any off-the-shelf construction software today, since most vendors cover only part of the trade relationship lifecycle.

Customer base
Internally, the platform serves national and division-level trade partner management teams — operations, purchasing, legal/risk, and safety. Once fully rolled out, it's designed to serve a large, nationwide network of subcontractor trade partners directly through a self-service onboarding and bidding portal.

My involvement
I led product management for the Trade Partner Platform and its Onboarding module. I ran competitive and market research to inform a build-vs-buy recommendation (evaluating construction platforms and supplier-relationship-management tools), led discovery sessions with division and corporate stakeholders to surface requirements and pain points, and defined the phased roadmap — starting with the onboarding and compliance MVP, with bidding, forecast sharing, and performance management to follow. I also directed wireframing of the onboarding experience.`,
    image: null, // intended: /images/projects/tpp-platform.png
    galleryImages: [],
    year: '2026',
    role: 'Product Manager',
    tools: 'React, Kafka',
    timeline: '2026-Q2',
    order: 3,
  },
  {
    slug: 'home-design-and-estimation',
    title: 'Studio',
    categorySlug: 'pm-projects',
    tag: 'Product',
    blurb: 'Studio is a home design and estimation web-app.',
    description: `Studio is a home design and estimation software for Lennar production homes, with full digitization of designs to rich digital 3D models without any technical knowledge required.

What it is
Studio is a web application that lets non-CAD users interactively configure home plans: placing and resizing rooms, adding or removing walls, editing elevations (siding, brick, stone, window/porch placement), building dynamic staircases, and selecting interior/exterior finish elements from a catalog of building components. Once a plan is configured, Studio generates a construction-ready 3D model and the associated documentation needed to move a design from concept to build.

Value
Studio replaces hours of manual modeling per plan variation with an interactive, self-service configuration workflow. It lets design, purchasing, and estimating teams produce accurate, code-aligned elevations and framing options on demand, shortens the path from plan concept to construction drawings, and reduces rework caused by mismatched or outdated documentation between design and field teams.

Customer base
Studio was used internally across design, architecture, and purchasing operations to configure home plans and generate construction-ready output faster than traditional CAD workflows. It was piloted and stress-tested with regional teams against real-world plan complexity, including highly detailed flagship plans with varied facades, multi-story layouts, and non-standard wall configurations.

My involvement
I was the Product Manager for Studio. I led evaluation and rollout of the platform with the Veev team, ran hands-on training and demo sessions with internal stakeholders, and gathered structured field feedback (e.g., stair head-clearance validation, support for angled walls, wall-finish parameters by room type) that fed directly into the product roadmap. I worked closely with engineering to prioritize features including the element catalog, elevation split lines, dynamic stair generation, and add/remove wall tools.`,
    image: null, // intended: /images/projects/studio.png
    galleryImages: [],
    year: '2024-2025',
    role: 'Product Manager',
    tools: 'Figma, Jira, ChatGPT',
    timeline: '',
    order: 1,
  },
  {
    slug: 'stickynotes',
    title: 'StickyNotes',
    categorySlug: 'solo-projects',
    tag: 'Independent',
    blurb: 'Song capture and organizational app — built and released solo.',
    description: `StickyNotes is a minimalist song idea organization application.

The problem is simple: songwriters have easy access to record their ideas on their phones, but weeks later, these ideas are buried with all the other "recording 87" or "riff that sounds cool."

StickyNotes builds on the simple recording, with inherently organized functionality, so you never lose your "rock idea." Instead of a long list, a post-it note style dashboard is color coded and filterable by style, key, feel, and others.

Technical details
React frontend, Netlify server, Supabase backend database and storage (via S3).

Stage
Early beta release phase, looking for beta testers.

Sign up for the app: https://audiostickynotes.netlify.app/dashboard
Further details on the GitHub overview: https://github.com/DanielJLester/RiffBoard`,
    image: null, // intended: /images/projects/stickynotes.png
    galleryImages: [],
    year: '2026',
    role: 'Full-stack (PM, Dev, UX/UI)',
    tools: 'React Native, Supabase, Expo',
    timeline: 'July 2026',
    order: 1,
  },
  {
    slug: 'iwac',
    title: 'In-Wall Air Conditioning',
    categorySlug: 'platform-rd',
    tag: 'HVAC, Manufacturer',
    blurb: 'Design and integration of an all-in-one AC system into Veev prefab walls.',
    description: `Research and development to production.

Wrote the PRD for mechanical engineers and industrial designers to develop from.`,
    image: null,
    galleryImages: [],
    year: null,
    role: null,
    tools: null,
    timeline: null,
    order: 1,
  },
  {
    slug: 'bim-ecosystem',
    title: 'BIM Ecosystem',
    categorySlug: 'platform-rd',
    tag: 'BIM',
    blurb: null,
    description: null,
    image: null,
    galleryImages: [],
    year: null,
    role: null,
    tools: null,
    timeline: null,
    order: 2,
  },
  {
    slug: 'chelsea-barracks',
    title: 'Chelsea Barracks',
    categorySlug: 'construction',
    tag: 'Construction, Residential',
    blurb: 'Luxury residential apartment scheme in London, UK.',
    description: `£3 billion Chelsea Barracks masterplan in Belgravia, London.
https://www.chelseabarracks.com/`,
    image: null, // intended: /images/projects/chelsea-barracks.jpeg
    galleryImages: [],
    year: '2017',
    role: 'Lead MEP Engineer',
    tools: 'Revit',
    timeline: null,
    order: 1,
  },
  {
    slug: 'wembley',
    title: 'Wembley Residential',
    categorySlug: 'construction',
    tag: 'Design, Optioneering, Sustainability, Affordable Housing',
    blurb: null,
    description: `Role: Acted as Project Team Lead, running a multi-disciplinary engineering team of 8 people. Ran coordination meetings, client presentations, resource and budget planning.

Company: HPF
Client: Quintain

Project: Wembley E01/E02 (also known as the Madison building) is a massive mixed-use residential development at Wembley Park. Comprising four 15-story buildings, it houses 633 apartments, retail spaces, a fitness club, and a nursery next to Wembley Stadium.`,
    image: null, // intended: /images/projects/wembley.jpg
    galleryImages: [],
    year: '2016-2017',
    role: 'Project MEP Team Lead',
    tools: 'Workday, Bluebeam, Revit, Excel',
    timeline: null,
    order: 2,
  },
]
