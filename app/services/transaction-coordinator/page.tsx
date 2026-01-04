import Link from "next/link";

const BRAND = { blue: "#0B3C8A", teal: "#1FA7A0" };

export default function Page() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <p className="text-sm font-semibold" style={{ color: BRAND.teal }}>
            Services
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Transaction Coordinator Support
          </h1>

          <p className="mt-3 max-w-2xl text-base text-gray-600 sm:mt-4 sm:text-lg">
            Stay compliant, meet deadlines, and keep every deal moving smoothly
            from contract to close.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/book-a-consultation"
              className="w-full rounded-xl px-6 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-95 sm:w-auto"
              style={{
                background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
              }}
            >
              Book a Consultation
            </Link>

            <Link
              href="/pricing/monthly-support"
              className="w-full rounded-xl border px-6 py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-100 sm:w-auto"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* TASKS */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            What we handle for you
          </h2>

          <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2">
            <Task text="Contract-to-close timeline management" />
            <Task text="Compliance and document tracking" />
            <Task text="Escrow / lender / title coordination" />
            <Task text="Client and agent communication updates" />
            <Task text="Deadline reminders and follow-ups" />
            <Task text="Organized transaction files" />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                How this helps your business
              </h2>

              <p className="mt-4 text-sm text-gray-600 sm:text-base">
                Reduce missed steps, improve client experience, and keep your
                pipeline clean and predictable.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <Benefit text="Fewer delays and surprises" />
                <Benefit text="Better client communication" />
                <Benefit text="Improved compliance and documentation" />
                <Benefit text="More time for showings and negotiations" />
              </ul>
            </div>

            <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
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
              Want smoother closings?
            </h2>

            <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base">
              Book a consultation and we’ll recommend the best support plan for
              your transaction volume.
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
      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-900" />
      <span className="text-sm leading-6">{text}</span>
    </li>
  );
}
