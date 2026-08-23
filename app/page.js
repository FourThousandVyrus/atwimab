import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import BentoStats from './components/BentoStats';
import ServiceCards from './components/ServiceCards';
import WhyChooseUs from './components/WhyChooseUs';
import DigitalBanking from './components/DigitalBanking';
import Testimonials from './components/Testimonials';
import Community from './components/Community';
import RatesSnapshot from './components/RatesSnapshot';
import Newsletter from './components/Newsletter';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import SusuCalculator from './components/SusuCalculator';

export const metadata = {
    title: 'Atwima Community Bank PLC | Rural Banking in Kumasi & Ashanti Region',
    description: 'Welcome to Atwima Community Bank PLC. We provide Susu savings, salary loans, commercial loans, fixed deposits, shares, and Western Union remittance services across the Ashanti Region.',
};

export default function Home() {
    const bankSchema = {
        '@context': 'https://schema.org',
        '@type': 'BankOrCreditUnion',
        'name': 'Atwima Community Bank PLC',
        'url': 'https://atwimabank.com',
        'telephone': '+233501387040',
        'logo': 'https://atwimabank.com/logo.png',
        'image': 'https://atwimabank.com/community-hero.png',
        'description': 'A leading community bank in Kumasi and the Ashanti Region of Ghana, providing Susu savings, loans, and investment services.',
        'priceRange': '$$',
        'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Foase Main Road',
            'addressLocality': 'Foase',
            'addressRegion': 'Ashanti Region',
            'addressCountry': 'GH'
        }
    };

    return (
        <>
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(bankSchema) }}
            />
            <main>
                <Hero />
                <BentoStats />
                <ServiceCards />
                <WhyChooseUs />
                <DigitalBanking />
                <Community />
                <SusuCalculator />
                <Testimonials />
                <RatesSnapshot />
                <Newsletter />
            </main>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
        </>
    );
}
