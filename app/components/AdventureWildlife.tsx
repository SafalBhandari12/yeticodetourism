"use client";

import Image from "next/image";

export default function AdventureWildlife() {
  return (
    <section className='py-24 bg-grid text-white overflow-hidden'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
          {/* Text Content */}
          <div className='space-y-12'>
            <div>
              <h2 className='text-4xl md:text-6xl font-bold mb-6 tracking-tight'>
                Wild & Free
              </h2>
              <p className='text-xl text-gray-200 leading-relaxed'>
                Nepal is not just about mountains. It's a playground for
                adrenaline junkies and nature lovers alike. From the roar of the
                tiger to the rush of the rapids.
              </p>
            </div>

            <div className='space-y-8'>
              <div className='flex gap-6 group cursor-pointer'>
                <div className='w-20 h-20 bg-[#d4344f] rounded-2xl flex items-center justify-center shrink-0 transform group-hover:rotate-6 transition-transform duration-300'>
                  <svg
                    className='w-10 h-10 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='text-2xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors'>
                    Jungle Safari
                  </h3>
                  <p className='text-gray-300'>
                    Encounter one-horned rhinos, Bengal tigers, and wild
                    elephants in Chitwan and Bardia National Parks.
                  </p>
                </div>
              </div>

              <div className='flex gap-6 group cursor-pointer'>
                <div className='w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center shrink-0 transform group-hover:rotate-6 transition-transform duration-300'>
                  <svg
                    className='w-10 h-10 text-gray-900'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='text-2xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors'>
                    Adventure Sports
                  </h3>
                  <p className='text-gray-300'>
                    Paragliding in Pokhara, Bungee jumping in The Last Resort,
                    and White Water Rafting in the Bhote Koshi.
                  </p>
                </div>
              </div>

              <div className='flex gap-6 group cursor-pointer'>
                <div className='w-20 h-20 bg-[#7d2426] rounded-2xl flex items-center justify-center shrink-0 transform group-hover:rotate-6 transition-transform duration-300'>
                  <svg
                    className='w-10 h-10 text-red-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-1.447-.894L15 7m0 13V7'
                    />
                  </svg>
                </div>
                <div>
                  <h3 className='text-2xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors'>
                    Trekking & Mountaineering
                  </h3>
                  <p className='text-gray-300'>
                    From the Annapurna Circuit to the Great Himalaya Trail, walk
                    the paths of legends.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Grid */}
          <div className='relative h-[600px] w-full'>
            <div className='absolute top-0 right-0 w-3/4 h-3/4 rounded-3xl overflow-hidden z-10'>
              <Image
                src='https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200'
                alt='Rhino'
                fill
                className='object-cover hover:scale-110 transition-transform duration-700'
              />
            </div>
            <div className='absolute bottom-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden z-20 border-8 border-white'>
              <Image
                src='https://images.unsplash.com/photo-1605640840605-14ac1855827b?q=80&w=1200'
                alt='Paragliding'
                fill
                className='object-cover hover:scale-110 transition-transform duration-700'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
