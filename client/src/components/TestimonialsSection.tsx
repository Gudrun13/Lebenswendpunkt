import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Ich kam wegen der Angst, nach langer Zeit, habe ich mich endlich wieder als handlungsfähig erlebt. Danke für die Tools und für die Geduld!",
      author: "M. Lohrer"
    },
    {
      text: "Ich hätte nie gedacht, dass ich da wieder rauskomme. Die Begleitung von Frau Murina hat mir geholfen, mein Leben neu zu sortieren. Es war wie ein Aufatmen nach langer Schwere.",
      author: "Waltraut K."
    },
    {
      text: "Ich hätte nicht gedacht, dass man mit so viel Wärme auch Klartext reden kann. Das war für mich heilsam und stärkend zugleich.",
      author: "S.T"
    },
    {
      text: "Gudrun hat mir nicht gesagt, was ich tun soll, sie hat mir geholfen, es selbst zu erkennen. Ihre Ruhe und ihr Vertrauen haben mich sehr gestärkt.",
      author: "Ronald F."
    }
  ];

  return (
    <section className="py-24 px-4 bg-primary/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
            Das sagen meine Kunden
          </h2>
          <div className="w-24 h-1 bg-primary/20 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-primary/10 relative">
              <Quote className="absolute top-8 left-8 w-10 h-10 text-primary/10" />
              <div className="relative z-10">
                <p className="text-lg text-foreground/80 leading-relaxed italic mb-6 pt-4">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-1 bg-primary/20 rounded-full" />
                  <span className="font-serif font-bold text-primary text-lg">
                    {testimonial.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
