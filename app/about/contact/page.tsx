"use client";

import Link from "next/link";
import { useState } from "react";

const BRAND = { blue: "#0B3C8A", teal: "#1FA7A0" };

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export default function Page() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "Real Estate Admin",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data?.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "Real Estate Admin",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

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
                  <p className="mt-1">+1(408) 708-2802</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Hours</p>
                  <p className="mt-1">Mon–Fri, 9:00am–6:00pm</p>
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

            {/* FORM (CONNECTED) */}
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-900">
                Send a message
              </h2>

              <p className="mt-2 text-sm text-gray-600">
                We usually respond within 1 business day.
              </p>

              {status === "sent" && (
                <div className="mt-5 rounded-xl border bg-green-50 p-4 text-sm text-green-800">
                  Message sent ✅ We’ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="mt-5 rounded-xl border bg-red-50 p-4 text-sm text-red-800">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                <Field
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  required
                />
                <Field
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@email.com"
                  required
                  type="email"
                />
                <Field
                  label="Phone (optional)"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="+1..."
                />

                <div>
                  <label className="text-sm font-semibold text-gray-900">
                    What support do you need?
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
                    style={{ borderColor: "#e5e5e5" }}
                  >
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
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
                    style={{ borderColor: "#e5e5e5" }}
                    rows={6}
                    placeholder="Tell us about your business and what you want to delegate..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 disabled:opacity-60"
                  style={{
                    background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
                  }}
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
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

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: any;
  placeholder: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-900">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-2 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:ring-2"
        style={{ borderColor: "#e5e5e5" }}
        placeholder={placeholder}
      />
    </div>
  );
}
