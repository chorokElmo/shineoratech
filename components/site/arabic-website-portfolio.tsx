'use client';

import { useRef, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import { websites as originals } from '@/content/websites';
const categoriesMap: Record<string,string> = { Services: 'الخدمات', 'Voyage & hôtellerie': 'السفر والضيافة', 'Industrie & logistique': 'الصناعة والخدمات اللوجستية', 'E-commerce': 'التجارة الإلكترونية', 'Plateformes & outils': 'المنصات والأدوات' };
const descriptions = ["موقع فندقي للتعرف على المنشأة والتخطيط للإقامة.","عرض لحلول المواد الكيميائية ومعالجة المياه.","موقع لخدمات النقل والخدمات اللوجستية للمركبات.","خدمات الاستثمار وتأسيس الشركات في المغرب.","أدلة وجهات ونصائح للتخطيط للسفر.","منصة للتعارف واستكشاف الملفات الشخصية.","متجر تقنيات ومعدات المنزل الذكي.","عرض لخدمات وهوية وكالة تسويق رقمي.","موقع شركة لتصنيع المنتجات البلاستيكية.","أدوات وحاسبات عملية للاستخدام اليومي.","عرض لشركة تصنيع الأنابيب وحلولها الصناعية.","مركز للاستشارات النفسية والأسرية والخدمات والورش."];
const websites = originals.map((project, i) => ({ ...project, category: categoriesMap[project.category], description: descriptions[i] }));

export function ArabicWebsitePortfolio() {
  const [category, setCategory] = useState('الكل');
  const [expanded, setExpanded] = useState(false);
  const categories = ['الكل', 'الخدمات', 'السفر والضيافة', 'الصناعة والخدمات اللوجستية', 'التجارة الإلكترونية', 'المنصات والأدوات'];
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
  const filtered = ordered.filter(site => category === 'الكل' || site.category === category);
  const visible = expanded ? filtered : filtered.slice(0, 6);

  return (
    <div className="website-portfolio arabic-portfolio" id="sites-web">
      <div className="website-heading">
        <div>
          <p className="eyebrow">معرض / مواقع إلكترونية</p>
          <h3>مواقع مختارة.</h3>
          <p>استكشف المواقع حسب المجال.</p>
        </div>

      </div>
      <div className="portfolio-filters" role="group" aria-label="تصفية المواقع حسب المجال">
        {categories.map(item => <button key={item} type="button" aria-pressed={category === item} aria-controls="portfolio-projects" onClick={() => { setCategory(item); setExpanded(false); }}>{item}</button>)}
      </div>
      <p className="website-count" role="status">{visible.length} من أصل {filtered.length} موقعاً</p>
      <div className="website-grid" id="portfolio-projects">
        {visible.map((site) => (
          <article className="website-card" key={site.url}>
            <button type="button" className="website-screen" onClick={() => enlarge(site)} aria-label={`تكبير صورة ${site.name}`}>
              <span className="browser-frame"><span className="browser-dots" aria-hidden="true"><i/><i/><i/></span><span className="browser-address">{site.domain}</span><Maximize2 size={15} aria-hidden="true"/></span>
              <span className="website-preview"><img src={site.image} alt={`صورة موقع ${site.name}`} loading="lazy" decoding="async" width={1440} height={1000}/><span className="preview-enlarge"><Maximize2 size={16}/> تكبير</span></span>
            </button>
            <div className="website-info">
              <h4>{site.name}</h4>
              <p className="website-description">{site.description}</p>
              <a href={site.url} target="_blank" rel="noopener noreferrer" aria-label={`زيارة الموقع ${site.name} — تبويب جديد`}>زيارة الموقع</a>
            </div>
          </article>
        ))}
      </div>
      {filtered.length > 6 && <div className="portfolio-expand"><button type="button" className="button" aria-expanded={expanded} aria-controls="portfolio-projects" onClick={() => setExpanded(!expanded)}>{expanded ? 'عرض مواقع أقل' : 'عرض جميع المواقع'}</button></div>}
      <dialog ref={viewer} className="screenshot-viewer" aria-labelledby="screenshot-title" onClose={() => { document.body.style.overflow = ''; }} onClick={event => { if (event.target === event.currentTarget) closeViewer(); }}>
        <div className="screenshot-panel">
          <div className="screenshot-toolbar"><h3 id="screenshot-title">{selected?.name}</h3><button type="button" autoFocus onClick={closeViewer} aria-label="إغلاق المعاينة"><X size={22}/></button></div>
          {selected && <div className="screenshot-scroll"><img src={selected.image} alt={`صورة مكبرة لموقع ${selected.name}`}/></div>}
        </div>
      </dialog>
      <p className="portfolio-note">تعرض الصور المواقع وقت التقاطها. قد تتغير بعض الروابط أو تصبح غير متاحة مؤقتاً.</p>
    </div>
  );
}







