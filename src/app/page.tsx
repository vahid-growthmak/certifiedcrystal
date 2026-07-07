import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InterlinkBar from "@/components/InterlinkBar";
import WellnessNote from "@/components/WellnessNote";
import CrystalsForEveryJourney from "@/components/CrystalsForEveryJourney";
import OverlayBanner from "@/components/OverlayBanner";
import StonesForEveryIntention from "@/components/StonesForEveryIntention";
import QuizBanner from "@/components/QuizBanner";
import WatchAndBuy from "@/components/WatchAndBuy";
import FeaturedProducts from "@/components/FeaturedProducts";
import SocialProof from "@/components/SocialProof";
import Numerology from "@/components/Numerology";
import Testimonials from "@/components/Testimonials";
import BlogPosts from "@/components/BlogPosts";
import TrustIcons from "@/components/TrustIcons";
import HelpCenter from "@/components/HelpCenter";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <InterlinkBar />
        <WellnessNote />
        <CrystalsForEveryJourney />
        <OverlayBanner />
        <StonesForEveryIntention />
        <QuizBanner />
        <WatchAndBuy />
        <FeaturedProducts />
        <SocialProof />
        <Numerology />
        <Testimonials />
        <BlogPosts />
        <TrustIcons />
        <HelpCenter />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
