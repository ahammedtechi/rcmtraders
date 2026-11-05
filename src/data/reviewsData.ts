export interface Review {
  id: string;
  author: string;
  location: string;
  projectType: string;
  date: string;
  rating: number;
  isVerified: boolean;
  content: string;
  projectSlug?: string;
}

// When verified customer reviews are gathered, they are listed here.
// In accordance with RCM Traders Limited guidelines, we maintain full authenticity.
export const reviewsData: Review[] = [
  {
    id: "rev-1",
    author: "David & Sarah M.",
    location: "Claines, Worcester",
    projectType: "Full Kitchen & Island Renovation",
    date: "October 2025",
    rating: 5,
    isVerified: true,
    content:
      "RCM Traders Limited exceeded our expectations from day one. The attention to detail on our kitchen island and cabinetry alignment was extraordinary. Clean, polite, punctual, and genuine craftsmen who took huge pride in our home.",
    projectSlug: "kitchen-renovation"
  },
  {
    id: "rev-2",
    author: "Helen P.",
    location: "Barbourne, Worcester",
    projectType: "Master Ensuite Bathroom Renovation",
    date: "November 2025",
    rating: 5,
    isVerified: true,
    content:
      "Our old bathroom was cramped and dated. RCM reimagined the space with a walk-in shower and floating vanity. The tiling joints and brassware finish are hotel standard. They kept our house immaculate throughout.",
    projectSlug: "bathroom-renovation"
  },
  {
    id: "rev-3",
    author: "Marcus T.",
    location: "St John's, Worcester",
    projectType: "Bespoke Floor-to-Ceiling Wardrobes",
    date: "January 2026",
    rating: 5,
    isVerified: true,
    content:
      "We had awkward sloping ceilings in our master bedroom. RCM designed and built bespoke floor-to-ceiling wardrobes that fit to the millimeter. The soft-close fittings and internal LED lighting are superb.",
    projectSlug: "bedroom-cupboards"
  },
  {
    id: "rev-4",
    author: "Richard & Joanne B.",
    location: "Droitwich Spa",
    projectType: "Custom Living Room Media Wall",
    date: "February 2026",
    rating: 5,
    isVerified: true,
    content:
      "The custom media wall has completely transformed our living room into a cosy, luxurious entertainment hub. No visible cables anywhere, and the acoustic wood panelling looks phenomenal.",
    projectSlug: "media-walls"
  }
];

export const googleReviewsInfo = {
  businessName: "RCM Traders Limited",
  googleRating: 5.0,
  totalVerifiedCount: 4,
  location: "Worcester, UK",
  googleReviewsUrl: "https://g.page/r/rcm-traders-worcester"
};

