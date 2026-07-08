import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIcons from "@/components/TrustIcons";
import CrystalsForEveryJourney from "@/components/CrystalsForEveryJourney";
import FeaturedProducts from "@/components/FeaturedProducts";
import StonesForEveryIntention from "@/components/StonesForEveryIntention";
import QuizBanner from "@/components/QuizBanner";
import GiftingOccasion from "@/components/GiftingOccasion";
import WatchAndBuy from "@/components/WatchAndBuy";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import HelpCenter from "@/components/HelpCenter";
import WellnessNote from "@/components/WellnessNote";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

// Homepage flow modelled on astrotalk.store:
// hero → USP strip → shop-by categories → bestsellers → shop-by-purpose → discovery
// → gifting → why-us → shoppable + reviews → one-promise CTA → FAQ.
export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        {/* 1. Hero slideshow */}
        <Hero />
        {/* 2. USP / benefits strip */}
        <TrustIcons />
        {/* 3. Shop by Crystals */}
        <CrystalsForEveryJourney />
        {/* 4. Best Sellers */}
        <FeaturedProducts />
        {/* 5. Shop by Purpose */}
        <StonesForEveryIntention />
        {/* 6. Guided discovery — crystal quiz */}
        <QuizBanner />
        {/* 7. Gifting / combos */}
        <GiftingOccasion />
        {/* 8. Shoppable video (kept in the reviews area) */}
        <WatchAndBuy />
        {/* 10. What our customers say */}
        <Testimonials />
        {/* 11. One Purchase. One Promise. */}
        <CtaBand
          heading="Ready to find your crystal?"
          sub="Genuine, lab-tested natural stones — each with an independent certificate of authenticity."
          cta="Shop the Collection"
          href="/collections/all"
        />
        {/* 12. FAQs */}
        <HelpCenter />
        {/* Compliance note */}
        <WellnessNote />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
