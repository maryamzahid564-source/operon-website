export type Service = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  capabilities: string[];
  framework?: {
    heading: string;
    intro: string;
    steps: { title: string; body: string }[];
  };
  groupImpact?: {
    heading: string;
    intro: string;
    note: string;
    stats: { value: string; label: string }[];
  };
};

export const services: Service[] = [
  {
    slug: "hard-fm",
    name: "Hard FM",
    tagline: "Keeping the built environment running.",
    summary:
      "MEP, BMS and civil maintenance that keeps critical building systems safe, compliant and running.",
    description:
      "Our Hard FM teams maintain the technical systems that keep a building operating — from HVAC and electrical to fire safety and BMS. Planned preventive maintenance is backed by a responsive on-site team, so faults are caught early and downtime stays low.",
    capabilities: [
      "HVAC repair & maintenance",
      "Electrical repair & maintenance",
      "Plumbing & mechanical pumps maintenance",
      "Fire alarm & fire fighting system maintenance",
      "Generator maintenance",
      "Elevator & escalator maintenance",
      "Gate barrier, access control & roller shutter maintenance",
      "CCTV & BMS maintenance",
      "Central gas system maintenance",
      "Civil, carpentry & masonry repair",
    ],
  },
  {
    slug: "soft-fm",
    name: "Soft FM",
    tagline: "Every day, a well-kept building.",
    summary:
      "Cleaning, security, landscaping and pest control delivered by teams who show up, every day.",
    description:
      "Soft FM is where a facilities partner is judged daily. Our teams handle cleaning, security, landscaping and pest control to a consistent standard, so the buildings we manage look and feel cared for at all times.",
    capabilities: [
      "General cleaning maintenance",
      "External facade & glass cleaning",
      "Waste management",
      "Pest control services",
      "Swimming pool cleaning & maintenance",
      "Water tank cleaning",
      "Landscaping maintenance",
      "Security services",
    ],
  },
  {
    slug: "energy-management",
    name: "Energy Management",
    tagline: "Efficiency built into daily operations.",
    summary:
      "Energy monitoring, retrofit programmes and building certifications that reduce consumption over time.",
    description:
      "We help asset owners understand and reduce energy consumption — through monitoring, retrofit programmes and support toward green building certification. Sustainability is treated as an operating discipline, not a one-off project.",
    capabilities: [
      "Energy monitoring",
      "Energy retrofit programmes",
      "Renewable technologies",
      "Building audits",
      "Green building certification support (LEED, SPIRE, WELL)",
      "Sustainability projects",
    ],
    groupImpact: {
      heading: "Backed by proven group results",
      intro:
        "Operon embeds sustainability into everyday facilities management — helping clients improve energy and water efficiency, reduce waste, optimise asset performance and create healthier built environments, backed by UEM Edgenta's sustainability and engineering expertise.",
      note: "UEM Edgenta Group sustainability achievements. USD value converted from MYR as at July 2026.",
      stats: [
        { value: "USD 13.5M", label: "Energy bill savings" },
        { value: "203M+ kWh", label: "Total electrical savings" },
        { value: "29%+", label: "Reduction in water consumption" },
        { value: "20+", label: "GBI & LEED-certified buildings" },
        { value: "37,200+ tCO₂", label: "Carbon emissions reduced" },
        { value: "Up to 48%", label: "Reduction in electricity consumption" },
      ],
    },
  },
  {
    slug: "technology-solutions",
    name: "Technology Solutions",
    tagline: "Real-time visibility across every building.",
    summary:
      "A CAFM platform, IoT sensors and a command centre give real-time visibility across 300+ buildings.",
    description:
      "Our CAFM platform integrates asset management, maintenance, work orders, inspections, utilities, inventory and sustainability data into a single system — giving our teams and clients real-time visibility across the UAE portfolio, with audit-ready reporting on demand.",
    capabilities: [
      "CAFM platform",
      "Command and Control Centre",
      "IoT sensors & real-time monitoring",
      "Cleaning robotics",
      "Predictive maintenance insights",
      "Audit-ready reporting",
    ],
    framework: {
      heading: "Tech-enabled FM, step by step",
      intro:
        "Operon combines hands-on facilities management expertise with smart building technology to improve how assets are monitored, operated and maintained. Through real-time data, connected systems and AI-driven insights, we support a more proactive approach to FM — helping clients improve reliability, reduce inefficiencies and make better operational decisions.",
      steps: [
        {
          title: "Real-time monitoring",
          body: "Centralised visibility across building operations and asset conditions.",
        },
        {
          title: "Energy optimisation",
          body: "Intelligent control of consumption to support efficiency, cost and sustainability goals.",
        },
        {
          title: "Predictive insights",
          body: "Forward-looking intelligence that helps prevent disruption before it happens.",
        },
        {
          title: "Smarter asset performance",
          body: "Reliable, data-supported asset management for stronger lifecycle performance.",
        },
        {
          title: "Improved comfort and reliability",
          body: "Stable, well-managed environments for tenants, visitors and communities.",
        },
      ],
    },
  },
  {
    slug: "golf-course-management",
    name: "Golf Course Management",
    tagline: "Dependable facilities support for golf & leisure.",
    summary:
      "Full facilities support for golf clubs and leisure destinations — built around guest experience and event readiness.",
    description:
      "We provide integrated facilities management for golf clubs and leisure destinations, including Emirates Golf Club and Topgolf Dubai — covering MEP and HVAC, housekeeping, landscaping and specialist equipment, with the front-of-house support and event-day readiness these venues depend on.",
    capabilities: [
      "MEP & HVAC maintenance",
      "Housekeeping & cleaning",
      "Landscaping maintenance",
      "Specialist equipment maintenance",
      "Front-of-house & guest experience support",
      "Event-day readiness",
    ],
  },
  {
    slug: "consultancy",
    name: "Consultancy",
    tagline: "Strategy before a contract is signed.",
    summary:
      "Advisory on FM strategy, asset audits and fit-out project management for owners and developers.",
    description:
      "Our consultancy practice advises owners and developers on FM strategy, building audits and fit-out project management — informed by the operational experience of running facilities management across the UAE ourselves.",
    capabilities: [
      "FM strategy consultancy",
      "Managing partner consultancy",
      "Asset & engineering consultancy",
      "Building audits",
      "Fit-out project management",
    ],
  },
];

export const stats = [
  { value: "300+", label: "Buildings managed across the UAE" },
  { value: "2008", label: "Established in the UAE" },
  { value: "80+", label: "Years of UEM Edgenta Group experience" },
  { value: "6", label: "Countries in the UEM Edgenta Group" },
];

export const credentials = [
  { name: "MEFMA", detail: "Corporate Member" },
  { name: "BICSc", detail: "Corporate Member" },
  { name: "ISO 9001 · 14001 · 45001", detail: "Bureau Veritas Certification" },
  { name: "ASHRAE", detail: "" },
];

// Descriptors verbatim from the FIRST values lock-up artwork.
export const values = [
  { letter: "F", title: "Future Focused", body: "We prepare for tomorrow's challenges, today." },
  { letter: "I", title: "Imagine New Ways", body: "We imagine new ways to deliver better work." },
  { letter: "R", title: "Respect for All", body: "We treat our colleagues & stakeholders with respect." },
  { letter: "S", title: "Solutioning Mindset", body: "We solve challenges to deliver results." },
  { letter: "T", title: "True to Our Word", body: "We are guided by integrity to build trust." },
];

export const portfolio = [
  "Jumeirah Golf Estate",
  "Topgolf Dubai",
  "Emirates Golf Club Villas",
  "Expo City",
  "Buildings 25 & 49, Dubai Healthcare City",
  "Cubix Residences",
  "Maya 5 Residences",
  "Foxhills",
  "wasl District",
  "Bahia Residence, Liwan 2",
  "wasl Trio",
  "wasl Business Central",
  "wasl Oasis 3",
  "North Heights Apartment, Al Nahda 1",
];

export const clients = [
  "wasl",
  "Emirates Golf Club",
  "Topgolf Dubai",
  "ENBD REIT",
  "Expo City Dubai",
  "Jumeirah Golf Estates",
  "Engineering Office (EO)",
  "KAIZEN",
  "Seddiqi Holding",
  "Brands For Less",
];

export type CaseStudy = {
  slug: string;
  title: string;
  sector: string;
  location: string;
  scope: string[];
  operationalFocus: string[];
  valueDelivered: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "wasl-village",
    title: "WASL Village",
    sector: "Master Communities",
    location: "Dubai",
    scope: ["MEP & HVAC", "Housekeeping", "Landscaping", "Specialist equipment"],
    operationalFocus: [
      "Preventive maintenance",
      "Residence experience",
      "Event readiness",
      "Rapid response",
    ],
    valueDelivered:
      "Consistent operations, reliable asset performance and responsive support across 62 residential buildings and shared community facilities.",
  },
  {
    slug: "emirates-golf-club-topgolf",
    title: "Emirates Golf Club & Topgolf",
    sector: "Leisure & Hospitality",
    location: "Dubai",
    scope: [
      "MEP & HVAC",
      "Housekeeping",
      "Landscaping",
      "Specialist equipment",
      "Front-of-house support",
    ],
    operationalFocus: [
      "Preventive maintenance",
      "Guest experience",
      "Event readiness",
      "Rapid response",
    ],
    valueDelivered:
      "Reliable operations, high presentation standards and seamless support during peak periods and major events.",
  },
  {
    slug: "al-thuraya-tower",
    title: "Al Thuraya Tower",
    sector: "Commercial",
    location: "Dubai",
    scope: [
      "MEP & HVAC",
      "BMS",
      "Elevators",
      "Fire systems",
      "Cleaning",
      "Security",
      "Front-of-house support",
    ],
    operationalFocus: [
      "Preventive maintenance",
      "Asset reliability",
      "Occupant experience",
      "Compliance",
      "Rapid response",
    ],
    valueDelivered:
      "Consistent building performance, well-maintained common areas and responsive operational support across a high-occupancy commercial tower.",
  },
  {
    slug: "abu-dhabi-equestrian-club",
    title: "Abu Dhabi Equestrian Club",
    sector: "Specialised Facilities",
    location: "Abu Dhabi",
    scope: [
      "MEP & HVAC",
      "Cleaning",
      "Landscaping",
      "Pest control",
      "Front-of-house support",
      "Specialist facilities maintenance",
    ],
    operationalFocus: [
      "Asset reliability",
      "Event readiness",
      "Safety and compliance",
      "Guest experience",
      "Rapid response",
    ],
    valueDelivered:
      "Consistent operational support, high presentation standards and dependable facilities performance across equestrian, hospitality and public-facing areas.",
  },
  {
    slug: "berkeley-place-sobha-hartland",
    title: "Berkeley Place, Sobha Hartland",
    sector: "High-end Residence",
    location: "Dubai",
    scope: ["MEP & HVAC", "Housekeeping", "Preventive maintenance", "Common area maintenance"],
    operationalFocus: [
      "Resident experience",
      "Asset reliability",
      "Building presentation",
      "Safety and compliance",
      "Rapid response",
    ],
    valueDelivered:
      "Reliable building operations, immaculate shared spaces and responsive facilities support that preserve the quality, comfort and value of a premium residential development.",
  },
  {
    slug: "brands-for-less",
    title: "Brands For Less",
    sector: "Retail",
    location: "UAE-wide",
    scope: ["MEP & HVAC", "Cleaning", "Lighting"],
    operationalFocus: [
      "Preventive maintenance",
      "Store readiness",
      "Safety and compliance",
      "Customer experience",
      "Rapid response",
    ],
    valueDelivered:
      "Consistent store operations, well-maintained facilities and responsive support that help create a comfortable and reliable shopping environment.",
  },
];
