"use client";

import { useState, useEffect, useRef } from "react";

interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  subtitle: string;
}

export default function TopDestinations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const imageCache = useRef<Set<string>>(new Set());

  const destinations: Destination[] = [
    {
      id: 1,
      name: "Everest Base Camp",
      description: "",
      subtitle: "Mountain adventure",
      image: "/topDestination/mountain.jpg",
    },
    {
      id: 2,
      name: "Kathmandu Valley",
      description: "",
      subtitle: "Ancient temples & culture",
      image: "/topDestination/kathmandu.avif",
    },
    {
      id: 4,
      name: "Chitwan National Park",
      description: "",
      subtitle: "Wildlife adventure",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Annapurna Circuit",
      description: "",
      subtitle: "Legendary trek",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const currentDestination = destinations[currentIndex];

  // Preload all destination images on mount
  useEffect(() => {
    destinations.forEach((destination) => {
      if (!imageCache.current.has(destination.image)) {
        const img = new Image();
        img.src = destination.image;
        imageCache.current.add(destination.image);
      }
    });
  }, []);

  // Preload next image whenever index changes
  useEffect(() => {
    const nextImg = new Image();
    nextImg.src = destinations[nextIndex].image;
  }, [nextIndex, destinations]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
      setNextIndex((prev) => (prev + 1) % destinations.length);
      setIsTransitioning(false);
    }, 250);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + destinations.length) % destinations.length
      );
      setNextIndex(
        (prev) => (prev - 1 + destinations.length) % destinations.length
      );
      setIsTransitioning(false);
    }, 250);
  };

  return (
    <section className='relative h-screen bg-black flex items-center justify-center overflow-hidden pt-4'>
      {/* Background Image with Overlay */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%), url(${currentDestination.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content Container */}
      <div className='relative z-10 max-w-7xl mx-auto px-8 w-full h-full flex flex-col justify-center items-center text-center pt-32 md:pt-40'>
        {/* Main Title */}
        <h1 className='text-6xl md:text-7xl font-extrabold text-white  tracking-tight'>
          DESTINATIONS
        </h1>

        {/* Subtitle */}
        <p className='text-lg md:text-2xl text-white mb-40 md:mb-52 font-light'>
          for every bucket list
        </p>

        {/* Destination Navigation with Name */}
        <div className='flex items-center justify-center gap-6 md:gap-12 mb-2 md:mb-3'>
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={isTransitioning}
            className='text-white/70 hover:text-[#c41e3a] transition-all duration-300 transform hover:scale-125 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
            aria-label='Previous destination'
          >
            <svg
              className='w-10 h-10 md:w-12 md:h-12'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2.5}
                d='M15 19l-7-7 7-7'
              />
            </svg>
          </button>

          {/* Destination Name */}
          <h2
            className={`text-3xl md:text-4xl font-black text-white transition-all duration-500 ${
              isTransitioning ? "opacity-50" : "opacity-100"
            }`}
          >
            {currentDestination.name}
          </h2>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={isTransitioning}
            className='text-white/70 hover:text-[#c41e3a] transition-all duration-300 transform hover:scale-125 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
            aria-label='Next destination'
          >
            <svg
              className='w-10 h-10 md:w-12 md:h-12'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2.5}
                d='M9 5l7 7-7 7'
              />
            </svg>
          </button>
        </div>

        {/* Discover More Button */}
        <div className='mb-16 md:mb-20'>
          <button className='bg-[#c41e3a] hover:bg-[#a01830] text-white font-bold py-1.5 px-5 md:py-2 md:px-7 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-base md:text-lg cursor-pointer'>
            Discover more
          </button>
        </div>

        {/* Description */}
        <p
          className={`text-base md:text-lg text-gray-300 mb-12 md:mb-16 max-w-2xl leading-relaxed transition-all duration-500 ${
            isTransitioning ? "opacity-50" : "opacity-100"
          }`}
        >
          {currentDestination.description}
        </p>
      </div>
    </section>
  );
}
