import { NextApiHandler } from 'next'
import { getJobs } from '../../lib/job_server'

const handle: NextApiHandler = async (req, res) => {
    if (req.method !== 'GET') {
        // .end() returns the response
        res.status(405).end()
        //don't forget the return, otherwise, we try to return the response twice!
        return
    }
    const jobs = await getJobs()
    res.send(jobs)
}

export default handle