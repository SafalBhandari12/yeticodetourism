"use client";

import Image from "next/image";

const PlanCard = ({
  title,
  duration,
  description,
  image,
  highlights,
}: {
  title: string;
  duration: string;
  description: string;
  image: string;
  highlights: string[];
}) => (
  <div className='bg-[#7d2426] rounded-xl overflow-hidden border border-[#8b3a3d] flex flex-col h-full hover:border-red-400 transition-colors duration-300 group'>
    <div className='relative h-64 overflow-hidden'>
      <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10' />
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
    <div className='p-8 flex flex-col flex-grow'>
      <h3 className='text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors'>
        {title}
      </h3>
      <p className='text-gray-300 mb-6 leading-relaxed flex-grow'>
        {description}
      </p>

      <div className='mb-6'>
        <h4 className='text-sm font-bold text-gray-400 uppercase tracking-wider mb-3'>
          Highlights
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

      <button className='w-full py-3 border-2 border-red-400 text-red-400 font-bold rounded-lg hover:bg-red-400 hover:text-white transition-colors duration-300 cursor-pointer'>
        View Full Itinerary
      </button>
    </div>
  </div>
);

export default function Itineraries() {
  return (
    <section className='py-24 bg-grid'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
          <div className='max-w-2xl'>
            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Curated Itineraries
            </h2>
            <p className='text-xl text-gray-200'>
              Whether you have a week or a month, we have the perfect plan for
              your journey.
            </p>
          </div>
          <button className='text-red-400 font-bold text-lg hover:underline flex items-center whitespace-nowrap cursor-pointer'>
            View all plans
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
          </button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <PlanCard
            title='The Golden Triangle'
            duration='1 Week'
            image='https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
            description='The perfect introduction to Nepal. Experience the ancient culture of Kathmandu, the wildlife of Chitwan, and the lakeside serenity of Pokhara.'
            highlights={[
              "Kathmandu Durbar Square",
              "Chitwan Jungle Safari",
              "Pokhara Lakeside",
              "Sarangkot Sunrise",
            ]}
          />
          <PlanCard
            title='Himalayan Glimpse'
            duration='2 Weeks'
            image='https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=1200'
            description='Combine culture with a taste of the mountains. Includes a short trek in the Annapurna region to witness the giants up close.'
            highlights={[
              "Poon Hill Trek",
              "Bhaktapur",
              "Phewa Lake Boating",
              "World Peace Pagoda",
            ]}
          />
          <PlanCard
            title='The Grand Adventure'
            duration='3 Weeks'
            image='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200'
            description='For the ultimate explorer. Tackle the legendary Everest Base Camp trek or the Annapurna Circuit, immersing yourself deep in the Himalayas.'
            highlights={[
              "Everest Base Camp",
              "Namche Bazaar",
              "Tengboche Monastery",
              "Kala Patthar",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
