import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import CareersClient from './CareersClient';

export const metadata = {
    title: 'Careers | Join Our Team | Atwima Community Bank PLC',
    description: 'Explore career opportunities and banking jobs in Kumasi and the Ashanti Region. Join a community-focused bank dedicated to empowering local microenterprises.',
};

export default function CareersPage() {
    const careersSchema = {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        'name': 'Careers at Atwima Community Bank PLC',
        'description': 'Explore banking careers and job openings in Kumasi and the Ashanti Region with Atwima Community Bank.',
        'publisher': {
            '@type': 'BankOrCreditUnion',
            'name': 'Atwima Community Bank PLC',
            'url': 'https://atwimabank.com',
            'logo': 'https://atwimabank.com/logo.png',
            'address': {
                '@type': 'PostalAddress',
                'addressLocality': 'Foase',
                'addressRegion': 'Ashanti Region',
                'addressCountry': 'Ghana'
            }
        }
    };

    return (
        <>
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
            />
            <CareersClient />
            <Footer />
            <BackToTop />
            <WhatsAppButton />
        </>
    );
}
