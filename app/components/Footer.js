import Link from 'next/link';
import styles from './Footer.module.css';

import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <Image 
                                src="/logo.png" 
                                alt="Atwima Community Bank Logo" 
                                width={160} 
                                height={50} 
                                style={{ objectFit: 'contain' }}
                            />
                        </Link>
                        <p className={styles.brandText}>
                            A friend in need is a friend indeed. Serving the Ashanti Region with trusted banking services for over 30 years.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="https://www.facebook.com/share/1DsQQZozH4/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/atwima-community-bank-plc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIcon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
                            <li>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                                <span>USSD: *248*230#</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className={styles.bottomBar}>
                    <div className={styles.bottomLeft}>
                        <p>&copy; {new Date().getFullYear()} Atwima Community Bank PLC. All rights reserved.</p>
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
                        <Link href="/terms">Terms of Service</Link>
                        <Link href="/cookies">Cookie Policy</Link>
                        <Link href="/disclaimer">Disclaimer</Link>
                        <Link href="/accessibility">Accessibility</Link>
                        <Link href="/security">Security &amp; Safety Guidelines</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
