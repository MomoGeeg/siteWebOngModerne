"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Download, CheckCircle2 } from "lucide-react";

export function Collaboration() {
  const [prepared, setPrepared] = useState(false);
  const [error, setError] = useState("");
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setPrepared(false);
    const data = new FormData(event.currentTarget);
    try {
      const text = `PROPOSITION DE COLLABORATION — FODDE\n\nDomaine : ${data.get("domain")}\n\nMon idée :\n${data.get("idea")}\n\nDocument préparé localement. Aucun message n’a été transmis à FODDE. Les coordonnées officielles seront ajoutées après validation.\n`;
      const url = URL.createObjectURL(new Blob([text], { type: "text/plain;charset=utf-8" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = "proposition-collaboration-fodde.txt";
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      setPrepared(true);
    } catch {
      setError("La préparation du fichier a échoué. Vous pouvez copier votre idée et réessayer.");
    }
  }
  return <section id="collaboration" className="collaboration-section">
    <div className="container collaboration-inner"><div><p className="eyebrow"><span />Construisons la suite, ensemble</p><h2>Les changements durables<br />commencent par une rencontre.</h2><p>Organisation, institution, acteur local ou citoyen : partageons nos idées et nos engagements pour les communautés.</p><a className="button button-gold" href="#preparer-collaboration">Préparer une collaboration <ArrowUpRight size={18} aria-hidden="true" /></a><p className="contact-note">Les coordonnées officielles de FODDE seront publiées après validation.</p></div><div className="collaboration-symbol" aria-hidden="true"><span /><span /><span /><span /><span /><span /><span /><span /><span /></div></div>
    <div className="container"><details id="preparer-collaboration" className="collaboration-details"><summary>Votre idée de collaboration <ArrowUpRight size={20} aria-hidden="true" /></summary><form onSubmit={prepare} onChange={() => { setPrepared(false); setError(""); }}><p>Préparez une note à conserver sur votre appareil. Ce formulaire n’envoie aucune donnée et ne constitue pas une prise de contact.</p><div className="form-grid"><div><label htmlFor="domain">Domaine de collaboration</label><select id="domain" name="domain" defaultValue="Agriculture"><option>Agriculture</option><option>Santé</option><option>Culture</option><option>Hydraulique</option><option>Électrification</option><option>Hygiène et assainissement</option><option>Environnement</option><option>Éducation et formation</option><option>Autre proposition</option></select></div><div><label htmlFor="idea">Votre idée <span>(obligatoire)</span></label><textarea id="idea" name="idea" required minLength={10} maxLength={3000} rows={4} placeholder="Décrivez les objectifs de votre proposition…" /></div></div><button className="button button-gold" type="submit">Télécharger ma note <Download size={17} aria-hidden="true" /></button>{prepared && <p role="status" className="form-status"><CheckCircle2 size={18} aria-hidden="true" />Votre note est prête ; le téléchargement a été demandé. Aucun message n’a été envoyé.</p>}{error && <p role="alert">{error}</p>}</form></details></div>
  </section>;
}
