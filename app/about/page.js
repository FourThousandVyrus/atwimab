import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import AboutClient from './AboutClient';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
    title: 'About Us | Atwima Community Bank PLC',
    description: 'Learn about Atwima Community Bank PLC — established in Foase in 1983. Discover our history, mission, values, and governance in the Ashanti Region of Ghana.',
};

export default function About() {
    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className="container">
                        <nav className={styles.breadcrumb}>
                            <Link href="/">Home</Link><span>/</span><span>About Us</span>
                        </nav>
                        <h1 className={styles.heroTitle}>About Atwima Community Bank</h1>
                        <p className={styles.heroSub}>
                            A legacy of trust, service, and community development spanning over three decades in the Ashanti Region.
                        </p>
                    </div>
                </section>

                {/* About Content Wrapper */}
                <section className="section">
                    <div className="container">
                        <AboutClient />
                    </div>
                </section>

                {/* Management Team CTA */}
                <section className="section" id="management">
                    <div className="container">
                        <div className={styles.ctaBanner}>
                            <h2 className={styles.ctaTitle}>Senior Management Team</h2>
                            <p className={styles.ctaSub}>
                                Meet the dedicated, experienced professionals driving our day-to-day operations and customer experience.
                            </p>
                            <div className={styles.ctaBtnWrap}>
                                <Link href="/management" className="btn btn-primary btn-lg">
                                    Meet the Full Leadership Team
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
