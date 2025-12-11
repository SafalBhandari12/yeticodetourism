"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import TopDestinations from "./components/TopDestinations";
import WelcomeSection from "./components/WelcomeSection";
import AdventureWildlife from "./components/AdventureWildlife";
import Itineraries from "./components/Itineraries";
import AccommodationHighlights from "./components/AccommodationHighlights";
import Cuisine from "./components/Cuisine";
import EventsFestivals from "./components/EventsFestivals";
import EssentialInfo from "./components/EssentialInfo";
import NepalSplash from "./components/NepalSplash";

export default function Home() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <>
      <NepalSplash onAnimationComplete={() => setSplashComplete(true)} />
      <div className='flex flex-col min-h-screen'>
        <Hero />
        <TopDestinations />
        <WelcomeSection />
        <AdventureWildlife />
        <Itineraries />
        <AccommodationHighlights />
        <Cuisine />
        <EventsFestivals />
        <EssentialInfo />
      </div>
    </>
  );
}
