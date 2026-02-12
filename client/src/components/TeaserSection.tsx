import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Gift, User, LayoutGrid, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function TeaserSection() {
  const [showFreebieDialog, setShowFreebieDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Hier können wir später Ihren Google Drive Link einfügen
  const DOWNLOAD_LINK = "https://drive.google.com/file/d/15sCCVjJZOl9Sk6LKkzG3wb3LRkPHd-Rf/view?usp=drive_link"; 

  const handleFreebieSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // In a real app, this would trigger an email signup API call
      // and then provide the file download
    }
  };

  const teasers = [
    {
      title: "Freebie",
      description: "20 Stärkungstools. Impulse, die Dich an Deine eigene Kraft erinnern.",
      icon: Gift,
      image: "/freebie-image.png",
      action: "modal", // Custom action type
      buttonText: "Jetzt herunterladen",
      color: "bg-blue-50" // Light blue background
    },
    {
      title: "Angebote",
      description: "Schau, welche Form der Begleitung Dich jetzt stärkt.",
      icon: LayoutGrid,
      image: "/angebote-image.png",
      href: "/angebote",
      buttonText: "Zu den Angeboten",
      color: "bg-white"
    },
    {
      title: "Workbooks",
      description: "Für Dich zusammengestellt. Workbooks die Dich stärken und sortieren helfen.",
      icon: BookOpen,
      image: "/workbook-image.png",
      href: "#workbook",
      buttonText: "Workbooks entdecken",
      color: "bg-amber-50" // Light gold/amber background matching brand
    },
    {
      title: "Blog",
      description: "Gedankenräume, Impulse und Klartext. Hier schreibe ich über das, was mich bewegt.",
      icon: BookOpen,
      image: "/blog-image.png",
      href: "/blog",
      buttonText: "Zum Blog",
      color: "bg-white"
    },
    {
      title: "Über mich",
      description: "Wer begleitet Dich hier? Ich arbeite dann, wenn es schwierig ist. Mit Ruhe, Klarheit, Haltung und Herzensfreundlichkeit.",
      icon: User,
      image: "/ueber-mich-image.jpg",
      href: "/#ueber-mich",
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
                    className="w-full h-full object-cover rounded-full shadow-lg"
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
                  {teaser.action === "modal" ? (
                    <Button size="lg" className="group font-bold" onClick={() => setShowFreebieDialog(true)}>
                      {teaser.buttonText}
                      <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  ) : (
                    <Button size="lg" className="group font-bold" asChild>
                      <a href={teaser.href}>
                        {teaser.buttonText}
                        <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={showFreebieDialog} onOpenChange={setShowFreebieDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-primary">
              {isSubmitted ? "Vielen Dank!" : "Freebie herunterladen"}
            </DialogTitle>
            <DialogDescription>
              {isSubmitted 
                ? "Ihr Freebie steht nun zum Download bereit." 
                : "Bitte geben Sie Ihre E-Mail-Adresse ein, um das kostenlose Workbook zu erhalten."}
            </DialogDescription>
          </DialogHeader>
          
          {!isSubmitted ? (
            <form onSubmit={handleFreebieSubmit} className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail-Adresse</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@beispiel.de" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <DialogFooter>
                <Button type="submit" className="w-full font-bold">
                  Jetzt kostenlos anfordern
                </Button>
              </DialogFooter>
            </form>
          ) : (
            <div className="py-6 flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-2">
                <CheckCircle className="h-8 w-8" />
              </div>
              <p className="text-muted-foreground mb-4">
                Wir haben Ihnen den Download-Link zusätzlich per E-Mail gesendet.
              </p>
              <Button className="w-full font-bold" onClick={() => window.open(DOWNLOAD_LINK, '_blank')}>
                Download starten (Google Drive)
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
