import QuoteForm from "@/components/QuoteForm";

export default function ContactPage() {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-[3fr,2fr] gap-10">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900 mb-3">
              Contact Cypress Freight
            </h1>
            <p className="text-sm text-slate-600 mb-6 max-w-xl">
              Share your shipment details or general questions and our team will
              respond as soon as possible with clear next steps.
            </p>

            <div className="space-y-3 text-sm text-slate-700 mb-8">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:dispatch@cypressfreight.ca"
                  className="text-emerald-700 hover:underline"
                >
                  dispatch@cypressfreight.ca
                </a>
              </p>

              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a
                  href="tel:+16475402733"
                  className="text-emerald-700 hover:underline"
                >
                  +1 (647) 772-2516
                </a>
              </p>

              <p>
                <span className="font-semibold">Fax:</span>{" "}
                <span className="text-emerald-700">905-709-8148</span>
              </p>

              <p>
                <span className="font-semibold">Location:</span> Ontario, Canada
              </p>
            </div>

            <h2 id="quote" className="text-xl font-semibold text-slate-900 mb-3">
              Request a Freight Quote
            </h2>
            <QuoteForm />
          </div>

          <div className="bg-white border border-slate-100 rounded-xl p-5 text-sm">
            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Service Area
            </h3>
            <p className="text-slate-600 mb-4">
              We provide freight services across Canada and between Canada and
              the United States, focusing on key corridors and major markets.
            </p>

            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Business Hours
            </h3>
            <p className="text-slate-600 mb-4">
              Monday to Friday: 8:00 AM – 5:00 PM (EST) <br />
              After-hours support available for urgent shipments.
            </p>

            <h3 className="text-base font-semibold text-slate-900 mb-2">
              Need ongoing capacity?
            </h3>
            <p className="text-slate-600">
              If you're looking for a consistent carrier or dedicated lanes,
              mention this in your message and we will schedule a call.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
