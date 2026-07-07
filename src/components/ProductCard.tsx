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
    <article className="group flex h-full flex-col overflow-hidden rounded-[14px] border border-line bg-white transition-shadow duration-200 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <div className="relative overflow-hidden rounded-t-[14px]">
        <a href={href} aria-label={title} className="block aspect-square">
          <img
            src={img}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </a>

        {tag && (
          <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            {tag}
          </span>
        )}

        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-brand shadow-sm transition-colors duration-150 hover:bg-brand hover:text-white"
        >
          <HeartIcon width={18} height={18} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-center gap-0.5 text-gold" aria-label="Rated 5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} width={14} height={14} />
          ))}
        </div>

        <a
          href={href}
          className="line-clamp-2 text-[14px] font-medium leading-snug text-heading transition-colors hover:text-brand md:text-[15px]"
        >
          {title}
        </a>

        {(price || compareAt) && (
          <div className="mt-1 flex items-center gap-2">
            {price && <span className="text-[15px] font-bold text-heading">{price}</span>}
            {compareAt && <span className="text-[13px] text-muted line-through">{compareAt}</span>}
          </div>
        )}

        <div className="mt-auto pt-3">
          <button type="button" className="cc-btn w-full">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}
