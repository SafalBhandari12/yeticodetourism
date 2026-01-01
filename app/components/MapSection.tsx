"use client";

import dynamic from "next/dynamic";
import { Suspense, useState, useMemo } from "react";
import {
  MapPin,
  Mountain,
  Plane,
  Building2,
  Sparkles,
  Footprints,
  Hotel,
  Trees,
  X,
  ChevronRight,
  LayoutGrid,
} from "lucide-react";
import Image from "next/image";
import { MarkerType, MapMarker } from "./NepalMap";

// Dynamically import the map component with SSR disabled
const NepalMap = dynamic(() => import("./NepalMap"), {
  ssr: false,
  loading: () => (
    <div className='h-full w-full bg-gray-100 animate-pulse flex items-center justify-center min-h-[600px]'>
      <span className='text-gray-500 font-medium'>
        Loading Interactive Map...
      </span>
    </div>
  ),
});

// --- Data Definitions ---

const REGION_DATA: Record<string, any> = {
  "NP-BA": {
    name: "Bagmati Province",
    description:
      "The cultural and political heart of Nepal, home to the Kathmandu Valley. This region is a living museum of ancient history.",
    highlights: ["Kathmandu Durbar Square", "Bhaktapur", "Patan", "Nagarkot"],
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
  },
  "NP-GA": {
    name: "Gandaki Province",
    description:
      "A paradise for trekkers and nature lovers. Contains the Annapurna range and Pokhara valley.",
    highlights: ["Pokhara", "Annapurna Circuit", "Mustang", "Manang"],
    image:
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800",
  },
  "NP-KO": {
    name: "Koshi Province",
    description:
      "Home to the Koshi Tappu Wildlife Reserve and the mighty Koshi river. A region of wetlands and biodiversity.",
    highlights: ["Koshi Tappu", "Dharan", "Bhedetar", "Mt. Everest"],
    image:
      "https://images.unsplash.com/photo-1596423736776-361067356c92?q=80&w=800",
  },
  "NP-LU": {
    name: "Lumbini Province",
    description:
      "The birthplace of Lord Buddha. A sacred pilgrimage site with monasteries from around the world.",
    highlights: ["Maya Devi Temple", "World Peace Pagoda", "Monasteries"],
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=800",
  },
  "NP-KA": {
    name: "Karnali Province",
    description:
      "The wild west of Nepal. Remote, untouched, and home to the stunning Rara Lake.",
    highlights: ["Rara Lake", "Shey Phoksundo", "Jumla", "Dolpo"],
    image:
      "https://images.unsplash.com/photo-1623492701902-47dc207df5dc?q=80&w=800",
  },
  "NP-JA": {
    name: "Madhesh Province",
    description:
      "The cultural hub of the Mithila region. Known for the grand Janaki Temple and vibrant art.",
    highlights: ["Janaki Temple", "Mithila Art", "Vivah Panchami"],
    image:
      "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=800",
  },
  "NP-SE": {
    name: "Sudurpashchim Province",
    description:
      "Far-western region known for Khaptad National Park and its rolling green hills.",
    highlights: ["Khaptad", "Shuklaphanta", "Api Nampa"],
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
  },
};

const PROVINCE_MAPPING: Record<string, string> = {
  "Bagmati Pradesh": "NP-BA",
  "Gandaki Pradesh": "NP-GA",
  "Koshi Pradesh": "NP-KO",
  "Province No. 1": "NP-KO",
  "Lumbini Pradesh": "NP-LU",
  "Karnali Pradesh": "NP-KA",
  "Madhesh Pradesh": "NP-JA",
  "Province No. 2": "NP-JA",
  "Sudurpashchim Pradesh": "NP-SE",
  "Sudur Paschim Pradesh": "NP-SE",
};

const CATEGORIES = [
  { id: "airports", label: "Airports", icon: Plane, color: "bg-sky-600" },
  { id: "cities", label: "Cities", icon: Building2, color: "bg-indigo-600" },
  {
    id: "highlights",
    label: "Highlights",
    icon: Sparkles,
    color: "bg-amber-500",
  },
  {
    id: "trekking",
    label: "Trekking",
    icon: Footprints,
    color: "bg-emerald-600",
  },
  { id: "accommodation", label: "Stays", icon: Hotel, color: "bg-rose-600" },
  { id: "nature", label: "Nature", icon: Trees, color: "bg-green-600" },
];

const ALL_MARKERS: MapMarker[] = [
  // Airports
  {
    id: "tia",
    name: "Tribhuvan Intl. Airport",
    type: "airports",
    position: [27.6966, 85.3591],
    description: "Kathmandu - The main gateway to Nepal",
  },
  {
    id: "gbia",
    name: "Gautam Buddha Intl. Airport",
    type: "airports",
    position: [27.5067, 83.4167],
    description: "Bhairahawa - Gateway to Lumbini",
  },
  {
    id: "pria",
    name: "Pokhara Intl. Airport",
    type: "airports",
    position: [28.1833, 84.0],
    description: "Pokhara - Gateway to Annapurna",
  },

  // Cities
  {
    id: "ktm",
    name: "Kathmandu",
    type: "cities",
    position: [27.7172, 85.324],
    description: "Capital City",
  },
  {
    id: "pkr",
    name: "Pokhara",
    type: "cities",
    position: [28.2096, 83.9856],
    description: "City of Lakes",
  },
  {
    id: "brt",
    name: "Biratnagar",
    type: "cities",
    position: [26.4525, 87.2718],
    description: "Industrial Hub",
  },
  {
    id: "npj",
    name: "Nepalgunj",
    type: "cities",
    position: [28.05, 81.6167],
    description: "Western Hub",
  },
  {
    id: "dharan",
    name: "Dharan",
    type: "cities",
    position: [26.8065, 87.2846],
    description: "Beautiful Eastern City",
  },
  {
    id: "janakpur",
    name: "Janakpur",
    type: "cities",
    position: [26.7271, 85.9407],
    description: "City of Ponds",
  },

  // Highlights
  {
    id: "evt",
    name: "Mt. Everest",
    type: "highlights",
    position: [27.9881, 86.925],
    description: "Top of the World",
  },
  {
    id: "lmb",
    name: "Lumbini",
    type: "highlights",
    position: [27.4705, 83.2755],
    description: "Birthplace of Buddha",
  },
  {
    id: "muktinath",
    name: "Muktinath",
    type: "highlights",
    position: [28.8168, 83.8719],
    description: "Sacred Temple",
  },
  {
    id: "gosaikunda",
    name: "Gosaikunda",
    type: "highlights",
    position: [28.0833, 85.4167],
    description: "Alpine Freshwater Lake",
  },

  // Trekking
  {
    id: "abc",
    name: "Annapurna Base Camp",
    type: "trekking",
    position: [28.53, 83.878],
    description: "Popular Trek",
  },
  {
    id: "ebc",
    name: "Everest Base Camp",
    type: "trekking",
    position: [28.0043, 86.8557],
    description: "Iconic Trek",
  },
  {
    id: "manaslu",
    name: "Manaslu Circuit",
    type: "trekking",
    position: [28.5497, 84.5597],
    description: "Off the beaten path",
  },
  {
    id: "langtang",
    name: "Langtang Valley",
    type: "trekking",
    position: [28.2167, 85.5667],
    description: "Valley of Glaciers",
  },
  {
    id: "kanchenjunga",
    name: "Kanchenjunga Base Camp",
    type: "trekking",
    position: [27.7025, 88.1475],
    description: "Remote Eastern Trek",
  },

  // Accommodation
  {
    id: "dwarikas",
    name: "Dwarika's Hotel",
    type: "accommodation",
    position: [27.705, 85.345],
    description: "Heritage Hotel in Kathmandu",
  },
  {
    id: "fishtail",
    name: "Fish Tail Lodge",
    type: "accommodation",
    position: [28.205, 83.965],
    description: "Luxury in Pokhara",
  },
  {
    id: "meghauli",
    name: "Meghauli Serai",
    type: "accommodation",
    position: [27.5833, 84.2333],
    description: "Jungle Lodge in Chitwan",
  },
  {
    id: "pavilion",
    name: "The Pavilions Himalayas",
    type: "accommodation",
    position: [28.18, 83.95],
    description: "Eco Resort in Pokhara",
  },

  // Nature
  {
    id: "chitwan_np",
    name: "Chitwan National Park",
    type: "nature",
    position: [27.5333, 84.45],
    description: "Wildlife Safari",
  },
  {
    id: "bardia_np",
    name: "Bardia National Park",
    type: "nature",
    position: [28.45, 81.3333],
    description: "Tiger Territory",
  },
  {
    id: "rara_np",
    name: "Rara National Park",
    type: "nature",
    position: [29.5333, 82.0833],
    description: "Scenic Lake",
  },
  {
    id: "sagarmatha_np",
    name: "Sagarmatha National Park",
    type: "nature",
    position: [27.9333, 86.7167],
    description: "Home of Everest",
  },
  {
    id: "langtang_np",
    name: "Langtang National Park",
    type: "nature",
    position: [28.1667, 85.5],
    description: "First National Park",
  },
];

const MapSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("airports");
  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const filteredMarkers = useMemo(() => {
    return ALL_MARKERS.filter((marker) => marker.type === activeCategory);
  }, [activeCategory]);

  const handleRegionClick = (regionName: string) => {
    const regionKey = PROVINCE_MAPPING[regionName];
    if (regionKey && REGION_DATA[regionKey]) {
      setSelectedRegion(regionKey);
    }
  };

  const activeRegionData = selectedRegion ? REGION_DATA[selectedRegion] : null;

  return (
    <section className='h-screen w-full relative bg-[#050505] overflow-hidden'>
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.25);
        }
      `}</style>

      {/* Map Background - Full Screen */}
      <div className='absolute inset-0 z-0'>
        <Suspense fallback={<div className='h-full w-full bg-[#050505]' />}>
          <NepalMap
            markers={filteredMarkers}
            selectedMarkerId={selectedMarkerId}
            onMarkerClick={(marker) => {
              setSelectedMarkerId(marker.id);
              setSidebarOpen(true);
            }}
            onRegionClick={handleRegionClick}
          />
        </Suspense>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!isSidebarOpen)}
        className={`absolute top-24 right-6 z-20 p-3 bg-black/40 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 rounded-xl ${
          isSidebarOpen
            ? "opacity-0 pointer-events-none translate-x-10"
            : "opacity-100 translate-x-0"
        }`}
        aria-label='Open Menu'
      >
        <LayoutGrid className='w-6 h-6' />
      </button>

      {/* Floating Sidebar - Glassmorphism */}
      <div
        className={`absolute top-24 bottom-4 right-6 w-[400px] bg-black/60 backdrop-blur-2xl border border-white/10 shadow-2xl z-10 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] transform rounded-2xl overflow-hidden ${
          isSidebarOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-[440px] opacity-0"
        }`}
      >
        {/* Header */}
        <div className='p-4 border-b border-white/5 flex justify-between items-center bg-white/5'>
          <div>
            <h3 className='text-xl font-light text-white tracking-wide'>
              <span className='font-bold text-primary'>Explore</span> Nepal
            </h3>
            <p className='text-xs text-gray-400 mt-1 font-light tracking-wider uppercase'>
              Interactive Map
            </p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className='p-2 hover:bg-white/10 text-gray-400 hover:text-white transition-colors rounded-lg'
          >
            <X className='w-5 h-5' />
          </button>
        </div>

        {/* Categories Grid */}
        <div className='p-2 grid grid-cols-3 gap-1 bg-black/20'>
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setSelectedMarkerId(null);
                }}
                className={`flex flex-row items-center justify-start p-2 transition-all duration-300 border rounded-lg ${
                  isActive
                    ? `bg-white/10 border-white/20 text-white shadow-lg`
                    : "bg-transparent border-transparent text-gray-500 hover:bg-white/5 hover:text-gray-300"
                }`}
              >
                <Icon
                  className={`w-4 h-4 mr-2 ${
                    isActive ? "text-white" : "text-current"
                  }`}
                />
                <span className='text-[10px] font-medium uppercase tracking-wider'>
                  {category.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* List Header */}
        <div className='px-6 py-2 bg-white/5 border-y border-white/5 flex justify-between items-center'>
          <span className='text-xs font-medium text-gray-400 uppercase tracking-wider'>
            {CATEGORIES.find((c) => c.id === activeCategory)?.label}
          </span>
          <span className='px-2 py-0.5 bg-white/10 text-gray-300 text-[10px] font-bold rounded-md'>
            {filteredMarkers.length}
          </span>
        </div>

        {/* Scrollable List */}
        <div className='flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1'>
          {filteredMarkers.map((marker) => {
            const isSelected = selectedMarkerId === marker.id;
            const CategoryIcon =
              CATEGORIES.find((c) => c.id === marker.type)?.icon || MapPin;

            return (
              <button
                key={marker.id}
                onClick={() => setSelectedMarkerId(marker.id)}
                className={`w-full text-left p-3 transition-all duration-300 group border relative overflow-hidden rounded-lg ${
                  isSelected
                    ? "bg-white/10 border-white/20 shadow-lg"
                    : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/5"
                }`}
              >
                {isSelected && (
                  <div className='absolute left-0 top-0 bottom-0 w-1 bg-primary' />
                )}
                <div className='flex items-start gap-3'>
                  <div
                    className={`p-2 flex-shrink-0 rounded-md ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-white/5 text-gray-500 group-hover:text-gray-300"
                    } transition-colors`}
                  >
                    <CategoryIcon className='w-4 h-4' />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <div className='flex items-center justify-between mb-1'>
                      <h4
                        className={`font-medium truncate text-sm ${
                          isSelected
                            ? "text-white"
                            : "text-gray-300 group-hover:text-white"
                        }`}
                      >
                        {marker.name}
                      </h4>
                      {isSelected && (
                        <ChevronRight className='w-3 h-3 text-primary' />
                      )}
                    </div>
                    <p className='text-xs text-gray-500 line-clamp-2 font-light leading-relaxed group-hover:text-gray-400'>
                      {marker.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Region Detail Overlay - Bottom Left Floating Card */}
      {activeRegionData && (
        <div className='absolute bottom-8 left-8 max-w-md w-full bg-black/60 backdrop-blur-2xl border border-white/10 p-5 z-10 animate-in slide-in-from-bottom-10 fade-in duration-500 shadow-2xl rounded-2xl'>
          <button
            onClick={() => setSelectedRegion(null)}
            className='absolute top-4 right-4 p-2 hover:bg-white/10 transition-colors rounded-lg'
          >
            <X className='w-4 h-4 text-gray-400' />
          </button>

          <div className='flex gap-4'>
            <div className='relative w-24 h-32 flex-shrink-0 overflow-hidden shadow-lg border border-white/10 rounded-xl'>
              <Image
                src={activeRegionData.image}
                alt={activeRegionData.name}
                fill
                className='object-cover'
              />
            </div>
            <div className='flex-1 py-1'>
              <h3 className='text-xl font-bold text-white mb-2'>
                {activeRegionData.name}
              </h3>
              <p className='text-sm text-gray-400 mb-4 leading-relaxed font-light line-clamp-3'>
                {activeRegionData.description}
              </p>
              <div className='flex flex-wrap gap-2'>
                {activeRegionData.highlights.slice(0, 2).map((h: string) => (
                  <span
                    key={h}
                    className='px-2.5 py-1 bg-white/10 text-gray-200 text-[10px] font-semibold uppercase tracking-wide border border-white/5 rounded-md'
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MapSection;
