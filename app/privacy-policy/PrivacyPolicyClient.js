'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'data-we-collect', label: 'Data We Collect' },
    { id: 'how-we-use-your-data', label: 'How We Use Your Data' },
    { id: 'data-sharing', label: 'Data Sharing' },
    { id: 'data-security', label: 'Data Security' },
    { id: 'your-rights', label: 'Your Rights' },
    { id: 'cookies', label: 'Cookies' },
    { id: 'contact-the-dpo', label: 'Contact the DPO' },
    { id: 'changes-to-policy', label: 'Changes to Policy' },
];

export default function PrivacyPolicyClient() {
    const [activeSection, setActiveSection] = useState('overview');

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -60% 0px', // Trigger when section is in the middle of the viewport
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, observerOptions);

        sections.forEach((sec) => {
            const el = document.getElementById(sec.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handlePrint = () => {
        if (typeof window !== 'undefined') {
            window.print();
        }
    };

    return (
        <div className={styles.layout}>
            {/* TOC Navigation Sidebar */}
            <nav className={styles.toc} aria-label="Privacy Policy sections">
                <p className={styles.tocLabel}>On this page</p>
                {sections.map((s) => (
                    <a
                        key={s.id}
                        href={`#${s.id}`}
                        className={`${styles.tocLink} ${activeSection === s.id ? styles.activeTocLink : ''}`}
                        aria-current={activeSection === s.id ? 'location' : undefined}
                    >
                        {s.label}
                    </a>
                ))}
            </nav>

            {/* Article Content */}
            <article className={styles.content}>
                <div className={styles.articleHeader}>
                    <h2 className={styles.articleTitle}>Privacy Policy Details</h2>
                    <button 
                        onClick={handlePrint} 
                        className={styles.printBtn}
                        aria-label="Print this privacy policy document"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                            <polyline points="6 9 6 2 18 2 18 9" />
                            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                            <rect x="6" y="14" width="12" height="8" />
                        </svg>
                        Print Policy
                    </button>
                </div>

                <section id="overview">
                    <h2>Overview</h2>
                    <p>Atwima Community Bank PLC (&ldquo;the Bank&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting and respecting the privacy of all customers, staff, and website visitors. This Privacy Policy explains how we collect, use, store, and protect personal information in accordance with the <strong>Ghana Data Protection Act, 2012 (Act 843)</strong> and its accompanying Regulations.</p>
                    <p>By using our website, depositing funds, or using our credit services, you consent to the data collection and processing activities described in this policy.</p>
                </section>

                <section id="data-we-collect">
                    <h2>Data We Collect</h2>
                    <p>We collect and process various categories of personal data in the course of providing community banking services:</p>
                    <ul>
                        <li><strong>Identity Data:</strong> Full legal name, date of birth, place of birth, and government-issued national ID credentials (e.g. Ghana Card, Passport, Driver&rsquo;s License, or Voter Card).</li>
                        <li><strong>Contact Data:</strong> Residential address, phone numbers, postal addresses, and email contacts.</li>
                        <li><strong>Financial Data:</strong> Savings and current account balances, transaction records, loan repayment logs, source of funds declarations, and credit history.</li>
                        <li><strong>Technical Data:</strong> Internet Protocol (IP) address, browser version, browser language settings, and page engagement statistics.</li>
                        <li><strong>Usage Data:</strong> Telemetry regarding how you browse our services and calculators.</li>
                        <li><strong>Communications Data:</strong> Transcripts of emails, in-branch service requests, and WhatsApp banking inquiries.</li>
                    </ul>
                </section>

                <section id="how-we-use-your-data">
                    <h2>How We Use Your Data</h2>
                    <p>We process your personal data under legal, contractually required, and legitimate business grounds for the following operations:</p>
                    <ul>
                        <li>Verifying identity, processing customer KYC, and opening transactional savings or current accounts.</li>
                        <li>Assessing creditworthiness, scoring applicants, and approving commercial, personal, or group loan products.</li>
                        <li>Facilitating secure in-branch money transfers, Western Union remittance, and daily Susu collectors savings schemes.</li>
                        <li>Sending critical service notifications regarding interest rate updates, regulatory changes, or branch closures.</li>
                        <li>Complying with statutory audits and reporting rules issued by the Bank of Ghana and the Financial Intelligence Centre (FIC).</li>
                        <li>Preventing financial crimes, identity theft, money laundering, and transactional fraud.</li>
                    </ul>
                    <p>Atwima Community Bank will never sell, lease, or distribute your personal data to external advertisers or third parties for marketing purposes.</p>
                </section>

                <section id="data-sharing">
                    <h2>Data Sharing</h2>
                    <p>We only share customer data with authorized third parties under strict compliance mandates:</p>
                    <ul>
                        <li><strong>Bank of Ghana (BoG):</strong> As required under the Banks and Specialised Deposit-Taking Institutions Act, 2016 (Act 930).</li>
                        <li><strong>Ghana Revenue Authority (GRA):</strong> For compliance with tax reporting and statutory requirements.</li>
                        <li><strong>Licensed Credit Reference Bureaux:</strong> To submit transaction behavior and assess loan defaults.</li>
                        <li><strong>Western Union / Remittance Partners:</strong> Strictly limited to the transmission parameters needed to execute remittance requests.</li>
                        <li><strong>Confidential Tech Providers:</strong> Contracted core-banking engineers working under strict non-disclosure terms.</li>
                    </ul>
                </section>

                <section id="data-security">
                    <h2>Data Security</h2>
                    <p>We have instituted physical, logical, and administrative security measures to protect personal data against accidental loss, unauthorized destruction, alteration, or access:</p>
                    <ul>
                        <li>Physical vault protection and secure in-branch network cabinets.</li>
                        <li>Strict access management limiting records only to designated personnel.</li>
                        <li>Secure firewalls, network isolation, and encryption of digital backups.</li>
                        <li>Ongoing cybersecurity, data protection, and confidentiality training for all employees.</li>
                        <li>Regular data protection audits under the direction of our designated Data Protection Officer.</li>
                    </ul>
                </section>

                <section id="your-rights">
                    <h2>Your Rights</h2>
                    <p>Under the Ghana Data Protection Act, 2012 (Act 843), you hold distinct rights concerning your personal records:</p>
                    <ul>
                        <li><strong>Right to Access:</strong> The right to request copies of the records we hold about you.</li>
                        <li><strong>Right to Rectification:</strong> The right to demand that we update outdated or incomplete customer profiles.</li>
                        <li><strong>Right to Erasure:</strong> The right to request the deletion of account records, subject to regulatory transaction-retention thresholds.</li>
                        <li><strong>Right to Object:</strong> The right to restrict certain non-essential data processing activities.</li>
                        <li><strong>Right to Complain:</strong> The right to lodge formal complaints directly with the Data Protection Commission of Ghana.</li>
                    </ul>
                    <p>To exercise any of these rights, please submit a written query to our Data Protection Officer.</p>
                </section>

                <section id="cookies">
                    <h2>Cookies</h2>
                    <p>Our website utilizes essential session cookies to operate navigation tables and layout forms. We do not place advertising trackers or behavioral profiling scripts. You can disable cookies inside your browser settings, though doing so might cause parts of the calculators or forms to render incorrectly.</p>
                </section>

                <section id="contact-the-dpo">
                    <h2>Contact the DPO</h2>
                    <p>For all data protection requests, questions, or complaints regarding Act 843 compliance, please contact our Data Protection Officer:</p>
                    
                    <div className={styles.dpoCard}>
                        <div className={styles.dpoTitle}>Data Protection Officer</div>
                        <p className={styles.dpoText}>
                            Atwima Community Bank PLC<br />
                            Head Office, Foase-Atwima<br />
                            P.O. Box 13, Ashanti Region, Ghana
                        </p>
                        <div className={styles.dpoContact}>
                            <span>📞 <strong>Phone:</strong> 0501 387 040</span>
                            <span>✉️ <strong>Email:</strong> info@atwimabank.com</span>
                        </div>
                    </div>
                    
                    <p>You may also contact the independent regulatory body directly: <strong>Data Protection Commission of Ghana</strong> (<a href="https://dataprotection.org.gh" target="_blank" rel="noopener noreferrer">dataprotection.org.gh</a>).</p>
                </section>

                <section id="changes-to-policy">
                    <h2>Changes to Policy</h2>
                    <p>We reserve the right to modify this Privacy Policy to align with new legal requirements or updated banking operations. Any adjustments will be posted to this page with a revised effective date. We recommend checking back periodically to stay informed.</p>
                </section>
            </article>
        </div>
    );
}
