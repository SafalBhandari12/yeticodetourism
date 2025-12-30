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
  Banknote,
  CreditCard,
  Landmark,
  Signal,
  Wifi,
  Plane,
  Car,
  Calendar,
  MessageCircle,
  ThumbsUp,
  Utensils,
  Footprints,
  Users,
  Phone,
  Camera,
  Shirt,
  Globe
} from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";
import Link from "next/link";

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

const colorMap: Record<string, {
  bg: string;
  border: string;
  text: string;
  gradient: string;
  glow: string;
}> = {
  "text-yellow-400": { 
    bg: "bg-yellow-500", 
    border: "border-yellow-500", 
    text: "text-yellow-400", 
    gradient: "from-yellow-500",
    glow: "shadow-yellow-500/50"
  },
  "text-blue-400": { 
    bg: "bg-blue-500", 
    border: "border-blue-500", 
    text: "text-blue-400", 
    gradient: "from-blue-500",
    glow: "shadow-blue-500/50"
  },
  "text-green-400": { 
    bg: "bg-green-500", 
    border: "border-green-500", 
    text: "text-green-400", 
    gradient: "from-green-500",
    glow: "shadow-green-500/50"
  },
  "text-purple-400": { 
    bg: "bg-purple-500", 
    border: "border-purple-500", 
    text: "text-purple-400", 
    gradient: "from-purple-500",
    glow: "shadow-purple-500/50"
  },
  "text-pink-400": { 
    bg: "bg-pink-500", 
    border: "border-pink-500", 
    text: "text-pink-400", 
    gradient: "from-pink-500",
    glow: "shadow-pink-500/50"
  },
  "text-red-400": { 
    bg: "bg-red-500", 
    border: "border-red-500", 
    text: "text-red-400", 
    gradient: "from-red-500",
    glow: "shadow-red-500/50"
  },
};

const BackgroundPattern = ({ type, color }: { type: string; color: string }) => {
  // We can use the text color class directly for SVG fill/stroke as it uses currentColor
  const colorClass = color; 
  
  switch (type) {
    case "currency":
      return (
        <svg className={`absolute -right-4 -bottom-4 w-48 h-48 opacity-5 ${colorClass} pointer-events-none`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10"/>
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="2"/>
          <path d="M100 40V160M60 80H140M60 120H140" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      );
    case "sim":
      return (
        <svg className={`absolute -right-4 -bottom-4 w-48 h-48 opacity-5 ${colorClass} pointer-events-none`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 160C40 160 60 100 100 100C140 100 160 160 160 160" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          <path d="M20 140C20 140 50 60 100 60C150 60 180 140 180 140" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          <path d="M60 180H140" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      );
    case "travel":
      return (
        <svg className={`absolute -right-4 -bottom-4 w-48 h-48 opacity-5 ${colorClass} pointer-events-none`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 180L180 20" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10"/>
          <path d="M180 20L140 20L180 60" stroke="currentColor" strokeWidth="2"/>
          <circle cx="40" cy="160" r="10" fill="currentColor" className="opacity-50"/>
          <circle cx="160" cy="40" r="10" fill="currentColor" className="opacity-50"/>
        </svg>
      );
    case "visa":
      return (
        <svg className={`absolute -right-4 -bottom-4 w-48 h-48 opacity-5 ${colorClass} pointer-events-none`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="40" y="40" width="120" height="120" rx="10" stroke="currentColor" strokeWidth="4"/>
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2"/>
          <path d="M70 130L130 70" stroke="currentColor" strokeWidth="2"/>
        </svg>
      );
    case "phrases":
      return (
        <svg className={`absolute -right-4 -bottom-4 w-48 h-48 opacity-5 ${colorClass} pointer-events-none`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 140V60C40 48.9543 48.9543 40 60 40H140C151.046 40 160 48.9543 160 60V120C160 131.046 151.046 140 140 140H80L40 180V140Z" stroke="currentColor" strokeWidth="4"/>
          <circle cx="80" cy="90" r="5" fill="currentColor"/>
          <circle cx="100" cy="90" r="5" fill="currentColor"/>
          <circle cx="120" cy="90" r="5" fill="currentColor"/>
        </svg>
      );
    case "safety":
      return (
        <svg className={`absolute -right-4 -bottom-4 w-48 h-48 opacity-5 ${colorClass} pointer-events-none`} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20L40 50V110C40 145 65 175 100 190C135 175 160 145 160 110V50L100 20Z" stroke="currentColor" strokeWidth="4"/>
          <path d="M80 100L120 100M100 80L100 120" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      );
    default:
      return null;
  }
};

const VisualContent = ({ type, data, colors }: { type: string; data: InfoCategory; colors: any }) => {
  switch (type) {
    case "currency":
      return (
        <div className="space-y-6">
          {/* Exchange Rate Display */}
          {data.highlight && (
            <div className={`bg-white/5 rounded-xl p-4 border border-white/10 flex items-center justify-between`}>
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest ${colors.text} mb-1`}>Exchange Rate</p>
                <p className="text-xl font-bold text-white">$1 USD ≈ 130 NPR</p>
              </div>
              <Banknote className={`w-8 h-8 ${colors.text} opacity-80`} />
            </div>
          )}
          
          {/* Payment Methods Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors">
              <Landmark className="w-6 h-6 text-white" />
              <span className="text-xs text-gray-300 font-medium">ATMs Available</span>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors">
              <CreditCard className="w-6 h-6 text-white" />
              <span className="text-xs text-gray-300 font-medium">Cards Accepted</span>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors">
              <Wallet className="w-6 h-6 text-white" />
              <span className="text-xs text-gray-300 font-medium">Cash for Trek</span>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/5 flex flex-col items-center text-center gap-2 hover:bg-white/10 transition-colors">
              <Banknote className="w-6 h-6 text-white" />
              <span className="text-xs text-gray-300 font-medium">NPR Currency</span>
            </div>
          </div>
        </div>
      );

    case "sim":
      return (
        <div className="space-y-5">
          {/* Providers */}
          <div className="flex gap-3">
            <div className={`flex-1 bg-${colors.text.replace('text-', '')}-500/20 border border-${colors.text.replace('text-', '')}-500/30 rounded-lg p-3 text-center`}>
              <span className={`font-bold ${colors.text}`}>Ncell</span>
            </div>
            <div className={`flex-1 bg-${colors.text.replace('text-', '')}-500/20 border border-${colors.text.replace('text-', '')}-500/30 rounded-lg p-3 text-center`}>
              <span className={`font-bold ${colors.text}`}>NTC</span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col items-center gap-2 p-2">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <Plane className="w-5 h-5 text-white" />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Airport</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-2">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <Signal className="w-5 h-5 text-white" />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">4G LTE</span>
            </div>
            <div className="flex flex-col items-center gap-2 p-2">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400">Free WiFi</span>
            </div>
          </div>
        </div>
      );

    case "travel":
      return (
        <div className="grid grid-cols-2 gap-4 h-full content-center">
          {[
            { icon: Bus, label: "Public Bus", sub: "Economical" },
            { icon: Bus, label: "Tourist Bus", sub: "Comfortable" },
            { icon: Car, label: "Taxi / Apps", sub: "Flexible" },
            { icon: Plane, label: "Flights", sub: "Fastest" },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/5 hover:border-white/20 transition-all group/item">
              <div className="flex items-center gap-3 mb-2">
                <item.icon className={`w-5 h-5 ${colors.text}`} />
                <span className="text-sm font-bold text-white">{item.label}</span>
              </div>
              <p className="text-xs text-gray-400 pl-8">{item.sub}</p>
            </div>
          ))}
        </div>
      );

    case "visa":
      return (
        <div className="space-y-4">
          <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
            <Globe className={`w-5 h-5 ${colors.text}`} />
            <span className="text-sm text-white font-medium">On-Arrival & Online</span>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            {[
              { days: "15", price: "$30" },
              { days: "30", price: "$50" },
              { days: "90", price: "$125" },
            ].map((plan, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-2 text-center border border-white/5 hover:border-white/20 transition-colors">
                <span className="block text-xs text-gray-400 mb-1">{plan.days} Days</span>
                <span className={`block text-lg font-bold ${colors.text}`}>{plan.price}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <FileCheck className="w-4 h-4" />
            <span>Bring Passport & Photos</span>
          </div>
        </div>
      );

    case "phrases":
      return (
        <div className="space-y-3">
          {[
            { nepali: "Namaste", eng: "Hello / Greetings" },
            { nepali: "Dhanyabad", eng: "Thank you" },
            { nepali: "Mitho Cha", eng: "It's delicious" },
          ].map((phrase, i) => (
            <div key={i} className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/5">
              <span className={`font-bold ${colors.text}`}>{phrase.nepali}</span>
              <span className="text-xs text-gray-400">{phrase.eng}</span>
            </div>
          ))}
          <div className="flex gap-2 mt-2">
             <div className="flex-1 bg-white/5 p-2 rounded text-center text-xs text-gray-300">Jam Jam (Let's go)</div>
             <div className="flex-1 bg-white/5 p-2 rounded text-center text-xs text-gray-300">Dai/Didi (Bro/Sis)</div>
          </div>
        </div>
      );

    case "safety":
      return (
        <div className="space-y-5">
          <div className="flex gap-3">
             <div className="flex-1 bg-red-500/20 border border-red-500/30 p-3 rounded-xl flex items-center gap-3">
                <Phone className="w-6 h-6 text-red-400" />
                <div>
                  <p className="text-[10px] text-red-300 uppercase font-bold">Police</p>
                  <p className="text-xl font-bold text-white">100</p>
                </div>
             </div>
             <div className="flex-1 bg-red-500/20 border border-red-500/30 p-3 rounded-xl flex items-center gap-3">
                <Shield className="w-6 h-6 text-red-400" />
                <div>
                  <p className="text-[10px] text-red-300 uppercase font-bold">Tourist</p>
                  <p className="text-xl font-bold text-white">1144</p>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
             <div className="bg-white/5 p-2 rounded-lg flex flex-col items-center text-center gap-2">
                <Shirt className="w-5 h-5 text-gray-300" />
                <span className="text-[10px] text-gray-400">Dress Modestly</span>
             </div>
             <div className="bg-white/5 p-2 rounded-lg flex flex-col items-center text-center gap-2">
                <Camera className="w-5 h-5 text-gray-300" />
                <span className="text-[10px] text-gray-400">Ask First</span>
             </div>
             <div className="bg-white/5 p-2 rounded-lg flex flex-col items-center text-center gap-2">
                <Footprints className="w-5 h-5 text-gray-300" />
                <span className="text-[10px] text-gray-400">No Shoes</span>
             </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};

const InfoCategory: React.FC<{
  data: InfoCategory;
  type: string;
  variant?: 'mobile' | 'desktop' | 'full';
  onOpen?: () => void;
  exploreText: string;
}> = ({ data, type, variant = 'desktop', onOpen, exploreText }) => {
  const colors = colorMap[data.color] || colorMap["text-yellow-400"];
  const colorName = data.color.replace("text-", "");

  return (
    <div className='group h-full'>
      <div
        onClick={variant === 'mobile' ? onOpen : undefined}
        className={`
        relative overflow-hidden rounded-3xl transition-all duration-500 h-full
        ${
          variant === 'mobile'
            ? "cursor-pointer bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1"
            : variant === 'desktop'
            ? "bg-[#1a0507] border border-white/10 shadow-xl hover:border-white/20 transition-colors"
            : "bg-[#3f0d12] p-8 border border-white/5"
        }
      `}
      >
        {variant === 'mobile' ? (
           // Mobile Card View (Restored Original Minimal Design)
           <>
            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-${colorName}-500`} />

            {/* Content Container */}
            <div className='relative z-10 flex flex-col items-center justify-center h-full px-4 py-6 gap-4'>
              {/* Icon with animated background */}
              <div className='relative'>
                <div className={`absolute inset-0 bg-${colorName}-500 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-full`} />
                <div className={`text-4xl ${data.color} p-3 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                  {data.icon}
                </div>
              </div>

              <div className='text-center space-y-2'>
                <h3 className='text-lg font-bold text-white group-hover:text-white transition-colors'>
                  {data.title}
                </h3>
                <p className='text-xs text-gray-400 font-medium max-w-[200px] mx-auto leading-relaxed group-hover:text-gray-200 transition-colors line-clamp-2'>
                  {data.summary}
                </p>
              </div>

              {/* Action Indicator */}
              <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${data.color} opacity-60 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300`}>
                <span>{exploreText}</span>
                <ArrowRight className='w-3 h-3' />
              </div>
            </div>
           </>
        ) : variant === 'desktop' ? (
          // Desktop Creative Card View (Solid Theme)
          <>
            {/* Top Accent Line */}
            <div className={`absolute top-0 left-0 w-full h-1.5 ${colors.bg}`} />

            {/* Background Pattern */}
            <div className="opacity-5">
                <BackgroundPattern type={type} color={data.color} />
            </div>
            
            {/* Content Container */}
            <div className='relative z-10 flex flex-col h-full p-8'>
              {/* Header */}
              <div className="flex items-center gap-5 mb-6">
                <div className={`w-14 h-14 p-3 rounded-xl ${colors.bg} text-black shadow-lg transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center`}>
                    {data.icon}
                </div>
                <h3 className='text-2xl font-bold text-white tracking-wide'>
                  {data.title}
                </h3>
              </div>

              {/* Content Area */}
              <div className='flex-1'>
                <VisualContent type={type} data={data} colors={colors} />
              </div>
            </div>
          </>
        ) : (
          // Full Card View (Modal Content)
          <>
            {/* Header */}
            <div className='flex items-start gap-4 mb-8'>
              <div
                className={`text-4xl ${data.color} p-3 bg-white/5 rounded-2xl border border-white/10`}
              >
                {data.icon}
              </div>
              <h3 className='text-3xl font-bold text-white leading-tight'>
                {data.title}
              </h3>
            </div>

            {/* Highlight Box */}
            {data.highlight && (
              <div className='bg-linear-to-r from-red-900/60 to-transparent border-l-4 border-red-500 p-4 mb-8 rounded-r-lg'>
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
  type: string;
  isOpen: boolean;
  onClose: () => void;
}> = ({ data, type, isOpen, onClose }) => {
  if (!isOpen || !data) return null;
  const colors = colorMap[data.color] || colorMap["text-yellow-400"];

  return (
    <div
      className='fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4'
      onClick={onClose}
    >
      <div
        className='relative bg-[#1a1a1a] rounded-3xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/50 overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background Pattern for Modal */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform scale-150 origin-top-right">
           <BackgroundPattern type={type} color={data.color} />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-6 right-6 bg-black/20 hover:bg-white/10 p-2 rounded-full text-gray-400 hover:text-white transition-all duration-300 z-10'
        >
          <X className='w-6 h-6' />
        </button>

        {/* Header with gradient background */}
        <div className={`bg-linear-to-r ${colors.gradient.replace("from-", "from-").replace("500", "900")}/20 to-transparent p-8 md:p-10 border-b border-white/5`}>
          <div className='flex items-center gap-6 relative z-10'>
            <div
              className={`text-5xl ${data.color} p-4 bg-white/5 rounded-2xl border border-white/10 shadow-lg`}
            >
              {data.icon}
            </div>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-2'>
                {data.title}
              </h2>
              <p className="text-gray-400 text-lg">{data.summary}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className='p-8 md:p-10 relative z-10'>
          {/* Highlight Box */}
          {data.highlight && (
            <div className={`bg-white/5 border-l-4 ${colors.border} p-6 mb-10 rounded-r-xl`}>
              <p className={`${colors.text.replace("400", "300")} text-xs font-bold uppercase tracking-widest mb-2`}>
                {data.highlight.label}
              </p>
              <p className='text-white font-bold text-2xl md:text-3xl'>
                {data.highlight.value}
              </p>
            </div>
          )}

          {/* Items */}
          <ul className='space-y-6'>
            {data.items.map((item, idx) => (
              <li key={idx} className='flex gap-5 items-start group/item'>
                <span className={`${colors.text.replace("400", "500")} font-bold mt-1 shrink-0 text-xl`}>
                  ●
                </span>
                <div className='flex-1'>
                  {item.label && (
                    <p className='text-white font-bold text-lg mb-1 group-hover/item:text-white transition-colors'>
                      {item.label}
                    </p>
                  )}
                  <p
                    className={`${
                      item.highlight
                        ? `${colors.text.replace("400", "300")} font-semibold`
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
  const [selectedType, setSelectedType] = useState<string>("");
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

  const categories: (InfoCategory & { type: string })[] = [
    {
      type: "currency",
      title: t.essentialInfo.currency.title,
      icon: <Wallet className='w-full h-full' />,
      color: "text-yellow-400",
      summary: t.essentialInfo.currency.summary,
      highlight: {
        label: t.essentialInfo.currency.highlightLabel,
        value: t.essentialInfo.currency.highlightValue,
      },
      items: t.essentialInfo.currency.items,
    },
    {
      type: "sim",
      title: t.essentialInfo.sim.title,
      icon: <Smartphone className='w-full h-full' />,
      color: "text-blue-400",
      summary: t.essentialInfo.sim.summary,
      items: t.essentialInfo.sim.items,
    },
    {
      type: "travel",
      title: t.essentialInfo.travel.title,
      icon: <Bus className='w-full h-full' />,
      color: "text-green-400",
      summary: t.essentialInfo.travel.summary,
      items: t.essentialInfo.travel.items,
    },
    {
      type: "visa",
      title: t.essentialInfo.visa.title,
      icon: <FileCheck className='w-full h-full' />,
      color: "text-purple-400",
      summary: t.essentialInfo.visa.summary,
      items: t.essentialInfo.visa.items,
    },
    {
      type: "phrases",
      title: t.essentialInfo.phrases.title,
      icon: <Languages className='w-full h-full' />,
      color: "text-pink-400",
      summary: t.essentialInfo.phrases.summary,
      items: t.essentialInfo.phrases.items,
    },
    {
      type: "safety",
      title: t.essentialInfo.safety.title,
      icon: <Shield className='w-full h-full' />,
      color: "text-red-400",
      summary: t.essentialInfo.safety.summary,
      items: t.essentialInfo.safety.items,
    },
  ];

  const handleOpen = (category: InfoCategory & { type: string }) => {
    setSelectedCategory(category);
    setSelectedType(category.type);
  };

  return (
    <>
      <section className='pt-16 md:pt-20 lg:pt-28 pb-24 md:pb-32 lg:pb-40 bg-grid relative overflow-hidden'>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-red-900/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
        </div>

        <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10'>
          {/* Header */}
          <div className='text-center mb-12 md:mb-16'>
            <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight'>
              {t.essentialInfo.title}
            </h2>
            <p className='text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              {t.essentialInfo.subtitle}
            </p>
          </div>

          {/* Mobile Categories Grid (Restored Simple Grid) */}
          <div className='grid grid-cols-2 md:hidden gap-3'>
            {categories.map((category, idx) => (
              <div key={idx} className="h-56">
                <InfoCategory
                  data={category}
                  type={category.type}
                  variant="mobile"
                  onOpen={() => handleOpen(category)}
                  exploreText={t.essentialInfo.explore}
                />
              </div>
            ))}
          </div>

          {/* Desktop Categories Grid - Responsive Bento Grid Style */}
          <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start'>
            {categories.map((category, idx) => (
              <div 
                key={idx} 
                className="h-full"
              >
                <InfoCategory
                  data={category}
                  type={category.type}
                  variant="desktop"
                  exploreText={t.essentialInfo.explore}
                />
              </div>
            ))}
          </div>

          {/* View Full Guide Button */}
          <div className='mt-16 text-center'>
            <Link
              href='/planning'
              className='group inline-flex items-center gap-3 bg-white text-black hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
            >
              <span className="text-lg">{t.nav?.planning || "View Full Planning Guide"}</span>
              <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
            </Link>
          </div>
        </div>
      </section>

      {/* Modal for Details */}
      <DetailModal
        data={selectedCategory}
        type={selectedType}
        isOpen={selectedCategory !== null}
        onClose={() => setSelectedCategory(null)}
      />
    </>
  );
}
