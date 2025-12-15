"use client";

import { useTranslation } from "@/lib/useTranslation";
import Image from "next/image";
import Link from "next/link";

export default function ExperiencesPage() {
  const t = useTranslation();

  const experiences = [
    {
      id: "trekking",
      title: t.adventure?.trekking || "Trekking",
      category: "Adventure",
      image: "/topDestination/mountain.jpg",
      description:
        t.adventure?.trekkingDesc ||
        "From the Annapurna Circuit to the Great Himalaya Trail, walk the paths of legends.",
    },
    {
      id: "jungle-safari",
      title: t.adventure?.jungleSafari || "Jungle Safari",
      category: "Nature",
      image: "/topDestination/kathmandu.jpeg", // Placeholder
      description:
        t.adventure?.jungleSafariDesc ||
        "Encounter one-horned rhinos, Bengal tigers, and wild elephants.",
    },
    {
      id: "festivals",
      title: t.hero.themes?.festivals || "Festivals",
      category: "Culture",
      image: "/festival/dashain.jpg",
      description:
        "Immerse yourself in the vibrant colors and spiritual energy of Nepal's many festivals.",
    },
    {
      id: "adventure-sports",
      title: t.adventure?.adventureSports || "Adventure Sports",
      category: "Adventure",
      image: "/topDestination/mountain.jpg", // Placeholder
      description:
        t.adventure?.adventureSportsDesc ||
        "Paragliding in Pokhara, Bungee jumping at The Last Resort, and Rafting.",
    },
    {
      id: "cultural-tours",
      title: t.hero.themes?.heritage || "Heritage Tours",
      category: "Culture",
      image: "/topDestination/kathmandu.avif",
      description:
        "Explore ancient palaces, temples, and the living history of the Kathmandu Valley.",
    },
    {
      id: "culinary-journey",
      title: t.hero.themes?.cuisine || "Culinary Journey",
      category: "Culture",
      image: "/festival/tihar.jpg", // Placeholder
      description:
        "Taste the flavors of the Himalayas, from momos to dal bhat.",
    },
  ];

  return (
    <div className='min-h-screen bg-[#180109] text-white pt-24 pb-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400'>
            {t.nav?.experiences || "Experiences"}
          </h1>
          <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto'>
            {t.adventure?.subtitle ||
              "Nepal is not just about mountains. It's a playground for adrenaline junkies and nature lovers."}
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className='group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#d4344f]/50 transition-all duration-300 hover:-translate-y-2'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className='relative h-72 w-full overflow-hidden'>
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-linear-to-t from-[#180109] via-transparent to-transparent opacity-90' />

                {/* Category Badge */}
                <div className='absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full'>
                  {exp.category}
                </div>
              </div>

              {/* Content */}
              <div className='absolute bottom-0 left-0 right-0 p-6'>
                <h3 className='text-2xl font-bold mb-2 group-hover:text-[#d4344f] transition-colors duration-300'>
                  {exp.title}
                </h3>
                <p className='text-gray-300 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300'>
                  {exp.description}
                </p>
                <Link
                  href={`/experiences/${exp.id}`}
                  className='inline-flex items-center text-white/80 hover:text-[#d4344f] text-sm font-semibold transition-colors duration-300'
                >
                  {t.common?.learnMore || "Learn More"}
                  <svg
                    className='w-4 h-4 ml-2'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
