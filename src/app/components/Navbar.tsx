import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Package, Menu, X, ShieldCheck, Languages } from "lucide-react";

type GoogleTranslateElementConstructor = new (
  options: { pageLanguage: string; autoDisplay: boolean },
  elementId: string,
) => unknown;

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement?: GoogleTranslateElementConstructor;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

let googleTranslateScript: Promise<void> | undefined;

function loadGoogleTranslate(): Promise<void> {
  if (window.google?.translate?.TranslateElement) {
    return Promise.resolve();
  }

  if (googleTranslateScript) {
    return googleTranslateScript;
  }

  googleTranslateScript = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;

    const timeout = window.setTimeout(() => {
      script.remove();
      googleTranslateScript = undefined;
      reject(new Error("Google Translate took too long to initialize."));
    }, 15000);

    window.googleTranslateElementInit = () => {
      window.clearTimeout(timeout);
      if (!window.google?.translate?.TranslateElement) {
        script.remove();
        googleTranslateScript = undefined;
        reject(new Error("The Google Translate API was unavailable."));
        return;
      }
      resolve();
    };

    script.onerror = () => {
      window.clearTimeout(timeout);
      script.remove();
      googleTranslateScript = undefined;
      reject(new Error("The Google Translate script could not be loaded."));
    };

    document.head.appendChild(script);
  });

  return googleTranslateScript;
}

function GoogleTranslate() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const [retry, setRetry] = useState(0);
  const initialized = useRef(false);

  useEffect(() => {
    if (!isOpen || initialized.current) return;

    let isMounted = true;
    setStatus("loading");

    loadGoogleTranslate()
      .then(() => {
        if (!isMounted) return;

        const TranslateElement = window.google?.translate?.TranslateElement;
        if (!TranslateElement) {
          throw new Error("The Google Translate API was unavailable.");
        }

        new TranslateElement(
          { pageLanguage: "en", autoDisplay: false },
          "google_translate_element",
        );
        initialized.current = true;
        document
          .querySelector("#google_translate_element select.goog-te-combo")
          ?.setAttribute("aria-label", "Translate this page");
        setStatus("ready");
      })
      .catch((error: unknown) => {
        console.error("Google Translate failed to initialize.", error);
        if (isMounted) setStatus("error");
      });

    return () => {
      isMounted = false;
    };
  }, [isOpen, retry]);

  return (
    <div className="navbar-translate relative flex items-center">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="google-translate-panel"
        onClick={() => setIsOpen((open) => !open)}
        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-slate-200 transition-colors hover:border-orange-500 hover:text-white"
      >
        <Languages className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>Translate</span>
      </button>
      <div
        id="google-translate-panel"
        className={`absolute right-0 top-full z-60 mt-3 min-w-56 rounded-xl border border-slate-700 bg-slate-900 p-3 shadow-2xl ${
          isOpen ? "" : "hidden"
        }`}
      >
        <div id="google_translate_element" />
        {status === "loading" && (
          <span className="text-xs text-slate-300" role="status">
            Loading translation options...
          </span>
        )}
        {status === "error" && (
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-slate-300">
              Translation is unavailable.
            </span>
            <button
              type="button"
              onClick={() => setRetry((attempt) => attempt + 1)}
              className="text-xs font-semibold text-orange-400 underline underline-offset-2 hover:text-orange-300"
            >
              Retry
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for a more premium feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Track Shipment", path: "/tracking" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 py-3 shadow-2xl backdrop-blur-md"
          : "bg-slate-950 py-5"
      }`}
    >
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="rounded-xl bg-orange-500 p-2 shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:rotate-12">
              <Package className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-black uppercase tracking-tighter text-white">
              STERLING CREST
              <span className="text-orange-500">- Logistics ltd</span>
            </span>
          </Link>

          {/* DESKTOP NAV & ACTIONS */}
          <div className="hidden xl:flex items-center gap-8">
            <div className="flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 text-sm font-extrabold uppercase tracking-[0.2em] transition-all duration-300 ${
                    isActive(link.path)
                      ? "text-orange-500"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-orange-500" />
                  )}
                </Link>
              ))}
            </div>

            <div className="h-6 w-px bg-slate-800" />

            <div className="flex items-center gap-4">
              <Link
                to="/tracking"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-black uppercase tracking-widest text-white shadow-xl transition-all hover:border-orange-500 hover:bg-orange-500"
              >
                <ShieldCheck className="h-4 w-4" />
                Track Parcel
              </Link>
              <GoogleTranslate />
            </div>
          </div>

          {/* MOBILE & TABLET RIGHT ACTIONS (TOGGLE + TRANSLATE) */}
          <div className="flex items-center gap-3 xl:hidden">
            <GoogleTranslate />
            <button
              type="button"
              aria-label={
                isOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl bg-slate-900 p-2 text-slate-400 transition-colors hover:text-orange-500"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-t border-slate-900 bg-slate-950 shadow-2xl animate-in slide-in-from-top duration-300 xl:hidden">
          <div className="space-y-6 px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-lg font-bold uppercase tracking-widest ${
                  isActive(link.path) ? "text-orange-500" : "text-slate-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/tracking"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-orange-500 py-4 font-black uppercase tracking-[0.2em] text-white shadow-lg shadow-orange-500/20"
                onClick={() => setIsOpen(false)}
              >
                <ShieldCheck className="h-5 w-5" />
                Track Parcel
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
