import Image from "next/image";
import Link from "next/link";

const BRAND = {
  blue: "#0B3C8A",
  teal: "#1FA7A0",
};

export default function Home() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[520px] w-full sm:h-[560px] md:h-[650px]">
          <Image
            src="/hero.png"
            alt="Hero"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />
        </div>

        <div className="absolute inset-0">
          <div className="mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6">
            <div className="max-w-2xl text-white">
              <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs sm:text-sm">
                Virtual Assistant Services for Real Estate
              </p>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl md:text-6xl">
                Get more listings. Close more deals. We handle the busywork.
              </h1>

              <p className="mt-4 text-base text-white/85 sm:mt-5 sm:text-lg">
                Admin support, transaction coordination, marketing assistance,
                and ISA follow-up — built for agents and teams.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <Link
                  href="/book-a-consultation"
                  className="w-full rounded-xl bg-white px-5 py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  Book a Consultation
                </Link>
                <Link
                  href="/pricing/monthly-support"
                  className="w-full rounded-xl border border-white/40 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-white/10 sm:w-auto"
                >
                  See Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold" style={{ color: BRAND.teal }}>
                Services
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                The support you need to scale — without hiring in-house
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
                Choose one service or combine multiple to create a complete
                support system.
              </p>
            </div>

            <Link
              href="/services/real-estate-admin"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 hover:opacity-80"
              style={{ color: BRAND.blue }}
            >
              View all services <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:mt-10 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Real Estate Admin"
              desc="Inbox, calendar, CRM updates, documents, and day-to-day support."
              href="/services/real-estate-admin"
              badge="Most popular"
              accent={BRAND.blue}
            />
            <ServiceCard
              title="Transaction Coordinator"
              desc="Deadlines, compliance, communication, and smooth closings."
              href="/services/transaction-coordinator"
              accent={BRAND.teal}
            />
            <ServiceCard
              title="Marketing Assistant"
              desc="Social posts, email campaigns, listing marketing, and content support."
              href="/services/marketing-assistant"
              accent={BRAND.blue}
            />
            <ServiceCard
              title="Inside Sales Agent"
              desc="Lead follow-up, nurture, appointment setting, and pipeline support."
              href="/services/inside-sales-agent"
              accent={BRAND.teal}
            />
          </div>

          <div className="mt-8 grid gap-4 rounded-2xl border bg-gray-50 p-5 sm:mt-10 sm:p-6 md:grid-cols-3">
            <MiniHighlight
              title="Fast onboarding"
              desc="Start in days, not weeks — with simple systems."
            />
            <MiniHighlight
              title="Real estate focused"
              desc="Workflows built for listings, buyers, and transactions."
            />
            <MiniHighlight
              title="Flexible plans"
              desc="Part-time, full-time, or project-based support."
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div>
              <p className="text-sm font-semibold" style={{ color: BRAND.blue }}>
                How it works
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                Simple setup. Clear communication. Consistent execution.
              </h2>
              <p className="mt-3 text-sm text-gray-600 sm:text-base">
                We’ll match you with the right support level, organize your
                workflow, and keep tasks moving so you can focus on revenue
                work.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/how-it-works"
                  className="w-full rounded-xl border bg-white px-5 py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-100 sm:w-auto"
                >
                  See the full process
                </Link>
                <Link
                  href="/book-a-consultation"
                  className="w-full rounded-xl px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:opacity-95 sm:w-auto"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
                  }}
                >
                  Book a Consultation
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <StepCard
                n="01"
                title="Discovery call"
                desc="We learn your goals, workload, tools, and priorities."
                accent={BRAND.teal}
              />
              <StepCard
                n="02"
                title="Onboarding & setup"
                desc="We align systems, SOPs, communication, and task flow."
                accent={BRAND.blue}
              />
              <StepCard
                n="03"
                title="Execute & optimize"
                desc="We deliver daily/weekly support and improve continuously."
                accent={BRAND.teal}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div className="rounded-2xl border bg-gradient-to-b from-white to-gray-50 p-5 shadow-sm sm:p-6">
              <p className="text-sm font-semibold text-gray-900">What you get</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Stat
                  title="Reliable delivery"
                  desc="Clear expectations & consistent follow-through."
                />
                <Stat
                  title="Real estate trained"
                  desc="Workflows built for agents and teams."
                />
                <Stat
                  title="Lower overhead"
                  desc="Scale support without in-house costs."
                />
                <Stat
                  title="More time back"
                  desc="Focus on clients, not admin tasks."
                />
              </div>

              <div className="mt-6 rounded-xl bg-white p-4 text-sm text-gray-700">
                <span className="font-semibold" style={{ color: BRAND.blue }}>
                  Tip:
                </span>{" "}
                We turn your best practices into simple SOPs so tasks get done
                the same way every time.
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold" style={{ color: BRAND.teal }}>
                Why choose us
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                Built for busy agents who want leverage
              </h2>
              <p className="mt-3 text-sm text-gray-600 sm:text-base">
                You’ll get dependable support, a repeatable task system, and a
                team that helps you stay organized and consistent — even when
                business gets busy.
              </p>

              <ul className="mt-6 space-y-3 text-gray-700">
                <Bullet text="Dedicated support tailored to your workflow" />
                <Bullet text="Clear communication and accountability" />
                <Bullet text="Flexible plans that grow with your business" />
                <Bullet text="Process-driven execution (less chaos, fewer missed steps)" />
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
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
                  href="/services/real-estate-admin"
                  className="w-full rounded-xl border px-6 py-3 text-center text-sm font-semibold text-gray-900 hover:bg-gray-50 sm:w-auto"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
          <div
            className="rounded-2xl px-5 py-8 text-white shadow-sm sm:px-8 sm:py-10"
            style={{
              background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
            }}
          >
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Ready to delegate and grow?
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/85 sm:text-base">
              Book a consultation and we’ll recommend the best plan for your
              workflow and goals.
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

function ServiceCard({
  title,
  desc,
  href,
  badge,
  accent,
}: {
  title: string;
  desc: string;
  href: string;
  badge?: string;
  accent: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div
        className="absolute left-0 top-0 h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
      />

      {badge && (
        <div className="absolute right-4 top-4 rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
          {badge}
        </div>
      )}

      <div
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white"
        style={{ background: accent }}
        aria-hidden
      >
        <span className="h-2.5 w-2.5 rounded-full bg-white" />
      </div>

      <p className="mt-4 text-base font-semibold text-gray-900">{title}</p>
      <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>

      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
        <span
          className="underline underline-offset-4 group-hover:opacity-80"
          style={{ color: BRAND.blue }}
        >
          Learn more
        </span>
        <span className="transition group-hover:translate-x-0.5" aria-hidden>
          →
        </span>
      </div>
    </Link>
  );
}

function MiniHighlight({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white p-5">
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="mt-2 text-sm leading-6 text-gray-600">{desc}</p>
    </div>
  );
}

function StepCard({
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
          style={{ background: `linear-gradient(135deg, ${accent}, transparent)` }}
          aria-hidden
        />
      </div>
    </div>
  );
}

function Stat({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white p-4">
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="mt-1 text-sm text-gray-600">{desc}</p>
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
