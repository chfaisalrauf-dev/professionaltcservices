import Link from "next/link";

const BRAND = { blue: "#0B3C8A", teal: "#1FA7A0" };

export default function Page() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <p className="text-sm font-semibold" style={{ color: BRAND.teal }}>
            About Us
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Our Mission
          </h1>

          <p className="mt-3 max-w-2xl text-base text-gray-600 sm:mt-4 sm:text-lg">
            We help real estate professionals reclaim their time with reliable
            virtual assistant support — so they can focus on clients, listings,
            and growth.
          </p>

          <div className="mt-6 sm:mt-8">
            <Link
              href="/book-a-consultation"
              className="inline-flex w-full items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 sm:w-auto"
              style={{
                background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
              }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* STORY + VALUES */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Built for agents who need leverage
              </h2>

              <p className="mt-4 text-sm text-gray-600 sm:text-base">
                Real estate is fast paced. When you’re doing admin, marketing,
                and follow-up alone, growth becomes difficult. Our mission is to
                provide practical, consistent support that makes your business
                easier to run.
              </p>

              <p className="mt-4 text-sm text-gray-600 sm:text-base">
                We focus on clear communication, repeatable processes, and
                dependable execution.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
              <p className="text-sm font-semibold text-gray-900">
                Our core values
              </p>
              <div className="mt-5 grid gap-4">
                <Value
                  title="Reliability"
                  desc="We do what we say we will — consistently."
                />
                <Value
                  title="Clarity"
                  desc="Clear priorities, communication, and accountability."
                />
                <Value
                  title="Process"
                  desc="SOPs and systems so work is repeatable and trackable."
                />
                <Value
                  title="Growth"
                  desc="Support that helps you scale without burnout."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            What this means for you
          </h2>

          <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
            <Card title="More time back" desc="Spend more hours on clients and closings." />
            <Card title="Less stress" desc="Reduce missed steps and daily overload." />
            <Card title="Better consistency" desc="Systems that keep tasks moving every week." />
            <Card title="Lower overhead" desc="Scale without hiring in-house staff." />
            <Card title="Cleaner operations" desc="Organized docs, tasks, and communication." />
            <Card title="More momentum" desc="Support that helps you grow steadily." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div
            className="rounded-2xl px-5 py-8 text-white sm:px-8 sm:py-10"
            style={{
              background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
            }}
          >
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Want support that actually feels reliable?
            </h2>

            <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base">
              Book a consultation and we’ll recommend the best plan for your
              workflow.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/book-a-consultation"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 sm:w-auto"
              >
                Book a Consultation
              </Link>

              <Link
                href="/services/real-estate-admin"
                className="inline-flex w-full items-center justify-center rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 sm:w-auto"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Value({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-gray-50 p-5">
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
    </div>
  );
}
