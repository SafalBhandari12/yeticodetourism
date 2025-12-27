"use client";

import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function NepalSplash({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const duration = 2500;
    const timer = setTimeout(() => {
      setIsVisible(false);
      onAnimationComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center'>
      <div
        className='absolute inset-0 bg-black'
        style={{
          animation: "bgFade 2.5s ease-in-out forwards",
        }}
      />
      <div
        className='relative z-10 flex flex-col items-center justify-center'
        style={{
          animation: "textFade 2.5s ease-in-out forwards",
        }}
      >
        <h1
          className={`${montserrat.className} text-white text-center leading-tight`}
        >
          <span className='block text-3xl md:text-5xl lg:text-6xl font-medium tracking-wider mb-2 opacity-90 uppercase'>
            Welcome to
          </span>
          <span className='block text-6xl md:text-8xl lg:text-9xl font-black tracking-widest text-white uppercase'>
            Nepal
          </span>
        </h1>
      </div>

      <style>{`
        @keyframes bgFade {
          0% {
            opacity: 0.6;
          }
          70% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
          }
        }
        @keyframes textFade {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          15% {
            opacity: 1;
            transform: scale(1);
          }
          70% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}
