import CategoryCarousel, { type CarouselItem } from "@/components/CategoryCarousel";

const ITEMS: CarouselItem[] = [
  { label: "Amethyst", href: "/collections/amethyst", img: "/img/intentstones/ame1_550.png" },
  { label: "Rose Quartz", href: "/collections/rose-quartz", img: "/img/intentstones/rose_quartz_stones_550.png" },
  { label: "Pyrite", href: "/collections/pyrite", img: "/img/intentstones/Pyrite_864.png" },
  { label: "Lapis Lazuli", href: "/collections/lapis-lazuli", img: "/img/intentstones/lapis_lazuli_stones_550.png" },
  { label: "Citrine", href: "/collections/citrine", img: "/img/intentstones/cit3_550.png" },
  { label: "Carnelian", href: "/collections/carnelian", img: "/img/intentstones/carn2_550.png" },
  { label: "Green Aventurine", href: "/collections/green-aventurine", img: "/img/intentstones/green_aventurine_stones_550.png" },
  { label: "Green Jade", href: "/collections/green-jade", img: "/img/intentstones/Focus_5_550.png" },
  { label: "Sphatik", href: "/collections/sphatik", img: "/img/intentstones/clear_quartz_-_sphatik_stones_864.png" },
  { label: "Tiger's Eye", href: "/collections/tiger-s-eye", img: "/img/intentstones/tigers_eye_stones_550.png" },
  { label: "Selenite", href: "/collections/selenite", img: "/img/intentstones/selenite_stones_864.png" },
  { label: "Sunstone", href: "/collections/sunstone", img: "/img/intentstones/sunstone_stones_864.png" },
  { label: "Howlite", href: "/collections/howlite", img: "/img/intentstones/howlite_stones_864.png" },
];

export default function StonesForEveryIntention() {
  return (
    <CategoryCarousel
      title="Stones for Every Intention"
      viewAllHref="/pages/shop-by-crystal"
      items={ITEMS}
    />
  );
}
