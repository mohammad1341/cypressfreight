// app/page.tsx
import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";

export default function HomePage() {
  return (
    <div>
      {/* HERO + فرم سریع */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300 mb-3">
              Freight & Logistics
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              Reliable Freight Solutions<br />Across North America.
            </h1>
            <p className="text-sm md:text-base text-slate-200 mb-6 max-w-lg">
              Cypress Freight provides fast, secure and cost-effective shipping
              services for businesses of all sizes – from LTL and full
              truckload to cross-border freight between Canada and the U.S.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact#quote"
                className="inline-flex rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
              >
                Request a Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex rounded-full border border-slate-500/70 px-5 py-2.5 text-sm font-medium text-slate-50 hover:bg-slate-800/60 transition-colors"
              >
                View Services
              </Link>
            </div>
            <div className="mt-6 text-xs text-slate-300 flex flex-wrap gap-4">
              <span>• On-time delivery</span>
              <span>• Cross-border specialists</span>
              <span>• Real-time communication</span>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 p-4 md:p-5">
            <h2 className="text-base md:text-lg font-semibold mb-2">
              Quick Quote Request
            </h2>
            <p className="text-xs text-slate-200 mb-4">
              Share a few shipment details and our team will provide a custom
              rate as soon as possible.
            </p>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* خلاصه خدمات */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Freight services built for your business.
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                From local lanes to long-haul cross-border routes, Cypress
                Freight delivers flexible and transparent solutions for shippers
                across Canada and the U.S.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden md:inline-flex text-sm font-medium text-emerald-700 hover:text-emerald-800"
            >
              See all services →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="rounded-xl bg-white border border-slate-100 p-4">
              <h3 className="font-semibold text-slate-900 mb-1">
                Full Truckload (FTL)
              </h3>
              <p className="text-slate-600">
                Dedicated capacity for high-volume shipments with predictable
                transit times and route planning optimized for your lanes.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-slate-100 p-4">
              <h3 className="font-semibold text-slate-900 mb-1">
                Less-than-Truckload (LTL)
              </h3>
              <p className="text-slate-600">
                Cost-effective consolidation for smaller loads while keeping you
                informed at every step of the journey.
              </p>
            </div>
            <div className="rounded-xl bg-white border border-slate-100 p-4">
              <h3 className="font-semibold text-slate-900 mb-1">
                Cross-border Canada–U.S.
              </h3>
              <p className="text-slate-600">
                Seamless cross-border freight with customs coordination and
                compliant documentation handled by experienced partners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

