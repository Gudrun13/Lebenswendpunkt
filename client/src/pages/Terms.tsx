import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">1. Geltungsbereich</h2>
          <p>
            Für die Geschäftsbeziehung zwischen dem Anbieter und dem Kunden gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in ihrer zum Zeitpunkt der Bestellung gültigen Fassung.
          </p>
          {/* More content would go here */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
