import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AnchorDisclosure } from "@/components/anchor-disclosure";

export const metadata: Metadata = {
  title: "FODDE — Agir avec les communautés, construire un avenir durable",
  description: "Découvrez la vision et les domaines d’intervention de FODDE, ONG basée au Sénégal, engagée pour l’autonomisation des communautés et le développement durable.",
  applicationName: "FODDE",
  robots: { index: false, follow: false },
};
export const viewport: Viewport = { themeColor: "#1D6045" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body><a className="skip-link" href="#contenu">Aller au contenu principal</a>{children}<AnchorDisclosure /></body></html>;
}
