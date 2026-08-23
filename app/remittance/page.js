import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import RemittanceClient from './RemittanceClient';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Western Union Remittance & Money Transfers | Atwima Community Bank',
    description: 'Receive international money transfers quickly through Western Union and other payout services at any Atwima Community Bank branch. Payouts disbursed in Ghana Cedis (GHS).',
    keywords: 'Western Union Foase, Receive money from abroad Ghana, Kumasi Western Union agent, money transfer Ashanti Region, Ghana Card remittance requirement',
};

export default function Remittance() {
    const remittanceSchema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'FinancialProduct',
                '@id': 'https://atwimabank.com/remittance#western-union',
                'name': 'Western Union Remittance Service',
                'description': 'Receive international money transfers from abroad quickly and securely at any Atwima Community Bank branch. Paid in Ghana Cedis (GHS).',
                'brand': {
                    '@type': 'BankOrCreditUnion',
                    'name': 'Atwima Community Bank PLC',
                    'url': 'https://atwimabank.com'
                },
                'offers': {
                    '@type': 'Offer',
                    'priceCurrency': 'GHS',
                    'description': 'Disbursed in Ghana Cedis (GHS) cash at zero payout fee for receiver'
                }
            }
        ]
    };

    return (
        <>
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(remittanceSchema) }}
            />
            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
                                <Link href="/">Home</Link>
                                <span aria-hidden="true">/</span>
                                <span>Remittance</span>
                            </nav>
                            <h1 className={styles.heroTitle}>Remittance Services</h1>
                            <p className={styles.heroSub}>
                                Receive international money transfers from friends and family worldwide quickly, securely, and reliably at any of our branches.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <RemittanceClient />
                    </div>
                </section>
            </main>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
        </>
    );
}
