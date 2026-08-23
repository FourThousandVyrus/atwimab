import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';
import InvestmentsClient from './InvestmentsClient';
import styles from './page.module.css';

export const metadata = {
    title: 'Investments & High-Yield Fixed Deposits | Atwima Community Bank',
    description: 'Grow your wealth with secure ARB Fixed Deposit accounts offering up to 22% interest rate or purchase shares in Atwima Community Bank. Local banking in Ashanti Region.',
    keywords: 'Fixed deposit rates Ghana, Buy community bank shares Ashanti Region, Atwima Community Bank investments, Ashanti Region community bank deposits',
};

export default function Investments() {
    const structuredSchema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'FinancialProduct',
                '@id': 'https://atwimabank.com/investments#fixed-deposit',
                'name': 'ARB Fixed Deposit',
                'description': 'High-yield investment security with fixed returns up to 22.00% per annum and flexible tenures of 3, 6, 9, or 12 months.',
                'brand': {
                    '@type': 'BankOrCreditUnion',
                    'name': 'Atwima Community Bank PLC',
                    'url': 'https://atwimabank.com'
                },
                'offers': {
                    '@type': 'Offer',
                    'priceCurrency': 'GHS',
                    'price': '100.00',
                    'description': 'Minimum investment threshold of GH₵100.00'
                }
            },
            {
                '@type': 'FinancialProduct',
                '@id': 'https://atwimabank.com/investments#shares',
                'name': 'ARB Shares',
                'description': 'Equity investment shares in Atwima Community Bank PLC. Enables community co-ownership, capital appreciation, and annual dividend distribution.',
                'brand': {
                    '@type': 'BankOrCreditUnion',
                    'name': 'Atwima Community Bank PLC',
                    'url': 'https://atwimabank.com'
                }
            }
        ]
    };

    return (
        <>
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
            />
            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
                                <Link href="/">Home</Link>
                                <span aria-hidden="true">/</span>
                                <span>Investments</span>
                            </nav>
                            <h1 className={styles.heroTitle}>Investments &amp; Shares</h1>
                            <p className={styles.heroSub}>
                                Flexible wealth-building options with high-yielding returns. Secure your financial future with a trusted community partner.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <InvestmentsClient />
                </section>
            </main>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
        </>
    );
}
