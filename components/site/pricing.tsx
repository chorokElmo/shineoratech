'use client';

import { useEffect, useState } from 'react';
import { Check, MessageCircle, Sparkles } from 'lucide-react';
import { pricingCopy } from '@/content/pricing';
import { whatsappUrl } from '@/lib/site';
import { Reveal } from './landing';
import './pricing.css';

type Language = keyof typeof pricingCopy;

// Accept the site's language state directly when available. Otherwise follow
// the document language, without adding or changing any navigation controls.
export function Pricing({ language }: { language?: Language }) {
  const [documentLanguage, setDocumentLanguage] = useState<Language>('fr');
  const [currency, setCurrency] = useState<'MAD' | 'USD'>('MAD');

  useEffect(() => {
    if (language) return;
    const root = document.documentElement;
    const update = () => setDocumentLanguage(
      root.lang.toLowerCase().startsWith('ar') || root.dir === 'rtl' ? 'ar' : 'fr',
    );
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ['lang', 'dir'] });
    return () => observer.disconnect();
  }, [language]);

  const selectedLanguage = language ?? documentLanguage;
  const copy = pricingCopy[selectedLanguage];
  const isArabic = selectedLanguage === 'ar';

  return (
    <section id="offres" className="section pricing-section" lang={selectedLanguage}
      dir={isArabic ? 'rtl' : 'ltr'} aria-labelledby="pricing-heading">
      <div className="container pricing-container">
        <Reveal>
          <div className="pricing-heading">
            <h2 id="pricing-heading">{copy.heading}</h2>
            <div className="pricing-currency" role="group" aria-label={copy.currencyLabel} dir="ltr">
              {(['MAD', 'USD'] as const).map(value => (
                <button key={value} type="button" aria-pressed={currency === value}
                  onClick={() => setCurrency(value)}>{value}</button>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal>
          <article className="pricing-card" aria-labelledby="starter-title">
            <span className="pricing-badge"><Sparkles size={14} aria-hidden="true" />{copy.badge}</span>
            <h3 id="starter-title">{copy.title}</h3>
            <p className="pricing-subtitle">{copy.subtitle}</p>
            <div className="pricing-price-region" aria-live="polite" aria-atomic="true">
              <p className="pricing-price">{currency === 'MAD' ? copy.price : <bdi dir="ltr">~ $160</bdi>}</p>
              {currency === 'USD' && <p className="pricing-approximate">{copy.approximate}</p>}
            </div>
            <ul className="pricing-features">
              {copy.features.map(feature => <li key={feature}><Check size={16} aria-hidden="true" /><span>{feature}</span></li>)}
            </ul>
            <a className="button pricing-cta" href={whatsappUrl(copy.message)} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={19} aria-hidden="true" />{copy.cta}
            </a>
            <p className="pricing-optional">{copy.optional}</p>
          </article>
          <details className="pricing-options">
            <summary>{copy.options}</summary>
            <div className="pricing-options-body">
              <p>{copy.billing}</p>
              <dl>{copy.extras.map(([label, price]) => <div key={label}><dt>{label}</dt><dd><bdi>{price}</bdi></dd></div>)}</dl>
            </div>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
