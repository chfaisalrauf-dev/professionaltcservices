import Link from "next/link";

const BRAND = { blue: "#0B3C8A", teal: "#1FA7A0" };

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="text-sm font-semibold" style={{ color: BRAND.teal }}>
            Contact
          </p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900">
            Get in touch
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            Tell us what kind of support you need and we’ll get back to you.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* CONTACT DETAILS */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Contact details
              </h2>

              <div className="mt-5 space-y-4 text-sm text-gray-700">
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="mt-1">faisal@professionaltcservices.com</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="mt-1">+1-408-708-2802</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Hours</p>
                  <p className="mt-1">Mon–Fri, 8:00am–8:00pm</p>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
                Prefer to schedule a call?
                <div className="mt-3">
                  <Link
                    href="/book-a-consultation"
                    className="inline-flex rounded-xl px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
                    }}
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>

            {/* FORM (UI only for now) */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Send a message
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                (Form submission will be connected later.)
              </p>

              <form className="mt-6 space-y-4">
                <Field label="Full Name" placeholder="Your name" />
                <Field label="Email" placeholder="you@email.com" />
                <Field label="Phone (optional)" placeholder="+1..." />

                <div>
                  <label className="text-sm font-semibold text-gray-900">
                    What support do you need?
                  </label>
                  <select className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
                          style={{ borderColor: "#e5e5e5" }}>
                    <option>Real Estate Admin</option>
                    <option>Transaction Coordinator</option>
                    <option>Marketing Assistant</option>
                    <option>Inside Sales Agent</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-900">
                    Message
                  </label>
                  <textarea
                    className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
                    style={{ borderColor: "#e5e5e5" }}
                    rows={6}
                    placeholder="Tell us about your business and what you want to delegate..."
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
                  }}
                >
                  Send Message
                </button>

                <p className="text-xs text-gray-500">
                  By submitting, you agree to be contacted about your request.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-900">{label}</label>
      <input
        className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
        style={{ borderColor: "#e5e5e5" }}
        placeholder={placeholder}
      />
    </div>
  );
}
