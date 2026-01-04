import Link from "next/link";

const BRAND = { blue: "#0B3C8A", teal: "#1FA7A0" };

export default function Page() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <p className="text-sm font-semibold" style={{ color: BRAND.teal }}>
            Pricing
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Project-Based Support
          </h1>

          <p className="mt-3 max-w-2xl text-base text-gray-600 sm:mt-4 sm:text-lg">
            Perfect for short-term work, one-time setups, overflow tasks, or
            specific projects.
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
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section>
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Flexible project options
          </h2>

          <p className="mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
            Choose a package that fits your needs. We’ll confirm scope and
            timeline during your consultation.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:mt-10 lg:grid-cols-3">
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
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Common project requests
          </h2>

          <div className="mt-6 grid gap-4 md:mt-8 md:grid-cols-2 lg:grid-cols-3">
            <Example text="CRM cleanup and tagging" />
            <Example text="Email newsletter setup" />
            <Example text="Listing marketing checklist + workflow" />
            <Example text="Backlog admin catch-up" />
            <Example text="Transaction file organization" />
            <Example text="Social media content calendar" />
          </div>

          <div className="mt-8 rounded-2xl border bg-white p-5 text-sm text-gray-700 shadow-sm sm:mt-10 sm:p-6">
            Not sure if your request fits? Book a consultation and we’ll confirm
            scope and timeline.
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
              Have a project you want done fast?
            </h2>

            <p className="mt-3 max-w-2xl text-sm text-white/85 sm:text-base">
              Book a consultation and we’ll recommend the right project package.
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
    <div className="relative rounded-2xl border bg-white p-6 shadow-sm sm:p-7">
      <div
        className="absolute left-0 top-0 h-1.5 w-full rounded-t-2xl"
        style={{
          background: gradient
            ? accent
            : `linear-gradient(90deg, ${accent}, transparent)`,
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
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gray-900" />
            <span className="leading-6">{t}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <Link
          href="/book-a-consultation"
          className="inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 sm:w-auto"
          style={{
            background: gradient
              ? `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`
              : (accent as any),
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
