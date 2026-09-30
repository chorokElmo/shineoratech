'use client';

import { useRef, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { websites } from '@/content/websites';

export function WebsitePortfolio() {
  const [category, setCategory] = useState('Tous');
  const [expanded, setExpanded] = useState(false);
  const categories = ['Tous', 'Services', 'Voyage & hôtellerie', 'Industrie & logistique', 'E-commerce', 'Plateformes & outils'];
  const [selected, setSelected] = useState<(typeof websites)[number] | null>(null);
  const viewer = useRef<HTMLDialogElement>(null);
  function enlarge(site: (typeof websites)[number]) {
    setSelected(site);
    viewer.current?.showModal();
    document.body.style.overflow = 'hidden';
  }
  function closeViewer() { viewer.current?.close(); }

  const featuredDomains = ['etizanksa.com', 'okzawaj.com', 'dbsmorocco.com', 'safartips.com'];
  const ordered = [...featuredDomains.map(domain => websites.find(site => site.domain === domain)!), ...websites.filter(site => !featuredDomains.includes(site.domain))];
  const filtered = ordered.filter(site => category === 'Tous' || site.category === category);
  const visible = expanded ? filtered : filtered.slice(0, 6);

  return (
    <div className="website-portfolio" id="sites-web">
      <div className="website-heading">
        <div>
          <p className="eyebrow">PORTFOLIO / SITES WEB</p>
          <h3>Notre sélection.</h3>
          <p>Explorez nos projets par univers.</p>
        </div>

      </div>
      <div className="portfolio-filters" role="group" aria-label="Filtrer les projets par catégorie">
        {categories.map(item => <button key={item} type="button" aria-pressed={category === item} aria-controls="portfolio-projects" onClick={() => { setCategory(item); setExpanded(false); }}>{item}</button>)}
      </div>
      <p className="website-count" role="status">{visible.length} site{visible.length !== 1 ? 's' : ''} sur {filtered.length}</p>
      <div className="website-grid" id="portfolio-projects">
        {visible.map((site) => (
          <article className="website-card" key={site.url}>
            <button type="button" className="website-screen" onClick={() => enlarge(site)} aria-label={`Agrandir la capture de ${site.name}`}>
              <span className="browser-frame"><span className="browser-dots" aria-hidden="true"><i/><i/><i/></span><span className="browser-address">{site.domain}</span><Maximize2 size={15} aria-hidden="true"/></span>
              <span className="website-preview"><img src={site.image} alt={`Capture de ${site.name}`} loading="lazy" decoding="async" width={1440} height={1000}/><span className="preview-enlarge"><Maximize2 size={16}/> Agrandir</span></span>
            </button>
            <div className="website-info">
              <h4>{site.name}</h4>
              <p className="website-description">{site.description}</p>
              <a href={site.url} target="_blank" rel="noopener noreferrer" aria-label={`Voir le site ${site.name} — nouvel onglet`}>Voir le site</a>
            </div>
          </article>
        ))}
      </div>
      {filtered.length > 6 && <div className="portfolio-expand"><button type="button" className="button" aria-expanded={expanded} aria-controls="portfolio-projects" onClick={() => setExpanded(!expanded)}>{expanded ? 'Voir moins de projets' : 'Voir tous les projets'}</button></div>}
      <dialog ref={viewer} className="screenshot-viewer" aria-labelledby="screenshot-title" onClose={() => { document.body.style.overflow = ''; }} onClick={event => { if (event.target === event.currentTarget) closeViewer(); }}>
        <div className="screenshot-panel">
          <div className="screenshot-toolbar"><h3 id="screenshot-title">{selected?.name}</h3><button type="button" autoFocus onClick={closeViewer} aria-label="Fermer l’aperçu"><X size={22}/></button></div>
          {selected && <div className="screenshot-scroll"><img src={selected.image} alt={`Capture agrandie de ${selected.name}`}/></div>}
        </div>
      </dialog>
      <p className="portfolio-note">Les captures montrent les sites au moment de leur consultation. Certains liens peuvent avoir changé ou être temporairement indisponibles.</p>
    </div>
  );
}







