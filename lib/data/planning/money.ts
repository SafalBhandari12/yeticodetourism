import { ContentItem } from "../types";

export const moneyData: Record<string, ContentItem> = {
  currency: {
    title: "Currency & Money Management",
    subtitle: "Financial Guide for Nepal",
    description:
      "Nepal's currency is the Nepalese Rupee (NPR). Understanding money management, exchange rates, and banking helps avoid financial complications during travel.",
    content:
      "Cash remains king in Nepal outside major cities. ATMs available in cities but scarce in remote areas. Credit card usage limited. Exchange rates stable against major currencies.",
    whatToExpect:
      "Favorable exchange rates, abundant ATMs in cities, cash-based transactions outside urban areas, reasonable prices for most experiences.",
    highlights: [
      "Nepalese Rupee (NPR) - Official currency; approximately 132 NPR = 1 USD",
      "ATM Availability - Common in Kathmandu, Pokhara; scarce in remote areas",
      "Credit Cards - Accepted at major hotels, restaurants; limited elsewhere",
      "Exchange Rates - Stable against major currencies; favorable for foreign visitors",
      "Small Denominations - Impossible to get change for USD 100 bills—bring smaller bills",
      "Black Market - Illegal and unnecessary; official rates fairly competitive",
    ],
    history:
      "Nepal's currency historically stable. Exchange rates improved significantly for foreign visitors due to tourism-driven demand. Modern financial systems developing.",
    bestTime: "Exchange rates relatively stable year-round.",
    gettingThere: "Financial planning before travel essential.",
    practicalInfo: {
      duration: "N/A - Ongoing finance management",
      difficulty: "Easy with planning",
      maxAltitude: "N/A",
      startingAltitude: "N/A",
      bestSeason: "Year-round",
      cost: "Varies by spending style",
      accommodation: "Budget USD 20-300/night",
      transportTime: "N/A",
      accessibility: "Fully accessible",
    },
    image: "/topDestination/kathmandu.avif",
    tips: [
      "Carry USD 1000-1500 in mixed small denominations (USD 1, 5, 10, 20 bills)",
      "Notify your bank before travel to avoid card blocking",
      "Withdraw large amounts in cities—remote areas ATMs unreliable",
      "Expect 2% ATM fees at most Nepali ATMs",
      "Credit cards accepted at upscale hotels and restaurants in cities",
      "Tipping not mandatory but appreciated (5-10% in restaurants)",
      "Haggling expected at markets and with taxi drivers (except metered taxis)",
      "Keep receipts for currency exchange—some banks require proof",
      "Cryptocurrency exchanges exist but not mainstream or necessary",
      "Money belts recommended for carrying larger amounts",
    ],
  },
};

export const getMoneyContent = (slug: string): ContentItem => {
  return (
    moneyData[slug] || {
      title: "Money & Currency",
      subtitle: "Financial Planning",
      description: "Manage your money effectively during your Nepal journey.",
      content: "Understand currency, ATMs, exchange rates, and budgeting.",
      highlights: ["Currency", "ATMs", "Exchange Rates", "Budgeting"],
      image: "/topDestination/kathmandu.avif",
    }
  );
};
