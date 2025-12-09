"use client";

import { useState, useRef, useEffect, useMemo } from "react";

const BASE_MONTHS = [
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

const LOOP_MULTIPLIER = 25;
const MONTH_COUNT = BASE_MONTHS.length;
const MIDDLE_LOOP_OFFSET = MONTH_COUNT * Math.floor(LOOP_MULTIPLIER / 2);

export default function Hero() {
  const initialMonthIndex = 11;
  const initialVideoSrc = `https://calendar.myswitzerland.com/20190321/month/${BASE_MONTHS[initialMonthIndex].num}_${BASE_MONTHS[initialMonthIndex].name}_1920x1080.mp4`;
  const extendedMonths = useMemo(() => {
    const months = [] as { num: string; name: string; baseIndex: number }[];
    for (let loop = 0; loop < LOOP_MULTIPLIER; loop++) {
      BASE_MONTHS.forEach((month, baseIndex) => {
        months.push({ ...month, baseIndex });
      });
    }
    return months;
  }, []);

  const initialIndex = MIDDLE_LOOP_OFFSET + initialMonthIndex;
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<number | null>(null);
  const initialScrollSetRef = useRef(false);
  const [sliderReady, setSliderReady] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const activeVideoRef = useRef(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [videoSources, setVideoSources] = useState<[string, string]>([
    initialVideoSrc,
    initialVideoSrc,
  ]);
  const [pendingVideoIndex, setPendingVideoIndex] = useState<number | null>(
    null
  );

  const currentMonthIndex =
    ((selectedIndex % MONTH_COUNT) + MONTH_COUNT) % MONTH_COUNT;

  const findClosestIndex = (monthIndex: number) => {
    let closest = selectedIndex;
    let minDistance = Number.POSITIVE_INFINITY;

    extendedMonths.forEach((month, index) => {
      if (month.baseIndex !== monthIndex) return;
      const distance = Math.abs(index - selectedIndex);
      if (distance < minDistance) {
        minDistance = distance;
        closest = index;
      }
    });

    return closest;
  };

  const handleMonthChange = (monthIndex: number) => {
    const targetIndex = findClosestIndex(monthIndex);
    if (targetIndex === selectedIndex) return;
    setSelectedIndex(targetIndex);
  };

  const handleOffsetChange = (direction: number) => {
    const nextIndex = selectedIndex + direction;
    if (nextIndex < 0 || nextIndex >= extendedMonths.length) return;
    setSelectedIndex(nextIndex);
  };

  // Scroll to center the selected month with smooth animation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const selectedButton = container.querySelector<HTMLButtonElement>(
      `button[data-index="${selectedIndex}"]`
    );
    if (!selectedButton) return;

    const containerWidth = container.clientWidth;
    const buttonOffsetLeft = selectedButton.offsetLeft;
    const buttonWidth = selectedButton.offsetWidth;

    // Calculate scroll position to center the button
    const targetScrollPosition =
      buttonOffsetLeft - containerWidth / 2 + buttonWidth / 2;

    const startScrollLeft = container.scrollLeft;
    const distance = targetScrollPosition - startScrollLeft;
    if (!initialScrollSetRef.current) {
      container.scrollLeft = targetScrollPosition;
      initialScrollSetRef.current = true;
      setSliderReady(true);
      return;
    }
    if (Math.abs(distance) < 1) {
      container.scrollLeft = targetScrollPosition;
      return;
    }

    const duration = 1800;
    let startTime: number | null = null;

    if (scrollAnimationRef.current) {
      cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
    }

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;

      container.scrollLeft = startScrollLeft + distance * easeProgress;

      if (progress < 1) {
        scrollAnimationRef.current = requestAnimationFrame(animateScroll);
      } else {
        scrollAnimationRef.current = null;
        if (!sliderReady) setSliderReady(true);
      }
    };

    scrollAnimationRef.current = requestAnimationFrame(animateScroll);
  }, [selectedIndex, sliderReady]);

  useEffect(() => {
    const nextVideoSrc = `https://calendar.myswitzerland.com/20190321/month/${BASE_MONTHS[currentMonthIndex].num}_${BASE_MONTHS[currentMonthIndex].name}_1920x1080.mp4`;
    const inactiveIndex = (activeVideoRef.current + 1) % 2;

    setPendingVideoIndex(inactiveIndex);
    setVideoSources((prev) => {
      const updated = [...prev] as [string, string];
      updated[inactiveIndex] = nextVideoSrc;
      return updated;
    });
  }, [currentMonthIndex]);

  useEffect(() => {
    if (pendingVideoIndex === null) return;
    const videoEl = videoRefs.current[pendingVideoIndex];
    if (!videoEl) return;

    const handleCanPlay = () => {
      videoEl.play().catch(() => {});
      setActiveVideoIndex(pendingVideoIndex);
      activeVideoRef.current = pendingVideoIndex;
      setPendingVideoIndex(null);
    };

    videoEl.addEventListener("canplay", handleCanPlay);
    videoEl.load();

    return () => {
      videoEl.removeEventListener("canplay", handleCanPlay);
    };
  }, [pendingVideoIndex]);

  return (
    <div className='relative h-screen w-full overflow-hidden'>
      {[0, 1].map((index) => (
        <video
          key={`hero-video-${index}`}
          ref={(el) => {
            videoRefs.current[index] = el;
          }}
          src={videoSources[index]}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute top-0 left-0 min-h-full min-w-full object-cover z-0 transition-opacity duration-700 ${
            activeVideoIndex === index ? "opacity-100" : "opacity-0"
          }`}
        >
          Your browser does not support the video tag.
        </video>
      ))}

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
              onClick={() => handleOffsetChange(-1)}
              className='flex items-center justify-center text-white transition-colors shrink-0 hover:opacity-80'
              style={{ color: "currentColor" }}
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
              className={`flex-1 flex items-center gap-6 overflow-x-auto max-w-md transition-opacity duration-300 ${
                sliderReady ? "opacity-100" : "opacity-0"
              }`}
              style={{
                scrollBehavior: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                paddingLeft: "30%",
                paddingRight: "0%",
                pointerEvents: sliderReady ? "auto" : "none",
              }}
            >
              <style>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {extendedMonths.map((month, index) => {
                const baseIndex = month.baseIndex;
                const isActive = selectedIndex === index;
                return (
                  <div
                    key={`${month.name}-${index}`}
                    className='flex flex-col items-center shrink-0'
                  >
                    <button
                      data-index={index}
                      onClick={() => handleMonthChange(baseIndex)}
                      className={`px-3 py-2 rounded font-semibold text-lg md:text-2xl transition-all duration-500 whitespace-nowrap ${
                        isActive
                          ? "text-white scale-110"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {month.name.charAt(0).toUpperCase() + month.name.slice(1)}
                    </button>
                    {isActive && (
                      <div
                        className='h-1 w-6 mt-1 rounded transition-all duration-300'
                        style={{ backgroundColor: "var(--accent-hover)" }}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => handleOffsetChange(1)}
              className='flex items-center justify-center text-white transition-colors shrink-0 hover:opacity-80'
              style={{ color: "currentColor" }}
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
