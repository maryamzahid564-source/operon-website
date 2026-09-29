// Management team profiles, in the order supplied by OME. Photos live at
// public/images/photos/team/<slug>.jpg; a member without a photo renders
// as a placeholder tile until it arrives.

export type TeamMember = {
  slug: string;
  name: string;
  designation: string;
};

export const teamMembers: TeamMember[] = [
  { slug: "bader-iqbal", name: "Bader Iqbal", designation: "Chief Executive Officer" },
  { slug: "boban-thomas", name: "Boban Thomas", designation: "Director of Strategy & Growth" },
  { slug: "hani-abojendel", name: "Hani Abojendel", designation: "Head of Operations" },
  { slug: "vijeth-dsouza", name: "Vijeth D'Souza", designation: "Head of Business Development" },
  { slug: "linta-raju", name: "Linta Raju", designation: "Head of Finance" },
  { slug: "tenzin-doma", name: "Tenzin Doma", designation: "Head of Human Resources" },
  { slug: "aamir-zahoor", name: "Aamir Zahoor", designation: "Head of Procurement" },
  { slug: "warren-layug", name: "Warren Layug", designation: "Head of Centre of Excellence" },
  { slug: "suraya-azhani", name: "Suraya Azhani Amin", designation: "Head of Marketing and Communications" },
];
