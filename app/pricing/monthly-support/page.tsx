import Link from "next/link";

const BRAND = { blue: "#0B3C8A", teal: "#1FA7A0" };

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold" style={{ color: BRAND.teal }}>
            Pricing
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900">
            Monthly Support
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Ongoing monthly support with full Transaction Coordination coverage.
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

      {/* TWO OPTIONS */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            Choose your monthly plan
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Both plans include complete Transaction Coordination coverage from
            contract to close.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* OPTION 1 */}
            <PlanCard
              badge="Most chosen"
              title="Monthly Support (TC Included)"
              price="$800"
              period="per month"
              accent={BRAND.blue}
              items={[
                "Full Transaction Coordination (Contract to Close)",
                "Deadline & timeline management",
                "Document review + compliance tracking",
                "Coordination with title / escrow / lender",
                "Client + agent communication updates",
                "File organization + transaction checklists",
                "Weekly pipeline updates (as needed)",
              ]}
            />

            {/* OPTION 2 */}
            <PlanCard
              badge="Best value"
              title="6-Month Commitment"
              price="$600"
              period="per month (when paid for 6 months)"
              accent={BRAND.teal}
              highlight
              items={[
                "Everything in Monthly Support (TC Included)",
                "Priority workflow optimization",
                "Long-term consistency + process improvements",
                "Best for agents/teams with steady transaction volume",
              ]}
            />
          </div>

          <div className="mt-8 rounded-2xl border bg-gray-50 p-6 text-sm text-gray-700">
            Want to confirm what’s included for your market/workflow? Book a consultation and we’ll map
            your exact TC process and coverage.
          </div>
        </div>
      </section>

      {/* “EVERY STEP OF TC” SECTION */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            Every step of Transaction Coordination is covered
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Feature title="Open escrow & setup" desc="Create timelines, collect documents, confirm key dates." />
            <Feature title="Document compliance" desc="Track required forms, signatures, and file completeness." />
            <Feature title="Deadline management" desc="Reminders, follow-ups, and milestone tracking." />
            <Feature title="Parties coordination" desc="Work with lender, escrow/title, agents, and vendors." />
            <Feature title="Client communication" desc="Status updates and next-step guidance throughout." />
            <Feature title="Closing support" desc="Final checks, file delivery, and smooth closing coordination." />
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
              Ready to get full TC coverage monthly?
            </h2>

            <p className="mt-3 max-w-2xl text-white/85">
              Book a consultation and we’ll confirm your workflow, tools, and start plan.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/book-a-consultation"
                className="inline-flex rounded-xl bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
              >
                Book a Consultation
              </Link>

              <Link
                href="/pricing/project-based"
                className="inline-flex rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                View Project Based
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PlanCard({
  badge,
  title,
  price,
  period,
  items,
  accent,
  highlight = false,
}: {
  badge?: string;
  title: string;
  price: string;
  period: string;
  items: string[];
  accent: string;
  highlight?: boolean;
}) {
  return (
    <div className="relative rounded-2xl border bg-white p-7 shadow-sm">
      <div
        className="absolute left-0 top-0 h-1.5 w-full rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />

      {badge && (
        <div className="absolute right-5 top-5 rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
          {badge}
        </div>
      )}

      {highlight && (
        <div
          className="absolute left-5 top-1 rounded-full px-3 py-1 text-xs font-semibold text-white"
          style={{ background: accent }}
        >
          Save more
        </div>
      )}

      <p className="text-lg font-semibold text-gray-900">{title}</p>

      <div className="mt-5 rounded-xl border bg-gray-50 px-4 py-3">
        <p className="text-3xl font-semibold text-gray-900">
          {price}
          <span className="ml-2 text-sm font-medium text-gray-600">
            / {period}
          </span>
        </p>
      </div>

      <ul className="mt-6 space-y-3 text-sm text-gray-700">
        {items.map((t) => (
          <li key={t} className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-gray-900" />
            <span className="leading-6">{t}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <Link
          href="/book-a-consultation"
          className="inline-flex rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
          style={{ background: accent }}
        >
          Get started
        </Link>
      </div>
    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
    </div>
  );
}
