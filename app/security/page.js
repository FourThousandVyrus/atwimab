import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'Security Center & Fraud Prevention | Atwima Community Bank',
    description: 'Protect your account from scams. Learn how to secure your USSD PIN, verify Susu collectors, avoid phishing attempts, and report fraud instantly.',
    keywords: 'Atwima bank fraud reporting, Ghana mobile money security tips, protect USSD PIN Ghana, verify Susu agent Foase, Ashanti community banking security',
};

const safetyTips = [
    {
        icon: '🔑',
        title: 'Protect Your USSD PIN',
        desc: 'Never share your USSD banking transaction PIN (*248*230#) or OTP codes with anyone. Bank staff will never call to ask for your security PINs.',
    },
    {
        icon: '🕵️‍♂️',
        title: 'Verify Susu Collectors',
        desc: 'Always verify the identity of the mobile Susu collector visiting your shop or market stall. Ensure they carry an official bank ID card and a registered mobile terminal before handing over deposits.',
    },
    {
        icon: '🎣',
        title: 'Beware of Phishing Scams',
        desc: 'Do not click on suspicious links in SMS messages or emails. Always verify the source and do not send money to callers claiming to represent the bank.',
    },
    {
        icon: '📱',
        title: 'Secure Your Phone',
        desc: 'Lock your mobile device with a passcode or fingerprint to protect the SIM card registered for your USSD banking services.',
    },
    {
        icon: '🏧',
        title: 'ATM Safety Protocols',
        desc: 'Always shield the keypad when entering your ATM PIN. Do not accept assistance from strangers standing near the ATM terminal.',
    },
    {
        icon: '🚨',
        title: 'Report Incidents Instantly',
        desc: 'If your phone is lost, or if you suspect fraud or unauthorized debit actions, contact our fraud reporting dispatch immediately on 0501 387 040.',
    },
];

export default function Security() {
    const securitySchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Security Center | Atwima Community Bank PLC",
        "description": "Educational guide on fraud protection, USSD safety, and Susu verification for depositors in Ghana.",
        "publisher": {
            "@type": "BankOrCreditUnion",
            "name": "Atwima Community Bank PLC",
            "url": "https://atwimabank.com"
        }
    };

    return (
        <>
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(securitySchema) }}
            />
            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
                                <Link href="/">Home</Link>
                                <span aria-hidden="true">/</span>
                                <span>Security Center</span>
                            </nav>
                            <div className={styles.heroHeader}>
                                <div className={styles.heroIcon} aria-hidden="true">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <h1 className={styles.heroTitle}>Security Center</h1>
                            </div>
                            <p className={styles.heroSub}>
                                Your financial safety is our top priority. Find guidelines to protect your account and learn how to report suspicious activity.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Security Measures */}
                <section className="section">
                    <div className="container">
                        <div className={styles.measuresSection}>
                            <div className="section-header centered">
                                <span className="section-label">Institutional Safety</span>
                                <h2 className="section-title">How We Protect You</h2>
                            </div>
                            
                            <div className={styles.measuresGrid} role="region" aria-label="Corporate security pillars">
                                <div className={styles.measureCard}>
                                    <h3 className={styles.measureTitle}>🔒 Encrypted Branch Networks</h3>
                                    <p className={styles.measureDesc}>
                                        All transactional data and communication between our branches and networks are encrypted using industry-standard protocols to safeguard customer files.
                                    </p>
                                </div>
                                <div className={styles.measureCard}>
                                    <h3 className={styles.measureTitle}>🛡️ GDPC Insured Deposits</h3>
                                    <p className={styles.measureDesc}>
                                        Your deposits are protected by the Ghana Deposit Protection Corporation, securing your hard-earned funds against institutional risks.
                                    </p>
                                </div>
                                <div className={styles.measureCard}>
                                    <h3 className={styles.measureTitle}>🏛️ Bank of Ghana Regulated</h3>
                                    <p className={styles.measureDesc}>
                                        We operate under the strict supervision and regulatory guidelines of the Bank of Ghana to ensure security, compliance, and governance.
                                    </p>
                                </div>
                                <div className={styles.measureCard}>
                                    <h3 className={styles.measureTitle}>🔍 In-Branch Fraud Monitoring</h3>
                                    <p className={styles.measureDesc}>
                                        Our internal operations teams constantly monitor audit trails and ledger activities to detect and prevent unauthorized actions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Security Tips */}
                <section className="section" className={styles.tipsSection}>
                    <div className="container">
                        <div className={styles.tipsContainer}>
                            <div className="section-header centered">
                                <span className="section-label">Safety Guidelines</span>
                                <h2 className="section-title">Safety Tips &amp; Rules</h2>
                                <p className="section-subtitle">Protect yourself from fraud and scams by following these guidelines.</p>
                            </div>
                            
                            <div className={styles.tipsGrid} role="region" aria-label="Safety tips grid">
                                {safetyTips.map((tip) => (
                                    <div key={tip.title} className={styles.tipCard}>
                                        <div className={styles.tipHeader}>
                                            <span className={styles.tipIcon} role="img" aria-label={tip.title}>
                                                {tip.icon}
                                            </span>
                                            <h3 className={styles.tipTitle}>{tip.title}</h3>
                                        </div>
                                        <p className={styles.tipDesc}>{tip.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Emergency Contact */}
                <section className="section">
                    <div className="container">
                        <div className={styles.emergencySection}>
                            <span className={styles.emergencyIcon} role="img" aria-label="Alert horn">🚨</span>
                            <h2 className={styles.emergencyTitle}>Report Suspicious Activity</h2>
                            <p className={styles.emergencyDesc}>
                                If you suspect unauthorized access to your account, lose your USSD registered phone, or encounter collector impersonation, contact us immediately.
                            </p>
                            <div className={styles.btnGroup}>
                                <a 
                                    href="tel:0501387040" 
                                    className="btn btn-primary btn-lg"
                                    aria-label="Call Atwima Community Bank phone hotline: 0501 387 040"
                                >
                                    📞 Call: 0501 387 040
                                </a>
                                <a 
                                    href="https://wa.me/233501387040" 
                                    className="btn btn-secondary btn-lg" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="Open chat conversation on WhatsApp for fraud assistance"
                                >
                                    💬 Chat on WhatsApp
                                </a>
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
