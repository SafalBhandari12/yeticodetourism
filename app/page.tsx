"use client";

import { useState } from "react";
import Hero from "./components/Hero";
import Partnerships from "./components/Partnerships";
import TopDestinations from "./components/TopDestinations";
import Recommendations from "./components/Recommendations";
import TopAttractions from "./components/TopAttractions";
import ExpertTips from "./components/ExpertTips";
import NepalSplash from "./components/NepalSplash";

export default function Home() {
  const [splashComplete, setSplashComplete] = useState(false);

  return (
    <>
      <NepalSplash onAnimationComplete={() => setSplashComplete(true)} />
      <div className='flex flex-col min-h-screen'>
        <Hero />
        <Partnerships />
        <TopDestinations />
        <Recommendations />
        <TopAttractions />
        <ExpertTips />
      </div>
    </>
  );
}
