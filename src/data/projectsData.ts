export interface Project {
  id: string;
  title: string;
  category: "kitchens" | "bathrooms" | "bedrooms" | "media-walls" | "flooring" | "plumbing";
  categoryLabel: string;
  location: string;
  image: string;
  aspect?: "tall" | "wide" | "square";
  description: string;
  scope: string[];
  materials: string[];
  duration: string;
  isFeatured?: boolean;
  isRepresentative?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "claines-kitchen-sanctuary",
    title: "Minimalist Kitchen & Calacatta Island",
    category: "kitchens",
    categoryLabel: "Kitchen Renovation",
    location: "Claines, Worcester",
    image: "/images/hero/luxury-kitchen-hero.jpg",
    aspect: "wide",
    description:
      "A light-filled contemporary kitchen renovation featuring warm natural fluted oak cabinetry, a seamless Calacatta waterfall island, and architectural minimalist pendant lighting.",
    scope: [
      "Removal of outdated partition wall",
      "Full handleless oak cabinetry installation",
      "Calacatta marble waterfall island & undermount sink",
      "Concealed larder and integrated Miele appliances"
    ],
    materials: ["Natural Fluted Oak", "Calacatta Quartz", "Brushed Gunmetal Brassware"],
    duration: "3.5 Weeks",
    isFeatured: true,
    isRepresentative: false
  },
  {
    id: "barbourne-serene-bathroom",
    title: "Warm Minimalist Master Ensuite",
    category: "bathrooms",
    categoryLabel: "Bathroom Renovation",
    location: "Barbourne, Worcester",
    image: "/images/services/bathroom-renovation.jpg",
    aspect: "tall",
    description:
      "A tranquil spa-inspired bathroom transformation showcasing a floating timber vanity unit, backlit circular LED mirror, concealed wall-hung cistern, and smooth microcement wall finishes.",
    scope: [
      "Sub-floor tanking & wetroom floor preparation",
      "Installation of floating custom oak vanity",
      "Concealed thermostatic brassware and wall-hung toilet",
      "Architectural shadow-gap ambient lighting"
    ],
    materials: ["Warm Microcement", "Natural Oak", "Brushed Bronze Brassware"],
    duration: "2 Weeks",
    isFeatured: true,
    isRepresentative: false
  },
  {
    id: "st-johns-bespoke-wardrobes",
    title: "Bespoke Dressing Room & Illuminated Wardrobes",
    category: "bedrooms",
    categoryLabel: "Bedroom Cupboards",
    location: "St John's, Worcester",
    image: "/images/services/bedroom-cupboards.jpg",
    aspect: "wide",
    description:
      "Floor-to-ceiling bespoke smoked bronze glass wardrobes with warm interior LED illumination, tailored dark walnut carcasses, and integrated soft-close organizers.",
    scope: [
      "Millimeter-precise room scribing & structural framework",
      "Floor-to-ceiling smoked glass sliding and hinged fronts",
      "Integrated warm sensor LED lighting profiles",
      "Velvet-lined drawers and shoe display shelving"
    ],
    materials: ["Smoked Bronze Glass", "Dark Walnut Carcass", "Champagne Gold Handles"],
    duration: "1.5 Weeks",
    isFeatured: true,
    isRepresentative: false
  },
  {
    id: "droitwich-media-wall",
    title: "Acoustic Slat Living Room Media Wall",
    category: "media-walls",
    categoryLabel: "Custom Media Walls",
    location: "Droitwich Spa, Worcestershire",
    image: "/images/services/media-walls.jpg",
    aspect: "tall",
    description:
      "An architectural feature wall integrating a 75” recessed OLED display, panoramic 3D electric flame ribbon, acoustic slatted timber cladding, and concealed equipment bays.",
    scope: [
      "Acoustic stud framework construction",
      "Complete cable management with hidden conduit",
      "Installation of panoramic electric fireplace",
      "Recessed floating display alcoves with warm LEDs"
    ],
    materials: ["Smoked Oak Slats", "Matte Charcoal Framing", "Ambient 2700K LED"],
    duration: "4 Days",
    isFeatured: true,
    isRepresentative: true
  },
  {
    id: "malvern-herringbone-flooring",
    title: "European Oak Herringbone Flooring",
    category: "flooring",
    categoryLabel: "Flooring Installation",
    location: "Great Malvern, Worcestershire",
    image: "/images/services/flooring.jpg",
    aspect: "wide",
    description:
      "Continuous European oak herringbone parquet through an open-plan ground floor, finished with solid brass transition thresholds and scribed period skirting.",
    scope: [
      "Subfloor laser-levelling and ply underlayment",
      "Precision double-border herringbone layout",
      "Solid brass doorway transitions",
      "Bespoke skirting replacement and caulking"
    ],
    materials: ["Prime European Oak", "Solid Brass Trims", "Acoustic Underlay"],
    duration: "5 Days",
    isFeatured: true,
    isRepresentative: true
  },
  {
    id: "battenhall-wetroom-plumbing",
    title: "Thermostatic Rainfall Wetroom & Fixtures",
    category: "plumbing",
    categoryLabel: "Plumbing & Installation",
    location: "Battenhall, Worcester",
    image: "/images/services/plumbing.jpg",
    aspect: "tall",
    description:
      "Complete reconfiguration of supply and waste lines to deliver a high-pressure dual-head thermostatic rainfall shower with concealed controls and unvented hot water balance.",
    scope: [
      "Concealed in-wall thermostatic valve housing",
      "High-flow waste drainage channel installation",
      "Re-piping and pressure testing to 6 bar",
      "Fitting designer anthracite vertical radiator"
    ],
    materials: ["Brushed Brass Thermostatic Valves", "Linear Tile-In Drain", "PEX Barrier Pipe"],
    duration: "1 Week",
    isFeatured: false,
    isRepresentative: true
  },
  {
    id: "worcester-scandi-kitchen",
    title: "Warm Shaker Kitchen & Quartz Worktops",
    category: "kitchens",
    categoryLabel: "Kitchen Renovation",
    location: "Northwick, Worcester",
    image: "/images/projects/project-kitchen-1.jpg",
    aspect: "wide",
    description:
      "Timeless warm grey slim-frame shaker cabinetry complemented by polished marble-vein quartz, brass knurled handles, and open timber shelving.",
    scope: [
      "Cabinetry reconfiguration and supply",
      "Quartz worktop templating and CNC installation",
      "Subway tile splashback with contrasting grout",
      "Undermount Belfast sink and boiling water tap"
    ],
    materials: ["Sage/Warm Grey Painted Ash", "Carrara Quartz", "Knurled Brass Hardware"],
    duration: "3 Weeks",
    isFeatured: false,
    isRepresentative: true
  },
  {
    id: "henwick-modern-bathroom",
    title: "Contemporary Monolith Bathroom",
    category: "bathrooms",
    categoryLabel: "Bathroom Renovation",
    location: "Henwick, Worcester",
    image: "/images/projects/project-bathroom-1.jpg",
    aspect: "tall",
    description:
      "Monolithic large-format porcelain tiling with brushed brass fixtures, frameless glass shower screen, and custom illuminated niche.",
    scope: [
      "Complete strip out to bare studwork",
      "Full waterproof tanking system application",
      "1200x600 porcelain wall and floor tiling",
      "Low profile slate shower tray installation"
    ],
    materials: ["Large Format Porcelain", "Brushed Brass Fixtures", "Fluted Glass Screen"],
    duration: "2 Weeks",
    isFeatured: false,
    isRepresentative: true
  }
];

export const beforeAfterComparison = {
  title: "Kitchen Transformation: Before & After",
  subtitle: "Drag the slider to see how RCM Traders Limited transforms outdated spaces into bright, functional luxury.",
  location: "Worcestershire Residence",
  service: "Full Kitchen & Flooring Renovation",
  beforeImage: "/images/projects/before-kitchen.jpg",
  afterImage: "/images/projects/after-kitchen.jpg",
  beforeLabel: "Before Renovation",
  afterLabel: "After RCM Transformation",
  highlights: [
    "Removed dated dark cabinetry and cluttered work surfaces",
    "Installed expansive quartz countertops and flush shaker units",
    "Introduced continuous warm flooring and modern task lighting",
    "Significantly increased practical prep and storage space"
  ]
};

