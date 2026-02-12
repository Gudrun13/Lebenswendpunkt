import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Mock submission
    }
  };

  return (
    <section className="py-20 px-4 bg-amber-50 text-foreground relative overflow-hidden" id="newsletter">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-[60px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
            <Mail className="h-8 w-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Bleib mit mir in Verbindung
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            Melde Dich gerne hier für den Newsletter an.<br />
            Du wirst etwa einmal im Monat einen Newsletter erhalten.<br />
            Ich freue mich!
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="bg-white border-primary/20 text-foreground placeholder:text-muted-foreground h-12 focus-visible:ring-primary"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold h-12 font-serif px-8">
                Anmelden
              </Button>
            </form>
          ) : (
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="bg-white border border-primary/10 rounded-lg p-6 max-w-md mx-auto flex items-center gap-4 text-left shadow-sm"
             >
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Vielen Dank!</h4>
                  <p className="text-foreground/80 text-sm">Sie haben sich erfolgreich für den Newsletter angemeldet.</p>
                </div>
             </motion.div>
          )}
          
          <p className="mt-6 text-sm text-muted-foreground">
            Ich respektiere Ihre Privatsphäre. Abmeldung jederzeit möglich.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
