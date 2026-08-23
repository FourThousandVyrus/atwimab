import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import styles from './page.module.css';

export const metadata = {
    title: 'Disclaimer | Atwima Community Bank PLC',
    description: 'Important disclaimer regarding Atwima Community Bank products, services, rates, and financial information provided on this website.',
};

export default function DisclaimerPage() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <h1 className={styles.title}>Disclaimer</h1>
                        <p className={styles.subtitle}>Important Information | Last Updated: June 2026</p>
                    </div>
                </section>

                <section className="section">
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <div className={styles.content}>
                            <h2>General Disclaimer</h2>
                            <p>
                                The information provided on this website (www.atwimabank.com) is for general informational purposes only. 
                                While we strive to provide accurate and up-to-date information, we do not warrant the accuracy, completeness, 
                                timeliness, or reliability of any content on this site.
                            </p>

                            <h2>Not an Offer</h2>
                            <p>
                                The content on this website does not constitute an offer to sell or a solicitation to buy any product or 
                                service offered by Atwima Community Bank. Information about our products and services is provided for informational 
                                purposes only and does not constitute a binding commitment.
                            </p>

                            <h2>Interest Rates & Terms</h2>
                            <p>
                                The interest rates, fees, charges, and product terms displayed on this website are indicative and subject to change 
                                without notice. Actual rates and terms may vary based on market conditions, individual creditworthiness, collateral, 
                                and other factors.
                            </p>
                            <p>
                                <strong>Current rates are not guaranteed</strong> and are provided for comparison purposes only. Please visit a branch 
                                or contact us directly for current rates and specific terms that apply to your situation.
                            </p>

                            <h2>Financial Advice Disclaimer</h2>
                            <p>
                                This website does not provide financial, investment, tax, or legal advice. Any information provided should not be 
                                construed as professional financial advice. Before making any financial decisions, please consult with a qualified 
                                financial advisor, tax professional, or attorney.
                            </p>

                            <h2>Calculations & Tools</h2>
                            <p>
                                Our financial calculators (loan calculator, savings calculator, fixed deposit calculator) are provided for illustrative 
                                purposes only. Results are approximate and should not be relied upon for final decision-making. Actual calculations may 
                                differ due to:
                            </p>
                            <ul>
                                <li>Changes in interest rates</li>
                                <li>Variable fees and charges</li>
                                <li>Loan prepayment penalties</li>
                                <li>Tax implications</li>
                                <li>Inflation and market conditions</li>
                            </ul>

                            <h2>Product Eligibility</h2>
                            <p>
                                Approval of any product or service is subject to Atwima Community Bank's underwriting process, creditworthiness assessment, 
                                and compliance with all applicable banking regulations and internal policies.
                            </p>
                            <p>
                                <strong>No guarantee of approval is implied by information on this website.</strong> Applicants will be assessed on a 
                                case-by-case basis.
                            </p>

                            <h2>Regulatory Compliance</h2>
                            <p>
                                Atwima Community Bank is licensed and regulated by the Bank of Ghana and is a member of the Ghana Deposit Protection 
                                Corporation (GDPC). However, the information on this website does not constitute a guarantee of deposits or investment returns.
                            </p>

                            <h2>Third-Party Content</h2>
                            <p>
                                This website may contain links to third-party websites and content from external sources. We are not responsible for 
                                the accuracy, completeness, or reliability of external content. Access to third-party sites is at your own risk, and 
                                we do not endorse their products or services.
                            </p>

                            <h2>Limitation of Liability</h2>
                            <p>
                                In no event shall Atwima Community Bank, its officers, employees, or agents be liable for any indirect, incidental, 
                                special, consequential, or punitive damages arising out of your access to or use of this website, even if we have 
                                been advised of the possibility of such damages.
                            </p>

                            <h2>No Warranty</h2>
                            <p>
                                This website is provided "as is" and "as available" without any warranties, express or implied. We do not warrant that 
                                the website will be error-free, uninterrupted, or that defects will be corrected.
                            </p>

                            <h2>Data Security</h2>
                            <p>
                                While we implement security measures to protect your information, we cannot guarantee absolute security. Any data 
                                transmission over the internet is at your own risk. For sensitive transactions, please visit a branch or call us directly.
                            </p>

                            <h2>Changes to This Disclaimer</h2>
                            <p>
                                Atwima Community Bank reserves the right to modify this disclaimer at any time without notice. Continued use of this 
                                website constitutes your acceptance of any changes.
                            </p>

                            <h2>Regulatory References</h2>
                            <p>
                                This website and all products are subject to:
                            </p>
                            <ul>
                                <li>Bank of Ghana regulations</li>
                                <li>Ghana National Financial Inclusion and Development Strategy</li>
                                <li>Ghana Data Protection Act, 2012 (GDPA)</li>
                                <li>Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations</li>
                                <li>Consumer protection laws of the Republic of Ghana</li>
                            </ul>

                            <h2>Contact & Complaints</h2>
                            <p>
                                If you have complaints about our services or this website, please contact:
                            </p>
                            <ul>
                                <li><strong>Email:</strong> info@atwimabank.com</li>
                                <li><strong>Phone:</strong> +233 501 387 040</li>
                                <li><strong>Address:</strong> Foase Main Road, Kwabre East, Ashanti Region, Ghana</li>
                                <li><strong>Bank of Ghana Complaints:</strong> www.bog.gov.gh</li>
                            </ul>

                            <h2>Acknowledgment</h2>
                            <p>
                                By using this website, you acknowledge that you have read and understood this disclaimer and agree to be bound by its terms.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
        </>
    );
}
