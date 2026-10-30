# FODDE — site institutionnel

Première version de la page d’accueil, en français, réalisée avec Next.js (App Router), TypeScript, Tailwind CSS et Lucide React.

## Développement

Prérequis : Node.js 20.9 ou supérieur (validation effectuée avec Node.js 24), npm.

```bash
npm ci
npm run dev
```

Le serveur écoute sur le port 3000. Sur une machine locale, ouvrir `http://localhost:3000`. Dans un environnement cloud, utiliser le mécanisme de transfert de port de l’éditeur s’il est disponible. L’interface d’onboarding ne fournit pas de lien de prévisualisation web.

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` démarre la version compilée. Aucun secret, service de base de données ou compte externe n’est nécessaire. Les polices système et le visuel local évitent tout appel à un service de contenu tiers.

## Organisation

- `app/` : page d’accueil, styles, métadonnées et états de chargement, d’erreur et de page introuvable.
- `components/` : navigation responsive, filtres de projets, carte schématique, composants éditoriaux, préparation locale d’une note de collaboration.
- `lib/content.ts` : vision fournie, objectifs, domaines et exemples de projets.
- `public/images/` : illustration principale optimisée en WebP et informations de provenance.

La majorité du contenu est rendue côté serveur. Les composants clients sont limités aux interactions. Les projets sont filtrés dans le navigateur, les liens ciblant des panneaux en révèlent le contenu, et la note de collaboration est téléchargée sans envoi ni stockage serveur.

## Contenus à valider avant publication

- Le logo typographique est provisoire. Le logo fourni dans la conversation doit être livré sous forme de fichier officiel autorisé, idéalement SVG, avant intégration définitive.
- Le visuel principal est généré et explicitement signalé. Il ne documente aucune action réelle de FODDE. Le remplacer par une photographie officielle autorisée et adapter son texte alternatif et sa légende.
- Les trois projets et la rubrique actualité sont des exemples de format éditorial, sans dates, lieux ou résultats inventés.
- Les indicateurs sont volontairement vides. Ajouter chiffres, sources, période et méthode après validation.
- La silhouette du Sénégal est un schéma indicatif non géoréférencé. Ajouter les données officielles et une cartographie de référence avant d’afficher des zones d’intervention.
- Aucun partenaire, témoignage, numéro de téléphone, adresse ou réseau social n’est inventé.
- La note de collaboration ne constitue pas un formulaire de contact. Renseigner les coordonnées officielles avant de proposer un envoi réel.
- Compléter les mentions légales et la politique d’hébergement. L’indexation est désactivée dans `app/layout.tsx` pour cette version de démonstration ; l’activer seulement pour la publication officielle validée.

## Accessibilité

Structure sémantique, langue française, lien d’évitement, focus visible, navigation clavier, boutons avec état accessible, annonces des résultats de filtre, panneaux natifs et respect de la réduction des animations. Les cartes et graphiques ne communiquent aucun résultat non validé. Vérifier à nouveau les contrastes et textes alternatifs lors du remplacement des contenus.
