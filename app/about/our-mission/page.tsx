import Link from "next/link";

const BRAND = { blue: "#0B3C8A", teal: "#1FA7A0" };

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold" style={{ color: BRAND.teal }}>
            About Us
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900">
            Our Mission
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            We help real estate professionals reclaim their time with reliable virtual assistant support —
            so they can focus on clients, listings, and growth.
          </p>

          <div className="mt-8">
            <Link
              href="/book-a-consultation"
              className="rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              style={{ background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})` }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* STORY + VALUES */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                Built for agents who need leverage
              </h2>

              <p className="mt-4 text-gray-600">
                Real estate is fast paced. When you’re doing admin, marketing, and follow-up alone,
                growth becomes difficult. Our mission is to provide practical, consistent support
                that makes your business easier to run.
              </p>

              <p className="mt-4 text-gray-600">
                We focus on clear communication, repeatable processes, and dependable execution.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-gray-900">Our core values</p>
              <div className="mt-5 grid gap-4">
                <Value title="Reliability" desc="We do what we say we will — consistently." />
                <Value title="Clarity" desc="Clear priorities, communication, and accountability." />
                <Value title="Process" desc="SOPs and systems so work is repeatable and trackable." />
                <Value title="Growth" desc="Support that helps you scale without burnout." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            What this means for you
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div
            className="rounded-2xl px-8 py-10 text-white"
            style={{ background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})` }}
          >
            <h2 className="text-3xl font-semibold tracking-tight">
              Want support that actually feels reliable?
            </h2>

            <p className="mt-3 max-w-2xl text-white/85">
              Book a consultation and we’ll recommend the best plan for your workflow.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/book-a-consultation"
                className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services/real-estate-admin"
                className="inline-flex rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
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
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
    </div>
  );
}
