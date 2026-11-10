import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function NotFound() {
  useSEO({
    title: "Seite nicht gefunden – Lebenswendepunkt",
    description: "Diese Seite gibt es leider nicht (mehr).",
    canonical: "https://lebenswendepunkt.de/",
    noIndex: true,
  });

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Diese Seite gibt es nicht</h1>
        <p className="text-lg text-foreground/80 mb-10">
          Vielleicht hat sich die Adresse geändert oder es hat sich ein Tippfehler eingeschlichen.
          Hier findest Du weiter:
        </p>
        <nav aria-label="Weiterführende Seiten" className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-primary-foreground hover:opacity-90">
            Zur Startseite
          </Link>
          <Link href="/angebote" className="inline-flex items-center rounded-md border border-primary px-6 py-3 text-primary hover:bg-primary/5">
            Angebote
          </Link>
          <Link href="/blog" className="inline-flex items-center rounded-md border border-primary px-6 py-3 text-primary hover:bg-primary/5">
            Blog
          </Link>
        </nav>
      </div>
      <Footer />
    </div>
  );
}
