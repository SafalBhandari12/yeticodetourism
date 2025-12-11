"use client";

import { useEffect } from "react";
import CloseButton from "./CloseButton";

interface Category {
  name: string;
  items: string[];
}

interface NavDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  categories: Category[];
}

export default function NavDropdown({
  isOpen,
  onClose,
  title,
  categories,
}: NavDropdownProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop - No blur to keep navbar visible */}
      <div
        className='fixed inset-0 bg-black/30 transition-opacity duration-300 z-40'
        onClick={onClose}
        style={{ top: "80px" }}
      />

      {/* Dropdown Card - Full Height */}
      <div className='fixed top-20 left-0 right-0 bottom-0 z-50 animate-in fade-in slide-in-from-top-2 duration-300'>
        <div className='h-full bg-white shadow-none border-t border-gray-100 overflow-y-auto'>
          <div className='max-w-7xl mx-auto px-12 py-8 h-full flex flex-col'>
            {/* Header */}
            <div className='flex items-center justify-between mb-8 pb-6 border-b border-gray-100'>
              <h2 className='text-4xl font-bold text-gray-900 tracking-tight'>
                {title}
              </h2>
              <CloseButton onClick={onClose} />
            </div>

            {/* Content Grid - All Categories */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 flex-1'>
              {categories.map((category) => (
                <div
                  key={category.name}
                  className='animate-in fade-in duration-300'
                >
                  {/* Category Title */}
                  <h3 className='text-gray-900 text-2xl font-bold mb-6 leading-tight'>
                    {category.name}
                  </h3>

                  {/* Category Items List */}
                  <ul className='space-y-4'>
                    {category.items.map((item) => {
                      // Skip "Read all" items as they're handled separately
                      if (item === "Read all") return null;

                      return (
                        <li
                          key={item}
                          className='flex items-start group cursor-pointer'
                        >
                          <span className='text-[#d4344f] mr-3 mt-0.5 text-lg font-light group-hover:translate-x-1 transition-transform duration-300'>
                            ›
                          </span>
                          <a
                            href='#'
                            className='text-gray-600 text-base group-hover:text-[#d4344f] transition-colors duration-300 leading-relaxed'
                          >
                            {item}
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Read All Link */}
                  <button className='text-[#d4344f] font-semibold text-base mt-8 flex items-center group hover:text-[#b92b43] transition-colors duration-300'>
                    <span>Read all</span>
                    <span className='ml-2 group-hover:translate-x-1 transition-transform duration-300'>
                      →
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
