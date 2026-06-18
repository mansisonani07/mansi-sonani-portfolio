export interface ResumeBasics {
  name: string
  label: string
  tagline: string
  email: string
  location: { state: string; country: string }
  availability: string
  summary: string
  profiles: { network: string; username: string; url: string }[]
}

export interface ResumeCoreSkills {
  automation_and_orchestration: string[]
  ai_and_llms: string[]
  frontend: string[]
  backend_and_data: string[]
  tools_and_devops: string[]
}

export interface ResumeExperience {
  role: string
  company: string
  location: string
  start_date: string
  end_date: string
  summary: string
  highlights: string[]
}

export interface ResumeEducation {
  degree: string
  institution: string
  start_date: string
  end_date: string
  grade: string
}

export interface ResumeCertification {
  name: string
  issuer: string
  year: string
}
