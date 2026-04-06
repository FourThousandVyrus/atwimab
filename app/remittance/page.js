import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
    title: 'Remittance | Atwima Rural Bank',
    description: 'Receive money from friends and relatives worldwide through Western Union and other transfer services at Atwima Rural Bank.',
};

const steps = [
    { num: '01', title: 'Get Reference Number', desc: 'Obtain the Money Transfer Control Number (MTCN) from the sender.', icon: '📝' },
    { num: '02', title: 'Visit a Branch', desc: 'Visit any Atwima Rural Bank branch with your personal identification and relevant documentation.', icon: '🏦' },
    { num: '03', title: 'Verify Transaction', desc: 'A friendly consultant will assist you by capturing the relevant transaction details and verifying your identity.', icon: '✅' },
    { num: '04', title: 'Receive Payout', desc: 'Once approved, you will receive your transaction payout in Ghana Cedis. Fast, secure, and reliable.', icon: '💵' },
];

export default function Remittance() {
    return (
        <>
            <Header />
            <main>
                <section style={{ background: 'linear-gradient(135deg, var(--primary-900), var(--primary-800))', padding: 'calc(var(--header-height) + 4rem) 0 4rem', color: '#fff' }}>
                    <div className="container">
                        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
                            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</Link><span>/</span><span>Remittance</span>
                        </nav>
                        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-5xl)', fontWeight: 700, marginBottom: '1rem' }}>Remittance Services</h1>
                        <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.7)', maxWidth: 600, lineHeight: 1.75 }}>
                            Receive money from friends and relatives worldwide quickly, securely, and conveniently at any of our branches.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div style={{ maxWidth: 800, margin: '0 auto' }}>
                            {/* Western Union Section */}
                            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                                <span className="section-label">International Transfers</span>
                                <h2 className="section-title">Western Union Money Transfer</h2>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--neutral-500)', maxWidth: 500, margin: '0 auto', lineHeight: 1.75 }}>
                                    Receive your international money transfers quickly and securely through our Western Union partnership.
                                </p>
                            </div>

                            {/* Steps */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
                                {steps.map((step) => (
                                    <div key={step.num} className="card" style={{ position: 'relative' }}>
                                        <div style={{ position: 'absolute', top: '1rem', right: '1.5rem', fontFamily: 'var(--font-heading)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary-100)' }}>
                                            {step.num}
                                        </div>
                                        <span style={{ fontSize: '2rem', marginBottom: '0.75rem', display: 'block' }}>{step.icon}</span>
                                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: '0.5rem' }}>{step.title}</h3>
                                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Other Options */}
                            <div style={{ background: 'var(--bg-secondary)', borderRadius: 'var(--radius-xl)', padding: '2.5rem', textAlign: 'center' }}>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: '0.75rem' }}>Other Money Transfer Options</h3>
                                <p style={{ color: 'var(--neutral-500)', marginBottom: '1.5rem', lineHeight: 1.75 }}>
                                    We are partnering with additional money transfer services to provide you with more options. Contact us for available services.
                                </p>
                                <Link href="/contact" className="btn btn-primary">Contact Us for Details</Link>
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
