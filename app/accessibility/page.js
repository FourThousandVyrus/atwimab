import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import styles from './page.module.css';

export const metadata = {
    title: 'Accessibility Statement | Atwima Community Bank PLC',
    description: 'Information about accessibility features and our commitment to ensuring an inclusive experience for all users of our website.',
};

export default function AccessibilityPage() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <h1 className={styles.title}>Accessibility Statement</h1>
                        <p className={styles.subtitle}>Our Commitment to Inclusive Design | Last Updated: June 2026</p>
                    </div>
                </section>

                <section className="section">
                    <div className="container" style={{ maxWidth: '800px' }}>
                        <div className={styles.content}>
                            <h2>Our Commitment to Accessibility</h2>
                            <p>
                                Atwima Community Bank is committed to providing an accessible website that is usable by everyone, including people 
                                with disabilities. We aim to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards to 
                                ensure all users can access our services, regardless of their abilities.
                            </p>

                            <h2>Accessibility Features</h2>
                            <h3>Visual Accessibility</h3>
                            <ul>
                                <li>High contrast color schemes for better readability</li>
                                <li>Resizable text (use browser zoom: Ctrl/Cmd + or Ctrl/Cmd -)</li>
                                <li>Descriptive alt text for all images</li>
                                <li>Clear visual hierarchy and spacing</li>
                                <li>Readable font sizes and line spacing</li>
                            </ul>

                            <h3>Navigation Accessibility</h3>
                            <ul>
                                <li>Keyboard navigation support throughout the site</li>
                                <li>Skip links to bypass repetitive content</li>
                                <li>Clear focus indicators for keyboard users</li>
                                <li>Logical tab order for form fields</li>
                                <li>Breadcrumb navigation for orientation</li>
                            </ul>

                            <h3>Audio & Video Content</h3>
                            <ul>
                                <li>Captions and transcripts for video content (when available)</li>
                                <li>Audio descriptions for visual information (when available)</li>
                                <li>Controls to pause, stop, or mute audio/video content</li>
                            </ul>

                            <h3>Form Accessibility</h3>
                            <ul>
                                <li>Clearly labeled form fields</li>
                                <li>Error messages that clearly explain how to correct them</li>
                                <li>Required field indicators</li>
                                <li>Accessible date and time pickers</li>
                                <li>Logical form structure and validation</li>
                            </ul>

                            <h3>Screen Reader Compatibility</h3>
                            <ul>
                                <li>Semantic HTML structure for proper content hierarchy</li>
                                <li>ARIA labels and descriptions where needed</li>
                                <li>Role attributes for interactive elements</li>
                                <li>Tested with major screen readers (NVDA, JAWS, VoiceOver)</li>
                            </ul>

                            <h2>Supported Assistive Technologies</h2>
                            <p>
                                This website has been tested and optimized for compatibility with the following assistive technologies:
                            </p>
                            <ul>
                                <li><strong>Screen Readers:</strong> NVDA (Windows), JAWS, VoiceOver (Mac/iOS)</li>
                                <li><strong>Magnification Tools:</strong> ZoomText, built-in OS magnifiers</li>
                                <li><strong>Voice Control:</strong> Voice commands and speech recognition</li>
                                <li><strong>Keyboard Navigation:</strong> Full keyboard accessibility without mouse</li>
                                <li><strong>Text-to-Speech:</strong> Browser extensions and native OS features</li>
                            </ul>

                            <h2>Accessibility Standards</h2>
                            <p>
                                We aim to conform to the following accessibility standards:
                            </p>
                            <ul>
                                <li><strong>WCAG 2.1:</strong> Web Content Accessibility Guidelines Level AA</li>
                                <li><strong>ADA:</strong> Americans with Disabilities Act (where applicable)</li>
                                <li><strong>Section 508:</strong> Rehabilitation Act (where applicable)</li>
                                <li><strong>AODA:</strong> Accessibility for Ontarians with Disabilities Act (where applicable)</li>
                            </ul>

                            <h2>Browser & Device Support</h2>
                            <p>
                                Our website is designed to be accessible on:
                            </p>
                            <ul>
                                <li><strong>Desktop:</strong> Chrome, Firefox, Safari, Edge (latest versions)</li>
                                <li><strong>Mobile:</strong> iOS Safari, Android Chrome</li>
                                <li><strong>Tablets:</strong> iPad, Android tablets</li>
                                <li><strong>Assistive Devices:</strong> Screen readers, magnifiers, speech recognition tools</li>
                            </ul>

                            <h2>Known Accessibility Issues</h2>
                            <p>
                                While we continually work to improve accessibility, some third-party content (such as embedded videos or external 
                                applications) may have limitations. We are working with our service providers to improve accessibility across all 
                                aspects of our website.
                            </p>

                            <h2>Accessibility Tools & Shortcuts</h2>
                            <h3>Keyboard Shortcuts</h3>
                            <ul>
                                <li><strong>Tab:</strong> Navigate forward through elements</li>
                                <li><strong>Shift + Tab:</strong> Navigate backward through elements</li>
                                <li><strong>Enter:</strong> Activate buttons or links</li>
                                <li><strong>Space:</strong> Select checkboxes or toggle switches</li>
                                <li><strong>Escape:</strong> Close modals or menus</li>
                                <li><strong>Ctrl/Cmd + A:</strong> Select all text</li>
                                <li><strong>Ctrl/Cmd + F:</strong> Search on page</li>
                            </ul>

                            <h3>Browser Accessibility Options</h3>
                            <ul>
                                <li><strong>Zoom Text:</strong> Ctrl/Cmd + or Ctrl/Cmd - (zoom in/out)</li>
                                <li><strong>Reset Zoom:</strong> Ctrl/Cmd + 0</li>
                                <li><strong>Reader Mode:</strong> Firefox (Ctrl + Alt + R), Safari available</li>
                                <li><strong>High Contrast:</strong> Windows accessibility settings</li>
                                <li><strong>Text Size:</strong> Browser settings → Font size</li>
                            </ul>

                            <h2>Feedback & Accessibility Issues</h2>
                            <p>
                                We welcome feedback on accessibility issues and suggestions for improvement. If you experience any accessibility 
                                barriers while using our website, please let us know:
                            </p>
                            <ul>
                                <li><strong>Email:</strong> accessibility@atwimabank.com</li>
                                <li><strong>Phone:</strong> +233 501 387 040</li>
                                <li><strong>Mailing Address:</strong> Foase Main Road, Kwabre East, Ashanti Region, Ghana</li>
                            </ul>

                            <h2>How to Request Accommodations</h2>
                            <p>
                                If you need alternative formats (such as large print, braille, or audio versions) of our website content or require 
                                additional accommodations, please contact us. We will do our best to provide the information in a format that works 
                                for you.
                            </p>

                            <h2>Third-Party Content & Links</h2>
                            <p>
                                While we strive to ensure all content on our website is accessible, we do not have control over external websites 
                                and third-party content linked from our site. We cannot guarantee the accessibility of external resources.
                            </p>

                            <h2>Accessibility Improvements</h2>
                            <p>
                                Atwima Community Bank is continuously working to improve website accessibility. We regularly:
                            </p>
                            <ul>
                                <li>Conduct accessibility audits and testing</li>
                                <li>Update content to meet WCAG standards</li>
                                <li>Train staff on accessibility best practices</li>
                                <li>Gather feedback from users with disabilities</li>
                                <li>Implement emerging accessibility technologies</li>
                            </ul>

                            <h2>Ongoing Commitment</h2>
                            <p>
                                We recognize that accessibility is an ongoing commitment, not a destination. We are dedicated to maintaining and 
                                continuously improving the accessibility of our website to ensure all users have equal access to our services and information.
                            </p>

                            <h2>Contact Accessibility Team</h2>
                            <p>
                                If you have any questions or concerns about our accessibility practices, please reach out to our dedicated 
                                accessibility team:
                            </p>
                            <ul>
                                <li><strong>Accessibility Coordinator:</strong> accessibility@atwimabank.com</li>
                                <li><strong>General Inquiries:</strong> info@atwimabank.com</li>
                                <li><strong>Phone:</strong> +233 501 387 040</li>
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
