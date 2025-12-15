import { ContentItem } from "../types";

export const transportData: Record<string, ContentItem> = {
  transportation: {
    title: "Transportation Guide",
    subtitle: "Getting Around Nepal",
    description:
      "Nepal offers various transportation options connecting major cities and destinations. Understanding options helps optimize travel logistics and experiences.",
    content:
      "Transportation in Nepal ranges from luxury to basic depending on route and vehicle type. Planning ahead ensures smooth transitions and minimizes delays.",
    whatToExpect:
      "Variable comfort levels, scenic routes, flexible scheduling, occasional delays due to weather or road conditions.",
    highlights: [
      "Domestic Flights - Connecting major cities (45 minutes Kathmandu-Pokhara); weather-dependent",
      "Tourist Buses - Comfortable overnight buses on major routes (NPR 600-1500)",
      "Local Buses - Affordable but basic services through towns and villages (NPR 100-400)",
      "Private Jeeps - Flexible travel with driver; more expensive but comfortable (USD 40-80/day)",
      "Taxis - Metered or negotiated fares in cities; ride-sharing apps in Kathmandu",
      "Motorcycles - Accessible for short distances; rentals available (USD 5-10/day)",
      "Bicycles - Excellent for valley exploration; rentals common (USD 3-8/day)",
      "Walking - Best way to explore city streets and neighborhoods",
    ],
    history:
      "Transportation in Nepal has modernized significantly. Highways connect major cities; air network expanded. Still, road conditions vary; infrastructure developing.",
    bestTime:
      "September-May for optimal road conditions. Avoid monsoon months for landslide risks.",
    gettingThere:
      "Transportation discussed as method of getting around Nepal itself.",
    practicalInfo: {
      duration: "Varies by route",
      difficulty: "Easy to challenging",
      maxAltitude: "Varies",
      startingAltitude: "Varies",
      bestSeason: "September-May",
      cost: "USD 5-150 depending on option",
      accommodation: "Various lodging during transit",
      transportTime: "45 minutes to 14+ hours",
      accessibility: "Varies by mode",
    },
    image: "/topDestination/kathmandu.avif",
    tips: [
      "Notify banks before travels—ATM cards often blocked by fraud protection",
      "Carry copies of important documents separately from originals",
      "Travel insurance essential including evacuation coverage",
      "Learn basic Nepali phrases for interactions with locals",
      "Respect local customs and dress appropriately",
      "Stay hydrated and acclimatize properly at altitude",
      "Keep emergency contact numbers of embassy and travel insurance",
      "Register with your embassy before extended travel",
      "Maintain regular contact with family back home",
      "Trust your instincts; avoid situations feeling unsafe",
    ],
  },
};

export const getTransportContent = (slug: string): ContentItem => {
  return (
    transportData[slug] || {
      title: "Transportation",
      subtitle: "Getting Around",
      description: "Learn about all transportation options in Nepal.",
      content:
        "Various modes of transport available for different routes and budgets.",
      highlights: ["Flights", "Buses", "Jeeps", "Taxis"],
      image: "/topDestination/kathmandu.avif",
    }
  );
};
