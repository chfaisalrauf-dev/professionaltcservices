import Script from "next/script";
import Link from "next/link";

const BRAND = { blue: "#0B3C8A", teal: "#1FA7A0" };

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold" style={{ color: BRAND.teal }}>
            Book a Consultation
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900">
            Schedule your consultation
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Choose a time that works for you. We’ll discuss your workflow, what you want to delegate,
            and the best support option for your business.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/pricing/part-time-full-time-cost"
              className="rounded-xl border px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            >
              View Pricing
            </Link>

            <Link
              href="/services/real-estate-admin"
              className="rounded-xl border px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* CALENDLY */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
            {/* LEFT INFO */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                What we’ll cover
              </h2>

              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gray-900" />
                  Your current workload and pain points
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gray-900" />
                  Tasks you want to delegate first
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gray-900" />
                  Which service fits you best
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-gray-900" />
                  Pricing and next steps
                </li>
              </ul>

              <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
                No pressure. Just a clear conversation.
              </div>
            </div>

            {/* RIGHT CALENDAR */}
            <div className="lg:col-span-2 rounded-2xl border bg-white p-4 shadow-sm">
              {/* Calendly script */}
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
              />

              {/* Calendly widget */}
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/faisal-professionaltcservices/30min"
                style={{ minWidth: "320px", height: "700px" }}
              />

              <p className="mt-4 text-xs text-gray-500">
                If the calendar doesn’t load, refresh the page once.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div
            className="rounded-2xl px-8 py-10 text-white"
            style={{
              background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
            }}
          >
            <h2 className="text-3xl font-semibold tracking-tight">
              Want help choosing the right plan?
            </h2>

            <p className="mt-3 max-w-2xl text-white/85">
              Check pricing options, then book your call when you’re ready.
            </p>

            <div className="mt-6">
              <Link
                href="/pricing/part-time-full-time-cost"
                className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
              >
                Explore Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
