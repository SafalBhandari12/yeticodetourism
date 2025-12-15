"use client";

import Image from "next/image";
import Link from "next/link";
import { itinerariesData } from "@/lib/data/itineraries";
import { useParams } from "next/navigation";

export default function ItineraryDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const itinerary = itinerariesData[slug];

  if (!itinerary) {
    return (
      <div className='min-h-screen bg-[#180109] text-white flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>Itinerary Not Found</h1>
          <p className='text-gray-300 mb-8'>The itinerary you're looking for doesn't exist.</p>
          <Link href='/' className='text-red-400 hover:text-red-300 underline'>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-[#180109] text-white'>
      {/* Hero Section */}
      <div className='relative h-96 overflow-hidden'>
        <Image
          src={itinerary.image}
          alt={itinerary.title}
          fill
          className='object-cover'
        />
        <div className='absolute inset-0 bg-black/50' />
        <div className='absolute inset-0 flex items-end'>
          <div className='p-8 md:p-12 w-full'>
            <Link href='/' className='text-gray-300 hover:text-red-400 mb-4 inline-block'>
              ← Back Home
            </Link>
            <h1 className='text-5xl md:text-6xl font-bold mb-4'>{itinerary.title}</h1>
            <p className='text-2xl text-red-400 font-bold'>{itinerary.duration}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className='max-w-6xl mx-auto px-6 md:px-8 py-12'>
        {/* Overview */}
        <div className='mb-12'>
          <h2 className='text-4xl font-bold mb-6 text-red-400'>Overview</h2>
          <p className='text-lg text-gray-300 leading-relaxed mb-6'>{itinerary.overview}</p>

          {/* Key Info Grid */}
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
            <div className='bg-[#2a1115] border border-[#8b3a3d] p-6 rounded-lg'>
              <h3 className='text-gray-400 uppercase text-sm font-bold mb-2'>Difficulty</h3>
              <p className='text-2xl font-bold text-red-400'>{itinerary.difficulty}</p>
            </div>
            <div className='bg-[#2a1115] border border-[#8b3a3d] p-6 rounded-lg'>
              <h3 className='text-gray-400 uppercase text-sm font-bold mb-2'>Total Cost</h3>
              <p className='text-lg font-bold'>{itinerary.totalCost}</p>
            </div>
            <div className='bg-[#2a1115] border border-[#8b3a3d] p-6 rounded-lg'>
              <h3 className='text-gray-400 uppercase text-sm font-bold mb-2'>Duration</h3>
              <p className='text-2xl font-bold text-red-400'>{itinerary.durationDays} days</p>
            </div>
            <div className='bg-[#2a1115] border border-[#8b3a3d] p-6 rounded-lg'>
              <h3 className='text-gray-400 uppercase text-sm font-bold mb-2'>Best For</h3>
              <p className='text-sm'>{itinerary.bestFor.join(", ")}</p>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-4 text-red-400'>What to Expect</h2>
          <p className='text-lg text-gray-300 leading-relaxed'>{itinerary.whatToExpect}</p>
        </div>

        {/* Highlights */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-red-400'>Highlights</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            {itinerary.highlights.map((highlight, idx) => (
              <div key={idx} className='flex items-start gap-3 bg-[#2a1115] border border-[#8b3a3d] p-4 rounded-lg'>
                <span className='text-red-400 font-bold text-xl mt-1'>✓</span>
                <span className='text-gray-300'>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Included & Not Included */}
        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          <div>
            <h3 className='text-2xl font-bold mb-4 text-red-400'>Included in Cost</h3>
            <ul className='space-y-2'>
              {itinerary.includedInCost.map((item, idx) => (
                <li key={idx} className='flex items-start gap-2 text-gray-300'>
                  <span className='text-red-400 font-bold'>+</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='text-2xl font-bold mb-4 text-red-400'>Not Included</h3>
            <ul className='space-y-2'>
              {itinerary.notIncluded.map((item, idx) => (
                <li key={idx} className='flex items-start gap-2 text-gray-300'>
                  <span className='text-red-400 font-bold'>-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Day-by-Day Itinerary */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-8 text-red-400'>Day-by-Day Itinerary</h2>
          <div className='space-y-6'>
            {itinerary.dayPlans.map((day, idx) => (
              <div key={idx} className='bg-[#2a1115] border border-[#8b3a3d] rounded-lg overflow-hidden hover:border-red-400 transition-colors'>
                {/* Day Header */}
                <div className='bg-gradient-to-r from-[#d4344f] to-[#8b3a3d] p-6'>
                  <div className='flex items-start justify-between'>
                    <div>
                      <span className='text-sm font-bold text-white/80'>Day {day.day}</span>
                      <h3 className='text-2xl font-bold text-white'>{day.title}</h3>
                      <p className='text-red-100 mt-1'>{day.location}</p>
                    </div>
                    <div className='text-right'>
                      <p className='text-white font-bold text-lg'>{day.cost}</p>
                    </div>
                  </div>
                </div>

                {/* Day Details */}
                <div className='p-6 space-y-6'>
                  {/* Activities */}
                  <div>
                    <h4 className='text-lg font-bold text-red-400 mb-3'>Activities</h4>
                    <ul className='space-y-2'>
                      {day.activities.map((activity, aidx) => (
                        <li key={aidx} className='flex items-start gap-2 text-gray-300'>
                          <span className='text-red-400 mt-1'>→</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Meals */}
                  <div>
                    <h4 className='text-lg font-bold text-red-400 mb-3'>Meals</h4>
                    <div className='grid md:grid-cols-3 gap-4'>
                      {day.meals.breakfast && (
                        <div className='bg-[#1a0d0f] p-3 rounded border border-[#8b3a3d]'>
                          <p className='text-gray-400 text-sm font-bold'>BREAKFAST</p>
                          <p className='text-gray-300'>{day.meals.breakfast}</p>
                        </div>
                      )}
                      {day.meals.lunch && (
                        <div className='bg-[#1a0d0f] p-3 rounded border border-[#8b3a3d]'>
                          <p className='text-gray-400 text-sm font-bold'>LUNCH</p>
                          <p className='text-gray-300'>{day.meals.lunch}</p>
                        </div>
                      )}
                      {day.meals.dinner && (
                        <div className='bg-[#1a0d0f] p-3 rounded border border-[#8b3a3d]'>
                          <p className='text-gray-400 text-sm font-bold'>DINNER</p>
                          <p className='text-gray-300'>{day.meals.dinner}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Accommodation */}
                  <div className='bg-[#1a0d0f] p-4 rounded border border-[#8b3a3d]'>
                    <p className='text-gray-400 text-sm font-bold mb-1'>ACCOMMODATION</p>
                    <p className='text-gray-300 mb-2'>{day.accommodation}</p>
                  </div>

                  {/* Notes */}
                  {day.notes && (
                    <div className='text-gray-400 text-sm italic border-l-2 border-red-400 pl-4'>
                      💡 {day.notes}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packing List */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-red-400'>Essential Packing List</h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {itinerary.packing.map((item, idx) => (
              <div key={idx} className='flex items-start gap-2 bg-[#2a1115] p-4 rounded border border-[#8b3a3d]'>
                <span className='text-red-400 font-bold'>📦</span>
                <span className='text-gray-300'>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className='mb-12'>
          <h2 className='text-3xl font-bold mb-6 text-red-400'>Pro Tips</h2>
          <div className='bg-[#2a1115] border border-[#8b3a3d] rounded-lg p-8'>
            <ul className='space-y-4'>
              {itinerary.tips.map((tip, idx) => (
                <li key={idx} className='flex items-start gap-3'>
                  <span className='text-red-400 font-bold text-xl'>★</span>
                  <span className='text-gray-300'>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className='bg-gradient-to-r from-[#d4344f] to-[#8b3a3d] rounded-lg p-8 md:p-12 text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Ready for Your Adventure?</h2>
          <p className='text-lg mb-8 text-white/90'>Contact our travel specialists to customize this itinerary for your dates and preferences.</p>
          <Link
            href='mailto:info@tourisminnepal.com'
            className='inline-block px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors'
          >
            Book Your Adventure
          </Link>
        </div>
      </div>
    </div>
  );
}
