"use client";

import { StarIcon } from "@/components/icons";
import type { Product, Review } from "@/lib/products";

function Stars({ rating, size = 15 }: { rating: number; size?: number }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-gold" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} width={size} height={size} className={i < Math.round(rating) ? "" : "opacity-30"} />
      ))}
    </span>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <article className="border-b border-line py-5 last:border-0">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[14px] font-semibold text-heading">{r.name}</span>
        {r.verified && (
          <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[11px] font-semibold text-brand">
            Verified Buyer
          </span>
        )}
        <span className="text-[12.5px] text-muted">{r.date}</span>
      </div>
      <div className="mt-1.5">
        <Stars rating={r.rating} size={14} />
      </div>
      <p className="mt-2 text-[15px] font-semibold text-heading">{r.title}</p>
      <p className="mt-1 text-[14px] leading-relaxed text-foreground">{r.body}</p>
    </article>
  );
}

export default function ProductReviews({ product }: { product: Product }) {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="scroll-mt-24">
      <h2 id="reviews-heading" className="cc-section-title !text-left">
        Customer Reviews
      </h2>

      <div className="mt-5 flex flex-col gap-5 rounded-[16px] border border-line bg-white p-6 md:flex-row md:items-center md:gap-8">
        <div className="flex flex-col items-start gap-1 md:min-w-[180px]">
          <span className="text-[44px] font-bold leading-none text-heading">{product.rating.toFixed(1)}</span>
          <Stars rating={product.rating} size={18} />
          <span className="text-[13px] text-muted">Based on {product.reviewCount} reviews</span>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <p className="text-[13px] italic text-muted">Individual experiences vary.</p>
          <button type="button" className="cc-btn cc-btn--outline w-fit px-6 py-2.5 text-[14px]">
            Write a review
          </button>
        </div>
      </div>

      <div className="mt-2">
        {product.reviews.map((r, i) => (
          <ReviewCard key={r.name + i} r={r} />
        ))}
      </div>
    </section>
  );
}
