"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";
import Link from "next/link";

export default function WelcomeSection() {
  const t = useTranslation();

  return (
    <section className='py-20 bg-grid'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight'>
            {t.welcome.title}
          </h2>
          <p className='text-xl text-gray-200 max-w-3xl mx-auto'>
            {t.welcome.subtitle}
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-start'>
          {/* What can I do? */}
          <Link href='/experiences' className='group cursor-pointer block'>
            <div className='relative h-[500px] w-full overflow-hidden rounded-2xl mb-8'>
              <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10' />
              <Image
                src='https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
                alt='Activities in Nepal'
                fill
                className='object-cover transform group-hover:scale-105 transition-transform duration-700'
              />
            </div>
            <h3 className='text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors'>
              {t.welcome.whatCanIDo}
            </h3>
            <p className='text-gray-200 text-lg leading-relaxed mb-4'>
              {t.welcome.whatCanIDoDesc}
            </p>
            <span className='inline-flex items-center text-red-400 font-bold text-lg group-hover:translate-x-2 transition-transform duration-300'>
              {t.welcome.exploreActivities}
              <svg
                className='w-5 h-5 ml-2'
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
            </span>
          </Link>

          {/* Explore Places */}
          <Link
            href='/destinations'
            className='group cursor-pointer md:mt-20 block'
          >
            <div className='relative h-[500px] w-full overflow-hidden rounded-2xl mb-8'>
              <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10' />
              <Image
                src='/cta/lumbini.jpg'
                alt='Places in Nepal'
                fill
                className='object-cover transform group-hover:scale-105 transition-transform duration-700'
              />
            </div>
            <h3 className='text-3xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors'>
              {t.welcome.explorePlaces}
            </h3>
            <p className='text-gray-200 text-lg leading-relaxed mb-4'>
              {t.welcome.explorePlacesDesc}
            </p>
            <span className='inline-flex items-center text-red-400 font-bold text-lg group-hover:translate-x-2 transition-transform duration-300'>
              {t.welcome.viewDestinations}
              <svg
                className='w-5 h-5 ml-2'
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
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
