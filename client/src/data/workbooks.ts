export interface Workbook {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  duration: string;
  format: string;
  ctaLabel: string;
  ctaHref: string;
}

export const workbooks: Workbook[] = [
  {
    id: "1",
    slug: "staerkungstools",
    title: "20 Stärkungstools",
    tagline: "Impulse, die Dich an Deine eigene Kraft erinnern.",
    description:
      "Für Dich zusammengestellt – als kleine, alltagstaugliche Übungen und Impulse, die Dich stärken, sortieren helfen und zurück in Deine Handlungsfähigkeit führen.",
    bullets: [
      "Kurze Impulse für akute Momente",
      "Tools für mehr innere Ruhe & Klarheit",
      "Alltagstauglich – ohne Druck",
    ],
    duration: "20–30 Minuten (oder in Etappen)",
    format: "PDF / Workbook",
    ctaLabel: "Jetzt anfragen",
    ctaHref: "mailto:lebenswendepunkt13@gmail.com?subject=Workbook%20Anfrage%3A%2020%20St%C3%A4rkungstools",
  },
];
