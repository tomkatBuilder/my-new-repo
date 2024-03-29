// components/Layout.tsx

import Head from 'next/head'
import {PropsWithChildren } from 'react'
import Link from 'next/link'

export interface Props {
    title?:String
}

export const Layout = ({ title, children } : PropsWithChildren<Props> ) => {
    return (
        <>
            { /* ... */ }
            <header>
                <h1>My Job Board</h1>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </nav>
                <hr />
            </header>
            <main>{ children }</main>
        </>
    )
}