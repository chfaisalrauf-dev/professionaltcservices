import Link from "next/link";

const BRAND = { blue: "#0B3C8A", teal: "#1FA7A0" };

export default function Page() {
  return (
    <main>
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold" style={{ color: BRAND.teal }}>
            Services
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900">
            Inside Sales Agent (ISA) Support
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Improve response time, nurture leads, and book more appointments with consistent follow-up support.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/book-a-consultation"
              className="rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              style={{ background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})` }}
            >
              Book a Consultation
            </Link>

            <Link
              href="/pricing/part-time-full-time-cost"
              className="rounded-xl border px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            What we handle for you
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Task text="Speed-to-lead response and initial outreach" />
            <Task text="Lead nurturing via calls, SMS, and email" />
            <Task text="Appointment setting and calendar coordination" />
            <Task text="CRM updates, tagging, notes, and pipeline hygiene" />
            <Task text="Follow-up sequences and reactivation" />
            <Task text="Weekly activity and outcome reporting" />
          </div>
        </div>
      </section>

      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
                How this helps your business
              </h2>

              <p className="mt-4 text-gray-600">
                Most leads don’t convert because follow-up stops too early. ISA support keeps your pipeline warm
                and helps turn conversations into appointments.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <Benefit text="Faster response time (higher conversion)" />
                <Benefit text="More appointments booked weekly" />
                <Benefit text="Better CRM accuracy and visibility" />
                <Benefit text="Consistent nurture for long-term leads" />
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-gray-900">Ideal for:</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>• Agents running paid ads</li>
                <li>• Teams with high lead volume</li>
                <li>• Agents who want more appointments</li>
                <li>• Anyone needing consistent follow-up</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div
            className="rounded-2xl px-8 py-10 text-white"
            style={{ background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})` }}
          >
            <h2 className="text-3xl font-semibold tracking-tight">
              Want more appointments on your calendar?
            </h2>

            <p className="mt-3 max-w-2xl text-white/85">
              Book a consultation and we’ll recommend the right ISA support plan based on your lead flow.
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

function Task({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-gray-800">{text}</p>
    </div>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-2 w-2 rounded-full bg-gray-900" />
      <span className="text-sm leading-6">{text}</span>
    </li>
  );
}
