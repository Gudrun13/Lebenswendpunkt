import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Briefcase, Activity, CloudRain, ArrowRight, HeartHandshake } from "lucide-react";

export default function Offers() {
  const CONSULTATION_LINK = "https://tidycal.com/lebenswendepunkt/kostenfreies-info-gesprach";

  const offers = [
    {
      title: "Begleitung in Zeiten der Trauer",
      description: "Trauer ist keine Krankheit, sondern eine gesunde Reaktion auf einen Verlust. Doch manchmal scheint der Schmerz überwältigend. Ich begleite Dich durch die Phasen der Trauer, gebe Dir Raum für alle Gefühle und unterstütze Dich dabei, langsam wieder Tritt zu fassen.",
      icon: Heart,
      color: "bg-blue-50"
    },
    {
      title: "Lebenskrisen & Umbrüche",
      description: "Ob Trennung, schwere Erkrankung oder Arbeitsplatzverlust – solche Ereignisse ziehen uns oft den Boden unter den Füßen weg. Gemeinsam sortieren wir das Chaos, aktivieren Deine Ressourcen und entwickeln Perspektiven für den neuen Lebensabschnitt.",
      details: ["Trennung & Scheidung", "Schwere Erkrankung", "Arbeitsplatzverlust"],
      icon: Activity,
      color: "bg-amber-50"
    },
    {
      title: "Panik und Angst",
      description: "Wenn Angst den Alltag bestimmt, wird das Leben eng. Wir schauen uns die Ursachen an und ich vermittle Dir konkrete Werkzeuge, um in akuten Situationen wieder Ruhe zu finden und langfristig das Vertrauen in Dich selbst zurückzugewinnen.",
      icon: CloudRain,
      color: "bg-white"
    },
    {
      title: "Paarberatung: Gemeinsam in die Zukunft",
      description: "Heiraten oder Zusammenziehen sind große Schritte, die oft Fragen und Unsicherheiten mit sich bringen. Ich unterstütze Euch als Paar dabei, eine stabile Basis für Eure gemeinsame Zukunft zu schaffen, Erwartungen zu klären und gestärkt in den neuen Lebensabschnitt zu starten.",
      details: ["Heirat & Ehevorbereitung", "Zusammenziehen", "Gemeinsame Ziele"],
      icon: HeartHandshake,
      color: "bg-blue-50"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      <Navigation />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="bg-primary/5 py-20 px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-6">
              Meine Angebote
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Jeder Weg ist einzigartig. Hier findest Du alles, was ich anbiete.
            </p>
          </motion.div>
        </section>

        {/* Offer Sections */}
        <div className="flex flex-col">
          {offers.map((offer, index) => (
            <section key={index} className={`py-20 px-4 ${offer.color}`}>
              <div className="container mx-auto max-w-5xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  
                  {/* Icon/Visual Area */}
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0 ${
                    index % 2 === 0 ? "bg-primary/10 text-primary" : "bg-white text-primary border border-primary/20"
                  }`}>
                    <offer.icon className="h-10 w-10" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-3xl font-serif text-primary mb-6">{offer.title}</h2>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                      {offer.description}
                    </p>
                    
                    {offer.details && (
                      <ul className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                        {offer.details.map((detail, i) => (
                          <li key={i} className="px-4 py-2 bg-white/50 border border-primary/10 rounded-full text-sm font-medium text-foreground/70">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="pt-2">
                      <Button className="bg-foreground text-primary hover:bg-foreground/90 font-serif px-6" asChild>
                        <a href={CONSULTATION_LINK} target="_blank" rel="noopener noreferrer">
                          Kostenloses Erstgespräch
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Closing CTA */}
        <section className="py-24 px-4 bg-primary text-primary-foreground text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 blur-[100px] rounded-full pointer-events-none" />
           <div className="container mx-auto max-w-3xl relative z-10">
             <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
               Nicht sicher, was das Richtige ist?
             </h2>
             <p className="text-xl text-white/90 mb-10 leading-relaxed">
               Lass uns einfach sprechen. Im kostenlosen Erstgespräch finden wir heraus, wie ich Dich am besten unterstützen kann.
             </p>
             <Button className="bg-white text-primary hover:bg-white/90 font-serif px-6 font-bold" size="lg" asChild>
                <a href={CONSULTATION_LINK} target="_blank" rel="noopener noreferrer">
                  Termin vereinbaren
                </a>
             </Button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
