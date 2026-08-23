'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const personalAccounts = [
    {
        id: 'current-account',
        title: 'ARB Current Account',
        image: '/acc_current.png',
        description: 'A flexible transactional account for your daily banking needs. Ideal for individuals who need regular access to their funds with cheque book facilities.',
        features: ['Cheque book facility', 'ATM card access', 'Standing order facility', 'Direct debit services', 'Detailed monthly statements'],
        downloadForm: '/downloads',
        downloadLabel: 'Account Opening Form (PDF)',
    },
    {
        id: 'savings-account',
        title: 'ARB Savings Account',
        image: '/acc_savings.png',
        description: 'Build your savings with competitive interest rates. Our savings account helps you grow your wealth while maintaining easy access to your funds.',
        features: ['Competitive interest rates', 'No minimum balance requirement', 'ATM card access', 'E-Zwich card compatibility', 'Interest paid quarterly'],
        downloadForm: '/downloads',
        downloadLabel: 'Account Opening Form (PDF)',
        calcLink: '/calculators',
        calcLabel: 'Fixed Deposit Calculator',
    },
    {
        id: 'salary-account',
        title: 'ARB Salary Account',
        image: '/acc_salary.png',
        description: 'Designed specifically for salaried workers. Receive your salary directly into your account with exclusive benefits for employees.',
        features: ['Direct salary deposits', 'Overdraft facility available', 'Salary advance options', 'Free monthly statements', 'Preferential loan rates'],
        downloadForm: '/downloads',
        downloadLabel: 'Salary Advance Form (PDF)',
    },
    {
        id: 'susu-account',
        title: 'ARB Susu Account',
        image: '/acc_susu.png',
        description: 'Traditional daily savings modernized for your convenience. Our mobile susu collectors come to your shop or market stall, making saving effortless and secure.',
        features: ['Daily collection service', 'Flexible deposit amounts', 'Access to Susu loans', 'Mobile collection at your location', 'Low opening balance'],
        downloadForm: '/downloads',
        downloadLabel: 'Susu Account Form (PDF)',
        calcLink: '/calculators',
        calcLabel: 'Susu Savings Calculator',
    },
    {
        id: 'kiddies-account',
        title: 'Kiddies Account',
        image: '/acc_kiddies.png',
        description: 'Give your child a head start in financial literacy. Open a savings account in their name and watch their future grow.',
        features: ['Low opening balance', 'Competitive interest rates', 'Birthday gifts & rewards', 'Financial literacy resources', 'Parent/guardian oversight'],
        downloadForm: '/downloads',
        downloadLabel: 'Kiddies Account Form (PDF)',
    },
];

export default function PersonalBankingClient() {
    const [activeTab, setActiveTab] = useState('current-account');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash && personalAccounts.some(acc => acc.id === hash)) {
                setActiveTab(hash);
            }
        };

        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const activeAccount = personalAccounts.find(acc => acc.id === activeTab) || personalAccounts[0];

    const handleTabClick = (id) => {
        setActiveTab(id);
        window.history.pushState(null, '', `#${id}`);
    };

    return (
        <div className="container">
            <div className={styles.tabsContainer}>
                <div className={styles.tabsList} role="tablist" aria-label="Personal Account Types">
                    {personalAccounts.map((acc) => (
                        <button
                            key={acc.id}
                            role="tab"
                            aria-selected={activeTab === acc.id}
                            className={`${styles.tabButton} ${activeTab === acc.id ? styles.tabButtonActive : ''}`}
                            onClick={() => handleTabClick(acc.id)}
                        >
                            {acc.title}
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.tabPanel} role="tabpanel" key={activeAccount.id}>
                <div className={styles.tabbedCard}>
                    <div className={styles.tabbedImageWrapper}>
                        <Image 
                            src={activeAccount.image} 
                            alt={activeAccount.title} 
                            fill 
                            sizes="(max-width: 1024px) 100vw, 600px"
                            className={styles.accountImage} 
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </div>
                    <div className={styles.accountContent}>
                        <h2 className={styles.accountTitle}>{activeAccount.title}</h2>
                        <p className={styles.accountDesc}>{activeAccount.description}</p>
                        
                        <h3 className={styles.featuresLabel}>Key Features</h3>
                        <ul className={styles.featuresList} aria-label={`${activeAccount.title} features`}>
                            {activeAccount.features.map((f) => (
                                <li key={f}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <div className={styles.actions}>
                            <Link 
                                href="/contact" 
                                className="btn btn-primary"
                                aria-label={`Open a ${activeAccount.title}`}
                            >
                                Open This Account
                            </Link>

                            {(activeAccount.downloadForm || activeAccount.calcLink) && (
                                <div className={styles.resourceLinks}>
                                    {activeAccount.downloadForm && (
                                        <Link href={activeAccount.downloadForm} className={styles.resourceLink}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                                            </svg>
                                            {activeAccount.downloadLabel}
                                        </Link>
                                    )}
                                    {activeAccount.calcLink && (
                                        <Link href={activeAccount.calcLink} className={styles.resourceLink}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                                                <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="9" y1="22" x2="15" y2="22" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="16" y2="10" />
                                            </svg>
                                            {activeAccount.calcLabel}
                                        </Link>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
