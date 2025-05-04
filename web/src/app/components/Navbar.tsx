// src/app/components/Navbar.tsx
'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Navbar() {
  const router = useRouter()

  function handleNavChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const dest = e.target.value
    if (dest) router.push(dest)
  }

  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Manage My Business
        </h1>
        <nav>
          <select
            onChange={handleNavChange}
            className="border rounded px-3 py-1"
            aria-label="Navigate to…"
          >
            <option value="">Navigate to…</option>
            <option value="/">Home</option>
            <option value="/about">About Us</option>
            <option value="/portfolio">Portfolio</option>
            <option value="/contact">Contact</option>
          </select>
        </nav>
      </div>
    </header>
  )
}
