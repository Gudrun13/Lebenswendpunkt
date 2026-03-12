import { useState } from "react";
import { MessageCircle, X, Send, HeartHandshake, Phone, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

export function FirstAidBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: "bot", 
      content: "Hallo. Ich bin Dein Erste-Hilfe-Begleiter für akute Momente. Spürst Du gerade starke Unruhe oder Angst?",
      options: ["Ja, ich brauche Hilfe", "Nein, ich schaue nur", "Notfallnummern"]
    }
  ]);

  const handleOptionClick = (option: string) => {
    // Add user message
    const newMessages = [...messages, { role: "user", content: option }];
    setMessages(newMessages);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = { role: "bot", content: "", options: [] as string[] };
      
      if (option === "Ja, ich brauche Hilfe") {
        botResponse = {
          role: "bot",
          content: "Das ist okay. Du bist nicht allein. Wollen wir gemeinsam eine kurze Atemübung machen, um das Nervensystem zu beruhigen?",
          options: ["Ja, gerne", "Lieber eine Bodenübung", "Notfallnummern"]
        };
      } else if (option === "Ja, gerne") {
         botResponse = {
          role: "bot",
          content: "Gut. Atme tief durch die Nase ein (zähle bis 4)... halte kurz... und atme lange durch den Mund aus (zähle bis 6). Wiederholen wir das.",
          options: ["Mir geht es etwas besser", "Nochmal"]
        };
      } else if (option.includes("Notfallnummern")) {
         botResponse = {
          role: "bot",
          content: "Wichtig: Bei akuter Suizidgefahr ruf bitte sofort die 112 oder die Telefonseelsorge (0800 111 0 111). Ich bin nur ein digitaler Assistent.",
          options: ["Zurück zum Anfang"]
        };
      } else {
        botResponse = {
          role: "bot",
          content: "Ich bin hier, wenn Du mich brauchst.",
          options: ["Start"]
        };
      }
      
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-4 md:bottom-28 md:right-8 z-50 w-[350px] bg-white rounded-2xl shadow-2xl border border-primary/20 overflow-hidden flex flex-col max-h-[500px]"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center justify-between text-primary-foreground">
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5" />
                <span className="font-serif font-bold">Erste Hilfe Bot</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-primary-foreground hover:bg-white/20 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Chat Area */}
            <ScrollArea className="flex-1 p-4 bg-gray-50 h-[350px]">
              <div className="flex flex-col gap-4">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div 
                      className={`px-4 py-3 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
                        msg.role === 'user' 
                          ? 'bg-primary text-primary-foreground rounded-br-none' 
                          : 'bg-white text-foreground border border-gray-100 shadow-sm rounded-bl-none'
                      }`}
                    >
                      {msg.content}
                    </div>
                    
                    {msg.role === 'bot' && msg.options && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {msg.options.map((opt, i) => (
                          <button
                            key={i}
                            onClick={() => handleOptionClick(opt)}
                            className="text-xs bg-white border border-primary/30 text-primary hover:bg-primary/5 px-3 py-1.5 rounded-full transition-colors"
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            {/* Input Placeholder (Disabled for demo mostly) */}
            <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input 
                type="text" 
                placeholder="Wähle eine Option..." 
                disabled
                className="flex-1 bg-gray-50 border-none rounded-full px-4 text-sm focus:ring-0 cursor-not-allowed"
              />
              <Button size="icon" className="rounded-full h-10 w-10 shrink-0" disabled>
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Disclaimer */}
            <div className="bg-gray-100 p-2 text-[10px] text-center text-gray-500">
              Dies ist kein Ersatz für professionelle Therapie. Im Notfall 112 wählen.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
        <span className="absolute right-full mr-3 bg-white text-foreground text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-primary/10">
          Erste Hilfe bei Angst
        </span>
      </motion.button>
    </>
  );
}
