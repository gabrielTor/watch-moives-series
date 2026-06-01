"use client";

import { createContext, useContext, ReactNode, useMemo } from "react";

interface ActiveLinkContextType {
  activeLink: string;
  spanishLink: string;
}

const ActiveLinkContext = createContext<ActiveLinkContextType | null>(null);

export function ActiveLinkProvider({
  children,
  link,
  spanishLink,
}: {
  children: ReactNode;
  link: string;
  spanishLink: string;
}) {
  const value = useMemo(() => ({ activeLink: link, spanishLink }), [link, spanishLink]);

  return (
    <ActiveLinkContext.Provider value={value}>
      {children}
    </ActiveLinkContext.Provider>
  );
}

export function useActiveLink() {
  const ctx = useContext(ActiveLinkContext);
  if (!ctx) {
    throw new Error("useActiveLink must be used within ActiveLinkProvider");
  }
  return ctx;
}
