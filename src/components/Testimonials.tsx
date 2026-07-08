"use client";

import { useRef } from "react";
import { StarIcon, ArrowLeft, ArrowRight } from "@/components/icons";

type Testimonial = {
  name: string;
  quote: string;
  product: string;
  href: string;
  img: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Ananya",
    quote: "The cluster is genuine and the purple colour is even richer than the photos.",
    product: "Amethyst Cluster Top Quality",
    href: "/products/amethyst-cluster",
    img: "/img/testimonials/102-353gm-2048x2048.jpg",
  },
  {
    name: "Rohit",
    quote: "Beautifully crafted bracelet, the beads are polished and the banding is stunning.",
    product: "Tiger's Eye Bracelet",
    href: "/products/tigers-eye-bracelet",
    img: "/img/testimonials/TIger-eye-Bracelet-1-675x659.webp",
  },
  {
    name: "Meera",
    quote: "Each pendant feels authentic and the finish is neat. Lovely little set.",
    product: "12 Mix Crystals Pendants Set",
    href: "/products/12-mix-crystals-pendants-set",
    img: "/img/testimonials/12-1-675x675.jpg",
  },
  {
    name: "Karan",
    quote: "The tree is well made and the stones have real, vivid colour. Great craftsmanship.",
    product: "Seven Chakra Big Tree",
    href: "/products/seven-chakra-big-tree",
    img: "/img/testimonials/61-590gm-2048x2048.jpg",
  },
  {
    name: "Priya",
    quote: "Soft blush colour, smooth polish and it arrived in lovely, careful packaging.",
    product: "Rose Quartz",
    href: "/products/rose-quartz",
    img: "/img/testimonials/37-1-1-675x540.jpg",
  },
  {
    name: "Sana",
    quote: "Exactly as pictured, genuine stones and thoughtful packaging. Very happy.",
    product: "Certified Crystal Order",
    href: "/collections/all",
    img: "/img/testimonials/WhatsApp_Image_2026-02-03_at_4.51.17_PM.jpg",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="bg-surface-cream py-16 md:py-20" aria-labelledby="testimonials-heading">
      <div className="cc-container">
        <div className="mb-8 text-center">
          <h2 id="testimonials-heading" className="cc-section-title">
            What People Talk About us
          </h2>
          <p className="mt-3 text-sm text-muted">Individual experiences vary.</p>
        </div>

        <div className="relative">
          <div
            ref={trackRef}
            className="cc-noscroll flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
          >
            {TESTIMONIALS.map((t) => (
              <article
                key={t.name + t.product}
                className="cc-card flex w-[280px] shrink-0 snap-start flex-col overflow-hidden sm:w-[320px]"
                aria-label="Customer testimonial"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={t.img}
                    alt={`${t.product} reviewed by ${t.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-1">
                    <p className="font-medium text-heading">{t.name}</p>
                    <a href={t.href} className="cc-viewall mt-1 text-xs">
                      {t.product}
                    </a>
                  </footer>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-background p-3 text-brand shadow-sm transition hover:bg-brand hover:text-white md:flex"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-line bg-background p-3 text-brand shadow-sm transition hover:bg-brand hover:text-white md:flex"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
