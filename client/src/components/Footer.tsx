import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8 mt-auto">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif text-accent">Lebenswendepunkt</h3>
          </div>

          {/* Legal Links - Horizontal */}
          <div>
            <ul className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm">
              <li><Link href="/newsletter" className="text-white/70 hover:text-accent transition-colors">Newsletter</Link></li>
              <li><Link href="/impressum" className="text-white/70 hover:text-accent transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-white/70 hover:text-accent transition-colors">Datenschutz</Link></li>
              <li><Link href="/agb" className="text-white/70 hover:text-accent transition-colors">AGB</Link></li>
              <li><Link href="/widerruf" className="text-white/70 hover:text-accent transition-colors">Widerruf</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/40">
          <p>&copy; {currentYear} Lebenswendepunkt. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
