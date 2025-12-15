"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import NavDropdown from "./NavDropdown";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "@/lib/useTranslation";

export default function Navbar() {
  const t = useTranslation();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and prevent scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const dropdownContent = {
    Destinations: [
      {
        name: "Holiday destinations",
        items: [
          "Cities",
          "Summer holiday destinations",
          "Winter sports & ski resorts",
          "Family destinations",
          "Regions",
          "Beach Destinations",
          "Mountain Retreats",
          "Read all",
        ],
      },
      {
        name: "Attractions",
        items: [
          "Top attractions",
          "UNESCO World Heritage sites / biospheres",
          "Travel by train, bus or boat",
          "Top museums",
          "Culture",
          "Historical Monuments",
          "Religious Sites",
          "Read all",
        ],
      },
      {
        name: "Popular Routes",
        items: [
          "Kathmandu Valley Circuit",
          "Everest Base Camp Trek",
          "Annapurna Circuit",
          "Pokhara Valley Tour",
          "Chitwan Safari Route",
          "Kathmandu to Pokhara",
          "Mountain Flight Routes",
          "Read all",
        ],
      },
    ],
    Experiences: [
      {
        name: "Adventure",
        items: [
          "Trekking",
          "Paragliding",
          "Rafting",
          "Mountain Climbing",
          "Rock Climbing",
          "Canyoning",
          "Mountaineering",
          "Read all",
        ],
      },
      {
        name: "Cultural",
        items: [
          "Cultural Tours",
          "Festival Celebrations",
          "Temple Visits",
          "Local Markets",
          "Art Galleries",
          "Photography Tours",
          "Spiritual Retreats",
          "Read all",
        ],
      },
      {
        name: "Nature",
        items: [
          "Wildlife Safari",
          "Birdwatching",
          "Jungle Treks",
          "Mountain Biking",
          "Hiking",
          "Nature Photography",
          "Botanical Gardens",
          "Read all",
        ],
      },
    ],
    Accommodation: [
      {
        name: "Luxury",
        items: [
          "5-Star Hotels",
          "Luxury Resorts",
          "Premium Lodges",
          "Luxury Camps",
          "Heritage Properties",
          "Boutique Hotels",
          "Palace Stays",
          "Read all",
        ],
      },
      {
        name: "Mid-Range",
        items: [
          "3-4 Star Hotels",
          "Mountain Lodges",
          "Resort Hotels",
          "Guesthouses",
          "Inns",
          "Homestays",
          "Riverside Camps",
          "Read all",
        ],
      },
      {
        name: "Budget & Experience",
        items: [
          "Budget Hostels",
          "Eco-lodges",
          "Farm Stays",
          "Temple Stays",
          "Community Lodges",
          "Backpacker Hostels",
          "Treehouse Stays",
          "Read all",
        ],
      },
    ],
    Planning: [
      {
        name: "Getting Started",
        items: [
          "Best Time to Visit",
          "Visa Information",
          "Travel Duration",
          "Budget Guide",
          "Health & Safety",
          "Local Customs",
          "Required Documents",
          "Read all",
        ],
      },
      {
        name: "Practical Info",
        items: [
          "Transportation",
          "Currency & Money",
          "Language Guide",
          "Local SIM Cards",
          "Travel Insurance",
          "Emergency Contacts",
          "Banking & ATMs",
          "Read all",
        ],
      },
      {
        name: "Travel Tips",
        items: [
          "Packing Checklist",
          "Itineraries",
          "Day Trips",
          "Responsible Tourism",
          "Local Cuisine",
          "Shopping Guide",
          "Photography Tips",
          "Read all",
        ],
      },
    ],
  };

  const navItems = [
    { label: t.nav.destinations, href: "/destinations" },
    { label: t.nav.experiences, href: "/experiences" },
    { label: t.nav.accommodation, href: "/accommodation" },
    { label: t.nav.planning, href: "/planning" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          hasScrolled || activeDropdown || mobileMenuOpen ? "bg-[#180109]" : ""
        } hover:bg-[#180109] ${
          activeDropdown ? "hidden md:block md:bg-[#180109]" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between px-8 max-w-7xl mx-auto w-full transition-all duration-500 ${
            hasScrolled ? "py-2" : "py-4"
          }`}
        >
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2 group'>
            <div
              className={`relative transition-all duration-500 ${
                hasScrolled
                  ? "w-8 h-8 md:w-10 md:h-10"
                  : "w-8 h-8 md:w-12 md:h-12"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='/flag.svg'
                alt='Logo'
                className='object-contain w-full h-full'
              />
            </div>
            <span
              className={`font-bold tracking-tight text-white group-hover:text-slate-200 transition-all duration-500 ${
                hasScrolled ? "text-sm md:text-lg" : "text-sm md:text-xl"
              }`}
            >
              Nepal
            </span>
          </Link>
          {/* Navigation Items */}
          <div
            className={`hidden md:flex items-center transition-all duration-500 ${
              hasScrolled ? "gap-6" : "gap-8"
            }`}
          >
            {navItems.map((item) => {
              const isActive = activeDropdown === item.label;
              return (
                <button
                  key={item.href}
                  onClick={() =>
                    setActiveDropdown(isActive ? null : item.label)
                  }
                  className={`relative font-medium tracking-wide group overflow-hidden transition-all duration-300 ${
                    hasScrolled ? "text-base" : "text-lg"
                  } ${
                    isActive
                      ? "text-[#d4344f]"
                      : "text-white hover:text-[#d4344f]"
                  }`}
                >
                  <span className='relative inline-block hover:cursor-pointer'>
                    {item.label}
                  </span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-red-600 to-pink-600 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile Navigation Items */}
          {mobileMenuOpen && !activeDropdown && (
            <>
              {/* Mobile Menu Backdrop - Full Screen Coverage */}
              <div
                className='fixed top-0 left-0 right-0 bottom-0 bg-black/70 z-30 md:hidden'
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Mobile Menu Panel */}
              <div className='fixed top-16 left-0 right-0 z-40 md:hidden bg-[#180109] border-b border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300'>
                <div className='flex flex-col gap-0 px-4 py-4 max-h-[calc(100vh-80px)] overflow-y-auto'>
                  {/* Close Button */}
                  <div className='flex justify-end mb-4'>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className='text-white hover:text-[#d4344f] transition-colors duration-300 p-2 hover:bg-white/10 rounded'
                      aria-label='Close menu'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        className='w-6 h-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Menu Items */}
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => {
                        setActiveDropdown(item.label);
                        setMobileMenuOpen(false);
                      }}
                      className='text-white hover:text-[#d4344f] transition-colors duration-300 font-medium tracking-wide text-left py-3 px-4 border-b border-white/5 hover:bg-white/5 rounded'
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
          {/* End Mobile Navigation */}

          {/* Right Actions */}
          <div
            className={`flex items-center transition-all duration-500 ${
              hasScrolled ? "gap-4 md:gap-6" : "gap-6 md:gap-8"
            }`}
          >
            {/* Search */}
            <button className='flex items-center gap-2 text-white hover:text-(--accent-hover) active:text-(--accent-hover) transition-colors duration-300 group hover:cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-5 h-5 group-hover:scale-110 transition-transform duration-300'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                />
              </svg>
              <span className='hidden lg:inline text-sm font-medium'>
                {t.nav.search}
              </span>
            </button>

            {/* Meetings */}
            <button className='hidden md:flex items-center gap-2 text-whitetransition-colors duration-300 group hover:cursor-pointer hover:text-(--accent-hover) active:text-(--accent-hover)'>
              <span className='text-sm font-medium'>{t.nav.mountains}</span>
            </button>

            {/* Language Dropdown */}
            <LanguageSelector />

            {/* Map */}
            <button className='flex items-center text-white hover:text-(--accent-hover) active:text-(--accent-hover) transition-colors duration-300 group hover:cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'
                className='w-5 h-5 group-hover:scale-110 transition-transform duration-300'
              >
                <path
                  d='M15.8125 5.75c0 .794.6435 1.4375 1.4375 1.4375s1.4375-.6435 1.4375-1.4375-.6435-1.4375-1.4375-1.4375-1.4375.6435-1.4375 1.4375zM7 4.2526v14.2552l-5.0833 2.0667V6.3787L7 4.2526zM21.0833 5.75c0 .3723-.2324 1.2458-.6588 2.2161-.4265.9704-1.0293 2.0715-1.6172 3.085-.7815 1.3469-1.1198 1.8275-1.5573 2.4854-.4375-.658-.7758-1.1385-1.5573-2.4855-.588-1.0134-1.1907-2.1145-1.6172-3.0849-.4264-.9703-.6588-1.8438-.6588-2.2161A3.8198 3.8198 0 0117.25 1.9167 3.8198 3.8198 0 0121.0833 5.75zM7.637 1.8568L0 5.1208v18.3886l7.6969-3.3245 7.6661 2.875L23 19.7959V11.44c-.6105 1.171-1.288 2.2957-1.9167 3.2943v3.8031l-4.7916 2.037v-1.5578l-1.4073-2.0365a60.8375 60.8375 0 01-.5094-.7484v4.4323L9 18.5078V4.3125l.673.3292c.0939-.6478.264-1.2708.5093-1.8568L7.637 1.8568zM11.5 5.75c0 .9507.3666 1.92.8385 2.9948.472 1.0748 1.0671 2.2128 1.6771 3.264 1.2205 2.1036 2.4558 3.8636 2.4558 3.8636l.7786 1.138.7786-1.138s1.2353-1.76 2.4558-3.8635c.61-1.0513 1.205-2.1893 1.677-3.2641C22.6335 7.67 23 6.7007 23 5.75 23 2.5856 20.4144 0 17.25 0S11.5 2.5856 11.5 5.75z'
                  fillRule='evenodd'
                />
              </svg>
            </button>

            {/* Help Icon */}
            <button className='flex items-center text-white hover:text-(--accent-hover) active:text-(--accent-hover) transition-colors duration-300 group hover:cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'
                className='w-5 h-5 group-hover:scale-110 transition-transform duration-300'
              >
                <path
                  d='M11.2273 15.8247v-3.7809H10V9.8685h3.2727v5.9562H14.5V18H10v-2.1753h1.2273zm-3.085 5.3895c1.1098.4672 2.3008.7312 3.5317.7742 1.919.067 3.7744-.4095 5.3943-1.358 2.939-1.7206 4.8275-4.8183 4.9485-8.284.1927-5.5178-4.1254-10.1472-9.645-10.34-5.5195-.1927-10.15 4.1243-10.3428 9.642-.0766 2.1954.5595 4.3055 1.791 6.0677l-.0257.018.019.0039-.9221 4.5848 5.2507-1.1109.0005.0023zm-6.4445-3.1009c-1.16-1.9528-1.7489-4.206-1.6676-6.5347C.2615 4.9568 5.8183-.2236 12.4416.0077 19.065.239 24.247 5.7944 24.0156 12.4162c-.1452 4.158-2.4124 7.8769-5.9368 9.9402-1.9445 1.1385-4.1741 1.711-6.4746 1.6308-1.2545-.0439-2.4767-.2797-3.6342-.6946L.331 24.9087l1.3668-6.7954zM13.375 6.4243c0 .7862-.6026 1.4243-1.3451 1.4243-.7425 0-1.3451-.638-1.3451-1.4243 0-.7862.6026-1.4243 1.345-1.4243.7426 0 1.3452.638 1.3452 1.4243z'
                  fillRule='nonzero'
                />
              </svg>
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className='flex md:hidden items-center text-white hover:text-slate-300 transition-colors duration-300 group'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-6 h-6 group-hover:scale-110 transition-transform duration-300'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Items */}
          {mobileMenuOpen && (
            <div className='md:hidden flex flex-col items-start gap-4 px-8 pb-4 border-t border-white/10'>
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    setActiveDropdown(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className='text-white hover:text-[#d4344f] transition-colors duration-300 font-medium tracking-wide text-left'
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu Backdrop and Panel - Outside of nav for proper z-stacking */}
        {mobileMenuOpen && !activeDropdown && (
          <>
            {/* Mobile Menu Backdrop - Full Screen Coverage */}
            <div
              className='fixed top-0 left-0 right-0 bottom-0 bg-black/80 z-40 md:hidden animate-in fade-in duration-300'
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel - Smooth animation from right to left */}
            <div className='fixed top-0 left-0 right-0 bottom-0 z-50 bg-linear-to-b from-[#180109] to-[#0a0605] border-b border-[#d4344f]/20 shadow-2xl md:hidden animate-in slide-in-from-right duration-500'>
              <div className='flex flex-col gap-0 px-4 py-6 h-full overflow-y-auto bg-[#180109] pt-20'>
                {/* Header Section */}
                <div className='flex items-center justify-between mb-6 pb-4 border-b border-[#d4344f]/20'>
                  <h3 className='text-white font-bold text-lg tracking-wide'>
                    EXPLORE
                  </h3>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className='text-white hover:text-[#d4344f] transition-all duration-300 p-2 hover:bg-[#d4344f]/10 rounded-lg'
                    aria-label='Close menu'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={2}
                      stroke='currentColor'
                      className='w-6 h-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>

                {/* Menu Items */}
                <div className='space-y-2 mb-8'>
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => {
                        setActiveDropdown(item.label);
                        setMobileMenuOpen(false);
                      }}
                      className='w-full text-white hover:text-[#d4344f] transition-all duration-300 font-medium tracking-wide text-left py-4 px-4 border-b border-[#d4344f]/10 hover:bg-[#d4344f]/5 rounded-lg hover:pl-6'
                    >
                      <span className='flex items-center gap-3'>
                        <span className='text-[#d4344f] text-lg'>›</span>
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Quick Links Section */}
                <div className='mb-8 pb-8 border-b border-[#d4344f]/20'>
                  <p className='text-[#d4344f] text-xs font-bold uppercase tracking-widest mb-4'>
                    Quick Links
                  </p>
                  <div className='space-y-2'>
                    <a
                      href='#'
                      className='block text-gray-300 hover:text-[#d4344f] transition-colors duration-300 py-2 px-4 rounded hover:bg-[#d4344f]/5'
                    >
                      Search Destinations
                    </a>
                    <a
                      href='#'
                      className='block text-gray-300 hover:text-[#d4344f] transition-colors duration-300 py-2 px-4 rounded hover:bg-[#d4344f]/5'
                    >
                      Travel Guides
                    </a>
                    <a
                      href='#'
                      className='block text-gray-300 hover:text-[#d4344f] transition-colors duration-300 py-2 px-4 rounded hover:bg-[#d4344f]/5'
                    >
                      Best Offers
                    </a>
                    <a
                      href='#'
                      className='block text-gray-300 hover:text-[#d4344f] transition-colors duration-300 py-2 px-4 rounded hover:bg-[#d4344f]/5'
                    >
                      Contact Us
                    </a>
                  </div>
                </div>

                {/* Information Section */}
                <div className='mb-8 pb-8 border-b border-[#d4344f]/20'>
                  <p className='text-[#d4344f] text-xs font-bold uppercase tracking-widest mb-4'>
                    Information
                  </p>
                  <div className='space-y-2 text-sm text-gray-300'>
                    <p>📍 Kathmandu, Nepal</p>
                    <p>📞 +977-1-1234567</p>
                    <p>✉️ info@tourisminnepal.com</p>
                  </div>
                </div>

                {/* Social Handles */}
                <div className='mb-4'>
                  <p className='text-[#d4344f] text-xs font-bold uppercase tracking-widest mb-4'>
                    Follow Us
                  </p>
                  <div className='flex items-center gap-4'>
                    <a
                      href='https://facebook.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-300 hover:text-[#d4344f] transition-all duration-300 p-2 hover:bg-[#d4344f]/10 rounded-lg hover:scale-110'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                      </svg>
                    </a>
                    <a
                      href='https://instagram.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-300 hover:text-[#d4344f] transition-all duration-300 p-2 hover:bg-[#d4344f]/10 rounded-lg hover:scale-110'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162 0 3.403 2.759 6.162 6.162 6.162 3.403 0 6.162-2.759 6.162-6.162 0-3.403-2.759-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z' />
                      </svg>
                    </a>
                    <a
                      href='https://twitter.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-300 hover:text-[#d4344f] transition-all duration-300 p-2 hover:bg-[#d4344f]/10 rounded-lg hover:scale-110'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' />
                      </svg>
                    </a>
                    <a
                      href='https://youtube.com'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-300 hover:text-[#d4344f] transition-all duration-300 p-2 hover:bg-[#d4344f]/10 rounded-lg hover:scale-110'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Call to Action Button */}
                <button className='w-full bg-linear-to-r from-[#d4344f] to-[#c41e3a] hover:from-[#e54562] hover:to-[#d42740] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg mt-4'>
                  {t.nav.bookAdventure}
                </button>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Dropdowns - Outside nav so they're not hidden when nav is hidden on mobile */}
      {navItems.map((item) => (
        <NavDropdown
          key={item.label}
          isOpen={activeDropdown === item.label}
          onClose={() => setActiveDropdown(null)}
          title={item.label}
          categories={
            dropdownContent[item.label as keyof typeof dropdownContent]
          }
        />
      ))}
    </>
  );
}
