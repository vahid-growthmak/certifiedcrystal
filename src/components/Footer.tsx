import { PhoneIcon, CertificateIcon } from "@/components/icons";
import { TOP_NAV } from "@/lib/nav";

const HELP_LINKS = [
  { label: "Size & Care Guide", href: "/pages/crystal-care" },
  { label: "Track My Order", href: "/account/orders" },
  { label: "Shipping & Returns", href: "/policies/refund-policy" },
];

const PAYMENTS = ["UPI", "Visa", "Mastercard", "RuPay", "COD"];

const QUICK_LINKS = [
  { label: "About", href: "/pages/about" },
  { label: "Contact Us", href: "/pages/contact" },
  { label: "FAQs", href: "/pages/faq" },
  { label: "Privacy Policy", href: "/pages/privacy-policy" },
  { label: "Return & Refund Policy", href: "/policies/refund-policy" },
  { label: "Shipping Policy", href: "/pages/shipping" },
  { label: "Terms Of Service", href: "/policies/terms-of-service" },
];

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Linkedin", href: "https://linkedin.com" },
];

const linkClass =
  "text-white/80 transition-colors hover:text-gold";

export default function Footer() {
  return (
    <footer className="bg-brand text-white/80">
      <div className="cc-container py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.3fr] lg:gap-8">
          {/* Brand column */}
          <div>
            <span className="inline-flex rounded-md bg-white p-3">
              <img
                src="/img/footer/Certified_Crystal_logo_800.jpg"
                alt="Certified Crystal"
                width={160}
                height={64}
                className="h-14 w-auto"
              />
            </span>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/75">
              Authentic, lab-tested natural crystals — an independent
              certificate with every order.
            </p>

            <address className="mt-6 space-y-3 text-sm not-italic leading-relaxed text-white/75">
              <p>2547/7, Block 35M, Beadonpura, Karol Bagh, New Delhi</p>
              <p>
                UGF-25, JMD Regent Arcade Mall, Near Sikandarpur Metro Station,
                Gurugram
              </p>
            </address>

            <div className="mt-5 space-y-2 text-sm">
              <a
                href="tel:+919810800550"
                className={`inline-flex items-center gap-2 ${linkClass}`}
              >
                <PhoneIcon width={16} height={16} aria-hidden="true" />
                +91 98108-00550
              </a>
              <div>
                <a href="mailto:info@certifiedcrystal.com" className={linkClass}>
                  info@certifiedcrystal.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="mb-4 text-[15px] font-medium text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Catalogue */}
          <nav aria-label="Catalogue">
            <h3 className="mb-4 text-[15px] font-medium text-white">
              Catalogue
            </h3>
            <ul className="space-y-2.5 text-sm">
              {TOP_NAV.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Help */}
          <nav aria-label="Help">
            <h3 className="mb-4 text-[15px] font-medium text-white">Help</h3>
            <ul className="space-y-2.5 text-sm">
              {HELP_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-[15px] font-medium text-white">
              Sign Up to Newsletter
            </h3>
            <p className="text-sm text-white/75">
              Subscribe for store updates and discounts.
            </p>
            <form
              className="mt-4 flex flex-col gap-3 sm:flex-row"
              action="#"
              method="post"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="min-h-[44px] w-full rounded-[30px] border border-white/25 bg-white/10 px-4 text-sm text-white placeholder:text-white/50 focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              />
              <button
                type="submit"
                className="cc-btn shrink-0 border-white bg-white !text-brand hover:!bg-transparent hover:!text-white"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-3 text-xs leading-relaxed text-white/60">
              By entering your e-mail, you accept the terms and conditions and
              the privacy policy.
            </p>

            <div className="mt-6">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Payment + trust badge row */}
      <div className="border-t border-white/15">
        <div className="cc-container flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
          {/* Payment methods */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs text-white/55">We accept</span>
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white/85"
              >
                {p}
              </span>
            ))}
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-white/75">
            <span className="inline-flex items-center gap-1.5">
              <svg
                width={15}
                height={15}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="4" y="10" width="16" height="10" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>
              Secure SSL Checkout
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CertificateIcon width={16} height={16} aria-hidden="true" />
              Lab-Tested &amp; NABL-Certified
            </span>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/15">
        <div className="cc-container flex flex-col gap-3 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl leading-relaxed">
            Authentic, lab-tested natural crystals · independent certificate with
            every order · cleansed, packed and shipped with care across India.
          </p>
          <p className="shrink-0">
            © 2025 Certified Crystal by Admantine Jewels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
