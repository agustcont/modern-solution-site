// src/app/components/Testimonials.tsx

export default function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
        <div className="space-y-8">
          {/* Testimonial #1 */}
          <div className="p-6 border-l-4 border-blue-500">
            <p className="mb-2">
              &quot;Absolutely loved working with Agustin and Sebastian. They made the process seamless and our site looks amazing!&quot;
            </p>
            <strong>- Maria G., Boutique Owner</strong>
          </div>

          {/* Testimonial #2 */}
          <div className="p-6 border-l-4 border-blue-500">
            <p className="mb-2">
              &quot;They understood what we needed right away and delivered fast. Highly recommend!&quot;
            </p>
            <strong>- James T., Restaurant Manager</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
