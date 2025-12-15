"use client";

import { useTranslation } from "@/lib/useTranslation";
import Image from "next/image";
import Link from "next/link";

export default function DestinationsPage() {
  const t = useTranslation();

  const destinations = [
    {
      id: "kathmandu",
      title: t.destinations?.kathmandu || "Kathmandu Valley",
      subtitle:
        t.destinations?.kathmanduSubtitle || "Ancient temples and culture",
      image: "/topDestination/kathmandu.avif",
      description:
        "Discover the historic heart of Nepal, filled with UNESCO World Heritage sites, ancient palaces, and vibrant street life.",
    },
    {
      id: "pokhara",
      title: t.destinations?.pokhara || "Pokhara",
      subtitle: "City of Lakes",
      image: "/topDestination/mountain.jpg",
      description:
        "The gateway to the Annapurna Circuit, offering serene lakes, stunning mountain views, and adventure sports.",
    },
    {
      id: "chitwan-national-park",
      title: t.destinations?.chitwan || "Chitwan National Park",
      subtitle: t.destinations?.chitwanSubtitle || "Wildlife Adventure",
      image: "/topDestination/kathmandu.jpeg", // Placeholder
      description:
        "Explore the lush jungles of southern Nepal, home to rhinos, tigers, and elephants.",
    },
    {
      id: "everest-base-camp-trek",
      title: t.destinations?.everest || "Mount Everest",
      subtitle: "Top of the World",
      image: "/topDestination/mountain.jpg",
      description:
        "Experience the majesty of the highest peak on Earth and the unique Sherpa culture of the Khumbu region.",
    },
    {
      id: "annapurna-circuit",
      title: t.destinations?.annapurna || "Annapurna Circuit",
      subtitle: t.destinations?.annapurnaSubtitle || "Legendary Trek",
      image: "/topDestination/mountain.jpg",
      description:
        "Trek through diverse landscapes, from subtropical forests to high-altitude deserts.",
    },
    {
      id: "lumbini",
      title: "Lumbini",
      subtitle: "Birthplace of Buddha",
      image: "/topDestination/kathmandu.avif", // Placeholder
      description:
        "Visit the sacred birthplace of Lord Buddha, a pilgrimage site for Buddhists from around the world.",
    },
  ];

  return (
    <div className='min-h-screen bg-[#180109] text-white pt-24 pb-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400'>
            {t.nav?.destinations || "Destinations"}
          </h1>
          <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto'>
            {t.hero?.subtitle ||
              "Experience the magic of Nepal's mountains and ancient culture"}
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {destinations.map((dest, index) => (
            <div
              key={dest.id}
              className='group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#d4344f]/50 transition-all duration-300 hover:-translate-y-2'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className='relative h-64 w-full overflow-hidden'>
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-linear-to-t from-[#180109] via-transparent to-transparent opacity-80' />
              </div>

              {/* Content */}
              <div className='p-6 relative'>
                <div className='absolute -top-10 left-6 bg-[#d4344f] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg'>
                  {dest.subtitle}
                </div>
                <h3 className='text-2xl font-bold mb-3 group-hover:text-[#d4344f] transition-colors duration-300'>
                  {dest.title}
                </h3>
                <p className='text-gray-400 mb-6 line-clamp-3'>
                  {dest.description}
                </p>
                <Link
                  href={`/destinations/${dest.id}`}
                  className='inline-flex items-center text-[#d4344f] font-semibold hover:text-white transition-colors duration-300'
                >
                  {t.common?.explore || "Explore"}
                  <svg
                    className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
