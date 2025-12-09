"use client";

import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const baseMonths = [
    { num: "01", name: "jan" },
    { num: "02", name: "feb" },
    { num: "03", name: "mar" },
    { num: "04", name: "apr" },
    { num: "05", name: "may" },
    { num: "06", name: "jun" },
    { num: "07", name: "jul" },
    { num: "08", name: "aug" },
    { num: "09", name: "sep" },
    { num: "10", name: "oct" },
    { num: "11", name: "nov" },
    { num: "12", name: "dec" },
  ];

  const [selectedMonth, setSelectedMonth] = useState(11); // December (0-11)
  const [videoOpacity, setVideoOpacity] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Get months to display (selected month + 2 before and 2 after for centering)
  const getDisplayMonths = () => {
    const display = [];
    for (let i = -2; i <= 2; i++) {
      const monthIndex = (selectedMonth + i + 12) % 12;
      display.push({
        ...baseMonths[monthIndex],
        actualIndex: monthIndex,
        offsetFromSelected: i,
      });
    }
    return display;
  };

  const displayMonths = getDisplayMonths();

  // Scroll to center the selected month
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const buttons = container.querySelectorAll("button");
      if (buttons.length > 0) {
        // The middle button (index 2) is always the selected one
        const selectedButton = buttons[2];
        const containerWidth = container.clientWidth;
        const buttonOffsetLeft = (selectedButton as HTMLElement).offsetLeft;
        const buttonWidth = (selectedButton as HTMLElement).offsetWidth;

        // Calculate scroll position to center the button
        const scrollPosition =
          buttonOffsetLeft - containerWidth / 2 + buttonWidth / 2;

        container.scrollLeft = scrollPosition;
      }
    }
  }, [selectedMonth]);

  // Handle video transition with fade effect
  const handleMonthChange = (newMonth: number) => {
    setVideoOpacity(0.5);
    setSelectedMonth(newMonth);
    setTimeout(() => {
      setVideoOpacity(1);
    }, 50);
  };

  const videoSrc = `https://calendar.myswitzerland.com/20190321/month/${baseMonths[selectedMonth].num}_${baseMonths[selectedMonth].name}_1920x1080.mp4`;

  return (
    <div className='relative h-screen w-full overflow-hidden'>
      <video
        key={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 min-h-full min-w-full object-cover z-0 transition-opacity duration-100'
        style={{ opacity: videoOpacity }}
      >
        <source src={videoSrc} type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <div className='absolute inset-0 bg-black/20 z-10'></div>

      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4'>
        <h1 className='text-6xl md:text-8xl font-extrabold mb-6 drop-shadow-2xl tracking-tight'>
          We need Switzerland.
        </h1>
        <p className='text-2xl md:text-3xl mb-10 font-light drop-shadow-lg tracking-wide'>
          Get inspired now!
        </p>
      </div>

      {/* Month Selector Slider */}
      <div className='absolute bottom-0 left-0 z-30 py-8 px-8 w-1/2'>
        <div className='w-full'>
          <div className='flex items-center justify-center gap-4'>
            {/* Left Arrow */}
            <button
              onClick={() => handleMonthChange((selectedMonth - 1 + 12) % 12)}
              className='flex items-center justify-center text-white hover:text-(--accent-hover) transition-colors shrink-0'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5L8.25 12l7.5-7.5'
                />
              </svg>
            </button>

            {/* Month Slider */}
            <div
              ref={scrollContainerRef}
              className='flex-1 flex items-center gap-6 overflow-x-auto scroll-smooth max-w-md'
              style={{
                scrollBehavior: "smooth",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                paddingLeft: "40%",
                paddingRight: "40%",
              }}
            >
              <style>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {displayMonths.map((month, index) => (
                <div
                  key={`${month.actualIndex}-${month.offsetFromSelected}`}
                  className='flex flex-col items-center shrink-0'
                >
                  <button
                    onClick={() => handleMonthChange(month.actualIndex)}
                    className={`px-3 py-2 rounded font-semibold text-base md:text-lg transition-all duration-300 whitespace-nowrap ${
                      month.offsetFromSelected === 0
                        ? "text-white scale-110"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {month.name.charAt(0).toUpperCase() + month.name.slice(1)}
                  </button>
                  {month.offsetFromSelected === 0 && (
                    <div className='h-1 w-6 bg-(--accent-hover) mt-1 rounded transition-all duration-300'></div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => handleMonthChange((selectedMonth + 1) % 12)}
              className='flex items-center justify-center text-white hover:text-(--accent-hover) transition-colors shrink-0'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5L15.75 12l-7.5 7.5'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
