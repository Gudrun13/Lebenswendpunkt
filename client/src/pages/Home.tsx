import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TeaserSection } from "@/components/TeaserSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navigation />
      <main>
        <Hero />
        <TeaserSection />
      </main>
      
      {/* Simple Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-white/5 mt-20">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Lebenswendepunkt. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
}
