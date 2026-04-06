'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import styles from './ServiceCards.module.css';

const services = [
    {
        title: 'Personal Banking',
        description: 'Savings, current, salary, and susu accounts designed for your everyday financial needs. Start building your future today.',
        href: '/personal-banking',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
            </svg>
        ),
        color: 'var(--primary-600)',
        bg: 'var(--primary-50)',
    },
    {
        title: 'Business Banking',
        description: 'Commercial loans, overdrafts, and group lending to power your business growth. Flexible terms that work for you.',
        href: '/business-banking',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
        color: 'var(--secondary-600)',
        bg: 'var(--secondary-100)',
    },
    {
        title: 'Loans & Credit',
        description: 'From salary loans to transport and church development financing — competitive rates with flexible repayment options.',
        href: '/loans',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
        color: 'var(--accent-600)',
        bg: 'var(--accent-100)',
    },
    {
        title: 'Financial Tools',
        description: 'Plan your savings, calculate loan repayments, and estimate fixed deposit returns with our free online calculators.',
        href: '/calculators',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="12" y2="14" />
            </svg>
        ),
        color: 'var(--primary-600)',
        bg: 'var(--primary-100)',
    },
];

export default function ServiceCards() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.visible);
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="section" ref={ref}>
            <div className="container">
                <div className={`section-header centered ${styles.header}`}>
                    <span className="section-label">Our Services</span>
                    <h2 className="section-title">Banking Solutions for Every Need</h2>
                    <p className="section-subtitle">
                        Whether you are saving for the future, growing your business, or need financing —
                        we have the right solution.
                    </p>
                </div>
                <div className={styles.grid}>
                    {services.map((service, i) => (
                        <Link href={service.href} key={service.title} className={styles.card} style={{ '--delay': `${i * 100}ms` }}>
                            <div className={styles.cardIcon} style={{ background: service.bg, color: service.color }}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardText}>{service.description}</p>
                            <span className={styles.cardLink} style={{ color: service.color }}>
                                Learn More
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
