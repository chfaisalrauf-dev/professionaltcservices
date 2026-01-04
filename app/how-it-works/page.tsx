import Link from "next/link";

const BRAND = { blue: "#0B3C8A", teal: "#1FA7A0" };

export default function Page() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <p className="text-sm font-semibold" style={{ color: BRAND.teal }}>
            How It Works
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            A simple process to start delegating fast
          </h1>

          <p className="mt-3 max-w-2xl text-base text-gray-600 sm:mt-4 sm:text-lg">
            We learn your workflow, match the right support, and implement a
            system that keeps tasks moving consistently.
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

      {/* STEPS */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            The 4-step onboarding
          </h2>

          <div className="mt-8 grid gap-5 lg:mt-10 lg:grid-cols-2">
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
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                What we need from you
              </h2>

              <p className="mt-4 text-sm text-gray-600 sm:text-base">
                You don’t need complicated systems. Just a few basics so we can
                move quickly.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <Bullet text="Your preferred communication channel (email / WhatsApp / Slack)" />
                <Bullet text="Access to tools you already use (CRM, email, docs)" />
                <Bullet text="A list of tasks you want to delegate first" />
                <Bullet text="Weekly priorities and feedback" />
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
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
                We’ll adapt to your workflow and introduce structure where
                needed.
              </div>
            </div>
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
              Ready to start delegating?
            </h2>

            <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base">
              Book a consultation and we’ll recommend the best support plan for
              your workflow and goals.
            </p>

            <div className="mt-6">
              <Link
                href="/book-a-consultation"
                className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 sm:w-auto"
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
    <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
      <div className="flex items-start justify-between gap-4 sm:gap-6">
        <div>
          <p className="text-sm font-semibold text-gray-500">{n}</p>
          <p className="mt-2 text-lg font-semibold text-gray-900">{title}</p>
          <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
        </div>

        <div
          className="h-10 w-10 shrink-0 rounded-xl"
          style={{
            background: `linear-gradient(135deg, ${accent}, transparent)`,
          }}
          aria-hidden
        />
      </div>
    </div>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-900" />
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
