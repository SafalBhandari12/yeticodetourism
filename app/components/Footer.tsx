import Link from "next/link";

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-16'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Search */}
          <div>
            <h3 className='text-xl font-bold mb-6'>Search</h3>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search'
                className='w-full bg-gray-800 border border-gray-700 rounded-full py-3 px-6 text-white focus:outline-none focus:border-red-600'
              />
              <button className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white'>
                🔍
              </button>
            </div>
          </div>

          {/* Legal & More */}
          <div>
            <h3 className='text-xl font-bold mb-6'>Legal information</h3>
            <ul className='space-y-3 text-gray-400'>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  Terms of use
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  Data protection
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  Cookies
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  Imprint
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-xl font-bold mb-6'>Contact</h3>
            <ul className='space-y-3 text-gray-400'>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  Address
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  Help center
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  Media Corner
                </Link>
              </li>
              <li>
                <Link href='#' className='hover:text-white transition-colors'>
                  Trade Corner
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className='text-xl font-bold mb-6'>Newsletter</h3>
            <p className='text-gray-400 mb-4'>
              Subscribe to our newsletter for the latest updates.
            </p>
            <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full w-full transition-colors'>
              Subscribe
            </button>

            <div className='mt-8'>
              <h4 className='font-bold mb-4'>Follow us</h4>
              <div className='flex gap-4'>
                <Link href='#' className='text-2xl hover:text-red-500'>
                  FB
                </Link>
                <Link href='#' className='text-2xl hover:text-red-500'>
                  IG
                </Link>
                <Link href='#' className='text-2xl hover:text-red-500'>
                  YT
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-16 pt-8 border-t border-gray-800 text-center text-gray-500'>
          <p>&copy; 2025 Switzerland Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
