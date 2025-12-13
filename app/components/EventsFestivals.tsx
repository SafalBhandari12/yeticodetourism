"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { CalendarDays, Sparkles, ArrowRight } from "lucide-react";

interface Festival {
  title: string;
  date: string;
  description: string;
  image: string;
  highlight: string;
}

const FestivalCard = ({
  title,
  date,
  description,
  image,
  highlight,
  index,
}: Festival & { index: number }) => {
  return (
    <div className='group relative'>
      {/* Timeline dot and line */}
      <div className='hidden lg:flex absolute -left-16 top-8 flex-col items-center'>
        <div className='w-4 h-4 rounded-full bg-[#d4344f] ring-4 ring-[#d4344f]/20 mb-4' />
        {index !== 3 && (
          <div className='w-1 h-32 bg-gradient-to-b from-[#d4344f] to-transparent' />
        )}
      </div>

      {/* Card Container */}
      <div className='bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#d4344f]/50 rounded-xl overflow-hidden group transition-all duration-500'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-0 min-h-64'>
          {/* Image */}
          <div className='relative h-64 md:h-full overflow-hidden md:col-span-1 bg-gradient-to-br from-[#d4344f]/20 to-transparent'>
            <Image
              src={image}
              alt={title}
              fill
              className='object-cover group-hover:scale-110 transition-transform duration-700'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-black/40 to-transparent' />
          </div>

          {/* Content */}
          <div className='p-6 md:p-8 md:col-span-2 flex flex-col justify-between'>
            {/* Top Section */}
            <div>
              <div className='flex items-center gap-2 mb-3'>
                <CalendarDays className='w-4 h-4 text-[#d4344f]' />
                <span className='text-xs font-bold uppercase tracking-widest text-[#d4344f]'>
                  {date}
                </span>
              </div>

              <div className='flex items-start justify-between mb-3'>
                <div>
                  <h3 className='text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#d4344f] transition-colors'>
                    {title}
                  </h3>
                  <div className='flex items-center gap-2'>
                    <Sparkles className='w-4 h-4 text-yellow-400' />
                    <span className='text-sm font-semibold text-gray-300'>
                      {highlight}
                    </span>
                  </div>
                </div>
              </div>

              <p className='text-gray-300 text-sm md:text-base leading-relaxed'>
                {description}
              </p>
            </div>

            {/* CTA */}
            <button className='mt-6 self-start px-4 py-2 text-sm font-bold text-[#d4344f] hover:text-white bg-transparent hover:bg-[#d4344f] border border-[#d4344f] rounded-lg transition-all duration-300'>
              Explore Festival →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function EventsFestivals() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const festivals: Festival[] = [
    {
      title: "Dashain",
      date: "September - October",
      image: "/festival/dashain.jpg",
      description:
        "The biggest and most auspicious festival in Nepal, celebrating the victory of good over evil. Families reunite to celebrate for 15 days, receive blessings (Tika), and fly colorful kites. Witness the joyous atmosphere in cities and villages alike.",
      highlight: "Biggest Festival",
    },
    {
      title: "Tihar (Deepawali)",
      date: "October - November",
      image: "/festival/tihar.jpg",
      description:
        "The festival of lights spanning five days. Crows, dogs, cows, and oxen are worshipped each day. The city sparkles with oil lamps (diyas), colorful rangolis, and decorations. It's a time of gratitude and celebration of life.",
      highlight: "Festival of Lights",
    },
    {
      title: "Holi",
      date: "March",
      image: "/festival/holi.jpg",
      description:
        "The vibrant festival of colors celebrating the arrival of spring. People smear each other with colored powder and water, exchange sweets, and reconnect with loved ones. The entire nation erupts in a burst of colors and joy.",
      highlight: "Festival of Colors",
    },
    {
      title: "Indra Jatra",
      date: "September",
      image:
        "https://images.unsplash.com/photo-1567593810070-7a3d471af022?q=80&w=1200",
      description:
        "A massive street festival in Kathmandu lasting eight days. Features the impressive chariot procession of the Living Goddess Kumari through the streets of Kathmandu Durbar Square, traditional mask dances, and cultural performances.",
      highlight: "Chariot Festival",
    },
  ];

  return (
    <section className='py-2 md:py-3 lg:py-4  bg-grid overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16'>
        {/* Header */}
        <div className='mb-8 md:mb-10 lg:mb-14'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4'>
            Festivals & Events
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl'>
            Celebrate with the gods in the land of festivals. Experience Nepal's
            vibrant cultural calendar filled with color, joy, and spiritual
            significance.
          </p>
        </div>

        {/* Festival Items - Timeline */}
        <div
          ref={containerRef}
          className='lg:pl-8 space-y-6 md:space-y-8 mb-16 md:mb-20'
        >
          {festivals.map((festival, index) => (
            <FestivalCard key={festival.title} {...festival} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <div className='flex justify-center'>
          <button
            onClick={() => router.push("/experiences")}
            className='group px-8 py-3 md:px-10 md:py-4 bg-[#d4344f] hover:bg-[#c02a41] text-white font-bold rounded-lg transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl'
          >
            View More Festivals
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </button>
        </div>
      </div>
    </section>
  );
}
