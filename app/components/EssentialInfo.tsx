"use client";

import React, { useState, useEffect } from "react";
import {
  Wallet,
  Smartphone,
  Bus,
  FileCheck,
  Languages,
  Shield,
  X,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

interface InfoCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  summary: string;
  items: {
    label?: string;
    text: string;
    highlight?: boolean;
  }[];
  highlight?: {
    label: string;
    value: string;
  };
}

const InfoCategory: React.FC<{
  data: InfoCategory;
  isMinimal?: boolean;
  onOpen?: () => void;
  exploreText: string;
}> = ({ data, isMinimal = false, onOpen, exploreText }) => {
  // Extract the color class for border/glow effects (e.g., "text-yellow-400" -> "yellow-400")
  const colorName = data.color.replace("text-", "");

  return (
    <div className='group h-full'>
      <div
        onClick={isMinimal ? onOpen : undefined}
        className={`
        relative overflow-hidden rounded-3xl transition-all duration-500 h-full
        ${
          isMinimal
            ? "cursor-pointer bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20"
            : "bg-[#3f0d12] p-8 border border-white/5"
        }
      `}
        style={
          isMinimal
            ? {
                boxShadow: "0 0 0 0 rgba(0,0,0,0)",
              }
            : undefined
        }
      >
        {isMinimal ? (
          // Minimal Card View - Unique Design
          <>
            {/* Hover Glow Effect */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-${colorName}`}
            />

            {/* Content Container */}
            <div className='relative z-10 flex flex-col items-center justify-center h-full px-2 py-4 gap-3'>
              {/* Icon with animated background */}
              <div className='relative'>
                <div
                  className={`absolute inset-0 bg-${colorName} blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full`}
                />
                <div
                  className={`text-4xl md:text-5xl ${data.color} p-2 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}
                >
                  {data.icon}
                </div>
              </div>

              <div className='text-center space-y-2'>
                <h3 className='text-lg md:text-2xl font-bold text-white group-hover:text-white transition-colors'>
                  {data.title}
                </h3>
                <p className='text-xs md:text-sm text-gray-400 font-medium max-w-[200px] mx-auto leading-relaxed group-hover:text-gray-200 transition-colors'>
                  {data.summary}
                </p>
              </div>

              {/* Action Indicator */}
              <div
                className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${data.color} opacity-60 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300`}
              >
                <span>{exploreText}</span>
                <ArrowRight className='w-4 h-4' />
              </div>
            </div>

            {/* Decorative Corner Accent */}
            <div
              className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-${colorName}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl`}
            />
          </>
        ) : (
          // Full Card View (Desktop)
          <>
            {/* Header */}
            <div className='flex items-start gap-4 mb-8'>
              <div
                className={`text-4xl ${data.color} p-3 bg-white/5 rounded-2xl border border-white/10`}
              >
                {data.icon}
              </div>
              <h3 className='text-3xl font-bold text-white leading-tight'>
                {data.title.split(" ").map((word, i) => (
                  <span key={i} className='block'>
                    {word}
                  </span>
                ))}
              </h3>
            </div>

            {/* Highlight Box */}
            {data.highlight && (
              <div className='bg-gradient-to-r from-red-900/60 to-transparent border-l-4 border-red-500 p-4 mb-8 rounded-r-lg'>
                <p className='text-red-200 text-xs font-bold uppercase tracking-widest mb-1'>
                  {data.highlight.label}
                </p>
                <p className='text-white font-bold text-2xl'>
                  {data.highlight.value}
                </p>
              </div>
            )}

            {/* Items */}
            <ul className='space-y-6'>
              {data.items.map((item, idx) => (
                <li key={idx} className='flex gap-3 items-start'>
                  <span className='text-red-500 font-bold mt-1.5 shrink-0 text-xs'>
                    ●
                  </span>
                  <div className='flex-1'>
                    {item.label && (
                      <p className='text-white font-bold text-lg mb-1'>
                        {item.label}
                      </p>
                    )}
                    <p
                      className={`${
                        item.highlight
                          ? "text-red-300 font-semibold"
                          : "text-gray-300"
                      } text-base leading-relaxed`}
                    >
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

// Modal Component for Details
const DetailModal: React.FC<{
  data: InfoCategory | null;
  isOpen: boolean;
  onClose: () => void;
}> = ({ data, isOpen, onClose }) => {
  if (!isOpen || !data) return null;

  return (
    <div
      className='fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4'
      onClick={onClose}
    >
      <div
        className='bg-gradient-to-br from-black/90 to-black/95 backdrop-blur-xl rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-red-900/30'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-6 right-6 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 z-10'
        >
          <X className='w-6 h-6' />
        </button>

        {/* Header with gradient background */}
        <div className='bg-gradient-to-r from-red-900/20 to-transparent p-8 md:p-10 border-b border-white/10'>
          <div className='flex items-center gap-6'>
            <div
              className={`text-6xl ${data.color} p-4 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl`}
            >
              {data.icon}
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-white'>
              {data.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className='p-8 md:p-10'>
          {/* Highlight Box */}
          {data.highlight && (
            <div className='bg-gradient-to-r from-red-900/30 to-red-900/10 border-l-4 border-red-500 p-6 mb-10 rounded-r-xl backdrop-blur-sm'>
              <p className='text-red-300 text-xs font-bold uppercase tracking-widest mb-2'>
                {data.highlight.label}
              </p>
              <p className='text-white font-bold text-2xl md:text-3xl'>
                {data.highlight.value}
              </p>
            </div>
          )}

          {/* Items */}
          <ul className='space-y-7'>
            {data.items.map((item, idx) => (
              <li key={idx} className='flex gap-5 items-start group/item'>
                <span className='text-red-500 font-bold mt-1 shrink-0 text-2xl group-hover/item:text-red-400 transition-colors'>
                  •
                </span>
                <div className='flex-1'>
                  {item.label && (
                    <p className='text-white font-bold text-lg mb-2 group-hover/item:text-red-300 transition-colors'>
                      {item.label}
                    </p>
                  )}
                  <p
                    className={`${
                      item.highlight
                        ? "text-red-300 font-semibold"
                        : "text-gray-300"
                    } text-base leading-relaxed`}
                  >
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function EssentialInfo() {
  const [selectedCategory, setSelectedCategory] = useState<InfoCategory | null>(
    null
  );
  const t = useTranslation();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCategory]);

  const categories: InfoCategory[] = [
    {
      title: t.essentialInfo.currency.title,
      icon: <Wallet className='w-12 h-12' />,
      color: "text-yellow-400",
      summary: t.essentialInfo.currency.summary,
      highlight: {
        label: t.essentialInfo.currency.highlightLabel,
        value: t.essentialInfo.currency.highlightValue,
      },
      items: t.essentialInfo.currency.items,
    },
    {
      title: t.essentialInfo.sim.title,
      icon: <Smartphone className='w-12 h-12' />,
      color: "text-blue-400",
      summary: t.essentialInfo.sim.summary,
      items: t.essentialInfo.sim.items,
    },
    {
      title: t.essentialInfo.travel.title,
      icon: <Bus className='w-12 h-12' />,
      color: "text-green-400",
      summary: t.essentialInfo.travel.summary,
      items: t.essentialInfo.travel.items,
    },
    {
      title: t.essentialInfo.visa.title,
      icon: <FileCheck className='w-12 h-12' />,
      color: "text-purple-400",
      summary: t.essentialInfo.visa.summary,
      items: t.essentialInfo.visa.items,
    },
    {
      title: t.essentialInfo.phrases.title,
      icon: <Languages className='w-12 h-12' />,
      color: "text-pink-400",
      summary: t.essentialInfo.phrases.summary,
      items: t.essentialInfo.phrases.items,
    },
    {
      title: t.essentialInfo.safety.title,
      icon: <Shield className='w-12 h-12' />,
      color: "text-red-400",
      summary: t.essentialInfo.safety.summary,
      items: t.essentialInfo.safety.items,
    },
  ];

  return (
    <>
      <section className='pt-16 md:pt-20 lg:pt-28 pb-24 md:pb-32 lg:pb-40 bg-grid'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
          {/* Header */}
          <div className='text-center mb-12 md:mb-14 lg:mb-16'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-5'>
              {t.essentialInfo.title}
            </h2>
            <p className='text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed'>
              {t.essentialInfo.subtitle}
            </p>
          </div>
          {/* Mobile Categories Grid */}
          <div className='grid grid-cols-2 md:hidden gap-3 hover:cursor-pointer'>
            {categories.map((category, idx) => (
              <InfoCategory
                key={idx}
                data={category}
                isMinimal={true}
                onOpen={() => setSelectedCategory(category)}
                exploreText={t.essentialInfo.explore}
              />
            ))}
          </div>

          {/* Desktop Categories Grid */}
          <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
            {categories.map((category, idx) => (
              <InfoCategory
                key={idx}
                data={category}
                isMinimal={false}
                exploreText={t.essentialInfo.explore}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Details */}
      <DetailModal
        data={selectedCategory}
        isOpen={selectedCategory !== null}
        onClose={() => setSelectedCategory(null)}
      />
    </>
  );
}
