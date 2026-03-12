import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { workbooks } from "@/data/workbooks";
import { Link } from "wouter";
import { ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Workbooks() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      <Navigation />

      <main className="pt-24 pb-24">
        <section className="container mx-auto px-4 mb-16 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Workbooks</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Für Dich zusammengestellt. Impulse, die Dich stärken und sortieren helfen.
            </p>
          </motion.div>
        </section>

        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workbooks.map((wb) => (
              <motion.article
                key={wb.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/10 hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary/70 mb-4">
                    <FileText className="w-4 h-4" />
                    Workbook
                  </div>

                  <h2 className="text-2xl font-serif text-primary mb-3 leading-tight">
                    <Link href={`/workbooks/${wb.slug}`} className="hover:underline decoration-primary/30 underline-offset-4">
                      {wb.title}
                    </Link>
                  </h2>

                  <p className="text-foreground/70 leading-relaxed mb-6 flex-1">{wb.tagline}</p>

                  <div className="pt-6 border-t border-primary/5 flex items-center justify-between mt-auto">
                    <Link href={`/workbooks/${wb.slug}`}>
                      <span className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors cursor-pointer" data-testid={`link-workbook-${wb.slug}`}>
                        Details <ArrowRight className="w-4 h-4 ml-2" />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
