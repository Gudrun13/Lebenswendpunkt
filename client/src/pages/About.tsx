import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function About() {
  const CONSULTATION_LINK = "https://tidycal.com/lebenswendepunkt/kostenfreies-info-gesprach";

  const sections = [
    {
      title: "Manchmal gerät das Leben aus der Spur.",
      paragraphs: [
        "Ein Bruch, eine Entscheidung oder eine Krise.",
        "Und plötzlich stehst Du da und weißt nicht genau, wie es weitergehen soll.",
        "Durch diese Zeiten begleite ich Dich.",
      ],
    },
    {
      title: "Ich bin Gudrun Murina.",
      paragraphs: [
        "Heilpraktikerin für Psychotherapie. Seit über zehn Jahren arbeite ich mit Menschen in Umbruchphasen, an Wendepunkten und in Zeiten innerer Neuorientierung.",
        "Mehr als 2.000 Menschen haben in dieser Zeit neue Perspektiven entwickelt, Mut gefasst und ihren eigenen nächsten Schritt gefunden. Jeder auf seine Weise.",
      ],
    },
    {
      title: "Mein eigener Weg war nicht geradlinig.",
      paragraphs: [
        "Mit 36 Jahren habe ich noch einmal neu begonnen und eine Ausbildung zur Kinderkrankenschwester gemacht.",
        "Davor und danach habe ich in sehr unterschiedlichen Bereichen gearbeitet: im Kinderheim, mit suchtkranken Jugendlichen und Erwachsenen, im Justizvollzug und in der Rehabilitation von Menschen mit schweren Hirnverletzungen. Oft auch in leitender Verantwortung.",
      ],
    },
    {
      title: "Soziotherapie",
      paragraphs: [
        "Besonders prägend war meine Zeit in der Soziotherapie. Über mehrere Jahre habe ich drogenabhängige Erwachsene begleitet.",
        "Dort habe ich erlebt, wie tief Veränderung gehen kann, wenn echte Verbindung entsteht. Wenn ein Mensch sich wahrgenommen und gesehen fühlt.",
      ],
    },
    {
      title: "Heute arbeite ich in meiner eigenen Praxis.",
      paragraphs: [
        "Ganzheitlich und zugleich bodenständig.",
        "Ich verbinde Klarheit mit Mitgefühl, Humor mit Ernsthaftigkeit, Struktur mit Achtsamkeit. In meinen Gesprächen geht es darum, Gedanken zu ordnen, Gefühle zu verstehen und wieder handlungsfähig zu werden.",
      ],
    },
    {
      title: "Therapeutische Ansätze",
      paragraphs: [
        "Ich arbeite mit bewährten therapeutischen Ansätzen, die helfen, innere Blockaden zu lösen und neue Handlungsspielräume zu öffnen.",
        "Dazu gehören unter anderem PEP nach Dr. Michael Bohne, systemische Trauerarbeit und weitere Methoden, die Körper und Verstand gleichermaßen einbeziehen.",
      ],
    },
    {
      title: "Was bei mir Platz hat",
      paragraphs: [
        "Meditation, Körperwahrnehmung und kreative Impulse haben ebenso ihren Platz wie klare Analysen und lösungsorientierte Schritte.",
        "Jeder Mensch bringt seine eigene Geschichte mit und seine eigene Kraft.",
      ],
    },
    {
      title: "Weiterbildung",
      paragraphs: [
        "Ich bilde mich kontinuierlich weiter. In Familienberatung, Krisenintervention und aktuell auch im Bereich künstliche Intelligenz.",
      ],
    },
    {
      title: "Mein KI-gestützter Begleiter",
      paragraphs: [
        "Ein Teil dieser Entwicklung ist mein KI-gestützter Begleiter. Ein Gesprächsbot, den ich für Menschen in Umbruchphasen entwickelt habe.",
        "Wenn Du zunächst anonym und in Deinem eigenen Tempo erste Impulse sammeln möchtest, kannst Du ihn gern ausprobieren. Kostenfrei und jederzeit erreichbar.",
      ],
    },
    {
      title: "Was mir wichtig ist",
      paragraphs: [
        "Mir ist wichtig, dass Du Dich bei mir sicher fühlst.",
        "Dass Du sagen kannst, was Dich bewegt.",
        "Dass Du Klarheit findest und wieder Vertrauen in Deine eigene Kraft gewinnst.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      <Navigation />

      <main className="pt-24 pb-24">
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.header
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-14"
            >
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary/70 bg-primary/5 border border-primary/10 px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                Über mich
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-6 leading-tight" data-testid="text-about-title">
                Wer begleitet Dich hier?
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed" data-testid="text-about-subtitle">
                Mit Ruhe, Klarheit, Haltung und Herzensfreundlichkeit.
              </p>
            </motion.header>

            <div className="bg-white/70 backdrop-blur-sm border border-primary/10 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="space-y-12">
                  {sections.map((s, idx) => (
                    <section key={idx} className="space-y-4">
                      <h2 className="text-2xl md:text-3xl font-serif text-primary" data-testid={`text-about-section-title-${idx}`}>
                        {s.title}
                      </h2>
                      <div className="space-y-4 text-foreground/80 leading-relaxed">
                        {s.paragraphs.map((p, pi) => (
                          <p key={pi} data-testid={`text-about-paragraph-${idx}-${pi}`}>
                            {p}
                          </p>
                        ))}
                      </div>
                    </section>
                  ))}

                  <section className="pt-8 border-t border-primary/10 text-center">
                    <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4" data-testid="text-about-cta-title">
                      Wenn Du merkst, dass es Zeit ist, etwas zu klären
                    </h3>
                    <p className="text-foreground/80 leading-relaxed mb-8 max-w-xl mx-auto" data-testid="text-about-cta-description">
                      In einem ersten Gespräch schauen wir gemeinsam, was Du brauchst und wie ich Dich unterstützen kann.
                    </p>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif px-8" asChild data-testid="button-about-consultation">
                      <a href={CONSULTATION_LINK} target="_blank" rel="noopener noreferrer">
                        Kostenloses Erstgespräch
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </section>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8" data-testid="text-about-closing">
              Ich freue mich darauf, Dich ein Stück auf Deinem Weg zu begleiten.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
