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
}> = ({ data, isMinimal = false, onOpen }) => {
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
            : "bg-black/40 backdrop-blur-md p-4 md:p-8 border border-white/10"
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
            <div className='relative z-10 flex flex-col items-center justify-center h-full p-8 gap-6'>
              {/* Icon with animated background */}
              <div className='relative'>
                <div
                  className={`absolute inset-0 bg-${colorName} blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full`}
                />
                <div
                  className={`text-5xl md:text-6xl ${data.color} p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}
                >
                  {data.icon}
                </div>
              </div>

              <div className='text-center space-y-2'>
                <h3 className='text-2xl font-bold text-white group-hover:text-white transition-colors'>
                  {data.title}
                </h3>
                <p className='text-sm text-gray-400 font-medium max-w-[200px] mx-auto leading-relaxed group-hover:text-gray-200 transition-colors'>
                  {data.summary}
                </p>
              </div>

              {/* Action Indicator */}
              <div
                className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider ${data.color} opacity-60 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300`}
              >
                <span>Explore</span>
                <ArrowRight className='w-4 h-4' />
              </div>
            </div>

            {/* Decorative Corner Accent */}
            <div
              className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-${colorName}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-3xl`}
            />
          </>
        ) : (
          // Full Card View
          <>
            {/* Header */}
            <div className='flex items-center gap-3 md:gap-5 mb-6 md:mb-8'>
              <div
                className={`text-4xl md:text-5xl ${data.color} p-2 md:p-3 bg-white/5 rounded-xl`}
              >
                {data.icon}
              </div>
              <h3 className='text-xl md:text-3xl font-bold text-white group-hover:text-red-300 transition-colors break-words'>
                {data.title}
              </h3>
            </div>

            {/* Highlight Box */}
            {data.highlight && (
              <div className='bg-linear-to-r from-red-900/40 to-transparent border-l-4 border-red-500 p-3 md:p-5 mb-6 md:mb-8 rounded-r-lg'>
                <p className='text-red-200 text-xs md:text-sm font-bold uppercase tracking-widest mb-1'>
                  {data.highlight.label}
                </p>
                <p className='text-white font-bold text-lg md:text-2xl break-words'>
                  {data.highlight.value}
                </p>
              </div>
            )}

            {/* Items */}
            <ul className='space-y-5'>
              {data.items.map((item, idx) => (
                <li key={idx} className='flex gap-4 items-start min-w-0'>
                  <span className='text-red-500 font-bold mt-1 shrink-0 text-xl'>
                    •
                  </span>
                  <div className='flex-1 min-w-0'>
                    {item.label && (
                      <p className='text-white font-bold text-sm md:text-lg mb-1 break-words'>
                        {item.label}
                      </p>
                    )}
                    <p
                      className={`${
                        item.highlight
                          ? "text-red-300 font-semibold"
                          : "text-gray-200"
                      } text-sm md:text-base leading-relaxed break-words`}
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
      title: "Currency & Payments",
      icon: <Wallet className='w-12 h-12' />,
      color: "text-yellow-400",
      summary: "NPR, ATMs & Exchange Rates",
      highlight: {
        label: "Exchange Rate",
        value: "$1 USD ≈ 130-135 NPR",
      },
      items: [
        {
          label: "Currency",
          text: "Nepalese Rupee (NPR) is the official currency",
        },
        { text: "ATMs widely available in Kathmandu and Pokhara" },
        { text: "Credit cards accepted in major hotels and restaurants" },
        { text: "Carry cash for trekking and remote areas" },
      ],
    },
    {
      title: "SIM & Network",
      icon: <Smartphone className='w-12 h-12' />,
      color: "text-blue-400",
      summary: "Ncell, NTC & Connectivity",
      items: [
        {
          label: "Providers",
          text: "Ncell and Nepal Telecom (NTC) are the major options",
        },
        { text: "Available at the airport (bring passport & photo)" },
        { text: "4G coverage is good in cities; variable in remote areas" },
        { text: "Free Wi-Fi in most hotels, cafes, and restaurants" },
      ],
    },
    {
      title: "Travel Options",
      icon: <Bus className='w-12 h-12' />,
      color: "text-green-400",
      summary: "Bus, Taxi & Domestic Flights",
      items: [
        {
          label: "Public Bus",
          text: "Economical option but can be crowded during peak hours",
        },
        {
          label: "Tourist Bus",
          text: "More comfortable for inter-city travel (Kathmandu ↔ Pokhara)",
        },
        {
          label: "Taxis",
          text: "Negotiate fares or use Pathao/InDrive apps for safety",
        },
        {
          label: "Flights",
          text: "Fastest way to reach remote areas like Lukla and Jomsom",
        },
      ],
    },
    {
      title: "Visa & Entry",
      icon: <FileCheck className='w-12 h-12' />,
      color: "text-purple-400",
      summary: "On-Arrival Visa & Fees",
      items: [
        {
          label: "On-Arrival Visa",
          text: "Available at Tribhuvan International Airport",
        },
        { label: "15 Days", text: "$30 USD" },
        { label: "30 Days", text: "$50 USD" },
        { label: "90 Days", text: "$125 USD" },
        {
          text: "Bring passport (6+ months validity) and ID photos",
        },
        { text: "Online pre-registration available (15 days prior)" },
      ],
    },
    {
      title: "Local Phrases",
      icon: <Languages className='w-12 h-12' />,
      color: "text-pink-400",
      summary: "Namaste & Basic Greetings",
      items: [
        {
          label: "Namaste",
          text: "Hello / Greetings / Goodbye (most common)",
        },
        {
          label: "Dhanyabad",
          text: "Thank you - locals appreciate the effort",
        },
        {
          label: "Mitho Cha",
          text: "It's delicious - perfect for praising meals",
        },
        { label: "Jam Jam", text: "Let's go / Hurry up" },
        {
          label: "Dai / Didi",
          text: "Brother / Sister - respectful address for anyone",
        },
      ],
    },
    {
      title: "Safety & Etiquette",
      icon: <Shield className='w-12 h-12' />,
      color: "text-red-400",
      summary: "Emergency Contacts & Customs",
      items: [
        { label: "Emergency", text: "Police: 100 | Ambulance: 102" },
        { label: "Tourist Police", text: "1144 (dedicated hotline)" },
        { text: "Dress modestly, especially at religious temples" },
        { text: "Always ask permission before photographing locals" },
        {
          text: "Remove shoes before entering temples, monasteries, or homes",
        },
      ],
    },
  ];

  return (
    <>
      <section className='py-24 bg-grid'>
        <div className='max-w-7xl mx-auto px-8'>
          {/* Header */}
          <div className='text-center mb-16'>
            <h2 className='text-5xl md:text-6xl font-bold text-white mb-6'>
              Essential Information
            </h2>
            <p className='text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed'>
              Everything you need to know before traveling to Nepal. From visas
              and currency to local customs and safety tips.
            </p>
          </div>
          {/* Categories Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 hover:cursor-pointer'>
            {categories.map((category, idx) => (
              <InfoCategory
                key={idx}
                data={category}
                isMinimal={true}
                onOpen={() => setSelectedCategory(category)}
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
