import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { useRoute } from "wouter";
import { Calendar, Clock, User, ChevronLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = blogPosts.find(p => p.slug === params?.slug);

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <article className="container mx-auto px-4 max-w-3xl">
          {/* Back Link */}
          <div className="mb-8">
             <Button variant="ghost" className="pl-0 text-muted-foreground hover:text-primary" asChild>
               <a href="/blog">
                 <ChevronLeft className="w-4 h-4 mr-2" />
                 Zurück zur Übersicht
               </a>
             </Button>
          </div>

          {/* Header */}
          <header className="mb-12 text-center md:text-left">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground uppercase tracking-wider font-medium mb-6 justify-center md:justify-start">
              <span className="flex items-center gap-1 bg-primary/5 px-3 py-1 rounded-full text-primary">
                <Calendar className="w-3 h-3" /> {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {post.readTime}
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary mb-8 leading-tight"
            >
              {post.title}
            </motion.h1>

            <div className="flex items-center justify-between border-y border-primary/10 py-6">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">{post.author}</div>
                    <div className="text-xs text-muted-foreground">Autorin</div>
                  </div>
               </div>
               
               <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                 <Share2 className="w-4 h-4" />
               </Button>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-foreground/80 prose-p:leading-relaxed prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:italic">
            {post.content.map((paragraph, index) => (
              <p key={index} className="mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Footer of Article */}
          <div className="mt-16 pt-12 border-t border-primary/10 text-center">
            <h3 className="font-serif text-2xl text-primary mb-4">Hat dieser Artikel Sie berührt?</h3>
            <p className="text-foreground/80 mb-8 max-w-xl mx-auto">
              Manchmal lösen Texte Gedanken aus, die man gerne teilen oder vertiefen möchte. 
              Ich bin gerne für Sie da.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="https://tidycal.com/lebenswendepunkt/kostenfreies-info-gesprach" target="_blank" rel="noopener noreferrer">
                Kostenloses Gespräch vereinbaren
              </a>
            </Button>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
