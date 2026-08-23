import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import BusinessBankingClient from './BusinessBankingClient';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Business Banking & SME Loans | Atwima Community Bank PLC',
    description: 'Get flexible business banking solutions in the Ashanti Region. Explore our competitive SME loans in Kumasi, commercial overdrafts, and tailored business accounts.',
};

const documentChecklist = [
    {
        title: 'Sole Proprietorship',
        icon: '👤',
        items: [
            'Business Registration Certificate (Form A)',
            'Valid National ID (Ghana Card) of the Sole Proprietor',
            'Tax Identification Number (TIN)',
            'Two (2) recent passport-sized photographs',
            'Proof of business location (GPS address/utility bill)'
        ]
    },
    {
        title: 'Limited Liability Company',
        icon: '🏢',
        items: [
            'Certificate of Incorporation & Form 3 / Form 4',
            'Company Regulations / Constitution document',
            'Ghana Card of all Directors and Signatories',
            'Board Resolution authorizing account opening',
            'Company TIN and passport-sized photographs'
        ]
    },
    {
        title: 'Groups & Associations',
        icon: '👥',
        items: [
            'Group Constitution or Rules & Regulations',
            'Resolution signed by executives to open account',
            'Ghana Card of all executive officers/signatories',
            'Two (2) passport-sized photos of each signatory',
            'Evidence of registration (where applicable)'
        ]
    }
];

export default function BusinessBanking() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className="container">
                        <nav className={styles.breadcrumb}>
                            <Link href="/">Home</Link><span>/</span><span>Business Banking</span>
                        </nav>
                        <h1 className={styles.heroTitle}>Business Banking Solutions</h1>
                        <p className={styles.heroSub}>
                            Empowering businesses across the Ashanti Region with flexible financial solutions. From startup to growth, we are your partner in success.
                        </p>
                    </div>
                </section>

                {/* Products */}
                <section className="section" id="products">
                    <div className="container">
                        <div className="section-header centered">
                            <span className="section-label">Products &amp; Services</span>
                            <h2 className="section-title">Tailored Financial Products</h2>
                        </div>
                        <BusinessBankingClient />
                    </div>
                </section>

                {/* Account Requirements Checklist */}
                <section className={`section ${styles.reqSection}`} id="requirements">
                    <div className="container">
                        <div className="section-header centered">
                            <span className="section-label">Account Opening</span>
                            <h2 className="section-title">Requirements Checklist</h2>
                            <p className="section-subtitle">Please prepare these documents before visiting a branch to open your account.</p>
                        </div>
                        <div className={styles.reqGrid}>
                            {documentChecklist.map((group) => (
                                <div key={group.title} className={styles.reqCard}>
                                    <h3 className={styles.reqCardTitle}>
                                        <span className={styles.reqCardTitleWrap} aria-hidden="true">{group.icon}</span>
                                        {group.title}
                                    </h3>
                                    <ul className={styles.reqList}>
                                        {group.items.map((item, idx) => (
                                            <li key={idx} className={styles.reqItem}>
                                                <span className={styles.reqDot} aria-hidden="true" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Interactive Calculator Promo Section */}
                <section className={`section ${styles.calcPromoSec}`} id="calculator-promo">
                    <div className="container">
                        <div className={styles.promoBanner}>
                            <div className={styles.promoContent}>
                                <h2 className={styles.promoTitle}>Project Your Business Financial Growth</h2>
                                <p className={styles.promoText}>
                                    Estimate commercial loan installments, calculate daily Susu accumulations, or check fixed deposit interest yields with our free interactive financial tools.
                                </p>
                            </div>
                            <div className={styles.promoBtnWrap}>
                                <Link href="/calculators" className="btn btn-primary btn-lg">
                                    Access Financial Calculators
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 'var(--space-2)' }} aria-hidden="true">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
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
