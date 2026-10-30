import { ArrowUpRight, Leaf } from "lucide-react";
import type { ReactNode } from "react";

export function Logo({ light = false }: { light?: boolean }) {
  return <a className={`logo ${light ? "logo-light" : ""}`} href="#accueil" aria-label="FODDE — retour à l’accueil">
    <span className="logo-mark" aria-hidden="true"><Leaf strokeWidth={1.5} /></span>
    <span><span className="logo-word">FODDE<span className="logo-dot">.</span></span><span className="logo-subtitle">Ensemble, pour demain</span></span>
  </a>;
}

export function SectionHeading({ eyebrow, title, children, light = false }: { eyebrow: string; title: string; children?: ReactNode; light?: boolean }) {
  return <div className={`section-heading ${light ? "heading-light" : ""}`}><p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2>{children && <div className="section-intro">{children}</div>}</div>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <a className="text-link" href={href}>{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}
