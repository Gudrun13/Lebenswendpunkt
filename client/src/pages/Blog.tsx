import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/30">
      <Navigation />
      
      <main className="pt-24 pb-24">
        {/* Header Section */}
        <section className="container mx-auto px-4 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
              Gedanken & Impulse
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Hier teile ich meine Gedanken zu Themen wie Trauer, Angst, Neuanfängen und dem, was uns Menschen bewegt.
            </p>
          </motion.div>
        </section>

        {/* Blog Grid */}
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-primary/10 hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="p-8 flex-1 flex flex-col">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider mb-4 font-medium">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>

                  <h2 className="text-2xl font-serif text-primary mb-4 leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:underline decoration-primary/30 underline-offset-4">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-foreground/70 leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="pt-6 border-t border-primary/5 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <User className="w-4 h-4" />
                      </div>
                      {post.author}
                    </div>
                    
                    <Link href={`/blog/${post.slug}`}>
                      <a className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors">
                        Weiterlesen <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
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
