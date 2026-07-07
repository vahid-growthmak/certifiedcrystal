// Compliant replacement for the live site's celebrity/"energized" banner image.
// Branded gradient + compliant copy + clean crystal renders (no celebrity, no health claim).
export default function OverlayBanner() {
  return (
    <section aria-labelledby="overlay-banner-heading" className="py-12 md:py-16">
      <div className="cc-container">
        <div className="relative h-[300px] w-full overflow-hidden rounded-[16px] md:h-[380px]">
          {/* Branded gradient background */}
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, #5f2b38 0%, #6f3444 42%, #a06a54 78%, #c19a5b 100%)",
            }}
          />

          {/* Decorative clean crystal renders on the right */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 items-end justify-end gap-2 pr-6 md:flex">
            <img src="/img/intentstones/ame1_550.png" alt="" className="h-[65%] w-auto object-contain drop-shadow-2xl" />
            <img src="/img/intentstones/cit3_550.png" alt="" className="h-[80%] w-auto object-contain drop-shadow-2xl" />
            <img src="/img/intentstones/rose_quartz_stones_550.png" alt="" className="h-[55%] w-auto object-contain drop-shadow-2xl" />
          </div>

          {/* Content */}
          <div className="relative flex h-full items-center">
            <div className="max-w-[560px] px-6 md:px-12">
              <p className="mb-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-gold md:mb-3 md:text-[13px]">
                Trust in Every Stone
              </p>
              <h2
                id="overlay-banner-heading"
                className="text-[28px] font-medium leading-tight text-white md:text-[40px]"
              >
                Authentic, Certified, Cleansed
              </h2>
              <p className="mt-3 max-w-[460px] text-[14px] leading-relaxed text-white/85 md:mt-4 md:text-[16px]">
                Natural, lab-tested crystals — each piece hand-finished and sent with an
                independent certificate of authenticity.
              </p>
              <a href="/collections/all" className="cc-btn mt-5 bg-white !text-brand hover:bg-gold hover:!text-white md:mt-7">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
