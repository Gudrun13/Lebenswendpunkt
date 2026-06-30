import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export function NewsletterSection() {
  return (
    <section className="py-20 px-4 bg-amber-50 text-foreground relative overflow-hidden" id="newsletter">
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

          <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm border border-primary/10 overflow-hidden">
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

          <p className="mt-6 text-sm text-muted-foreground">
            Ich respektiere Deine Privatsphäre. Abmeldung jederzeit möglich.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
