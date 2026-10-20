import kitchenImage from "../../img/b23.jpeg";
import livingImage from "../../img/photo_5809969391821589816_y.jpg.jpeg";
import exteriorImage from "../../img/photo_5809969391821589806_y.jpg.jpeg";
import environmentImage from "../../img/environment.png";
import locationBannerImage from "../../img/location-banner.png";
import heroImage from "../../img/hero.png";

export const CONTACT = {
  phoneDisplay: "0708 806 5449",
  phoneTel: "+2347088065449",
  whatsapp: "2347088065449",
  email: "info@futurehomesproperty.com",
  location: "Ikate, Lekki, Lagos",
  hours: "Mon – Sat · 9:00am – 6:00pm",
};

export const waLink = (message: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

export const IMG = {
  hero: heroImage,
  living: livingImage,
  kitchen: kitchenImage,
  exterior: exteriorImage,
  environment: environmentImage,
  pool: "https://images.pexels.com/photos/7722162/pexels-photo-7722162.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=1200&h=840",
  skyline: locationBannerImage,
};

export type Plan = {
  id: string;
  label: string;
  beds: string;
  price: number;
  blurb: string;
  popular?: boolean;
  features: string[];
};

export const PLANS: Plan[] = [
  {
    id: "one",
    label: "One Bedroom",
    beds: "1 bed · 1 bath",
    price: 130,
    blurb: "Smart, single-level living for first homes and first investments.",
    features: [
      "1 en-suite bedroom with built-in wardrobe",
      "Fitted kitchen & modern POP ceiling",
      "Private balcony with skyline views",
      "Built-in speakers in the living room",
      "Covered parking space",
    ],
  },
  {
    id: "two",
    label: "Two Bedroom",
    beds: "2 beds · 2 baths",
    price: 220,
    blurb: "The family favourite — the right size for living and letting.",
    popular: true,
    features: [
      "2 en-suite bedrooms with wardrobes",
      "Fitted kitchen & modern POP ceiling",
      "Built-in speakers & heat extractors",
      "Larger private balcony",
      "Covered parking space",
    ],
  },
  {
    id: "three",
    label: "Three Bedroom",
    beds: "3 beds · 3 baths",
    price: 300,
    blurb: "The flagship plan — space to breathe, entertain and grow.",
    features: [
      "3 en-suite bedrooms with wardrobes",
      "Fitted kitchen & modern POP ceiling",
      "Built-in speakers throughout",
      "Dual water-heater setup",
      "Covered parking + visitor bay",
    ],
  },
];

export const monthly = (priceM: number) =>
  `₦${(priceM / 60).toFixed(2)}M / month · 60-month plan`;

export const STATS = [
  { value: 130, prefix: "₦", suffix: "M", label: "Starting price" },
  { value: 3, prefix: "", suffix: "", label: "Floor plans" },
  { value: 24, prefix: "", suffix: "/7", label: "Security & gatehouse" },
  { value: 100, prefix: "", suffix: "%", label: "En-suite bedrooms" },
];

export const TRUST = [
  { title: "Prime Location", sub: "Ikate, Lekki — the island's liveliest address" },
  { title: "Modern Facilities", sub: "Every finish specified, not assumed" },
  { title: "Secure Investment", sub: "Bank-backed plans & titled development" },
  { title: "High Rental Value", sub: "Strong, steady demand in Lekki" },
];

export type Amenity = { icon: string; title: string; desc: string };

export const FEATURES: Amenity[] = [
  {
    icon: "sofa",
    title: "Spacious living room",
    desc: "Double-wide sills and an open plan that makes every gathering feel grand.",
  },
  {
    icon: "bed",
    title: "En-suite bedrooms",
    desc: "Every bedroom en-suite, with built-in wardrobes and blackout-ready windows.",
  },
  {
    icon: "ceiling",
    title: "Modern POP ceiling",
    desc: "Architectural false ceilings with concealed warm lighting throughout.",
  },
  {
    icon: "kitchen",
    title: "Fitted kitchen",
    desc: "Stone worktops, full cabinetry and a proper layout — move in, just unpack.",
  },
  {
    icon: "speaker",
    title: "Built-in speakers",
    desc: "In-ceiling audio pre-wired across the living area and master bedroom.",
  },
  {
    icon: "pool",
    title: "Swimming pool",
    desc: "A resort-style pool deck for slow mornings and end-of-week swims.",
  },
  {
    icon: "gym",
    title: "Gym",
    desc: "A fully equipped fitness studio, steps from your lift.",
  },
];

export const AMENITIES: Amenity[] = [
  {
    icon: "droplet",
    title: "Water heater",
    desc: "Dedicated units in every bathroom — hot water on arrival, always.",
  },
  {
    icon: "fan",
    title: "Heat extractor",
    desc: "Quiet ventilation in wet areas for all-year comfort.",
  },
  {
    icon: "balcony",
    title: "Balcony",
    desc: "A private outdoor corner with views over the Ikate skyline.",
  },
];

export const EXTRAS: Amenity[] = [
  {
    icon: "car",
    title: "Ample parking space",
    desc: "Covered parking allocated to every residence, plus visitor bays.",
  },
  {
    icon: "shield",
    title: "24-hour security",
    desc: "Manned gatehouse, CCTV coverage and patrol rounds around the clock.",
  },
  {
    icon: "leaf",
    title: "Secure & serene environment",
    desc: "Landscaped greens and calm streets — a world away from the traffic.",
  },
];

export const GALLERY = [
  { src: IMG.living, alt: "Spacious, light-filled living room at Cove Towers", label: "Spacious Living Room", rotate: "-rotate-2" },
  { src: IMG.kitchen, alt: "Fitted kitchen with stone worktops and dark cabinetry", label: "Fitted Kitchen", rotate: "rotate-1" },
  { src: IMG.exterior, alt: "Premium exterior of the highrise towers", label: "Premium Exterior", rotate: "-rotate-1" },
  { src: IMG.environment, alt: "Beautiful landscaped environment around the development", label: "Beautiful Environment", rotate: "rotate-2" },
];

export const DISTANCES = [
  { place: "Lekki–Epe Expressway", time: "2 min", note: "Direct access" },
  { place: "Lekki Phase 1", time: "5 min", note: "Restaurants & retail" },
  { place: "Ajah & Motor Axis", time: "10 min", note: "Work & services" },
  { place: "Atlantic & Oniru", time: "12 min", note: "Beaches & nightlife" },
  { place: "Murtala Muhammed Intl. Airport", time: "25 min", note: "Fly anywhere" },
];

export const FAQS = [
  {
    q: "What's included in the price?",
    a: "Every residence is sold fully fitted: stone-top fitted kitchen, POP ceilings with lighting, en-suite wardrobes, built-in speakers, water heaters and heat extractors. You also get a private balcony, covered parking and full access to the pool, gym and 24/7 security.",
  },
  {
    q: "Which payment options do you offer?",
    a: "We offer flexible, bank-backed instalment plans as well as lump-sum purchase at a discounted rate. Call 0708 806 5449 and our team will send the current plan sheet for your chosen bedroom size.",
  },
  {
    q: "Can I view the property before buying?",
    a: "Yes — in-person viewings run Monday to Saturday, 9am to 6pm. Use the form at the bottom of this page to book a slot and a key holder will meet you at the gates in Ikate.",
  },
  {
    q: "Are the flats ready for immediate occupancy?",
    a: "Current units are completed and ready to hand over. Speak with our sales team for the latest availability by tower and floor — the best views go quickly.",
  },
  {
    q: "Do you help with financing?",
    a: "We do. We work with banks that offer residential mortgages and developer payment plans in naira, and we walk both local and diaspora buyers through the options, step by step.",
  },
];

export const TICKER = [
  "Now selling — Cove Towers, Ikate · Lekki",
  "1 Bed · ₦130M",
  "2 Bed · ₦220M",
  "3 Bed · ₦300M",
  "Swimming pool & gym",
  "24/7 security",
  `Call ${CONTACT.phoneDisplay}`,
];

export const NAV_LINKS = [
  { href: "#residences", label: "Residences" },
  { href: "#gallery", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQ" },
];
