import Link from "next/link";

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Smart tools for modern service businesses
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Gobé Labs builds simple, powerful digital solutions that help small
          teams manage work, clients, and growth — without complexity.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-md hover:opacity-90"
          >
            Get in touch
          </Link>
          <Link
            href="/about"
            className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50"
          >
            Learn more
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-2">Built for simplicity</h3>
          <p className="text-gray-600">
            Clean interfaces and focused features that help you get real work
            done — faster.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Designed to scale</h3>
          <p className="text-gray-600">
            Start small and grow with confidence. Our tools evolve as your
            business grows.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Founder-first mindset</h3>
          <p className="text-gray-600">
            We build what we wish existed — practical software for real-world
            operators.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-28 text-center bg-gray-50 p-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">
          Building something meaningful?
        </h2>
        <p className="text-gray-600 mb-6">
          Let’s talk about how Gobé Labs can support your journey.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-md hover:opacity-90"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
