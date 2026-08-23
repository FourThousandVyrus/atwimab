import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import PrivacyPolicyClient from './PrivacyPolicyClient';
import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
    title: 'Privacy Policy & Act 843 Compliance | Atwima Community Bank PLC',
    description: 'Learn how Atwima Community Bank PLC collects, uses, and safeguards customer data in compliance with the Ghana Data Protection Act 2012 (Act 843).',
    keywords: 'Atwima bank privacy policy, Ghana Data Protection Act compliance, community bank data protection Ashanti, Act 843 client rights Ghana',
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
                                <Link href="/">Home</Link>
                                <span aria-hidden="true">/</span>
                                <span>Privacy Policy</span>
                            </nav>
                            <h1>Privacy Policy</h1>
                            <p className={styles.heroSub}>
                                Effective Date: 1 January 2026 &nbsp;|&nbsp; Atwima Community Bank PLC
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <PrivacyPolicyClient />
                </section>
            </main>
            <Footer />
            <BackToTop />
        </>
    );
}
