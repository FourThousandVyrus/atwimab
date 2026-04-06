import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import styles from './page.module.css';

export const metadata = {
    title: 'Downloads & Forms | Atwima Rural Bank',
    description: 'Download account opening forms, loan application forms, and banking brochures from Atwima Rural Bank.',
};

const categories = [
    {
        name: 'Account Forms',
        icon: '🏦',
        docs: [
            { title: 'Personal Account Opening Form', desc: 'Required to open a savings or current account as an individual.', type: 'PDF', size: '240 KB' },
            { title: 'Business Account Opening Form', desc: 'For sole proprietors and registered businesses opening an account.', type: 'PDF', size: '310 KB' },
            { title: 'Susu Account Registration Form', desc: 'Enroll in our popular daily Susu savings scheme.', type: 'PDF', size: '180 KB' },
            { title: 'Fixed Deposit Application Form', desc: 'Open a fixed deposit and lock in a competitive rate.', type: 'PDF', size: '200 KB' },
        ],
    },
    {
        name: 'Loan Forms',
        icon: '💰',
        docs: [
            { title: 'Personal Loan Application', desc: 'Apply for a personal loan tailored to your needs.', type: 'PDF', size: '290 KB' },
            { title: 'SME Loan Application', desc: 'Financing application for small and medium enterprises.', type: 'PDF', size: '340 KB' },
            { title: 'Agricultural Loan Application', desc: 'Seasonal and investment financing for farmers.', type: 'PDF', size: '260 KB' },
            { title: 'Salary Advance Application', desc: 'Quick salary advance form for existing account holders.', type: 'PDF', size: '160 KB' },
        ],
    },
    {
        name: 'Brochures',
        icon: '📋',
        docs: [
            { title: 'Atwima Rural Bank Overview', desc: 'General overview of our products, services, and branch network.', type: 'PDF', size: '1.2 MB' },
            { title: 'Savings Products Guide', desc: 'Detailed rates and features for all savings accounts.', type: 'PDF', size: '560 KB' },
            { title: 'Loans & Credit Products', desc: 'Interest rates, eligibility and terms for all loan products.', type: 'PDF', size: '620 KB' },
            { title: 'Investment & Shares Guide', desc: 'Information on ARB Apex Shares and fixed deposit options.', type: 'PDF', size: '480 KB' },
        ],
    },
    {
        name: 'Other Documents',
        icon: '📄',
        docs: [
            { title: 'SEPA Standing Order Form', desc: 'Set up recurring payments or standing orders.', type: 'PDF', size: '190 KB' },
            { title: 'Account Amendment Request', desc: 'Update your contact details or signatory information.', type: 'PDF', size: '170 KB' },
            { title: 'Complaint & Feedback Form', desc: 'Submit a formal complaint or service feedback.', type: 'PDF', size: '150 KB' },
        ],
    },
];

export default function DownloadsPage() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <span className="section-label">Resources</span>
                        <h1>Downloads &amp; Forms</h1>
                        <p className={styles.heroSub}>Find and download account opening forms, loan applications, and banking brochures. All forms can also be collected at any of our six branches.</p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className={styles.notice}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                            <p><strong>Note:</strong> These are reference copies. For account opening and loan applications, please visit any of our branches with the completed form along with the required identification documents.</p>
                        </div>

                        {categories.map(cat => (
                            <div key={cat.name} className={styles.category}>
                                <h2 className={styles.categoryTitle}>
                                    <span>{cat.icon}</span> {cat.name}
                                </h2>
                                <div className={styles.docsGrid}>
                                    {cat.docs.map(doc => (
                                        <div key={doc.title} className={styles.docCard}>
                                            <div className={styles.docIcon}>
                                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-600)" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                                            </div>
                                            <div className={styles.docInfo}>
                                                <h3 className={styles.docTitle}>{doc.title}</h3>
                                                <p className={styles.docDesc}>{doc.desc}</p>
                                                <div className={styles.docMeta}>
                                                    <span className={styles.docBadge}>{doc.type}</span>
                                                    <span className={styles.docSize}>{doc.size}</span>
                                                </div>
                                            </div>
                                            <span className={styles.downloadBtn} title="Coming soon — please visit a branch" aria-label={`${doc.title} — available at branch`}>
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                                Download
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaSection}>
                    <div className="container">
                        <div className={styles.ctaCard}>
                            <div className={styles.ctaText}>
                                <h2>Need Help With a Form?</h2>
                                <p>Our staff are ready to assist you complete any form at any of our six branches, or you can reach us on WhatsApp.</p>
                            </div>
                            <div className={styles.ctaButtons}>
                                <a href="/contact" className="btn btn-primary">Find a Branch</a>
                                <a href="https://wa.me/233501387040?text=Hello%2C%20I%20need%20help%20with%20a%20bank%20form." target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Chat on WhatsApp</a>
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
