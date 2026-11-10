import { useEffect, useState } from "react";
import { Link } from "wouter";

const GA_ID = "G-XG2L8G9DBR";
const STORAGE_KEY = "lwp-consent";
const OPEN_EVENT = "lwp-open-consent";

type Choice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function readChoice(): Choice | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function saveChoice(choice: Choice) {
  try {
    localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    /* Speicher nicht verfügbar: Banner erscheint beim nächsten Besuch erneut */
  }
}

let analyticsLoaded = false;

function loadAnalytics() {
  if (analyticsLoaded) return;
  analyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, { anonymize_ip: true });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
}

function removeAnalyticsCookies() {
  const host = window.location.hostname;
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    if (name.startsWith("_ga")) {
      for (const domain of ["", `; domain=${host}`, `; domain=.${host.replace(/^www\./, "")}`]) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
      }
    }
  });
}

/** Öffnet den Cookie-Banner erneut (z. B. aus dem Footer). */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = readChoice();
    if (choice === "granted") loadAnalytics();
    else if (choice === null) setVisible(true);

    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const decide = (choice: Choice) => {
    const previous = readChoice();
    saveChoice(choice);
    setVisible(false);
    if (choice === "granted") {
      loadAnalytics();
    } else {
      removeAnalyticsCookies();
      // Ein bereits geladenes Analytics-Skript lässt sich nur durch Neuladen stoppen
      if (previous === "granted") window.location.reload();
    }
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-banner-title"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-background shadow-lg"
    >
      <div className="container mx-auto max-w-4xl px-4 py-5 md:flex md:items-center md:gap-8">
        <div className="text-sm text-foreground/80">
          <p id="cookie-banner-title" className="font-serif text-lg text-primary mb-1">
            Darf ich Deinen Besuch statistisch auswerten?
          </p>
          <p>
            Mit Deiner Zustimmung nutze ich Google Analytics, um zu sehen, welche Seiten gelesen werden.
            Dabei werden Cookies gesetzt und Daten an Google übertragen. Du kannst Deine Wahl jederzeit
            unten auf der Seite unter „Cookie-Einstellungen“ ändern. Mehr dazu in der{" "}
            <Link href="/datenschutz" className="text-primary underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <div className="mt-4 flex shrink-0 flex-col gap-3 sm:flex-row md:mt-0">
          <button
            type="button"
            onClick={() => decide("denied")}
            className="min-h-11 rounded-md border border-primary px-5 py-2 text-sm font-medium text-primary hover:bg-primary/5"
          >
            Ablehnen
          </button>
          <button
            type="button"
            onClick={() => decide("granted")}
            className="min-h-11 rounded-md border border-primary px-5 py-2 text-sm font-medium text-primary hover:bg-primary/5"
          >
            Zustimmen
          </button>
        </div>
      </div>
    </div>
  );
}
