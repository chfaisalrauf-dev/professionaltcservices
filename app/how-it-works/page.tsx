import Link from "next/link";

const BRAND = { blue: "#0B3C8A", teal: "#1FA7A0" };

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold" style={{ color: BRAND.teal }}>
            How It Works
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900">
            A simple process to start delegating fast
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            We learn your workflow, match the right support, and implement a system that keeps tasks moving
            consistently.
          </p>

          <div className="mt-8">
            <Link
              href="/book-a-consultation"
              className="rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              style={{
                background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
              }}
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            The 4-step onboarding
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Step
              n="01"
              title="Discovery call"
              desc="We learn your goals, current workload, tools, and the tasks you want off your plate."
              accent={BRAND.teal}
            />
            <Step
              n="02"
              title="Match & plan"
              desc="We recommend the best support level and outline a task plan based on your priorities."
              accent={BRAND.blue}
            />
            <Step
              n="03"
              title="Onboarding & setup"
              desc="We align communication, SOPs, shared tools, and task tracking so work stays organized."
              accent={BRAND.teal}
            />
            <Step
              n="04"
              title="Execute & optimize"
              desc="Your VA team starts delivering and improves your workflow week by week."
              accent={BRAND.blue}
            />
          </div>
        </div>
      </section>

      {/* WHAT YOU NEED */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                What we need from you
              </h2>

              <p className="mt-4 text-gray-600">
                You don’t need complicated systems. Just a few basics so we can move quickly.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <Bullet text="Your preferred communication channel (email / WhatsApp / Slack)" />
                <Bullet text="Access to tools you already use (CRM, email, docs)" />
                <Bullet text="A list of tasks you want to delegate first" />
                <Bullet text="Weekly priorities and feedback" />
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-gray-900">Common tools</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Tag text="Google Workspace" />
                <Tag text="Microsoft 365" />
                <Tag text="DocuSign" />
                <Tag text="CRMs" />
                <Tag text="Trello / Asana" />
                <Tag text="ZipForms" />
              </div>

              <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
                We’ll adapt to your workflow and introduce structure where needed.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div
            className="rounded-2xl px-8 py-10 text-white"
            style={{
              background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
            }}
          >
            <h2 className="text-3xl font-semibold tracking-tight">
              Ready to start delegating?
            </h2>

            <p className="mt-3 max-w-2xl text-white/85">
              Book a consultation and we’ll recommend the best support plan for your workflow and goals.
            </p>

            <div className="mt-6">
              <Link
                href="/book-a-consultation"
                className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Step({
  n,
  title,
  desc,
  accent,
}: {
  n: string;
  title: string;
  desc: string;
  accent: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-gray-500">{n}</p>
          <p className="mt-2 text-lg font-semibold text-gray-900">{title}</p>
          <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
        </div>
        <div
          className="h-10 w-10 rounded-xl"
          style={{ background: `linear-gradient(135deg, ${accent}, transparent)` }}
          aria-hidden
        />
      </div>
    </div>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-gray-900" />
      <span className="text-sm leading-6">{text}</span>
    </li>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <div className="rounded-xl border bg-white px-4 py-2 text-sm text-gray-700">
      {text}
    </div>
  );
}
