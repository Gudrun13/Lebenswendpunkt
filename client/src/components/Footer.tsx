import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div>
            <Link href="/">
              <span className="text-2xl font-serif text-primary hover:text-primary/80 transition-colors cursor-pointer">Lebenswendepunkt</span>
            </Link>
          </div>

          {/* Legal Links - Horizontal */}
          <div>
            <ul className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm uppercase tracking-widest font-sans font-medium">
              <li><Link href="/newsletter" className="text-foreground/80 hover:text-primary transition-colors">Newsletter</Link></li>
              <li><Link href="/impressum" className="text-foreground/80 hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-foreground/80 hover:text-primary transition-colors">Datenschutz</Link></li>
              <li><Link href="/agb" className="text-foreground/80 hover:text-primary transition-colors">AGB</Link></li>
              <li><Link href="/widerruf" className="text-foreground/80 hover:text-primary transition-colors">Widerruf</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-6 text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} Lebenswendepunkt. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
