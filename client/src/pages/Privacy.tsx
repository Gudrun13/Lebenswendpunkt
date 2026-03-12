import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">Datenschutzerklärung</h1>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
          <p>
            Allgemeine Hinweise: Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Deinen personenbezogenen Daten passiert, wenn Du diese Website besuchst.
          </p>
          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <p>
            Datenschutz: Die Betreiber dieser Seiten nehmen den Schutz Deiner persönlichen Daten sehr ernst. Wir behandeln Deine personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          {/* More content would go here */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
