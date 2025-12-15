import { ContentItem } from "../types";

export const cultureData: Record<string, ContentItem> = {
  "local-culture": {
    title: "Local Culture & Etiquette",
    subtitle: "Respecting Nepali Traditions",
    description:
      "Understanding and respecting local culture enhances travel experiences and shows respect to host communities. Simple courtesies go far in Nepal.",
    content:
      "Nepali people are warm and welcoming. Showing respect for traditions, religions, and customs appreciated. Small efforts to learn culture transform superficial tourism into meaningful exchange.",
    whatToExpect:
      "Warm hospitality, religious reverence at temples, respect for elders, family-centered values, spiritual significance in daily life.",
    highlights: [
      "Namaste Greeting - 'Namaste' polite greeting and goodbye",
      "Respect for Elders - Touch feet as sign of respect",
      "Temple Etiquette - Remove shoes, dress modestly, don't photograph rituals",
      "Religious Reverence - Sacred sites require respectful behavior",
      "Food Customs - Right hand eating tradition; vegetarian practices honored",
      "Festival Participation - Welcoming but requires respectful engagement",
      "Photography Permission - Always ask before photographing people",
    ],
    history:
      "Nepal's culture shaped by Hinduism, Buddhism, and animist traditions over millennia. Modern Nepal maintains strong cultural identity despite globalization.",
    bestTime: "Year-round; festivals enhance cultural immersion.",
    gettingThere:
      "Cultural learning begins before arrival; research enhances experience.",
    practicalInfo: {
      duration: "Ongoing throughout travels",
      difficulty: "Easy with awareness",
      maxAltitude: "N/A",
      startingAltitude: "N/A",
      bestSeason: "Year-round",
      cost: "Free to learn and practice",
      accommodation: "N/A",
      transportTime: "N/A",
      accessibility: "Fully accessible",
    },
    image: "/topDestination/kathmandu.avif",
    tips: [
      "Learn 'Namaste', 'Dhanyabad' (thank you), 'Mitho Cha' (delicious)",
      "Dress modestly: avoid revealing clothing, shorts for women risky",
      "Remove shoes before entering temples, homes, and dining areas",
      "Don't point feet at people or religious objects (considered disrespectful)",
      "Never photograph religious rituals without explicit permission",
      "Respect the Living Goddess Kumari—viewing only, no touching",
      "Eating with right hand (left considered unclean in traditional settings)",
      "Accept tea/refreshments when offered—refusal considered rude",
      "Don't touch people's heads (considered sacred)",
      "Animals have spiritual significance—treat them respectfully",
      "Photography in sensitive areas may be prohibited—ask first always",
      "Participate in meals and celebrations when invited—refusal offends",
    ],
  },
};

export const getCultureContent = (slug: string): ContentItem => {
  return (
    cultureData[slug] || {
      title: "Local Culture",
      subtitle: "Respecting Traditions",
      description: "Learn about Nepali culture and customs.",
      content: "Respectful engagement enhances your experience.",
      highlights: ["Etiquette", "Customs", "Traditions", "Festivals"],
      image: "/topDestination/kathmandu.avif",
    }
  );
};
