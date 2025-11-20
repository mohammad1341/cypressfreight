// app/services/page.tsx
export default function ServicesPage() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h1 className="text-3xl font-semibold text-slate-900 mb-2">
          Freight & Logistics Services
        </h1>
        <p className="text-sm text-slate-600 mb-8 max-w-2xl">
          Cypress Freight offers a full range of over-the-road transportation
          solutions. Whether you ship daily, weekly or occasionally, we tailor
          our service to your freight, lanes and schedule.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div className="rounded-xl bg-white border border-slate-100 p-5">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Full Truckload (FTL)
            </h2>
            <p className="text-slate-600 mb-2">
              Dedicated trucks for your freight only – ideal for high-volume or
              time-sensitive shipments.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>Dry van and reefer options</li>
              <li>Regular and expedited service</li>
              <li>Route planning and scheduling support</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white border border-slate-100 p-5">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Less-than-Truckload (LTL)
            </h2>
            <p className="text-slate-600 mb-2">
              Flexible, cost-effective solution for smaller shipments that
              don&apos;t require a full trailer.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>Consolidated linehaul</li>
              <li>Palletized and boxed freight</li>
              <li>Clear communication on status</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white border border-slate-100 p-5">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Cross-border Canada–U.S.
            </h2>
            <p className="text-slate-600 mb-2">
              Reliable capacity between major Canadian and U.S. markets with
              support on customs and documentation.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>Northbound and southbound lanes</li>
              <li>Partner customs brokers available</li>
              <li>Compliance-focused operations</li>
            </ul>
          </div>

          <div className="rounded-xl bg-white border border-slate-100 p-5">
            <h2 className="text-lg font-semibold text-slate-900 mb-2">
              Dedicated & Contract Lanes
            </h2>
            <p className="text-slate-600 mb-2">
              Ongoing capacity for shippers who need a reliable partner on key
              lanes every week.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>Lane analysis and pricing</li>
              <li>Multi-stop and round-trip options</li>
              <li>Priority communication and support</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
