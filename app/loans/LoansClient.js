'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const loansList = [
    { 
        id: 'salary-loan', 
        title: 'Salary Loan & Overdraft', 
        popular: true,
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
        ), 
        desc: 'Credit and short-term overdraft facilities for government and corporate workers who receive their salaries through Atwima.', 
        features: [
            'Quick application processing in 3-5 business days', 
            'Payday overdraft access for instant emergency cash',
            'Competitive interest rates and transparent fees', 
            'Flexible repayment terms up to 36 months', 
            'Minimal documentation requirements'
        ],
        downloadForm: '/downloads',
        downloadLabel: 'Salary Advance Form (PDF)',
        calcLabel: 'Repayment Calculator'
    },
    { 
        id: 'commercial-loan', 
        title: 'Commercial Loan & Overdraft', 
        popular: true,
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ), 
        desc: 'Capital credit and revolving overdrafts designed for local businesses and SMEs to expand operations, buy inventory, or cover seasonal cash gaps.', 
        features: [
            'Flexible working capital and SME financing options', 
            'Revolving lines of credit for cash flow management', 
            'Flexible interest rate and tailored repayment options', 
            'Dedicated business advisory support from specialists', 
            'Low asset and collateral requirement barriers'
        ],
        downloadForm: '/downloads',
        downloadLabel: 'SME Loan Application Form (PDF)',
        calcLabel: 'Repayment Calculator'
    },
    { 
        id: 'transport-loan', 
        title: 'Transport Loan', 
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="1" y="3" width="15" height="13" />
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
            </svg>
        ), 
        desc: 'Specialized vehicle and logistics acquisition financing for commercial transport operators, taxi drivers, and private distribution companies.', 
        features: [
            'Financing for both brand new and certified used vehicles', 
            'Repayments structured to match weekly vehicle revenues', 
            'Highly competitive interest rates', 
            'Quick vehicle valuation and disbursement', 
            'Comprehensive insurance partnerships & advisory'
        ] 
    },
    { 
        id: 'susu-loan', 
        title: 'Susu Loan', 
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="M12 6v12M8 10h8" />
            </svg>
        ), 
        desc: 'Microfinance loans tailored specifically for active Susu savings account holders to instantly double or triple their working capital.', 
        features: [
            'Susu account balance multiplier loans', 
            'Extremely rapid micro-loan approvals within 48 hours', 
            'Daily, weekly, or monthly repayment flexibility', 
            'Designed to support micro-retailers and market traders', 
            'No complex formal auditing documentation required'
        ],
        downloadForm: '/downloads',
        downloadLabel: 'Susu Account Form (PDF)'
    },
    { 
        id: 'funeral-loan', 
        title: 'Funeral Loan', 
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2s-2 3-2 5 2 5 2 5 2-3 2-5-2-5-2-5z" />
                <rect x="9" y="12" width="6" height="10" rx="1" />
            </svg>
        ), 
        desc: 'Compassionate short-term financial support helping families cover final funeral rites and burial logistics for their loved ones.', 
        features: [
            'Rapid disbursement within 2 business days', 
            'Empathetic, discrete, and understanding processing', 
            'Flexible repayment structures designed around family needs', 
            'Aligned with local social and cultural requirements', 
            'Low interest rates and minimal collateral demands'
        ] 
    },
    { 
        id: 'church-development-loan', 
        title: 'Church Development Loan', 
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v6M9 5h6M4 22V11l8-7 8 7v11H4z" />
                <rect x="10" y="15" width="4" height="7" />
            </svg>
        ), 
        desc: 'Developmental credit and financing options for chapels, mission houses, musical instruments, and community buses.', 
        features: [
            'Flexible credit limits for building renovations and expansion', 
            'Equipment acquisition and church instrument financing', 
            'Cooperative repayment models suited for church boards', 
            'Supportive interest rates to empower community programs', 
            'Fast processing with standard community backing'
        ] 
    }
];

export default function LoansClient() {
    const [activeTab, setActiveTab] = useState('salary-loan');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash) {
                // Handle matching for different/old IDs
                if (hash === 'salary-loan' || hash === 'salary-overdraft') {
                    setActiveTab('salary-loan');
                } else if (hash === 'commercial-loan' || hash === 'commercial-overdraft') {
                    setActiveTab('commercial-loan');
                } else if (hash === 'transport-loan') {
                    setActiveTab('transport-loan');
                } else if (hash === 'susu-loan') {
                    setActiveTab('susu-loan');
                } else if (hash === 'funeral-loan') {
                    setActiveTab('funeral-loan');
                } else if (hash === 'church-development-loan' || hash === 'church-loan') {
                    setActiveTab('church-development-loan');
                }
            }
        };

        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const activeLoan = loansList.find(loan => loan.id === activeTab) || loansList[0];

    const handleTabClick = (id) => {
        setActiveTab(id);
        window.history.pushState(null, '', `#${id}`);
    };

    return (
        <div className="container">
            <div className={styles.tabsContainer}>
                <div className={styles.tabsList} role="tablist" aria-label="Loan Options">
                    {loansList.map((loan) => (
                        <button
                            key={loan.id}
                            role="tab"
                            aria-selected={activeTab === loan.id}
                            className={`${styles.tabButton} ${activeTab === loan.id ? styles.tabButtonActive : ''}`}
                            onClick={() => handleTabClick(loan.id)}
                        >
                            {loan.title.split(' & ')[0]}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.tabPanel} role="tabpanel" key={activeLoan.id}>
                <div className={`${styles.card} ${activeLoan.popular ? styles.popularCard : ''}`} style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {activeLoan.popular && (
                        <span className={styles.popularBadge}>Most Popular</span>
                    )}
                    
                    <div className={styles.cardHeader}>
                        <div className={styles.iconBox} aria-hidden="true">
                            {activeLoan.icon}
                        </div>
                        <h2 className={styles.cardTitle}>{activeLoan.title}</h2>
                    </div>
                    
                    <p className={styles.cardDesc}>{activeLoan.desc}</p>
                    
                    <h3 className={styles.featuresLabel} style={{ fontStyle: 'normal', fontWeight: 'bold', fontSize: 'var(--text-base)', marginBottom: 'var(--space-4)' }}>Key Features</h3>
                    <ul className={styles.featureList} aria-label={`${activeLoan.title} key features`}>
                        {activeLoan.features.map((feat) => (
                            <li key={feat} className={styles.featureItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span>{feat}</span>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.actions}>
                        <Link 
                            href="/contact" 
                            className="btn btn-primary btn-lg"
                            style={{ justifyContent: 'center' }}
                            aria-label={`Apply for ${activeLoan.title}`}
                        >
                            Apply for This Loan
                        </Link>

                        {(activeLoan.downloadForm || activeLoan.calcLabel) && (
                            <div className={styles.resourceLinks}>
                                {activeLoan.downloadForm && (
                                    <Link href={activeLoan.downloadForm} className={styles.resourceLink}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                                        </svg>
                                        {activeLoan.downloadLabel}
                                    </Link>
                                )}
                                {activeLoan.calcLabel && (
                                    <Link href="/calculators" className={styles.resourceLink}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                            <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="9" y1="22" x2="15" y2="22" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="16" y2="10" />
                                        </svg>
                                        {activeLoan.calcLabel}
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <p className={styles.disclaimer}>
                * Note: All loan applications and credit facility approvals are subject to standard credit assessments, customer KYC validation, and terms of credit compliance policies regulated by the Bank of Ghana.
            </p>
        </div>
    );
}
