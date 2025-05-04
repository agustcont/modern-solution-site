// src/app/page.tsx
import Head from 'next/head'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>Manage My Business</title>
        <meta
          name="description"
          content="We design simple, clean, and powerful websites to serve the local businesses of Yuma."
        />
      </Head>

      {/* Dark Mode Toggle */}
      <div className="flex justify-end p-4 sm:p-8">
        <button
          id="darkModeToggle"
          aria-label="Toggle Dark Mode"
          className="text-2xl"
        >
          🌙
        </button>
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Portfolio Projects Section */}
      <Portfolio />

      {/* Testimonials Section */}
      <Testimonials />
    </>
  )
}
