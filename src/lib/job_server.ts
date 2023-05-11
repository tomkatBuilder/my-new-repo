// lib/job_server.ts

import { Job, JobSummary, toJobSummary } from './job'
import { readFile } from 'fs/promises'
import { join } from 'path'

const readJobsfromJson = async () : Promise<Job[]> => {
    const json = await readFile(join(process.cwd(), 'jobs.json'), 'utf-8')
    return (JSON.parse(json) as any[]).map(toJob)
}

export const getJobs = async () : Promise<JobSummary[]> => {
    const jobs = await readJobsfromJson()
    return jobs.map(toJobSummary)
}