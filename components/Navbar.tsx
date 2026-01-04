"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const BRAND = {
  blue: "#0B3C8A",
  teal: "#1FA7A0",
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setPricingOpen(false);
    setAboutOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4" onClick={closeAll}>
            <Image
              src="/logo.png"
              alt="Logo"
              width={90}
              height={90}
              priority
              className="h-10 w-10 sm:h-[90px] sm:w-[90px]"
            />
            <span
              className="text-base font-semibold tracking-tight sm:text-xl"
              style={{ color: BRAND.blue }}
            >
              Professional TC Services
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-7 text-[15px] font-medium text-gray-800 lg:flex">
            <Link className="hover:opacity-80" href="/">
              Home
            </Link>

            <HoverDropdown label="Services" open={servicesOpen} setOpen={setServicesOpen} widthClass="w-72">
              <NavItem href="/services/real-estate-admin" label="Real Estate Admin" />
              <NavItem href="/services/transaction-coordinator" label="Transaction Coordinator" />
              <NavItem href="/services/marketing-assistant" label="Marketing Assistant" />
              <NavItem href="/services/inside-sales-agent" label="Inside Sales Agent" />
            </HoverDropdown>

            <Link className="hover:opacity-80" href="/how-it-works">
              How It Works
            </Link>

            <HoverDropdown label="Pricing" open={pricingOpen} setOpen={setPricingOpen} widthClass="w-72">
              <NavItem href="/pricing/monthly-support" label="Monthly Support" />
              <NavItem href="/pricing/project-based" label="Project-Based" />
            </HoverDropdown>

            <HoverDropdown label="About" open={aboutOpen} setOpen={setAboutOpen} widthClass="w-60">
              <NavItem href="/about/our-mission" label="Our Mission" />
              <NavItem href="/about/contact" label="Contact" />
            </HoverDropdown>

            <Link
              href="/book-a-consultation"
              className="rounded-xl px-5 py-2.5 text-white shadow-md transition hover:opacity-95"
              style={{ background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})` }}
            >
              Book a Consultation
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-gray-200 p-2.5 text-gray-800 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </nav>
      </header>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <>
          {/* BACKDROP */}
          <div
            className="fixed inset-0 z-50 bg-black/30"
            onClick={closeAll}
          />

          {/* DRAWER */}
          <div className="fixed right-0 top-0 z-[60] h-full w-[86%] max-w-sm overflow-y-auto bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">Menu</span>
              <button
                className="rounded-xl border border-gray-200 p-2.5"
                onClick={closeAll}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-2 text-[15px] font-medium text-gray-800">
              <MobileLink href="/" onClick={closeAll}>Home</MobileLink>

              <MobileDropdown label="Services" open={servicesOpen} setOpen={setServicesOpen}>
                <MobileLink href="/services/real-estate-admin" onClick={closeAll}>Real Estate Admin</MobileLink>
                <MobileLink href="/services/transaction-coordinator" onClick={closeAll}>Transaction Coordinator</MobileLink>
                <MobileLink href="/services/marketing-assistant" onClick={closeAll}>Marketing Assistant</MobileLink>
                <MobileLink href="/services/inside-sales-agent" onClick={closeAll}>Inside Sales Agent</MobileLink>
              </MobileDropdown>

              <MobileLink href="/how-it-works" onClick={closeAll}>How It Works</MobileLink>

              <MobileDropdown label="Pricing" open={pricingOpen} setOpen={setPricingOpen}>
                <MobileLink href="/pricing/monthly-support" onClick={closeAll}>Monthly Support</MobileLink>
                <MobileLink href="/pricing/project-based" onClick={closeAll}>Project-Based</MobileLink>
              </MobileDropdown>

              <MobileDropdown label="About" open={aboutOpen} setOpen={setAboutOpen}>
                <MobileLink href="/about/our-mission" onClick={closeAll}>Our Mission</MobileLink>
                <MobileLink href="/about/contact" onClick={closeAll}>Contact</MobileLink>
              </MobileDropdown>

              <Link
                href="/book-a-consultation"
                onClick={closeAll}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-md"
                style={{ background: `linear-gradient(135deg, ${BRAND.teal}, ${BRAND.blue})` }}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

/* ---------- Desktop dropdown ---------- */

function HoverDropdown({
  label,
  open,
  setOpen,
  widthClass,
  children,
}: any) {
  const closeTimer = useRef<any>(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 hover:opacity-80">
        {label} <span className="text-xs">▼</span>
      </button>

      {open && (
        <div className={`absolute left-0 top-full mt-4 ${widthClass} rounded-2xl bg-white p-2 shadow-xl`}>
          {children}
        </div>
      )}
    </div>
  );
}

function NavItem({ href, label }: any) {
  return (
    <Link href={href} className="block rounded-xl px-4 py-2.5 text-sm hover:bg-gray-50">
      {label}
    </Link>
  );
}

/* ---------- Mobile helpers ---------- */

function MobileLink({ href, onClick, children }: any) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-xl px-3 py-3 hover:bg-gray-50"
    >
      {children}
    </Link>
  );
}

function MobileDropdown({ label, open, setOpen, children }: any) {
  return (
    <div className="rounded-xl border border-gray-100">
      <button
        className="flex w-full items-center justify-between px-3 py-3 hover:bg-gray-50"
        onClick={() => setOpen(!open)}
      >
        {label}
        <span className="text-xs">{open ? "▲" : "▼"}</span>
      </button>
      {open && <div className="space-y-1 px-2 pb-2">{children}</div>}
    </div>
  );
}
