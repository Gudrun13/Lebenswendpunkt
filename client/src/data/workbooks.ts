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
  {
    id: "3",
    slug: "3-minuten-methode",
    title: "Die 3-Minuten-Methode",
    tagline: "Wie Du die Angst vor der nächsten Panikattacke sofort entschärfst.",
    description:
      "Ein sanfter Minikurs in 5 Modulen, der Dir hilft, Erwartungsangst zu verstehen und Deinen Körper in akuten Momenten aus dem Alarmmodus zu holen – ohne Druck, nur mit Dir und in Deinem Tempo.",
    bullets: [
      "Die Angst vor der Angst verstehen",
      "Körper beruhigen durch 4-2-6-Atmung",
      "Gedanken unterbrechen und neu ausrichten",
      "Praktische Anwendung im Alltag (Auto, Supermarkt, etc.)",
    ],
    duration: "5 sofort umsetzbare Module",
    format: "PDF / Minikurs",
    ctaLabel: "Workbook öffnen",
    ctaHref: "https://drive.google.com/file/d/1gAeRMmAaiOM41h-hYrXuh-ohwwT5d00-/view?usp=sharing",
  },
];
