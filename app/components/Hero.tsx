"use client";

import { useState, useRef, useEffect, useMemo, useLayoutEffect } from "react";
import { useTranslation } from "@/lib/useTranslation";

export default function Hero() {
  const t = useTranslation();

  const BASE_MONTHS = useMemo(
    () => [
      {
        num: "01",
        name: "jan",
        displayName: t.hero.themes?.himalayas || "Himalayas",
      },
      {
        num: "02",
        name: "feb",
        displayName: t.hero.themes?.heritage || "Heritage",
      },
      {
        num: "03",
        name: "mar",
        displayName: t.hero.themes?.spirituality || "Spirituality",
      },
      {
        num: "04",
        name: "apr",
        displayName: t.hero.themes?.adventure || "Adventure",
      },
      {
        num: "05",
        name: "may",
        displayName: t.hero.themes?.wildlife || "Wildlife",
      },
      {
        num: "06",
        name: "jun",
        displayName: t.hero.themes?.trekking || "Trekking",
      },
      {
        num: "07",
        name: "jul",
        displayName: t.hero.themes?.culture || "Culture",
      },
      {
        num: "08",
        name: "aug",
        displayName: t.hero.themes?.festivals || "Festivals",
      },
      {
        num: "09",
        name: "sep",
        displayName: t.hero.themes?.cuisine || "Cuisine",
      },
      {
        num: "10",
        name: "oct",
        displayName: t.hero.themes?.hospitality || "Hospitality",
      },
      {
        num: "11",
        name: "nov",
        displayName: t.hero.themes?.diversity || "Diversity",
      },
      {
        num: "12",
        name: "dec",
        displayName: t.hero.themes?.serenity || "Serenity",
      },
    ],
    [t]
  );

  const LOOP_MULTIPLIER = 25;
  const MONTH_COUNT = BASE_MONTHS.length;
  const MIDDLE_LOOP_OFFSET = MONTH_COUNT * Math.floor(LOOP_MULTIPLIER / 2);

  const initialMonthIndex = 11;
  const initialVideoSrc = `https://calendar.myswitzerland.com/20190321/month/${BASE_MONTHS[initialMonthIndex].num}_${BASE_MONTHS[initialMonthIndex].name}_1920x1080.mp4`;
  const extendedMonths = useMemo(() => {
    const months = [] as {
      num: string;
      name: string;
      displayName: string;
      baseIndex: number;
    }[];
    for (let loop = 0; loop < LOOP_MULTIPLIER; loop++) {
      BASE_MONTHS.forEach((month, baseIndex) => {
        months.push({ ...month, baseIndex });
      });
    }
    return months;
  }, [BASE_MONTHS]);

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
  const prevSelectedIndexRef = useRef(initialIndex);

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
  useLayoutEffect(() => {
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

    const isIndexChange = prevSelectedIndexRef.current !== selectedIndex;
    prevSelectedIndexRef.current = selectedIndex;

    if (!initialScrollSetRef.current || !isIndexChange) {
      container.scrollLeft = targetScrollPosition;
      if (!initialScrollSetRef.current) {
        initialScrollSetRef.current = true;
        setSliderReady(true);
      }
      return;
    }

    if (Math.abs(distance) < 1) {
      container.scrollLeft = targetScrollPosition;
      return;
    }

    const duration = 2400;
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
  }, [selectedIndex, sliderReady, extendedMonths]);

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

      {/* Month Selector Slider */}
      <div className='absolute bottom-12 md:bottom-0 left-0 z-30 py-4 md:py-8 px-4 md:px-8 w-full md:w-1/2'>
        <div className='w-full'>
          <div className='flex items-center justify-center gap-2 md:gap-4'>
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
                className='w-4 h-4 md:w-6 md:h-6'
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
              className={`flex-1 flex items-center gap-2 md:gap-6 overflow-x-auto max-w-xs md:max-w-md transition-opacity duration-300 ${
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
                      className={`px-2 md:px-3 py-1 md:py-2 rounded font-semibold text-xs md:text-lg lg:text-2xl transition-all duration-500 whitespace-nowrap ${
                        isActive
                          ? "text-white scale-110"
                          : "text-white/60 hover:text-white"
                      }`}
                    >
                      {month.displayName}
                    </button>
                    {isActive && (
                      <div
                        className='h-1 w-4 md:w-6 mt-1 rounded transition-all duration-300'
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
                className='w-4 h-4 md:w-6 md:h-6'
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
