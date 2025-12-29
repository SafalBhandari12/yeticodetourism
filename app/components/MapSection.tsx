"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import {
  Plane,
  Building2,
  Mountain,
  Footprints,
  Search,
  MapPin,
  Calendar,
  Thermometer,
  Navigation,
  Sparkles,
  Target,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Info,
  Lightbulb,
  Hotel,
  Trees,
} from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

const REGION_DATA = {
  "NP-BA": {
    name: "Bagmati Province",
    description:
      "The cultural and political heart of Nepal, home to the Kathmandu Valley. This region is a living museum of ancient history, vibrant festivals, and architectural marvels. Visitors can explore seven UNESCO World Heritage sites within the valley alone.",
    highlights: ["Kathmandu Durbar Square", "Bhaktapur", "Patan", "Nagarkot"],
    bestTime: "Sep-Dec, Mar-May",
    activities: [
      "Heritage Tours",
      "Hiking",
      "Mountain Flights",
      "Culinary Tours",
    ],
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
    stats: {
      elevation: "1,400m (Avg)",
      climate: "Temperate",
      access: "Intl. Airport",
    },
    slug: "kathmandu",
    tips: [
      "Wear a mask in dusty areas of Kathmandu.",
      "Always negotiate taxi fares or use ride-sharing apps like Pathao.",
      "Respect local customs at temples; remove shoes and dress modestly.",
    ],
  },
  "NP-GA": {
    name: "Gandaki Province",
    description:
      "A paradise for trekkers and nature lovers. Contains the Annapurna range, Pokhara valley, and diverse landscapes ranging from subtropical lowlands to high alpine deserts. It is the gateway to some of the world's most famous treks.",
    highlights: ["Pokhara", "Annapurna Circuit", "Mustang", "Manang"],
    bestTime: "Oct-Nov, Mar-Apr",
    activities: ["Trekking", "Paragliding", "Rafting", "Cave Exploration"],
    image:
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800",
    stats: {
      elevation: "827m - 8,091m",
      climate: "Subtropical to Alpine",
      access: "Intl. Airport (Pokhara)",
    },
    slug: "pokhara",
    tips: [
      "Pokhara is more relaxed than Kathmandu; great for unwinding.",
      "Book paragliding in advance during peak seasons.",
      "Carry water purification tablets for treks.",
    ],
  },
  "NP-SA": {
    name: "Sagarmatha (Everest)",
    description:
      "The roof of the world. Home to Mount Everest and the Sherpa culture. A rugged, high-altitude region of immense beauty and spiritual significance. Experience the legendary hospitality of the Sherpa people.",
    highlights: ["Mt. Everest", "Namche Bazaar", "Tengboche", "Gokyo Lakes"],
    bestTime: "Oct-Nov, Mar-May",
    activities: ["Mountaineering", "Trekking", "Sherpa Culture", "Wildlife"],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800",
    stats: {
      elevation: "2,800m - 8,848m",
      climate: "Alpine / Tundra",
      access: "Lukla Airport",
    },
    slug: "everest-base-camp-trek",
    tips: [
      "Acclimatize properly to avoid altitude sickness.",
      "Flights to Lukla are weather-dependent; have buffer days.",
      "Respect the local Sherpa culture and Buddhist monuments.",
    ],
  },
  "NP-LU": {
    name: "Lumbini Province",
    description:
      "The birthplace of Lord Buddha. A sacred pilgrimage site with monasteries from around the world and peaceful gardens, offering a spiritual journey. It is a place of peace and reflection.",
    highlights: ["Maya Devi Temple", "World Peace Pagoda", "Monasteries"],
    bestTime: "Oct-Mar",
    activities: ["Pilgrimage", "Meditation", "Archaeology", "Bird Watching"],
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=800",
    stats: {
      elevation: "150m (Avg)",
      climate: "Tropical",
      access: "Gautam Buddha Intl. Airport",
    },
    slug: "lumbini",
    tips: [
      "Rent a bicycle to explore the monastic zone.",
      "Early morning or late afternoon is best to avoid heat.",
      "Dress conservatively as it is a sacred religious site.",
    ],
  },
  "NP-KA": {
    name: "Karnali Province",
    description:
      "The wild west of Nepal. Remote, untouched, and home to the stunning Rara Lake and Shey Phoksundo National Park. A true wilderness experience for those seeking solitude and pristine nature.",
    highlights: ["Rara Lake", "Shey Phoksundo", "Jumla", "Dolpo"],
    bestTime: "Apr-Oct",
    activities: ["Trekking", "Wildlife", "Cultural Immersion", "Camping"],
    image:
      "https://images.unsplash.com/photo-1623492701902-47dc207df5dc?q=80&w=800",
    stats: {
      elevation: "300m - 7,000m",
      climate: "Varied",
      access: "Domestic Flights",
    },
    slug: "rara-lake", // Assuming a slug or generic
    tips: [
      "Infrastructure is basic; be prepared for rustic conditions.",
      "Permits are required for restricted areas like Upper Dolpo.",
      "Carry enough cash as ATMs are scarce.",
    ],
  },
  "NP-NA": {
    name: "Narayani (Chitwan)",
    description:
      "Famous for Chitwan National Park. A region of dense jungles, wildlife safaris, and Tharu culture. One of the best places to see rhinos and tigers in their natural habitat.",
    highlights: ["Chitwan National Park", "Narayani River", "Sauraha"],
    bestTime: "Oct-Mar",
    activities: [
      "Jungle Safari",
      "Canoeing",
      "Tharu Culture",
      "Elephant Bathing",
    ],
    image:
      "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800",
    stats: {
      elevation: "100m - 815m",
      climate: "Tropical",
      access: "Bharatpur Airport",
    },
    slug: "chitwan-national-park",
    tips: [
      "Wear neutral colors during jungle safaris.",
      "Follow the guide's instructions strictly for safety.",
      "Winter mornings can be foggy; plan accordingly.",
    ],
  },
  "NP-JA": {
    name: "Janakpur (Madhesh)",
    description:
      "The cultural hub of the Mithila region. Known for the grand Janaki Temple and vibrant art and festivals. A center of religious tourism and unique Maithili culture.",
    highlights: ["Janaki Temple", "Mithila Art", "Vivah Panchami"],
    bestTime: "Oct-Mar",
    activities: ["Temple Visits", "Art Workshops", "Festivals", "Food Tours"],
    image:
      "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=800",
    stats: {
      elevation: "70m (Avg)",
      climate: "Tropical",
      access: "Janakpur Airport",
    },
    slug: "janakpur",
    tips: [
      "Try the local Mithila cuisine.",
      "Visit during Vivah Panchami for a grand cultural experience.",
      "Respect local traditions and dress modestly.",
    ],
  },
  "NP-ME": {
    name: "Mechi (Eastern)",
    description:
      "The easternmost region, known for its tea gardens in Ilam and the gateway to Kanchenjunga. Rolling hills and misty landscapes offer a serene escape.",
    highlights: ["Ilam Tea Gardens", "Kanchenjunga", "Pathivara"],
    bestTime: "Mar-May, Oct-Nov",
    activities: ["Tea Tasting", "Trekking", "Sunrise Views", "Bird Watching"],
    image:
      "https://images.unsplash.com/photo-1625762603829-050c91d6268e?q=80&w=800",
    stats: {
      elevation: "Varied",
      climate: "Temperate",
      access: "Bhadrapur Airport",
    },
    slug: "ilam",
    tips: [
      "Don't miss the sunrise from Antu Danda.",
      "Buy local tea as a souvenir.",
      "Be prepared for sudden weather changes in the hills.",
    ],
  },
  "NP-KO": {
    name: "Koshi Province",
    description:
      "Home to the Koshi Tappu Wildlife Reserve and the mighty Koshi river. A region of wetlands and biodiversity, perfect for bird watchers and nature enthusiasts.",
    highlights: ["Koshi Tappu", "Dharan", "Bhedetar"],
    bestTime: "Oct-Mar",
    activities: ["Bird Watching", "Rafting", "Hiking", "Nature Walks"],
    image:
      "https://images.unsplash.com/photo-1596423736776-361067356c92?q=80&w=800",
    stats: {
      elevation: "70m - 8,000m",
      climate: "Varied",
      access: "Biratnagar Airport",
    },
    slug: "koshi-tappu",
    tips: [
      "Bring binoculars for bird watching.",
      "Rafting on the Koshi river is a thrilling experience.",
      "Explore the vibrant city of Dharan.",
    ],
  },
  "NP-DH": {
    name: "Dhawalagiri",
    description:
      "Named after the Dhaulagiri mountain. Offers challenging treks and remote landscapes. It is less crowded than Annapurna but equally stunning.",
    highlights: ["Dhaulagiri", "Baglung", "Mustang (Lower)"],
    bestTime: "Mar-May, Sep-Nov",
    activities: ["Trekking", "Mountaineering", "Suspension Bridges"],
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
    stats: {
      elevation: "High Altitude",
      climate: "Alpine",
      access: "Road / Trek",
    },
    slug: "dhaulagiri",
    tips: [
      "Prepare for challenging terrain.",
      "Visit the longest suspension bridge in Baglung.",
      "Experience the unique culture of Lower Mustang.",
    ],
  },
  "NP-RA": {
    name: "Rapti",
    description:
      "A mid-western region known for its valleys and agriculture. Gateway to western Nepal. It offers a glimpse into rural Nepali life.",
    highlights: ["Dang Valley", "Swargadwari", "Rapti River"],
    bestTime: "Oct-Mar",
    activities: ["Pilgrimage", "Nature Walks", "Cultural Tours"],
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
    stats: {
      elevation: "Low to Mid",
      climate: "Subtropical",
      access: "Road",
    },
    slug: "dang",
    tips: [
      "Visit Swargadwari for a spiritual experience.",
      "Explore the Tharu culture in Dang.",
      "Best visited in winter for pleasant weather.",
    ],
  },
  "NP-BH": {
    name: "Bheri",
    description:
      "Features the Bardia National Park, a pristine wilderness area for tiger tracking. It is less commercialized than Chitwan, offering a more authentic jungle experience.",
    highlights: ["Bardia National Park", "Nepalgunj", "Bheri River"],
    bestTime: "Oct-Mar",
    activities: ["Tiger Tracking", "Jungle Safari", "Rafting"],
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
    stats: {
      elevation: "Lowlands",
      climate: "Tropical",
      access: "Nepalgunj Airport",
    },
    slug: "bardia",
    tips: [
      "Bardia is the best place to spot tigers.",
      "Stay in a jungle lodge for the full experience.",
      "Bring insect repellent.",
    ],
  },
  "NP-SE": {
    name: "Seti",
    description:
      "Far-western region known for Khaptad National Park and its rolling green hills. A spiritual haven with ashrams and meditation centers.",
    highlights: ["Khaptad", "Silgadhi", "Api Nampa"],
    bestTime: "Apr-Oct",
    activities: ["Trekking", "Meditation", "Nature Photography"],
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
    stats: {
      elevation: "Mid Hills",
      climate: "Temperate",
      access: "Dhangadhi Airport",
    },
    slug: "khaptad",
    tips: [
      "Khaptad is great for meditation and spiritual retreats.",
      "The rolling hills are perfect for easy trekking.",
      "Pack warm clothes even in summer.",
    ],
  },
  "NP-MA": {
    name: "Mahakali",
    description:
      "The western border region. Remote and culturally distinct, with untouched natural beauty. Explore the Shuklaphanta National Park for wildlife.",
    highlights: ["Dodhara Chandani", "Shuklaphanta", "Mahakali River"],
    bestTime: "Oct-Mar",
    activities: ["Wildlife", "Bridge Visits", "Cultural Tours"],
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
    stats: {
      elevation: "Lowlands",
      climate: "Tropical",
      access: "Road",
    },
    slug: "shuklaphanta",
    tips: [
      "Visit the Dodhara Chandani suspension bridge.",
      "Shuklaphanta is home to a large population of swamp deer.",
      "Experience the unique culture of the far west.",
    ],
  },
};

type Category =
  | "airports"
  | "cities"
  | "highlights"
  | "trekking"
  | "accommodation"
  | "nature";

const CATEGORIES: { id: Category; label: string; icon: React.ReactNode }[] = [
  {
    id: "airports",
    label: "Airports",
    icon: <Plane className='w-5 h-5' />,
  },
  {
    id: "cities",
    label: "Cities",
    icon: <Building2 className='w-5 h-5' />,
  },
  {
    id: "highlights",
    label: "Highlights",
    icon: <Sparkles className='w-5 h-5' />,
  },
  {
    id: "trekking",
    label: "Trekking",
    icon: <Footprints className='w-5 h-5' />,
  },
  {
    id: "accommodation",
    label: "Stays",
    icon: <Hotel className='w-5 h-5' />,
  },
  {
    id: "nature",
    label: "Nature",
    icon: <Trees className='w-5 h-5' />,
  },
];

const MARKERS = [
  // Airports
  {
    id: "tia",
    name: "Tribhuvan Intl. Airport",
    type: "airports",
    x: 525,
    y: 300,
    description: "Kathmandu - The main gateway to Nepal",
  },
  {
    id: "gbia",
    name: "Gautam Buddha Intl. Airport",
    type: "airports",
    x: 320,
    y: 335,
    description: "Bhairahawa - Gateway to Lumbini",
  },
  {
    id: "pria",
    name: "Pokhara Intl. Airport",
    type: "airports",
    x: 390,
    y: 250,
    description: "Pokhara - Gateway to Annapurna",
  },
  {
    id: "bwa",
    name: "Bhadrapur Airport",
    type: "airports",
    x: 750,
    y: 360,
    description: "Gateway to Eastern Nepal",
  },
  {
    id: "dhi",
    name: "Dhangadhi Airport",
    type: "airports",
    x: 100,
    y: 280,
    description: "Gateway to Far West",
  },
  // Cities
  {
    id: "ktm",
    name: "Kathmandu",
    type: "cities",
    x: 518.3,
    y: 301.9,
    description: "Capital City",
  },
  {
    id: "pkr",
    name: "Pokhara",
    type: "cities",
    x: 386.7,
    y: 247.2,
    description: "City of Lakes",
  },
  {
    id: "brt",
    name: "Biratnagar",
    type: "cities",
    x: 700,
    y: 350,
    description: "Industrial Hub",
  },
  {
    id: "npj",
    name: "Nepalgunj",
    type: "cities",
    x: 200,
    y: 300,
    description: "Western Hub",
  },
  {
    id: "dharan",
    name: "Dharan",
    type: "cities",
    x: 720,
    y: 340,
    description: "Beautiful Eastern City",
  },
  {
    id: "janakpur",
    name: "Janakpur",
    type: "cities",
    x: 600,
    y: 360,
    description: "City of Ponds",
  },
  // Highlights
  {
    id: "evt",
    name: "Mt. Everest",
    type: "highlights",
    x: 675.6,
    y: 271.8,
    description: "Top of the World",
  },
  {
    id: "lmb",
    name: "Lumbini",
    type: "highlights",
    x: 317.1,
    y: 329.2,
    description: "Birthplace of Buddha",
  },
  {
    id: "muktinath",
    name: "Muktinath",
    type: "highlights",
    x: 350,
    y: 200,
    description: "Sacred Temple",
  },
  {
    id: "gosaikunda",
    name: "Gosaikunda",
    type: "highlights",
    x: 530,
    y: 250,
    description: "Alpine Freshwater Lake",
  },
  // Trekking
  {
    id: "abc",
    name: "Annapurna Base Camp",
    type: "trekking",
    x: 370,
    y: 230,
    description: "Popular Trek",
  },
  {
    id: "ebc",
    name: "Everest Base Camp",
    type: "trekking",
    x: 685,
    y: 270,
    description: "Iconic Trek",
  },
  {
    id: "manaslu",
    name: "Manaslu Circuit",
    type: "trekking",
    x: 430,
    y: 260,
    description: "Off the beaten path",
  },
  {
    id: "langtang",
    name: "Langtang Valley",
    type: "trekking",
    x: 525,
    y: 265,
    description: "Valley of Glaciers",
  },
  {
    id: "kanchenjunga",
    name: "Kanchenjunga Base Camp",
    type: "trekking",
    x: 700,
    y: 285,
    description: "Remote Eastern Trek",
  },
  // Accommodation
  {
    id: "dwarikas",
    name: "Dwarika's Hotel",
    type: "accommodation",
    x: 520,
    y: 305,
    description: "Heritage Hotel in Kathmandu",
  },
  {
    id: "fishtail",
    name: "Fish Tail Lodge",
    type: "accommodation",
    x: 385,
    y: 250,
    description: "Luxury in Pokhara",
  },
  {
    id: "meghauli",
    name: "Meghauli Serai",
    type: "accommodation",
    x: 440,
    y: 335,
    description: "Jungle Lodge in Chitwan",
  },
  {
    id: "pavilion",
    name: "The Pavilions Himalayas",
    type: "accommodation",
    x: 395,
    y: 245,
    description: "Eco Resort in Pokhara",
  },
  // Nature
  {
    id: "chitwan_np",
    name: "Chitwan National Park",
    type: "nature",
    x: 450,
    y: 330,
    description: "Wildlife Safari",
  },
  {
    id: "bardia_np",
    name: "Bardia National Park",
    type: "nature",
    x: 180,
    y: 310,
    description: "Tiger Territory",
  },
  {
    id: "rara_np",
    name: "Rara National Park",
    type: "nature",
    x: 150,
    y: 180,
    description: "Scenic Lake",
  },
  {
    id: "sagarmatha_np",
    name: "Sagarmatha National Park",
    type: "nature",
    x: 670,
    y: 275,
    description: "Home of Everest",
  },
  {
    id: "langtang_np",
    name: "Langtang National Park",
    type: "nature",
    x: 520,
    y: 255,
    description: "First National Park",
  },
];

export default function MapSection() {
  const router = useRouter();
  const [activeRegion, setActiveRegion] = useState<string | null>("NP-BA");
  const [showDetails, setShowDetails] = useState(false);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("airports");
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);
  const [activeMarkerId, setActiveMarkerId] = useState<string | null>(null);

  const handleRegionClick = (id: string) => {
    setActiveRegion(id === activeRegion ? null : id);
    setActiveMarkerId(null);
    setShowDetails(false);
  };

  const handleExploreClick = (slug?: string) => {
    if (slug) {
      router.push(`/destinations/${slug}`);
    } else {
      router.push("/destinations");
    }
  };

  const getMarkerData = (marker: (typeof MARKERS)[0]) => {
    const category = CATEGORIES.find((c) => c.id === marker.type);

    // Default images based on category
    const categoryImages: Record<Category, string> = {
      airports:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800",
      cities:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800",
      highlights:
        "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=800",
      trekking:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
      accommodation:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
      nature:
        "https://images.unsplash.com/photo-1501854140884-074cf2b21d25?q=80&w=800",
    };

    return {
      name: marker.name,
      description: marker.description,
      image:
        categoryImages[marker.type as Category] || categoryImages.highlights,
      highlights: [category?.label || "Landmark", marker.name],
      bestTime: "Year-round",
      activities: [category?.label || "Sightseeing", "Photography"],
      stats: {
        elevation: "Varies",
        climate: "Varies",
        access: "Road/Air",
      },
      slug: null,
      tips: [
        "Check local weather before visiting.",
        "Book accommodations in advance.",
      ],
    };
  };

  const selectedRegionData = activeRegion
    ? REGION_DATA[activeRegion as keyof typeof REGION_DATA]
    : null;

  const selectedMarkerData = activeMarkerId
    ? getMarkerData(MARKERS.find((m) => m.id === activeMarkerId)!)
    : null;

  const visibleMarkers = MARKERS.filter(
    (marker) => marker.type === activeCategory
  );

  const getRegionClassName = (regionId: string) => {
    const isActive = activeRegion === regionId;
    return `cursor-pointer transition-all duration-300 hover:stroke-white hover:stroke-2 ${
      isActive
        ? "fill-transparent stroke-[#d4344f] stroke-2"
        : "fill-transparent stroke-white/50"
    }`;
  };

  return (
    <section className='py-24 md:py-12 md:min-h-screen flex flex-col md:justify-center relative overflow-hidden bg-background'>
      <div className='absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none' />
      <div className='max-w-7xl mx-auto px-8 relative z-10 w-full'>
        <div className='text-center mb-12'>
          <h2
            className={`${playfair.className} text-5xl md:text-6xl text-white mb-6 leading-tight`}
          >
            Explore Nepal
          </h2>
          <p className='text-lg text-gray-400 font-light tracking-wide max-w-2xl mx-auto mb-8'>
            Click on a region to discover its unique culture, landscapes, and
            experiences.
          </p>

          {/* Category Filter */}
          <div className='flex flex-wrap justify-center gap-4'>
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-[#d4344f] border-[#d4344f] text-white shadow-lg shadow-[#d4344f]/20"
                    : "bg-white/5 border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                }`}
              >
                <span>{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-12 items-start justify-center'>
          {/* Map Container */}
          <div className='w-full lg:w-2/3 relative'>
            <div className='relative w-full aspect-[800/454]'>
              <div className='absolute inset-0 overflow-hidden rounded-xl'>
                <Image
                  src='/nepal_satellite.png'
                  alt='Nepal Satellite Map'
                  fill
                  className='object-cover opacity-50 scale-105'
                  priority
                />
              </div>
              <svg
                viewBox='0 0 800.37 454.29'
                className='w-full h-full drop-shadow-2xl overflow-visible'
                style={{
                  filter: "drop-shadow(0 0 20px rgba(212, 52, 79, 0.1))",
                }}
              >
                {/* Map Paths */}
                <path
                  d='m 507.66161,235.81836 3.61,5.49 4.8,-0.38 3.96,-1.72 0.53,1.07 3.23,0.86 4.33,-4.08 3.57,-1.28 6.95,0.5 5.89,2.92 3.74,5.22 2.57,0.1 7.37,6.1 1.2,0.06 2.64,-1.43 12.28,10.52 1.56,3.25 0.12,3.11 5.1,8.31 0.23,1.91 -1.25,1.84 0.22,1.1 7.41,3.06 3.43,0.28 0,0 -1.45,5.86 -3.37,2.7 2.78,9.52 -0.24,2.94 -7.7,0.77 -2.21,2.77 -1.36,4.24 -3.03,4.27 -1.4,3.58 -3.2,1.33 -2.4,2.26 0.65,11.94 -6.4,4.49 -2.52,-0.53 -2.13,0.94 -0.03,3.29 -2.45,3.71 -5.85,-0.95 -2.02,0.33 -3.07,-0.83 -2.91,-1.84 -5.81,-1.44 0,0 -4.41,-2.27 -12.89,-4.27 -5.74,-4.18 -0.92,-7.39 0.71,-1.87 -1.45,-1.98 -1.74,-7.71 -1.55,-2.48 -6.02,-0.79 -9.95,-4.19 -6.89,1.85 -2.79,1.72 -3.74,-1.84 -2.49,3.44 -2.53,-0.31 -1.26,-0.86 -3.09,0.45 -1.77,-1.22 -0.4,-2.43 -2.73,-1.17 -0.86,-1.26 -4.3,0.91 -8.26,-1.68 -0.3,-1.47 2.53,-3.24 -0.81,-1.63 0.45,-1.42 2.85,-3.18 0,0 3.69,3.44 2.13,-0.3 3.14,-1.93 0.36,-1.93 -1.87,-9.74 2.23,-3.45 4.07,-3.66 0.86,-3.96 1.84,-1.57 1.27,-5.24 2.24,-1.01 1.62,0.61 1.88,-0.6 1.02,0.35 1.23,-2.43 3.25,-2.54 0.48,-6.92 1.17,-3 3.37,-2.18 1.58,-2.59 0.63,-3.72 1.99,-2.08 4.72,-1.64 0,0 3.78,1.13 4.63,-1.92 z'
                  id='NP-BA'
                  className={getRegionClassName("NP-BA")}
                  onClick={() => handleRegionClick("NP-BA")}
                  onMouseEnter={() => setHoveredRegion("NP-BA")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                <path
                  d='m 148.37161,147.36836 2.21,0.72 -2.04,4.21 0.47,2.5 1.76,0.52 2.05,1.9 5.95,-1.79 2.94,0.75 1.98,3.49 8.9,1.12 1.85,2.52 3.07,1.78 4.14,-2.66 2.99,0.96 3.36,-1.05 2,-2 2.72,0.15 4.79,3.38 3.03,0.35 2.79,-1.5 1.2,-3.77 3.24,-4.43 12.42,-7.08 6.18,0.96 5.18,-0.1 1.14,0.9 -0.84,1.76 -0.18,9.45 2.03,1.6 6.73,-2.12 7.37,2.21 0,0 -5.08,2.98 -0.39,6.57 -2.56,2.87 -9.02,4.88 -4.74,6.28 -3.85,-0.59 -2.59,3.38 0.6,4.34 -2.37,1.63 -5.42,2.1 -2.44,8.08 -11.7,-2.77 -2.41,-0.15 -2.12,1.07 -1.23,4.52 2.04,4.61 0.35,4.23 -2.45,4.39 -3,2.62 1.57,4.3 -0.16,2.15 -5.25,6.29 -2.6,-0.1 -7.04,-4.88 -4.78,-1.68 -3.19,2.99 0.18,1.06 -1.26,2.63 0.19,1.58 3.49,3.13 1.48,2.26 4.01,-0.4 2.67,1.21 0.13,1.01 1.86,1.49 2.05,0.26 1.7,1.33 0.62,2.43 8.08,4.15 1.39,3.17 3.4,4.36 7.97,2.37 0.84,3.7 2.04,0.36 1.51,1.75 -0.07,3.71 1.09,1.35 -0.28,3.56 -4.59,-0.92 -2.21,0.91 -3.6,0.18 -2.66,1.79 0,0 -9.63,-0.37 -4.67,7.63 -3.86,-0.15 -5.44,-4.39 -2.8,-0.54 -10.47,-9.6 -3.12,-0.18 -3.51,-1.37 -14.84,-8.7 0.22,-3.64 -2.25,-1.81 -1.09,-2.9 -2.07,-1.61 -4.7,-0.24 -0.78,0.87 0.6,2.22 -5.88,1.09 0.89,-2.39 -0.91,0.21 -1.19,-1 1.97,-0.76 -0.68,-3.43 -7.87,-8.78 -0.33,-4.94 -2.11,-3.56 -11.04,-2.26 -3.600005,-2.26 0,0 2.510005,-3.47 0.57,-3.24 3.05,-1.87 4.92,-4.59 3.64,-4.55 0.88,-3.19 7.28,-8.13 -0.4,-3.11 -3.92,-6.75 -1.34,-4.01 -1.12,-6.83 -2.19,0.58 -2.48,4.22 -3.29,-2.21 -0.04,-3.08 -6.4,-1.6 -5.450005,-2.71 -3.46,-5.74 7.51,-2.48 3.330005,-0.05 11.21,6.65 8.16,0.69 5.29,-1.17 1.65,2.05 2.83,-1.25 2.52,0.24 2.13,-0.73 3.51,6.83 6.05,6.35 0.58,2.39 2.01,0.92 2.59,-0.84 -1.06,-3.45 -2.25,-1.73 -1.16,-3.56 -5.49,-6.32 -0.91,-3.3 -3.38,-3.66 -0.03,-6.77 3.62,-4.92 8.23,-4.99 z'
                  id='NP-BH'
                  className={getRegionClassName("NP-BH")}
                  onClick={() => handleRegionClick("NP-BH")}
                  onMouseEnter={() => setHoveredRegion("NP-BH")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                <path
                  d='m 387.87161,126.93836 0.48,0.19 -0.37,2.23 1.91,1.16 2.38,-1.21 2.58,1.53 2.76,-0.43 3.98,4.25 3.74,0.82 2.06,1.26 0.14,0.93 -2.81,2.89 -1.07,10.31 -3.92,4.88 0.61,2.34 4.27,4.68 0.14,1.28 -1.45,3.06 -0.68,6.69 0,0 -3.26,1.02 -8.1,8.24 -1.89,0.31 -3.64,-2.38 -2.97,0.27 -0.53,4.36 -1.32,2.26 -4.32,3.4 -5.6,2.85 0.07,3.17 1.19,2.09 2.21,1.52 1.76,4.13 -0.6,1.38 -2.25,-0.65 -3.41,1.92 -0.24,1.43 1.76,3.66 0.01,2.25 -4.21,3.29 -4.5,5.04 -1.74,4.91 -1.63,0.47 -0.75,2 4.35,1.85 2.26,2.63 1.82,4.98 -0.35,1.64 4.14,2.67 -0.19,1.07 -1.96,3.17 -2.05,-1.36 -2.03,0.42 -1.1,3.01 0.77,1.12 -0.62,4.27 -2.88,2.77 -0.39,1.99 0.82,0.86 -0.57,5.19 -3.01,3.79 -3.59,1.9 -4.67,-1.64 0,0 -0.88,-0.14 -1.83,-6.18 -1.23,-1.26 -3.27,-1.09 -1.79,-1.56 -3.95,1.11 -3.93,-1.95 -3.36,-4.9 -1.57,0.27 -4.15,-2.7 -4.23,-0.77 -1.44,-1.56 2.35,-3.39 0.38,-2.4 -0.57,-1.01 -4.57,0.21 -1.5,-1.31 -2.57,1.35 -2.5,-0.27 -6.9,1.77 -3.07,-0.15 0,0 -0.06,-1.95 -4.7,-5.34 -7.44,-4.18 -3.74,-4.89 -1.8,-1.25 -1.37,-3.05 -2.23,-2.41 -0.07,-1.48 2.54,-0.5 -0.64,-1.77 -1.65,-1.05 -0.58,-1.37 1.16,-1.19 2.64,-0.81 1.64,-2.63 4.81,0.96 1.04,-2.11 -1.1,-2.64 -1.5,-1.06 2.07,-1.91 6.38,0.47 4.53,-1.54 2.02,-1.61 1.76,-1.82 2.32,-6.26 -0.9,-2.55 0.41,-0.42 0,0 0.9,-0.93 3.92,2.67 3.74,0.46 1.75,0.96 2.45,-0.19 7.33,-2.33 4.01,-2.6 5.4,-1.59 3.92,-2.09 0.16,-4.86 1.64,-4.37 11.29,-14 -0.01,-6.97 1.1,-3.86 1.11,-1.6 2.82,-0.49 1.61,-3.71 -0.58,-1.64 -3.48,-3.63 0,0 1.4,-1.81 1.62,-0.65 4.1,-3.64 6.52,0.84 1.7,-0.7 2.93,-4.37 4.33,-2.49 4.07,-0.93 3.05,0.83 2.33,-1.08 z'
                  id='NP-DH'
                  className={getRegionClassName("NP-DH")}
                  onClick={() => handleRegionClick("NP-DH")}
                  onMouseEnter={() => setHoveredRegion("NP-DH")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                <path
                  d='m 413.75161,170.99836 1.2,0.53 1.46,2.89 2.48,0.61 3.15,2.07 5.39,0.72 2.65,2.63 0.86,2.09 -0.19,2.1 -1.29,2.51 -0.14,3.5 2.93,-0.84 3.24,2.15 3.16,0.87 4.26,-0.62 4.84,-1.86 6.51,2.34 0.48,2.5 2.49,4.51 -1.64,3.91 0.42,0.9 4.82,1.78 8.02,0.66 3.63,2.53 2.16,-1.95 5.71,-3.16 3.96,1.41 1.97,-0.32 3.93,-4.86 3.18,-2.48 5.92,-0.85 1.94,1.45 4.13,5.21 -1.07,1.87 0.42,4.53 -1.04,0.74 -2.1,8.05 -1.43,2.73 -2.58,13.57 0,0 -4.72,1.64 -1.99,2.08 -0.63,3.72 -1.58,2.59 -3.37,2.18 -1.17,3 -0.48,6.92 -3.25,2.54 -1.23,2.43 -1.02,-0.35 -1.88,0.6 -1.62,-0.61 -2.24,1.01 -1.27,5.24 -1.84,1.57 -0.86,3.96 -4.07,3.66 -2.23,3.45 1.87,9.74 -0.36,1.93 -3.14,1.93 -2.13,0.3 -3.69,-3.44 0,0 -4.27,-5.59 -4,0.35 -3.09,2.64 -3.24,1.58 -0.61,1.17 -8.1,2.65 2.14,6.08 -0.33,0.78 0,0 -8.18,-1.58 -2.17,2.14 -2.85,-3.49 -0.87,-4.11 -3.16,-3.95 -9.53,-0.27 -8.47,-1.33 -5.67,0.69 -12.23,-2.22 -10.59,0.12 -2.96,-2.46 -5.29,-1.54 -3.7,-0.32 -3.33,1.5 -5.46,-2.95 -2.54,-0.54 -10.69,0.91 -2.14,-0.84 -0.16,-1.01 2.31,-2.16 10.43,-2.03 1.57,-0.98 1.91,-3.68 0,0 4.67,1.64 3.59,-1.9 3.01,-3.79 0.57,-5.19 -0.82,-0.86 0.39,-1.99 2.88,-2.77 0.62,-4.27 -0.77,-1.12 1.1,-3.01 2.03,-0.42 2.05,1.36 1.96,-3.17 0.19,-1.07 -4.14,-2.67 0.35,-1.64 -1.82,-4.98 -2.26,-2.63 -4.35,-1.85 0.75,-2 1.63,-0.47 1.74,-4.91 4.5,-5.04 4.21,-3.29 -0.01,-2.25 -1.76,-3.66 0.24,-1.43 3.41,-1.92 2.25,0.65 0.6,-1.38 -1.76,-4.13 -2.21,-1.52 -1.19,-2.09 -0.07,-3.17 5.6,-2.85 4.32,-3.4 1.32,-2.26 0.53,-4.36 2.97,-0.27 3.64,2.38 1.89,-0.31 8.1,-8.24 3.26,-1.02 0,0 1.53,0.4 3.51,-1.72 z'
                  id='NP-GA'
                  className={getRegionClassName("NP-GA")}
                  onClick={() => handleRegionClick("NP-GA")}
                  onMouseEnter={() => setHoveredRegion("NP-GA")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                <path
                  d='m 607.04161,274.71836 9.07,0.49 3.37,3.51 4.9,-2.26 2.22,-0.15 0.45,0.48 -2.63,3.9 1.47,1.8 1.09,0.01 4.23,-2.76 4.33,1.87 1.23,-2.48 -0.93,-1.58 0,0 3.54,4.41 1.35,4.5 -1.1,2.31 -0.37,4.21 2.57,7.04 -0.37,4.6 -3.27,2.03 -4.84,1.7 -2.04,4.78 -4.33,5.2 -0.89,2.17 -3.42,1.97 -4.37,5.3 -1.46,3.17 -4.75,3.98 -3.76,6.17 0.12,5.71 1.32,3.55 -2.54,5.07 1.11,1.08 3.96,0.4 10.86,7.82 -2.3,7.13 0.61,2.93 -0.38,2.16 1.22,2.54 -2.14,8.93 -1.32,1.29 -4.54,1.35 -2,2.69 -2.74,2.08 -4.02,0.3 -5.05,-2.38 -1.26,0.54 1.04,9.67 -1.07,5.52 1.4,4.09 2.34,1.38 1.71,3.74 -3.03,6.22 0,0 -0.47,-0.45 -3.45,1.45 0.07,-2.45 -5.24,-1.89 -1.66,-1.62 -3.74,-0.84 -1.88,1.16 -3.81,-0.38 -1.88,1.06 -1.2,3.73 -3.15,0.75 -2.59,2.8 -0.76,-0.21 -1.97,1.69 -0.97,-0.03 0.84,-2.36 -0.48,-1.85 -2.11,-0.51 -0.04,1.14 -1.18,-0.07 -1.58,-2.4 -3.28,-0.72 -3.11,-2.04 -0.12,-1.56 -1.18,-1.8 0.31,-4.71 0.8,-1.56 -0.54,-1.1 0.59,-5.09 -0.95,-2.39 -4.75,-3.08 -3.42,-0.92 -0.6,-2.1 -1.26,-0.18 -1.47,1.85 -2.07,0.96 -0.34,-1.08 -0.84,-0.17 -0.88,2.06 -0.82,-0.22 -0.4,0.98 -0.97,-0.39 -2.21,2.69 -2.12,0.01 -0.45,1.75 -1.6,-0.6 -0.31,1.3 -1.79,0.91 -4.85,-0.97 -3.17,3.31 -1.51,-0.27 -2.47,2.36 0,0 2.48,-9.04 5.12,-7.46 1.73,-4.37 0.08,-3.72 -1.39,-3.99 1.49,-4.48 6.74,-6.65 -0.34,-2.18 2.22,-7.29 -0.14,-2.12 -1.54,-3.6 -1.85,-2.18 -1.81,-0.87 -1.18,-3.95 0.47,-2.12 4.35,-4.85 0,0 5.81,1.44 2.91,1.84 3.07,0.83 2.02,-0.33 5.85,0.95 2.45,-3.71 0.03,-3.29 2.13,-0.94 2.52,0.53 6.4,-4.49 -0.65,-11.94 2.4,-2.26 3.2,-1.33 1.4,-3.58 3.03,-4.27 1.36,-4.24 2.21,-2.77 7.7,-0.77 0.24,-2.94 -2.78,-9.52 3.37,-2.7 1.45,-5.86 0,0 3.5,-1.19 2.48,-2.09 -1.37,-2.58 -0.57,-2.99 -2.75,-2.63 -0.64,-3.09 0.68,-6.62 2.3,-1.33 6.28,-6.41 0.92,0.69 0.02,1.84 3.45,5.24 -1.94,2.57 1.18,7.33 1.17,2.53 z'
                  id='NP-JA'
                  className={getRegionClassName("NP-JA")}
                  onClick={() => handleRegionClick("NP-JA")}
                  onMouseEnter={() => setHoveredRegion("NP-JA")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                <path
                  d='m 110.99161,44.508364 1.93,1.14 1.4,-0.22 1.73,-0.51 2.54,-2.52 0,0 3.93,3.28 3.22,0.37 2.39,2.11 2.38,-0.06 2.89,-2.31 4.03,1.92 1.76,1.97 -0.3,4.21 0.68,6.04 2.55,-1.31 1.42,0.01 4.15,-2.54 3.52,0.27 7.03,-2.3 2.87,0.86 1.7,2.19 8.52,1.29 0.59,3.3 -0.51,4.57 -1.18,0.13 -1.41,1.69 -1.35,5.98 0.26,2.53 -0.92,2.45 -3.6,2.47 -0.25,2.48 1.03,6.23 3.26,0.28 2.1,1.86 0.39,9.539996 1.54,1.87 2.16,8.5 -0.94,3.84 -3.09,4.3 -3.42,2.86 -6.67,2.99 -1.61,-0.68 -0.43,-2.77 -2.85,-3.12 -3.75,0.1 -8.4,7.32 -2.54,3.15 0.72,1.84 1.63,1.39 -0.67,7.68 1.3,2.64 3.37,3.05 2.28,0.5 0,0 0.17,1.03 -8.23,4.99 -3.62,4.92 0.03,6.77 3.38,3.66 0.91,3.3 5.49,6.32 1.16,3.56 2.25,1.73 1.06,3.45 -2.59,0.84 -2.01,-0.92 -0.58,-2.39 -6.05,-6.35 -3.51,-6.83 -2.13,0.73 -2.52,-0.24 -2.83,1.25 -1.65,-2.05 -5.29,1.17 -8.16,-0.69 -11.21,-6.65 -3.330005,0.05 -7.51,2.48 3.46,5.74 5.450005,2.71 6.4,1.6 0.04,3.08 3.29,2.21 2.48,-4.22 2.19,-0.58 1.12,6.83 1.34,4.01 3.92,6.75 0.4,3.11 -7.28,8.13 -0.88,3.19 -3.64,4.55 -4.92,4.59 -3.05,1.87 -0.57,3.24 -2.510005,3.47 0,0 -2.26,-1.57 -0.65,1.33 -1.45,-1.14 1.71,-2.15 -0.95,-0.78 -1.33,0.39 -0.27,-1.63 -1.15,-0.21 -2.94,1.69 -0.6,-0.73 1.2,-1.07 -1.95,0.57 -1.88,-0.59 0.29,-1.69 -1.32,1.31 -0.75,-0.09 -0.14,-0.8 -0.74,0.65 -0.97,-0.49 -0.31,-1.9 1.02,-1.76 -1.71,-1.19 -2.71,-0.03 0.13,1.41 -2.36,-0.62 -1.75,-2.02 -3.64,-0.97 0.1,-1.78 -1.55,-1.21 -0.1,-1.54 -2.36,-0.86 -1.17,0.69 -3.22,-0.95 -0.77,-1.21 0.37,-1.74 -1.66,-0.26 -0.06,-1.66 -1.04,-0.88 -0.17,-1.44 -3.66,0.35 -2.36,-1.37 -1.33,0.33 0.18,-1.06 -1.13,-0.63 0.65,-2.02 -4.03,-1.2 0,0 0.82,-3.98 -0.47,-3.26 -3.81,-9.45 1.4,-12.92 -0.7,-2.34 0.29,-2.21 3.17,-9.1 -1.28,-2.78 2.83,-1.53 1.39,-4.37 11.93,-5.54 0.64,-2.38 2.34,-2.19 3.1,-5.97 -0.85,-5.63 3.62,-2.28 4.21,-0.55 2.7,-2.2 2.34,-4.35 -0.5,-2.72 -1.18,-1.61 -2.37,-1.52 -4.37,0.09 -0.42,-3.45 -3.59,-2.46 -0.46,-2.979996 1.89,-0.52 1.3,-2.94 0.43,-4.3 -1.19,-4.92 12.76,-5.83 5.93,-0.24 8.66,-2.17 2.250005,-4.26 -1.010005,-4.52 -2.2,-2.52 -0.16,-3.72 -2.95,-3.54 -1.35,-3.33 2.52,-7.43 1.76,-1.61 2.820005,-1.02 1.44,-1.91 3.49,-1.75 0,0 z'
                  id='NP-SA'
                  className={getRegionClassName("NP-SA")}
                  onClick={() => handleRegionClick("NP-SA")}
                  onMouseEnter={() => setHoveredRegion("NP-SA")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                <path
                  d='m 85.741605,28.418364 3.41,-0.71 0.94,-0.88 1.28,0.46 3.39,-1.23 4.13,-0.14 2.650005,2.72 1.96,3.38 -1.26,3 0.09,3.86 1.34,1.82 1.55,0.35 0,0 -3.49,1.75 -1.44,1.91 -2.820005,1.02 -1.76,1.61 -2.52,7.43 1.35,3.33 2.95,3.54 0.16,3.72 2.2,2.52 1.010005,4.52 -2.250005,4.26 -8.66,2.17 -5.93,0.24 -12.76,5.83 1.19,4.92 -0.43,4.3 -1.3,2.94 -1.89,0.52 0.46,2.979996 3.59,2.46 0.42,3.45 4.37,-0.09 2.37,1.52 1.18,1.61 0.5,2.72 -2.34,4.35 -2.7,2.2 -4.21,0.55 -3.62,2.28 0.85,5.63 -3.1,5.97 -2.34,2.19 -0.64,2.38 -11.93,5.54 -1.39,4.37 -2.83,1.53 1.28,2.78 -3.17,9.1 -0.29,2.21 0.7,2.34 -1.4,12.92 3.81,9.45 0.47,3.26 -0.82,3.98 0,0 -4.06,2.71 1.2,9.58 1.21,1.24 -1.01,1.23 -3.27,-2.92 -1.73,-0.48 0.2,-1.49 -0.81,-2.09 -2.69,-1.91 -5.45,0.8 -1.34,-0.56 -0.72,-1.83 -2.9,-1.68 -0.94,-3.33 -4.25,-1.46 -1.71,-1.68 0.83,-2.09 -0.84,-1.11 -5.06,-0.73 -7.5999999,-6.94 -5.03,-0.16 -1.16,-0.63 -0.67,-1.79 0.29,-8.2 3.53,-7 1.82,-0.43 0.42,-1.92 1.51,-0.43 -1.02,-0.89 -0.03,-2.27 1.31,-2.4 -0.73,-1.84 1.57,-3.6 3.3099999,-3.07 3.3,1.44 2.04,0.05 1.22,-1.67 2.05,-1.19 -1.01,-2.28 0.06,-2.53 -1.34,-1.69 0.36,-1.87 0.74,0.07 0.3,0.89 1.85,0.35 0.81,1.31 1.03,-0.3 -0.46,-4.1 0.65,-0.68 0.36,-4.69 1.12,-1.86 -0.27,-2.57 -1.95,-0.48 -0.21,-1.52 -0.91,-0.38 -0.18,-1.67 -0.81,-0.71 0.56,-0.99 -0.35,-2.28 -2.82,-1.57 -0.26,-3.66 0.07,-0.57 3.29,-1.3 0.73,1.09 1.47,-0.31 -1.07,-2.13 1.04,-1.85 1.31,0.59 0.2,-1.38 3.48,-2.65 0.42,-1.66 -0.92,-0.69 0.29,-1.469996 3.37,-2.24 1.16,-0.02 1.59,-3.05 -0.06,-1.98 1.03,-2.85 -2.85,-3.15 -1.44,-5.05 -0.96,-1.28 0.35,-2.69 1.29,0.05 1.47,-1.28 0.77,-3.37 2.76,-1.75 1.56,0.85 1.6,-0.38 2.57,0.56 1.13,-2.73 5.18,-4.72 1.32,-3.66 -0.18,-3.19 2.73,-3.43 2.81,-1.16 5.16,0.36 3.88,-4.38 2.28,-0.29 2.44,-6.02 1.96,-1.24 2.15,-3.18 2.98,-0.76 0.97,-1.78 2.29,-1.52 0.29,-1.51 -0.97,-3.18 3.42,-4.98 1.48,0.08 0.25,3.31 z'
                  id='NP-LU'
                  className={getRegionClassName("NP-LU")}
                  onClick={() => handleRegionClick("NP-LU")}
                  onMouseEnter={() => setHoveredRegion("NP-LU")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                <path
                  d='m 695.88161,291.65836 10.01,1.1 3.59,-2.8 7.22,1.48 7.39,-2.47 1.19,0.63 -1.02,1.33 0.41,0.57 3.78,0.71 5.2,-1.74 4.29,-2.82 1.97,-0.47 1.08,0.86 0.19,4.6 1.96,0.89 3.73,-2.43 4.02,-1.12 0,0 -1.62,11.39 -2.31,3.59 -2.26,1.36 -0.57,2.27 -1.25,1.54 -1.72,-1.87 -1.41,-0.38 -1.57,2.14 -0.85,5.75 -0.96,2 -4.67,2.78 -2.57,16.94 0.4,6.78 3.25,3.67 1.47,3.72 4.43,2.58 6.94,0.52 4.26,1.07 7.12,3.41 1.03,1.34 -4.1,4.39 -0.96,2.19 -3.2,2.95 -7.65,4.04 -5.08,6.33 -0.85,3.71 -3.11,4.06 2.34,5.29 -0.51,2.4 5.12,2.19 1.28,0.99 0.81,1.93 2.59,0.82 5.64,3.46 0.5,2.07 -0.96,5.96 -3.29,9.37 1.31,5.7 -1.59,1.47 1.61,9.83 2.11,4.71 0,0 -1.11,0.01 -0.05,2.11 -2.66,1.16 0.13,1.39 -3.8,0.22 -0.48,1.07 -1.87,-0.16 -0.36,-1.24 -3.08,-1.23 -0.56,-1.48 -5.49,-2 -3.05,-0.3 -3.35,2.04 -3.93,0.25 -1.83,1.23 -1.41,2.39 0.25,2.73 -1.68,1.33 -2.72,-2.57 -1.02,0.58 -1.25,-0.87 -2.33,0.08 -0.49,-4.01 -3.07,-0.36 -1.23,1.03 -0.52,-0.95 -2.47,-0.11 0.31,1.02 -3.28,-0.12 -6.4,-5.07 -1.99,-14.68 -2.62,-0.08 0.03,1.55 -2.95,4.29 -2.88,0.63 -0.87,0.94 -3.19,0.26 0,0 -0.4,-4.29 1.33,-4.25 4.24,-6.64 2.75,-2.51 5.63,-7.98 8.45,-8.28 1.66,-2.33 0.84,-4.36 -1.83,-2.26 -2.79,-0.5 -7.62,1.96 -5.19,3.42 -2.52,-2.37 -0.97,-1.88 1.04,-4.36 -2.28,-4.58 -0.14,-8.46 -3.87,-2.8 -0.51,-2.13 2.19,-6.71 -0.2,-3.09 -1.33,-1.33 -0.74,-3.6 1.89,-1.23 2.11,0.09 3.81,-4.17 -3.05,-0.96 0.11,-3.49 -3.26,-3.6 -1,-5.73 3.43,-4.99 1.52,-13.38 2.68,-5.42 0.38,-6.32 1.43,-3.37 -3.28,-3.51 0.4,-2.07 2.91,-3.9 -3.56,-9.51 0.65,-6.82 0,0 3.49,-0.02 4.13,3.23 2.94,3.6 4.11,1.93 1.37,1.96 -2.24,2.3 z'
                  id='NP-KA'
                  className={getRegionClassName("NP-KA")}
                  onClick={() => handleRegionClick("NP-KA")}
                  onMouseEnter={() => setHoveredRegion("NP-KA")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                <path
                  d='m 298.83161,245.13836 3.07,0.15 6.9,-1.77 2.5,0.27 2.57,-1.35 1.5,1.31 4.57,-0.21 0.57,1.01 -0.38,2.4 -2.35,3.39 1.44,1.56 4.23,0.77 4.15,2.7 1.57,-0.27 3.36,4.9 3.93,1.95 3.95,-1.11 1.79,1.56 3.27,1.09 1.23,1.26 1.83,6.18 0.88,0.14 0,0 -1.91,3.68 -1.57,0.98 -10.43,2.03 -2.31,2.16 0.16,1.01 2.14,0.84 10.69,-0.91 2.54,0.54 5.46,2.95 3.33,-1.5 3.7,0.32 5.29,1.54 2.96,2.46 10.59,-0.12 12.23,2.22 5.67,-0.69 8.47,1.33 9.53,0.27 3.16,3.95 0.87,4.11 2.85,3.49 2.17,-2.14 8.18,1.58 0,0 -0.58,1.75 -3.13,3.25 -3.59,1.33 -1.47,-1.11 -9.65,4.48 -1.31,1.48 -2.78,0.82 -0.51,1.21 -3.48,1.38 -2.26,4.77 -1.86,1.83 -4.34,0.88 -16.17,0.95 -0.95,0.66 0.06,1.11 4.25,1.19 -1.96,2.64 -1.39,3.86 0,0 -1.2,-0.61 -2.02,0.98 -4.03,0.55 -2.31,-1.22 -0.93,0.98 -0.43,1.66 4.85,5.06 -1.94,3.43 -4.25,-3.32 -20.62,-10.36 -20.78,-1.02 -0.8,0.28 0.13,1 1.13,1.35 -1.56,2.82 1.42,1.49 0.05,1.81 -1.07,1.07 -0.37,1.78 -1.65,0.81 -0.07,1.14 -1.57,1.65 -4.5,1.18 -3.26,-1.92 -0.86,-1.64 0.24,-2.1 -5.55,-4.04 -1.03,-2.04 -2.1,-1.89 -12.89,0.53 -2.94,-0.52 -7.17,-2.17 -1.07,-2.36 -1.33,-0.75 -4.17,0.48 -4.17,-0.57 -2.22,0.64 -7.52,-0.6 -0.37,-1.45 1.13,-1.05 -0.82,-2.78 1.36,-3.81 -1.69,-3.2 0.62,-2.13 -1.09,-1.05 -0.01,-1.25 -1.25,-0.27 -0.41,-0.81 0.35,-2.9 -1.07,-2.37 0.48,-2.04 -1.24,0.97 0,0 -0.11,-1.78 1.75,-1.45 7.81,1.15 2.6,-2.22 2.73,-0.5 1.39,-1.95 -1.54,-0.94 -2.89,-0.26 -3.63,-2.48 2.67,-6.99 3.87,-2.4 4.37,0.34 6.41,-2.07 7.6,-0.36 0.02,-2.34 -1.81,-2.56 -4.45,-2.74 1.06,-7.28 4.71,-4.49 1.97,-0.79 2.41,-2.78 -3.7,-2.44 0.25,-4.58 -1.19,-1.26 2.56,-2.33 3.65,-1.22 z'
                  id='NP-KO'
                  className={getRegionClassName("NP-KO")}
                  onClick={() => handleRegionClick("NP-KO")}
                  onMouseEnter={() => setHoveredRegion("NP-KO")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                <path
                  d='m 247.80161,162.09836 2.84,1.72 4.17,0.95 3.31,5.13 3.02,3.18 -0.34,4.46 9.34,4.26 2.29,-0.55 2.42,1.04 4.94,-1.05 5.39,0.69 7.77,4.09 3.85,0.82 7.57,3.94 0,0 -0.41,0.42 0.9,2.55 -2.32,6.26 -1.76,1.82 -2.02,1.61 -4.53,1.54 -6.38,-0.47 -2.07,1.91 1.5,1.06 1.1,2.64 -1.04,2.11 -4.81,-0.96 -1.64,2.63 -2.64,0.81 -1.16,1.19 0.58,1.37 1.65,1.05 0.64,1.77 -2.54,0.5 0.07,1.48 2.23,2.41 1.37,3.05 1.8,1.25 3.74,4.89 7.44,4.18 4.7,5.34 0.06,1.95 0,0 -0.83,1.21 -3.65,1.22 -2.56,2.33 1.19,1.26 -0.25,4.58 3.7,2.44 -2.41,2.78 -1.97,0.79 -4.71,4.49 -1.06,7.28 4.45,2.74 1.81,2.56 -0.02,2.34 -7.6,0.36 -6.41,2.07 -4.37,-0.34 -3.87,2.4 -2.67,6.99 3.63,2.48 2.89,0.26 1.54,0.94 -1.39,1.95 -2.73,0.5 -2.6,2.22 -7.81,-1.15 -1.75,1.45 0.11,1.78 0,0 -2.54,0.38 -1.39,-0.5 -0.41,0.82 -2.24,0.15 -3.5,1.76 -5.42,1.17 -2.61,-0.42 -4.12,1.5 -1.6,-0.09 -6.96,-4.18 -1.61,-2.77 -7.51,-4.27 -8.63,-7.53 -4.64,-2.19 -0.81,0.83 -2.53,-0.86 -2.4,-2.18 -2.57,-4.05 0,0 2.66,-1.79 3.6,-0.18 2.21,-0.91 4.59,0.92 0.28,-3.56 -1.09,-1.35 0.07,-3.71 -1.51,-1.75 -2.04,-0.36 -0.84,-3.7 -7.97,-2.37 -3.4,-4.36 -1.39,-3.17 -8.08,-4.15 -0.62,-2.43 -1.7,-1.33 -2.05,-0.26 -1.86,-1.49 -0.13,-1.01 -2.67,-1.21 -4.01,0.4 -1.48,-2.26 -3.49,-3.13 -0.19,-1.58 1.26,-2.63 -0.18,-1.06 3.19,-2.99 4.78,1.68 7.04,4.88 2.6,0.1 5.25,-6.29 0.16,-2.15 -1.57,-4.3 3,-2.62 2.45,-4.39 -0.35,-4.23 -2.04,-4.61 1.23,-4.52 2.12,-1.07 2.41,0.15 11.7,2.77 2.44,-8.08 5.42,-2.1 2.37,-1.63 -0.6,-4.34 2.59,-3.38 3.85,0.59 4.74,-6.28 9.02,-4.88 2.56,-2.87 0.39,-6.57 z'
                  id='NP-NA'
                  className={getRegionClassName("NP-NA")}
                  onClick={() => handleRegionClick("NP-NA")}
                  onMouseEnter={() => setHoveredRegion("NP-NA")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                <path
                  d='m 454.68161,291.50836 -2.85,3.18 -0.45,1.42 0.81,1.63 -2.53,3.24 0.3,1.47 8.26,1.68 4.3,-0.91 0.86,1.26 2.73,1.17 0.4,2.43 1.77,1.22 3.09,-0.45 1.26,0.86 2.53,0.31 2.49,-3.44 3.74,1.84 2.79,-1.72 6.89,-1.85 9.95,4.19 6.02,0.79 1.55,2.48 1.74,7.71 1.45,1.98 -0.71,1.87 0.92,7.39 5.74,4.18 12.89,4.27 4.41,2.27 0,0 -4.35,4.85 -0.47,2.12 1.18,3.95 1.81,0.87 1.85,2.18 1.54,3.6 0.14,2.12 -2.22,7.29 0.34,2.18 -6.74,6.65 -1.49,4.48 1.39,3.99 -0.08,3.72 -1.73,4.37 -5.12,7.46 -2.48,9.04 0,0 -2.84,-1.17 -4.25,-0.27 -2.47,-0.92 -2.97,0.27 -2.94,-5.93 1.42,-2.21 0.18,-3.75 -8.38,-0.29 -2.27,0.71 0.53,0.63 -0.54,0.58 -0.77,-0.47 -1.39,0.97 -3.06,-0.4 -0.67,-0.3 0.55,-2.04 2.55,-1.11 -4.72,-1.08 -0.97,-0.64 0.57,-0.64 -0.5,-1.06 -2.97,-0.49 0.96,-2.27 -1.93,-2.41 -5.97,-1.15 -4.22,-2.08 -0.02,-1.78 -2.83,-1.36 -1.26,0.16 -1.86,2.49 -1.94,-2.35 -1.41,1.96 -11.51,-5.12 0.43,-2.89 2.73,-3.24 -0.36,-1.08 0.59,-0.25 0.81,-4.96 -0.8,-0.19 -0.31,-1.07 0.81,-1.11 0.53,-4.61 -4.81,-9.95 -2.05,-2.79 -13.2,-2.29 -1.49,0.57 -4.71,-1.83 -8.24,-0.47 -3.62,-1.76 -0.94,0.74 -1.65,-1.34 -0.29,-3.13 -1.4,-1.04 -0.5,-1.67 -2.52,0.01 -0.4,1.07 -0.68,0.03 -0.74,-3.07 -2.39,-0.41 -3.1,-1.7 -0.62,-1.11 0.52,-2.42 -2.47,0.86 -1.17,-1.12 -1.06,0.2 -0.69,2.68 -1.13,0.95 -1.32,0.04 -2.05,4.69 -0.98,-0.22 -1.75,1.09 -2.43,-1.05 -1.69,0.8 -1.29,-0.87 -2.21,0.23 0,0 1.39,-3.86 1.96,-2.64 -4.25,-1.19 -0.06,-1.11 0.95,-0.66 16.17,-0.95 4.34,-0.88 1.86,-1.83 2.26,-4.77 3.48,-1.38 0.51,-1.21 2.78,-0.82 1.31,-1.48 9.65,-4.48 1.47,1.11 3.59,-1.33 3.13,-3.25 0.58,-1.75 0,0 0.33,-0.78 -2.14,-6.08 8.1,-2.65 0.61,-1.17 3.24,-1.58 3.09,-2.64 4,-0.35 z'
                  id='NP-ME'
                  className={getRegionClassName("NP-ME")}
                  onClick={() => handleRegionClick("NP-ME")}
                  onMouseEnter={() => setHoveredRegion("NP-ME")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                <path
                  d='m 657.31161,262.18836 0.55,4.54 1.13,1.31 1.68,-0.22 3.18,3.06 4.14,-1.42 1.08,0.27 0.79,2.19 5.04,2.6 1.71,2.57 2.48,0.88 2.59,-0.16 0,0 -0.65,6.82 3.56,9.51 -2.91,3.9 -0.4,2.07 3.28,3.51 -1.43,3.37 -0.38,6.32 -2.68,5.42 -1.52,13.38 -3.43,4.99 1,5.73 3.26,3.6 -0.11,3.49 3.05,0.96 -3.81,4.17 -2.11,-0.09 -1.89,1.23 0.74,3.6 1.33,1.33 0.2,3.09 -2.19,6.71 0.51,2.13 3.87,2.8 0.14,8.46 2.28,4.58 -1.04,4.36 0.97,1.88 2.52,2.37 5.19,-3.42 7.62,-1.96 2.79,0.5 1.83,2.26 -0.84,4.36 -1.66,2.33 -8.45,8.28 -5.63,7.98 -2.75,2.51 -4.24,6.64 -1.33,4.25 0.4,4.29 0,0 -1.09,0.14 -0.23,2.97 -3.49,0.19 0.04,2.75 -3.43,0.68 -1.87,1.69 -7.31,-1.96 -3.28,3.64 -3.17,-1.56 -0.55,-1.16 -6.43,-2.11 -1.75,-2.12 -4.04,-1.08 -3.42,-4.76 -3.67,-0.09 -4,-2.72 -6.1,-2.02 -0.18,-1 -5.24,-1.24 0.24,-1.16 -3.41,-0.36 -1.42,0.75 -3.93,-0.04 -2.53,2.55 -2.91,-0.5 -0.41,-2.08 -1.56,-0.02 0,0 3.03,-6.22 -1.71,-3.74 -2.34,-1.38 -1.4,-4.09 1.07,-5.52 -1.04,-9.67 1.26,-0.54 5.05,2.38 4.02,-0.3 2.74,-2.08 2,-2.69 4.54,-1.35 1.32,-1.29 2.14,-8.93 -1.22,-2.54 0.38,-2.16 -0.61,-2.93 2.3,-7.13 -10.86,-7.82 -3.96,-0.4 -1.11,-1.08 2.54,-5.07 -1.32,-3.55 -0.12,-5.71 3.76,-6.17 4.75,-3.98 1.46,-3.17 4.37,-5.3 3.42,-1.97 0.89,-2.17 4.33,-5.2 2.04,-4.78 4.84,-1.7 3.27,-2.03 0.37,-4.6 -2.57,-7.04 0.37,-4.21 1.1,-2.31 -1.35,-4.5 -3.54,-4.41 0,0 -1.95,-2.15 0.54,-3.95 0.79,-1.65 3.58,-2.14 3.17,-4.09 2.05,-0.49 3.09,1.07 4.32,-3.34 4.04,0.06 z'
                  id='NP-RA'
                  className={getRegionClassName("NP-RA")}
                  onClick={() => handleRegionClick("NP-RA")}
                  onMouseEnter={() => setHoveredRegion("NP-RA")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                <path
                  d='m 789.81161,286.88836 2.53,0.34 1.33,-0.59 4.2,0.68 2.24,1.66 -0.04,1.43 -2.39,2.09 2.17,3.43 -1.76,4.28 -2.26,2.11 -0.66,6.8 -2.5,2.41 -1.41,4.38 -2.72,2.24 0,2.77 -1.6,1.38 -0.38,1.25 0.67,0.72 -2.23,4.18 0.32,2.36 1.99,3.18 0,1.91 -1.95,1.63 -0.65,3.1 0.12,1.69 1.56,1.55 0.36,1.69 -2.92,6.32 -0.19,3.61 -1.58,3.09 0.04,6.21 -2.56,5.64 3.33,2.95 0.31,3.22 1.73,1.9 2.29,0.77 1.51,-0.48 0.84,3.14 2.25,2.1 1.87,0.23 -1.12,4.19 2.05,2.17 0.01,4.21 3.17,3.1 -0.75,2.48 1.58,4.52 0.19,8.64 -1.97,4.07 -0.67,4.96 -1.89,1.45 -0.83,2.18 0.06,3.11 -1.72,0.51 -0.06,1.12 -0.78,0.42 0.56,1.79 -1.23,3.3 0.9,4.72 -1.18,1.29 0.66,0.82 -1.61,2.59 -5.27,4.92 -0.22,2.38 -2.06,0.05 -1.07,-0.84 -0.68,-1.08 0.08,-2.23 -2.54,-0.53 -3.74,-2.25 -1.15,-1.59 0.89,-1.4 -2.57,-0.32 1.05,-1.05 -1.97,-3.03 -0.41,1.11 -2.65,1.43 0.46,1.19 -1.13,0.7 -0.28,1.09 -2.06,-0.52 0.14,-1.03 -1.47,-1.13 -2.64,-0.84 0.28,0.54 -1.48,1.25 0.3,1.85 -1.32,2.78 -1.23,0.12 -0.4,-1.08 -0.95,-0.1 -0.47,1.21 -1.08,-0.48 -0.91,-1.67 -2.45,-0.91 0,0 -2.11,-4.71 -1.61,-9.83 1.59,-1.47 -1.31,-5.7 3.29,-9.37 0.96,-5.96 -0.5,-2.07 -5.64,-3.46 -2.59,-0.82 -0.81,-1.93 -1.28,-0.99 -5.12,-2.19 0.51,-2.4 -2.34,-5.29 3.11,-4.06 0.85,-3.71 5.08,-6.33 7.65,-4.04 3.2,-2.95 0.96,-2.19 4.1,-4.39 -1.03,-1.34 -7.12,-3.41 -4.26,-1.07 -6.94,-0.52 -4.43,-2.58 -1.47,-3.72 -3.25,-3.67 -0.4,-6.78 2.57,-16.94 4.67,-2.78 0.96,-2 0.85,-5.75 1.57,-2.14 1.41,0.38 1.72,1.87 1.25,-1.54 0.57,-2.27 2.26,-1.36 2.31,-3.59 1.62,-11.39 0,0 2.35,0.84 0.97,2.25 1.56,-2.02 0.94,-0.08 4.32,2.32 1.97,-2.68 3.12,0.62 2.68,2.71 0.73,-0.58 2.23,0.1 1.35,-0.6 2.2,-2.62 1.55,-4.45 4.96,-4.1 4.16,1.21 z'
                  id='NP-MA'
                  className={getRegionClassName("NP-MA")}
                  onClick={() => handleRegionClick("NP-MA")}
                  onMouseEnter={() => setHoveredRegion("NP-MA")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                <path
                  d='m 156.40161,0.2583641 1.49,1.23 3.67,0.68 3.11,2.19 3.9,1.12 18.64,3.47 5.1,2.1299999 4.57,-0.66 7.61,0.86 2.26,0.87 0.55,0.94 -1.68,2.37 1.68,7.54 3.9,3.58 0.99,2.56 0.03,2.15 -2.21,5.71 1.09,1.58 8.03,3.28 3.22,0.33 1.63,1.5 5.57,1.99 2.04,-0.08 2.45,2.04 2.03,-0.31 2.89,1.14 1.62,-0.28 1.91,2.74 6.22,3.35 2.06,2.35 0.41,2.18 5.45,5.62 3.87,2.69 2.53,3.65 0.36,2.17 1.95,3 6.53,2.81 2.57,2.98 1.13,0.62 6.41,0.26 4.94,3.01 2.43,0.01 2.73,1.33 5.34,3.77 6.47,0.83 1.62,2.36 3.09,-0.06 4.73,2.14 1.53,2.33 0.08,4.569996 6.86,2.34 0.69,0.98 -0.39,4.09 6.52,6.23 0.98,3.33 2.5,2.98 1.29,6.18 4.27,2.61 3.27,5.07 2.89,2.41 7.13,3.33 1.78,-0.73 0.72,-1.71 0,0 3.48,3.63 0.58,1.64 -1.61,3.71 -2.82,0.49 -1.11,1.6 -1.1,3.86 0.01,6.97 -11.29,14 -1.64,4.37 -0.16,4.86 -3.92,2.09 -5.4,1.59 -4.01,2.6 -7.33,2.33 -2.45,0.19 -1.75,-0.96 -3.74,-0.46 -3.92,-2.67 -0.9,0.93 0,0 -7.57,-3.94 -3.85,-0.82 -7.77,-4.09 -5.39,-0.69 -4.94,1.05 -2.42,-1.04 -2.29,0.55 -9.34,-4.26 0.34,-4.46 -3.02,-3.18 -3.31,-5.13 -4.17,-0.95 -2.84,-1.72 0,0 -7.37,-2.21 -6.73,2.12 -2.03,-1.6 0.18,-9.45 0.84,-1.76 -1.14,-0.9 -5.18,0.1 -6.18,-0.96 -12.42,7.08 -3.24,4.43 -1.2,3.77 -2.79,1.5 -3.03,-0.35 -4.79,-3.38 -2.72,-0.15 -2,2 -3.36,1.05 -2.99,-0.96 -4.14,2.66 -3.07,-1.78 -1.85,-2.52 -8.9,-1.12 -1.98,-3.49 -2.94,-0.75 -5.95,1.79 -2.05,-1.9 -1.76,-0.52 -0.47,-2.5 2.04,-4.21 -2.21,-0.72 0,0 -2.28,-0.5 -3.37,-3.05 -1.3,-2.64 0.67,-7.68 -1.63,-1.39 -0.72,-1.84 2.54,-3.15 8.4,-7.32 3.75,-0.1 2.85,3.12 0.43,2.77 1.61,0.68 6.67,-2.99 3.42,-2.86 3.09,-4.3 0.94,-3.84 -2.16,-8.5 -1.54,-1.87 -0.39,-9.539996 -2.1,-1.86 -3.26,-0.28 -1.03,-6.23 0.25,-2.48 3.6,-2.47 0.92,-2.45 -0.26,-2.53 1.35,-5.98 1.41,-1.69 1.18,-0.13 0.51,-4.57 -0.59,-3.3 -8.52,-1.29 -1.7,-2.19 -2.87,-0.86 -7.03,2.3 -3.52,-0.27 -4.15,2.54 -1.42,-0.01 -2.55,1.31 -0.68,-6.04 0.3,-4.21 -1.76,-1.97 -4.03,-1.92 -2.89,2.31 -2.38,0.06 -2.39,-2.11 -3.22,-0.37 -3.93,-3.28 0,0 1.03,-5.67 -0.22,-4.02 2.68,-0.99 4.59,0.14 5.07,-7.21 0.12,-4.1 1.98,-6.01 -2.13,-5.409999 -0.29,-3.19 1.09,-3 3.47,-1.33 4.86,-0.41 1.23,0.64 2.34,3.54 5.65,1.65 0.89,-6.27 z'
                  id='NP-SE'
                  className={getRegionClassName("NP-SE")}
                  onClick={() => handleRegionClick("NP-SE")}
                  onMouseEnter={() => setHoveredRegion("NP-SE")}
                  onMouseLeave={() => setHoveredRegion(null)}
                />
                {visibleMarkers.map((marker, index) => {
                  const category = CATEGORIES.find((c) => c.id === marker.type);
                  return (
                    <g
                      key={index}
                      className='cursor-pointer transition-all duration-300'
                      onMouseEnter={() => setHoveredMarker(marker.id)}
                      onMouseLeave={() => setHoveredMarker(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMarkerId(marker.id);
                        setActiveRegion(null);
                        setShowDetails(false);
                      }}
                    >
                      <foreignObject
                        x={marker.x - 16}
                        y={marker.y - 16}
                        width={32}
                        height={32}
                        className='overflow-visible'
                      >
                        <div className='flex items-center justify-center w-full h-full text-white drop-shadow-md hover:scale-125 transition-transform duration-200'>
                          {category?.icon}
                        </div>
                      </foreignObject>
                    </g>
                  );
                })}
              </svg>

              {/* Tooltip for Region Hover */}
              {hoveredRegion && !activeRegion && !hoveredMarker && (
                <div className='absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium pointer-events-none z-20 border border-white/10 whitespace-nowrap'>
                  {REGION_DATA[hoveredRegion as keyof typeof REGION_DATA]?.name}
                </div>
              )}

              {/* Tooltip for Marker Hover */}
              {hoveredMarker && (() => {
                const marker = MARKERS.find((m) => m.id === hoveredMarker);
                if (!marker) return null;
                
                return (
                  <div 
                    className='absolute bg-black/90 backdrop-blur-md text-white px-3 py-2 rounded-lg text-sm font-medium pointer-events-none z-20 border border-white/10 flex flex-col gap-0.5 shadow-xl min-w-[150px]'
                    style={{
                      left: `${(marker.x / 800.37) * 100}%`,
                      top: `${(marker.y / 454.29) * 100}%`,
                      transform: 'translate(12px, -50%)'
                    }}
                  >
                    <span className="font-bold text-[#d4344f] text-xs uppercase tracking-wider">
                      {marker.name}
                    </span>
                    <span className='text-[10px] text-gray-300 font-normal leading-tight'>
                      {marker.description}
                    </span>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Info Panel */}
          <div className='w-full lg:w-1/3'>
            {selectedMarkerData ? (
              <div className='bg-[#120a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right duration-500'>
                {/* Marker Header Image */}
                <div className='relative h-40 w-full'>
                  <Image
                    src={selectedMarkerData.image}
                    alt={selectedMarkerData.name}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#120a0a] via-black/50 to-transparent' />
                  <div className='absolute bottom-0 left-0 p-6 w-full'>
                    <div className='flex items-center gap-2 mb-2'>
                      <span className='px-2 py-0.5 bg-[#d4344f] text-white text-[10px] font-bold uppercase tracking-wider rounded-full'>
                        {CATEGORIES.find((c) => c.id === activeCategory)
                          ?.label || "Location"}
                      </span>
                    </div>
                    <h3
                      className={`${playfair.className} text-2xl text-white font-bold mb-1`}
                    >
                      {selectedMarkerData.name}
                    </h3>
                  </div>
                </div>

                <div className='p-6'>
                  <p className='text-gray-300 leading-relaxed text-sm mb-6'>
                    {selectedMarkerData.description}
                  </p>

                  {/* Marker Specific Stats */}
                  <div className='grid grid-cols-2 gap-3 mb-6'>
                    <div className='bg-white/5 p-3 rounded-lg border border-white/5'>
                      <div className='text-[#d4344f] text-xs uppercase font-bold mb-1 flex items-center gap-1.5'>
                        <Mountain className='w-3 h-3' /> Elevation
                      </div>
                      <div className='text-white text-xs font-medium'>
                        {selectedMarkerData.stats.elevation}
                      </div>
                    </div>
                    <div className='bg-white/5 p-3 rounded-lg border border-white/5'>
                      <div className='text-[#d4344f] text-xs uppercase font-bold mb-1 flex items-center gap-1.5'>
                        <Navigation className='w-3 h-3' /> Access
                      </div>
                      <div className='text-white text-xs font-medium'>
                        {selectedMarkerData.stats.access}
                      </div>
                    </div>
                  </div>

                  {/* Marker Highlights */}
                  <div className='mb-6'>
                    <h4 className='text-xs font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2'>
                      <Sparkles className='w-3 h-3 text-[#d4344f]' /> Highlights
                    </h4>
                    <ul className='space-y-2'>
                      {selectedMarkerData.highlights.map((h, i) => (
                        <li
                          key={i}
                          className='flex items-start text-gray-400 text-sm'
                        >
                          <span className='w-1 h-1 bg-[#d4344f] rounded-full mt-2 mr-2 shrink-0'></span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Marker Tips */}
                  {selectedMarkerData.tips && (
                    <div>
                      <h4 className='text-xs font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2'>
                        <Lightbulb className='w-3 h-3 text-[#d4344f]' /> Travel
                        Tips
                      </h4>
                      <ul className='space-y-2'>
                        {selectedMarkerData.tips.map((tip, i) => (
                          <li
                            key={i}
                            className='flex items-start text-gray-400 text-sm'
                          >
                            <span className='w-1 h-1 bg-[#d4344f] rounded-full mt-2 mr-2 shrink-0'></span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ) : selectedRegionData ? (
              <div className='bg-[#120a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-right duration-500'>
                {/* Header Image */}
                <div className='relative h-48 w-full'>
                  <Image
                    src={selectedRegionData.image}
                    alt={selectedRegionData.name}
                    fill
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-[#120a0a] via-black/50 to-transparent' />
                  <div className='absolute bottom-0 left-0 p-6 w-full'>
                    <h3
                      className={`${playfair.className} text-3xl text-white font-bold mb-1`}
                    >
                      {selectedRegionData.name}
                    </h3>
                    <div className='flex items-center gap-2 text-gray-300 text-xs uppercase tracking-wider font-medium'>
                      <MapPin className='w-3 h-3 text-[#d4344f]' /> Nepal
                    </div>
                  </div>
                </div>

                <div className='p-6'>
                  <p className='text-gray-300 leading-relaxed text-sm mb-6'>
                    {selectedRegionData.description}
                  </p>

                  {/* Collapsible Content */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      showDetails
                        ? "grid-rows-[1fr] opacity-100 mb-6"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className='overflow-hidden'>
                      {/* Stats */}
                      <div className='grid grid-cols-2 gap-3 mb-6'>
                        <div className='bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors'>
                          <div className='text-[#d4344f] text-xs uppercase font-bold mb-1 flex items-center gap-1.5'>
                            <Mountain className='w-3 h-3' /> Elevation
                          </div>
                          <div className='text-white text-xs font-medium'>
                            {selectedRegionData.stats.elevation}
                          </div>
                        </div>
                        <div className='bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors'>
                          <div className='text-[#d4344f] text-xs uppercase font-bold mb-1 flex items-center gap-1.5'>
                            <Calendar className='w-3 h-3' /> Best Time
                          </div>
                          <div className='text-white text-xs font-medium'>
                            {selectedRegionData.bestTime}
                          </div>
                        </div>
                        <div className='bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors'>
                          <div className='text-[#d4344f] text-xs uppercase font-bold mb-1 flex items-center gap-1.5'>
                            <Thermometer className='w-3 h-3' /> Climate
                          </div>
                          <div className='text-white text-xs font-medium'>
                            {selectedRegionData.stats.climate}
                          </div>
                        </div>
                        <div className='bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors'>
                          <div className='text-[#d4344f] text-xs uppercase font-bold mb-1 flex items-center gap-1.5'>
                            <Navigation className='w-3 h-3' /> Access
                          </div>
                          <div className='text-white text-xs font-medium'>
                            {selectedRegionData.stats.access}
                          </div>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className='mb-6'>
                        <h4 className='text-xs font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2'>
                          <Sparkles className='w-3 h-3 text-[#d4344f]' />{" "}
                          Highlights
                        </h4>
                        <ul className='space-y-2'>
                          {selectedRegionData.highlights.map((h, i) => (
                            <li
                              key={i}
                              className='flex items-start text-gray-400 text-sm'
                            >
                              <span className='w-1 h-1 bg-[#d4344f] rounded-full mt-2 mr-2 shrink-0'></span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Activities */}
                      <div className='mb-6'>
                        <h4 className='text-xs font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2'>
                          <Target className='w-3 h-3 text-[#d4344f]' />{" "}
                          Activities
                        </h4>
                        <div className='flex flex-wrap gap-2'>
                          {selectedRegionData.activities.map((a, i) => (
                            <span
                              key={i}
                              className='px-2.5 py-1 bg-white/5 rounded text-[10px] text-gray-300 border border-white/10'
                            >
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tips */}
                      {selectedRegionData.tips && (
                        <div>
                          <h4 className='text-xs font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2'>
                            <Lightbulb className='w-3 h-3 text-[#d4344f]' />{" "}
                            Travel Tips
                          </h4>
                          <ul className='space-y-2'>
                            {selectedRegionData.tips.map((tip, i) => (
                              <li
                                key={i}
                                className='flex items-start text-gray-400 text-sm'
                              >
                                <span className='w-1 h-1 bg-[#d4344f] rounded-full mt-2 mr-2 shrink-0'></span>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className='flex flex-col gap-3'>
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className='w-full py-2.5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-2 group'
                    >
                      {showDetails ? "Show Less" : "View Details"}
                      {showDetails ? (
                        <ChevronUp className='w-4 h-4 text-gray-500 group-hover:text-white transition-colors' />
                      ) : (
                        <ChevronDown className='w-4 h-4 text-gray-500 group-hover:text-white transition-colors' />
                      )}
                    </button>

                    {selectedRegionData.slug && (
                      <button
                        onClick={() =>
                          handleExploreClick(selectedRegionData.slug)
                        }
                        className='w-full py-3 bg-[#d4344f] text-white font-bold rounded-lg hover:bg-[#b02b40] transition-all shadow-lg shadow-[#d4344f]/20 flex items-center justify-center gap-2 text-sm uppercase tracking-wide'
                      >
                        Explore Region <ArrowRight className='w-4 h-4' />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className='h-full flex flex-col items-center justify-center text-center p-8 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm min-h-[400px]'>
                <div className='w-16 h-16 mb-6 rounded-full bg-white/5 flex items-center justify-center'>
                  <Info className='w-8 h-8 text-gray-500' />
                </div>
                <h3 className='text-xl font-bold text-white mb-2'>
                  First Time in Nepal?
                </h3>
                <p className='text-gray-400 text-sm max-w-xs mb-6'>
                  Nepal offers diverse experiences from the high Himalayas to
                  the lush jungles. Click on any region on the map to discover
                  specific highlights, best times to visit, and essential travel
                  tips.
                </p>
                <div className='text-left bg-black/20 p-4 rounded-lg max-w-xs w-full'>
                  <h4 className='text-[#d4344f] text-xs font-bold uppercase mb-2 flex items-center gap-2'>
                    <Lightbulb className='w-3 h-3' /> Quick Tips
                  </h4>
                  <ul className='text-xs text-gray-400 space-y-2'>
                    <li>• Visa on arrival is available at TIA.</li>
                    <li>• Respect local customs and dress modestly.</li>
                    <li>• Drink bottled or purified water only.</li>
                    <li>• Carry cash for remote areas.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
