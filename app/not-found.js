import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <svg width="44" height="44" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <rect width="120" height="120" rx="24" fill="#2596be" />
                        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="52" fontWeight="800" fontFamily="system-ui, sans-serif">A</text>
                    </svg>
                    <span className={styles.brandName}>Atwima Rural Bank</span>
                </div>

                <div className={styles.code}>404</div>
                <h1 className={styles.title}>Page Not Found</h1>
                <p className={styles.message}>
                    Oops! The page you are looking for does not exist or may have been moved. Let us help you find your way back.
                </p>

                <div className={styles.links}>
                    <Link href="/" className="btn btn-primary">Back to Home</Link>
                    <Link href="/contact" className="btn btn-secondary">Contact Us</Link>
                </div>

                <div className={styles.quickLinks}>
                    <p className={styles.quickLinksLabel}>Or go directly to:</p>
                    <div className={styles.grid}>
                        <Link href="/personal-banking" className={styles.quickLink}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4" /><path d="M6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" /></svg>
                            Personal Banking
                        </Link>
                        <Link href="/business-banking" className={styles.quickLink}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" /></svg>
                            Business Banking
                        </Link>
                        <Link href="/calculators" className={styles.quickLink}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="12" y2="14" /></svg>
                            Financial Calculators
                        </Link>
                        <Link href="/faq" className={styles.quickLink}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                            FAQ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
