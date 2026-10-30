"use client";

import Link from "next/link";
import { RefreshCw } from "lucide-react";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="error-page"><p className="eyebrow">FODDE</p><h1>La page n’a pas pu s’afficher.</h1><p>Une erreur est survenue. Réessayez dans quelques instants.</p><button className="button button-green" onClick={reset}>Réessayer <RefreshCw size={18} aria-hidden="true" /></button><Link href="/">Revenir à l’accueil</Link></main>;
}
