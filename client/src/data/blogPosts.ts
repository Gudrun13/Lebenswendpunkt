export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string[]; // Array of paragraphs
  readTime: string;
  image?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "wenn-worte-unterwegs-sind",
    title: "Wenn Worte unterwegs sind",
    excerpt: "Es gibt Gespräche, da werde ich richtig sauer. Nicht, weil unterschiedliche Meinungen aufeinandertreffen, sondern weil ich unterbrochen werde.",
    date: "19. Januar 2026",
    author: "Gudrun Murina",
    readTime: "3 Min. Lesezeit",
    content: [
      "Es gibt Gespräche, da werde ich richtig sauer.",
      "Nicht, weil unterschiedliche Meinungen aufeinandertreffen. Nicht, weil es automatisch Streit gibt. Sondern weil ich unterbrochen werde, während ich noch spreche.",
      "Nicht einmal grob, manchmal fast freundlich, ein schnelles Einhaken, ein Ergänzen, ein „ja, ich weiß schon“. Und trotzdem werde ich ärgerlich.",
      "Denn ausreden zu können ist für mich richtig wichtig, denn Gedanken entstehen oft erst, während ich sie ausspreche. Sie sortieren sich, finden Richtung, gewinnen Kontur. Wenn ich unterbrochen werde, wird dieser Weg abgeschnitten.",
      "Ich merke dann, wie ich innerlich schneller werde, wie ich mich zusammenziehe. Wie ich beginne, Punkte zu liefern statt das auszusprechen was mir jetzt gerade wichtig ist und irgendwann spreche ich nicht mehr aus dem, was in mir lebt, sondern aus dem, was sich in der Zeit noch unterbringen lässt.",
      "Für mich zeigt sich Würdigung genau hier: im Hinhören, das nicht drängelt. Im Aushalten, dass ein Gedanke Zeit braucht, nicht nur das Ergebnis zählt, nicht nur der Punkt am Satzende auch der Weg dorthin zählt. Wer mich ausreden lässt, sagt damit: Dein innerer Prozess hat Gewicht, ich halte diesen Raum mit Dir.",
      "Unterbrechen ist selten böse gemeint. Oft ist es Ungeduld, Gewohnheit, dieses Reflexhafte: schnell weiter, schnell lösen, schnell einordnen. Und doch liegt darin eine Entscheidung, die nur eine Seite trifft: Jetzt reicht’s, jetzt weiß ich’s, jetzt bin ich dran.",
      "Natürlich ich kenne das auch von mir, ich kenne diesen Moment, in dem ich innerlich schon aufstehe, während der andere noch spricht. In dem ich denke: „Ja, ja, verstanden“ – und eigentlich meine: „Komm zum Punkt, damit es wieder schneller geht.“",
      "Manchmal ist es Nervosität, manchmal Ungeduld, manchmal auch der Versuch, die eigene Unsicherheit zu überdecken, indem ich das Gespräch an mich ziehe.",
      "Ich weiß, hat das wenig mit dem anderen zu tun und viel mit mir, mit meiner Geduld, meinem Tempo, meinem Bedürfnis nach Kontrolle, meiner Angst, etwas zu verpassen oder zu verlieren.",
      "Gleichwertigkeit im Gespräch fühlt sich anders an. Sie entsteht dort, wo keiner den anderen abkürzt, korrigiert oder lenkt, bevor er fertig ist. Nicht, weil man sich immer einig sein müsste. Sondern weil beide gleichermaßen zählen, auch dann, wenn es länger dauert, bis ein Gedanke seinen Ausdruck findet.",
      "Selbstwirksamkeit beginnt oft ganz unspektakulär: damit, dass ich sprechen kann, ohne mich zu beeilen. Dass ich mir beim Sprechen selbst begegne. Dass ich mich zeigen kann, ohne mich zu rechtfertigen. Wenn ich regelmäßig unterbrochen werde, geht genau das verloren. Nicht dramatisch, eher wie ein Riss, der irgendwann zur Gewohnheit wird: Ich halte mich zurück, bevor ich überhaupt angefangen habe.",
      "Und andersherum: Wenn ich andere unterbreche, nehme ich ihnen genau diesen Raum. Auch dann, wenn ich es gut meine. Auch dann, wenn ich nur „kurz helfen“ will. Ich setze mein Tempo über ihres. Ich entscheide, was wichtig ist. Und manchmal merke ich das erst, wenn der andere still wird oder sich zurückzieht.",
      "Vielleicht hast Du Lust, das einmal bei Dir zu beobachten. Nicht als Selbstoptimierung, sondern als forschenden Blick auf Dein Gesprächsverhalten.",
      "An welchen Stellen wirst Du schnell? Wann willst Du „nur kurz“ reingrätschen? Was passiert in Dir, wenn der andere länger braucht? Und wie ist es für Dich, wenn Du selbst unterbrochen wirst?",
      "Diese kleinen Stellen sind oft die, an denen sich Beziehung entscheidet. Nicht in den großen Diskussionen, sondern im Alltagston. In den Sekunden, in denen man wählen kann: halte ich den Raum – oder nehme ich ihn?"
    ]
  },
  {
    id: "3",
    slug: "was-wenn-du-gar-nichts-brauchst",
    title: "Was, wenn Du gar nichts brauchst?",
    excerpt: "Vielleicht hast Du schon so viel verstanden, ausprobiert und gelesen. Und trotzdem zweifelst Du an Dir. Ich möchte Dir heute eine andere Frage stellen.",
    metaTitle: "Was, wenn Du gar nichts brauchst? | Lebenswendepunkt",
    metaDescription: "Was lebt schon in Dir? Eine Einladung, nicht nach mehr zu suchen, sondern das Eigene wieder zu entdecken.",
    date: "23. April 2026",
    author: "Gudrun Murina",
    readTime: "3 Min. Lesezeit",
    content: [
      "Schau Dich mal um.",
      "Podcasts, die Dir erklären, wie Du produktiver wirst. Kurse, die versprechen, dass Du endlich in Deiner Kraft bist. Listen mit Dingen, die Du noch tun solltest. Damit Dein Leben endlich so wird, wie es sein könnte.",
      "Ich frage mich manchmal, was das mit Dir macht.",
      "Vielleicht hast Du schon so viel verstanden. So viel ausprobiert. So viel gelesen. Und trotzdem – oder vielleicht genau deswegen – zweifelst Du an Dir.",
      "Ich möchte Dir heute eine andere Frage stellen.",
      "Nicht: Was brauchst Du noch?",
      "Sondern: Was lebt schon in Dir?",
      "Was, wenn das, wonach Du suchst, nicht irgendwo da draußen auf Dich wartet – sondern schon längst in Dir angelegt ist? Vielleicht ein bisschen verschüttet. Vielleicht von Lärm überdeckt. Aber da.",
      "So wie ein Raum, der immer existiert hat. Dessen Tür Du vielleicht nur vergessen hast zu öffnen.",
      "Ich glaube nicht, dass Du repariert werden musst.",
      "Ich glaube, Du hast vielleicht einfach aufgehört hinzuschauen – auf das, was in Dir schon trägt. Was Dich schon oft durch schwere Momente getragen hat. Was Du schon kannst, schon weißt, schon bist.",
      "Eine kleine Erinnerungsübung",
      "Du brauchst dafür nichts vorzubereiten.",
      "Setz Dich einen Moment hin. Und frag Dich:",
      "Was habe ich in meinem Leben schon gemeistert – ohne dass ich wusste, wie?",
      "Lass kommen, was kommt. Auch die kleinen Dinge. Vielleicht sogar besonders die.",
      "Und wenn etwas auftaucht – dann schau es Dir an. Nicht um es zu analysieren. Sondern um es anzuerkennen.",
      "Das warst Du. Das bist Du.",
      "Du musst nicht mehr werden, als Du bist.",
      "Vielleicht musst Du Dich nur wieder ein bisschen erinnern."
    ]
  },
  {
    id: "2",
    slug: "was-ich-tat-als-er-vor-allen-schrie",
    title: "Was ich tat, als er vor allen schrie",
    excerpt: "Eine konkrete Szene, eine klare innere Haltung und die Frage, die Dich zurück zu Dir holt.",
    metaTitle: "Was ich tat, als er vor allen schrie",
    metaDescription: "Wo gibst Du Deine Kraft ab. Und was kannst Du konkret tun, um sie wieder zu Dir zu holen. Eine Szene aus dem Arbeitsalltag über Selbstwirksamkeit.",
    date: "12. März 2026",
    author: "Gudrun Murina",
    readTime: "3 Min. Lesezeit",
    content: [
      "Der erste Schwung vom Jahresanfang ist meist vorbei.",
      "Der Alltag läuft wieder. Und oft zeigt sich jetzt klarer, wo Du Dich anpasst, stillhältst oder hoffst, dass andere sich endlich anders verhalten.",
      "Heute geht es um einen nüchternen Blick auf Deine Position.",
      "Um die Frage: Wo gibst Du Deine Kraft ab? Und was kannst Du konkret tun, um sie wieder zu Dir zu holen?",
      "Selbstwirksamkeit, wie ich sie meine",
      "Selbstwirksamkeit ist für mich kein großes Wort.",
      "Sie ist der Moment, in dem Du wieder spürst: Ich bin beteiligt. Ich bin nicht ausgeliefert.",
      "Und ja, manchmal klopft dabei das Herz schneller. Gleichzeitig wird es leichter, weil Du eine Entscheidung triffst und sie lebst.",
      "„Selbstwirksamkeit ist eine Entscheidung, die Du triffst und lebst.“",
      "Wann gibst Du Deine Kraft ab?",
      "Ich erinnere mich an eine frühere Arbeitsstelle.",
      "Der Chef war laut und unberechenbar. Er schrie vor versammelter Mannschaft. Niemand wusste, wen es als Nächstes traf.",
      "Ich brauchte diesen Job. Gehen war keine Option.",
      "Also stellte ich mir eine Frage, die zum Drehpunkt wurde:",
      "Was ist unter diesen Bedingungen für mich möglich?",
      "Ich hörte auf, innerlich mit ihm zu diskutieren.",
      "Ich wartete nicht mehr darauf, dass er sich ändert.",
      "Stattdessen richtete ich meine Aufmerksamkeit zurück auf mich.",
      "Wenn er losschrie, stellte ich beide Füße fest auf den Boden.",
      "Ich hob den Kopf und atmete weiter, mit der Haltung: Mich brüllst Du nicht mehr an.",
      "Und ich wusste: Wenn er es trotzdem tut, stehe ich auf und verlasse kommentarlos den Raum.",
      "Er schrie weiter. Es traf mich nie wieder.",
      "Ich habe nicht ihn verändert.",
      "Ich habe verändert, wie ich in mir stehe.",
      "Die entscheidende Frage bleibt jedoch: Was tust Du jetzt?",
      "Vielleicht kennst Du das: Jemand überschreitet immer wieder Deine Grenze.",
      "In einem Gespräch, in einer Beziehung, im Team. Und ein Teil in Dir hofft, dass diese Person irgendwann einsichtig wird.",
      "Die entscheidende Frage bleibt jedoch: Was tust Du jetzt?",
      "Es geht nicht darum, alles hinzunehmen. Und auch nicht darum, sofort alles zu beenden.",
      "Manchmal ist der erste Schritt klein. Ein klarer Satz. Eine Grenze. Oder die Entscheidung, Dich innerlich nicht mehr herabzusetzen.",
      "Zwei Situationen, die viele kennen",
      "1) Deine Arbeit wird abgewertet.",
      "In einer Besprechung fällt ein Satz, der Dich klein macht. Bisher hast Du geschwiegen.",
      "Dein nächster Schritt könnte sein, ruhig zu sagen: „So möchte ich hier nicht angesprochen werden.“",
      "Mehr nicht. Dennoch ausgesprochen.",
      "2) Du bist dauerhaft überfordert.",
      "Du merkst, dass eine Aufgabe Dich aufreibt.",
      "Selbstwirksamkeit kann heißen, das offen anzusprechen, statt weiter zu funktionieren.",
      "Nicht irgendwann. Jetzt. In der Form, die heute möglich ist.",
      "Wenn Dein Herz schneller klopft",
      "Vielleicht klopft Dein Herz schneller, wenn Du etwas veränderst. Das ist normal.",
      "Entscheidend ist, dass Du Dir selbst glaubst, wenn Du merkst: So will ich nicht weitermachen.",
      "Nimm Dir dafür zwei Fragen mit:",
      "Wo hoffst Du gerade, dass andere sich verändern?",
      "Und was liegt heute in Deinem Einflussbereich?",
      "Es geht nicht um große Schritte.",
      "Es geht um Deinen nächsten."
    ]
  }
];
