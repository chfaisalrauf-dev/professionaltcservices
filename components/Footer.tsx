import Link from "next/link";

const BRAND = {
  blue: "#0B3C8A",
  teal: "#1FA7A0",
};

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* BRAND */}
          <div>
            <p className="text-lg font-semibold" style={{ color: BRAND.blue }}>
              Professional TC Services
            </p>
            <p className="mt-3 text-sm text-gray-600">
              Reliable virtual assistant support for real estate professionals.
            </p>

            <Link
              href="/book-a-consultation"
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold text-white hover:opacity-95 sm:w-auto"
              style={{
                background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
              }}
            >
              Book a Consultation
            </Link>
          </div>

          {/* SERVICES */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Services</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <FooterLink href="/services/real-estate-admin" label="Real Estate Admin" />
              <FooterLink href="/services/transaction-coordinator" label="Transaction Coordinator" />
              <FooterLink href="/services/marketing-assistant" label="Marketing Assistant" />
              <FooterLink href="/services/inside-sales-agent" label="Inside Sales Agent" />
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <p className="text-sm font-semibold text-gray-900">About</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <FooterLink href="/about/our-mission" label="Our Mission" />
              <FooterLink href="/how-it-works" label="How It Works" />
              <FooterLink href="/pricing/monthly-support" label="Monthly Support" />
              <FooterLink href="/about/contact" label="Contact" />
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Contact</p>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p className="break-words">Email: faisal@professionaltcservices.com</p>
              <p>Phone: +1-408-708-2802</p>
              <p>Mon–Fri, 8am–8pm</p>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 border-t pt-6 text-sm text-gray-500">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Professional TC Services. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="hover:text-gray-900">
        {label}
      </Link>
    </li>
  );
}
