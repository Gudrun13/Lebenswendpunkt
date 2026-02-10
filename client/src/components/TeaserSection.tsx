import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Gift, Heart, User, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";

export function TeaserSection() {
  const teasers = [
    {
      title: "Freebie",
      description: "Holen Sie sich mein kostenloses Freebie für mehr Klarheit im Alltag.",
      icon: Gift,
      href: "#freebie",
      buttonText: "Zum Freebie"
    },
    {
      title: "Angebote",
      description: "Individuelle Begleitung und Coaching-Pakete für Ihre Situation.",
      icon: LayoutGrid,
      href: "#angebote",
      buttonText: "Angebote ansehen"
    },
    {
      title: "Workbook",
      description: "Das Arbeitsbuch für Ihre persönliche Weiterentwicklung und Reflexion.",
      icon: BookOpen,
      href: "#workbook",
      buttonText: "Zum Workbook"
    },
    {
      title: "Blog",
      description: "Impulse, Gedanken und Erfahrungen rund um Lebenswendepunkte.",
      icon: BookOpen,
      href: "#blog",
      buttonText: "Zum Blog"
    },
    {
      title: "Über mich",
      description: "Lernen Sie mich und meine Arbeitsweise besser kennen.",
      icon: User,
      href: "#ueber-mich",
      buttonText: "Mehr über mich"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teasers.map((teaser, index) => (
            <motion.div
              key={teaser.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <teaser.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl font-serif text-primary">{teaser.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-foreground/80 leading-relaxed">
                    {teaser.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full group border-primary/20 hover:border-primary text-primary hover:bg-primary/5" asChild>
                    <a href={teaser.href} className="flex items-center justify-between">
                      {teaser.buttonText}
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
