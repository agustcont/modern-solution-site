// src/app/components/Portfolio.tsx

export default function Portfolio() {
    return (
      <section className="py-16 px-4 sm:px-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Client Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* CU Later Cafe */}
            <div className="p-6 border rounded hover:shadow-lg transition">
              <h3 className="text-2xl font-medium mb-2">CU Later Cafe</h3>
              <p className="mb-4">
                Simple website to allow orders and also showcase the client’s
                product offering to online seekers.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit CU Cafe
              </a>
            </div>
  
            {/* Sonoran Hot Dogs */}
            <div className="p-6 border rounded hover:shadow-lg transition">
              <h3 className="text-2xl font-medium mb-2">Sonoran Hot Dogs</h3>
              <p className="mb-4">
                Designed an online ordering system to allow for yummy hot-dogs
                ordering and listed this business on Google Maps.
              </p>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  