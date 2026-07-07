import CategoryCarousel, { type CarouselItem } from "@/components/CategoryCarousel";

const ITEMS: CarouselItem[] = [
  { label: "Bracelets", href: "/collections/bracelets", img: "/img/journey/Untitled_design_97.png" },
  { label: "Raw Cluster", href: "/collections/raw-cluster", img: "/img/journey/2_91cd2113-a1bd-4fbb-b631-79aca36c8f4d.png" },
  { label: "Trees", href: "/collections/trees", img: "/img/journey/1_720.png" },
  { label: "Rings", href: "/collections/rings", img: "/img/journey/14_36802fc5-4bb2-4a20-b70a-07a4ea081b66.png" },
  { label: "Pyramid", href: "/collections/pyramid", img: "/img/journey/5_720.png" },
  { label: "Spheres", href: "/collections/spheres", img: "/img/journey/3_3f995508-6c4a-4114-86c0-6f574407bd2d.png" },
  { label: "Selenite Plates", href: "/collections/selenite-plates", img: "/img/journey/Untitled_design_-_2025-12-03T115003.712.png" },
  { label: "Tumbles", href: "/collections/tumbles", img: "/img/journey/8_720.png" },
  { label: "Murti", href: "/collections/murti", img: "/img/journey/murti_720.png" },
  { label: "Pencils", href: "/collections/pencils", img: "/img/journey/Pencils_720.png" },
  { label: "Zibu Coins", href: "/collections/zibu-coins", img: "/img/journey/Coins_720.png" },
  { label: "Pendant", href: "/collections/pendant", img: "/img/journey/4_720.png" },
  { label: "Mala", href: "/collections/mala", img: "/img/journey/9_720.png" },
  { label: "Earrings", href: "/collections/earrings", img: "/img/journey/11_0bf9327c-e003-42ad-a1ce-8a2d9e5eab9c.png" },
  { label: "Yantra", href: "/collections/yantra", img: "/img/journey/12.png" },
];

export default function CrystalsForEveryJourney() {
  return (
    <CategoryCarousel
      title="Crystals for Every Journey"
      viewAllHref="/collections/all"
      items={ITEMS}
    />
  );
}
