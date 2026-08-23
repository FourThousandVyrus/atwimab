'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

const articles = [
    {
        date: 'March 20, 2026',
        category: 'Rates',
        title: 'Fixed Deposit Rate Update: Now Earning Up to 22% Per Annum',
        summary: 'Atwima Community Bank has updated its fixed deposit rates in response to the latest Bank of Ghana monetary policy. Customers can now earn up to 22% p.a. on 12-month deposits. Visit any branch or use our online calculator to plan your investment.',
        tag: 'Important',
        image: '/news/fixed-deposit.jpg',
    },
    {
        date: 'February 10, 2026',
        category: 'Community',
        title: 'Atwima Community Bank Supports 2026 Foase Community Health Fair',
        summary: 'We were proud sponsors of the Foase Community Health Fair held at the Foase Recreation Park. Staff volunteered alongside medical teams to provide free savings consultations and financial literacy sessions to over 400 community members.',
        tag: 'News',
        image: '/news/health-fair.jpg',
    },
    {
        date: 'January 15, 2026',
        category: 'Products',
        title: 'Introducing Online Financial Calculators on Our Website',
        summary: 'We are pleased to announce the launch of our free Financial Calculators — available now on atwimabank.com. Calculate your loan repayments, fixed deposit returns, and Susu savings projections instantly. No login required.',
        tag: 'New Feature',
        image: '/news/calculators.jpg',
    },
    {
        date: 'December 5, 2025',
        category: 'Notice',
        title: 'Holiday Banking Hours — Christmas & New Year 2025/2026',
        summary: 'All Atwima Community Bank branches will operate on modified hours during the festive season. December 24: Close at 12:00 PM. December 25–26: Closed. December 31: Close at 12:00 PM. January 1: Closed. Normal hours resume January 2, 2026.',
        tag: 'Notice',
        image: '/news/holiday-hours.jpg',
    },
    {
        date: 'November 12, 2025',
        category: 'Community',
        title: 'ARB Donates to Kwadaso JHS School Building Fund',
        summary: 'As part of our commitment to community development, Atwima Community Bank donated GH₵15,000 to the Kwadaso Junior High School Building Fund. The contribution will be used for the construction of a new science laboratory for students.',
        tag: 'News',
        image: '/news/school-donations.jpg',
    },
];

const tagStyleConfig = {
    'Important': { bg: '#fde8e8', color: '#9b1c1c', border: '1px solid #f8b4b4' },
    'New Feature': { bg: '#eff6ff', color: '#1e40af', border: '1px solid #bfdbfe' },
    'News': { bg: '#ecfdf5', color: '#065f46', border: '1px solid #a7f3d0' },
    'Notice': { bg: '#fffbeb', color: '#92400e', border: '1px solid #fde68a' },
};

const categories = ['All', 'Rates', 'Community', 'Products', 'Notice'];

export default function NewsClient() {
    const [activeTab, setActiveTab] = useState('All');

    const filteredArticles = activeTab === 'All'
        ? articles
        : articles.filter(a => a.category.toLowerCase() === activeTab.toLowerCase());

    const getShareUrl = (platform, title) => {
        const text = encodeURIComponent(`Check out Atwima Community Bank update: ${title}`);
        const currentUrl = encodeURIComponent('https://atwimabank.com/news');
        if (platform === 'facebook') {
            return `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
        }
        if (platform === 'linkedin') {
            return `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
        }
        return '#';
    };

    return (
        <div className="container">
            {/* Filter Tabs navigation */}
            <div className={styles.filterRow}>
                <nav className={styles.filterTabs} aria-label="Filter news by category">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`${styles.filterTab} ${activeTab === cat ? styles.filterTabActive : ''}`}
                            onClick={() => setActiveTab(cat)}
                            aria-current={activeTab === cat ? 'page' : undefined}
                        >
                            {cat}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Articles Grid */}
            <div className={styles.grid} role="region" aria-live="polite" aria-label="News list">
                {filteredArticles.map((a, i) => {
                    const tagStyle = tagStyleConfig[a.tag] || { bg: '#f3f4f6', color: '#374151', border: '1px solid #d1d5db' };
                    return (
                        <article key={i} className={styles.card}>
                            <div className={styles.cardThumb}>
                                <Image 
                                    fill 
                                    src={a.image} 
                                    alt={`Banner for ${a.title}`} 
                                    sizes="(max-width:768px) 100vw, 400px" 
                                    style={{ objectFit: 'cover' }} 
                                />
                            </div>
                            <div className={styles.cardMeta}>
                                <span 
                                    className={styles.tag} 
                                    style={{ backgroundColor: tagStyle.bg, color: tagStyle.color, border: tagStyle.border }}
                                >
                                    {a.tag}
                                </span>
                                <span className={styles.category}>{a.category}</span>
                                <span className={styles.date}>{a.date}</span>
                            </div>
                            <h2 className={styles.cardTitle}>{a.title}</h2>
                            <p className={styles.cardSummary}>{a.summary}</p>
                            
                            <div className={styles.cardFooter}>
                                <Link 
                                    href="/contact" 
                                    className={styles.readMore}
                                    aria-label={`Contact us for details on: ${a.title}`}
                                >
                                    Contact us for details →
                                </Link>

                                <div className={styles.shareGroup}>
                                    <span className={styles.shareLabel}>Share:</span>
                                    <a 
                                        href={getShareUrl('facebook', a.title)} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className={styles.shareBtn}
                                        aria-label={`Share ${a.title} on Facebook`}
                                        title="Share on Facebook"
                                    >
                                        <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                                        </svg>
                                    </a>
                                    <a 
                                        href={getShareUrl('linkedin', a.title)} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className={styles.shareBtn}
                                        aria-label={`Share ${a.title} on LinkedIn`}
                                        title="Share on LinkedIn"
                                    >
                                        <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            {/* Newsletter Call to Action */}
            <div className={styles.subscribe}>
                <h3>Never Miss an Update</h3>
                <p>Get notified about interest rate changes, new products, and community events directly in your inbox.</p>
                <Link href="/#newsletter" className="btn btn-primary" aria-label="Subscribe to newsletter updates">
                    Subscribe to Updates
                </Link>
            </div>
        </div>
    );
}
