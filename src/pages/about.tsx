// pages/about.tsx

import type { NextPage } from 'next'
import { Layout } from '../components/Layout'

const AboutPage: NextPage = () => {
    return (
        <Layout title="About">
            <p>This job board is the project created using the book {' '}
                <em>Serverless Web Applications with React and Next.js</em>
            </p>
        </Layout>
    )
}

export default AboutPage