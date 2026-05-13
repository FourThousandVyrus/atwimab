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
                        For over three decades, Atwima Community Bank has helped families, businesses,
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
                    <div className={styles.visualStack}>
                        <div className={styles.imageBase}>
                            <img src="/community-hero.png" alt="Atwima Community Bank" className={styles.heroImage} />
                            <div className={styles.imageOverlay}></div>
                        </div>
                        
                        {/* Floating Trust Cards */}
                        <div className={`${styles.floatingCard} ${styles.card1}`}>
                            <div className={styles.cardIcon}>🏢</div>
                            <div className={styles.cardInfo}>
                                <div className={styles.cardLabel}>Our Presence</div>
                                <div className={styles.cardValue}>6 Local Branches</div>
                            </div>
                        </div>

                        <div className={`${styles.floatingCard} ${styles.card2}`}>
                            <div className={styles.cardIcon}>🤝</div>
                            <div className={styles.cardInfo}>
                                <div className={styles.cardLabel}>Trusted By</div>
                                <div className={styles.cardValue}>Thousands in Ashanti</div>
                            </div>
                        </div>

                        <div className={`${styles.floatingCard} ${styles.card3}`}>
                            <div className={styles.cardIcon}>📈</div>
                            <div className={styles.cardInfo}>
                                <div className={styles.cardLabel}>Our Impact</div>
                                <div className={styles.cardValue}>30+ Years Growth</div>
                            </div>
                        </div>

                        {/* Service Pills */}
                        <div className={styles.servicePills}>
                            <span className={styles.servicePill}>Savings</span>
                            <span className={styles.servicePill}>Loans</span>
                            <span className={styles.servicePill}>Susu</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
