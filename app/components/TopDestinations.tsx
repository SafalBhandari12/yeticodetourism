import Image from "next/image";
import Link from "next/link";

const destinations = [
  {
    name: "Zurich",
    image:
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    name: "Geneva",
    image:
      "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    name: "Interlaken",
    image:
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
];

export default function TopDestinations() {
  return (
    <div className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-end mb-8'>
          <h2 className='text-4xl font-bold text-gray-900'>Top Destinations</h2>
          <Link href='#' className='text-red-600 font-semibold hover:underline'>
            Learn more
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {destinations.map((dest) => (
            <Link
              key={dest.name}
              href={dest.link}
              className='group block relative overflow-hidden rounded-xl aspect-4/3 shadow-lg'
            >
              <Image
                src={dest.image}
                alt={dest.name}
                fill
                className='object-cover transition-transform duration-700 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90'></div>
              <div className='absolute bottom-0 left-0 p-8 w-full'>
                <h3 className='text-3xl font-bold text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                  {dest.name}
                </h3>
                <div className='h-1 w-12 bg-red-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
