import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import DownloadsClient from './DownloadsClient';

export const metadata = {
    title: 'Downloads & Forms | Account & Loan Applications | Atwima Community Bank PLC',
    description: 'Download official account opening forms, loan application forms, and bank brochures. Complete offline forms for submission at Atwima Community Bank branches.',
};

export default function DownloadsPage() {
    const downloadsSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Downloads & Forms | Atwima Community Bank PLC',
        'description': 'Download official account opening forms, loan application forms, and bank brochures. Complete offline forms for submission at Atwima Community Bank branches.',
        'publisher': {
            '@type': 'BankOrCreditUnion',
            'name': 'Atwima Community Bank PLC',
            'url': 'https://atwimabank.com',
            'logo': 'https://atwimabank.com/logo.png'
        }
    };

    return (
        <>
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(downloadsSchema) }}
            />
            <DownloadsClient />
            <Footer />
            <BackToTop />
            <WhatsAppButton />
        </>
    );
}
