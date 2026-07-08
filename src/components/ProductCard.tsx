import { HeartIcon, StarIcon } from "@/components/icons";

type ProductCardProps = {
  title: string;
  href: string;
  img: string;
  price?: string;
  compareAt?: string;
  badge?: string;
};

export default function ProductCard({ title, href, img, price, compareAt, badge }: ProductCardProps) {
  const tag = badge ?? (compareAt ? "Sale" : undefined);

  return (
    <article className="cc-card group flex h-full flex-col p-2">
      {/* Image area — inset, rounded, light-grey surface */}
      <div className="relative overflow-hidden rounded-[10px] bg-surface-cream">
        <a href={href} aria-label={title} className="block aspect-square">
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        </a>

        {tag && (
          <span className="absolute left-2.5 top-2.5 rounded-sm bg-green px-2 py-[3px] text-[10.5px] font-medium uppercase tracking-wide text-white">
            {tag}
          </span>
        )}

        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-2.5 top-2.5 grid h-9 w-9 place-items-center rounded-full bg-white text-heading opacity-0 shadow-sm transition-all duration-200 hover:bg-brand hover:text-white group-hover:opacity-100 group-focus-within:opacity-100"
        >
          <HeartIcon width={17} height={17} />
        </button>

        {/* Quick add — dark bar revealed on hover (Hongo) */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0">
          <button
            type="button"
            className="flex w-full items-center justify-center bg-brand py-3 text-[13px] font-medium uppercase tracking-wide text-white transition-colors hover:bg-gold hover:text-heading"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col gap-1.5 px-1.5 pb-1.5 pt-3">
        <div className="flex items-center gap-0.5 text-gold" aria-label="Rated 5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} width={13} height={13} />
          ))}
        </div>

        <a
          href={href}
          className="line-clamp-2 text-[14px] font-medium leading-snug text-heading transition-colors hover:text-gold-dark md:text-[15px]"
        >
          {title}
        </a>

        {(price || compareAt) && (
          <div className="mt-0.5 flex items-center gap-2">
            {price && <span className="text-[15px] font-semibold text-heading">{price}</span>}
            {compareAt && <span className="text-[13px] text-muted line-through">{compareAt}</span>}
          </div>
        )}
      </div>
    </article>
  );
}
