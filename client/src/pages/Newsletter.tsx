import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ZohoNewsletterForm } from "@/components/ZohoNewsletterForm";
import { useSEO } from "@/hooks/useSEO";

export default function Newsletter() {
  useSEO({
    title: "Newsletter – Monatliche Impulse von Gudrun Murina",
    description: "Melde Dich für den Newsletter von Lebenswendepunkt an und erhalte monatlich Gedanken und Impulse zu Trauer, Lebenskrisen und innerer Stärke.",
    canonical: "https://lebenswendepunkt.de/newsletter",
    noIndex: false,
  });

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">Newsletter Anmeldung</h1>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <p className="mb-6">
            Bleib mit mir in Verbindung. Melde Dich gerne hier für den Newsletter an. Du wirst etwa einmal im Monat einen Newsletter erhalten. Ich freue mich!
          </p>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-100 max-w-xl mx-auto">
            <ZohoNewsletterForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
