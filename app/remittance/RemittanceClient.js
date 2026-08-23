'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const remittanceSteps = [
    {
        num: '01',
        title: 'Get Reference Number',
        desc: 'Obtain the 10-digit Money Transfer Control Number (MTCN) directly from the sender.',
        icon: '📝',
    },
    {
        num: '02',
        title: 'Visit a Branch with ID',
        desc: 'Visit any of our 6 branches with your MTCN. *Note: Per Bank of Ghana rules, only the physical Ghana Card is accepted as valid national identification for receiving remittance payouts.',
        icon: '🏦',
        warning: 'Ghana Card required',
    },
    {
        num: '03',
        title: 'Verify Transaction',
        desc: 'Our customer service agent will quickly capture and verify the transfer parameters with you.',
        icon: '✅',
    },
    {
        num: '04',
        title: 'Receive Payout (GHS)',
        desc: 'Receive your money instantly. All international remittance transactions are paid out in cash in Ghana Cedis (GHS).',
        icon: '💵',
    },
];

export default function RemittanceClient() {
    const [activeTab, setActiveTab] = useState('western-union');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash === 'western-union' || hash === 'how-it-works') {
                setActiveTab(hash);
            }
        };

        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    const handleTabClick = (id) => {
        setActiveTab(id);
        window.history.pushState(null, '', `#${id}`);
    };

    return (
        <div>
            <div className={styles.tabsContainer}>
                <div className={styles.tabsList} role="tablist" aria-label="Remittance Options">
                    <button
                        role="tab"
                        aria-selected={activeTab === 'western-union'}
                        className={`${styles.tabButton} ${activeTab === 'western-union' ? styles.tabButtonActive : ''}`}
                        onClick={() => handleTabClick('western-union')}
                    >
                        Western Union &amp; Partners
                    </button>
                    <button
                        role="tab"
                        aria-selected={activeTab === 'how-it-works'}
                        className={`${styles.tabButton} ${activeTab === 'how-it-works' ? styles.tabButtonActive : ''}`}
                        onClick={() => handleTabClick('how-it-works')}
                    >
                        How It Works
                    </button>
                </div>
            </div>

            <div className={styles.tabPanel} role="tabpanel" key={activeTab}>
                {activeTab === 'western-union' ? (
                    <div className={styles.tabbedContentWrap}>
                        <div className={styles.partnerSection}>
                            <span className="section-label">Global Payout Partner</span>
                            <h2 className={styles.partnerTitle}>Western Union Money Transfer</h2>
                            <p className={styles.partnerDesc}>
                                We are an official payout agent for Western Union. Walk into any of our locations across the Ashanti Region to collect your funds.
                            </p>
                        </div>

                        <div className={styles.infoLayout}>
                            {/* alternative channels */}
                            <div className={styles.channelsBlock} style={{ width: '100%' }}>
                                <h3 className={styles.blockTitle}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-600)" strokeWidth="2.5" aria-hidden="true">
                                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                    </svg>
                                    Other Money Channels We Pay Out
                                </h3>
                                <p className={styles.channelsDesc}>
                                    Need to collect via other international networks or mobile money wallets? Atwima Community Bank supports payout services for all these global and local networks:
                                </p>
                                <div 
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                                        gap: 'var(--space-4)',
                                        marginBottom: 'var(--space-8)',
                                        width: '100%'
                                    }}
                                    aria-label="Remittance partner networks"
                                >
                                    <div className={styles.logoCard} title="MTN Mobile Money">
                                        <Image 
                                            src="/mtn.jpeg" 
                                            alt="MTN Mobile Money" 
                                            width={110} 
                                            height={40} 
                                            style={{ width: '100%', height: 'auto', maxWidth: '110px', maxHeight: '40px', objectFit: 'contain' }} 
                                        />
                                    </div>
                                    <div className={styles.logoCard} title="Unity Link">
                                        <Image 
                                            src="/unity.png" 
                                            alt="Unity Link" 
                                            width={120} 
                                            height={40} 
                                            style={{ width: '100%', height: 'auto', maxWidth: '120px', maxHeight: '40px', objectFit: 'contain' }} 
                                        />
                                    </div>
                                    <div className={styles.logoCard} title="Ria Money Transfer">
                                        <svg 
                                            viewBox="0 0 130 30" 
                                            width="100%" 
                                            height="100%" 
                                            style={{ width: '100%', height: 'auto', maxWidth: '110px', maxHeight: '25px' }} 
                                            aria-label="Ria Money Transfer" 
                                            role="img"
                                        >
                                            <text x="5" y="23" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="900" fontStyle="italic" fontSize="24" fill="#EB2D27" letterSpacing="-1">ria</text>
                                            <circle cx="43" cy="8" r="3" fill="#0A3366" />
                                            <text x="50" y="20" fontFamily="'Inter', sans-serif" fontWeight="700" fontSize="8.5" fill="#71717A" letterSpacing="0">Money Transfer</text>
                                        </svg>
                                    </div>
                                    <div className={styles.logoCard} title="MoneyGram">
                                        <svg 
                                            viewBox="0 0 120 30" 
                                            width="100%" 
                                            height="100%" 
                                            style={{ width: '100%', height: 'auto', maxWidth: '110px', maxHeight: '25px' }} 
                                            aria-label="MoneyGram" 
                                            role="img"
                                        >
                                            <circle cx="12" cy="15" r="8" fill="#E21A22" />
                                            <path d="M10 15h4M12 13l2 2-2 2" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                                            <text x="26" y="20" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="800" fontSize="14" fill="#18181B" letterSpacing="-0.5">MoneyGram</text>
                                        </svg>
                                    </div>
                                    <div className={styles.logoCard} title="Express Funds">
                                        <svg 
                                            viewBox="0 0 130 30" 
                                            width="100%" 
                                            height="100%" 
                                            style={{ width: '100%', height: 'auto', maxWidth: '120px', maxHeight: '25px' }} 
                                            aria-label="Express Funds" 
                                            role="img"
                                        >
                                            <path d="M14 4 L8 14 H13 L11 24 L18 12 H13 Z" fill="#F59E0B" />
                                            <text x="22" y="19" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="800" fontSize="12" fill="#0A3366" letterSpacing="0.5">EXPRESS</text>
                                            <text x="80" y="19" fontFamily="'Outfit', 'Inter', sans-serif" fontWeight="500" fontSize="12" fill="#10B981" letterSpacing="0.5">FUNDS</text>
                                        </svg>
                                    </div>
                                </div>
                                <div style={{ marginTop: 'var(--space-6)' }}>
                                    <Link 
                                        href="/contact" 
                                        className="btn btn-primary"
                                        aria-label="Contact Atwima Community Bank regarding money transfer options, branch locations, and hours"
                                    >
                                        Find Nearest Branch
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.tabbedContentWrap}>
                        {/* Step-by-Step Payout Process */}
                        <div className="section-header centered">
                            <span className="section-label">Receiving Guide</span>
                            <h2 className="section-title">Step-by-Step Payout Process</h2>
                        </div>
                        
                        <div className={styles.stepsGrid} role="region" aria-label="Remittance payout steps">
                            {remittanceSteps.map((step) => (
                                <div key={step.num} className={styles.stepCard}>
                                    <div className={styles.stepNum} aria-hidden="true">
                                        {step.num}
                                    </div>
                                    <span className={styles.stepIcon} role="img" aria-label={step.title}>
                                        {step.icon}
                                    </span>
                                    <h3 className={styles.stepTitle}>
                                        <span className="sr-only">Step {step.num}: </span>
                                        {step.title}
                                    </h3>
                                    <p className={styles.stepDesc}>{step.desc}</p>
                                    {step.warning && (
                                        <div className={styles.warningNote}>
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                                            </svg>
                                            <span>{step.warning}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* What to Bring Checklist */}
                        <div className={styles.checklistBlock} style={{ marginTop: 'var(--space-10)' }}>
                            <h3 className={styles.blockTitle}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-600)" strokeWidth="2.5" aria-hidden="true">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14M22 4L12 14.01l-3-3"/>
                                </svg>
                                What to Bring to the Branch
                            </h3>
                            <ul className={styles.list} aria-label="Remittance requirements checklist">
                                <li className={styles.listItem}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span><strong>Physical Ghana Card:</strong> The only legal identification card accepted per Bank of Ghana directives. Photocopies or digital copies are not accepted.</span>
                                </li>
                                <li className={styles.listItem}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span><strong>10-Digit MTCN:</strong> Money Transfer Control Number.</span>
                                </li>
                                <li className={styles.listItem}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span><strong>Sender Details:</strong> Full name of the sender.</span>
                                </li>
                                <li className={styles.listItem}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span><strong>Sender Country:</strong> Country from which the money was sent.</span>
                                </li>
                                <li className={styles.listItem}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    <span><strong>Expected Amount:</strong> The approximate amount sent.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
