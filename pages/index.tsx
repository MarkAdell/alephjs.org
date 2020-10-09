import React from 'https://esm.sh/react'
import { Link, Import, useData } from 'https://deno.land/x/aleph/mod.ts'
import Button from '../components/button.tsx'
import Logo from '../components/logo.tsx'

const thisYear = (new Date).getFullYear()

export default function Home() {
    const version = useData('aleph.version')

    return (
        <div className="index-page">
            <Import from="../style/index.less" />
            <div className="welcome">
                <Logo size={180} />
                <h1>The React Framework in Deno.</h1>
                <p>Aleph.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript in  deno, ES module, route pre-fetching, and more. No config needed.</p>
                <p className="buttons">
                    <Link to="/docs/get-started"> <Button strong>Get Started</Button></Link>
                    <Link to="/docs"> <Button strong>Documentation</Button></Link>
                </p>
            </div>
            <div className="details">
                <h2>Features</h2>
                <ul>
                    <li>Zero Config</li>
                    <li>Typescript in Deno</li>
                    <li>ES Module Ready</li>
                    <li>HMR with Fast Refresh</li>
                    <li>File-system Routing</li>
                    <li>Markdown Page</li>
                    <li>Built-in CSS(Less) Support</li>
                    <li>SSR/SSG</li>
                </ul>
            </div>
            <footer>
                <p>Copyright © {thisYear} postUI, Lab. All rights reserved.</p>
                <p>Built by Aleph.js - v{version}</p>
                <p>(MIT License)</p>
            </footer>
        </div>
    )
}
