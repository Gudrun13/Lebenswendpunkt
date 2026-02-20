import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, Briefcase, Activity, CloudRain, ArrowRight, HeartHandshake } from "lucide-react";
import newImage from "@assets/Landingpage_1771592791707.jpg";
import flowerImage from "@assets/flower-887443_1920_1771593511241.jpg";
import gedankenImage from "@assets/gedanken_1771594107477.png";
import paarImage from "@assets/image_1771595032070.png";

export default function Offers() {
  const CONSULTATION_LINK = "https://tidycal.com/lebenswendepunkt/kostenfreies-info-gesprach";

  const offers = [
    {
      title: "Begleitung in Zeiten der Trauer",
      description: "Trauer ist keine Krankheit. Sie ist eine gesunde Reaktion auf einen Verlust. Der Schmerz ist überwältigend. Ich begleite Dich durch die Phasen der Trauer. Ich gebe Dir Raum für alle Gefühle. Wir suchen gemeinsam nach Wegen, damit Du wieder Tritt fassen und Dein Leben anders gestalten kannst.",
      image: newImage,
      color: "bg-blue-50"
    },
    {
      title: "Lebenskrisen & Umbrüche",
      description: "Trennung, schwere Erkrankung oder der Verlust des Arbeitsplatzes verändern das Leben grundlegend. Die gewohnte Sicherheit bricht weg. Ich begleite Dich dabei, die Situation zu ordnen. Wir finden konkrete Wege, wie Du Deinen neuen Lebensabschnitt gestaltest.",
      details: ["Trennung & Scheidung", "Schwere Erkrankung", "Arbeitsplatzverlust"],
      image: flowerImage,
      color: "bg-amber-50"
    },
    {
      title: "Panik und Angst",
      description: "Angst schränkt den Alltag ein. Wir schauen uns an, wie die Angst wirkt. Ich begleite Dich dabei, in akuten Situationen mit der Angst umzugehen. Du lernst, wie Du Dir selbst hilfst und Dich wieder sicher im Alltag bewegst. Das Ziel ist, dass Du Deinem Handeln wieder vertraust.",
      image: gedankenImage,
      color: "bg-white"
    },
    {
      title: "Paarberatung: Gemeinsam in die Zukunft",
      description: "Heiraten oder Zusammenziehen sind große Schritte, die oft Fragen und Unsicherheiten mit sich bringen. Ich begleite Euch als Paar dabei, eine stabile Basis für Eure gemeinsame Zukunft zu schaffen, Erwartungen zu klären und gestärkt in den neuen Lebensabschnitt zu starten.",
      details: ["Heirat & Ehevorbereitung", "Zusammenziehen", "Gemeinsame Ziele"],
      image: paarImage,
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
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {offers.map((offer, index) => (
                <div key={index} className={`flex flex-col rounded-3xl overflow-hidden shadow-sm border border-primary/10 ${offer.color}`}>
                  
                  {/* Visual Area */}
                  {offer.image && (
                    <div className="w-full h-64 md:h-72 overflow-hidden bg-white relative">
                      <img src={offer.image} alt={offer.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8 md:p-10 flex-1 flex flex-col">
                    <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">{offer.title}</h2>
                    <p className="text-lg text-foreground/80 leading-relaxed mb-8 flex-1">
                      {offer.description}
                    </p>
                    
                    {offer.details && (
                      <ul className="flex flex-wrap gap-2 mb-8">
                        {offer.details.map((detail, i) => (
                          <li key={i} className="px-3 py-1.5 bg-white/60 border border-primary/10 rounded-md text-sm font-medium text-foreground/70">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-auto">
                      <Button className="bg-foreground text-primary hover:bg-foreground/90 font-serif w-full" asChild>
                        <a href={CONSULTATION_LINK} target="_blank" rel="noopener noreferrer">
                          Kostenloses Erstgespräch
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
