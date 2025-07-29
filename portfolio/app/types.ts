export type Lefter = {
  jobTitle: string,
  summary: string,
  contactBtn: string,
}

export type WorkSchool = {
  title: string,
  content: {
    job: string,
    period: string,
    company: string,
    summary: string,
    tasks: string[]
  }[],
}

export type Projects = {
  title: string,
  content: {
    title: string,
    img: string,
    summary: string,
    tech: string[]
  }[]
}

export type AppTextType = {
  [index: string]: {
    lefter: Lefter,
    persProf: string,
    work: WorkSchool,
    school: WorkSchool,
    projects: Projects,
  },
}