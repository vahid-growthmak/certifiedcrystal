import { ChevronRight } from "@/components/icons";
import type { Product } from "@/lib/products";

export default function Breadcrumb({ product }: { product: Product }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted">
      <a href="/" className="hover:text-brand">
        Home
      </a>
      <ChevronRight width={14} height={14} className="text-muted" />
      <a href={product.categoryHref} className="hover:text-brand">
        {product.category}
      </a>
      <ChevronRight width={14} height={14} className="text-muted" />
      <span className="truncate text-heading">{product.title}</span>
    </nav>
  );
}
