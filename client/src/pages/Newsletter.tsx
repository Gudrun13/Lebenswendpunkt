import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
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
          <div className="bg-white rounded-lg shadow-sm border border-stone-100 max-w-xl mx-auto overflow-hidden">
            <iframe
              width="540"
              height="305"
              src="https://e7c8a181.sibforms.com/v2/serve/MUIFAH2uWozafOCmoHWHTS_y_hko__fmypiwamUQxA5Ch-5zagg3vWxMiPOWbrl_bozjgeushKKc94uqjbMz4ZAoRfNvJNV-d8meaaSv8rkm8qD6-qX4omTWEf0uL3IAfJE2l6og8pIF-OlXKqqJmciJDo37cYEwyABq0o22qAzzmyRAFmKpRG7guLNv2-6Z2eQG_GkHdLZ24VtsAw=="
              frameBorder="0"
              scrolling="auto"
              allowFullScreen
              style={{ display: "block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
