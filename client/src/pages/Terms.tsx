import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <p className="text-muted-foreground mb-12">
            Allgemeine Geschäftsbedingungen (AGB) für digitale Produkte und Online-Kurse<br />
            Gudrun Murina – Lebenswendepunkt<br />
            Stand: November 2025
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle digitalen Produkte, Online-Kurse sowie Audio- und Videoangebote einschließlich begleitender Unterlagen, die über die Website www.lebenswendepunkt.de oder über verbundene Plattformen (z. B. MentorTools, Digistore24, CopeCart) angeboten werden. Abweichende Bedingungen der Kundinnen und Kunden werden nicht anerkannt, es sei denn, Gudrun Murina stimmt ihrer Geltung ausdrücklich zu.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">2. Vertragspartner</h2>
          <p>
            Der Kaufvertrag kommt zustande mit:<br />
            <br />
            Gudrun Murina – Lebenswendepunkt<br />
            Heilpraktikerin für Psychotherapie<br />
            Theodor-Heuss-Ring 14<br />
            26419 Schortens<br />
            E-Mail: <a href="mailto:lebenswendepunkt13@gmail.com" className="text-primary hover:underline">lebenswendepunkt13@gmail.com</a>
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">3. Vertragsgegenstand</h2>
          <p>
            Gegenstand des Vertrags ist der Erwerb von digitalen Produkten (z. B. Workbooks, Audios, Videos) oder Online-Kursen, die der persönlichen Entwicklung, Stärkung und Selbstreflexion dienen. Die Inhalte ersetzen keine psychotherapeutische oder medizinische Behandlung und beinhalten keine Heilversprechen.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">4. Vertragsabschluss</h2>
          <p>
            Mit dem Anklicken des Bestellbuttons („Jetzt kaufen“ oder ähnlich) geben Kundinnen und Kunden ein verbindliches Angebot zum Abschluss eines Kaufvertrags ab. Der Vertrag kommt zustande, sobald eine automatische Bestellbestätigung erfolgt oder der unmittelbare Zugang zum digitalen Produkt bereitgestellt wird.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">5. Preise und Zahlungsbedingungen</h2>
          <p>
            Alle Preise verstehen sich als Endpreise in Euro. Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer ausgewiesen. Die Zahlung erfolgt über die im Bestellprozess angegebenen Zahlungsanbieter (z. B. Stripe, Digistore24, CopeCart oder PayPal). Es gelten ergänzend die jeweiligen AGB dieser Anbieter.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">6. Lieferung und Zugang</h2>
          <p>
            Digitale Produkte stehen nach erfolgreicher Zahlung sofort zum Download oder Zugriff bereit. Online-Kurse werden über eine geschützte Kursplattform bereitgestellt. Die Zugangsdaten sind persönlich und dürfen nicht an Dritte weitergegeben werden.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">7. Nutzungsrechte</h2>
          <p>
            Alle Inhalte (Texte, Audios, Videos, PDFs) sind urheberrechtlich geschützt. Kundinnen und Kunden erhalten ein einfaches, nicht übertragbares Nutzungsrecht für den privaten Gebrauch. Eine Weitergabe, Veröffentlichung oder gewerbliche Nutzung ist nicht gestattet.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">8. Widerrufsrecht</h2>
          <p>
            Bei digitalen Produkten erlischt das Widerrufsrecht, sobald die Kundin oder der Kunde ausdrücklich zugestimmt hat, dass mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist begonnen wird, und bestätigt hat, den Verlust des Widerrufsrechts zur Kenntnis genommen zu haben.
          </p>
          <div className="bg-primary/5 p-6 rounded-lg my-6">
            <strong>Bestellprozess:</strong><br />
            „Ich stimme ausdrücklich zu, dass mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist begonnen wird. Mir ist bekannt, dass ich dadurch mein Widerrufsrecht verliere.“
          </div>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">9. Haftungsausschluss</h2>
          <p>
            Die angebotenen Kurse und Produkte dienen der Unterstützung, Selbstreflexion und persönlichen Weiterentwicklung. Sie stellen keine Therapie, Diagnose oder medizinische Beratung dar. Für Folgen der Anwendung der Inhalte wird keine Haftung übernommen. Gudrun Murina haftet nur für Vorsatz oder grobe Fahrlässigkeit.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">10. Technische Voraussetzungen</h2>
          <p>
            Für die Nutzung digitaler Produkte ist ein internetfähiges Endgerät erforderlich. Für technische Probleme auf Kundenseite (z. B. inkompatible Software, unzureichende Internetverbindung) wird keine Haftung übernommen.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">11. Änderungen der AGB</h2>
          <p>
            Gudrun Murina behält sich vor, diese AGB bei Bedarf anzupassen. Maßgeblich ist die zum Zeitpunkt des Vertragsabschlusses gültige Fassung.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">12. Anwendbares Recht und Gerichtsstand</h2>
          <p>
            Es gilt deutsches Recht. Gerichtsstand ist – soweit gesetzlich zulässig – der Sitz von Gudrun Murina.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
