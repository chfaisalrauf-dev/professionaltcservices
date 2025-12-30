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
            Transaction Coordinator Support
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Stay compliant, meet deadlines, and keep every deal moving smoothly from contract to close.
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
            <Task text="Contract-to-close timeline management" />
            <Task text="Compliance and document tracking" />
            <Task text="Escrow / lender / title coordination" />
            <Task text="Client and agent communication updates" />
            <Task text="Deadline reminders and follow-ups" />
            <Task text="Organized transaction files" />
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
                Reduce missed steps, improve client experience, and keep your pipeline clean and predictable.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <Benefit text="Fewer delays and surprises" />
                <Benefit text="Better client communication" />
                <Benefit text="Improved compliance and documentation" />
                <Benefit text="More time for showings and negotiations" />
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-gray-900">Ideal for:</p>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>• Agents handling multiple transactions</li>
                <li>• Teams needing consistent processes</li>
                <li>• High-volume closings</li>
                <li>• Anyone wanting smoother contract-to-close</li>
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
              Want smoother closings?
            </h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Book a consultation and we’ll recommend the best support plan for your transaction volume.
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
