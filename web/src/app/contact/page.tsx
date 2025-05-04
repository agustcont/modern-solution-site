// src/app/contact/page.tsx
import Head from 'next/head'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact – Manage My Business</title>
        <meta name="description" content="Get in touch with us today!" />
      </Head>
      <section className="py-20 px-4 sm:px-20 container mx-auto max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  )
}
