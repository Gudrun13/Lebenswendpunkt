import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { workbooks } from "@/data/workbooks";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import NotFound from "@/pages/not-found";
import { ChevronLeft, Clock, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const BREVO_SRC = "https://e7c8a181.sibforms.com/v2/serve/MUIFAH2uWozafOCmoHWHTS_y_hko__fmypiwamUQxA5Ch-5zagg3vWxMiPOWbrl_bozjgeushKKc94uqjbMz4ZAoRfNvJNV-d8meaaSv8rkm8qD6-qX4omTWEf0uL3IAfJE2l6og8pIF-OlXKqqJmciJDo37cYEwyABq0o22qAzzmyRAFmKpRG7guLNv2-6Z2eQG_GkHdLZ24VtsAw==";

export default function WorkbookDetail() {
  const [, params] = useRoute("/workbooks/:slug");
  const workbook = workbooks.find((w) => w.slug === params?.slug);
  const [showNewsletter, setShowNewsletter] = useState(false);

  if (!workbook) return <NotFound />;

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      <Navigation />

      <main className="pt-32 pb-24">
        <article className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8">
            <Link href="/workbooks">
              <span className="inline-flex items-center text-muted-foreground hover:text-primary cursor-pointer transition-colors font-medium" data-testid="link-back-workbooks">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Zurück zur Übersicht
              </span>
            </Link>
          </div>

          <header className="mb-12 text-center md:text-left">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground uppercase tracking-wider font-medium mb-6 justify-center md:justify-start">
              <span className="flex items-center gap-2 bg-primary/5 px-3 py-1 rounded-full text-primary">
                <FileText className="w-4 h-4" /> {workbook.format}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {workbook.duration}
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight"
            >
              {workbook.title}
            </motion.h1>

            <p className="text-xl text-foreground/80 leading-relaxed">{workbook.tagline}</p>
          </header>

          <section className="bg-white border border-primary/10 rounded-2xl p-8 md:p-10 shadow-sm">
            <p className="text-foreground/80 leading-relaxed mb-8">{workbook.description}</p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {workbook.bullets.map((b, i) => (
                <li key={i} className="bg-primary/5 border border-primary/10 rounded-xl px-4 py-3 text-sm text-foreground/80">
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif" onClick={() => setShowNewsletter(true)} data-testid="button-workbook-email">
                <ArrowRight className="w-4 h-4 mr-2" />
                Jetzt kostenlos anmelden & erhalten
              </Button>
              <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5" asChild>
                <a href="/angebote" data-testid="button-workbook-offers">
                  Alternativ: Erstgespräch
                </a>
              </Button>
            </div>
          </section>
        </article>
      </main>

      <Footer />

      <Dialog open={showNewsletter} onOpenChange={setShowNewsletter}>
        <DialogContent className="sm:max-w-xl p-0 overflow-hidden">
          <iframe
            width="540"
            height="305"
            src={BREVO_SRC}
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            style={{ display: "block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%" }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
