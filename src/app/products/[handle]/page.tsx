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
import { formatPrice } from "@/components/pdp/format";

import { getProduct, getAllHandles, getRelated } from "@/lib/products";

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

  const related = getRelated(product.related);

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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <ProductGallery images={product.images} title={product.title} />
            <BuyBox product={product} />
          </div>
        </div>

        {/* Tabs */}
        <div className="cc-container mt-12">
          <ProductTabs product={product} />
        </div>

        {/* Certification */}
        <div className="cc-container mt-10">
          <CertificationModule />
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="cc-container mt-14">
            <h2 className="cc-section-title !text-left">Complete the Set</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
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

        {/* Reviews */}
        <div className="cc-container mt-14">
          <ProductReviews product={product} />
        </div>

        {/* FAQ */}
        <div className="cc-container mt-14 mb-16">
          <ProductFAQ faq={product.faq} />
        </div>
      </main>

      <Footer />
      <FloatingButtons />
      <StickyBuyBar product={product} />
    </>
  );
}
