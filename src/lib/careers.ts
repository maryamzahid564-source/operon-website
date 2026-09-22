// Current vacancies. HR edits this list — each entry appears on the
// Careers page until its closing date passes, after which it is hidden
// automatically (no code change or redeploy of content needed beyond
// editing this file; see README for the HR workflow).

export type Vacancy = {
  id: string;
  title: string;
  location: string;
  department: string;
  details: string;
  closingDate: string; // ISO date, e.g. "2026-10-31"
};

export const vacancies: Vacancy[] = [
  // Example entry — replace with live roles from HR:
  // {
  //   id: "mep-technician-2026-10",
  //   title: "MEP Technician",
  //   location: "Dubai",
  //   department: "Engineering & Technical Services",
  //   details: "Planned and reactive maintenance across a residential portfolio.",
  //   closingDate: "2026-10-31",
  // },
];

export function isOpen(v: Vacancy, now = new Date()): boolean {
  const closing = new Date(v.closingDate + "T23:59:59");
  return !Number.isNaN(closing.getTime()) && closing >= now;
}
