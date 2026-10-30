import Link from "next/link";

export default function NotFound() {
  return <main className="error-page"><p className="eyebrow">FODDE · Page introuvable</p><h1>Ce chemin reste à tracer.</h1><p>La page demandée n’existe pas ou a été déplacée.</p><Link className="button button-green" href="/">Revenir à l’accueil</Link></main>;
}
