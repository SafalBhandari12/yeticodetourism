import { ContentItem } from "../types";

export const connectivityData: Record<string, ContentItem> = {
  "sim-card": {
    title: "SIM Cards & Connectivity",
    subtitle: "Staying Connected in Nepal",
    description:
      "Nepal has reliable mobile networks and internet connectivity in cities and many trekking areas. Getting a local SIM card provides affordable communication.",
    content:
      "Two major providers (Ncell and NTC) offer good coverage with competitive pricing. Internet connectivity has improved dramatically in recent years.",
    whatToExpect:
      "Affordable data plans, good coverage in populated areas, patchy coverage in remote regions, internet speeds adequate for most needs.",
    highlights: [
      "Ncell Network - Largest provider with best city and mountain coverage",
      "NTC Network - State provider with extensive coverage but slower speeds",
      "4G Coverage - Available in major cities and some trekking routes",
      "Data Plans - Affordable monthly packages (USD 5-15 monthly)",
      "Airport Kiosks - Convenient SIM purchase immediately upon arrival",
      "International Calling - Available at reasonable rates",
      "Roaming - International roaming costly; local SIM recommended",
    ],
    history:
      "Mobile network expansion in Nepal accelerated in 2000s-2010s. Internet infrastructure dramatically improved; WiFi widespread in tourist areas.",
    bestTime: "Year-round; coverage seasonal variations minor.",
    gettingThere: "SIM cards purchased at airport or in cities.",
    practicalInfo: {
      duration: "1-30 days plans available",
      difficulty: "Very easy",
      maxAltitude: "Works to 3,500m+ in most areas",
      startingAltitude: "City-level",
      bestSeason: "Year-round",
      cost: "USD 5-15 for plans plus SIM",
      accommodation: "Not applicable",
      transportTime: "15-20 minutes for SIM purchase",
      accessibility: "Fully accessible",
    },
    image: "/topDestination/kathmandu.avif",
    tips: [
      "Purchase SIM at airport immediately upon arrival—airport kiosk convenient",
      "Bring passport for SIM registration (required by law)",
      "Ncell generally better for cities; NTC better for mountains",
      "Unlimited data plans misleading—throttling after specific usage",
      "Ask for prepaid SIM with credit rather than postpaid plans—simpler for tourists",
      "Share SIM phone numbers with family; WhatsApp calling requires data",
      "Download offline maps before trekking—internet access sporadic above 3,000m",
      "Internet quality varies; WiFi-only critical during trekking for upload/download",
      "Backup phone charging critical—power outages occur",
      "WiFi widely available at tea-houses but internet quality poor",
    ],
  },
};

export const getConnectivityContent = (slug: string): ContentItem => {
  return (
    connectivityData[slug] || {
      title: "Connectivity",
      subtitle: "Staying Connected",
      description: "Stay connected with reliable mobile and internet services.",
      content:
        "Get a local SIM card and stay in touch throughout your journey.",
      highlights: ["Mobile Networks", "Data Plans", "WiFi", "Coverage"],
      image: "/topDestination/kathmandu.avif",
    }
  );
};
