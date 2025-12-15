import { ContentItem } from "./types";

export const accommodationData: Record<string, ContentItem> = {
  "5-star-hotels": {
    title: "5-Star Luxury Hotels",
    subtitle: "Premium Hospitality in Nepal",
    description:
      "Experience world-class luxury accommodations combining international standards with Nepali hospitality and cultural aesthetics. Nepal's premier hotels offer exceptional service and amenities.",
    content:
      "Nepal's 5-star hotels provide luxury experiences with authentic cultural elements. From heritage properties preserving traditional architecture to modern international chains, these establishments cater to discerning travelers.",
    highlights: [
      "Dwarika's Hotel - Heritage luxury featuring carved woodwork and courtyards (Kathmandu)",
      "Hyatt Regency Kathmandu - Modern luxury with traditional design elements",
      "Marriott Hotel Kathmandu - International standard with Himalayan hospitality",
      "Meghauli Serai - Luxury jungle retreat near Chitwan National Park",
      "Andbeyond Machan - Tree-house luxury combined with wildlife experiences",
      "The Pavilion Himalaya - Luxury resort with mountain views in Pokhara",
      "Shangrila Village Resort - Boutique property with traditional design",
      "Radisson Hotel - Premium international standards in Kathmandu",
    ],
    whatToExpect:
      "Expect exceptional service, fine dining restaurants, luxury spa facilities, premium room amenities, concierge services, and cultural programming. Staff trained to international standards while maintaining genuine Nepali warmth.",
    bestTime:
      "Year-round; October-November and March-May optimal for mountain views and activities.",
    gettingThere:
      "Most located in Kathmandu accessible from Tribhuvan International Airport (5km). Complimentary airport transfers provided.",
    practicalInfo: {
      duration: "1-7 nights typical",
      difficulty: "Not applicable - luxury accommodation",
      maxAltitude: "1,300m (Kathmandu hotels)",
      startingAltitude: "1,300m",
      bestSeason: "Year-round",
      cost: "USD 200-500+ per night",
      accommodation: "5-star facilities with premium amenities",
      transportTime: "20-30 minutes from airport",
      accessibility: "Fully accessible with elevators and modern facilities",
    },
    image:
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=400",
    tips: [
      "Book well in advance during peak season (October-November and March-April)",
      "Request airport pickup when booking for seamless arrival",
      "Ask about cultural programming, spa services, and special experiences",
      "Many hotels offer day tours to nearby attractions through concierge",
      "Fine dining restaurants on-site; make reservations for special evenings",
      "Luxury spas often require advance booking—schedule treatments upon arrival",
      "Ask about extended stay discounts if visiting 4+ nights",
      "Credit cards widely accepted; tip staff 10% for exceptional service",
    ],
  },

  "luxury-resorts": {
    title: "Luxury Resorts",
    subtitle: "Exclusive Experiences in Nature",
    description:
      "Luxury resorts combine comfort and natural beauty in stunning settings. From jungle lodges to mountain retreats, these properties offer exclusive experiences with premium service.",
    content:
      "Luxury resorts provide curated experiences combining nature immersion with premium hospitality. Each resort designed to showcase unique regional characteristics while maintaining international comfort standards.",
    highlights: [
      "Tiger Tops Thani Mai - Luxury safari lodge overlooking Chitwan National Park",
      "Barahi Jungle Lodge - Intimate jungle property with cultural immersion",
      "Rupakot Resort - Cliffside boutique resort with valley views near Kathmandu",
      "Chandragiri Hills Resort - Hilltop resort with Himalayan panoramas",
      "Machan Pokhara - Lakeside luxury with mountain backdrop",
      "Aman Villa Ubud-style - Private villa experiences in mountain settings",
      "Eagle Nest Daman - Panoramic resort offering widest Himalayan views",
    ],
    whatToExpect:
      "Expect personalized service, curated activities, gourmet dining, spa facilities, and stunning natural settings. Staff dedicated to anticipating needs and creating memorable experiences.",
    bestTime: "October-May for optimal weather and mountain visibility.",
    gettingThere:
      "Resort transfers arranged from Kathmandu. Most 30 minutes to 2 hours' drive.",
    practicalInfo: {
      duration: "2-5 night stays typical",
      difficulty: "Not applicable - luxury accommodation",
      maxAltitude: "1,600m (some mountain resorts)",
      startingAltitude: "1,300m",
      bestSeason: "October-May",
      cost: "USD 150-300+ per night",
      accommodation: "Luxury rooms/suites with premium amenities",
      transportTime: "30 minutes to 2 hours from Kathmandu",
      accessibility: "Accessible; check specific resort for full accessibility",
    },
    image: "/hotels/tigerTops.jpg",
    tips: [
      "Book through resort directly or agents for best rates",
      "Ask about package deals combining accommodation with activities",
      "Confirm included meals and activities before booking",
      "Early morning activity coordination essential for trekking resorts",
      "Photo guides often available—request in advance",
      "Special occasion celebrations can be arranged with notice",
      "Credit cards typically accepted; confirm payment methods before arrival",
    ],
  },

  "tea-houses": {
    title: "Tea Houses",
    subtitle: "Authentic Trekking Accommodations",
    description:
      "Tea houses are family-run mountain lodges that form the backbone of Nepal's trekking infrastructure. These simple, authentic accommodations provide shelter, meals, and warm hospitality to trekkers.",
    content:
      "Tea houses represent authentic Himalayan hospitality. These modest family businesses have evolved to serve trekkers while maintaining traditional character and values. Each tea house has unique personality shaped by its family operators.",
    whatToExpect:
      "Expect basic but clean rooms, communal dining hall, hearty meals (Dal Bhat emphasis), limited hot water, kerosene heaters, and warm hospitality. Community atmosphere with other trekkers.",
    highlights: [
      "Namche Bazaar Tea Houses - Premium options (Everest region gateway)",
      "Tengboche Monastery Tea Houses - Spiritual atmosphere with valley views",
      "Gorak Shep - Highest tea house settlement at 5,160m",
      "Annapurna Base Camp Tea Houses - Diverse options on popular route",
      "Warm Dining Halls - Social centers for trekker meetings and information exchange",
      "Local Hospitality - Family-run authenticity and genuine welcome",
      "Traditional Meals - Dal Bhat and comfort foods at altitude",
    ],
    history:
      "Tea houses emerged organically as Sherpa families began hosting trekkers in their homes. Demand grew as trekking tourism expanded. Today, tea houses represent sustainable tourism supporting mountain communities while preserving trekking culture.",
    bestTime: "September-November and March-May (peak trekking seasons).",
    gettingThere:
      "Tea houses located along trekking routes; reached by trekking only.",
    practicalInfo: {
      duration: "1-14 nights during trekks",
      difficulty: "Easy - accommodation only",
      maxAltitude: "5,160m (Gorak Shep)",
      startingAltitude: "Various starting points",
      bestSeason: "September-May",
      cost: "USD 20-50 per night (including meals)",
      accommodation: "Basic rooms with limited amenities",
      transportTime: "N/A - reached by foot only",
      accessibility: "Limited accessibility; steep stairs common",
    },
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400",
    tips: [
      "Bring a sleeping bag for warmth and hygiene—tea house blankets often thin",
      "Order 'Dal Bhat Power' for unlimited servings and sustenance",
      "Pay per meal; larger meals available upon request",
      "Some tea houses have private rooms; others dormitory style",
      "Hot water for washing/showering limited—early request helps",
      "Shower facilities often shared and communal",
      "Electricity limited; battery charging may have small cost",
      "Internet sporadic; use for emergencies rather than recreation",
      "Respect privacy and property of other guests",
      "Tipping 5-10% appreciated for exceptional service",
      "Cash only accepted at most locations",
    ],
  },

  homestays: {
    title: "Community Homestays",
    subtitle: "Live Like a Local",
    description:
      "Community homestays offer authentic immersion into Nepali family life. Stay with local families in traditional homes, participate in daily activities, and experience genuine hospitality.",
    content:
      "Homestays provide the deepest cultural experiences available. Living with families, eating traditional meals, and participating in daily routines provides education no hotel can match.",
    whatToExpect:
      "Expect family living, participation in household activities, traditional Nepali meals, local festivals/celebrations, and meaningful cultural exchange. Comfort levels vary based on location and family preferences.",
    highlights: [
      "Panauti Community Homestay - Traditional Newari homes in historic valley town",
      "Sirubari Village - Overnight stays in Gurung communities on Annapurna foothills",
      "Ghalegaun - Thani village experience with cultural immersion",
      "Chitwan Tharu Villages - Indigenous community experiences in Terai",
      "Helambu Tamang Homestays - Tamang culture in mountain foothills",
      "Bhaktapur Old Town - Homestays in preserved medieval architecture",
      "Traditional Meal Preparation - Participation in cooking and food processing",
      "Festival Participation - Celebration involvement in seasonal festivities",
    ],
    history:
      "Community homestays emerged in the 1990s as alternatives to tourism infrastructure. Organizations developed homestay networks supporting rural communities economically while preserving traditions. Model successful in multiple Nepal regions.",
    bestTime:
      "Year-round; September-May optimal for activities and accessibility.",
    gettingThere:
      "Most homestays accessible by 2-4 hour drive from Kathmandu. Homestay organizations provide transportation.",
    practicalInfo: {
      duration: "1-3 nights typical",
      difficulty: "Easy",
      maxAltitude: "2,000m (mountain homestays)",
      startingAltitude: "800-1,800m depending on location",
      bestSeason: "September-May",
      cost: "USD 25-50 per night including meals",
      accommodation: "Basic rooms in family homes",
      transportTime: "2-4 hours from Kathmandu",
      accessibility: "Variable; many involve stairs and uneven terrain",
    },
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
    tips: [
      "Be open-minded about living conditions and family routines",
      "Actively participate in suggested activities—passive observation limits experience",
      "Learn basic Nepali phrases before arrival",
      "Ask permission before photographing family members or activities",
      "Dietary restrictions communicated in advance to families",
      "Help with household chores when offered—appreciated gesture",
      "Respect family's schedule and privacy",
      "Gifts appreciated—bring items from your home country (USD 10-20 value)",
      "Staying longer than one night deepens relationships and understanding",
      "Maintain contact with host family after return—relationships transcend visit",
      "Treat family and home respectfully; you're guests not tourists",
    ],
  },

  "boutique-hotels": {
    title: "Boutique Hotels",
    subtitle: "Unique Character and Personal Touch",
    description:
      "Small, uniquely designed boutique hotels offer character and personalized service. Each property has distinctive architecture, art, and philosophy reflecting owner vision.",
    content:
      "Boutique hotels bridge gap between luxury hotels and homestays. Personally curated properties provide comfort with authentic character. Each offers unique story through design and hospitality.",
    highlights: [
      "Baber Mahal Vilas - Historic royal residence converted to boutique hotel with courtyards",
      "Waterfall Garden - Eco-friendly boutique property in Pokhara",
      "Mulberry House - Design-focused boutique accommodation in Thamel",
      "Kantipur Temple House - Historic building near Durbar Square with traditional design",
      "Old Inn Kathmandu - Heritage building with character and local art",
      "Nepali Style Boutique - Emphasizing local architecture and cultural design",
      "Art-Themed Hotels - Galleries and cultural spaces within accommodations",
    ],
    whatToExpect:
      "Expect personalized service, architectural character, local art, curated atmospheres, and hosts passionate about their properties. Fewer rooms than hotels; more attention to individual guests.",
    bestTime: "Year-round; October-November and March-May optimal.",
    gettingThere:
      "Most located in Kathmandu, accessible from airport via taxi or transfers.",
    practicalInfo: {
      duration: "2-5 night stays typical",
      difficulty: "Not applicable - accommodation",
      maxAltitude: "1,300m",
      startingAltitude: "1,300m",
      bestSeason: "October-May",
      cost: "USD 80-200 per night",
      accommodation: "Character-filled rooms with unique design",
      transportTime: "20-30 minutes from airport",
      accessibility: "Variable; older buildings may have stairs",
    },
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400",
    tips: [
      "Each boutique hotel unique—research individual properties carefully",
      "Owners often present and passionate—engage them for local recommendations",
      "Book directly with hotels for personalized service and potential discounts",
      "Photography often encouraged—unique aesthetics worth capturing",
      "Communal spaces designed for guest interaction—meet other travelers",
      "Limited room availability—book well in advance for peak season",
      "Breakfast often included in rates—confirm when booking",
    ],
  },
};

export const getAccommodationContent = (slug: string): ContentItem => {
  return (
    accommodationData[slug] || {
      title: slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" "),
      subtitle: "Your Home Away From Home",
      description: "Find the perfect place to rest after your adventures.",
      content:
        "Nepal offers a wide range of accommodation options, from luxurious 5-star hotels to cozy family-run homestays. Wherever you stay, you will be greeted with warm Nepalese hospitality.",
      highlights: [
        "Comfortable Stay",
        "Local Hospitality",
        "Great Views",
        "Authentic Experience",
      ],
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400",
    }
  );
};
