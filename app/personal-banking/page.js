import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Personal Banking | Atwima Rural Bank',
    description: 'Explore our personal banking solutions — savings, current, salary, susu, and kiddies accounts designed for your everyday financial needs.',
};

const accounts = [
    {
        id: 'current-account',
        title: 'ARB Current Account',
        icon: '💳',
        description: 'A flexible transactional account for your daily banking needs. Ideal for individuals who need regular access to their funds with cheque book facilities.',
        features: ['Cheque book facility', 'ATM card access', 'Standing order facility', 'Direct debit services', 'Monthly statements'],
    },
    {
        id: 'savings-account',
        title: 'ARB Savings Account',
        icon: '🏦',
        description: 'Build your savings with competitive interest rates. Our savings account helps you grow your wealth while maintaining easy access to your funds.',
        features: ['Competitive interest rates', 'No minimum balance requirement', 'ATM card access', 'Mobile banking access', 'Interest paid quarterly'],
    },
    {
        id: 'salary-account',
        title: 'ARB Salary Account',
        icon: '💼',
        description: 'Designed specifically for salaried workers. Receive your salary directly into your account with exclusive benefits for employees.',
        features: ['Direct salary deposits', 'Overdraft facility available', 'Salary advance options', 'Free monthly statements', 'Preferential loan rates'],
    },
    {
        id: 'susu-account',
        title: 'ARB Susu Account',
        icon: '🪙',
        description: 'Traditional daily savings modernized for the digital age. Our mobile susu collectors come to you, making saving effortless and accessible.',
        features: ['Daily collection service', 'Flexible deposit amounts', 'Access to Susu loans', 'Mobile collection at your location', 'No minimum balance'],
    },
    {
        id: 'kiddies-account',
        title: 'Kiddies Account',
        icon: '🎈',
        description: 'Give your child a head start in financial literacy. Open a savings account in their name and watch their future grow.',
        features: ['Low opening balance', 'Competitive interest rates', 'Birthday gifts & rewards', 'Financial literacy resources', 'Parent/guardian oversight'],
    },
];

export default function PersonalBanking() {
    return (
        <>
            <Header />
            <main>
                {/* Page Hero */}
                <section className={styles.pageHero}>
                    <div className="container">
                        <nav className={styles.breadcrumb}>
                            <Link href="/">Home</Link>
                            <span>/</span>
                            <span>Personal Banking</span>
                        </nav>
                        <h1 className={styles.heroTitle}>Personal Banking</h1>
                        <p className={styles.heroSubtitle}>
                            Banking solutions designed around your life. From everyday transactions to long-term savings,
                            we have the right account for you.
                        </p>
                    </div>
                </section>

                {/* Accounts Grid */}
                <section className="section">
                    <div className="container">
                        <div className={styles.accountsGrid}>
                            {accounts.map((acc) => (
                                <div key={acc.id} id={acc.id} className={styles.accountCard}>
                                    <div className={styles.accountHeader}>
                                        <span className={styles.accountIcon}>{acc.icon}</span>
                                        <h2 className={styles.accountTitle}>{acc.title}</h2>
                                    </div>
                                    <p className={styles.accountDesc}>{acc.description}</p>
                                    <h4 className={styles.featuresLabel}>Key Features</h4>
                                    <ul className={styles.featuresList}>
                                        {acc.features.map((f) => (
                                            <li key={f}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact" className="btn btn-primary btn-sm" style={{ marginTop: 'auto' }}>
                                        Open This Account
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
        </>
    );
}
