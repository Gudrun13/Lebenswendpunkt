import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Revocation() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navigation />
      <div className="container mx-auto px-4 py-32 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8">Widerrufsbelehrung</h1>
        <div className="prose prose-lg max-w-none text-foreground/80">
          <p className="text-muted-foreground mb-12">
            Widerrufsbelehrung für digitale Inhalte (Downloads, Online-Kurse)<br />
            Gudrun Murina – Lebenswendepunkt<br />
            Stand: November 2025
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">Widerrufsrecht</h2>
          <p>
            Verbraucherinnen und Verbraucher haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsabschlusses.
          </p>
          <p>
            Um Dein Widerrufsrecht auszuüben, musst Du mich (Gudrun Murina, Theodor-Heuss-Ring 14, 26419 Schortens, E-Mail: <a href="mailto:lebenswendepunkt13@gmail.com" className="text-primary hover:underline">lebenswendepunkt13@gmail.com</a>) mittels einer eindeutigen Erklärung (z. B. per E-Mail) über Deinen Entschluss, diesen Vertrag zu widerrufen, informieren. Zur Wahrung der Frist reicht es aus, dass Du die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absendest.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">Folgen des Widerrufs</h2>
          <p>
            Wenn Du diesen Vertrag widerrufst, erstatte ich Dir alle Zahlungen, die ich von Dir erhalten habe, unverzüglich und spätestens binnen 14 Tagen ab dem Tag, an dem die Mitteilung über Deinen Widerruf bei mir eingegangen ist. Für diese Rückzahlung verwende ich dasselbe Zahlungsmittel, das Du bei der ursprünglichen Transaktion eingesetzt hast, es sei denn, mit Dir wurde ausdrücklich etwas anderes vereinbart.
          </p>

          <h2 className="text-2xl font-serif text-primary mt-8 mb-4">Ausschluss bzw. vorzeitiges Erlöschen des Widerrufsrechts</h2>
          <p>
            Das Widerrufsrecht erlischt bei einem Vertrag über die Lieferung digitaler Inhalte, die sich nicht auf einem körperlichen Datenträger befinden (z. B. Downloads, Streaming, Online-Kurse), wenn die Unternehmerin mit der Ausführung des Vertrags begonnen hat, nachdem die Verbraucherin/der Verbraucher:
          </p>
          <ul>
            <li>ausdrücklich zugestimmt hat, dass mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist begonnen wird, und</li>
            <li>bestätigt hat, dass ihr/ihm bekannt ist, dass sie/er durch diese Zustimmung mit Beginn der Ausführung des Vertrags ihr/sein Widerrufsrecht verliert.</li>
          </ul>

          <div className="bg-primary/5 p-6 rounded-lg my-6">
            <strong>Hinweis zum Bestellprozess:</strong><br />
            „Ich stimme ausdrücklich zu, dass mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist begonnen wird. Mir ist bekannt, dass ich dadurch mein Widerrufsrecht verliere.“
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
