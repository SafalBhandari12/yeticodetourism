"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { useState, useRef, useEffect } from "react";

export default function LanguageSelector() {
  const { language, setLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Ensure component only renders on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  if (!isMounted) {
    return (
      <div className='hidden md:flex items-center gap-2 text-white'>
        <span className='text-sm font-medium'>EN</span>
      </div>
    );
  }

  const currentLanguage = availableLanguages.find(
    (lang) => lang.code === language
  );

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='hidden md:flex items-center gap-2 text-white hover:text-[#d4344f] active:text-[#d4344f] transition-colors duration-300 group cursor-pointer'
        aria-label='Change language'
      >
        <span className='text-lg'>{currentLanguage?.flag}</span>
        <span className='text-sm font-medium'>{language.toUpperCase()}</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
          />
        </svg>
      </button>

      {/* Desktop Dropdown */}
      {isOpen && (
        <div className='absolute right-0 mt-2 w-56 bg-[#180109] border border-[#d4344f]/30 rounded-lg shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200'>
          <div className='p-2'>
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                  language === lang.code
                    ? "bg-[#d4344f]/20 text-[#d4344f] font-semibold"
                    : "text-gray-300 hover:text-[#d4344f] hover:bg-[#d4344f]/10"
                }`}
              >
                <span className='text-xl'>{lang.flag}</span>
                <div>
                  <div className='font-medium'>{lang.name}</div>
                  <div className='text-xs opacity-75'>{lang.nativeName}</div>
                </div>
                {language === lang.code && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-5 h-5 ml-auto'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Language Selector */}
      <div className='md:hidden flex items-center gap-2 text-white'>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className='bg-[#180109] text-white border border-[#d4344f]/30 rounded px-3 py-2 text-sm cursor-pointer hover:border-[#d4344f] transition-colors duration-300'
          aria-label='Select language'
        >
          {availableLanguages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.flag} {lang.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
