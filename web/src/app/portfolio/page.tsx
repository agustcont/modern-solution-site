// src/app/portfolio/page.tsx
import Head from 'next/head'
import Portfolio from '../components/Portfolio'

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio – Manage My Business</title>
        <meta name="description" content="See client websites we’ve built." />
      </Head>
      <Portfolio />
    </>
  )
}
