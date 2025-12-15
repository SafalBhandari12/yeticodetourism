"use client";

import { useTranslation } from "@/lib/useTranslation";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getDestinationContent } from "@/lib/contentData";
import Image from "next/image";

export default function DestinationDetail() {
  const t = useTranslation();
  const params = useParams();
  const slug = params.slug as string;

  const data = getDestinationContent(slug);

  return (
    <div className='min-h-screen bg-[#0f0a0e] text-white pt-24 pb-16'>
      {/* Breadcrumb */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8'>
        <nav className='flex items-center gap-2 text-sm'>
          <Link href='/' className='text-gray-400 hover:text-[#d4344f] transition-colors'>
            Home
          </Link>
          <span className='text-gray-600'>/</span>
          <Link href='/destinations' className='text-gray-400 hover:text-[#d4344f] transition-colors'>
            Destinations
          </Link>
          <span className='text-gray-600'>/</span>
          <span className='text-gray-300'>{data.title}</span>
        </nav>
      </div>

      {/* Hero Section with Improved Styling */}
      <div className='relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <Image
          src={data.image}
          alt={data.title}
          fill
          className='object-cover'
          priority
        />
        {/* Enhanced gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-[#0f0a0e] via-black/40 to-transparent' />
        
        {/* Hero Content */}
        <div className='absolute bottom-0 left-0 right-0 p-8 md:p-16'>
          <div className='max-w-3xl'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='h-px w-12 bg-[#d4344f]'></div>
              <span className='text-[#d4344f] font-semibold tracking-widest text-sm uppercase'>
                {data.subtitle}
              </span>
            </div>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight'>
              {data.title}
            </h1>
            <p className='text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed'>
              {data.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16'>
          {/* Main Content */}
          <div className='lg:col-span-2 space-y-12'>
            {/* Overview Section */}
            <section className='space-y-4'>
              <h2 className='text-3xl font-bold text-white flex items-center gap-3'>
                <div className='w-1 h-8 bg-[#d4344f]'></div>
                Overview
              </h2>
              <div className='bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 backdrop-blur-sm'>
                <p className='text-gray-300 leading-relaxed text-lg'>
                  {data.content}
                </p>
              </div>
            </section>

            {/* History & Culture Section */}
            {data.history && (
              <section className='space-y-4'>
                <h2 className='text-3xl font-bold text-white flex items-center gap-3'>
                  <div className='w-1 h-8 bg-[#d4344f]'></div>
                  History & Culture
                </h2>
                <div className='bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 backdrop-blur-sm'>
                  <p className='text-gray-300 leading-relaxed text-lg'>
                    {data.history}
                  </p>
                </div>
              </section>
            )}

            {/* Highlights Section */}
            <section className='space-y-6'>
              <h2 className='text-3xl font-bold text-white flex items-center gap-3'>
                <div className='w-1 h-8 bg-[#d4344f]'></div>
                Key Highlights
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {data.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className='group bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl p-6 border border-white/10 hover:border-[#d4344f]/30 transition-all duration-300 hover:bg-[#d4344f]/5'
                  >
                    <div className='flex items-start gap-4'>
                      <div className='mt-1 w-2 h-2 rounded-full bg-[#d4344f] flex-shrink-0'></div>
                      <span className='text-gray-300 group-hover:text-gray-200 transition-colors'>
                        {highlight}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className='space-y-6'>
            {/* Quick Facts Card */}
            {data.details && (
              <div className='sticky top-28 space-y-6'>
                <div className='bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 backdrop-blur-sm'>
                  <h3 className='text-xl font-bold text-white mb-6 flex items-center gap-3'>
                    <div className='w-1 h-6 bg-[#d4344f]'></div>
                    Quick Facts
                  </h3>
                  <div className='space-y-5'>
                    {Object.entries(data.details).map(([key, value]) => (
                      <div key={key} className='pb-4 border-b border-white/10 last:border-0 last:pb-0'>
                        <p className='text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2'>
                          {key}
                        </p>
                        <p className='text-white font-semibold text-base'>
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best Time Card */}
                {data.bestTime && (
                  <div className='bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 backdrop-blur-sm'>
                    <h3 className='text-lg font-bold text-white mb-4 flex items-center gap-3'>
                      <span className='text-xl'>📅</span>
                      Best Time
                    </h3>
                    <p className='text-gray-300 leading-relaxed text-sm'>
                      {data.bestTime}
                    </p>
                  </div>
                )}

                {/* Getting There Card */}
                {data.gettingThere && (
                  <div className='bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 backdrop-blur-sm'>
                    <h3 className='text-lg font-bold text-white mb-4 flex items-center gap-3'>
                      <span className='text-xl'>✈️</span>
                      Getting There
                    </h3>
                    <p className='text-gray-300 leading-relaxed text-sm'>
                      {data.gettingThere}
                    </p>
                  </div>
                )}

                {/* Travel Tips Card */}
                {data.tips && (
                  <div className='bg-gradient-to-br from-[#d4344f]/10 to-[#d4344f]/5 rounded-2xl p-8 border border-[#d4344f]/20 backdrop-blur-sm'>
                    <h3 className='text-lg font-bold text-white mb-5 flex items-center gap-3'>
                      <span className='text-xl'>💡</span>
                      Travel Tips
                    </h3>
                    <ul className='space-y-4'>
                      {data.tips.map((tip, index) => (
                        <li
                          key={index}
                          className='flex gap-3 text-sm text-gray-300'
                        >
                          <span className='text-[#d4344f] font-bold flex-shrink-0 mt-1'>
                            •
                          </span>
                          <span className='leading-relaxed'>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
