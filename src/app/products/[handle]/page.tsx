import type { Metadata } from "next";
import { notFound } from "next/navigation";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ProductCard from "@/components/ProductCard";

import Breadcrumb from "@/components/pdp/Breadcrumb";
import ProductGallery from "@/components/pdp/ProductGallery";
import BuyBox from "@/components/pdp/BuyBox";
import ProductTabs from "@/components/pdp/ProductTabs";
import CertificationModule from "@/components/pdp/CertificationModule";
import ProductReviews from "@/components/pdp/ProductReviews";
import ProductFAQ from "@/components/pdp/ProductFAQ";
import StickyBuyBar from "@/components/pdp/StickyBuyBar";
import RecentlyViewed from "@/components/pdp/RecentlyViewed";
import CtaBand from "@/components/CtaBand";
import { formatPrice } from "@/components/pdp/format";

import { getProduct, getAllHandles, getCrossSell } from "@/lib/products";

type PageProps = { params: Promise<{ handle: string }> };

export function generateStaticParams() {
  return getAllHandles().map((handle) => ({ handle }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) return { title: "Product not found – Certified Crystal" };
  return {
    title: `${product.title} – Certified Crystal`,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { handle } = await params;
  const product = getProduct(handle);
  if (!product) notFound();

  const related = getCrossSell(product, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.images,
    description: product.tagline,
    sku: product.details.sku,
    brand: { "@type": "Brand", name: "Certified Crystal" },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "INR",
      availability:
        product.stock > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  return (
    <>
      <TopBar />
      <Header />

      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="cc-container py-4">
          <Breadcrumb product={product} />
        </div>

        {/* Above the fold: gallery + buy box */}
        <div className="cc-container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8 md:items-start lg:gap-12">
            <ProductGallery images={product.images} title={product.title} onSale={!!product.compareAt} />
            <BuyBox product={product} />
          </div>
        </div>

        {/* Tabs (Description · Details · Care · Size & Fit) */}
        <div className="cc-container mt-16 md:mt-20">
          <ProductTabs product={product} />
        </div>

        {/* Certification */}
        <div className="cc-container mt-16 md:mt-20">
          <CertificationModule />
        </div>

        {/* Reviews */}
        <div className="cc-container mt-16 md:mt-20">
          <ProductReviews product={product} />
        </div>

        {/* Complete the Set (cross-sell) */}
        {related.length > 0 && (
          <div className="cc-container mt-16 md:mt-20">
            <h2 className="cc-section-title">Complete the Set</h2>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard
                  key={p.handle}
                  title={p.title}
                  href={`/products/${p.handle}`}
                  img={p.images[0]}
                  price={formatPrice(p.price)}
                  compareAt={p.compareAt ? formatPrice(p.compareAt) : undefined}
                />
              ))}
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="cc-container mt-16 md:mt-20">
          <ProductFAQ faq={product.faq} />
        </div>

        {/* Recently viewed */}
        <div className="cc-container mt-16 md:mt-20">
          <RecentlyViewed currentHandle={product.handle} />
        </div>

        {/* Final CTA */}
        <CtaBand
          heading="Find the crystal that’s right for you"
          sub="Every piece is a natural stone, lab-tested and sent with an independent certificate of authenticity."
          cta="Shop the Collection"
          href="/collections/all"
        />
      </main>

      <Footer />
      <FloatingButtons />
      <StickyBuyBar product={product} />
    </>
  );
}
