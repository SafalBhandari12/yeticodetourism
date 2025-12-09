"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { label: "Destinations", href: "/destinations" },
    { label: "Experiences", href: "/experiences" },
    { label: "Accommodation", href: "/accommodation" },
    { label: "Planning", href: "/planning" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 hover:bg-[#180109] ${
        hasScrolled ? "bg-[#180109]" : ""
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
              hasScrolled ? "w-10 h-10" : "w-12 h-12"
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
              hasScrolled ? "text-lg" : "text-xl"
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
                onClick={() => setActiveDropdown(item.label)}
                className={`relative font-medium tracking-wide group overflow-hidden transition-all duration-300 ${
                  hasScrolled ? "text-base" : "text-lg"
                } ${
                  isActive
                    ? "text-[#c41e3a]"
                    : "text-white hover:text-[#c41e3a]"
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
        |{/* Right Actions */}
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
            <span className='hidden lg:inline text-sm font-medium'>Search</span>
          </button>

          {/* Meetings */}
          <button className='hidden md:flex items-center gap-2 text-whitetransition-colors duration-300 group hover:cursor-pointer hover:text-(--accent-hover) active:text-(--accent-hover)'>
            <span className='text-sm font-medium'>Mountains</span>
          </button>

          {/* Language Dropdown */}
          <div className='hidden md:flex items-center gap-2 text-white hover:text-(--accent-hover) active:text-(--accent-hover) transition-colors duration-300 group cursor-pointer'>
            <span className='text-sm font-medium'>Language</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='w-4 h-4 group-hover:scale-110 transition-transform duration-300'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </div>

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
          <button className='flex md:hidden items-center text-white hover:text-slate-300 transition-colors duration-300 group'>
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
      </div>

      {/* Dropdowns */}
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
    </nav>
  );
}
