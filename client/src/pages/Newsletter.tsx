import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">Newsletter Anmeldung</h1>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <p className="mb-6">
            Melden Sie sich hier für meinen Newsletter an, um regelmäßig Impulse und Inspirationen für Ihren Lebenswendepunkt zu erhalten.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-stone-100">
            {/* Placeholder for newsletter form */}
            <p className="italic text-muted-foreground">Hier folgt das Anmeldeformular...</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
