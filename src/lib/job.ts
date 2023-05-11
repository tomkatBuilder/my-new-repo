// lib/jobs.ts

export interface Job {
    id: string
    jobTitle: string
    company: string
    description: string
    applyUrl: string
    date: Date
}

export type JobSummary = Omit<Job, 'applyUrl' | 'description'>

// the object in the JSON contains the date as a string, we need to convert it to a Date
const toJob = (obj: any) : Job => ({ ...obj, date: new Date(obj.date) })

//remove description and applyUrl from the Job to make it a JobSummary
const toJobSummary = (job: Job) : JobSummary => {
    const { description, applyUrl, ...jobSummary } = job
    return jobSummary
}