'use client';
import { useEffect, useRef } from 'react';
import styles from './DigitalBanking.module.css';

const features = [
    {
        id: 'momo',
        title: 'Mobile Money Integration',
        text: 'Receive and send money via MTN MoMo, Vodafone Cash, and AirtelTigo Money right from your branch account.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                <path d="M17 10l-5-5-5 5M12 5v10" stroke="var(--secondary-500)" />
                <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
        )
    },
    {
        id: 'fraud',
        title: 'Fraud Protection',
        text: 'Advanced security measures to protect your money and personal information at all times.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 11l2 2 4-4" stroke="var(--secondary-500)" />
            </svg>
        )
    },
    {
        id: 'branches',
        title: 'Branch Network Access',
        text: 'Walk into any of our 6 branches across the Ashanti Region for full-service banking support.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 21h18M3 10h18M5 10V21M19 10V21M12 10V21M4 6l8-4 8 4v4H4V6z" />
                <circle cx="12" cy="14" r="2" stroke="var(--secondary-500)" />
            </svg>
        )
    },
    {
        id: 'transfers',
        title: 'Fast Transfers',
        text: 'Send and receive money quickly between accounts and to other banks with minimal processing time.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M17 3L21 7L17 11" />
                <path d="M3 7H21" />
                <path d="M7 21L3 17L7 13" />
                <path d="M21 17H3" stroke="var(--secondary-500)" />
            </svg>
        )
    }
];

export default function DigitalBanking() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) entry.target.classList.add(styles.visible); },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={`section ${styles.section}`} ref={ref}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.content}>
                        <span className="section-label">Convenient Banking</span>
                        <h2 className="section-title">Banking Made for Your Life</h2>
                        <p className={styles.desc}>Atwima Community Bank makes your financial life easier. Whether it's mobile money, branch visits, or personal advisory — we bring banking closer to your community.</p>
                        <div className={styles.features}>
                            {features.map((f) => (
                                <div key={f.title} className={styles.feature}>
                                    <span className={styles.fIcon}>{f.icon}</span>
                                    <div>
                                        <h3 className={styles.fTitle}>{f.title}</h3>
                                        <p className={styles.fText}>{f.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.visual}>
                        <div className={styles.branchCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardLogo}>
                                    <img 
                                        src="/logo.png" 
                                        alt="Atwima Community Bank Logo" 
                                        style={{ width: 'auto', height: '28px', objectFit: 'contain' }}
                                    />
                                </div>
                                <div>
                                    <div className={styles.cardBankName}>Atwima Community Bank</div>
                                    <div className={styles.cardSub}>6 Branches · Ashanti Region</div>
                                </div>
                            </div>

                            <div className={styles.cardServices}>
                                <div className={styles.serviceRow}>
                                    <span className={styles.serviceDot} style={{ background: '#22c55e' }}></span>
                                    <span>MoMo / Vodafone / AirtelTigo deposits</span>
                                </div>
                                <div className={styles.serviceRow}>
                                    <span className={styles.serviceDot} style={{ background: '#3b82f6' }}></span>
                                    <span>In-branch savings &amp; withdrawals</span>
                                </div>
                                <div className={styles.serviceRow}>
                                    <span className={styles.serviceDot} style={{ background: '#f59e0b' }}></span>
                                    <span>Loan &amp; investment advisory</span>
                                </div>
                                <div className={styles.serviceRow}>
                                    <span className={styles.serviceDot} style={{ background: '#8b5cf6' }}></span>
                                    <span>Western Union money transfer</span>
                                </div>
                                <div className={styles.serviceRow}>
                                    <span className={styles.serviceDot} style={{ background: '#ef4444' }}></span>
                                    <span>Susu daily collection scheme</span>
                                </div>
                            </div>

                            <div className={styles.cardBranches}>
                                <div className={styles.branchesLabel}>Our Branches</div>
                                <div className={styles.branchPills}>
                                    {['Foase HQ', 'Kwadaso', 'Patasi', 'Mpasatia', 'Allabar', 'Daban'].map(b => (
                                        <span key={b} className={styles.branchPill}>{b}</span>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.cardFooter}>
                                <div className={styles.hoursRow}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                    <span>Mon–Fri 8am–5pm &nbsp;|&nbsp; Sat 9am–1pm</span>
                                </div>
                                <div className={styles.hoursRow}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                                    <span>0501 387 040</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
