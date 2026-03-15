import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">Datenschutzerklärung</h1>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">1. Verantwortliche Stelle</h2>
          <p>
            Gudrun Murina<br />
            Praxis Lebenswendepunkt<br />
            Hagenstr. 1<br />
            26419 Schortens<br />
            E-Mail: <a href="mailto:lebenswendepunkt13@gmail.com" className="text-primary hover:underline">lebenswendepunkt13@gmail.com</a><br />
            Website: <a href="https://www.lebenswendepunkt.de" className="text-primary hover:underline">www.lebenswendepunkt.de</a>
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">2. Allgemeine Hinweise</h2>
          <p>
            Der Schutz Deiner personenbezogenen Daten ist mir ein wichtiges Anliegen. Ich behandle Deine Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">3. Hosting und E-Mail-Kommunikation</h2>
          <p>
            Diese Website wird bei All-inkl.com gehostet.<br />
            E-Mail-Kommunikation erfolgt über Google Workspace mit DSGVO-konformer Auftragsverarbeitung.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">4. Zugriffsdaten und Server-Logfiles</h2>
          <p>
            Beim Besuch der Website erhebt der Webhoster automatisiert Daten wie:
          </p>
          <ul>
            <li>IP-Adresse</li>
            <li>Browsertyp und Version</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Referrer-URL</li>
          </ul>
          <p>
            Diese Daten dienen der technischen Sicherheit und werden nicht mit anderen Datenquellen zusammengeführt.<br />
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">5. Kontaktaufnahme per E-Mail oder Formular</h2>
          <p>
            Wenn Du mich per E-Mail oder Formular kontaktierst, werden die von Dir übermittelten Angaben zwecks Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.<br />
            Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">6. Verwendung eines KI-Chatbots</h2>
          <p>
            Auf dieser Webseite ist ein KI-gestützter Chatbot eingebunden. Dieser dient der digitalen Unterstützung bei allgemeinen Fragen und zur Erstorientierung zu meinen Angeboten.<br />
            <strong>Anbieter:</strong> Der Bot wird bereitgestellt über <a href="https://botpress.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://botpress.com</a><br />
            <strong>Datenschutzerklärung des Anbieters:</strong> <a href="https://botpress.com/legal/privacy-statement" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://botpress.com/legal/privacy-statement</a>
          </p>
          <p>
            <strong>Verarbeitete Daten:</strong>
          </p>
          <ul>
            <li>Vom Nutzer eingegebene Chat-Nachrichten</li>
            <li>Zeitstempel des Chats</li>
            <li>Technische Metadaten (z. B. Browserinformationen)</li>
          </ul>
          <p>
            Ich empfehle, keine sensiblen personenbezogenen Daten in den Chat einzugeben (z. B. Gesundheitsdaten).<br />
            Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">7. Google Workspace</h2>
          <p>
            Zur Verwaltung von E-Mails, Kalendern und Dokumenten nutze ich Google Workspace.<br />
            Mit Google wurde ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO abgeschlossen.<br />
            Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy?hl=de</a>
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">8. Cookies und eingebettete Inhalte</h2>
          <p>
            Diese Webseite verwendet nur technisch notwendige Cookies.<br />
            Falls Drittanbieter-Inhalte eingebunden werden (z. B. YouTube, Google Maps), können diese Daten sammeln – bitte beachte die jeweiligen Datenschutzrichtlinien der Anbieter.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">9. Deine Rechte</h2>
          <p>
            Du hast das Recht:
          </p>
          <ul>
            <li>Auskunft über Deine gespeicherten Daten zu verlangen (Art. 15 DSGVO)</li>
            <li>Berichtigung oder Löschung zu verlangen (Art. 16/17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung zu fordern (Art. 18 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung einzulegen (Art. 21 DSGVO)</li>
            <li>Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)</li>
            <li>Dich bei einer Aufsichtsbehörde zu beschweren</li>
          </ul>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">10. Auftragsverarbeitung</h2>
          <p>
            Mit allen relevanten Dienstleistern wurde ein Vertrag zur Auftragsverarbeitung abgeschlossen.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">11. Änderungen der Datenschutzerklärung</h2>
          <p>
            Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, z. B. bei neuen technischen Funktionen.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
