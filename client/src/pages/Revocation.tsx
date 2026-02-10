import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Revocation() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">Widerrufsbelehrung</h1>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">Widerrufsrecht</h2>
          <p>
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
          </p>
          {/* More content would go here */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
