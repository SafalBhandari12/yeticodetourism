"use client";

import { useTranslation } from "@/lib/useTranslation";
import Image from "next/image";
import Link from "next/link";

export default function AccommodationPage() {
  const t = useTranslation();

  const accommodations = [
    {
      id: "everest-view",
      title: t.accommodation?.everestView?.title || "Hotel Everest View",
      subtitle:
        t.accommodation?.everestView?.subtitle || "Syangboche, Nepal (3,880m)",
      description:
        t.accommodation?.everestView?.description ||
        "Listed in the Guinness Book of World Records as the highest placed hotel in the world.",
      image: "/topDestination/mountain.jpg", // Placeholder
      tag: t.accommodation?.everestView?.tag || "WORLD RECORD HOLDER",
      price: "$$$$",
    },
    {
      id: "dwarikas",
      title: t.accommodation?.dwarikas?.title || "Hotel Dwarika's",
      subtitle: t.accommodation?.dwarikas?.subtitle || "Kathmandu Heritage",
      description:
        t.accommodation?.dwarikas?.description ||
        "A living museum of Nepali architecture. Experience royal hospitality in the heart of the capital.",
      image: "/topDestination/kathmandu.avif", // Placeholder
      tag: "HERITAGE LUXURY",
      price: "$$$$",
    },
    {
      id: "tiger-tops",
      title: t.accommodation?.tigerTops?.title || "Tiger Tops",
      subtitle: t.accommodation?.tigerTops?.subtitle || "Chitwan Jungle Lodge",
      description:
        t.accommodation?.tigerTops?.description ||
        "Pioneers of eco-tourism. Stay in the heart of the jungle and wake up to the sounds of nature.",
      image: "/hotels/tigerTops.jpg",
      tag: "ECO LODGE",
      price: "$$$",
    },
    {
      id: "yeti-home",
      title: t.accommodation?.yetiHome?.title || "Yeti Mountain Home",
      subtitle: t.accommodation?.yetiHome?.subtitle || "Luxury Lodge Chain",
      description:
        t.accommodation?.yetiHome?.description ||
        "Comfortable lodges scattered across the Everest region offering warm hospitality and hot showers.",
      image: "/topDestination/mountain.jpg", // Placeholder
      tag: "TREKKING LODGE",
      price: "$$$",
    },
  ];

  return (
    <div className='min-h-screen bg-[#180109] text-white pt-24 pb-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400'>
            {t.nav?.accommodation || "Accommodation"}
          </h1>
          <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto'>
            {t.accommodation?.subtitle ||
              "From luxury heritage hotels in the city to the highest placed hotel in the world."}
          </p>
        </div>

        {/* List */}
        <div className='space-y-12'>
          {accommodations.map((acc, index) => (
            <div
              key={acc.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-[#d4344f]/30 transition-all duration-500`}
            >
              {/* Image */}
              <div className='relative w-full lg:w-1/2 h-64 lg:h-auto min-h-[300px]'>
                <Image
                  src={acc.image}
                  alt={acc.title}
                  fill
                  className='object-cover hover:scale-105 transition-transform duration-700'
                />
                {acc.tag && (
                  <div className='absolute top-4 left-4 bg-[#d4344f] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg'>
                    {acc.tag}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className='flex-1 p-8 flex flex-col justify-center'>
                <div className='flex justify-between items-start mb-4'>
                  <div>
                    <h3 className='text-3xl font-bold text-white mb-2'>
                      {acc.title}
                    </h3>
                    <p className='text-[#d4344f] font-medium'>{acc.subtitle}</p>
                  </div>
                  <span className='text-gray-400 font-mono tracking-widest'>
                    {acc.price}
                  </span>
                </div>

                <p className='text-gray-300 text-lg mb-8 leading-relaxed'>
                  {acc.description}
                </p>

                <div className='flex gap-4'>
                  <Link
                    href={`/accommodation/${acc.id}`}
                    className='border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block text-center'
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
