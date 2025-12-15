"use client";

import { useTranslation } from "@/lib/useTranslation";
import Link from "next/link";

export default function PlanningPage() {
  const t = useTranslation();

  const planningSections = [
    {
      id: "visa-information",
      title: t.essentialInfo?.visa?.title || "Visa & Entry",
      summary: t.essentialInfo?.visa?.summary || "Visa on Arrival & Fees",
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
          />
        </svg>
      ),
      items: t.essentialInfo?.visa?.items || [],
    },
    {
      id: "currency",
      title: t.essentialInfo?.currency?.title || "Currency & Payments",
      summary:
        t.essentialInfo?.currency?.summary || "NPR, ATMs & Exchange Rates",
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
      items: t.essentialInfo?.currency?.items || [],
    },
    {
      id: "transportation",
      title: t.essentialInfo?.travel?.title || "Travel Options",
      summary:
        t.essentialInfo?.travel?.summary || "Bus, Taxi & Domestic Flights",
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
          />
        </svg>
      ),
      items: t.essentialInfo?.travel?.items || [],
    },
    {
      id: "sim-card",
      title: t.essentialInfo?.sim?.title || "SIM & Network",
      summary: t.essentialInfo?.sim?.summary || "Ncell, NTC & Connectivity",
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0'
          />
        </svg>
      ),
      items: t.essentialInfo?.sim?.items || [],
    },
    {
      id: "safety",
      title: t.essentialInfo?.safety?.title || "Safety & Etiquette",
      summary:
        t.essentialInfo?.safety?.summary || "Emergency Contacts & Customs",
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
          />
        </svg>
      ),
      items: t.essentialInfo?.safety?.items || [],
    },
    {
      id: "local-phrases",
      title: t.essentialInfo?.phrases?.title || "Local Phrases",
      summary: t.essentialInfo?.phrases?.summary || "Namaste & Basic Greetings",
      icon: (
        <svg
          className='w-8 h-8'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.5}
            d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
          />
        </svg>
      ),
      items: t.essentialInfo?.phrases?.items || [],
    },
  ];

  return (
    <div className='min-h-screen bg-[#180109] text-white pt-24 pb-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400'>
            {t.nav?.planning || "Planning"}
          </h1>
          <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto'>
            {t.essentialInfo?.subtitle ||
              "Everything you need to know before you travel to Nepal."}
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {planningSections.map((section, index) => (
            <Link
              href={`/planning/${section.id}`}
              key={section.id}
              className='bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[#d4344f]/50 transition-all duration-300 hover:-translate-y-1 block'
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className='flex items-center gap-4 mb-6'>
                <div className='p-3 bg-[#d4344f]/10 rounded-lg text-[#d4344f]'>
                  {section.icon}
                </div>
                <div>
                  <h3 className='text-xl font-bold text-white'>
                    {section.title}
                  </h3>
                  <p className='text-sm text-gray-400'>{section.summary}</p>
                </div>
              </div>

              <ul className='space-y-3'>
                {section.items.map((item: any, i: number) => (
                  <li
                    key={i}
                    className='flex items-start gap-3 text-gray-300 text-sm'
                  >
                    <span className='text-[#d4344f] mt-1'>›</span>
                    <span>
                      {item.label && (
                        <strong className='text-white block mb-1'>
                          {item.label}
                        </strong>
                      )}
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
