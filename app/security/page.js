import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
    title: 'Security Center | Atwima Rural Bank',
    description: 'Learn about our security measures, fraud protection, and online safety practices. Your security is our top priority.',
};

const tips = [
    { icon: '🔐', title: 'Protect Your PIN', desc: 'Never share your PIN, password, or OTP with anyone. Atwima Rural Bank staff will never ask for your PIN.' },
    { icon: '📧', title: 'Beware of Phishing', desc: 'Do not click on suspicious links in emails or messages. Always access your bank account directly through our official website.' },
    { icon: '📱', title: 'Secure Your Devices', desc: 'Keep your mobile phone and computer updated with the latest security patches. Use antivirus software.' },
    { icon: '🔔', title: 'Monitor Your Accounts', desc: 'Regularly check your account statements for unauthorized transactions. Report any suspicious activity immediately.' },
    { icon: '🏧', title: 'ATM Safety', desc: 'Always shield the keypad when entering your PIN. Do not accept help from strangers at the ATM.' },
    { icon: '☎️', title: 'Report Immediately', desc: 'If you suspect fraud or unauthorized access to your account, contact us immediately on 0501 387 040.' },
];

export default function Security() {
    return (
        <>
            <Header />
            <main>
                <section style={{ background: 'linear-gradient(135deg, #0A1628, var(--primary-900))', padding: 'calc(var(--header-height) + 4rem) 0 4rem', color: '#fff' }}>
                    <div className="container">
                        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
                            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</Link><span>/</span><span>Security Center</span>
                        </nav>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-lg)', background: 'rgba(34,118,74,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-400)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-5xl)', fontWeight: 700 }}>Security Center</h1>
                        </div>
                        <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.7)', maxWidth: 600, lineHeight: 1.75 }}>
                            Your security is our top priority. Learn about the measures we take to protect your accounts and how you can stay safe.
                        </p>
                    </div>
                </section>

                {/* Security Measures */}
                <section className="section">
                    <div className="container">
                        <div style={{ maxWidth: 900, margin: '0 auto' }}>
                            <div className="section-header centered">
                                <span className="section-label">How We Protect You</span>
                                <h2 className="section-title">Our Security Measures</h2>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                                <div className="card" style={{ borderLeft: '4px solid var(--secondary-500)' }}>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: '0.5rem' }}>🔒 Encrypted Transactions</h3>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', margin: 0, lineHeight: 1.75 }}>All online banking transactions are encrypted with industry-standard SSL/TLS protocols to protect your data.</p>
                                </div>
                                <div className="card" style={{ borderLeft: '4px solid var(--secondary-500)' }}>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: '0.5rem' }}>🛡️ GDPC Insured</h3>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', margin: 0, lineHeight: 1.75 }}>Your deposits are protected by the Ghana Deposit Protection Corporation, ensuring your money is safe.</p>
                                </div>
                                <div className="card" style={{ borderLeft: '4px solid var(--secondary-500)' }}>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: '0.5rem' }}>🏛️ Bank of Ghana Regulated</h3>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', margin: 0, lineHeight: 1.75 }}>We operate under the strict regulatory framework of the Bank of Ghana, ensuring compliance and safety.</p>
                                </div>
                                <div className="card" style={{ borderLeft: '4px solid var(--secondary-500)' }}>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: '0.5rem' }}>🔍 Fraud Monitoring</h3>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', margin: 0, lineHeight: 1.75 }}>Our systems continuously monitor for suspicious activity to detect and prevent fraud in real-time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Safety Tips */}
                <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                    <div className="container">
                        <div style={{ maxWidth: 900, margin: '0 auto' }}>
                            <div className="section-header centered">
                                <span className="section-label">Stay Safe</span>
                                <h2 className="section-title">Security Tips</h2>
                                <p className="section-subtitle">Protect yourself from fraud and scams with these important tips.</p>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                                {tips.map((tip) => (
                                    <div key={tip.title} className="card">
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                                            <span style={{ fontSize: '1.5rem' }}>{tip.icon}</span>
                                            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--neutral-900)', margin: 0 }}>{tip.title}</h3>
                                        </div>
                                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', margin: 0, lineHeight: 1.75 }}>{tip.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Emergency Contact */}
                <section className="section">
                    <div className="container">
                        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', background: 'linear-gradient(135deg, var(--primary-50), var(--secondary-50))', padding: '3rem', borderRadius: 'var(--radius-xl)' }}>
                            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>🚨</span>
                            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--primary-900)', marginBottom: '0.75rem' }}>Report Suspicious Activity</h2>
                            <p style={{ color: 'var(--neutral-600)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                                If you suspect unauthorized access to your account or encounter any suspicious activity, contact us immediately.
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                                <a href="tel:0501387040" className="btn btn-primary btn-lg">
                                    📞 Call: 0501 387 040
                                </a>
                                <a href="https://wa.me/233501387040" className="btn btn-secondary btn-lg" target="_blank" rel="noopener">
                                    💬 WhatsApp
                                </a>
                            </div>
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
