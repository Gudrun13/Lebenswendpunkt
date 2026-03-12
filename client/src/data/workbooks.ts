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
    ctaLabel: "Zum Newsletter anmelden",
    ctaHref: "/newsletter",
  },
  {
    id: "2",
    slug: "vom-ich-zum-wir",
    title: "Vom Ich zum Wir",
    tagline: "Beziehung bewusst, stabil und liebevoll gestalten.",
    description:
      "Dieses Workbook begleitet Dich dabei, Deine Beziehung von Anfang an bewusst zu gestalten. Es eröffnet einen geschützten Raum zur Reflexion, zum Austausch und zur persönlichen Entwicklung – für Dich allein oder gemeinsam.",
    bullets: [
      "Beziehung beginnt im Inneren",
      "Kommunikation, die Nähe schafft",
      "Zusammenleben in gesunder Balance",
      "Rituale, die im Alltag Halt geben",
    ],
    duration: "Flexibel / In Deinem eigenen Tempo",
    format: "PDF / Workbook",
    ctaLabel: "Workbook öffnen",
    ctaHref: "https://drive.google.com/file/d/1kc0MvIndSMr5xByUsKyLbIBVNPsEyNGK/view?usp=sharing",
  },
];
