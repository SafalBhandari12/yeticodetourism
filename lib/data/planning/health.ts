import { ContentItem } from "../types";

export const healthData: Record<string, ContentItem> = {
  safety: {
    title: "Safety & Health",
    subtitle: "Travel Safety and Essential Health Information",
    description:
      "Nepal is generally very safe for travelers. Understanding common risks, prevention methods, and health care access ensures safe, healthy travels.",
    content:
      "Nepal's safety record for tourists is excellent. Petty theft minimal in tourist areas. Medical facilities vary by location. Altitude-related illness main health concern.",
    whatToExpect:
      "Safe environment for travelers, excellent medical care in major cities, limited facilities in remote areas, altitude adjustment effects possible.",
    highlights: [
      "Low Crime Rates - Petty theft minimal; violent crime against tourists rare",
      "Altitude Sickness - Main health concern for mountain travel; preventable with acclimatization",
      "Medical Facilities - Excellent hospitals in Kathmandu; limited in rural areas",
      "Travel Insurance - Strongly recommended; critical for emergencies",
      "Water Safety - Drink only purified/bottled water",
      "Food Safety - Standard precautions avoid most issues",
      "Insurance Coverage - Must include altitude and evacuation",
    ],
    history:
      "Nepal's safety profile for tourists excellent; historically welcoming. Modern medical facilities in major cities advanced. Infrastructure supports tourism safely.",
    bestTime: "Safety consistent year-round; no seasonal variations.",
    gettingThere: "Safety considerations when planning travel.",
    practicalInfo: {
      duration: "Ongoing throughout travels",
      difficulty: "Easy with awareness",
      maxAltitude: "Affects altitude sickness risk",
      startingAltitude: "Varies",
      bestSeason: "Year-round",
      cost: "USD 50-100 for comprehensive insurance",
      accommodation: "Safe lodging in tourist areas",
      transportTime: "N/A",
      accessibility: "Fully accessible",
    },
    image: "/topDestination/kathmandu.avif",
    tips: [
      "Travel insurance mandatory—must cover altitude to 5,500m+, evacuation ($5,000+)",
      "Altitude sickness prevention: 'Climb high, sleep low', gradual ascent, hydration",
      "Symptoms: headache, nausea, dizziness—descend if severe",
      "Diamox helps but doesn't replace proper acclimatization",
      "Drink 3-4 liters daily at altitude; dehydration main sickness cause",
      "Medical evacuation helicopter costs $5,000-10,000—insurance critical",
      "Avoid drinking tap water; purified/bottled only",
      "Food from established vendors safer than street stalls",
      "Register with embassy before extended travel",
      "Keep emergency numbers: Police 100, Tourist Police 4247567, Ambulance 102",
      "Petty theft: Keep valuables secure, use hotel safe, avoid displaying expensive items",
      "Don't trek alone; hire guides for safety and support",
      "Inform someone of daily plans when trekking",
      "Accidental injuries most common; travel insurance protects against costs",
    ],
  },
};

export const getHealthContent = (slug: string): ContentItem => {
  return (
    healthData[slug] || {
      title: "Health & Safety",
      subtitle: "Stay Safe and Healthy",
      description: "Important health and safety information for your journey.",
      content: "Take precautions and stay informed for a safe trip.",
      highlights: ["Altitude Sickness", "Medical Care", "Safety", "Insurance"],
      image: "/topDestination/kathmandu.avif",
    }
  );
};
