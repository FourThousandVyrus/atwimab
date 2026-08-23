'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const categories = [
    {
        name: 'Account Forms',
        icon: '🏦',
        docs: [
            { id: 'personal-acct', title: 'Personal Account Opening Form', desc: 'Required to open a savings or current account as an individual.', type: 'PDF', size: '240 KB', path: '/forms/atwima-document.pdf' },
            { id: 'business-acct', title: 'Business Account Opening Form', desc: 'For sole proprietors and registered businesses opening an account.', type: 'PDF', size: '310 KB', path: '/forms/atwima-document.pdf' },
            { id: 'susu-acct', title: 'Susu Account Registration Form', desc: 'Enroll in our popular daily Susu savings scheme.', type: 'PDF', size: '180 KB', path: '/forms/atwima-document.pdf' },
            { id: 'fd-acct', title: 'Fixed Deposit Application Form', desc: 'Open a fixed deposit and lock in a competitive rate.', type: 'PDF', size: '200 KB', path: '/forms/atwima-document.pdf' },
        ],
    },
    {
        name: 'Loan Forms',
        icon: '💰',
        docs: [
            { id: 'personal-loan', title: 'Personal Loan Application', desc: 'Apply for a personal loan tailored to your needs.', type: 'PDF', size: '290 KB', path: '/forms/atwima-document.pdf' },
            { id: 'sme-loan', title: 'SME Loan Application', desc: 'Financing application for small and medium enterprises.', type: 'PDF', size: '340 KB', path: '/forms/atwima-document.pdf' },
            { id: 'agric-loan', title: 'Agricultural Loan Application', desc: 'Seasonal and investment financing for farmers.', type: 'PDF', size: '260 KB', path: '/forms/atwima-document.pdf' },
            { id: 'salary-advance', title: 'Salary Advance Application', desc: 'Quick salary advance form for existing account holders.', type: 'PDF', size: '160 KB', path: '/forms/atwima-document.pdf' },
        ],
    },
    {
        name: 'Brochures',
        icon: '📋',
        docs: [
            { id: 'overview-brochure', title: 'Atwima Community Bank Overview', desc: 'General overview of our products, services, and branch network.', type: 'PDF', size: '1.2 MB', path: '/forms/atwima-document.pdf' },
            { id: 'savings-brochure', title: 'Savings Products Guide', desc: 'Detailed rates and features for all savings accounts.', type: 'PDF', size: '560 KB', path: '/forms/atwima-document.pdf' },
            { id: 'loans-brochure', title: 'Loans & Credit Products', desc: 'Interest rates, eligibility and terms for all loan products.', type: 'PDF', size: '620 KB', path: '/forms/atwima-document.pdf' },
            { id: 'invest-brochure', title: 'Investment & Shares Guide', desc: 'Information on ARB Apex Shares and fixed deposit options.', type: 'PDF', size: '480 KB', path: '/forms/atwima-document.pdf' },
        ],
    },
    {
        name: 'Other Documents',
        icon: '📄',
        docs: [
            { id: 'standing-order', title: 'Standing Order Instruction Form', desc: 'Set up recurring automatic payments between local bank accounts.', type: 'PDF', size: '190 KB', path: '/forms/atwima-document.pdf' },
            { id: 'acct-amend', title: 'Account Amendment Request', desc: 'Update your contact details or signatory information.', type: 'PDF', size: '170 KB', path: '/forms/atwima-document.pdf' },
            { id: 'complaint-form', title: 'Complaint & Feedback Form', desc: 'Submit a formal complaint or service feedback.', type: 'PDF', size: '150 KB', path: '/forms/atwima-document.pdf' },
        ],
    },
];

export default function DownloadsClient() {
    const [searchQuery, setSearchQuery] = useState('');
    const [downloadingDoc, setDownloadingDoc] = useState(null);

    const filteredCategories = useMemo(() => {
        if (!searchQuery.trim()) return categories;

        const query = searchQuery.toLowerCase();
        return categories.map(cat => {
            const matchedDocs = cat.docs.filter(doc => 
                doc.title.toLowerCase().includes(query) || 
                doc.desc.toLowerCase().includes(query)
            );
            return {
                ...cat,
                docs: matchedDocs
            };
        }).filter(cat => cat.docs.length > 0);
    }, [searchQuery]);

    const handleDownload = (doc) => {
        setDownloadingDoc(doc.title);
        setTimeout(() => {
            setDownloadingDoc(null);
        }, 3000);
    };

    return (
        <main>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <span className="section-label" style={{ color: 'var(--primary-200)' }}>Resources</span>
                    <h1>Downloads &amp; Forms</h1>
                    <p className={styles.heroSub}>Find and download account opening forms, loan applications, and banking brochures. All forms can also be collected at any of our six branches.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {/* Notice bar */}
                    <div className={styles.notice} role="status">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <p><strong>Note:</strong> These are reference copies. For account opening and loan applications, please visit any of our branches with the completed form along with the required identification documents.</p>
                    </div>

                    {/* Search & Filter bar */}
                    <div className={styles.searchBarContainer}>
                        <div className={styles.searchWrapper}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--neutral-400)" strokeWidth="2" className={styles.searchIcon} aria-hidden="true">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <input 
                                type="text" 
                                placeholder="Search forms, brochures and applications..." 
                                className={styles.searchInput}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                aria-label="Search documents and forms"
                            />
                            {searchQuery && (
                                <button 
                                    className={styles.clearBtn} 
                                    onClick={() => setSearchQuery('')}
                                    aria-label="Clear search query"
                                >
                                    ✕
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Downloading Toast Indicator */}
                    {downloadingDoc && (
                        <div className={styles.toast} aria-live="polite">
                            <span>⏳</span> Downloading reference copy of <strong>{downloadingDoc}</strong>...
                        </div>
                    )}

                    {/* Categories grid */}
                    <div className={styles.categoriesList}>
                        {filteredCategories.length > 0 ? (
                            filteredCategories.map(cat => (
                                <div key={cat.name} className={styles.category} id={cat.name.toLowerCase().replace(/\s+/g, '-')}>
                                    <h2 className={styles.categoryTitle}>
                                        <span>{cat.icon}</span> {cat.name}
                                    </h2>
                                    <div className={styles.docsGrid}>
                                        {cat.docs.map(doc => (
                                            <div key={doc.id} className={styles.docCard}>
                                                <div className={styles.docIcon} aria-hidden="true">
                                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-600)" strokeWidth="1.5">
                                                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                                        <polyline points="14 2 14 8 20 8" />
                                                        <line x1="16" y1="13" x2="8" y2="13" />
                                                        <line x1="16" y1="17" x2="8" y2="17" />
                                                        <polyline points="10 9 9 9 8 9" />
                                                    </svg>
                                                </div>
                                                <div className={styles.docInfo}>
                                                    <h3 className={styles.docTitle}>{doc.title}</h3>
                                                    <p className={styles.docDesc}>{doc.desc}</p>
                                                    <div className={styles.docMeta}>
                                                        <span className={styles.docBadge}>{doc.type}</span>
                                                        <span className={styles.docSize}>{doc.size}</span>
                                                    </div>
                                                </div>
                                                
                                                <a 
                                                    href={doc.path} 
                                                    download 
                                                    className={styles.downloadBtn}
                                                    onClick={() => handleDownload(doc)}
                                                    aria-label={`Download ${doc.title} (${doc.type}, ${doc.size})`}
                                                >
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                                                        <polyline points="7 10 12 15 17 10" />
                                                        <line x1="12" y1="15" x2="12" y2="3" />
                                                    </svg>
                                                    Download
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className={styles.noResults}>
                                🔍
                                <h3>No matching forms found</h3>
                                <p>We couldn&apos;t find any documents matching &ldquo;{searchQuery}&rdquo;. Try searching for &ldquo;loan&rdquo;, &ldquo;susu&rdquo;, or &ldquo;account&rdquo;.</p>
                                <button className="btn btn-secondary btn-sm" onClick={() => setSearchQuery('')}>Clear Search</button>
                            </div>
                        )}
                    </div>

                </div>
            </section>

            {/* CTA Help */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaCard}>
                        <div className={styles.ctaText}>
                            <h2>Need Help With a Form?</h2>
                            <p>Our staff are ready to assist you complete any form at any of our six branches, or you can reach us on WhatsApp.</p>
                        </div>
                        <div className={styles.ctaButtons}>
                            <Link href="/contact" className="btn btn-primary">Find a Branch</Link>
                            <a href="https://wa.me/233501387040?text=Hello%2C%20I%20need%20help%20with%20a%20bank%20form." target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Chat on WhatsApp</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
