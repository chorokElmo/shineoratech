export const site = {
    name: 'ShineoraTech',
    url: 'https://shineoratech.com',
    locale: 'fr-MA',
    direction: 'ltr' as const,
    whatsapp: '212681402071',
    phone: '+212 681 402 071',
    email: 'chorokishaal@gmail.com',
    socials: [] as {
        name: string;
        url: string;
    }[],
};
export function whatsappUrl(message = 'Bonjour ShineoraTech 👋\nJe souhaite discuter de mon projet digital.') {
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
