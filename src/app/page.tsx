import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIcons from "@/components/TrustIcons";
import CrystalsForEveryJourney from "@/components/CrystalsForEveryJourney";
import FeaturedProducts from "@/components/FeaturedProducts";
import QuizBanner from "@/components/QuizBanner";
import OverlayBanner from "@/components/OverlayBanner";
import BrandStory from "@/components/BrandStory";
import WatchAndBuy from "@/components/WatchAndBuy";
import GiftingOccasion from "@/components/GiftingOccasion";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import WellnessNote from "@/components/WellnessNote";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

// Homepage modelled on gorjana.com's lean, editorial, CTA-led journey:
// hero (with CTAs) → benefits → category tiles → bestsellers → editorial blocks
// → brand/story → shoppable → gifting → reviews. Compliance note kept near the footer.
export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        {/* 1. Hero with clear CTAs */}
        <Hero />
        {/* 2. Benefits / trust strip */}
        <TrustIcons />
        {/* 3. Shop by category tiles */}
        <CrystalsForEveryJourney />
        {/* 4. Bestsellers */}
        <FeaturedProducts />
        {/* 5. Guided discovery — crystal personality quiz */}
        <QuizBanner />
        {/* 6. Editorial value-prop block + CTA */}
        <OverlayBanner />
        {/* 6. Brand story (also our Delhi & Gurugram stores) */}
        <BrandStory />
        {/* 7. Shoppable */}
        <WatchAndBuy />
        {/* 8. Gifting */}
        <GiftingOccasion />
        {/* 9. Reviews */}
        <Testimonials />
        {/* 10. Closing CTA */}
        <CtaBand
          heading="Ready to find your crystal?"
          sub="Genuine, lab-tested natural stones — each with an independent certificate of authenticity."
          cta="Shop the Collection"
          href="/collections/all"
        />
        {/* Compliance note */}
        <WellnessNote />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
