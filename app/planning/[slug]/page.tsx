"use client";

import { useTranslation } from "@/lib/useTranslation";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getPlanningContent } from "@/lib/contentData";
import Image from "next/image";

export default function PlanningDetail() {
  const t = useTranslation();
  const params = useParams();
  const slug = params.slug as string;
  const content = getPlanningContent(slug);

  return (
    <div className='min-h-screen bg-[#0f0a0e] text-white pt-24 pb-12'>
      {/* Hero Section */}
      <div className='relative h-[60vh] w-full mb-16'>
        <Image
          src={content.image}
          alt={content.title}
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0f0a0e] via-[#0f0a0e]/60 to-transparent' />
        <div className='absolute bottom-0 left-0 right-0 p-8 md:p-16'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex items-center gap-2 text-sm text-gray-400 mb-6'>
              <Link href='/' className='hover:text-[#d4344f] transition-colors'>
                Home
              </Link>
              <span>/</span>
              <Link
                href='/planning'
                className='hover:text-[#d4344f] transition-colors'
              >
                Planning
              </Link>
              <span>/</span>
              <span className='text-white'>{content.title}</span>
            </div>
            <div className='h-px w-12 bg-[#d4344f] mb-6'></div>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white'>
              {content.title}
            </h1>
            <p className='text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed'>
              {content.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16'>
          {/* Main Content */}
          <div className='lg:col-span-2 space-y-12'>
            {/* Overview */}
            <section className='space-y-4'>
              <h2 className='text-3xl font-bold text-white flex items-center gap-3'>
                <div className='w-1 h-8 bg-[#d4344f]'></div>
                Overview
              </h2>
              <div className='bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 backdrop-blur-sm'>
                <p className='text-gray-300 leading-relaxed text-lg'>
                  {content.description}
                </p>
              </div>
            </section>

            {/* Detailed Content */}
            <section className='space-y-4'>
              <h2 className='text-3xl font-bold text-white flex items-center gap-3'>
                <div className='w-1 h-8 bg-[#d4344f]'></div>
                Planning Guide
              </h2>
              <div className='bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 backdrop-blur-sm'>
                <p className='text-gray-300 leading-relaxed text-lg'>
                  {content.content}
                </p>
              </div>
            </section>

            {/* Key Points */}
            <section className='space-y-6'>
              <h2 className='text-3xl font-bold text-white flex items-center gap-3'>
                <div className='w-1 h-8 bg-[#d4344f]'></div>
                Key Points
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {content.highlights.map((highlight, index) => (
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
            {content.details && (
              <div className='sticky top-28 space-y-6'>
                <div className='bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 backdrop-blur-sm'>
                  <h3 className='text-xl font-bold text-white mb-6 flex items-center gap-3'>
                    <div className='w-1 h-6 bg-[#d4344f]'></div>
                    Planning Details
                  </h3>
                  <div className='space-y-5'>
                    {Object.entries(content.details).map(([key, value]) => (
                      <div
                        key={key}
                        className='pb-4 border-b border-white/10 last:border-0 last:pb-0'
                      >
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

                {content.bestTime && (
                  <div className='bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 backdrop-blur-sm'>
                    <h3 className='text-lg font-bold text-white mb-4 flex items-center gap-3'>
                      <span className='text-xl'>📅</span>
                      Best Time
                    </h3>
                    <p className='text-gray-300 leading-relaxed text-sm'>
                      {content.bestTime}
                    </p>
                  </div>
                )}

                {content.gettingThere && (
                  <div className='bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 backdrop-blur-sm'>
                    <h3 className='text-lg font-bold text-white mb-4 flex items-center gap-3'>
                      <span className='text-xl'>📋</span>
                      Logistics
                    </h3>
                    <p className='text-gray-300 leading-relaxed text-sm'>
                      {content.gettingThere}
                    </p>
                  </div>
                )}

                {content.tips && (
                  <div className='bg-gradient-to-br from-[#d4344f]/10 to-[#d4344f]/5 rounded-2xl p-8 border border-[#d4344f]/20 backdrop-blur-sm'>
                    <h3 className='text-lg font-bold text-white mb-5 flex items-center gap-3'>
                      <span className='text-xl'>💡</span>
                      Important Tips
                    </h3>
                    <ul className='space-y-4'>
                      {content.tips.map((tip, index) => (
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
