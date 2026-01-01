'use client';

import dynamic from 'next/dynamic';
import { Suspense, useState, useMemo } from 'react';
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
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';
import { MarkerType, MapMarker } from './NepalMap';

// Dynamically import the map component with SSR disabled
const NepalMap = dynamic(() => import('./NepalMap'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-100 animate-pulse rounded-xl flex items-center justify-center min-h-[600px]">
      <span className="text-gray-500 font-medium">Loading Interactive Map...</span>
    </div>
  ),
});

// --- Data Definitions ---

const REGION_DATA: Record<string, any> = {
  "NP-BA": {
    name: "Bagmati Province",
    description: "The cultural and political heart of Nepal, home to the Kathmandu Valley. This region is a living museum of ancient history.",
    highlights: ["Kathmandu Durbar Square", "Bhaktapur", "Patan", "Nagarkot"],
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
  },
  "NP-GA": {
    name: "Gandaki Province",
    description: "A paradise for trekkers and nature lovers. Contains the Annapurna range and Pokhara valley.",
    highlights: ["Pokhara", "Annapurna Circuit", "Mustang", "Manang"],
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=800",
  },
  "NP-KO": {
    name: "Koshi Province",
    description: "Home to the Koshi Tappu Wildlife Reserve and the mighty Koshi river. A region of wetlands and biodiversity.",
    highlights: ["Koshi Tappu", "Dharan", "Bhedetar", "Mt. Everest"],
    image: "https://images.unsplash.com/photo-1596423736776-361067356c92?q=80&w=800",
  },
  "NP-LU": {
    name: "Lumbini Province",
    description: "The birthplace of Lord Buddha. A sacred pilgrimage site with monasteries from around the world.",
    highlights: ["Maya Devi Temple", "World Peace Pagoda", "Monasteries"],
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=800",
  },
  "NP-KA": {
    name: "Karnali Province",
    description: "The wild west of Nepal. Remote, untouched, and home to the stunning Rara Lake.",
    highlights: ["Rara Lake", "Shey Phoksundo", "Jumla", "Dolpo"],
    image: "https://images.unsplash.com/photo-1623492701902-47dc207df5dc?q=80&w=800",
  },
  "NP-JA": {
    name: "Madhesh Province",
    description: "The cultural hub of the Mithila region. Known for the grand Janaki Temple and vibrant art.",
    highlights: ["Janaki Temple", "Mithila Art", "Vivah Panchami"],
    image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=800",
  },
  "NP-SE": {
    name: "Sudurpashchim Province",
    description: "Far-western region known for Khaptad National Park and its rolling green hills.",
    highlights: ["Khaptad", "Shuklaphanta", "Api Nampa"],
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800",
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
  { id: 'airports', label: 'Airports', icon: Plane, color: 'bg-sky-600' },
  { id: 'cities', label: 'Cities', icon: Building2, color: 'bg-indigo-600' },
  { id: 'highlights', label: 'Highlights', icon: Sparkles, color: 'bg-amber-500' },
  { id: 'trekking', label: 'Trekking', icon: Footprints, color: 'bg-emerald-600' },
  { id: 'accommodation', label: 'Stays', icon: Hotel, color: 'bg-rose-600' },
  { id: 'nature', label: 'Nature', icon: Trees, color: 'bg-green-600' },
];

const ALL_MARKERS: MapMarker[] = [
  // Airports
  { id: 'tia', name: 'Tribhuvan Intl. Airport', type: 'airports', position: [27.6966, 85.3591], description: 'Kathmandu - The main gateway to Nepal' },
  { id: 'gbia', name: 'Gautam Buddha Intl. Airport', type: 'airports', position: [27.5067, 83.4167], description: 'Bhairahawa - Gateway to Lumbini' },
  { id: 'pria', name: 'Pokhara Intl. Airport', type: 'airports', position: [28.1833, 84.0000], description: 'Pokhara - Gateway to Annapurna' },
  
  // Cities
  { id: 'ktm', name: 'Kathmandu', type: 'cities', position: [27.7172, 85.3240], description: 'Capital City' },
  { id: 'pkr', name: 'Pokhara', type: 'cities', position: [28.2096, 83.9856], description: 'City of Lakes' },
  { id: 'brt', name: 'Biratnagar', type: 'cities', position: [26.4525, 87.2718], description: 'Industrial Hub' },
  { id: 'npj', name: 'Nepalgunj', type: 'cities', position: [28.0500, 81.6167], description: 'Western Hub' },
  { id: 'dharan', name: 'Dharan', type: 'cities', position: [26.8065, 87.2846], description: 'Beautiful Eastern City' },
  { id: 'janakpur', name: 'Janakpur', type: 'cities', position: [26.7271, 85.9407], description: 'City of Ponds' },

  // Highlights
  { id: 'evt', name: 'Mt. Everest', type: 'highlights', position: [27.9881, 86.9250], description: 'Top of the World' },
  { id: 'lmb', name: 'Lumbini', type: 'highlights', position: [27.4705, 83.2755], description: 'Birthplace of Buddha' },
  { id: 'muktinath', name: 'Muktinath', type: 'highlights', position: [28.8168, 83.8719], description: 'Sacred Temple' },
  { id: 'gosaikunda', name: 'Gosaikunda', type: 'highlights', position: [28.0833, 85.4167], description: 'Alpine Freshwater Lake' },

  // Trekking
  { id: 'abc', name: 'Annapurna Base Camp', type: 'trekking', position: [28.5300, 83.8780], description: 'Popular Trek' },
  { id: 'ebc', name: 'Everest Base Camp', type: 'trekking', position: [28.0043, 86.8557], description: 'Iconic Trek' },
  { id: 'manaslu', name: 'Manaslu Circuit', type: 'trekking', position: [28.5497, 84.5597], description: 'Off the beaten path' },
  { id: 'langtang', name: 'Langtang Valley', type: 'trekking', position: [28.2167, 85.5667], description: 'Valley of Glaciers' },
  { id: 'kanchenjunga', name: 'Kanchenjunga Base Camp', type: 'trekking', position: [27.7025, 88.1475], description: 'Remote Eastern Trek' },

  // Accommodation
  { id: 'dwarikas', name: "Dwarika's Hotel", type: 'accommodation', position: [27.7050, 85.3450], description: 'Heritage Hotel in Kathmandu' },
  { id: 'fishtail', name: 'Fish Tail Lodge', type: 'accommodation', position: [28.2050, 83.9650], description: 'Luxury in Pokhara' },
  { id: 'meghauli', name: 'Meghauli Serai', type: 'accommodation', position: [27.5833, 84.2333], description: 'Jungle Lodge in Chitwan' },
  { id: 'pavilion', name: 'The Pavilions Himalayas', type: 'accommodation', position: [28.1800, 83.9500], description: 'Eco Resort in Pokhara' },

  // Nature
  { id: 'chitwan_np', name: 'Chitwan National Park', type: 'nature', position: [27.5333, 84.4500], description: 'Wildlife Safari' },
  { id: 'bardia_np', name: 'Bardia National Park', type: 'nature', position: [28.4500, 81.3333], description: 'Tiger Territory' },
  { id: 'rara_np', name: 'Rara National Park', type: 'nature', position: [29.5333, 82.0833], description: 'Scenic Lake' },
  { id: 'sagarmatha_np', name: 'Sagarmatha National Park', type: 'nature', position: [27.9333, 86.7167], description: 'Home of Everest' },
  { id: 'langtang_np', name: 'Langtang National Park', type: 'nature', position: [28.1667, 85.5000], description: 'First National Park' },
];

const MapSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('airports');
  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const filteredMarkers = useMemo(() => {
    return ALL_MARKERS.filter(marker => marker.type === activeCategory);
  }, [activeCategory]);

  const handleRegionClick = (regionName: string) => {
    const regionKey = PROVINCE_MAPPING[regionName];
    if (regionKey && REGION_DATA[regionKey]) {
      setSelectedRegion(regionKey);
    }
  };

  const activeRegionData = selectedRegion ? REGION_DATA[selectedRegion] : null;

  return (
    <section className="py-20 bg-[#111] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl mb-6 tracking-tight">
            Explore Nepal
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Navigate through the diverse landscapes, cultural hubs, and natural wonders of the Himalayas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-[800px] lg:h-[700px]">
          {/* Map Container - Left Side (8 cols) */}
          <div className="lg:col-span-8 h-full relative rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-[#1a1a1a]">
            <Suspense fallback={<div>Loading...</div>}>
              <NepalMap 
                markers={filteredMarkers} 
                selectedMarkerId={selectedMarkerId}
                onMarkerClick={(marker) => setSelectedMarkerId(marker.id)}
                onRegionClick={handleRegionClick}
              />
            </Suspense>
            
            {/* Region Detail Overlay */}
            {activeRegionData && (
              <div className="absolute bottom-6 left-6 right-6 bg-[#1a1a1a]/95 backdrop-blur-md p-6 rounded-xl shadow-2xl border border-white/10 z-[1000] animate-in slide-in-from-bottom-10 duration-300">
                <button 
                  onClick={() => setSelectedRegion(null)}
                  className="absolute top-3 right-3 p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
                <div className="flex gap-6 items-start">
                  <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden hidden sm:block shadow-md border border-white/10">
                    <Image 
                      src={activeRegionData.image} 
                      alt={activeRegionData.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{activeRegionData.name}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{activeRegionData.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {activeRegionData.highlights.map((h: string) => (
                        <span key={h} className="px-3 py-1 bg-white/10 text-gray-200 text-xs rounded-full font-semibold uppercase tracking-wide border border-white/5">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Navigation & List - Right Side (4 cols) */}
          <div className="lg:col-span-4 flex flex-col h-full gap-6">
            
            {/* Category Selector */}
            <div className="bg-[#1a1a1a] rounded-xl shadow-sm border border-white/10 p-2">
              <div className="grid grid-cols-3 gap-2">
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
                      className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? `${category.color} text-white shadow-md transform scale-105` 
                          : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-1.5 ${isActive ? 'text-white' : 'text-current'}`} />
                      <span className="text-xs font-medium">{category.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* List of Items */}
            <div className="flex-1 bg-[#1a1a1a] rounded-xl shadow-sm border border-white/10 overflow-hidden flex flex-col">
              <div className="p-4 border-b border-white/10 bg-white/5">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  {CATEGORIES.find(c => c.id === activeCategory)?.label} Locations
                  <span className="px-2 py-0.5 bg-white/10 text-gray-300 text-xs rounded-full">
                    {filteredMarkers.length}
                  </span>
                </h3>
              </div>
              
              <div className="overflow-y-auto flex-1 p-2 space-y-2 custom-scrollbar">
                {filteredMarkers.map((marker) => {
                  const isSelected = selectedMarkerId === marker.id;
                  const CategoryIcon = CATEGORIES.find(c => c.id === marker.type)?.icon || MapPin;
                  
                  return (
                    <button
                      key={marker.id}
                      onClick={() => setSelectedMarkerId(marker.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 group border ${
                        isSelected
                          ? 'bg-white/10 border-white/20 shadow-sm ring-1 ring-white/10'
                          : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/5'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-full flex-shrink-0 ${
                          isSelected ? 'bg-white/20 shadow-sm' : 'bg-white/5 group-hover:bg-white/10 group-hover:shadow-sm'
                        } transition-all`}>
                          <CategoryIcon className={`w-4 h-4 ${
                            isSelected ? 'text-white' : 'text-gray-400'
                          }`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className={`font-medium truncate ${
                              isSelected ? 'text-white' : 'text-gray-300'
                            }`}>
                              {marker.name}
                            </h4>
                            {isSelected && <ChevronRight className="w-4 h-4 text-gray-400" />}
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">
                            {marker.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
