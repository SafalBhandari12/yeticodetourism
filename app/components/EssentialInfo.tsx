"use client";

import React from "react";
import {
  Wallet,
  Smartphone,
  Bus,
  FileCheck,
  Languages,
  Shield,
} from "lucide-react";

interface InfoCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
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

const InfoCategory: React.FC<{ data: InfoCategory }> = ({ data }) => (
  <div className='group h-full'>
    <div className='bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-red-400/50 transition-all duration-300 h-full hover:bg-black/60 hover:shadow-2xl hover:shadow-red-900/20 hover:-translate-y-1'>
      {/* Header */}
      <div className='flex items-center gap-5 mb-8'>
        <div className={`text-5xl ${data.color} p-3 bg-white/5 rounded-xl`}>
          {data.icon}
        </div>
        <h3 className='text-3xl font-bold text-white group-hover:text-red-300 transition-colors'>
          {data.title}
        </h3>
      </div>

      {/* Highlight Box */}
      {data.highlight && (
        <div className='bg-linear-to-r from-red-900/40 to-transparent border-l-4 border-red-500 p-5 mb-8 rounded-r-lg'>
          <p className='text-red-200 text-sm font-bold uppercase tracking-widest mb-1'>
            {data.highlight.label}
          </p>
          <p className='text-white font-bold text-2xl'>
            {data.highlight.value}
          </p>
        </div>
      )}

      {/* Items */}
      <ul className='space-y-5'>
        {data.items.map((item, idx) => (
          <li key={idx} className='flex gap-4 items-start'>
            <span className='text-red-500 font-bold mt-1 shrink-0 text-xl'>
              •
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
                    : "text-gray-200"
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
);

export default function EssentialInfo() {
  const categories: InfoCategory[] = [
    {
      title: "Currency & Payments",
      icon: <Wallet className='w-12 h-12' />,
      color: "text-yellow-400",
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
      title: "Transportation",
      icon: <Bus className='w-12 h-12' />,
      color: "text-green-400",
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
            <InfoCategory key={idx} data={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
