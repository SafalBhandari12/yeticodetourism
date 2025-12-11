"use client";

import Image from "next/image";

const EventCard = ({
  title,
  date,
  description,
  image,
}: {
  title: string;
  date: string;
  description: string;
  image: string;
}) => (
  <div className='min-w-[300px] md:min-w-[400px] snap-center'>
    <div className='relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-6 group cursor-pointer'>
      <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10' />
      <Image
        src={image}
        alt={title}
        fill
        className='object-cover transform group-hover:scale-110 transition-transform duration-700'
      />
      <div className='absolute bottom-0 left-0 p-8 z-20'>
        <span className='inline-block px-3 py-1 bg-[#d4344f] text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3'>
          {date}
        </span>
        <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>
          {title}
        </h3>
      </div>
    </div>
    <p className='text-gray-300 leading-relaxed pr-4'>{description}</p>
  </div>
);

export default function EventsFestivals() {
  return (
    <section className='py-24 bg-grid overflow-hidden'>
      <div className='max-w-7xl mx-auto px-8 mb-12 flex flex-col md:flex-row justify-between items-end'>
        <div>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            Festivals & Events
          </h2>
          <p className='text-xl text-gray-200'>
            Celebrate with the gods in the land of festivals.
          </p>
        </div>
        <div className='hidden md:flex gap-4'>
          <button className='w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>
          <button className='w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>
      </div>

      <div className='pl-8 md:pl-[max(2rem,calc((100vw-80rem)/2))] overflow-x-auto pb-12 hide-scrollbar flex gap-8 snap-x'>
        <EventCard
          title='Dashain'
          date='October'
          image='/festival/dashain.jpg'
          description='The biggest and most auspicious festival in Nepal, celebrating the victory of good over evil. Families reunite, receive blessings (Tika), and fly kites.'
        />
        <EventCard
          title='Tihar (Deepawali)'
          date='November'
          image='/festival/tihar.jpg'
          description='The festival of lights, where crows, dogs, cows, and oxen are worshipped. The city sparkles with oil lamps and colorful rangolis.'
        />
        <EventCard
          title='Holi'
          date='March'
          image='/festival/holi.jpg'
          description='The vibrant festival of colors. People smear each other with colored powder and water, celebrating the arrival of spring.'
        />
        <EventCard
          title='Indra Jatra'
          date='September'
          image='https://images.unsplash.com/photo-1567593810070-7a3d471af022?q=80&w=1200'
          description='A massive street festival in Kathmandu featuring the chariot procession of the Living Goddess Kumari and traditional mask dances.'
        />
      </div>
    </section>
  );
}
