'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    const heroRef = useRef(null);

    useEffect(() => {
        const el = heroRef.current;
        if (el) {
            el.classList.add(styles.visible);
        }
    }, []);

    return (
        <section className={styles.hero} ref={heroRef}>
            <div className={styles.bgPattern}></div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        Trusted for Over 30 Years
                    </div>
                    <h1 className={styles.title}>
                        Banking Built on <span className={styles.highlight}>Trust.</span>
                        <br />
                        Powered by <span className={styles.highlight}>Community.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        For over three decades, Atwima Rural Bank has helped families, businesses,
                        and communities across the Ashanti Region build a stronger financial future.
                        Your growth is our mission.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/personal-banking" className="btn btn-cta btn-lg">
                            Open an Account
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                        <Link href="/loans" className="btn btn-secondary btn-lg">
                            Explore Our Services
                        </Link>
                    </div>
                    <div className={styles.trustRow}>
                        <div className={styles.trustItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            <span>Bank of Ghana Regulated</span>
                        </div>
                        <div className={styles.trustItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            <span>GDPC Insured Deposits</span>
                        </div>
                        <div className={styles.trustItem}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            <span>6 Branches Across Ashanti</span>
                        </div>
                    </div>
                </div>
                <div className={styles.visual}>
                    <div className={styles.visualCard}>
                        <div className={styles.cardInner}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardDot} style={{ background: 'var(--secondary-400)' }}></div>
                                <div className={styles.cardDot} style={{ background: 'var(--accent-400)' }}></div>
                                <div className={styles.cardDot} style={{ background: 'var(--primary-400)' }}></div>
                            </div>
                            <div className={styles.mockupContent}>
                                <div className={styles.mockupGreeting}>Welcome back 👋</div>
                                <div className={styles.mockupBalance}>
                                    <span className={styles.mockupLabel}>Total Balance</span>
                                    <span className={styles.mockupAmount}>GH₵ 24,580.00</span>
                                </div>
                                <div className={styles.mockupAccounts}>
                                    <div className={styles.mockupAccount}>
                                        <div className={styles.mockupAccIcon} style={{ background: 'var(--primary-100)', color: 'var(--primary-600)' }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 10h20" /></svg>
                                        </div>
                                        <div>
                                            <div className={styles.mockupAccName}>Savings Account</div>
                                            <div className={styles.mockupAccBal}>GH₵ 18,240.00</div>
                                        </div>
                                    </div>
                                    <div className={styles.mockupAccount}>
                                        <div className={styles.mockupAccIcon} style={{ background: 'var(--secondary-100)', color: 'var(--secondary-600)' }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                        </div>
                                        <div>
                                            <div className={styles.mockupAccName}>Current Account</div>
                                            <div className={styles.mockupAccBal}>GH₵ 6,340.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.mockupActions}>
                                    <div className={styles.mockupAction}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                                        Transfer
                                    </div>
                                    <div className={styles.mockupAction}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                                        Pay Bills
                                    </div>
                                    <div className={styles.mockupAction}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M16 8l-4 4-4-4" /></svg>
                                        History
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
