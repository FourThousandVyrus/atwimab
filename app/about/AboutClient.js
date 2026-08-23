'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BoardAccordion from '../components/BoardAccordion';
import styles from './page.module.css';

const values = [
    { icon: '🤝', title: 'Integrity and Ethics', desc: 'This is our cornerstone. We operate with honesty, fairness, and utmost respect for all our clients.' },
    { icon: '💪', title: 'Commitment', desc: 'Commitment to achievement and taking advantage of opportunities. When we decide to do something, we will do it with quality, drive and passion.' },
    { icon: '⭐', title: 'Quality & Service', desc: 'We insist on quality in our leadership, work, and banking services to guarantee customer satisfaction.' },
];

const milestones = [
    { year: '1983', title: 'Bank Incorporation', text: 'Incorporated as Atwima Community Bank in Foase, Ashanti Region, pioneering community banking in the area.' },
    { year: '1995', title: 'Susu Savings Scheme Launch', text: 'Introduced daily Susu savings collections to empower local market traders and small micro-enterprises.' },
    { year: '2012', title: 'Branch Footprint Expansion', text: 'Expanded footprint to 6 core branches and modernized core banking systems for faster transaction processing.' },
    { year: '2024', title: 'PLC Status Upgrade', text: 'Upgraded corporate status to Public Limited Company (PLC) to strengthen governance and capital structure.' }
];

const partners = [
    { name: 'Bank of Ghana', role: 'Regulator', icon: '🏛️' },
    { name: 'ARB Apex Bank PLC', role: 'Clearing & Support Bank', icon: '⚡' }
];

export default function AboutClient() {
    const [activeTab, setActiveTab] = useState('our-story');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash === 'our-story' || hash === 'board' || hash === 'community') {
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
                <div className={styles.tabsList} role="tablist" aria-label="About Sections">
                    <button
                        role="tab"
                        aria-selected={activeTab === 'our-story'}
                        className={`${styles.tabButton} ${activeTab === 'our-story' ? styles.tabButtonActive : ''}`}
                        onClick={() => handleTabClick('our-story')}
                    >
                        Our Story
                    </button>
                    <button
                        role="tab"
                        aria-selected={activeTab === 'board'}
                        className={`${styles.tabButton} ${activeTab === 'board' ? styles.tabButtonActive : ''}`}
                        onClick={() => handleTabClick('board')}
                    >
                        Board of Directors
                    </button>
                    <button
                        role="tab"
                        aria-selected={activeTab === 'community'}
                        className={`${styles.tabButton} ${activeTab === 'community' ? styles.tabButtonActive : ''}`}
                        onClick={() => handleTabClick('community')}
                    >
                        Community Involvement (CSR)
                    </button>
                </div>
            </div>

            <div className={styles.tabPanel} role="tabpanel" key={activeTab}>
                {activeTab === 'our-story' ? (
                    <div>
                        {/* Our Story Grid */}
                        <div className={styles.storyGrid}>
                            <div className={styles.storyContent}>
                                <span className="section-label">Our Story</span>
                                <h2 className="section-title">A Heritage of Trust</h2>
                                <p>
                                    Atwima Community Bank PLC was incorporated in the early 1980s and has since grown to become one of the most trusted financial institutions in the Ashanti Region. Headquartered in Foase, our bank was established with a clear mission: to provide accessible, affordable, and reliable banking services to the communities we serve and beyond.
                                </p>
                                <p>
                                    Over the years, we have expanded our reach with 6 branches across the region, serving thousands of individuals, families, and businesses. Our commitment to excellence and community has earned us the trust and loyalty of our customers.
                                </p>
                                <p>
                                    Our motto — <strong className={styles.motto}>&ldquo;A friend in need is a friend indeed&rdquo;</strong> — reflects our core philosophy of being there for our customers when they need us the most.
                                </p>
                            </div>
                            <div className={styles.imageWrapper}>
                                <Image fill src="/community-hero.png" alt="Atwima Community Bank team" sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>

                        {/* Mission & Vision */}
                        <div className={styles.missionVisionGrid} style={{ marginTop: 'var(--space-12)' }}>
                            <div className={styles.mvCard}>
                                <span className={styles.mvIcon} aria-hidden="true">🎯</span>
                                <h3 className={styles.mvTitle}>Our Mission</h3>
                                <p className={styles.mvDesc}>
                                    We are the pioneer Community Bank in the Ashanti Region and as a leader we are committed to providing reliable, efficient, and distinctive banking services to our clients while creating value for our shareholders.
                                </p>
                            </div>
                            <div className={styles.mvCard}>
                                <span className={styles.mvIcon} aria-hidden="true">🔭</span>
                                <h3 className={styles.mvTitle}>Our Vision</h3>
                                <p className={styles.mvDesc}>
                                    To be a financially viable, dependable Community Bank that is committed to improving the quality of life of the communities we serve.
                                </p>
                            </div>
                        </div>

                        {/* Our Values */}
                        <div style={{ marginTop: 'var(--space-12)' }}>
                            <div className="section-header centered">
                                <span className="section-label">Our Values</span>
                                <h2 className="section-title">What Guides Us</h2>
                            </div>
                            <div className={styles.valuesGrid}>
                                {values.map((v) => (
                                    <div key={v.title} className={styles.valueCard}>
                                        <span className={styles.valueIcon} aria-hidden="true">{v.icon}</span>
                                        <h3 className={styles.valueTitle}>{v.title}</h3>
                                        <p className={styles.valueDesc}>{v.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Timeline */}
                        <div style={{ marginTop: 'var(--space-12)' }}>
                            <div className="section-header centered">
                                <span className="section-label">Milestones</span>
                                <h2 className="section-title">Our Corporate Journey</h2>
                            </div>
                            <div className={styles.timeline}>
                                {milestones.map((m) => (
                                    <div key={m.year} className={styles.timelineItem}>
                                        <div className={styles.timelineBadge} aria-hidden="true">{m.year}</div>
                                        <div className={styles.timelineContent}>
                                            <h3 className={styles.timelineTitle}>{m.title}</h3>
                                            <p className={styles.timelineText}>{m.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Regulators */}
                        <div style={{ marginTop: 'var(--space-12)' }}>
                            <div className="section-header centered">
                                <span className="section-label">Trust & Compliance</span>
                                <h2 className="section-title">Partners & Regulators</h2>
                            </div>
                            <div className={styles.partnersGrid}>
                                {partners.map((p) => (
                                    <div key={p.name} className={styles.partnerCard}>
                                        <div className={styles.partnerIconWrap} aria-hidden="true">{p.icon}</div>
                                        <div>
                                            <h3 className={styles.partnerName}>{p.name}</h3>
                                            <p className={styles.partnerRole}>{p.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : activeTab === 'board' ? (
                    <div>
                        <div className="section-header centered">
                            <span className="section-label">Governance</span>
                            <h2 className="section-title">Board of Directors</h2>
                            <p className="section-subtitle">Our experienced board provides strategic direction and governance.</p>
                        </div>
                        <div className={styles.govWrapper}>
                            <BoardAccordion />
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="section-header centered">
                            <span className="section-label">CSR</span>
                            <h2 className="section-title">Community Involvement</h2>
                            <p className="section-subtitle">Reinvesting our success into the development of the Ashanti Region.</p>
                        </div>

                        <div className={styles.storyGrid}>
                            <div className={styles.storyContent}>
                                <p>
                                    As a community-focused financial institution, Atwima Community Bank PLC believes in mutual growth. We dedicate a portion of our annual proceeds to key development projects that directly improve the livelihoods of people in Foase, Kwadaso, Patasi, Mpasatia, Allabar, Daban, and surrounding areas.
                                </p>
                                <p>
                                    Our CSR focus areas are carefully selected to address local community challenges in healthcare, education, clean water access, and agricultural empowerment.
                                </p>

                                <ul className={styles.list} style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }} aria-label="CSR key projects list">
                                    <li className={styles.listItem} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <span><strong>Education Scholarships:</strong> Annual fees and supplies packages supporting brilliant but needy high-school students.</span>
                                    </li>
                                    <li className={styles.listItem} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <span><strong>Water &amp; Sanitation:</strong> Funded boreholes providing clean drinking water access to multiple communities in the Atwima district.</span>
                                    </li>
                                    <li className={styles.listItem} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-2)' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true" style={{ flexShrink: 0, marginTop: '2px' }}>
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        <span><strong>Healthcare Clinic Support:</strong> Donations of critical medical supplies and facility renovations for community clinics.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.imageWrapper}>
                                <Image fill src="/community-involvement.png" alt="Clean water borehole commission project" sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
