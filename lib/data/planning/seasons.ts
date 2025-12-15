import { ContentItem } from "../types";

export const seasonsData: Record<string, ContentItem> = {
  "best-time-to-visit": {
    title: "Best Time to Visit Nepal",
    subtitle: "Seasonal Guide and Climate Information",
    description:
      "Nepal's timing depends on your planned activities and preferred weather. Each season offers distinct advantages for different types of travel.",
    content:
      "Nepal experiences four distinct seasons with varying weather, visibility, and conditions. Understanding seasons helps optimize your experience and select appropriate activities.",
    whatToExpect:
      "Varied weather patterns, crowd levels, and visibility throughout year. Each season suits different traveler preferences and activity types.",
    highlights: [
      "Autumn (September-November) - Clear skies, moderate temperatures, low humidity",
      "Spring (March-May) - Pleasant temperatures, good visibility, rhododendrons blooming",
      "Winter (December-February) - Sunny days, clear skies, cold mornings/nights",
      "Monsoon (June-August) - Green landscapes, limited visibility, heavy rains",
    ],
    history:
      "Nepal's seasons shaped by Himalayan geography and monsoon patterns. Traditional trekking seasons established through generational knowledge and modern meteorology.",
    bestTime:
      "Autumn (October-November) best overall; Spring (March-April) second best.",
    gettingThere: "Not applicable.",
    practicalInfo: {
      duration: "N/A - Seasonal planning",
      difficulty: "N/A",
      maxAltitude: "N/A",
      startingAltitude: "N/A",
      bestSeason: "September-May",
      cost: "Seasonal pricing varies",
      accommodation: "Availability varies seasonally",
      transportTime: "N/A",
      accessibility: "N/A",
    },
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
    tips: [
      "Autumn (Sept-Nov): Best overall season for all activities. Clear mountain views (80%+ visibility). Moderate temperatures (10-25°C). Optimal for trekking. Peak tourist season—book accommodations in advance.",
      "Winter (Dec-Feb): Coldest season. Clear sunny days perfect for photography. Very cold at altitude (-15°C at night in mountains). Many tea-houses close above 3,000m. Excellent for Kathmandu valley, lower elevation treks. Less crowded.",
      "Spring (March-May): Pleasant temperatures (15-25°C). Rhododendron blooming (March-April). Good mountain visibility (70%). Longer daylight hours. Excellent for trekking. Mid-season crowds.",
      "Monsoon (June-Aug): Heavy rainfall (daily afternoon storms). Green landscapes, fewer tourists. Limited visibility. Landslides on mountain roads. Not recommended for most activities. Only Mustang and Dolpo accessible (rain shadow regions).",
    ],
  },
};

export const getSeasonsContent = (slug: string): ContentItem => {
  return (
    seasonsData[slug] || {
      title: "Best Time to Visit",
      subtitle: "Seasonal Planning",
      description: "Understand Nepal's seasons to plan your perfect trip.",
      content: "Each season offers unique experiences and weather conditions.",
      highlights: ["Autumn", "Spring", "Winter", "Monsoon"],
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
    }
  );
};
