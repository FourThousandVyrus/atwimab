'use client';
import { useEffect, useRef } from 'react';
import styles from './WhyChooseUs.module.css';

const features = [
    {
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>,
        title: 'Secure & Protected',
        text: 'Your deposits are fully insured by the Ghana Deposit Protection Corporation. Bank of Ghana regulated for your peace of mind.',
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
        title: 'Community Focused',
        text: 'Deeply rooted in the Ashanti Region with 6 branches. We invest in local initiatives and empower communities.',
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
        title: 'Flexible Products',
        text: 'From susu savings to commercial loans, our products adapt to your lifestyle. Competitive rates with flexible terms.',
    },
    {
        icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
        title: 'Local Expertise',
        text: 'Over 30 years of understanding what our customers need. Personalized service from people who know your community.',
    },
];

export default function WhyChooseUs() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={`section-alt section ${styles.section}`} ref={ref}>
            <div className="container">
                <div className="section-header centered">
                    <span className="section-label">Why Choose Us</span>
                    <h2 className="section-title">Built on Trust. Driven by Service.</h2>
                    <p className="section-subtitle">Atwima Rural Bank has been the financial backbone of families and businesses in the Ashanti Region for over three decades.</p>
                </div>
                <div className={`${styles.grid} stagger-children`}>
                    {features.map((f) => (
                        <div key={f.title} className={styles.feature}>
                            <div className={styles.featureIcon}>{f.icon}</div>
                            <h4 className={styles.featureTitle}>{f.title}</h4>
                            <p className={styles.featureText}>{f.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
