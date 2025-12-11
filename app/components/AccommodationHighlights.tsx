"use client";

import Image from "next/image";

export default function AccommodationHighlights() {
  return (
    <section className='py-24 bg-grid'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Stay Above the Clouds
          </h2>
          <p className='text-xl text-gray-200 max-w-3xl mx-auto'>
            From luxury heritage hotels in the city to the highest placed hotel
            in the world.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
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
          <div className='grid grid-cols-1 gap-6'>
            <div className='group flex gap-6 items-center bg-linear-to-r from-[#7d2426] to-[#661620] p-6 rounded-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl'>
              <div className='relative w-28 h-28 shrink-0 rounded-lg overflow-hidden border-2 border-red-400/20 group-hover:border-red-300 transition-colors'>
                <Image
                  src='https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400'
                  alt='Yeti Mountain Home'
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-300'
                />
              </div>
              <div className='flex-1'>
                <h3 className='text-lg font-bold text-white mb-1 group-hover:text-red-100 transition-colors'>
                  Yeti Mountain Home
                </h3>
                <p className='text-xs text-red-300 font-semibold mb-3 tracking-wide uppercase'>
                  Luxury Lodge Network
                </p>
                <p className='text-gray-200 text-sm leading-relaxed'>
                  Comfortable lodges spread across the Everest region offering
                  warm hospitality and hot showers.
                </p>
              </div>
            </div>

            <div className='group flex gap-6 items-center bg-linear-to-r from-[#7d2426] to-[#661620] p-6 rounded-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl'>
              <div className='relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden border-2 border-red-400/20 group-hover:border-red-300 transition-colors'>
                <Image
                  src='https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400'
                  alt="Dwarika's Hotel"
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-300'
                />
              </div>
              <div className='flex-1'>
                <h3 className='text-lg font-bold text-white mb-1 group-hover:text-red-100 transition-colors'>
                  Dwarika's Hotel
                </h3>
                <p className='text-xs text-red-300 font-semibold mb-3 tracking-wide uppercase'>
                  Kathmandu Heritage
                </p>
                <p className='text-gray-200 text-sm leading-relaxed'>
                  A living museum of Nepali architecture. Experience royal
                  hospitality in the heart of the capital.
                </p>
              </div>
            </div>

            <div className='group flex gap-6 items-center bg-linear-to-r from-[#7d2426] to-[#661620] p-6 rounded-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl'>
              <div className='relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden border-2 border-red-400/20 group-hover:border-red-300 transition-colors'>
                <Image
                  src='https://images.unsplash.com/photo-1571896349842-68c2531f2602?q=80&w=400'
                  alt='Tiger Tops'
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-300'
                />
              </div>
              <div className='flex-1'>
                <h3 className='text-lg font-bold text-white mb-1 group-hover:text-red-100 transition-colors'>
                  Tiger Tops
                </h3>
                <p className='text-xs text-red-300 font-semibold mb-3 tracking-wide uppercase'>
                  Chitwan Jungle Lodge
                </p>
                <p className='text-gray-200 text-sm leading-relaxed'>
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
