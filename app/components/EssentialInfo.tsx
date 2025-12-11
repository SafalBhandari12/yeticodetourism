"use client";

import { useState } from "react";

const InfoCard = ({
  title,
  icon,
  children,
  className = "",
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`bg-[#7d2426] p-8 rounded-2xl border border-[#8b3a3d] hover:border-red-400 transition-colors duration-300 ${className}`}
  >
    <div className='w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center text-red-400 mb-6'>
      {icon}
    </div>
    <h3 className='text-2xl font-bold text-white mb-4'>{title}</h3>
    <div className='text-gray-300 leading-relaxed space-y-4'>{children}</div>
  </div>
);

export default function EssentialInfo() {
  return (
    <section className='py-24 bg-grid'>
      <div className='max-w-7xl mx-auto px-8'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
            Essential Information
          </h2>
          <p className='text-xl text-gray-200'>
            Everything you need to know before you go.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Currency */}
          <InfoCard
            title='Currency & Payments'
            icon={
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
                  d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            }
          >
            <p>
              <strong>Nepalese Rupee (NPR)</strong> is the official currency.
            </p>
            <ul className='list-disc pl-5 space-y-2'>
              <li>ATMs are widely available in Kathmandu and Pokhara.</li>
              <li>Credit cards accepted in major hotels and restaurants.</li>
              <li>Carry cash for trekking and rural areas.</li>
              <li>Approx: $1 USD ≈ 130-135 NPR.</li>
            </ul>
          </InfoCard>

          {/* Connectivity */}
          <InfoCard
            title='SIM & Network'
            icon={
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
                  d='M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0'
                />
              </svg>
            }
          >
            <p>Stay connected easily with local SIM cards.</p>
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                <strong>Ncell</strong> and <strong>Nepal Telecom (NTC)</strong>{" "}
                are major providers.
              </li>
              <li>Available at airport (bring passport & photo).</li>
              <li>4G coverage is good in cities; variable on treks.</li>
              <li>Free Wi-Fi in most hotels and cafes.</li>
            </ul>
          </InfoCard>

          {/* Transportation */}
          <InfoCard
            title='Transportation'
            icon={
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
                  d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
                />
              </svg>
            }
          >
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                <strong>Public Bus:</strong> Cheap but crowded.
              </li>
              <li>
                <strong>Tourist Bus:</strong> Recommended for inter-city travel
                (e.g., Kathmandu to Pokhara).
              </li>
              <li>
                <strong>Taxis:</strong> Negotiate fare or use apps like{" "}
                <strong>Pathao</strong> or <strong>InDrive</strong>.
              </li>
              <li>
                <strong>Flights:</strong> Quickest way to reach remote areas
                (Lukla, Jomsom).
              </li>
            </ul>
          </InfoCard>

          {/* Visa & Entry */}
          <InfoCard
            title='Visa & Entry'
            icon={
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
                  d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                />
              </svg>
            }
          >
            <p>
              <strong>On-Arrival Visa</strong> available at Tribhuvan
              International Airport.
            </p>
            <ul className='list-disc pl-5 space-y-2'>
              <li>15 Days: $30 USD</li>
              <li>30 Days: $50 USD</li>
              <li>90 Days: $125 USD</li>
              <li>Bring passport (6 months validity) and photos.</li>
              <li>Online application available (15 days prior).</li>
            </ul>
          </InfoCard>

          {/* Language */}
          <InfoCard
            title='Local Phrases'
            icon={
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
                  d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
                />
              </svg>
            }
          >
            <p>English is widely spoken, but locals love it when you try:</p>
            <ul className='space-y-1 mt-2'>
              <li>
                <strong>Namaste:</strong> Hello / Greetings
              </li>
              <li>
                <strong>Dhanyabad:</strong> Thank you
              </li>
              <li>
                <strong>Mitho Cha:</strong> It's delicious
              </li>
              <li>
                <strong>Jam Jam:</strong> Let's go
              </li>
              <li>
                <strong>Dai / Didi:</strong> Brother / Sister (respectful)
              </li>
            </ul>
          </InfoCard>

          {/* Safety */}
          <InfoCard
            title='Safety & Etiquette'
            icon={
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
                  d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                />
              </svg>
            }
          >
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                <strong>Tourist Police:</strong> 1144 (Hotline)
              </li>
              <li>
                <strong>Emergency:</strong> 100 (Police), 102 (Ambulance)
              </li>
              <li>Dress modestly, especially at religious sites.</li>
              <li>Always ask permission before taking photos of people.</li>
              <li>Remove shoes before entering temples or homes.</li>
            </ul>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
