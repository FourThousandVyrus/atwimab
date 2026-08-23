import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import ContactClient from './ContactClient';

export const metadata = {
    title: 'Contact & Branch Locations | Kumasi & Ashanti Region | Atwima Community Bank PLC',
    description: 'Find contact numbers, branch operational hours, and Google Maps directions for Atwima Community Bank branches in Foase, Kwadaso, Patasi, Mpasatia, Allabar, and Daban.',
};

export default function ContactPage() {
    const contactSchema = {
        '@context': 'https://schema.org',
        '@type': 'BankOrCreditUnion',
        'name': 'Atwima Community Bank PLC',
        'url': 'https://atwimabank.com',
        'telephone': '+233501387040',
        'logo': 'https://atwimabank.com/logo.png',
        'image': 'https://atwimabank.com/logo.png',
        'priceRange': '$$',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Foase Main Road',
            'addressLocality': 'Foase',
            'addressRegion': 'Ashanti Region',
            'addressCountry': 'GH'
        },
        'subOrganization': [
            {
                '@type': 'BankOrCreditUnion',
                'name': 'Foase Branch (Head Office)',
                'address': {
                    '@type': 'PostalAddress',
                    'streetAddress': 'P.O. Box 13, Foase-Atwima',
                    'addressLocality': 'Foase',
                    'addressRegion': 'Ashanti Region',
                    'addressCountry': 'GH'
                },
                'telephone': '+233501387040'
            },
            {
                '@type': 'BankOrCreditUnion',
                'name': 'Kwadaso Branch',
                'address': {
                    '@type': 'PostalAddress',
                    'streetAddress': 'Kwadaso Market Road',
                    'addressLocality': 'Kwadaso',
                    'addressRegion': 'Kumasi',
                    'addressCountry': 'GH'
                },
                'telephone': '+233501387041'
            },
            {
                '@type': 'BankOrCreditUnion',
                'name': 'Patasi Branch',
                'address': {
                    '@type': 'PostalAddress',
                    'streetAddress': 'Patasi Main Road',
                    'addressLocality': 'Patasi',
                    'addressRegion': 'Kumasi',
                    'addressCountry': 'GH'
                },
                'telephone': '+233501387042'
            },
            {
                '@type': 'BankOrCreditUnion',
                'name': 'Mpasatia Branch',
                'address': {
                    '@type': 'PostalAddress',
                    'streetAddress': 'Mpasatia Main Road',
                    'addressLocality': 'Mpasatia',
                    'addressRegion': 'Ashanti Region',
                    'addressCountry': 'GH'
                },
                'telephone': '+233501387043'
            },
            {
                '@type': 'BankOrCreditUnion',
                'name': 'Allabar Branch',
                'address': {
                    '@type': 'PostalAddress',
                    'streetAddress': 'Allabar Main Road',
                    'addressLocality': 'Allabar',
                    'addressRegion': 'Kumasi',
                    'addressCountry': 'GH'
                },
                'telephone': '+233501387044'
            },
            {
                '@type': 'BankOrCreditUnion',
                'name': 'Daban Branch',
                'address': {
                    '@type': 'PostalAddress',
                    'streetAddress': 'Daban Main Road',
                    'addressLocality': 'Daban',
                    'addressRegion': 'Kumasi',
                    'addressCountry': 'GH'
                },
                'telephone': '+233501387045'
            }
        ]
    };

    return (
        <>
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <ContactClient />
            <Footer />
            <BackToTop />
            <WhatsAppButton />
        </>
    );
}
