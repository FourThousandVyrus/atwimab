import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';
import LoansClient from './LoansClient';
import styles from './page.module.css';

export const metadata = {
    title: 'Loans & Credit Facilities | Atwima Community Bank',
    description: 'Explore personal and business financing options including Salary loans, Commercial credit overdrafts, Susu microfinance, and local Church development loans in Kumasi and Ashanti Region.',
    keywords: 'Personal loans Foase, Susu loans Kumasi, Salary overdraft Ghana, SME financing Ashanti Region, Atwima Community Bank credit',
};

export default function Loans() {
    const loansSchema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'FinancialProduct',
                '@id': 'https://atwimabank.com/loans#salary-loan',
                'name': 'Salary Loan',
                'description': 'Credit lines for public and private salary workers in Ghana. Rapid processing within 3-5 working days.',
                'brand': {
                    '@type': 'BankOrCreditUnion',
                    'name': 'Atwima Community Bank PLC',
                    'url': 'https://atwimabank.com'
                }
            },
            {
                '@type': 'FinancialProduct',
                '@id': 'https://atwimabank.com/loans#commercial-loan',
                'name': 'Commercial Loan',
                'description': 'Working capital and business expansion credit facilities tailored for local Ghanaian SMEs.',
                'brand': {
                    '@type': 'BankOrCreditUnion',
                    'name': 'Atwima Community Bank PLC',
                    'url': 'https://atwimabank.com'
                }
            },
            {
                '@type': 'FinancialProduct',
                '@id': 'https://atwimabank.com/loans#susu-loan',
                'name': 'Susu Loan',
                'description': 'Microfinance integration loans for daily traders and shop owners who participate in Susu saving schemes.',
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(loansSchema) }}
            />
            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
                                <Link href="/">Home</Link>
                                <span aria-hidden="true">/</span>
                                <span>Loans</span>
                            </nav>
                            <h1 className={styles.heroTitle}>Loans &amp; Credit</h1>
                            <p className={styles.heroSub}>
                                Flexible credit solutions with fast approvals and competitive terms. Designed to support personal milestones and local business growth.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <LoansClient />
                </section>
            </main>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
        </>
    );
}
