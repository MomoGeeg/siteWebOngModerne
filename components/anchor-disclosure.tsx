"use client";

import { useEffect } from "react";

// Native anchor navigation also reveals a targeted disclosure, including on direct links.
export function AnchorDisclosure() {
  useEffect(() => {
    function reveal() {
      let target: HTMLElement | null;
      try { target = document.getElementById(decodeURIComponent(window.location.hash.slice(1))); }
      catch { return; }
      if (target instanceof HTMLDetailsElement) {
        target.open = true;
        requestAnimationFrame(() => target.scrollIntoView({ behavior: "instant", block: "start" }));
      }
    }
    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, []);
  return null;
}
