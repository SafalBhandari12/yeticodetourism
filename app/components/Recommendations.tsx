import Link from "next/link";
import Image from "next/image";

const winterItems = [
  {
    title: "Winter holidays",
    image:
      "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Museums",
    image:
      "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Christmas in Nepal",
    image:
      "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Winter: Excursions",
    image:
      "https://images.unsplash.com/photo-1518182170546-07661fd94144?q=80&w=800&auto=format&fit=crop",
  },
];

const summerItems = [
  {
    title: "Grand Train Tour",
    image:
      "https://images.unsplash.com/photo-1541300613939-71366b37c92e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Summer Vacation",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Summer Destinations",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Hiking",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Recommendations() {
  return (
    <div className='py-20 bg-[#661620]'>
      <div className='container mx-auto px-4'>
        {/* Winter Section */}
        <div className='mb-20'>
          <div className='flex items-baseline justify-between mb-10'>
            <h2 className='text-5xl font-bold text-white tracking-tight'>
              Recommendation winter
            </h2>
            <Link
              href='#'
              className='text-red-600 font-bold hover:text-red-700 flex items-center gap-2 group'
            >
              Show all
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-4 h-4 group-hover:translate-x-1 transition-transform'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </Link>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {winterItems.map((item) => (
              <Link key={item.title} href='#' className='group block'>
                <div className='relative overflow-hidden rounded-xl aspect-4/3 mb-5 shadow-md'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors'></div>
                </div>
                <h3 className='text-2xl font-bold text-white group-hover:text-red-400 transition-colors leading-tight'>
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>

        {/* Summer Section */}
        <div>
          <div className='flex items-baseline justify-between mb-10'>
            <h2 className='text-5xl font-bold text-white tracking-tight'>
              Recommendation summer
            </h2>
            <Link
              href='#'
              className='text-red-600 font-bold hover:text-red-700 flex items-center gap-2 group'
            >
              Show all
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-4 h-4 group-hover:translate-x-1 transition-transform'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </Link>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {summerItems.map((item) => (
              <Link key={item.title} href='#' className='group block'>
                <div className='relative overflow-hidden rounded-xl aspect-4/3 mb-5 shadow-md'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors'></div>
                </div>
                <h3 className='text-2xl font-bold text-white group-hover:text-red-400 transition-colors leading-tight'>
                  {item.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
