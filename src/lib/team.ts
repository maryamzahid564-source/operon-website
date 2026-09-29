// Management team profiles. Photos live at
// public/images/photos/team/<slug>.jpg. Designations are added as OME
// confirms them; an empty designation simply isn't rendered.

export type TeamMember = {
  slug: string;
  name: string;
  designation: string;
};

export const teamMembers: TeamMember[] = [
  { slug: "aamir-zahoor", name: "Aamir Zahoor", designation: "" },
  { slug: "bader-iqbal", name: "Bader Iqbal", designation: "" },
  { slug: "boban-thomas", name: "Boban Thomas", designation: "" },
  { slug: "hani-abojendel", name: "Hani Abojendel", designation: "" },
  { slug: "suraya-azhani", name: "Suraya Azhani", designation: "" },
  { slug: "tenzin-doma", name: "Tenzin Doma", designation: "" },
  { slug: "vijeth-dsouza", name: "Vijeth D'souza", designation: "" },
  { slug: "warren-layug", name: "Warren Layug", designation: "" },
];
