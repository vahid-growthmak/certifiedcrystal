"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "@/components/icons";

const SLIDES = [
  { src: "/img/hero/certified_crystal_2_1920.jpg", alt: "Certified Crystal collection banner" },
  { src: "/img/hero/C1_1_1_1920.png", alt: "Certified crystals showcase" },
  { src: "/img/hero/banner_1_10.png", alt: "Featured crystal offer" },
  { src: "/img/hero/banner_03.png", alt: "Crystal bracelets and stones" },
  { src: "/img/hero/v2_1920.png", alt: "Shop certified crystals" },
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
      <div className="relative h-[260px] w-full md:h-[475px]">
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

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/40 text-heading backdrop-blur-sm transition hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand md:left-6 md:h-12 md:w-12"
        >
          <ArrowLeft width={20} height={20} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/40 text-heading backdrop-blur-sm transition hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand md:right-6 md:h-12 md:w-12"
        >
          <ArrowRight width={20} height={20} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 md:bottom-5">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                i === index ? "w-7 bg-brand" : "w-2.5 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
