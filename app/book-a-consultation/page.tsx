import Script from "next/script";
import Link from "next/link";

const BRAND = { blue: "#0B3C8A", teal: "#1FA7A0" };

export default function Page() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <p className="text-sm font-semibold" style={{ color: BRAND.teal }}>
            Book a Consultation
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Schedule your consultation
          </h1>

          <p className="mt-3 max-w-2xl text-base text-gray-600 sm:mt-4 sm:text-lg">
            Choose a time that works for you. We’ll discuss your workflow, what
            you want to delegate, and the best support option for your business.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/pricing/monthly-support"
              className="w-full rounded-xl border px-6 py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-100 sm:w-auto"
            >
              View Pricing
            </Link>

            <Link
              href="/services/real-estate-admin"
              className="w-full rounded-xl border px-6 py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-100 sm:w-auto"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* CALENDLY */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-start lg:gap-10">
            {/* LEFT INFO */}
            <div className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
              <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                What we’ll cover
              </h2>

              <ul className="mt-5 space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-900" />
                  Your current workload and pain points
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-900" />
                  Tasks you want to delegate first
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-900" />
                  Which service fits you best
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-900" />
                  Pricing and next steps
                </li>
              </ul>

              <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
                No pressure. Just a clear conversation.
              </div>
            </div>

            {/* RIGHT CALENDAR */}
            <div className="rounded-2xl border bg-white p-3 shadow-sm sm:p-4 lg:col-span-2">
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="afterInteractive"
              />

              {/* Responsive height without styled-jsx */}
              <div
                className="calendly-inline-widget w-full h-[650px] sm:h-[700px]"
                data-url="https://calendly.com/faisal-professionaltcservices/30min"
                style={{ minWidth: "0" }}
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
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div
            className="rounded-2xl px-5 py-8 text-white sm:px-8 sm:py-10"
            style={{
              background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
            }}
          >
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Want help choosing the right plan?
            </h2>

            <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base">
              Check pricing options, then book your call when you’re ready.
            </p>

            <div className="mt-6">
              <Link
                href="/pricing/part-time-full-time-cost"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 sm:w-auto"
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
