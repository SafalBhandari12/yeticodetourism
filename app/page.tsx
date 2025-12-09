import Hero from "./components/Hero";
import Partnerships from "./components/Partnerships";
import TopDestinations from "./components/TopDestinations";
import Recommendations from "./components/Recommendations";
import TopAttractions from "./components/TopAttractions";
import ExpertTips from "./components/ExpertTips";

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Hero />
      <Partnerships />
      <TopDestinations />
      <Recommendations />
      <TopAttractions />
      <ExpertTips />
    </div>
  );
}
