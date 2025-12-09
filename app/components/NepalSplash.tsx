"use client";

import { useEffect, useState } from "react";

export default function NepalSplash({
  onAnimationComplete,
}: {
  onAnimationComplete: () => void;
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Total duration: 2.5s hold at high opacity + 1s enlarge + 1s fade out = 4.5s
    const duration = 4500;
    const timer = setTimeout(() => {
      setIsVisible(false);
      onAnimationComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <div
        className='w-full h-full flex items-center justify-center overflow-hidden'
        style={{
          animation:
            "nepalSplash 4.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
        }}
      >
        <img
          src='/nepal_text.svg'
          alt='Nepal'
          className='w-full h-full object-cover'
          style={{
            mixBlendMode: "multiply",
          }}
        />
      </div>

      <style>{`
        @keyframes nepalSplash {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          60% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
