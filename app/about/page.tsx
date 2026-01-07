export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">About Gobé Labs</h1>
      <p className="text-gray-600 max-w-3xl">
        Gobé Labs builds simple, modern tools for service-based businesses—so
        small teams can manage work, clients, and operations with clarity.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-2">What we’re building</h2>
          <p className="text-gray-600">
            A modular platform that helps businesses stay organized: lightweight
            CRM, workflow support, and dashboards that keep operations moving.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Why it matters</h2>
          <p className="text-gray-600">
            Most tools are too complex or too expensive. Gobé Labs focuses on
            practical software that’s easy to adopt and powerful as you grow.
          </p>
        </div>
      </div>
    </section>
  );
}
