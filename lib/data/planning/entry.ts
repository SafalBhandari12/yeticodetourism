import { ContentItem } from "../types";

export const entryData: Record<string, ContentItem> = {
  "visa-information": {
    title: "Visa & Entry Requirements",
    subtitle: "Essential Travel Documents and Procedures",
    description:
      "Nepal offers straightforward visa processes for most nationalities. On-arrival visas are available at the airport and land borders, making entry accessible to international travelers.",
    content:
      "Getting a visa for Nepal is simple and tourist-friendly. Most nationalities can obtain visas upon arrival. Alternatively, online pre-approval applications expedite airport entry. Visa policies remain stable, and extensions are possible.",
    whatToExpect:
      "Quick visa processing at airport, minimal paperwork, availability of multiple visa durations.",
    highlights: [
      "On-Arrival Visa - Available at Tribhuvan International Airport and major land borders",
      "Online Pre-Approval - e-Visa option for faster processing (applies.immdigreg.gov.np)",
      "Multiple Durations - 15-day, 30-day, and 90-day options available",
      "Affordable Fees - USD 30 (15 days), USD 50 (30 days), USD 125 (90 days)",
      "SAARC Citizens - Free visa for citizens of South Asian countries",
      "Visa Extensions - Possible within Nepal through immigration office",
      "Land Borders - Visas also available at Indian and Tibetan borders",
    ],
    history:
      "Nepal liberalized visa policies in the 1980s-90s to encourage tourism. On-arrival visas introduced to make entry accessible. Online e-Visa system launched in recent years to streamline processing.",
    bestTime: "Visa processes same year-round; no seasonal variations.",
    gettingThere: "Visas obtained at point of entry or online before arrival.",
    practicalInfo: {
      duration: "Processing 5-10 minutes on-arrival, instant for e-Visa",
      difficulty: "Very easy",
      maxAltitude: "Not applicable",
      startingAltitude: "Not applicable",
      bestSeason: "Year-round",
      cost: "USD 30-125 depending on duration",
      accommodation: "Not needed for visa processing",
      transportTime: "Not applicable",
      accessibility: "Fully accessible",
    },
    image: "/topDestination/kathmandu.avif",
    tips: [
      "Bring 2-4 passport photos for visa application",
      "Carry cash (USD preferred) for visa fees—ATMs may not be immediately available",
      "Passport must have 6+ months validity from entry date",
      "Passport should have blank pages for visa stamp",
      "Online e-Visa application (15-30 minutes) faster than on-arrival",
      "Consider e-Visa if flying into airport during peak hours—lines lengthy",
      "Visa extensions possible through Immigration Office in Kathmandu",
      "Multiple-entry visas not available for tourists—separate visa required for re-entry",
      "Keep visa copy with you; original passport in secure location",
      "Visa extension possible in Kathmandu (approximately USD 25)",
    ],
  },
};

export const getEntryContent = (slug: string): ContentItem => {
  return (
    entryData[slug] || {
      title: "Entry Information",
      subtitle: "Travel Entry Essentials",
      description: "Everything you need to know about entering Nepal.",
      content:
        "Check visa requirements and prepare necessary documents before your journey.",
      highlights: ["Visas", "Documentation", "Border Entry"],
      image: "/topDestination/kathmandu.avif",
    }
  );
};
