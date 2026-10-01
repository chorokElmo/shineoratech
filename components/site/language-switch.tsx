import Link from 'next/link';
export function LanguageSwitch({ language, path = '' }: { language: 'ar' | 'fr'; path?: string }) {
  const destination = language === 'ar' ? `/fr/${path}${path ? '/' : ''}` : `/${path}${path ? '/' : ''}`;
  return <Link className="language-switch" href={destination} hrefLang={language === 'ar' ? 'fr' : 'ar'} lang={language === 'ar' ? 'fr' : 'ar'} dir={language === 'ar' ? 'ltr' : 'rtl'} aria-label={language === 'ar' ? 'Passer au français' : 'التبديل إلى العربية'}>{language === 'ar' ? 'Français' : 'العربية'}</Link>;
}
