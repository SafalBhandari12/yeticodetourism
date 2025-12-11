import Image from "next/image";
import Link from "next/link";

export default function TopAttractions() {
  return (
    <div className='py-20 bg-grid'>
      <div className='container mx-auto px-4'>
        <h2 className='text-5xl font-bold text-white mb-10 tracking-tight'>
          Top attractions
        </h2>

        <div className='relative rounded-2xl overflow-hidden h-[700px] group shadow-2xl'>
          <Image
            src='https://images.unsplash.com/photo-1585338447937-7082f8fc763d?q=80&w=1600&auto=format&fit=crop'
            alt='Matterhorn'
            fill
            className='object-cover transition-transform duration-1000 group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent'></div>

          <div className='absolute bottom-0 left-0 p-10 md:p-16 text-white max-w-3xl'>
            <h3 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
              Matterhorn
            </h3>
            <p className='text-xl md:text-2xl mb-10 text-gray-100 font-light leading-relaxed'>
              The Matterhorn is the mountain of mountains. No other peak in the
              Alps is as famous, as beautiful or as difficult to climb.
            </p>
            <Link
              href='#'
              className='inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg group/btn'
            >
              <span className='text-lg'>Learn more</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={3}
                stroke='currentColor'
                className='w-5 h-5 group-hover/btn:translate-x-1 transition-transform'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
