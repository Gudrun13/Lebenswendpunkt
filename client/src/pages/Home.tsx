import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TeaserSection } from "@/components/TeaserSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navigation />
      <main>
        <Hero />
        <TeaserSection />
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
}
