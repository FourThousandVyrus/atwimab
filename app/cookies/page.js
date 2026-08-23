import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import styles from './page.module.css';

export const metadata = {
    title: 'Cookie Policy | Atwima Community Bank PLC',
    description: 'Information about how Atwima Community Bank uses cookies to improve your browsing experience and provide relevant content.',
};

export default function CookiePolicy() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <h1 className={styles.title}>Cookie Policy</h1>
                        <p className={styles.subtitle}>Last Updated: June 2026</p>
                    </div>
                </section>

                <section className="section">
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <div className={styles.content}>
                            <h2>1. What Are Cookies?</h2>
                            <p>
                                Cookies are small text files stored on your device (computer, tablet, or mobile phone) when you visit our website. 
                                They help us remember your preferences, enhance your browsing experience, and gather analytical data about how you use our site.
                            </p>

                            <h2>2. Types of Cookies We Use</h2>
                            <h3>Essential Cookies</h3>
                            <p>
                                These cookies are necessary for the website to function properly. They enable core functionality such as navigation, 
                                security, and accessing restricted areas. You cannot opt-out of these cookies without affecting website functionality.
                            </p>

                            <h3>Performance Cookies</h3>
                            <p>
                                These cookies collect information about how you interact with our website, including which pages you visit, how long 
                                you spend on them, and any errors you encounter. This helps us improve website performance and user experience.
                            </p>

                            <h3>Analytical Cookies</h3>
                            <p>
                                We use Google Analytics to understand user behavior and website traffic patterns. These cookies are anonymized and 
                                help us identify trends and optimize content for our visitors.
                            </p>

                            <h3>Preference Cookies</h3>
                            <p>
                                These cookies remember your preferences and settings, such as language selection, theme preferences, and browsing history, 
                                to personalize your experience on future visits.
                            </p>

                            <h3>Marketing Cookies</h3>
                            <p>
                                These cookies track your activity across our website and may be shared with advertising partners to display targeted 
                                content relevant to your interests.
                            </p>

                            <h2>3. Third-Party Cookies</h2>
                            <p>
                                Our website may contain content from third parties (Google Analytics, social media widgets, etc.) that may place their own 
                                cookies on your device. We are not responsible for third-party cookie practices. We recommend reviewing their privacy policies.
                            </p>

                            <h2>4. How We Use Cookie Information</h2>
                            <ul>
                                <li>Enabling core website functionality</li>
                                <li>Measuring website performance and user engagement</li>
                                <li>Personalizing your browsing experience</li>
                                <li>Delivering targeted content and advertisements</li>
                                <li>Preventing fraud and enhancing security</li>
                                <li>Analyzing trends and improving our services</li>
                            </ul>

                            <h2>5. Cookie Duration</h2>
                            <p>
                                <strong>Session Cookies:</strong> Automatically deleted when you close your browser.
                            </p>
                            <p>
                                <strong>Persistent Cookies:</strong> Remain on your device until they expire or you manually delete them. Most persistent 
                                cookies expire after 1-2 years.
                            </p>

                            <h2>6. Managing Your Cookies</h2>
                            <p>
                                Most web browsers allow you to control cookies through their settings. You can:
                            </p>
                            <ul>
                                <li>View which cookies are stored on your device</li>
                                <li>Accept or reject cookies before they are stored</li>
                                <li>Delete all cookies or specific cookies</li>
                                <li>Set browser preferences to block cookies by default</li>
                            </ul>
                            <p>
                                <strong>Note:</strong> Disabling essential cookies may affect website functionality and your ability to access certain features.
                            </p>

                            <h2>7. Your Privacy Rights</h2>
                            <p>
                                Under GDPR and other privacy regulations, you have the right to:
                            </p>
                            <ul>
                                <li>Know what cookies are being used</li>
                                <li>Opt-out of non-essential cookies</li>
                                <li>Request deletion of your data</li>
                                <li>Access your stored data</li>
                            </ul>

                            <h2>8. Changes to This Policy</h2>
                            <p>
                                Atwima Community Bank may update this Cookie Policy periodically to reflect changes in technology, legal requirements, 
                                or our practices. We will notify you of significant changes by updating the "Last Updated" date at the top of this page.
                            </p>

                            <h2>9. Contact Us</h2>
                            <p>
                                If you have questions about our Cookie Policy or wish to opt-out of cookies, please contact:
                            </p>
                            <ul>
                                <li><strong>Email:</strong> info@atwimabank.com</li>
                                <li><strong>Phone:</strong> +233 501 387 040</li>
                                <li><strong>Data Protection Officer:</strong> dpo@atwimabank.com</li>
                            </ul>
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
