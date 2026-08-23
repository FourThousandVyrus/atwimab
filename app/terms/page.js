import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import styles from './page.module.css';

export const metadata = {
    title: 'Terms of Service | Atwima Community Bank PLC',
    description: 'Terms and conditions governing the use of Atwima Community Bank website and services. Please read carefully before using our services.',
};

export default function TermsPage() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <h1 className={styles.title}>Terms of Service</h1>
                        <p className={styles.subtitle}>Last Updated: June 2026</p>
                    </div>
                </section>

                <section className="section">
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <div className={styles.content}>
                            <h2>1. Acceptance of Terms</h2>
                            <p>
                                By accessing and using this website (www.atwimabank.com), you agree to be bound by these Terms of Service. 
                                If you do not agree to abide by the above, please do not use this service.
                            </p>

                            <h2>2. Use License</h2>
                            <p>
                                Permission is granted to temporarily download one copy of the materials (information or software) on Atwima Community 
                                Bank's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of 
                                title, and under this license you may not:
                            </p>
                            <ul>
                                <li>Modifying or copying the materials</li>
                                <li>Using the materials for any commercial purpose or for any public display</li>
                                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                                <li>Removing any copyright or other proprietary notations from the materials</li>
                                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                                <li>Harassing or causing distress or inconvenience to any person</li>
                                <li>Offending public morals</li>
                                <li>Disrupting the normal flow of dialogue within our website</li>
                            </ul>

                            <h2>3. Disclaimer</h2>
                            <p>
                                The materials on Atwima Community Bank's website are provided on an 'as is' basis. Atwima Community Bank makes no 
                                warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, 
                                implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of 
                                intellectual property or other violation of rights.
                            </p>

                            <h2>4. Limitations</h2>
                            <p>
                                In no event shall Atwima Community Bank or its suppliers be liable for any damages (including, without limitation, 
                                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the 
                                materials on Atwima Community Bank's website, even if we or our authorized representative has been notified orally 
                                or in writing of the possibility of such damage.
                            </p>

                            <h2>5. Accuracy of Materials</h2>
                            <p>
                                The materials appearing on Atwima Community Bank's website could include technical, typographical, or photographic 
                                errors. Atwima Community Bank does not warrant that any of the materials on our website are accurate, complete, or 
                                current. Atwima Community Bank may make changes to the materials contained on its website at any time without notice.
                            </p>

                            <h2>6. Links</h2>
                            <p>
                                Atwima Community Bank has not reviewed all of the sites linked to its website and is not responsible for the contents 
                                of any such linked site. The inclusion of any link does not imply endorsement by Atwima Community Bank of the site. 
                                Use of any such linked website is at the user's own risk.
                            </p>

                            <h2>7. Modifications</h2>
                            <p>
                                Atwima Community Bank may revise these terms of service for our website at any time without notice. By using this 
                                website, you are agreeing to be bound by the then current version of these terms of service.
                            </p>

                            <h2>8. Governing Law</h2>
                            <p>
                                These terms and conditions are governed by and construed in accordance with the laws of the Republic of Ghana, and 
                                you irrevocably submit to the exclusive jurisdiction of the courts located in Kumasi, Ashanti Region, Ghana.
                            </p>

                            <h2>9. Contact Information</h2>
                            <p>
                                If you have any questions about these Terms of Service, please contact us:
                            </p>
                            <ul>
                                <li><strong>Phone:</strong> +233 501 387 040</li>
                                <li><strong>Email:</strong> info@atwimabank.com</li>
                                <li><strong>Address:</strong> Foase Main Road, Kwabre East, Ashanti Region, Ghana</li>
                            </ul>

                            <h2>10. Entire Agreement</h2>
                            <p>
                                These terms and conditions constitute the entire agreement between you and Atwima Community Bank regarding your use 
                                of this website and supersede all prior and contemporaneous communications and proposals, whether electronic, oral, 
                                or written, between you and Atwima Community Bank with respect to this website.
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
