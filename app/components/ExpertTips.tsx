import Image from "next/image";
import Link from "next/link";

const tips = [
  {
    title: "Christmas in Switzerland",
    description:
      "Christmas magic in Switzerland: mulled wine and fondue, Christmas lights and markets.",
    image:
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "The 17 best Christmas markets",
    description:
      "Mulled wine, Christmas music, twinkling lights and enticing aromas.",
    image:
      "https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Ski areas close to the city",
    description:
      "Fresh mountain air and snow-covered landscapes await you at these different ski destinations.",
    image:
      "https://images.unsplash.com/photo-1486074051793-e41332bf18fc?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ExpertTips() {
  return (
    <div className='py-20 bg-grid'>
      <div className='container mx-auto px-4'>
        <h2 className='text-5xl font-bold text-white mb-12 tracking-tight'>
          Expert tips
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {tips.map((tip) => (
            <Link
              key={tip.title}
              href='#'
              className='group block bg-[#7d2426] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
            >
              <div className='relative h-72 overflow-hidden'>
                <Image
                  src={tip.image}
                  alt={tip.title}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-800'>
                  Tip
                </div>
              </div>
              <div className='p-8'>
                <h3 className='text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors leading-tight'>
                  {tip.title}
                </h3>
                <p className='text-gray-300 leading-relaxed mb-6 text-lg'>
                  {tip.description}
                </p>
                <span className='inline-flex items-center gap-2 text-red-600 font-bold group-hover:gap-3 transition-all'>
                  Learn more
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={3}
                    stroke='currentColor'
                    className='w-4 h-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M8.25 4.5l7.5 7.5-7.5 7.5'
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
