import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Gift, Heart, User, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TeaserSection() {
  const teasers = [
    {
      title: "Freebie",
      description: "Ein Geschenk für Sie. Holen Sie sich mein kostenloses Freebie für mehr Klarheit im Alltag.",
      icon: Gift,
      image: "/freebie-image.png",
      href: "#freebie",
      buttonText: "Jetzt herunterladen",
      color: "bg-blue-50" // Light blue background
    },
    {
      title: "Angebote",
      description: "Maßgeschneiderte Lösungen für Ihre Situation. Finden Sie die Begleitung, die Sie jetzt brauchen.",
      icon: LayoutGrid,
      href: "#angebote",
      buttonText: "Zu den Angeboten",
      color: "bg-white"
    },
    {
      title: "Workbook",
      description: "Ihr persönliches Arbeitsbuch. Nehmen Sie sich Zeit für sich selbst und Ihre Entwicklung.",
      icon: BookOpen,
      href: "#workbook",
      buttonText: "Workbook entdecken",
      color: "bg-amber-50" // Light gold/amber background matching brand
    },
    {
      title: "Blog",
      description: "Inspiration und Impulse. Lesen Sie meine Gedanken und Erfahrungen zu Lebenswendepunkten.",
      icon: BookOpen,
      href: "#blog",
      buttonText: "Zum Blog",
      color: "bg-white"
    },
    {
      title: "Über mich",
      description: "Wer begleitet Sie hier? Lernen Sie mich, meine Werte und meine Arbeitsweise kennen.",
      icon: User,
      href: "#ueber-mich",
      buttonText: "Mein Profil ansehen",
      color: "bg-slate-50"
    }
  ];

  return (
    <section className="py-0">
      <div className="flex flex-col">
        {teasers.map((teaser, index) => (
          <motion.div
            key={teaser.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className={cn(
              "py-20 px-4 md:px-8 flex justify-center",
              teaser.color
            )}
          >
            <div className="container max-w-4xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
              
              {/* Icon / Visual Side */}
              <div className={cn(
                "flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center",
                index % 2 === 1 ? "md:order-2" : "md:order-1"
              )}>
                {teaser.image ? (
                   <img 
                    src={teaser.image} 
                    alt={teaser.title}
                    className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full flex items-center justify-center bg-primary/10 text-primary">
                    <teaser.icon className="h-10 w-10" />
                  </div>
                )}
              </div>

              {/* Text Side */}
              <div className={cn(
                "text-center md:text-left flex-1",
                index % 2 === 1 ? "md:order-1 md:text-right" : "md:order-2 md:text-left"
              )}>
                <h3 className="text-3xl font-serif text-primary mb-4">{teaser.title}</h3>
                <p className="text-xl text-foreground/80 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0 ml-auto">
                  {teaser.description}
                </p>
                <div className={cn(
                  "flex",
                  index % 2 === 1 ? "justify-center md:justify-end" : "justify-center md:justify-start"
                )}>
                  <Button size="lg" className="group font-bold" asChild>
                    <a href={teaser.href}>
                      {teaser.buttonText}
                      <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
