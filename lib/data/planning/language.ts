import { ContentItem } from "../types";

export const languageData: Record<string, ContentItem> = {
  "local-phrases": {
    title: "Useful Local Phrases",
    subtitle: "Speaking Nepali",
    description:
      "Learning basic Nepali phrases dramatically improves interactions with locals. Nepali people appreciate foreigners' efforts to speak their language.",
    content:
      "Nepali is an Indo-Aryan language. Basic phrases sufficient for travel. Locals very patient with language learners and appreciate attempts.",
    whatToExpect:
      "Warm responses to language attempts, clearer communication, deeper cultural connections.",
    highlights: [
      "Namaste - Hello/goodbye (spiritual greeting)",
      "Dhanyabad - Thank you",
      "Malai khusi ho - I'm happy/pleased",
      "Mitho cha - It's delicious",
      "Yo kati ko ho? - How much does this cost?",
      "Mero nam ... ho - My name is...",
      "Shukriya - Thank you (less formal)",
      "Hoja - Yes/okay",
      "Hoina - No",
      "Bhannu hos - Excuse me",
    ],
    history:
      "Nepali language evolved from Sanskrit with significant influence from Hindi, Tibet, and English. Considered one of more melodic South Asian languages.",
    bestTime: "Learn phrases before arrival; practice throughout travels.",
    gettingThere: "Language learning before travel enhances experiences.",
    practicalInfo: {
      duration: "1-30 days learning",
      difficulty: "Easy for basic phrases",
      maxAltitude: "N/A",
      startingAltitude: "N/A",
      bestSeason: "Year-round",
      cost: "Free online resources available",
      accommodation: "N/A",
      transportTime: "N/A",
      accessibility: "Fully accessible",
    },
    image: "/topDestination/kathmandu.avif",
    tips: [
      "Nepali pronunciation generally phonetic once rules learned",
      "Youtube has excellent Nepali learning channels—watch before arrival",
      "Duolingo and other apps helpful for basic learning",
      "Locals extremely patient; don't worry about perfect pronunciation",
      "Written Nepali (Devanagari script) beautiful but not necessary for travelers",
      "Many Nepali people speak English in tourist areas—locals speak English",
      "Your pronunciation attempt appreciated more than perfect English",
      "Learn numbers for market negotiations and accommodation costs",
      "Restaurant staff appreciate language efforts—often provide discounts",
      "Trekking guides especially appreciate language learning attempts",
    ],
  },
};

export const getLanguageContent = (slug: string): ContentItem => {
  return (
    languageData[slug] || {
      title: "Local Phrases",
      subtitle: "Speaking Nepali",
      description: "Learn essential Nepali phrases for your journey.",
      content: "Basic phrases enhance communication and show respect.",
      highlights: ["Greetings", "Phrases", "Numbers", "Conversation"],
      image: "/topDestination/kathmandu.avif",
    }
  );
};
