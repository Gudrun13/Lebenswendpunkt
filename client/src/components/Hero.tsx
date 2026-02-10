import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-20 px-4 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-900/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full mb-12">
            <img 
              src="/banner-header.png" 
              alt="Lebenswendepunkt Banner" 
              className="w-full h-auto object-cover rounded-xl shadow-2xl" 
            />
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-primary mb-6 leading-tight">
            Manchmal passt einfach <br className="hidden md:block" /> vieles nicht mehr
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Dann bin ich da und wir schauen gemeinsam, <br />
            was sich ändern lässt.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-12 text-left bg-card/50 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-border shadow-xl"
        >
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif text-primary">
              Genau dafür bin ich da:
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Wenn gerade etwas nicht mehr stimmt. Du merkst, dass es so nicht weitergeht, 
              auch wenn noch offen ist, wie es anders werden kann.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Mit meiner Erfahrung aus über <span className="text-primary font-semibold">2.000 Begleitungen</span> schaue ich mit Dir gemeinsam hin. 
              Was ist? Was fehlt? Und was wäre ein erster machbarer Schritt?
            </p>
          </div>

          <div className="space-y-8">
            <p className="text-xl font-sans font-bold text-foreground leading-relaxed">
              "Es geht darum, wieder handlungsfähig zu werden, in Deinem Leben, mit Deinen Möglichkeiten.
              Und ich weiß: Diese Möglichkeiten sind in Dir."
            </p>
            
            <div className="pt-4 flex justify-center md:justify-start">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto font-serif" asChild>
                <a href="https://tidycal.com/lebenswendepunkt/kostenfreies-info-gesprach" target="_blank" rel="noopener noreferrer">
                  Kostenloses Erstgespräch vereinbaren
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
