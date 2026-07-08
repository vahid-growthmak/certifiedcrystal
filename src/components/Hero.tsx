"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "@/components/icons";

const CTAS = [
  { label: "Shop Bestsellers", href: "/collections/all", variant: "ghost" as const },
  { label: "New Arrivals", href: "/collections/new-arrivals", variant: "solid" as const },
];

// Product-led hero banners only (award-ceremony photos removed).
const SLIDES = [
  { src: "/img/hero/banner_03.png", alt: "Natural crystals — amethyst, quartz, citrine and rose quartz" },
  { src: "/img/hero/banner_1_10.png", alt: "Crystal bracelet, ring and orgone pyramid" },
  { src: "/img/hero/v2_1920.png", alt: "Pearl necklace on display" },
];

const INTERVAL = 4500;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <section
      aria-label="Featured banners"
      className="relative w-full overflow-hidden bg-surface-cream"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[380px] w-full sm:h-[430px] md:h-[475px]">
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={475}
            loading={i === 0 ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={i === index ? undefined : true}
          />
        ))}

        {/* Legibility scrim for CTAs */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-2/3 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

        {/* Persistent CTAs — Hongo: ghost/outline white primary with trailing arrow */}
        <div className="absolute inset-x-0 bottom-12 z-10 flex flex-wrap items-center justify-center gap-3 px-4 md:bottom-16">
          {CTAS.map((c) =>
            c.variant === "ghost" ? (
              <a
                key={c.href}
                href={c.href}
                className="group inline-flex min-h-[46px] items-center gap-2 rounded-[4px] border border-white bg-transparent px-7 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-white hover:text-heading"
              >
                {c.label}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            ) : (
              <a
                key={c.href}
                href={c.href}
                className="inline-flex min-h-[46px] items-center rounded-[4px] border border-white bg-white px-7 text-[15px] font-medium text-heading transition-colors duration-200 hover:bg-gold hover:border-gold"
              >
                {c.label}
              </a>
            )
          )}
        </div>

        {/* Arrows — thin outlined circles */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-transparent text-white transition-colors duration-200 hover:bg-white hover:text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:left-6"
        >
          <ArrowLeft width={18} height={18} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-transparent text-white transition-colors duration-200 hover:bg-white hover:text-heading focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-6"
        >
          <ArrowRight width={18} height={18} />
        </button>

        {/* Dots — minimal */}
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 md:bottom-6">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className={`h-[3px] rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                i === index ? "w-8 bg-white" : "w-4 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
