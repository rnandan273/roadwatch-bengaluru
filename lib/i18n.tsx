"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "./data";
import { STRINGS, StringSet } from "./strings";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  L: StringSet;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "roadwatch-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "en" || saved === "kn") setLangState(saved);
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang, L: STRINGS[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
