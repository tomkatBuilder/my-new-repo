import { NextApiHandler } from 'next'

const jobs = [
    {
        id: '1',
        title: 'Senior Software Developer',
        company: 'Vercel',
    },
]

const handle: NextApiHandler = (req, res) => {
    if (req.method !== 'GET') {
        // .end() returns the response
        res.status(405).end()
        //don't forget the return, otherwise, we try to return the response twice!
        return
    }
    res.send(jobs)
}

export default handle