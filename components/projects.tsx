"use client";

import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { projects, projectFilters, type ProjectFilter } from "@/lib/content";
import { SectionHeading } from "@/components/ui";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("Tous");
  const visible = projects.filter(project => filter === "Tous" || project.category === filter);
  return <section id="projets" className="section projects-section">
    <div className="container">
      <div className="section-top"><SectionHeading eyebrow="Du terrain au changement" title="Des actions qui prennent racine."><p>Chaque initiative commence avec les communautés. Découvrez ici la future présentation de nos projets et réalisations.</p></SectionHeading><a href="#impact" className="text-link">Notre approche de l’impact <ArrowDown size={18} aria-hidden="true" /></a></div>
      <div className="project-toolbar"><div className="filter-group" role="group" aria-label="Filtrer les exemples de projets par domaine">{projectFilters.map(item => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}</div><span className="demo-label">Contenus de démonstration</span></div>
      <p className="sr-only" role="status" aria-live="polite">{visible.length} {visible.length > 1 ? "exemples affichés" : "exemple affiché"}</p>
      <div className="project-grid">{visible.map(project => <article className="project-card" key={project.id}>
        <div className={`project-art ${project.style}`}><div className="art-lines" /><project.icon aria-hidden="true" strokeWidth={1} /><span className="art-caption">Photographie officielle à venir</span><span className="project-example">Exemple illustratif</span></div>
        <div className="project-body"><p className="card-category">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p><details><summary>À propos de cet exemple <ArrowUpRight size={17} aria-hidden="true" /></summary><p>Ce contenu présente le format d’une future fiche projet. Il ne décrit pas un projet réel de FODDE. Lieu, calendrier, partenaires et résultats seront renseignés après validation.</p></details></div>
      </article>)}</div>
    </div>
  </section>;
}
