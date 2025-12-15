"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

export default function AccommodationHighlights() {
  const t = useTranslation();

  const accommodations = [
    {
      title: t.accommodation.everestView.title,
      subtitle: t.accommodation.everestView.subtitle,
      description: t.accommodation.everestView.description,
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
      tag: t.accommodation.everestView.tag,
    },
    {
      title: t.accommodation.yetiHome.title,
      subtitle: t.accommodation.yetiHome.subtitle,
      description: t.accommodation.yetiHome.description,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400",
    },
    {
      title: t.accommodation.dwarikas.title,
      subtitle: t.accommodation.dwarikas.subtitle,
      description: t.accommodation.dwarikas.description,
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400",
    },
    {
      title: t.accommodation.tigerTops.title,
      subtitle: t.accommodation.tigerTops.subtitle,
      description: t.accommodation.tigerTops.description,
      image: "/hotels/tigerTops.jpg",
    },
  ];

  return (
    <section className='py-12 bg-grid'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            {t.accommodation.title}
          </h2>
          <p className='text-xl text-gray-200 max-w-3xl mx-auto'>
            {t.accommodation.subtitle}
          </p>
        </div>

        {/* Mobile View */}
        <div className='flex md:hidden overflow-x-auto pb-8 gap-4 snap-x snap-mandatory -mx-4 px-4 scrollbar-hide'>
          {accommodations.map((item, index) => (
            <div
              key={index}
              className='relative h-[500px] min-w-[80vw] snap-start rounded-xl overflow-hidden border border-[#8b3a3d] group'
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent p-6 flex flex-col justify-end'>
                {item.tag && (
                  <div className='bg-[#d4344f] text-xs font-bold px-3 py-1 rounded-full inline-block mb-4 self-start'>
                    {item.tag}
                  </div>
                )}
                <h3 className='text-2xl font-bold text-white mb-2'>
                  {item.title}
                </h3>
                <p className='text-red-300 text-xs font-bold uppercase mb-2'>
                  {item.subtitle}
                </p>
                <p className='text-gray-200 line-clamp-3'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll Hint */}
        <div className='mt-4 flex items-center justify-center gap-2 text-sm text-gray-400 md:hidden animate-pulse'>
          <span>{t.accommodation.swipeToExplore}</span>
          <svg
            className='w-4 h-4'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17 8l4 4m0 0l-4 4m4-4H3'
            />
          </svg>
        </div>

        {/* Desktop View */}
        <div className='hidden md:grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Featured Hotel: Everest View */}
          <div className='relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer'>
            <div className='absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors z-10' />
            <Image
              src='https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
              alt='Hotel Everest View'
              fill
              className='object-cover transform group-hover:scale-105 transition-transform duration-700'
            />
            <div className='absolute bottom-0 left-0 p-8 z-20 text-white'>
              <div className='bg-[#d4344f] text-xs font-bold px-3 py-1 rounded-full inline-block mb-4'>
                WORLD RECORD HOLDER
              </div>
              <h3 className='text-3xl font-bold mb-2'>Hotel Everest View</h3>
              <p className='text-gray-200 mb-4'>Syangboche, Nepal (3,880m)</p>
              <p className='text-gray-100 leading-relaxed max-w-md'>
                Listed in the Guinness Book of World Records as the highest
                placed hotel in the world. Enjoy a 360-degree view of Mt.
                Everest from your breakfast table.
              </p>
            </div>
          </div>

          {/* Other Options */}
          <div className='grid grid-cols-1 gap-3 lg:gap-6'>
            {/* Card 1: Yeti Mountain Home */}
            <div className='group flex lg:flex-row flex-col gap-6 items-start lg:items-center bg-linear-to-r from-[#7d2426] to-[#661620] p-0 lg:p-6 rounded-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl overflow-hidden lg:overflow-visible'>
              <div className='relative w-full lg:w-28 lg:h-28 lg:shrink-0 h-48 rounded-none lg:rounded-lg overflow-hidden border-0 lg:border-2 border-red-400/20 group-hover:border-red-300 transition-colors'>
                <Image
                  src='https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400'
                  alt='Yeti Mountain Home'
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-300'
                />
              </div>
              <div className='flex-1 p-6 lg:p-0'>
                <h3 className='text-2xl lg:text-lg font-bold text-white mb-2 group-hover:text-red-100 transition-colors'>
                  Yeti Mountain Home
                </h3>
                <p className='text-xs text-red-300 font-semibold mb-4 lg:mb-3 tracking-wide uppercase'>
                  Luxury Lodge Network
                </p>
                <p className='text-gray-200 text-sm lg:text-sm leading-relaxed'>
                  Comfortable lodges spread across the Everest region offering
                  warm hospitality and hot showers.
                </p>
              </div>
            </div>

            {/* Card 2: Dwarika's Hotel */}
            <div className='group flex lg:flex-row flex-col gap-6 items-start lg:items-center bg-linear-to-r from-[#7d2426] to-[#661620] p-0 lg:p-6 rounded-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl overflow-hidden lg:overflow-visible'>
              <div className='relative w-full lg:w-28 lg:h-28 h-48 rounded-none lg:rounded-lg overflow-hidden border-0 lg:border-2 border-red-400/20 group-hover:border-red-300 transition-colors'>
                <Image
                  src='https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400'
                  alt="Dwarika's Hotel"
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-300'
                />
              </div>
              <div className='flex-1 p-6 lg:p-0'>
                <h3 className='text-2xl lg:text-lg font-bold text-white mb-2 group-hover:text-red-100 transition-colors'>
                  Dwarika's Hotel
                </h3>
                <p className='text-xs text-red-300 font-semibold mb-4 lg:mb-3 tracking-wide uppercase'>
                  Kathmandu Heritage
                </p>
                <p className='text-gray-200 text-sm lg:text-sm leading-relaxed'>
                  A living museum of Nepali architecture. Experience royal
                  hospitality in the heart of the capital.
                </p>
              </div>
            </div>

            {/* Card 3: Tiger Tops */}
            <div className='group flex lg:flex-row flex-col gap-6 items-start lg:items-center bg-linear-to-r from-[#7d2426] to-[#661620] p-0 lg:p-6 rounded-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl overflow-hidden lg:overflow-visible'>
              <div className='relative w-full lg:w-28 lg:h-28 h-48 rounded-none lg:rounded-lg overflow-hidden border-0 lg:border-2 border-red-400/20 group-hover:border-red-300 transition-colors'>
                <Image
                  src='/hotels/tigerTops.jpg'
                  alt='Tiger Tops'
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-300'
                />
              </div>
              <div className='flex-1 p-6 lg:p-0'>
                <h3 className='text-2xl lg:text-lg font-bold text-white mb-2 group-hover:text-red-100 transition-colors'>
                  Tiger Tops
                </h3>
                <p className='text-xs text-red-300 font-semibold mb-4 lg:mb-3 tracking-wide uppercase'>
                  Chitwan Jungle Lodge
                </p>
                <p className='text-gray-200 text-sm lg:text-sm leading-relaxed'>
                  Pioneers of eco-tourism. Stay in the heart of the jungle and
                  wake up to the sounds of the wild.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
