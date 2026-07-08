import { CertificateIcon, ShieldIcon, GuidanceIcon } from "@/components/icons";

const WHY_US = [
  { Icon: CertificateIcon, label: "Lab-Tested & Certified" },
  { Icon: ShieldIcon, label: "100% Natural Stones" },
  { Icon: GuidanceIcon, label: "Cleansed with Care" },
];

export default function BrandStory() {
  return (
    <section
      aria-labelledby="brand-story-heading"
      className="bg-surface-cream"
    >
      <div className="cc-container py-14 md:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="cc-fade-up order-1">
            <div className="overflow-hidden rounded-[8px] border border-line bg-white">
              <img
                src="/img/watchbuy/RSQRTZOSP-FX-2_1024.png"
                alt="Natural certified crystal, hand-selected and cleansed"
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="order-2">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
              Our Promise
            </p>
            <h2
              id="brand-story-heading"
              className="mt-3 max-w-md text-[28px] leading-tight md:text-[35px]"
            >
              Real crystals, certified real.
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground">
              Every stone is hand-selected from natural sources, then tested by a
              NABL-accredited independent lab — so what you receive is exactly
              what it claims to be. Each order ships with its own certificate of
              authenticity.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-foreground">
              We cleanse and pack every piece with care, and you&rsquo;re always
              welcome to see them in person at our physical stores in Delhi and
              Gurugram.
            </p>

            {/* Why Us row */}
            <ul className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-6">
              {WHY_US.map(({ Icon, label }) => (
                <li
                  key={label}
                  className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-center sm:gap-3 sm:text-left"
                >
                  <span className="text-brand">
                    <Icon width={34} height={34} aria-hidden="true" />
                  </span>
                  <span className="text-[13px] font-medium leading-snug text-heading">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <a href="/pages/about" className="cc-btn cc-btn--outline">
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
