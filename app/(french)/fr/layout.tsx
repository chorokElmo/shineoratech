import type { Metadata } from 'next';
import { site } from '@/lib/site';
import '@/app/globals.css';
import '@/app/sections.css';
import '@/app/arabic.css';
export const metadata: Metadata = {
    metadataBase: new URL(site.url),
    title: 'ShineoraTech — Agence digitale au Maroc',
    description: 'Sites web, e-commerce, applications et solutions IA sur mesure. ShineoraTech accompagne les entreprises au Maroc, de la première idée au lancement.',
    alternates: { canonical: '/fr/', languages: { ar: '/', fr: '/fr/', 'x-default': '/' } },
    openGraph: { title: 'ShineoraTech — Votre vision. Notre technologie.', description: 'Des expériences digitales remarquables, pensées pour votre activité.', locale: 'fr_MA', type: 'website', url: '/fr/', siteName: 'ShineoraTech' },
    twitter: { card: 'summary', title: 'ShineoraTech — Votre vision. Notre technologie.', description: 'Votre partenaire digital au Maroc.' },
    icons: { icon: '/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return <html lang="fr" dir="ltr"><body>{children}</body></html>;
}
