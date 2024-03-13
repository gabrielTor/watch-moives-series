"use client";
import { useEffect } from "react";

export default function useClickOutside(
  setNavOpen: (v: boolean) => void,
  className = ".nav-open"
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetElement = event.target as Element;

      if (!targetElement.closest(className)) {
        setNavOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setNavOpen]);

  return null;
}
