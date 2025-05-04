'use client'

import { useState } from 'react'
import Head from 'next/head'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/meoggjpr', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Head>
        <title>Contact – Manage My Business</title>
        <meta name="description" content="Get in touch with us today!" />
      </Head>
      <section className="py-20 px-4 sm:px-20 container mx-auto max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>

        {status === 'success' ? (
          <p className="bg-green-100 text-green-700 p-4 rounded">
            ✅ Your message has been sent! We’ll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea
                name="message"
                required
                className="w-full border rounded px-3 py-2"
                rows={4}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'error' && (
              <p className="text-red-600 text-sm">❌ Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </section>
    </>
  )
}
