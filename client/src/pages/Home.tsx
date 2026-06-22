import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TeaserSection } from "@/components/TeaserSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function Home() {
  useSEO({
    title: "Lebenswendepunkt – Gestärkt aus der Krise | Gudrun Murina",
    description: "Psychologische Begleitung in Lebenskrisen, Trauer, Angst und Umbruchphasen. Gudrun Murina, Heilpraktikerin für Psychotherapie in Hagen. Gestärkt aus der Krise zu einem erfüllten Leben.",
    canonical: "https://lebenswendepunkt.de/",
    ogImage: "https://lebenswendepunkt.de/opengraph.jpg",
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navigation />
      <main>
        <Hero />
        <TeaserSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
}
