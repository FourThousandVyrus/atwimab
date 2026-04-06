'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './RatesSnapshot.module.css';

const rates = [
    { product: 'Savings Account', rate: '5.00%', period: 'per annum', type: 'savings' },
    { product: 'Fixed Deposit (6 months)', rate: '18.00%', period: 'per annum', type: 'investment' },
    { product: 'Fixed Deposit (12 months)', rate: '22.00%', period: 'per annum', type: 'investment' },
    { product: 'Salary Loan', rate: 'From 28%', period: 'per annum', type: 'loan' },
    { product: 'Commercial Loan', rate: 'From 30%', period: 'per annum', type: 'loan' },
    { product: 'Susu Account', rate: 'Flexible', period: 'daily savings', type: 'savings' },
    { product: 'ARB Shares', rate: 'Dividend', period: 'annual payout', type: 'investment' },
];

const tabs = [
    { label: 'All Products', value: 'all' },
    { label: 'Savings', value: 'savings' },
    { label: 'Investments', value: 'investment' },
    { label: 'Loans', value: 'loan' },
];

export default function RatesSnapshot() {
    const ref = useRef(null);
    const [activeTab, setActiveTab] = useState('all');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const filtered = activeTab === 'all' ? rates : rates.filter(r => r.type === activeTab);

    return (
        <section className={`section-alt section ${styles.section}`} ref={ref}>
            <div className="container">
                <div className="section-header centered">
                    <span className="section-label">Current Rates</span>
                    <h2 className="section-title">Competitive Rates for You</h2>
                    <p className="section-subtitle">Transparent rates designed to help your money grow.</p>
                </div>
                <div className={styles.tabs}>
                    {tabs.map(tab => (
                        <button
                            key={tab.value}
                            className={`${styles.tab} ${activeTab === tab.value ? styles.tabActive : ''}`}
                            onClick={() => setActiveTab(tab.value)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className={styles.tableWrap}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Interest Rate</th>
                                <th>Period</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((r) => (
                                <tr key={r.product}>
                                    <td className={styles.productName}>{r.product}</td>
                                    <td className={styles.rate}>{r.rate}</td>
                                    <td>{r.period}</td>
                                    <td>
                                        <span className={`${styles.typeBadge} ${styles[r.type]}`}>
                                            {r.type}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className={styles.disclaimer}>
                    * Rates are indicative and subject to change. Visit a branch or contact us for current rates and terms.
                </p>
            </div>
        </section>
    );
}
