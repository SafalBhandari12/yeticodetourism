"use client";

import Image from "next/image";

export default function MapSection() {
  return (
    <section className='py-24 bg-grid text-white'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>Find Your Way</h2>
          <p className='text-xl text-gray-200'>
            Explore the geography of the Himalayas.
          </p>
        </div>

        <div className='relative w-full h-[600px] bg-gray-100 rounded-3xl overflow-hidden border border-gray-200 flex items-center justify-center group'>
          {/* Placeholder for an actual interactive map */}
          <div className='absolute inset-0 opacity-50 group-hover:opacity-60 transition-opacity duration-500'>
            <Image
              src='https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200'
              alt='Map of Nepal'
              fill
              className='object-cover'
            />
          </div>

          <div className='relative z-10 text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-none'>
            <h3 className='text-2xl font-bold mb-4'>
              Interactive Map Coming Soon
            </h3>
            <p className='text-gray-600 mb-6'>
              We are building a comprehensive guide to trails, roads, and
              landmarks.
            </p>
            <button className='bg-[#d4344f] hover:bg-[#b92b43] text-white font-bold py-3 px-8 rounded-full transition-colors cursor-pointer'>
              Download Offline Map (PDF)
            </button>
          </div>

          {/* Decorative Points */}
          <div className='absolute top-1/3 left-1/2 w-4 h-4 bg-[#d4344f] rounded-full animate-ping'></div>
          <div className='absolute top-1/3 left-1/2 w-4 h-4 bg-[#d4344f] rounded-full border-2 border-white'></div>

          <div className='absolute bottom-1/3 right-1/3 w-4 h-4 bg-[#d4344f] rounded-full animate-ping delay-700'></div>
          <div className='absolute bottom-1/3 right-1/3 w-4 h-4 bg-[#d4344f] rounded-full border-2 border-white'></div>
        </div>
      </div>
    </section>
  );
}
