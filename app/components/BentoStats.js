'use client';
import useScrollReveal from '../hooks/useScrollReveal';
import AnimatedCounter from './AnimatedCounter';
import styles from './BentoStats.module.css';

export default function BentoStats() {
    const containerRef = useScrollReveal({ threshold: 0.1 });

    return (
        <section className={styles.section} id="stats">
            <div className="container">
                <div className={`${styles.grid} reveal`} ref={containerRef}>
                    {/* Card 1: 30+ Years */}
                    <div className={`${styles.card} ${styles.cardWide}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrap}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <span className={styles.label}>Est. 1991</span>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.value}>
                                <AnimatedCounter value="30" suffix="+" />
                            </div>
                            <h3 className={styles.title}>Years of Trusted Service</h3>
                            <p className={styles.desc}>
                                Over three decades of supporting businesses, agriculture, and families throughout the Ashanti Region.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: 6 Branches */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrap}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <span className={styles.label}>Outreach</span>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.value}>
                                <AnimatedCounter value="6" />
                            </div>
                            <h3 className={styles.title}>Strategic Branches</h3>
                            <p className={styles.desc}>
                                Foase (HQ), Kwadaso, Patasi, Mpasatia, Allabar, and Daban.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: GH₵ 50M+ Loans */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrap}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                            </div>
                            <span className={styles.label}>Financing</span>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.value}>
                                <AnimatedCounter value="50" prefix="GH₵ " suffix="M+" />
                            </div>
                            <h3 className={styles.title}>Capital Disbursed</h3>
                            <p className={styles.desc}>
                                Micro-loans and business credit deployed to build local enterprises.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: 10,000+ Customers */}
                    <div className={`${styles.card} ${styles.cardWide}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrap}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <span className={styles.label}>Community</span>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.value}>
                                <AnimatedCounter value="10000" suffix="+" />
                            </div>
                            <h3 className={styles.title}>Active Customers</h3>
                            <p className={styles.desc}>
                                Market traders, farmers, teachers, and business owners who rely on our financial solutions daily.
                            </p>
                        </div>
                    </div>

                    {/* Card 5: 100% Committed */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrap}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </div>
                            <span className={styles.label}>CSR</span>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.value}>100%</div>
                            <h3 className={styles.title}>Ashanti Committed</h3>
                            <p className={styles.desc}>
                                Reinvesting profit back into schools, water facilities, and public health.
                            </p>
                        </div>
                    </div>

                    {/* Card 6: Susu Daily Growth */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrap}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <span className={styles.label}>Products</span>
                        </div>
                        <div className={styles.cardBody}>
                            <div className={styles.value}>Daily</div>
                            <h3 className={styles.title}>Susu Growth</h3>
                            <p className={styles.desc}>
                                Smart savings plans allowing micro-deposits for market retailers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
