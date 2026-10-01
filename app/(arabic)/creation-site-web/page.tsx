import { ArabicServicePage, arabicServiceMetadata } from '@/components/site/arabic-service-page';
import { arabicServices } from '@/content/ar-services';
const content = arabicServices['creation-site-web'];
export const metadata = arabicServiceMetadata(content);
export default function Page() { return <ArabicServicePage content={content} />; }
