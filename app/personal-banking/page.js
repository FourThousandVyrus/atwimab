import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import PersonalBankingClient from './PersonalBankingClient';
import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Personal Savings & Current Accounts | Atwima Community Bank',
    description: 'Grow your savings and manage everyday transactions with ARB Savings, Current, Susu daily collections, Salary, and Kiddies accounts in the Ashanti Region.',
    keywords: 'Open savings account Foase, Susu savings account Kumasi, personal current accounts Ghana, Kiddies junior savings Ashanti',
};

export default function PersonalBanking() {
    const personalBankingSchema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'FinancialProduct',
                '@id': 'https://atwimabank.com/personal-banking#savings-account',
                'name': 'ARB Savings Account',
                'description': 'High-yield savings account offering competitive interest rates and quarterly payouts with zero minimum balance requirement.',
                'brand': {
                    '@type': 'BankOrCreditUnion',
                    'name': 'Atwima Community Bank PLC',
                    'url': 'https://atwimabank.com'
                }
            },
            {
                '@type': 'FinancialProduct',
                '@id': 'https://atwimabank.com/personal-banking#susu-account',
                'name': 'ARB Susu Account',
                'description': 'Daily collection savings scheme designed for local market traders and small shop owners with integrated Susu loans.',
                'brand': {
                    '@type': 'BankOrCreditUnion',
                    'name': 'Atwima Community Bank PLC',
                    'url': 'https://atwimabank.com'
                }
            },
            {
                '@type': 'FinancialProduct',
                '@id': 'https://atwimabank.com/personal-banking#current-account',
                'name': 'ARB Current Account',
                'description': 'Flexible daily transaction banking current accounts equipped with cheque book facilities and standing orders.',
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personalBankingSchema) }}
            />
            <main>
                {/* Page Hero */}
                <section className={styles.pageHero}>
                    <div className="container">
                        <nav className={styles.breadcrumb} aria-label="Breadcrumbs">
                            <Link href="/">Home</Link>
                            <span aria-hidden="true">/</span>
                            <span>Personal Banking</span>
                        </nav>
                        <h1 className={styles.heroTitle}>Personal Banking</h1>
                        <p className={styles.heroSubtitle}>
                            Banking solutions designed around your life. From everyday transactions to long-term savings,
                            we have the right account for you.
                        </p>
                    </div>
                </section>

                {/* Accounts Tabbed Content */}
                <section className="section">
                    <PersonalBankingClient />
                </section>
            </main>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
        </>
    );
}
