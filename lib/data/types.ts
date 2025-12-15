export interface ContentItem {
  title: string;
  subtitle: string;
  description: string;
  content: string;
  highlights: string[];
  image: string;
  history?: string;
  bestTime?: string;
  gettingThere?: string;
  tips?: string[];
  details?: Record<string, string>;
  whatToExpect?: string;
  practicalInfo?: PracticalInfo;
  itinerary?: string[];
  topReasons?: string[];
}

export interface PracticalInfo {
  duration?: string;
  difficulty?: string;
  maxAltitude?: string;
  startingAltitude?: string;
  bestSeason?: string;
  cost?: string;
  accommodation?: string;
  guideCost?: string;
  transportTime?: string;
  accessibility?: string;
}
