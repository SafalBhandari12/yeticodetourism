"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

export default function Cuisine() {
  const t = useTranslation();

  return (
    <section className='py-24 bg-grid'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center'>
          {/* Text Content */}
          <div className='lg:col-span-5 order-2 lg:order-1'>
            <span className='text-red-400 font-bold tracking-widest uppercase mb-4 block'>
              {t.cuisine.tag}
            </span>
            <h2 className='text-4xl md:text-6xl font-black text-white mb-8 leading-tight'>
              {t.cuisine.title} <br />
              <span className='text-transparent bg-clip-text bg-linear-to-r from-[#d4344f] to-orange-500'>
                {t.cuisine.titleHighlight}
              </span>
            </h2>
            <p className='text-xl text-gray-200 mb-8 leading-relaxed'>
              {t.cuisine.description}
            </p>

            <div className='space-y-6'>
              <div className='bg-[#7d2426] p-6 rounded-xl border border-[#8b3a3d] border-l-4 border-l-red-400 hover:border-red-300 transition-colors'>
                <h3 className='text-xl font-bold mb-2 text-white'>
                  {t.cuisine.momo.title}
                </h3>
                <p className='text-gray-300'>{t.cuisine.momo.description}</p>
              </div>
              <div className='bg-[#7d2426] p-6 rounded-xl border border-[#8b3a3d] border-l-4 border-l-orange-400 hover:border-orange-300 transition-colors'>
                <h3 className='text-xl font-bold mb-2 text-white'>
                  {t.cuisine.dalBhat.title}
                </h3>
                <p className='text-gray-300'>{t.cuisine.dalBhat.description}</p>
              </div>
            </div>
          </div>

          {/* Visuals */}
          <div className='hidden lg:block lg:col-span-7 order-1 lg:order-2 relative h-[600px]'>
            <div className='absolute top-10 right-0 w-3/5 h-3/5 z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500'>
              <div className='relative w-full h-full rounded-3xl overflow-hidden'>
                <Image
                  src='/foods/momos.jpg'
                  alt='Momo'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
            <div className='absolute bottom-10 left-10 w-3/5 h-3/5 z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500'>
              <div className='relative w-full h-full rounded-3xl overflow-hidden border-4 border-white'>
                <Image
                  src='/foods/dalBhat.jpg'
                  alt='Dal Bhat'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
