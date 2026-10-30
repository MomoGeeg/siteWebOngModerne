import { Sprout, HeartPulse, Drama, Droplets, Zap, Waves, Trees, GraduationCap } from "lucide-react";

export const navigation = [
  { label: "Qui sommes-nous ?", href: "#qui-sommes-nous" },
  { label: "Nos actions", href: "#domaines" },
  { label: "Nos projets", href: "#projets" },
  { label: "Actualités", href: "#actualites" },
];

export const vision = "Une organisation performante, qui œuvre pour l’équité de genre, respecte les spécificités socioculturelles, préserve l’environnement et contribue au développement durable endogène, pour une autonomisation du citoyen et des communautés, dans un monde solidaire.";

export const objectives = [
  "Renforcement des capacités et des moyens d’action de FODDE et ses partenaires à la base.",
  "Protection et promotion des groupes vulnérables.",
  "Repositionnement stratégique de FODDE par rapport à la territorialisation des politiques publiques.",
  "Protection de l’environnement et promotion d’une agriculture durable.",
  "Renforcement de la gouvernance institutionnelle, financière et administrative.",
];

export const domains = [
  { title: "Agriculture", icon: Sprout, text: "Pour une agriculture durable, ancrée dans les territoires." },
  { title: "Santé", icon: HeartPulse, text: "La santé et le bien-être au cœur du développement." },
  { title: "Culture", icon: Drama, text: "Valoriser les identités et les savoirs des communautés." },
  { title: "Hydraulique", icon: Droplets, text: "L’accès à l’eau, une condition essentielle de l’autonomie." },
  { title: "Électrification", icon: Zap, text: "L’énergie au service de la vie et des activités locales." },
  { title: "Hygiène et assainissement", icon: Waves, text: "Des cadres de vie sains pour toutes et tous." },
  { title: "Environnement", icon: Trees, text: "Préserver les ressources et les équilibres naturels." },
  { title: "Éducation et formation", icon: GraduationCap, text: "Développer les savoirs et les moyens d’agir." },
];

export const projectFilters = ["Tous", "Agriculture", "Environnement", "Éducation"] as const;
export type ProjectFilter = (typeof projectFilters)[number];
export const projects = [
  { id: "agriculture", category: "Agriculture", title: "Cultiver des pratiques durables", description: "Emplacement destiné à présenter une action agricole, ses objectifs et ses résultats vérifiés.", icon: Sprout, style: "agriculture" },
  { id: "environnement", category: "Environnement", title: "Préserver les ressources locales", description: "Emplacement destiné à documenter une initiative de protection de l’environnement.", icon: Trees, style: "environment" },
  { id: "education", category: "Éducation", title: "Apprendre pour mieux agir", description: "Emplacement destiné à valoriser une action d’éducation ou de formation.", icon: GraduationCap, style: "education" },
];
