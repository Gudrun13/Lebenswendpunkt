import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Imprint() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">Impressum</h1>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            Lebenswendepunkt<br />
            Musterstraße 123<br />
            12345 Musterstadt
          </p>
          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 456789<br />
            E-Mail: info@lebenswendepunkt.de
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
