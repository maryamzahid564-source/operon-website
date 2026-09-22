// All content sourced from the client's Revised OME Website document
// (September 2026), lightly edited for layout. No invented claims.

export type Service = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  paragraphs: string[];
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "integrated-facilities-management",
    name: "Integrated Facilities Management",
    headline: "One team. One standard. One point of accountability.",
    summary:
      "End-to-end facilities management, bringing people, processes and services together under one accountable team.",
    paragraphs: [
      "Integrated facilities management is about more than bringing services under one contract. It is about making them work together.",
      "Operon brings technical services, soft services, people, processes and technology into one coordinated operation — giving our clients clearer oversight, consistent standards and greater control across their facilities.",
      "From day-to-day service delivery to performance monitoring and reporting, our teams manage the details behind the scenes so our clients can focus on what matters to their business.",
    ],
    capabilities: [
      "Hard and technical services",
      "Soft services",
      "Planned and reactive maintenance",
      "CAFM and work order management",
      "Asset and performance monitoring",
      "Helpdesk and service coordination",
      "HSE and compliance",
      "Performance reporting",
    ],
  },
  {
    slug: "engineering-technical-services",
    name: "Engineering & Technical Services",
    headline: "Engineering that keeps everything moving.",
    summary:
      "HVAC, electrical, mechanical, plumbing, BMS, fire systems and specialist maintenance that keep assets performing reliably.",
    paragraphs: [
      "Behind every well-performing building is a technical operation that works quietly, reliably and consistently.",
      "Operon provides engineering and technical services across critical building systems, combining planned maintenance, responsive support and technical expertise to protect asset performance and minimise disruption.",
      "Our teams focus not only on fixing issues when they happen, but on maintaining systems properly and identifying problems before they affect operations.",
    ],
    capabilities: [
      "HVAC",
      "Electrical systems",
      "Plumbing",
      "Mechanical pumps",
      "Fire alarm and firefighting systems",
      "Generators",
      "Elevators and escalators",
      "BMS",
      "Access control and gate barriers",
      "CCTV",
      "Gas systems",
      "Civil, carpentry and masonry works",
    ],
  },
  {
    slug: "soft-services",
    name: "Soft Services",
    headline: "The details people notice. The standards they remember.",
    summary:
      "Cleaning, housekeeping, landscaping, waste management, pest control and other essential services that keep environments safe and well presented.",
    paragraphs: [
      "A well-managed environment should not only work well. It should feel well cared for.",
      "Operon delivers soft services that help keep facilities clean, safe, comfortable and presentable every day. Our teams work across different environments and operating requirements, with service standards built around the people who use each space.",
      "From everyday cleaning to specialist services, we focus on consistency, attention to detail and dependable delivery.",
    ],
    capabilities: [
      "Cleaning and housekeeping",
      "Façade and glass cleaning",
      "Waste management",
      "Pest control",
      "Landscaping",
      "Swimming pool services",
      "Water tank cleaning",
      "Security services",
    ],
  },
  {
    slug: "smart-fm-technology",
    name: "Smart FM & Technology",
    headline: "Better visibility. Better decisions. Better performance.",
    summary:
      "CAFM, real-time monitoring, connected systems and data-led insights that enable more proactive and efficient operations.",
    paragraphs: [
      "Technology works best when it makes operations simpler, faster and more informed.",
      "Operon uses CAFM, connected systems, real-time monitoring and operational data to give our teams and clients better visibility across facilities and assets.",
      "By bringing information together, we can track work orders, monitor performance, identify trends and move from reactive maintenance towards more proactive, data-led operations.",
    ],
    capabilities: [
      "CAFM",
      "Work order management",
      "Asset management",
      "Real-time monitoring",
      "Inspections and maintenance tracking",
      "Utility monitoring",
      "Inventory management",
      "IoT-enabled solutions",
      "Operational dashboards and reporting",
      "Predictive insights",
    ],
  },
  {
    slug: "sustainability-energy-management",
    name: "Sustainability & Energy Management",
    headline: "Better performance with less impact.",
    summary:
      "Practical solutions focused on energy and water efficiency, waste reduction and stronger long-term asset performance.",
    paragraphs: [
      "For us, sustainability starts with how facilities are operated every day.",
      "Operon helps clients identify practical opportunities to improve energy and water efficiency, reduce waste and use resources more effectively — while maintaining the performance, comfort and reliability their facilities require.",
      "By combining operational knowledge, technology and performance data, we support smarter decisions that can deliver both environmental and operational value over the life of an asset.",
    ],
    capabilities: [
      "Energy monitoring",
      "Water efficiency",
      "Waste reduction",
      "Energy optimisation",
      "Performance analysis",
      "Energy retrofit support",
      "Resource efficiency",
      "Sustainability data and reporting",
    ],
  },
  {
    slug: "projects-asset-solutions",
    name: "Projects & Asset Solutions",
    headline: "Beyond day-to-day FM.",
    summary:
      "Fit-out works, building audits, FM consultancy, energy retrofit and asset and engineering consultancy.",
    paragraphs: [
      "Some assets need more than ongoing facilities management. They need specialist advice, improvement works and a clear understanding of how the asset is performing.",
      "Operon supports clients with project, consultancy and asset solutions designed to improve buildings, strengthen operations and support better long-term decisions.",
      "From fit-out and technical audits to energy retrofit and engineering consultancy, our teams bring practical operational experience into every project.",
    ],
    capabilities: [
      "Fit-out works",
      "Building and FM audits",
      "FM consultancy",
      "Managing partner consultancy",
      "Energy retrofit",
      "Renewable technology solutions",
      "Asset and engineering consultancy",
      "Building certification support, including LEED, SPIRE and WELL",
    ],
  },
];

export type Environment = {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  paragraphs: string[];
  focus: string[];
};

// "Where our work comes to life" — six environments, no client or
// project names anywhere.
export const environments: Environment[] = [
  {
    slug: "master-communities",
    name: "Master Communities",
    headline: "Keeping communities moving, every day.",
    summary:
      "Supporting large-scale communities with integrated facilities management that keeps everyday life running smoothly.",
    paragraphs: [
      "Managing a community means looking after more than buildings. It means supporting the places people call home, the shared spaces they use and the infrastructure they rely on every day.",
      "Operon brings together technical, soft and support services across large-scale communities, coordinating multiple assets and service requirements through one integrated operation.",
      "From planned maintenance and everyday service requests to common areas and community facilities, our teams work behind the scenes to keep everything running smoothly.",
    ],
    focus: [
      "Asset reliability",
      "Resident experience",
      "Common areas",
      "Community facilities",
      "Planned and reactive maintenance",
      "Service coordination",
      "HSE and compliance",
      "Consistent standards across multiple assets",
    ],
  },
  {
    slug: "residential",
    name: "Residential",
    headline: "Because home should simply work.",
    summary:
      "Creating safe, comfortable and well-maintained environments for residents and communities.",
    paragraphs: [
      "Residential facilities management is experienced differently. When something isn't working, residents notice.",
      "Operon supports residential buildings and developments with reliable day-to-day facilities management focused on safety, comfort and the quality of the living environment.",
      "Our teams take care of the details behind the scenes — from building systems and maintenance to cleanliness and shared spaces — helping create places residents can rely on every day.",
    ],
    focus: [
      "Resident comfort",
      "Building maintenance",
      "Common areas",
      "Cleaning and presentation",
      "MEP systems",
      "Planned and reactive maintenance",
      "Safety and compliance",
      "Service response",
    ],
  },
  {
    slug: "commercial",
    name: "Commercial",
    headline: "Keeping business moving.",
    summary:
      "Keeping workplaces and commercial assets reliable, efficient and ready for business.",
    paragraphs: [
      "Commercial environments need to perform without getting in the way of the people and businesses using them.",
      "Operon manages the systems, services and everyday requirements that keep commercial assets safe, reliable and ready for business.",
      "From engineering and preventive maintenance to cleaning and technology-enabled monitoring, our teams work around operational needs to minimise disruption and support consistent building performance.",
    ],
    focus: [
      "Business continuity",
      "Asset performance",
      "Workplace environment",
      "Preventive maintenance",
      "MEP systems",
      "Cleaning and presentation",
      "Energy efficiency",
      "HSE and compliance",
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    headline: "Ready before the doors open. Performing long after they do.",
    summary:
      "Supporting customer-facing environments with responsive maintenance and consistent operational standards.",
    paragraphs: [
      "Retail environments are always on show. Cleanliness, comfort, safety and reliability all contribute to the experience of every customer who walks through the door.",
      "Operon supports customer-facing environments with responsive facilities management designed around operating hours, footfall and the demands of day-to-day retail operations.",
      "Our teams work behind the scenes so the environment in front of the customer remains safe, comfortable and ready.",
    ],
    focus: [
      "Customer experience",
      "Operational readiness",
      "Cleaning and presentation",
      "MEP reliability",
      "Responsive maintenance",
      "High-footfall areas",
      "Safety and compliance",
      "Service continuity",
    ],
  },
  {
    slug: "hospitality-leisure",
    name: "Hospitality & Leisure",
    headline: "The experience happens out front. We make it work behind the scenes.",
    summary:
      "Keeping high-footfall leisure and lifestyle destinations safe, presentable and guest-ready.",
    paragraphs: [
      "In hospitality and leisure environments, facilities management is part of the guest experience — even when guests never see it.",
      "Operon supports high-footfall leisure and lifestyle destinations where presentation, comfort, reliability and operational readiness matter every day.",
      "Our teams work around guest activity and operating schedules, maintaining the systems and spaces behind the experience while minimising disruption to the people enjoying it.",
    ],
    focus: [
      "Guest experience",
      "Operational readiness",
      "Asset reliability",
      "Presentation standards",
      "High-footfall environments",
      "Planned and reactive maintenance",
      "Event support",
      "Safety and compliance",
    ],
  },
  {
    slug: "specialised-facilities",
    name: "Specialised Facilities",
    headline: "Different environments demand different thinking.",
    summary:
      "Managing complex environments that demand specialist expertise, operational readiness and high standards of care.",
    paragraphs: [
      "Not every facility can be managed the same way.",
      "Specialised environments can bring more complex assets, operating requirements and service expectations. Operon adapts its delivery model around the facility, combining technical expertise, operational planning and appropriate controls to support safe and reliable operations.",
      "The approach starts with understanding the environment — then building the people, processes and services around what it actually needs.",
    ],
    focus: [
      "Specialist operational requirements",
      "Complex assets and systems",
      "Technical expertise",
      "Operational readiness",
      "Risk and compliance",
      "Planned maintenance",
      "Service coordination",
      "Tailored delivery models",
    ],
  },
];

// Operon-specific key numbers only — no group-level metrics here.
// A fourth figure is TBC from the client.
export const stats = [
  { value: "2008", label: "Established in the UAE" },
  { value: "17+", label: "Years of local FM experience" },
  { value: "300+", label: "Buildings managed across the UAE" },
];

export const credentials = [
  { name: "MEFMA", detail: "Corporate Member" },
  { name: "BICSc", detail: "Corporate Member" },
  { name: "ISO 9001 · 14001 · 45001", detail: "Bureau Veritas Certification" },
  { name: "ASHRAE", detail: "" },
];

// Smart & Sustainable — Operon's own capabilities; no group statistics.
export const smartSustainable = {
  headline: "Smarter operations. Better-performing assets.",
  paragraphs: [
    "Operon combines hands-on facilities management with technology and data to improve how buildings are monitored, maintained and operated.",
    "From real-time visibility and predictive insights to energy optimisation and resource efficiency, we help our clients make better operational decisions and build more resilient, sustainable environments.",
  ],
  points: [
    { title: "Real-Time Monitoring", body: "Better visibility across assets and operations." },
    { title: "Predictive Maintenance", body: "Using data to identify issues before they become disruptions." },
    { title: "Energy & Resource Efficiency", body: "Supporting more efficient use of energy, water and resources." },
    { title: "Smarter Asset Performance", body: "Data-led decisions that support reliability and long-term asset value." },
  ],
};

// About Operon — official copy.
export const about = {
  headline: "Built on trust. Delivered with purpose.",
  paragraphs: [
    "Operon Middle East is a UAE-based integrated facilities management company built around one simple idea: places perform better when the people behind them do.",
    "Our teams are on the ground every day, taking care of the environments people live in, work in and experience — from residential communities and commercial assets to complex, specialised facilities. We bring together people, engineering and technology to keep them running safely, efficiently and reliably.",
  ],
  global:
    "Local where it matters. Global where it counts. As part of UEM Edgenta, we combine deep knowledge of the UAE market with international expertise, engineering capability and strong governance.",
  mission:
    "To keep the UAE's built environment working at its best — through people who care, standards that matter and delivery our clients can depend on every day.",
  vision:
    "Setting the regional standard for facilities management. Locally driven. Globally supported.",
};

// UEM Edgenta Group figures as at 31 December 2024 — verbatim from the deck.
export const groupStats = [
  { value: "17,000+", label: "Employees worldwide" },
  { value: "USD 683M", label: "Total assets" },
  { value: "USD 660M", label: "Group revenue" },
  { value: "80+", label: "Years of group experience" },
];
export const groupStatsNote = "UEM Edgenta Group figures as at 31 December 2024.";

// Descriptors verbatim from the FIRST values lock-up artwork.
export const values = [
  { letter: "F", title: "Future Focused", body: "We prepare for tomorrow's challenges, today." },
  { letter: "I", title: "Imagine New Ways", body: "We imagine new ways to deliver better work." },
  { letter: "R", title: "Respect for All", body: "We treat our colleagues & stakeholders with respect." },
  { letter: "S", title: "Solutioning Mindset", body: "We solve challenges to deliver results." },
  { letter: "T", title: "True to Our Word", body: "We are guided by integrity to build trust." },
];

export const team = {
  headline: "The people behind the performance.",
  intro:
    "Behind every well-run operation is a team that makes it happen. Meet the people leading Operon and supporting our teams across the UAE.",
};

export const careersIntro = {
  headline: "Be part of what we're building.",
  intro:
    "We're always looking for people who take pride in what they do and want to grow with us. Explore our current opportunities and find your place at Operon.",
};

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
