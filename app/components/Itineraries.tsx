"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

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
  <Link href={href} className='group block h-full'>
    <div className='relative h-full overflow-hidden rounded-sm bg-black/40 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:border-[#d4344f]/50 hover:shadow-2xl hover:shadow-[#d4344f]/10 flex flex-col'>
      {/* Image Section */}
      <div className='relative h-72 overflow-hidden'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover transition-transform duration-1000 group-hover:scale-110'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90' />
        <div className='absolute top-6 right-6'>
          <span className='px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-white tracking-widest uppercase'>
            {duration}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className='p-8 flex flex-col flex-grow -mt-12 relative z-10'>
        <h3
          className={`${playfair.className} text-3xl text-white mb-4 group-hover:text-[#d4344f] transition-colors duration-300 leading-tight drop-shadow-lg`}
        >
          {title}
        </h3>

        <p className='text-gray-300 text-sm leading-relaxed mb-8 line-clamp-3 font-light tracking-wide'>
          {description}
        </p>

        <div className='mt-auto space-y-8'>
          {/* Highlights */}
          <div>
            <h4 className='text-xs font-bold text-[#d4344f] uppercase tracking-[0.2em] mb-4 flex items-center gap-3'>
              <span className='w-6 h-[1px] bg-[#d4344f]'></span>
              {highlightsText}
            </h4>
            <ul className='grid grid-cols-1 gap-y-3'>
              {highlights.slice(0, 4).map((tag, i) => (
                <li
                  key={i}
                  className='flex items-center text-gray-300 text-sm tracking-wide group/item'
                >
                  <span className='w-1 h-1 bg-gray-600 rounded-full mr-3 group-hover/item:bg-[#d4344f] transition-colors'></span>
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className='pt-6 border-t border-white/5 flex items-center justify-between group-hover:border-[#d4344f]/20 transition-colors'>
            <span className='text-sm font-bold text-white uppercase tracking-widest group-hover:text-[#d4344f] transition-colors'>
              {viewItineraryText}
            </span>
            <div className='w-10 h-10 flex items-center justify-center border border-white/10 rounded-full group-hover:border-[#d4344f] group-hover:bg-[#d4344f] transition-all duration-300'>
              <svg
                className='w-4 h-4 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={1.5}
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default function Itineraries() {
  const t = useTranslation();

  return (
    <section className='py-32 bg-grid'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-20 gap-8'>
          <div className='max-w-2xl'>
            <h2
              className={`${playfair.className} text-5xl md:text-6xl text-white mb-6 leading-tight`}
            >
              {t.itineraries.title}
            </h2>
            <p className='text-lg text-gray-200 font-light tracking-wide max-w-xl'>
              {t.itineraries.subtitle}
            </p>
          </div>
          <Link
            href='/planning'
            className='group flex items-center gap-3 text-white hover:text-[#d4344f] transition-colors duration-300 pb-2 border-b border-white/20 hover:border-[#d4344f]'
          >
            <span className='text-sm font-bold uppercase tracking-widest'>
              {t.itineraries.viewAll}
            </span>
            <svg
              className='w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={1.5}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Scroll Container */}
        <div className='flex overflow-x-auto pb-12 gap-4 md:gap-8 snap-x snap-mandatory -mx-8 px-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:pb-0 md:mx-0 md:px-0 scrollbar-hide'>
          <div className='min-w-[75vw] md:min-w-0 snap-center'>
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
          </div>
          <div className='min-w-[75vw] md:min-w-0 snap-center'>
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
          </div>
          <div className='min-w-[75vw] md:min-w-0 snap-center'>
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
        </div>
      </div>
    </section>
  );
}
