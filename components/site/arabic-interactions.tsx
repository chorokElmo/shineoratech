'use client';
import { useState } from 'react';
import { arabicServices } from '@/content/ar-services';
export function ArabicProcess() {
  const [active, setActive] = useState(0);
  const steps = arabicServices['creation-site-web'].steps;
  return <section className="section light" id="processus"><div className="container"><p className="eyebrow">04 / طريقة العمل</p><h2>رؤية مشتركة.<br />وخطوات واضحة.</h2><div className="process-grid">{steps.map(([heading, text], index) => <button type="button" key={heading} className={`process-step ${active === index ? 'active' : ''}`} onClick={() => setActive(index)} aria-expanded={active === index} aria-controls="ar-process-detail"><span className="step-number">0{index + 1}</span><h3>{heading}</h3><p>{text}</p><span className="step-progress" /></button>)}</div><div className="process-detail" id="ar-process-detail" aria-live="polite"><div><span>المرحلة 0{active + 1}</span><p>{steps[active][1]}</p></div></div></div></section>;
}
function ArabicSalon({ after = false }: { after?: boolean }) {
  return <div className={`salon-preview ${after ? 'salon-after' : 'salon-before'}`}><div className="salon-nav"><strong>{after ? 'استوديو الجمال' : 'صالون التجميل'}</strong><span>الرئيسية · خدماتنا · تواصل</span></div><div className="salon-content"><span>{after ? 'لحظة خاصة بك' : 'مرحباً بك'}</span><h3>{after ? <>جمالك.<br /><em>بلمسة طبيعية.</em></> : 'صالون التجميل الخاص بك'}</h3><p>{after ? 'عناية صممت من أجلك، في مساحة تمنحك الراحة.' : 'نقدم خدمات متعددة. تواصل معنا لمعرفة التفاصيل.'}</p><span className="salon-button">{after ? 'احجزي موعدك' : 'تواصلي معنا'}</span></div><div className="salon-services"><span>العناية بالبشرة</span><span>الاسترخاء</span><span>الجمال</span></div></div>;
}
export function ArabicBeforeAfter() {
  const [value, setValue] = useState(50);
  return <section className="section comparison-section" id="refonte"><div className="container"><p className="eyebrow">05 / إعادة التصميم</p><h2>النشاط نفسه.<br /><span className="accent">وحضور أكثر وضوحاً.</span></h2><p className="service-intro">قارن بين طريقتين لعرض النشاط. حرك المؤشر لاستكشاف الفرق.</p><div className="comparison" dir="ltr"><div className="comparison-base" dir="rtl"><ArabicSalon after /></div><div className="comparison-overlay" dir="rtl" style={{clipPath:`inset(0 ${100-value}% 0 0)`}}><ArabicSalon /></div><div className="comparison-labels"><span>قبل</span><span>بعد ShineoraTech</span></div><div className="comparison-divider" style={{left:`${value}%`}} aria-hidden="true"><span>↔</span></div><input className="arabic-comparison-range" type="range" min={0} max={100} value={value} onChange={event => setValue(Number(event.target.value))} aria-label="مقارنة الموقع قبل إعادة التصميم وبعدها" /></div><div className="comparison-caption"><span>تصميم افتراضي لصالون تجميل، دون ادعاء نتائج عميل.</span><span>حرك المؤشر أو استخدم مفاتيح الأسهم</span></div></div></section>;
}
