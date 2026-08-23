'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const businessProducts = [
    {
        id: 'business-accounts',
        title: 'Business Accounts',
        image: '/atwima_bank_final_real.png',
        desc: 'Current and savings accounts tailored for businesses, sole proprietors, and companies, with features that simplify your financial operations.',
        features: ['Cheque book facility', 'Dedicated business account manager', 'Bulk payment processing', 'Cash management services', 'Regular account statements'],
        downloadUrl: '/downloads#account-forms',
        downloadLabel: 'Download Opening Form'
    },
    {
        id: 'commercial-loans',
        title: 'Commercial Loans & Overdrafts',
        image: '/service_1.png',
        desc: 'Working capital, business expansion loans, and revolving credit overdrafts with competitive rates designed for the unique needs of Ghanaian businesses.',
        features: [
            'Flexible loan amounts & terms',
            'Tailored repayment schedules mapped to business cycles',
            'Quick approval processing within 5 business days',
            'Overdraft facilities to cover seasonal cash flow gaps',
            'Dedicated commercial finance advisory support'
        ],
        downloadUrl: '/downloads#loan-forms',
        downloadLabel: 'Download SME Loan Form'
    },
    {
        id: 'group-loans',
        title: 'Group & Cooperative Loans',
        image: '/service_4.png',
        desc: 'Collective lending for groups of market traders, agricultural cooperatives, and self-help associations to lower barriers to credit.',
        features: ['Group-based lending (no individual collateral required)', 'Shared liability and cooperative support models', 'Basic business financial literacy training', 'Promotes savings habits and community growth', 'Micro-enterprise expansion capital'],
        downloadUrl: '/contact',
        downloadLabel: 'Inquire About Group Loans'
    }
];

export default function BusinessBankingClient() {
    const [activeTab, setActiveTab] = useState('business-accounts');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash) {
                // Map the old/header IDs correctly to activeTab state
                if (hash === 'business-accounts' || hash === 'accounts') {
                    setActiveTab('business-accounts');
                } else if (hash === 'commercial-loans' || hash === 'commercial-overdraft') {
                    setActiveTab('commercial-loans');
                } else if (hash === 'group-loans') {
                    setActiveTab('group-loans');
                }
            }
        };

        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const activeProduct = businessProducts.find(p => p.id === activeTab) || businessProducts[0];

    const handleTabClick = (id) => {
        setActiveTab(id);
        window.history.pushState(null, '', `#${id}`);
    };

    return (
        <div>
            <div className={styles.tabsContainer}>
                <div className={styles.tabsList} role="tablist" aria-label="Business Banking Services">
                    {businessProducts.map((p) => (
                        <button
                            key={p.id}
                            role="tab"
                            aria-selected={activeTab === p.id}
                            className={`${styles.tabButton} ${activeTab === p.id ? styles.tabButtonActive : ''}`}
                            onClick={() => handleTabClick(p.id)}
                        >
                            {p.title === 'Commercial Loans & Overdrafts' ? 'Commercial Loans' : p.title}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.tabPanel} role="tabpanel" key={activeProduct.id}>
                <div className={styles.tabbedCard}>
                    <div className={styles.tabbedImageWrapper}>
                        <Image 
                            src={activeProduct.image} 
                            alt={activeProduct.title} 
                            fill 
                            sizes="(max-width: 1024px) 100vw, 600px"
                            className={styles.accountImage} 
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                    <div className={styles.cardContent}>
                        <h2 className={styles.cardTitle}>{activeProduct.title}</h2>
                        <p className={styles.cardDesc}>{activeProduct.desc}</p>
                        
                        <h3 className={styles.featuresLabel}>Key Benefits &amp; Features</h3>
                        <ul className={styles.featuresList} aria-label={`${activeProduct.title} benefits`}>
                            {activeProduct.features.map((f) => (
                                <li key={f} className={styles.featureItem}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true" style={{ flexShrink: 0 }}>
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className={styles.actions}>
                            <Link 
                                href={`/contact?subject=${encodeURIComponent(activeProduct.title)}`} 
                                className="btn btn-primary"
                                aria-label={`Apply for ${activeProduct.title}`}
                            >
                                Apply Now
                            </Link>
                            <Link href={activeProduct.downloadUrl} className="btn btn-secondary">
                                {activeProduct.downloadLabel}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
