"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";
import Link from "next/link";

const PlanCard = ({
  title,
  duration,
  description,
  image,
  highlights,
  viewItineraryText,
  highlightsText,
  href,
}: {
  title: string;
  duration: string;
  description: string;
  image: string;
  highlights: string[];
  viewItineraryText: string;
  highlightsText: string;
  href: string;
}) => (
  <div className='group relative overflow-hidden rounded-xl border border-[#8b3a3d] transition-colors duration-300 min-w-[80vw] snap-start h-[500px] md:h-auto md:min-w-0 md:flex md:flex-col md:bg-[#7d2426] hover:border-red-400'>
    {/* Image Container */}
    <div className='absolute inset-0 md:relative md:h-64 md:inset-auto'>
      <div className='absolute inset-0 bg-black/40 md:bg-black/20 group-hover:bg-black/50 md:group-hover:bg-black/10 transition-colors z-10' />
      <Image
        src={image}
        alt={title}
        fill
        className='object-cover transform group-hover:scale-110 transition-transform duration-700'
      />
      <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold text-gray-900 z-20'>
        {duration}
      </div>
    </div>

    {/* Content Container */}
    <div className='absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black via-black/60 to-transparent md:relative md:inset-auto md:bg-none md:p-8 md:flex-grow'>
      <h3 className='text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-red-400 transition-colors'>
        {title}
      </h3>
      <p className='text-gray-200 md:text-gray-300 mb-4 md:mb-6 leading-relaxed line-clamp-3 md:line-clamp-none'>
        {description}
      </p>

      {/* Desktop Highlights */}
      <div className='mb-6 hidden md:block'>
        <h4 className='text-sm font-bold text-gray-400 uppercase tracking-wider mb-3'>
          {highlightsText}
        </h4>
        <div className='flex flex-wrap gap-2'>
          {highlights.map((tag, i) => (
            <span
              key={i}
              className='bg-[#7d2426] text-gray-300 px-3 py-1 rounded-full text-sm font-medium border border-[#8b3a3d]'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile Highlights */}
      <div className='mb-4 md:hidden flex flex-wrap gap-2'>
        {highlights.slice(0, 3).map((tag, i) => (
          <span
            key={i}
            className='bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium'
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={href}
        className='w-full py-3 border-2 border-white/50 md:border-red-400 text-white md:text-red-400 font-bold rounded-lg hover:bg-red-400 hover:text-white hover:border-red-400 transition-colors duration-300 cursor-pointer text-center block'
      >
        {viewItineraryText}
      </Link>
    </div>
  </div>
);

export default function Itineraries() {
  const t = useTranslation();

  return (
    <section className='py-24 bg-grid'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
          <div className='max-w-2xl'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              {t.itineraries.title}
            </h2>
            <p className='text-xl text-gray-200'>{t.itineraries.subtitle}</p>
          </div>
          <Link
            href='/planning'
            className='text-red-400 font-bold text-lg hover:underline flex items-center whitespace-nowrap cursor-pointer'
          >
            {t.itineraries.viewAll}
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
          </Link>
        </div>

        {/* Mobile Scroll Container */}
        <div className='flex overflow-x-auto pb-8 gap-4 snap-x snap-mandatory -mx-4 px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 md:pb-0 md:mx-0 md:px-0 scrollbar-hide'>
          <PlanCard
            title={t.itineraries.goldenTriangle.title}
            duration={t.itineraries.goldenTriangle.duration}
            image='https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
            description={t.itineraries.goldenTriangle.description}
            highlights={t.itineraries.goldenTriangle.highlights}
            viewItineraryText={t.itineraries.viewItinerary}
            highlightsText={t.itineraries.highlights}
            href='/itineraries/golden-triangle'
          />
          <PlanCard
            title={t.itineraries.himalayanGlimpse.title}
            duration={t.itineraries.himalayanGlimpse.duration}
            image='https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=1200'
            description={t.itineraries.himalayanGlimpse.description}
            highlights={t.itineraries.himalayanGlimpse.highlights}
            viewItineraryText={t.itineraries.viewItinerary}
            highlightsText={t.itineraries.highlights}
            href='/itineraries/himalayan-glimpse'
          />
          <PlanCard
            title={t.itineraries.grandAdventure.title}
            duration={t.itineraries.grandAdventure.duration}
            image='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200'
            description={t.itineraries.grandAdventure.description}
            highlights={t.itineraries.grandAdventure.highlights}
            viewItineraryText={t.itineraries.viewItinerary}
            highlightsText={t.itineraries.highlights}
            href='/itineraries/grand-adventure'
          />
        </div>

        {/* Mobile Scroll Hint */}
        <div className='mt-4 flex items-center justify-center gap-2 text-sm text-gray-400 md:hidden animate-pulse'>
          <span>{t.itineraries.swipeToExplore}</span>
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
      </div>
    </section>
  );
}
