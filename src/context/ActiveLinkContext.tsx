"use client";

import { createContext, useContext, ReactNode, useMemo } from "react";

interface ActiveLinkContextType {
  activeLink: string;
}

const ActiveLinkContext = createContext<ActiveLinkContextType | null>(null);

export function ActiveLinkProvider({
  children,
  link,
}: {
  children: ReactNode;
  link: string;
}) {
  const activeLink = useMemo(() => link, [link]);

  return (
    <ActiveLinkContext.Provider value={{ activeLink }}>
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
