export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  headline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  features: string[];
  ctaHeadline: string;
  includedServices: {
    title: string;
    description: string;
  }[];
  whyChoose: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "kitchen-renovation",
    slug: "kitchen-renovation",
    title: "Kitchen Design & Renovation",
    shortTitle: "Kitchen Renovation",
    eyebrow: "CULINARY ARCHITECTURE & LIVING",
    headline: "The Heart of Your Home, Beautifully Reimagined.",
    description:
      "Your kitchen is more than just a place to cook. It's where families gather, conversations begin and everyday memories are made. RCM Traders Limited delivers bespoke, contemporary kitchens designed around modern Worcester living.",
    heroImage: "/images/services/kitchen-renovation.jpg",
    galleryImages: [
      "/images/services/kitchen-renovation.jpg",
      "/images/projects/project-kitchen-1.jpg",
      "/images/projects/after-kitchen.jpg"
    ],
    features: [
      "Kitchen renovation and refurbishment",
      "Kitchen cupboard and cabinet installation",
      "Worktop fitting and replacement",
      "Storage improvements and layout upgrades",
      "Splashback and tiling work",
      "Associated plumbing and finishing work"
    ],
    ctaHeadline: "Let's Create Your Dream Kitchen.",
    includedServices: [
      {
        title: "Full Renovation & Refurbishment",
        description: "From concept stripping to complete rebuilds, we manage every trade with precision and tidiness."
      },
      {
        title: "Cupboard & Cabinet Installation",
        description: "Precision-fitted shaker, handleless, and contemporary cabinetry with soft-close mechanisms and custom organizers."
      },
      {
        title: "Premium Worktops",
        description: "Expert fitting of solid quartz, granite, porcelain, composite, and butcher-block solid timber worktops."
      },
      {
        title: "Smart Storage Solutions",
        description: "Larder pull-outs, corner carousels, integrated recycling, and tall pantry units maximizing every square inch."
      },
      {
        title: "Splashback & Wall Tiling",
        description: "Handcrafted metro, herringbone, large-format porcelain, or mirrored quartz splashbacks."
      },
      {
        title: "Plumbing & Appliance Integration",
        description: "Seamless installation of boiling water taps, undermount sinks, dishwashers, and state-of-the-art hobs."
      }
    ],
    whyChoose: [
      {
        title: "Turnkey Project Management",
        description: "We coordinate joinery, tiling, plumbing, and electrics seamlessly under one point of contact."
      },
      {
        title: "Tailored to Your Cooking & Social Lifestyle",
        description: "Every layout is custom planned for workflow, island seating, and entertaining."
      },
      {
        title: "Exacting Finishes",
        description: "Seamless joints, scribed plinths, and immaculate siliconing reflect our pride in craftsmanship."
      }
    ],
    faqs: [
      {
        question: "How long does a typical kitchen renovation take?",
        answer: "Most complete kitchen renovations take between 2 to 4 weeks depending on cabinetry lead times, worktop templating, and plumbing reconfigurations. We provide a clear schedule before commencing."
      },
      {
        question: "Can you supply appliances and worktops or work with ones I buy?",
        answer: "We offer complete end-to-end supply and installation, but are also happy to install client-supplied appliances, worktops, and fixtures."
      },
      {
        question: "Do you handle the plumbing and electrical work required?",
        answer: "Yes, our comprehensive service includes all associated plumbing adjustments, waste lines, sink and tap installations, and certified connections."
      }
    ]
  },
  {
    id: "bathroom-renovation",
    slug: "bathroom-renovation",
    title: "Bathroom Renovation",
    shortTitle: "Bathroom Renovation",
    eyebrow: "SANCTUARY & WELLNESS SPACES",
    headline: "Everyday Comfort. A Touch of Luxury.",
    description:
      "Turn your bathroom into a space of relaxation, comfort and sophistication. We create hotel-standard master bathrooms, wetrooms, and cloakrooms tailored to your daily rituals.",
    heroImage: "/images/services/bathroom-renovation.jpg",
    galleryImages: [
      "/images/services/bathroom-renovation.jpg",
      "/images/projects/project-bathroom-1.jpg",
      "/images/projects/project-plumbing-1.jpg"
    ],
    features: [
      "Complete bathroom renovations",
      "Modern shower installations",
      "Bathroom furniture and vanity fitting",
      "Wall and floor tiling",
      "Bath, basin and toilet installation",
      "Associated plumbing and finishing work"
    ],
    ctaHeadline: "Transform Your Bathroom.",
    includedServices: [
      {
        title: "Complete Bathroom Renovations",
        description: "Transform tired suites into serene, modern spaces with custom layouts and waterproof tanking."
      },
      {
        title: "Modern Walk-In Showers & Wetrooms",
        description: "Low-profile or flush trays, fluted glass screens, concealed rainfall showers, and recessed shampoo niches."
      },
      {
        title: "Bespoke Vanity Units & Furniture",
        description: "Wall-hung oak or lacquered vanities with countertop basins, integrated illuminated mirrors, and under-cabinet glow."
      },
      {
        title: "Exquisite Wall & Floor Tiling",
        description: "Large format porcelain, marble effect, zellige tiles, and textured stone with waterproof anti-fracture membranes."
      },
      {
        title: "Sanitaryware Installation",
        description: "Concealed cistern toilets, freestanding stone resin baths, and wall-mounted brassware."
      },
      {
        title: "Plumbing & Heating Integration",
        description: "Designer heated towel warmers, underfloor heating coordination, and reliable high-pressure water feeds."
      }
    ],
    whyChoose: [
      {
        title: "Waterproof Tanking Guarantee",
        description: "We use professional sub-tile waterproofing systems to ensure your bathroom stays leak-free forever."
      },
      {
        title: "Attention to Grout Lines & Mitres",
        description: "Tile layout is mathematically centred with mitred or brushed brass edge trims for an architectural finish."
      },
      {
        title: "Clean & Considerate Working",
        description: "We protect your stairs, carpets, and hallway, keeping disruption to an absolute minimum throughout."
      }
    ],
    faqs: [
      {
        question: "Can you convert an old bath into a walk-in shower?",
        answer: "Yes, converting traditional bathtubs into spacious walk-in showers with glass screens and thermostatic showers is one of our most popular renovations."
      },
      {
        question: "Will you leave us with working facilities during the renovation?",
        answer: "In homes with only one bathroom, we sequence the work to ensure toilet facilities remain operational overnight wherever practically possible."
      },
      {
        question: "Do you supply the tiles and sanitaryware?",
        answer: "We can guide you through our recommended supplier trade discounts or work seamlessly with products you select and supply yourself."
      }
    ]
  },
  {
    id: "bedroom-cupboards",
    slug: "bedroom-cupboards",
    title: "Bespoke Bedroom Cupboards",
    shortTitle: "Bedroom Cupboards",
    eyebrow: "TAILORED WARDROBE ARCHITECTURE",
    headline: "Beautiful Storage. Designed Around You.",
    description:
      "Make the most of every inch of your bedroom with bespoke cupboard and wardrobe solutions. From floor-to-ceiling wardrobes to architectural dressing rooms, we blend smart storage with timeless elegance.",
    heroImage: "/images/services/bedroom-cupboards.jpg",
    galleryImages: [
      "/images/services/bedroom-cupboards.jpg",
      "/images/projects/project-wardrobe-1.jpg",
      "/images/about/craftsmanship.jpg"
    ],
    features: [
      "Fitted bedroom cupboards",
      "Bespoke wardrobe solutions",
      "Sliding and hinged door wardrobes",
      "Floor-to-ceiling storage",
      "Internal shelving and drawer arrangements",
      "Custom storage for awkward spaces"
    ],
    ctaHeadline: "Create Your Perfect Bedroom Storage.",
    includedServices: [
      {
        title: "Fitted Bedroom Cupboards",
        description: "Scribed seamlessly to walls and ceilings for a completely custom, flush architectural appearance."
      },
      {
        title: "Bespoke Wardrobes",
        description: "Tailored configurations of hanging rails, pull-out shoe racks, tie dividers, and soft-closing jewelry drawers."
      },
      {
        title: "Sliding & Hinged Door Systems",
        description: "Smooth silent soft-close sliders, bronzed mirror panels, fluted glass, or modern painted shaker doors."
      },
      {
        title: "Floor-to-Ceiling Maximisation",
        description: "Eliminate dust traps by building full height storage designed for seasonal luggage and bulky bedding."
      },
      {
        title: "Custom Internal Organisers",
        description: "Double hanging, deep drawers, adjustable shelving, and integrated low-voltage warm LED lighting."
      },
      {
        title: "Awkward Space Solutions",
        description: "Loft eaves, chimney breast alcoves, sloping ceilings, and bay window under-seat drawers turned into functional beauty."
      }
    ],
    whyChoose: [
      {
        title: "100% Made-to-Measure",
        description: "No off-the-shelf gaps or filler panels; our joinery is built to millimeter accuracy for your room."
      },
      {
        title: "Luxury Finishes & Hardware",
        description: "High-grade Blum hinges, brushed brass handles, and durable melamine or lacquered veneer finishes."
      },
      {
        title: "Enhanced Bedroom Peace",
        description: "A decluttered bedroom creates a peaceful sleep environment with everything thoughtfully organized."
      }
    ],
    faqs: [
      {
        question: "Can you build fitted wardrobes in loft rooms with sloping ceilings?",
        answer: "Absolutely. Sloping ceilings and eaves are our specialty. We scribe every upright and angle to follow the exact pitch of your ceiling."
      },
      {
        question: "What interior wardrobe accessories can be included?",
        answer: "We can incorporate pull-down hanging rails, soft-close drawers, velvet accessory trays, pull-out trousers racks, integrated LED strip lights, and adjustable shoe shelves."
      },
      {
        question: "How long does installation take once manufactured?",
        answer: "On-site fitting of a bespoke bedroom wardrobe typically takes 2 to 4 days, depending on the scale and finish requirements."
      }
    ]
  },
  {
    id: "media-walls",
    slug: "media-walls",
    title: "Custom Media Walls",
    shortTitle: "Media Walls",
    eyebrow: "ENTERTAINMENT & STATEMENT JOINERY",
    headline: "Make Your Living Room Extraordinary.",
    description:
      "A beautifully designed media wall can completely transform the appearance and atmosphere of your living space. We combine recessed screens, ambient lighting, and elegant acoustic panelling into a showstopping centerpiece.",
    heroImage: "/images/services/media-walls.jpg",
    galleryImages: [
      "/images/services/media-walls.jpg",
      "/images/projects/project-media-1.jpg",
      "/images/about/craftsmanship.jpg"
    ],
    features: [
      "Bespoke TV feature walls",
      "Integrated television spaces",
      "Decorative shelving and storage",
      "LED feature lighting",
      "Fireplace integration where suitable",
      "Contemporary finishing and panelling"
    ],
    ctaHeadline: "Design Your Statement Media Wall.",
    includedServices: [
      {
        title: "Bespoke TV Feature Walls",
        description: "Built-in studwork and acoustic structures engineered specifically for your room dimensions and screen size."
      },
      {
        title: "Recessed Screen & Cable Concealment",
        description: "Ultra-flush TV recessing with hidden HDMI conduit, power feeds, soundbar brackets, and gaming console hubs."
      },
      {
        title: "Floating Shelves & Built-in Cupboards",
        description: "Floating oak or painted display alcoves to showcase decorative objects, books, and family treasures."
      },
      {
        title: "Ambient LED Feature Lighting",
        description: "Concealed warm white or dimmable smart LED halo lighting behind TVs, beneath shelves, and along ceiling shadow gaps."
      },
      {
        title: "Electric Fireplace Integration",
        description: "Seamless housings for modern 3D panoramic electric fires, creating warmth and ambiance all year round."
      },
      {
        title: "Acoustic Slatted Panelling",
        description: "Modern walnut, natural oak, or charcoal acoustic slat panelling providing tactile texture and superior room acoustics."
      }
    ],
    whyChoose: [
      {
        title: "Complete Cable & Hardware Concealment",
        description: "No messy hanging wires or black boxes; all electronics are cleanly routed and vented."
      },
      {
        title: "Architectural Proportioning",
        description: "We balance TV height, fireplace width, and alcove depths for comfortable ergonomic viewing."
      },
      {
        title: "Clean, Rapid Turnaround",
        description: "Constructed with clean dry-lining, joinery, and spray/roll finishing with minimal disruption."
      }
    ],
    faqs: [
      {
        question: "Can you integrate my existing sound system and gaming consoles?",
        answer: "Yes, we plan dedicated ventilated compartments with infrared-friendly doors or cable paths to your TV for consoles, soundbars, and subwoofers."
      },
      {
        question: "Do you supply the electric fire as well?",
        answer: "We can recommend and supply compatible panoramic electric fires or build the recess to the exact specifications of the model you purchase."
      },
      {
        question: "How deep does a media wall usually need to be?",
        answer: "Typically a media wall is between 250mm to 350mm deep, which is just enough to recess the TV, fire, and cables without encroaching on living room space."
      }
    ]
  },
  {
    id: "flooring",
    slug: "flooring",
    title: "Flooring Installation",
    shortTitle: "Flooring Installation",
    eyebrow: "TIMELESS SURFACES & FOUNDATIONS",
    headline: "The Foundation of a Beautiful Interior.",
    description:
      "The right flooring can completely change how a room looks and feels. From authentic herringbone parquet to durable luxury vinyl tile, we provide immaculate preparation and expert installation across Worcester.",
    heroImage: "/images/services/flooring.jpg",
    galleryImages: [
      "/images/services/flooring.jpg",
      "/images/projects/project-flooring-1.jpg",
      "/images/projects/after-kitchen.jpg"
    ],
    features: [
      "Laminate flooring",
      "Luxury vinyl flooring (LVT)",
      "Engineered wood flooring",
      "Herringbone-style flooring",
      "Floor tiling",
      "Flooring replacement and preparation"
    ],
    ctaHeadline: "Refresh Your Floors.",
    includedServices: [
      {
        title: "Herringbone & Chevron Parquet",
        description: "Classic European herringbone designs laid with precision borders, brass transition thresholds, and exquisite symmetry."
      },
      {
        title: "Luxury Vinyl Flooring (LVT)",
        description: "Waterproof, warm, and highly resilient click or glue-down LVT ideal for busy kitchens, hallways, and open-plan living."
      },
      {
        title: "Engineered Hardwood",
        description: "Authentic real wood veneer tops with multi-layer stability suitable for modern underfloor heating systems."
      },
      {
        title: "Premium Laminate Systems",
        description: "Scratch-resistant, realistic embossed-grain laminates offering fantastic aesthetics and durability."
      },
      {
        title: "Large-Format Floor Tiling",
        description: "Porcelain and stone tiling with level lippage clips, expansion joints, and stain-resistant epoxy grouts."
      },
      {
        title: "Subfloor Preparation & Screeding",
        description: "Self-levelling compound, plyboarding, damp proof membranes (DPM), and door trimming for an enduring, squeak-free finish."
      }
    ],
    whyChoose: [
      {
        title: "Laser-Level Subfloor Preparation",
        description: "Flooring only looks as good as the subfloor underneath; we ensure flawless flat surfaces before laying a single plank."
      },
      {
        title: "Flawless Skirting & Threshold Detailing",
        description: "We undercut architraves, remove/replace skirtings, and use sleek brass or bronze trim instead of clumsy beading."
      },
      {
        title: "Hard-Wearing Craftsmanship",
        description: "Carefully planned expansion gaps and professional adhesives guarantee lasting durability against season shifts."
      }
    ],
    faqs: [
      {
        question: "Is herringbone flooring suitable for hallways and open kitchens?",
        answer: "Yes! High-grade LVT or engineered herringbone is waterproof and exceptionally durable, making it an ideal choice for high-traffic zones."
      },
      {
        question: "Do you remove old carpet, tiles, or floorboards?",
        answer: "Yes, our team handles complete uplift and responsible disposal of old flooring, followed by full subfloor preparation."
      },
      {
        question: "Can you install underfloor heating beneath the new floor?",
        answer: "We work with compatible low-profile electric or hydronic underfloor heating systems and specify appropriate thermal underlays and screeds."
      }
    ]
  },
  {
    id: "plumbing",
    slug: "plumbing",
    title: "Plumbing & Installation",
    shortTitle: "Plumbing & Installation",
    eyebrow: "PRECISION PIPEWORK & FIXTURES",
    headline: "Reliable Solutions for Your Home Improvements.",
    description:
      "Good plumbing and installation work are essential to a successful kitchen or bathroom renovation. RCM Traders Limited delivers clean, compliant, and dependable plumbing tailored to your renovation goals.",
    heroImage: "/images/services/plumbing.jpg",
    galleryImages: [
      "/images/services/plumbing.jpg",
      "/images/projects/project-plumbing-1.jpg",
      "/images/services/bathroom-renovation.jpg"
    ],
    features: [
      "Kitchen sink and tap installation",
      "Bathroom fixture installation",
      "Plumbing modifications associated with renovations",
      "Pipework adjustments",
      "Replacement of selected fittings",
      "General installation and finishing support"
    ],
    ctaHeadline: "Discuss Your Plumbing Requirements.",
    includedServices: [
      {
        title: "Kitchen Sink & Hot Tap Installation",
        description: "Fitting undermount composite and stainless sinks, instant boiling water taps, waste disposal units, and filter systems."
      },
      {
        title: "Bathroom Fixture Installation",
        description: "Thermostatic shower valves, rainfall heads, wall-mounted basin taps, freestanding bath mixers, and back-to-wall WCs."
      },
      {
        title: "Renovation Plumbing Modifications",
        description: "Relocating waste pipes, extending hot/cold supply lines, and chasing pipework cleanly into walls for concealed styling."
      },
      {
        title: "Radiator & Heated Towel Rails",
        description: "Installing designer vertical anthracite radiators, dual-fuel heated towel warmers, and thermostatic radiator valves (TRVs)."
      },
      {
        title: "Appliance Plumbing Connections",
        description: "Dedicated water feeds and waste outlets for American fridge-freezers with ice makers, washing machines, and dishwashers."
      },
      {
        title: "Leak Prevention & Finishing Integrity",
        description: "Quality isolation valves, non-return check valves, pressure regulation, and precision silicone sealing."
      }
    ],
    whyChoose: [
      {
        title: "Integral to Renovation Projects",
        description: "Because our plumbing service is directly aligned with our joinery and tiling, there are no delays or finger-pointing."
      },
      {
        title: "Concealed, Neat Pipework",
        description: "We take pride in clean routing, secure clipping, and testing under full system pressure before closing walls."
      },
      {
        title: "High-Quality Brassware & Fittings",
        description: "We install premium fittings built to withstand hard water and provide trouble-free operation."
      }
    ],
    faqs: [
      {
        question: "Can you relocate the sink or toilet to a different wall?",
        answer: "In most cases, yes. We evaluate soil stack positions and waste fall gradients to reconfigure layouts efficiently."
      },
      {
        question: "Do you install boiling water taps like Quooker?",
        answer: "Yes, we regularly install boiling and sparkling water tap systems, ensuring adequate under-sink ventilation and power/water supply."
      },
      {
        question: "Is your plumbing work tested and guaranteed?",
        answer: "Every installation undergoes thorough pressure and drainage testing, with all workmanship fully guaranteed."
      }
    ]
  }
];

export const getServiceBySlug = (slug: string) => {
  return servicesData.find((service) => service.slug === slug);
};

