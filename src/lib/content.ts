export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  description: string;
  capabilities: string[];
  image: string;
};

export const services: Service[] = [
  {
    slug: "hard-fm",
    name: "Hard FM",
    shortName: "Hard FM",
    tagline: "The built environment, engineered to perform",
    summary:
      "Mechanical, electrical and structural maintenance that protects the value of every asset in your portfolio.",
    description:
      "Our Hard FM teams manage the technical backbone of your assets — MEP systems, building fabric, life safety and critical infrastructure — with a planned maintenance discipline built for the demands of Dubai's climate and regulatory environment. We combine in-house engineering talent with statutory compliance rigor, so uptime and safety are never left to chance.",
    capabilities: [
      "Planned & reactive MEP maintenance",
      "Building fabric & civil works",
      "Fire & life safety systems",
      "Critical infrastructure & BMS",
      "Statutory compliance & inspections",
      "24/7 helpdesk & emergency response",
    ],
    image: "/images/hard-fm.jpg",
  },
  {
    slug: "soft-fm",
    name: "Soft FM",
    shortName: "Soft FM",
    tagline: "Every day, an exceptional experience",
    summary:
      "Cleaning, security, front-of-house and landscaping delivered with a service standard your occupants notice.",
    description:
      "Soft FM is where a facilities partner is judged every single day. We deliver cleaning, security, concierge, landscaping and pest control programs built around measurable service levels — so the experience of a building matches the ambition behind it.",
    capabilities: [
      "Cleaning & hygiene services",
      "Manned security & access control",
      "Concierge & front-of-house",
      "Landscaping & horticulture",
      "Pest management",
      "Waste management",
    ],
    image: "/images/soft-fm.jpg",
  },
  {
    slug: "energy-management",
    name: "Energy Management",
    shortName: "Energy",
    tagline: "Efficiency as a discipline, not an initiative",
    summary:
      "Metering, audits and retrofit programs that cut consumption and carbon across your portfolio.",
    description:
      "We treat energy as a managed asset. From metering and audits to retrofit and renewable integration, our energy management practice identifies where consumption, cost and carbon can be reduced — and delivers the program to capture it, backed by measurement and verification you can report on.",
    capabilities: [
      "Energy audits & benchmarking",
      "Retrofit & optimisation programs",
      "Sub-metering & monitoring",
      "Sustainability & ESG reporting",
      "Renewables integration",
      "Utility & tariff management",
    ],
    image: "/images/energy.jpg",
  },
  {
    slug: "technology-solutions",
    name: "Technology Solutions",
    shortName: "Technology",
    tagline: "Data that runs the building for you",
    summary:
      "CAFM, IoT sensors and smart building platforms that turn facilities data into decisions.",
    description:
      "Our technology practice deploys the CAFM, IoT and smart building platforms that give asset owners real-time visibility and control. Sensors, dashboards and automation reduce manual overhead and surface the insight that keeps a portfolio running ahead of problems, not behind them.",
    capabilities: [
      "CAFM & work order platforms",
      "IoT sensors & smart monitoring",
      "Building management system integration",
      "Data analytics & reporting dashboards",
      "Mobile workforce applications",
      "Predictive maintenance tools",
    ],
    image: "/images/technology.jpg",
  },
  {
    slug: "golf-course-management",
    name: "Golf Course Management",
    shortName: "Golf Course",
    tagline: "Championship conditions, year-round",
    summary:
      "Agronomy, irrigation and turf management for golf courses that demand a world-class standard.",
    description:
      "Golf course management in the region's climate is a specialist discipline. Our agronomy and turf teams manage irrigation, course maintenance and playing surface quality to championship standards, protecting one of the most visible and scrutinised assets a developer or club can own.",
    capabilities: [
      "Agronomy & turf management",
      "Irrigation system management",
      "Course maintenance programs",
      "Water resource management",
      "Landscape & ecology management",
      "Tournament-standard presentation",
    ],
    image: "/images/golf.jpg",
  },
  {
    slug: "consultancy",
    name: "Consultancy",
    shortName: "Consultancy",
    tagline: "Strategy before you sign a single contract",
    summary:
      "Advisory on FM strategy, transition and asset lifecycle planning for owners and developers.",
    description:
      "Before a single service contract is signed, the right FM strategy determines the lifetime cost of an asset. Our consultancy practice advises developers, owners and operators on FM readiness, transition planning, service specification and lifecycle asset strategy — informed by managing over 100 assets ourselves.",
    capabilities: [
      "FM strategy & transition planning",
      "Asset lifecycle & capital planning",
      "Service specification & procurement support",
      "Operational readiness & handover",
      "Benchmarking & performance audits",
      "Contract & vendor management advisory",
    ],
    image: "/images/consultancy.jpg",
  },
];

export const stats = [
  { value: "100+", label: "Managed assets across the UAE" },
  { value: "80+", label: "Years of group experience" },
  { value: "2008", label: "Operating in the UAE since" },
  { value: "24/7", label: "Helpdesk & emergency response" },
];

export const awards = [
  { name: "MEFMA Award", detail: "Facilities Management Excellence" },
  { name: "Great Place to Work", detail: "Certified, UAE" },
  { name: "ISO 9001 / 14001 / 45001", detail: "Integrated Management System" },
  { name: "RoSPA", detail: "Health & Safety Achievement" },
];

export const caseStudies = [
  {
    slug: "premium-residential-tower",
    title: "Integrated FM for a premium residential tower",
    sector: "Residential",
    location: "Dubai Marina",
    summary:
      "Full Hard & Soft FM mobilisation for a landmark residential tower, achieving a 98% helpdesk SLA within the first quarter.",
    services: ["Hard FM", "Soft FM"],
  },
  {
    slug: "mixed-use-retail-destination",
    title: "Energy retrofit for a mixed-use retail destination",
    sector: "Retail",
    location: "Downtown Dubai",
    summary:
      "A portfolio-wide energy audit and retrofit programme delivering a 22% reduction in utility consumption.",
    services: ["Energy Management", "Technology Solutions"],
  },
  {
    slug: "championship-golf-resort",
    title: "Agronomy programme for a championship golf resort",
    sector: "Leisure",
    location: "Dubai",
    summary:
      "Year-round turf and irrigation management maintaining tournament-standard playing conditions.",
    services: ["Golf Course Management"],
  },
  {
    slug: "corporate-headquarters-campus",
    title: "Smart building transition for a corporate campus",
    sector: "Commercial",
    location: "Business Bay",
    summary:
      "CAFM and IoT deployment giving facilities leadership real-time visibility across a multi-building campus.",
    services: ["Technology Solutions", "Consultancy"],
  },
  {
    slug: "master-planned-community",
    title: "FM strategy for a master-planned community",
    sector: "Community",
    location: "Dubai South",
    summary:
      "Advisory on operational readiness and service specification ahead of a phased community handover.",
    services: ["Consultancy"],
  },
  {
    slug: "healthcare-facility-hard-fm",
    title: "Critical infrastructure support for a healthcare facility",
    sector: "Healthcare",
    location: "Abu Dhabi",
    summary:
      "24/7 critical systems maintenance and statutory compliance for a live, fully operational hospital site.",
    services: ["Hard FM"],
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];
