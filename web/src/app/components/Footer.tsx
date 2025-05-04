// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-100 dark:bg-gray-900 py-4">
        <div className="container mx-auto text-center text-sm text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} Manage My Business
        </div>
      </footer>
    )
  }
  