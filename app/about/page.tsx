// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-3xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-semibold text-slate-900 mb-3">
          About Cypress Freight
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          Cypress Freight is a Canada-based freight company focused on reliable,
          transparent and relationship-driven service. We support small and
          mid-sized businesses with flexible capacity and clear communication
          from quote to delivery.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 mb-2">
          Our Mission
        </h2>
        <p className="text-sm text-slate-600 mb-4">
          To make over-the-road transportation simple and predictable for our
          customers by combining experienced planning with responsive customer
          service.
        </p>

        <h2 className="text-lg font-semibold text-slate-900 mb-2">
          Our Values
        </h2>
        <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 mb-4">
          <li>
            <strong>Reliability:</strong> We treat every load as time-sensitive.
          </li>
          <li>
            <strong>Transparency:</strong> Clear communication on rates and
            shipment status.
          </li>
          <li>
            <strong>Safety:</strong> Safety-first mindset for drivers, freight
            and communities.
          </li>
          <li>
            <strong>Partnership:</strong> Long-term relationships, not just
            one-time moves.
          </li>
        </ul>

        <p className="text-sm text-slate-600">
          Whether you&apos;re shipping a single pallet or multiple truckloads
          every week, Cypress Freight is ready to design a solution that fits
          your operation.
        </p>
      </section>
    </div>
  );
}
