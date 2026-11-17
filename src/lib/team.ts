// Executive team profiles, in the order supplied by OME (November 2026
// review: Linta immediately after Bader, Tenzin reinstated, the rest in
// the existing sequence). Photos live at
// public/images/photos/team/<slug>.jpg.

export type TeamMember = {
  slug: string;
  name: string;
  designation: string;
};

export const teamMembers: TeamMember[] = [
  { slug: "bader-iqbal", name: "Bader Iqbal", designation: "Chief Executive Officer" },
  { slug: "linta-raju", name: "Linta Raju", designation: "Head of Finance" },
  { slug: "boban-thomas", name: "Boban Thomas", designation: "Director of Strategy & Growth" },
  { slug: "hani-abojendel", name: "Hani Abojendel", designation: "Head of Operations" },
  { slug: "vijeth-dsouza", name: "Vijeth D'Souza", designation: "Head of Commercial Strategy and Growth" },
  { slug: "suraya-azhani", name: "Suraya Azhani Amin", designation: "Head of Marketing and Stakeholder Management" },
  { slug: "tenzin-doma", name: "Tenzin Doma", designation: "Head of Human Resources" },
  { slug: "aamir-zahoor", name: "Aamir Zahoor", designation: "Head of Procurement" },
  { slug: "warren-layug", name: "Warren Layug", designation: "Head of Centre of Excellence" },
];
