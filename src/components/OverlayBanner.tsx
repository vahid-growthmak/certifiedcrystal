// Compliant, fully-responsive branded banner (replaces the live site's celebrity/"energized" image).
// Circular crystal crops hide the source tiles' baked-in labels; height is fluid for mobile/tablet.
const STONES = [
  { src: "/img/intentstones/ame1_550.png", alt: "Amethyst crystal" },
  { src: "/img/intentstones/cit3_550.png", alt: "Citrine crystals" },
  { src: "/img/intentstones/rose_quartz_stones_550.png", alt: "Rose quartz stones" },
];

export default function OverlayBanner() {
  return (
    <section aria-labelledby="overlay-banner-heading" className="py-8 md:py-14">
      <div className="cc-container">
        <div
          className="relative overflow-hidden rounded-[16px]"
          style={{
            background:
              "linear-gradient(105deg, #5f2b38 0%, #6f3444 42%, #a06a54 78%, #c19a5b 100%)",
          }}
        >
          <div className="flex flex-col items-start gap-6 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between md:px-12 md:py-12">
            {/* Text */}
            <div className="max-w-[560px]">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold sm:text-[13px]">
                Trust in Every Stone
              </p>
              <h2
                id="overlay-banner-heading"
                className="text-[26px] font-medium leading-tight text-white sm:text-[32px] md:text-[40px]"
              >
                Authentic, Certified, Cleansed
              </h2>
              <p className="mt-3 max-w-[460px] text-[14px] leading-relaxed text-white/85 md:text-[16px]">
                Natural, lab-tested crystals — each piece hand-finished and sent with an
                independent certificate of authenticity.
              </p>
              <a
                href="/collections/all"
                className="cc-btn cc-btn--light mt-6 w-full sm:w-auto"
              >
                Shop Now
              </a>
            </div>

            {/* Decorative crystals — circular crop hides source labels. Hidden on mobile. */}
            <div
              aria-hidden="true"
              className="hidden shrink-0 items-center gap-3 md:flex lg:gap-4"
            >
              {STONES.map((s, i) => (
                <span
                  key={s.src}
                  className={[
                    "block overflow-hidden rounded-full ring-2 ring-white/30 shadow-xl",
                    i === 1 ? "h-28 w-28 lg:h-36 lg:w-36" : "h-20 w-20 lg:h-28 lg:w-28",
                  ].join(" ")}
                >
                  <img
                    src={s.src}
                    alt=""
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "center 70%" }}
                  />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
