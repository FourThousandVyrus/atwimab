'use client';

import { useState, useMemo } from 'react';
import styles from './page.module.css';

const faqs = [
    {
        category: 'Accounts',
        items: [
            { q: 'What types of accounts does Atwima Community Bank offer?', a: 'We offer Current Accounts, Savings Accounts, Salary Accounts, Susu Accounts, and Kiddies Accounts — each designed for different financial needs.' },
            { q: 'How do I open an account?', a: 'Visit any of our 6 branches with a valid national ID (Ghana Card, Voter\'s ID, or Passport), 2 passport photos, and an initial deposit. You can also call us to book an appointment.' },
            { q: 'What is the minimum balance for a savings account?', a: 'Our savings accounts have a minimal opening deposit. Please contact your nearest branch for the current minimum balance requirements.' },
            { q: 'Can I open a Kiddies Account for my child?', a: 'Yes. A parent or guardian can open a Kiddies Account for a child under 18. You will need the child\'s birth certificate and your own valid ID.' },
            { q: 'What is a Susu Account?', a: 'The Susu Account is our daily savings scheme. Our collector visits you at your home or business to collect your daily contribution, which is deposited into your account. It is ideal for market traders, artisans, and anyone who prefers door-to-door saving.' },
        ],
    },
    {
        category: 'Loans',
        items: [
            { q: 'What loans do you offer?', a: 'We offer Salary Loans, Commercial Loans, Transport Loans, Susu Loans, Funeral Loans, Church Development Loans, Group Loans, and Overdraft facilities.' },
            { q: 'What are the loan interest rates?', a: 'Rates start from 28% per annum for salary loans and 30% per annum for commercial loans. Rates are revised periodically in line with Bank of Ghana directives. Visit a branch for a personalised quote.' },
            { q: 'How do I apply for a loan?', a: 'Visit any of our branches with your valid ID, recent payslip or business registration documents, and completed loan application form. Our staff will guide you through the process.' },
            { q: 'How long does loan approval take?', a: 'Salary loans are typically processed within 3–5 working days once all required documents are submitted. Commercial loans may take longer depending on the amount and collateral.' },
            { q: 'Do you offer group loans?', a: 'Yes. Group loans are available for community groups, cooperatives, and associations. The group acts as a guarantee for each member.' },
        ],
    },
    {
        category: 'Investments',
        items: [
            { q: 'What investment products are available?', a: 'We offer ARB Fixed Deposits and ARB Shares. Fixed deposits currently earn up to 22% per annum for a 12-month term.' },
            { q: 'What is the minimum amount for a fixed deposit?', a: 'Contact our branches for current minimum deposit requirements as they may be updated periodically.' },
            { q: 'Can I withdraw my fixed deposit early?', a: 'Early withdrawal is subject to a penalty and reduced interest rate. Please discuss terms with our investment team before opening a fixed deposit.' },
            { q: 'What are ARB Shares?', a: 'ARB Shares are equity shares in Atwima Community Bank. As a shareholder you are a co-owner of the bank and receive annual dividend payments based on the bank\'s performance.' },
        ],
    },
    {
        category: 'Remittance',
        items: [
            { q: 'Can I receive money from abroad?', a: 'Yes. We are a Western Union agent. You can receive international money transfers at any of our 6 branches. Same-day processing is available.' },
            { q: 'What do I need to receive a Western Union transfer?', a: 'You need a valid ID (Ghana Card, Passport, or Voter\'s ID), the Money Transfer Control Number (MTCN) from the sender, and the exact amount sent.' },
            { q: 'What are the branch hours for remittance?', a: 'Remittance is available during normal banking hours: Monday–Friday 8:00 AM – 4:30 PM, Saturday 8:00 AM – 12:00 PM.' },
        ],
    },
    {
        category: 'Branches & Hours',
        items: [
            { q: 'Where are your branches located?', a: 'We have 6 branches: Foase (Head Office), Kwadaso, Patasi, Mpasatia, Allabar, and Daban — all in the Ashanti Region of Ghana.' },
            { q: 'What are your opening hours?', a: 'Monday to Friday: 8:30 AM – 4:30 PM. Saturday: 8:30 AM – 12:00 PM. Closed on Sundays and public holidays.' },
            { q: 'Do I need an appointment to visit?', a: 'No appointment is needed for routine transactions. However, for loans, investments, or complex services, we recommend booking an appointment via WhatsApp or phone so we can prepare for your visit.' },
            { q: 'How do I contact the bank?', a: 'Call or WhatsApp us on 0501 387 040, or email info@atwimabank.com. You can also use the contact form on our Contact page.' },
        ],
    },
];

export default function FaqClient() {
    const [openItems, setOpenItems] = useState({});
    const [activeCategory, setActiveCategory] = useState('Accounts');
    const [searchQuery, setSearchQuery] = useState('');

    const toggle = (key) => setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));

    const filteredResults = useMemo(() => {
        if (!searchQuery.trim()) return null;
        const query = searchQuery.toLowerCase();
        const results = [];
        faqs.forEach(cat => {
            cat.items.forEach((item, idx) => {
                if (item.q.toLowerCase().includes(query) || item.a.toLowerCase().includes(query)) {
                    results.push({ 
                        ...item, 
                        category: cat.category,
                        key: `${cat.category}-${idx}` 
                    });
                }
            });
        });
        return results;
    }, [searchQuery]);

    const currentFaq = useMemo(() => {
        return faqs.find(f => f.category === activeCategory);
    }, [activeCategory]);

    const handleTabKeyDown = (e, index) => {
        const catButtons = document.querySelectorAll('[role="tab"]');
        if (!catButtons || catButtons.length === 0) return;

        let newIndex = index;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            newIndex = (index + 1) % catButtons.length;
            e.preventDefault();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            newIndex = (index - 1 + catButtons.length) % catButtons.length;
            e.preventDefault();
        } else if (e.key === 'Home') {
            newIndex = 0;
            e.preventDefault();
        } else if (e.key === 'End') {
            newIndex = catButtons.length - 1;
            e.preventDefault();
        }

        if (newIndex !== index) {
            catButtons[newIndex].focus();
            setActiveCategory(faqs[newIndex].category);
        }
    };

    return (
        <main>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <span className="section-label" style={{ color: 'var(--primary-600)' }}>Help Centre</span>
                    <h1>Frequently Asked Questions</h1>
                    <p className={styles.heroSub}>Find quick answers to the most common questions about our services, accounts, and branches.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">

                    {/* Dynamic Search Bar */}
                    <div className={styles.searchBarContainer}>
                        <div className={styles.searchWrapper}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--neutral-400)" strokeWidth="2" className={styles.searchIcon} aria-hidden="true">
                                <circle cx="11" cy="11" r="8" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                            <input 
                                type="text" 
                                placeholder="Search questions (e.g. susu, loans, hours)..." 
                                className={styles.searchInput}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                aria-label="Search frequently asked questions"
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

                    <div className={styles.layout}>
                        {/* Sidebar: Only display category buttons if search query is empty */}
                        {!searchQuery.trim() && (
                            <div className={styles.sidebar} role="tablist" aria-label="FAQ Categories">
                                <p className={styles.sidebarLabel}>Categories</p>
                                {faqs.map((f, idx) => (
                                    <button
                                        key={f.category}
                                        role="tab"
                                        aria-selected={activeCategory === f.category}
                                        tabIndex={activeCategory === f.category ? 0 : -1}
                                        aria-controls="faq-accordion-panel"
                                        id={`tab-${f.category.replace(/\s+/g, '-')}`}
                                        className={`${styles.catBtn} ${activeCategory === f.category ? styles.catBtnActive : ''}`}
                                        onClick={() => setActiveCategory(f.category)}
                                        onKeyDown={(e) => handleTabKeyDown(e, idx)}
                                    >
                                        {f.category}
                                        <span className={styles.catCount}>{f.items.length}</span>
                                    </button>
                                ))}
                                <div className={styles.sidebarCta}>
                                    <p>Didn&apos;t find your answer?</p>
                                    <a href="https://wa.me/233501387040" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Accordion container */}
                        <div 
                            id="faq-accordion-panel"
                            role={searchQuery.trim() ? undefined : 'tabpanel'}
                            aria-labelledby={searchQuery.trim() ? undefined : `tab-${activeCategory.replace(/\s+/g, '-')}`}
                            className={styles.accordion}
                        >
                            {searchQuery.trim() ? (
                                <>
                                    <h2 className={styles.catTitle}>Search Results ({filteredResults.length})</h2>
                                    {filteredResults.length > 0 ? (
                                        filteredResults.map((item) => (
                                            <div key={item.key} className={`${styles.item} ${openItems[item.key] ? styles.itemOpen : ''}`}>
                                                <button 
                                                    id={`btn-${item.key}`}
                                                    className={styles.question} 
                                                    onClick={() => toggle(item.key)} 
                                                    aria-expanded={!!openItems[item.key]}
                                                    aria-controls={`ans-${item.key}`}
                                                >
                                                    <span className={styles.questionText}>
                                                        <span className={styles.resultBadge}>{item.category}</span> {item.q}
                                                    </span>
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.chevron} aria-hidden="true">
                                                        <path d="M6 9l6 6 6-6" />
                                                    </svg>
                                                </button>
                                                <div 
                                                    id={`ans-${item.key}`}
                                                    role="region"
                                                    aria-labelledby={`btn-${item.key}`}
                                                    className={`${styles.answerWrapper} ${openItems[item.key] ? styles.answerOpen : ''}`}
                                                >
                                                    <div className={styles.answer}>
                                                        <p>{item.a}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className={styles.noResults}>
                                            🔍
                                            <h3>No results match your search</h3>
                                            <p>We couldn&apos;t find any FAQs matching &ldquo;{searchQuery}&rdquo;. Try asking about &ldquo;loans&rdquo; or &ldquo;accounts&rdquo;.</p>
                                            <button className="btn btn-secondary btn-sm" onClick={() => setSearchQuery('')}>Clear Search</button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <>
                                    <h2 className={styles.catTitle}>{currentFaq?.category}</h2>
                                    {currentFaq?.items.map((item, i) => {
                                        const key = `${activeCategory}-${i}`;
                                        return (
                                            <div key={key} className={`${styles.item} ${openItems[key] ? styles.itemOpen : ''}`}>
                                                <button 
                                                    id={`btn-${key}`}
                                                    className={styles.question} 
                                                    onClick={() => toggle(key)} 
                                                    aria-expanded={!!openItems[key]}
                                                    aria-controls={`ans-${key}`}
                                                >
                                                    <span>{item.q}</span>
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.chevron} aria-hidden="true">
                                                        <path d="M6 9l6 6 6-6" />
                                                    </svg>
                                                </button>
                                                <div 
                                                    id={`ans-${key}`}
                                                    role="region"
                                                    aria-labelledby={`btn-${key}`}
                                                    className={`${styles.answerWrapper} ${openItems[key] ? styles.answerOpen : ''}`}
                                                >
                                                    <div className={styles.answer}>
                                                        <p>{item.a}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}
