"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, ChevronRight } from "@/components/icons";

export type CarouselItem = {
  label: string;
  href: string;
  img: string;
};

type CategoryCarouselProps = {
  title: string;
  viewAllHref: string;
  items: CarouselItem[];
};

export default function CategoryCarousel({
  title,
  viewAllHref,
  items,
}: CategoryCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * Math.round(track.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section aria-labelledby={`cat-${slug(title)}`} className="py-12 md:py-16">
      <div className="cc-container">
        {/* Heading row: centered title with View All on the right */}
        <div className="relative mb-8 flex items-center justify-center md:mb-10">
          <h2 id={`cat-${slug(title)}`} className="cc-section-title">
            {title}
          </h2>
          <a
            href={viewAllHref}
            className="cc-viewall absolute right-0 top-1/2 -translate-y-1/2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <span className="hidden sm:inline">View All</span>
            <ChevronRight width={16} height={16} className="shrink-0" />
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left arrow */}
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByAmount(-1)}
            className="absolute -left-2 top-[45%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-brand shadow-sm transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:flex lg:-left-4"
          >
            <ArrowLeft width={18} height={18} />
          </button>

          <div
            ref={trackRef}
            className="cc-noscroll flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-2 md:gap-7"
          >
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex shrink-0 snap-start flex-col items-center gap-3 focus-visible:outline-none"
              >
                <div className="relative h-[110px] w-[110px] overflow-hidden rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] ring-1 ring-line transition-all duration-200 group-hover:scale-105 group-hover:shadow-[0_8px_22px_rgba(0,0,0,0.12)] group-hover:ring-2 group-hover:ring-gold group-focus-visible:ring-2 group-focus-visible:ring-brand md:h-[150px] md:w-[150px]">
                  <img
                    src={item.img}
                    alt={item.label}
                    width={150}
                    height={150}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="max-w-[120px] text-center text-[14px] font-medium leading-snug text-heading transition-colors duration-200 group-hover:text-brand md:max-w-[150px] md:text-[15px]">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Right arrow */}
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByAmount(1)}
            className="absolute -right-2 top-[45%] z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-brand shadow-sm transition-all duration-200 hover:border-brand hover:bg-brand hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:flex lg:-right-4"
          >
            <ArrowRight width={18} height={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
