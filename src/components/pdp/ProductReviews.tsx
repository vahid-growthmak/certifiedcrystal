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
    <article className="flex h-full flex-col rounded-[14px] border border-line bg-white p-5">
      <Stars rating={r.rating} size={14} />
      <p className="mt-2.5 text-[15px] font-semibold text-heading">{r.title}</p>
      <p className="mt-1 flex-1 text-[14px] leading-relaxed text-foreground">{r.body}</p>
      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-line pt-3">
        <span className="text-[13.5px] font-semibold text-heading">{r.name}</span>
        {r.verified && (
          <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[10.5px] font-semibold text-brand">
            Verified Buyer
          </span>
        )}
        <span className="ml-auto text-[12px] text-muted">{r.date}</span>
      </div>
    </article>
  );
}

function RatingBars({ reviews }: { reviews: Review[] }) {
  const total = reviews.length;
  // Count reviews at each star, 5 -> 1.
  const counts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => Math.round(r.rating) === star).length,
  }));

  return (
    <div className="flex flex-1 flex-col gap-1.5" aria-label="Rating breakdown">
      {counts.map(({ star, count }) => {
        const pct = total > 0 ? Math.round((count / total) * 100) : 0;
        return (
          <div key={star} className="flex items-center gap-2.5 text-[13px]">
            <span className="flex w-9 shrink-0 items-center gap-0.5 font-medium text-muted">
              {star} <span className="text-gold">★</span>
            </span>
            <span className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
              <span className="block h-full rounded-full bg-brand" style={{ width: `${pct}%` }} />
            </span>
            <span className="w-6 shrink-0 text-right tabular-nums text-muted">{count}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function ProductReviews({ product }: { product: Product }) {
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="scroll-mt-24">
      <h2 id="reviews-heading" className="cc-section-title">
        Customer Reviews
      </h2>

      <div className="mt-5 flex flex-col gap-5 rounded-[16px] border border-line bg-white p-6 md:flex-row md:items-center md:gap-8">
        <div className="flex flex-col items-start gap-1 md:min-w-[180px]">
          <span className="text-[44px] font-bold leading-none text-heading">{product.rating.toFixed(1)}</span>
          <Stars rating={product.rating} size={18} />
          <span className="text-[13px] text-muted">Based on {product.reviewCount} reviews</span>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          {product.reviews.length > 0 && <RatingBars reviews={product.reviews} />}
          <p className="text-[13px] italic text-muted">Individual experiences vary.</p>
          <button type="button" className="cc-btn cc-btn--outline w-fit px-6 py-2.5 text-[14px]">
            Write a review
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {product.reviews.map((r, i) => (
          <ReviewCard key={r.name + i} r={r} />
        ))}
      </div>
    </section>
  );
}
