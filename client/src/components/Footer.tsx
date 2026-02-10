import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 md:py-16 mt-auto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-accent">Lebenswendepunkt</h3>
            <p className="text-white/80 max-w-xs leading-relaxed">
              Begleitung in Zeiten der Veränderung. Finden Sie Klarheit, Mut und neue Perspektiven für Ihren Weg.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold uppercase tracking-wider text-accent/80">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="/#angebote" className="text-white/70 hover:text-accent transition-colors">Angebote</a></li>
              <li><a href="/#workbook" className="text-white/70 hover:text-accent transition-colors">Workbook</a></li>
              <li><a href="/#blog" className="text-white/70 hover:text-accent transition-colors">Blog</a></li>
              <li><a href="/#ueber-mich" className="text-white/70 hover:text-accent transition-colors">Über mich</a></li>
            </ul>
          </div>

          {/* Column 3: Legal & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold uppercase tracking-wider text-accent/80">Rechtliches</h4>
            <ul className="space-y-2">
              <li><Link href="/newsletter" className="text-white/70 hover:text-accent transition-colors">Newsletter Anmeldung</Link></li>
              <li><Link href="/impressum" className="text-white/70 hover:text-accent transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-white/70 hover:text-accent transition-colors">Datenschutzerklärung</Link></li>
              <li><Link href="/agb" className="text-white/70 hover:text-accent transition-colors">AGB</Link></li>
              <li><Link href="/widerruf" className="text-white/70 hover:text-accent transition-colors">Widerrufsbelehrung</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>&copy; {currentYear} Lebenswendepunkt. Alle Rechte vorbehalten.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            {/* Social icons could go here if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}
