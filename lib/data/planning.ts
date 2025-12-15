// Re-export all planning modules for backward compatibility
export { entryData, getEntryContent } from "./planning/entry";

export { seasonsData, getSeasonsContent } from "./planning/seasons";

export { transportData, getTransportContent } from "./planning/transport";

export { moneyData, getMoneyContent } from "./planning/money";

export {
  connectivityData,
  getConnectivityContent,
} from "./planning/connectivity";

export { healthData, getHealthContent } from "./planning/health";

export { cultureData, getCultureContent } from "./planning/culture";

export { languageData, getLanguageContent } from "./planning/language";

// Combine all planning data into single object for backward compatibility
import { ContentItem } from "./types";
import { entryData } from "./planning/entry";
import { seasonsData } from "./planning/seasons";
import { transportData } from "./planning/transport";
import { moneyData } from "./planning/money";
import { connectivityData } from "./planning/connectivity";
import { healthData } from "./planning/health";
import { cultureData } from "./planning/culture";
import { languageData } from "./planning/language";

export const planningData: Record<string, ContentItem> = {
  ...entryData,
  ...seasonsData,
  ...transportData,
  ...moneyData,
  ...connectivityData,
  ...healthData,
  ...cultureData,
  ...languageData,
};

export const getPlanningContent = (slug: string): ContentItem => {
  return (
    planningData[slug] || {
      title: slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      subtitle: "Travel Essentials",
      description: "Everything you need to know for a smooth journey.",
      content:
        "Planning a trip to Nepal is exciting. Make sure to check visa requirements, pack appropriate clothing for the season, and respect local customs. Our guides are here to help you prepare.",
      highlights: ["Preparation", "Logistics", "Tips", "Safety"],
      image: "/topDestination/kathmandu.avif",
    }
  );
};
