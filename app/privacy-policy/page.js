import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import styles from './page.module.css';

export const metadata = {
    title: 'Privacy Policy | Atwima Rural Bank PLC',
    description: 'Learn how Atwima Rural Bank collects, uses, and protects your personal information in compliance with the Ghana Data Protection Act 2012.',
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <span className="section-label">Legal</span>
                        <h1>Privacy Policy</h1>
                        <p className={styles.heroSub}>
                            Effective Date: 1 January 2026 &nbsp;|&nbsp; Atwima Rural Bank PLC
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className={styles.layout}>
                            <nav className={styles.toc}>
                                <p className={styles.tocLabel}>On this page</p>
                                {['Overview', 'Data We Collect', 'How We Use Your Data', 'Data Sharing', 'Data Security', 'Your Rights', 'Cookies', 'Contact the DPO', 'Changes to Policy'].map(s => (
                                    <a key={s} href={`#${s.toLowerCase().replace(/\s+/g, '-')}`} className={styles.tocLink}>{s}</a>
                                ))}
                            </nav>

                            <article className={styles.content}>
                                <section id="overview">
                                    <h2>Overview</h2>
                                    <p>Atwima Rural Bank PLC (&ldquo;the Bank&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to protecting and respecting the privacy of all customers, staff, and website visitors. This Privacy Policy explains how we collect, use, store, and protect personal information in accordance with the <strong>Ghana Data Protection Act, 2012 (Act 843)</strong> and its accompanying Regulations.</p>
                                    <p>By using our website or services, you consent to the practices described in this policy.</p>
                                </section>

                                <section id="data-we-collect">
                                    <h2>Data We Collect</h2>
                                    <p>We may collect the following categories of personal data:</p>
                                    <ul>
                                        <li><strong>Identity Data:</strong> Full name, date of birth, national ID number (Ghana Card, Voter&rsquo;s ID, Passport).</li>
                                        <li><strong>Contact Data:</strong> Phone number, email address, postal address.</li>
                                        <li><strong>Financial Data:</strong> Account numbers, transaction history, loan details, income information.</li>
                                        <li><strong>Technical Data:</strong> IP address, browser type, pages visited on our website (via cookies).</li>
                                        <li><strong>Usage Data:</strong> Information about how you use our services.</li>
                                        <li><strong>Communications Data:</strong> Records of enquiries, complaints, and correspondence.</li>
                                    </ul>
                                </section>

                                <section id="how-we-use-your-data">
                                    <h2>How We Use Your Data</h2>
                                    <p>We process your personal data for the following purposes:</p>
                                    <ul>
                                        <li>Opening and managing your bank accounts</li>
                                        <li>Processing loan applications and repayments</li>
                                        <li>Facilitating international money transfers (e.g., Western Union)</li>
                                        <li>Communicating important notices, rate changes, and account updates</li>
                                        <li>Complying with legal and regulatory obligations (Bank of Ghana, AMLA)</li>
                                        <li>Detecting and preventing fraud and financial crime</li>
                                        <li>Improving our website and services</li>
                                    </ul>
                                    <p>We will never sell your personal data to third parties or use it for unsolicited marketing without your explicit consent.</p>
                                </section>

                                <section id="data-sharing">
                                    <h2>Data Sharing</h2>
                                    <p>We may share your data with:</p>
                                    <ul>
                                        <li><strong>Bank of Ghana:</strong> As required by regulatory reporting obligations.</li>
                                        <li><strong>Ghana Revenue Authority (GRA):</strong> For tax compliance purposes.</li>
                                        <li><strong>Credit Reference Bureaux:</strong> For credit assessment and fraud prevention.</li>
                                        <li><strong>Western Union:</strong> Solely to process authorised international transfers.</li>
                                        <li><strong>IT Service Providers:</strong> Who maintain our banking systems under strict confidentiality agreements.</li>
                                    </ul>
                                    <p>All third parties are contractually required to process data only as instructed and to maintain appropriate security standards.</p>
                                </section>

                                <section id="data-security">
                                    <h2>Data Security</h2>
                                    <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, destruction, or alteration. These include:</p>
                                    <ul>
                                        <li>Physical security controls at all branch locations</li>
                                        <li>Staff training on data protection and confidentiality</li>
                                        <li>Access controls restricting data to authorised personnel only</li>
                                        <li>Secure disposal of paper and electronic records</li>
                                    </ul>
                                </section>

                                <section id="your-rights">
                                    <h2>Your Rights</h2>
                                    <p>Under the Ghana Data Protection Act 2012, you have the following rights regarding your personal data:</p>
                                    <ul>
                                        <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
                                        <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete data.</li>
                                        <li><strong>Right to Deletion:</strong> Request deletion of your data where it is no longer necessary, subject to legal retention requirements.</li>
                                        <li><strong>Right to Object:</strong> Object to processing of your data for certain purposes.</li>
                                        <li><strong>Right to Complain:</strong> Lodge a complaint with the Data Protection Commission of Ghana.</li>
                                    </ul>
                                    <p>To exercise any of these rights, please contact our Data Protection Officer (see below).</p>
                                </section>

                                <section id="cookies">
                                    <h2>Cookies</h2>
                                    <p>Our website uses essential cookies to ensure the site functions correctly. We do not use tracking or advertising cookies. By continuing to use the site, you consent to essential cookie usage. You can disable cookies in your browser settings, but this may affect site functionality.</p>
                                </section>

                                <section id="contact-the-dpo">
                                    <h2>Contact the DPO</h2>
                                    <p>For all data protection enquiries, requests, or complaints, please contact:</p>
                                    <div className={styles.dpoCard}>
                                        <strong>Data Protection Officer</strong>
                                        <p>Atwima Rural Bank PLC<br />P.O. Box 13, Foase-Atwima<br />Ashanti Region, Ghana</p>
                                        <p>📞 0501 387 040<br />✉️ info@atwimabank.com</p>
                                    </div>
                                    <p>You may also report concerns to the <strong>Data Protection Commission of Ghana</strong> at <a href="https://dataprotection.org.gh" target="_blank" rel="noopener noreferrer">dataprotection.org.gh</a>.</p>
                                </section>

                                <section id="changes-to-policy">
                                    <h2>Changes to Policy</h2>
                                    <p>We may update this Privacy Policy from time to time to reflect changes in our practices or regulatory requirements. The updated policy will be posted on this page with a revised effective date. We encourage you to review this page periodically.</p>
                                </section>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <BackToTop />
        </>
    );
}
