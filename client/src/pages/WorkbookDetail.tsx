import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { workbooks } from "@/data/workbooks";
import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";
import { ChevronLeft, Clock, FileText, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function WorkbookDetail() {
  const [, params] = useRoute("/workbooks/:slug");
  const workbook = workbooks.find((w) => w.slug === params?.slug);

  if (!workbook) return <NotFound />;

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      <Navigation />

      <main className="pt-32 pb-24">
        <article className="container mx-auto px-4 max-w-3xl">
          <div className="mb-8">
            <Button variant="ghost" className="pl-0 text-muted-foreground hover:text-primary" asChild>
              <a href="/workbooks" data-testid="link-back-workbooks">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Zurück zur Übersicht
              </a>
            </Button>
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
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-serif" asChild>
                <a href={workbook.ctaHref} data-testid="button-workbook-email">
                  <Mail className="w-4 h-4 mr-2" />
                  {workbook.ctaLabel}
                </a>
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
    </div>
  );
}
