// Executive team profiles, in the order supplied by OME (November 2026,
// incl. the follow-up correction placing Linta Raju before Suraya).
// Photos live at public/images/photos/team/<slug>.jpg; a member without a
// photo renders as a placeholder tile until it arrives.
// Note: Tenzin Doma was not in the client's latest sequence and is
// therefore not listed.

export type TeamMember = {
  slug: string;
  name: string;
  designation: string;
};

export const teamMembers: TeamMember[] = [
  { slug: "bader-iqbal", name: "Bader Iqbal", designation: "Chief Executive Officer" },
  { slug: "boban-thomas", name: "Boban Thomas", designation: "Director of Strategy & Growth" },
  { slug: "hani-abojendel", name: "Hani Abojendel", designation: "Head of Operations" },
  { slug: "vijeth-dsouza", name: "Vijeth D'Souza", designation: "Head of Commercial Strategy and Growth" },
  { slug: "linta-raju", name: "Linta Raju", designation: "Head of Finance" },
  { slug: "suraya-azhani", name: "Suraya Azhani Amin", designation: "Head of Marketing and Stakeholder Management" },
  { slug: "aamir-zahoor", name: "Aamir Zahoor", designation: "Head of Procurement" },
  { slug: "warren-layug", name: "Warren Layug", designation: "Head of Centre of Excellence" },
];
