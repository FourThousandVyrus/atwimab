import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                                <rect width="40" height="40" rx="8" fill="#2596be" />
                                <path d="M10 28L20 12L30 28H10Z" fill="#D69E2E" opacity="0.9" />
                                <path d="M15 28L20 18L25 28H15Z" fill="white" opacity="0.8" />
                            </svg>
                            <span className={styles.logoName}>Atwima Rural Bank</span>
                        </div>
                        <p className={styles.brandText}>
                            A friend in need is a friend indeed. Serving the Ashanti Region with trusted banking services for over 30 years.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter" className={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.linkGroup}>
                        <h4 className={styles.linkTitle}>Quick Links</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/about#board">Board of Directors</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><Link href="/security">Security Center</Link></li>
                            <li><Link href="/remittance">Remittance</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="/news">News & Announcements</Link></li>
                            <li><Link href="/careers">Careers</Link></li>
                            <li><Link href="/downloads">Downloads & Forms</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className={styles.linkGroup}>
                        <h4 className={styles.linkTitle}>Products</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/personal-banking">Personal Banking</Link></li>
                            <li><Link href="/business-banking">Business Banking</Link></li>
                            <li><Link href="/loans">Loans</Link></li>
                            <li><Link href="/investments">Investments</Link></li>
                            <li><Link href="/personal-banking#kiddies-account">Kiddies Account</Link></li>
                            <li><Link href="/calculators">Financial Calculators</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.linkGroup}>
                        <h4 className={styles.linkTitle}>Contact</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                <span>0501 387 040</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                <span>info@atwimabank.com</span>
                            </li>
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                                <span>P.O. Box 13, Foase-Atwima</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <div className={styles.bottomLeft}>
                        <p>&copy; {new Date().getFullYear()} Atwima Rural Bank PLC. All rights reserved.</p>
                    </div>
                    <div className={styles.bottomCenter}>
                        <div className={styles.regulatory}>
                            <span className={styles.regBadge}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                GDPC Member
                            </span>
                            <span className={styles.regBadge}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                Bank of Ghana Regulated
                            </span>
                        </div>
                    </div>
                    <div className={styles.bottomRight}>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/security">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
