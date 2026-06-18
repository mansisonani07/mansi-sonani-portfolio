export interface ProjectLink {
  demo?: string
  github?: string
}

export interface ProjectMetric {
  label: string
  value: string
  icon?: string
}

export interface Project {
  id: string
  slug: string
  name: string
  type: string
  category: string
  description: string
  longDescription: string
  image: string
  images: string[]
  links: ProjectLink
  techStack: string[]
  metrics: ProjectMetric[]
  details: string[]
  deploymentPlatforms?: string[]
  featured: boolean
  year: string
  color: string
}
