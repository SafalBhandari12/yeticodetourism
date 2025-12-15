"use client";

import { ContentItem, PracticalInfo } from "@/lib/data/types";
import Image from "next/image";

interface DestinationDetailProps {
  content: ContentItem;
}

export default function DestinationDetail({ content }: DestinationDetailProps) {
  return (
    <div className='min-h-screen bg-[#180109] text-white'>
      {/* Hero Section */}
      <div className='relative w-full h-96 overflow-hidden'>
        <Image
          src={content.image}
          alt={content.title}
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#180109] via-transparent to-transparent' />
        <div className='absolute inset-0 flex flex-col justify-end p-8 md:p-16'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>{content.title}</h1>
          <p className='text-lg md:text-xl text-gray-300'>{content.subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Overview */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-6 text-[#d4344f]'>Overview</h2>
          <p className='text-gray-300 leading-relaxed mb-4 text-lg'>
            {content.description}
          </p>
          <p className='text-gray-300 leading-relaxed text-lg'>
            {content.content}
          </p>
        </section>

        {/* What to Expect */}
        {content.whatToExpect && (
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-6 text-[#d4344f]'>What to Expect</h2>
            <p className='text-gray-300 leading-relaxed text-lg'>
              {content.whatToExpect}
            </p>
          </section>
        )}

        {/* Highlights Grid */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold mb-8 text-[#d4344f]'>Key Highlights</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {content.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className='bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#d4344f]/50 transition-colors'
              >
                <div className='flex items-start gap-4'>
                  <div className='w-10 h-10 rounded-full bg-[#d4344f] flex-shrink-0 flex items-center justify-center font-bold'>
                    {idx + 1}
                  </div>
                  <p className='text-gray-200'>{highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* History */}
        {content.history && (
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-6 text-[#d4344f]'>History & Culture</h2>
            <p className='text-gray-300 leading-relaxed text-lg'>
              {content.history}
            </p>
          </section>
        )}

        {/* Practical Information */}
        {content.practicalInfo && (
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-8 text-[#d4344f]'>Practical Information</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {Object.entries(content.practicalInfo).map(([key, value]) => (
                value && (
                  <div
                    key={key}
                    className='bg-white/5 border border-white/10 rounded-lg p-6'
                  >
                    <h3 className='font-semibold text-[#d4344f] mb-2 capitalize'>
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <p className='text-gray-300'>{value}</p>
                  </div>
                )
              ))}
            </div>
          </section>
        )}

        {/* Best Time */}
        {content.bestTime && (
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-6 text-[#d4344f]'>Best Time to Visit</h2>
            <p className='text-gray-300 leading-relaxed text-lg'>
              {content.bestTime}
            </p>
          </section>
        )}

        {/* Getting There */}
        {content.gettingThere && (
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-6 text-[#d4344f]'>Getting There</h2>
            <p className='text-gray-300 leading-relaxed text-lg'>
              {content.gettingThere}
            </p>
          </section>
        )}

        {/* Itinerary */}
        {content.itinerary && (
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-8 text-[#d4344f]'>Suggested Itinerary</h2>
            <div className='space-y-4'>
              {content.itinerary.map((item, idx) => (
                <div
                  key={idx}
                  className='bg-white/5 border border-white/10 rounded-lg p-6 flex gap-4'
                >
                  <div className='w-10 h-10 rounded-full bg-[#d4344f] flex-shrink-0 flex items-center justify-center font-bold'>
                    {idx + 1}
                  </div>
                  <p className='text-gray-200 text-lg'>{item}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Top Reasons */}
        {content.topReasons && (
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-8 text-[#d4344f]'>Top Reasons to Visit</h2>
            <div className='space-y-4'>
              {content.topReasons.map((reason, idx) => (
                <div
                  key={idx}
                  className='bg-gradient-to-r from-[#d4344f]/10 to-transparent border border-[#d4344f]/20 rounded-lg p-6 flex gap-4'
                >
                  <div className='text-3xl flex-shrink-0'>✓</div>
                  <p className='text-gray-200 text-lg'>{reason}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tips */}
        {content.tips && content.tips.length > 0 && (
          <section className='mb-16'>
            <h2 className='text-3xl font-bold mb-8 text-[#d4344f]'>Essential Tips</h2>
            <div className='space-y-3'>
              {content.tips.map((tip, idx) => (
                <div
                  key={idx}
                  className='flex gap-4 bg-white/5 border border-white/10 rounded-lg p-4'
                >
                  <div className='text-[#d4344f] font-bold flex-shrink-0'>💡</div>
                  <p className='text-gray-300'>{tip}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
