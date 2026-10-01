import type { Metadata } from 'next';
import { site } from '@/lib/site';
import '@/app/globals.css';
import '@/app/sections.css';
import '@/app/fonts.css';
import '@/app/arabic.css';
export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: 'ShineoraTech | تصميم مواقع ومتاجر وتطبيقات للسعودية والكويت والخليج',
    description: 'حلول رقمية للشركات ورواد الأعمال في السعودية والكويت والخليج: تصميم مواقع إلكترونية ومتاجر وتطبيقات ويب مخصصة مع ShineoraTech.',
    alternates: { canonical: '/', languages: { ar: '/', fr: '/fr/', 'x-default': '/' } },
    openGraph: { title: 'ShineoraTech — رؤيتك وتقنيتنا', description: 'مواقع ومتاجر وتطبيقات ويب للشركات في السعودية والكويت والخليج.', locale: 'ar_SA', alternateLocale: ['fr_MA'], type: 'website', url: '/', siteName: 'ShineoraTech' },
    twitter: { card: 'summary', title: 'ShineoraTech — رؤيتك وتقنيتنا', description: 'شريكك الرقمي لمشاريع السعودية والكويت والخليج.' },
    icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
