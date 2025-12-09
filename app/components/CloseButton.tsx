"use client";

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}

export default function CloseButton({
  onClick,
  className = "",
  ariaLabel = "Close menu",
}: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative group transition-all duration-300 ${className} hover:cursor-pointer active:cursor-pointer`}
      aria-label={ariaLabel}
    >
      {/* X Icon with smooth animation */}
      <svg
        className='w-8 h-8 text-white/60 group-hover:text-white transition-all duration-300 group-hover:scale-110'
        fill='none'
        stroke='currentColor'
        viewBox='0 0 24 24'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M6 18L18 6M6 6l12 12'
        />
      </svg>
    </button>
  );
}
