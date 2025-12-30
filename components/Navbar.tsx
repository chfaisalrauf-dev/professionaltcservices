"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const BRAND = {
  blue: "#0B3C8A",
  teal: "#1FA7A0",
};

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.png" alt="Logo" width={90} height={90} priority />
          <span
            className="text-xl font-semibold tracking-tight"
            style={{ color: BRAND.blue }}
          >
            Professional TC Services
          </span>
        </Link>

        {/* NAV LINKS */}
        <div className="flex items-center gap-7 text-[15px] font-medium text-gray-800">
          <Link className="hover:opacity-80" href="/">
            Home
          </Link>

          {/* SERVICES */}
          <HoverDropdown
            label="Services"
            open={servicesOpen}
            setOpen={setServicesOpen}
            widthClass="w-72"
          >
            <NavItem href="/services/real-estate-admin" label="Real Estate Admin" />
            <NavItem href="/services/transaction-coordinator" label="Transaction Coordinator" />
            <NavItem href="/services/marketing-assistant" label="Marketing Assistant" />
            <NavItem href="/services/inside-sales-agent" label="Inside Sales Agent" />
          </HoverDropdown>

          <Link className="hover:opacity-80" href="/how-it-works">
            How It Works
          </Link>

          {/* PRICING */}
          <HoverDropdown
            label="Pricing"
            open={pricingOpen}
            setOpen={setPricingOpen}
            widthClass="w-72"
          >
            <NavItem href="/pricing/monthly-support" label="Monthly Support" />
            <NavItem href="/pricing/project-based" label="Project-Based" />
          </HoverDropdown>

          {/* ABOUT */}
          <HoverDropdown
            label="About"
            open={aboutOpen}
            setOpen={setAboutOpen}
            widthClass="w-60"
          >
            <NavItem href="/about/our-mission" label="Our Mission" />
            <NavItem href="/about/contact" label="Contact" />
          </HoverDropdown>

          {/* CTA */}
          <Link
            href="/book-a-consultation"
            className="rounded-xl px-5 py-2.5 text-white shadow-md transition hover:opacity-95"
            style={{
              background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})`,
            }}
          >
            Book a Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}

/* ---------- Dropdown that does NOT disappear ---------- */

function HoverDropdown({
  label,
  open,
  setOpen,
  widthClass,
  children,
}: {
  label: string;
  open: boolean;
  setOpen: (v: boolean) => void;
  widthClass: string;
  children: React.ReactNode;
}) {
  // Small delay prevents “mouse gap” close when moving into menu
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 180);
  };

  return (
    <div
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <button
        type="button"
        className="flex items-center gap-1 hover:opacity-80"
        onClick={() => setOpen(!open)}
      >
        {label} <span className="text-xs">▼</span>
      </button>

      {/* Invisible hover bridge to prevent flicker */}
      <div
        className="absolute left-0 top-full h-4 w-full"
        onMouseEnter={openNow}
      />

      {open && (
        <div
          className={`absolute left-0 top-full mt-4 ${widthClass} rounded-2xl bg-white p-2 shadow-xl`}
          onMouseEnter={openNow}
          onMouseLeave={closeSoon}
        >
          {children}
        </div>
      )}
    </div>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block rounded-xl px-4 py-2.5 text-sm text-gray-800 hover:bg-gray-50"
    >
      {label}
    </Link>
  );
}
