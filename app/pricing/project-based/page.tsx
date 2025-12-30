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
            Project-Based Support
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Perfect for short-term work, one-time setups, overflow tasks, or specific projects.
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
              href="/pricing/monthly-support"
              className="rounded-xl border px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
            >
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            Flexible project options
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Choose a package that fits your needs. We’ll confirm scope and timeline during your consultation.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <PackageCard
              title="Starter"
              subtitle="Small one-time tasks"
              accent={BRAND.teal}
              items={[
                "Templates + simple setup tasks",
                "One-time admin catch-up",
                "Short marketing updates",
                "Quick CRM cleanup",
              ]}
            />

            <PackageCard
              title="Growth"
              subtitle="Medium project support"
              accent={BRAND.blue}
              highlight
              items={[
                "Workflow setup + SOPs",
                "Listing/transaction process help",
                "Campaign build + scheduling",
                "More involved task coverage",
              ]}
            />

            <PackageCard
              title="Custom"
              subtitle="Large projects & ongoing overflow"
              accent={`linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`}
              gradient
              items={[
                "Custom scope and timeline",
                "Dedicated project management",
                "Multi-service support mix",
                "Best for teams with big projects",
              ]}
            />
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
            Common project requests
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Example text="CRM cleanup and tagging" />
            <Example text="Email newsletter setup" />
            <Example text="Listing marketing checklist + workflow" />
            <Example text="Backlog admin catch-up" />
            <Example text="Transaction file organization" />
            <Example text="Social media content calendar" />
          </div>

          <div className="mt-10 rounded-2xl border bg-white p-6 text-sm text-gray-700 shadow-sm">
            Not sure if your request fits? Book a consultation and we’ll confirm scope and timeline.
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
              Have a project you want done fast?
            </h2>

            <p className="mt-3 max-w-2xl text-white/85">
              Book a consultation and we’ll recommend the right project package.
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

function PackageCard({
  title,
  subtitle,
  items,
  accent,
  highlight = false,
  gradient = false,
}: {
  title: string;
  subtitle: string;
  items: string[];
  accent: string;
  highlight?: boolean;
  gradient?: boolean;
}) {
  return (
    <div className="relative rounded-2xl border bg-white p-7 shadow-sm">
      <div
        className="absolute left-0 top-0 h-1.5 w-full rounded-t-2xl"
        style={{
          background: gradient ? accent : `linear-gradient(90deg, ${accent}, transparent)`,
        }}
      />

      {highlight && (
        <div className="absolute right-5 top-5 rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
          Popular
        </div>
      )}

      <p className="text-lg font-semibold text-gray-900">{title}</p>
      <p className="mt-1 text-sm text-gray-600">{subtitle}</p>

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
          style={{
            background: gradient ? `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})` : (accent as any),
          }}
        >
          Get started
        </Link>
      </div>
    </div>
  );
}

function Example({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-gray-800">{text}</p>
    </div>
  );
}
