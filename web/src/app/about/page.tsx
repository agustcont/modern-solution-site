// src/app/about/page.tsx
import Head from 'next/head'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us – Manage My Business</title>
        <meta name="description" content="Learn more about Agustín & Sebastián’s mission." />
      </Head>
      <section className="py-20 px-4 sm:px-20 container mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          We’re Agustín and Sebastián—a small team passionate about helping
          local businesses in Yuma thrive online. From simple websites to
          full-on digital marketing, we’ve got your back.
        </p>
      </section>
    </>
  )
}
