import Link from 'next/link';
import styles from './CTABanner.module.css';

export default function CTABanner() {
    return (
        <section className={styles.cta}>
            <div className={styles.bg}></div>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Ready to Get Started?</h2>
                    <p className={styles.text}>
                        Open an account today and experience the Atwima Rural Bank difference.
                        Visit any of our 6 branches or speak with an advisor.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/personal-banking" className="btn btn-cta btn-lg">
                            Open an Account
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                        <Link href="/contact" className="btn btn-white btn-lg">
                            Visit a Branch
                        </Link>
                        <Link href="/calculators" className="btn btn-white btn-lg">
                            Financial Calculators
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
