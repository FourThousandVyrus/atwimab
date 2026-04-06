import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
    title: 'Investments | Atwima Rural Bank',
    description: 'Grow your wealth with ARB Fixed Deposit accounts and bank shares. Competitive returns on your investments.',
};

export default function Investments() {
    return (
        <>
            <Header />
            <main>
                <section style={{ background: 'linear-gradient(135deg, var(--primary-900), var(--primary-800))', padding: 'calc(var(--header-height) + 4rem) 0 4rem', color: '#fff' }}>
                    <div className="container">
                        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
                            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</Link><span>/</span><span>Investments</span>
                        </nav>
                        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-5xl)', fontWeight: 700, marginBottom: '1rem' }}>Investments</h1>
                        <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.7)', maxWidth: 600, lineHeight: 1.75 }}>
                            Flexible investment options to help your money grow. Choose from short-term to long-term investments with competitive returns.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: 900, margin: '0 auto' }}>
                            {/* Fixed Deposit */}
                            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📈</span>
                                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: '0.75rem' }}>ARB Fixed Deposit</h2>
                                <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                                    Lock in your funds for a fixed period and earn attractive interest rates. Available for 3, 6, 9, and 12-month tenures.
                                </p>
                                <div style={{ background: 'var(--accent-100)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--accent-700)', fontWeight: 600, marginBottom: '0.25rem' }}>Interest Rate</div>
                                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-3xl)', fontWeight: 700, color: 'var(--accent-600)' }}>Up to 22%</div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-600)' }}>per annum (12-month tenure)</div>
                                </div>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', flex: 1 }}>
                                    {['Competitive interest rates', 'Flexible tenure options', 'Capital security', 'Interest paid at maturity', 'Minimum deposit required'].map((f) => (
                                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--neutral-600)' }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="btn btn-cta">Invest Now</Link>
                            </div>

                            {/* ARB Shares */}
                            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🏛️</span>
                                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: '0.75rem' }}>ARB Shares</h2>
                                <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                                    Own a part of Atwima Rural Bank by purchasing shares. Earn dividends and participate in the bank&apos;s growth story.
                                </p>
                                <div style={{ background: 'var(--primary-50)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--primary-700)', fontWeight: 600, marginBottom: '0.25rem' }}>Investment Type</div>
                                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--primary-600)' }}>Equity</div>
                                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--primary-600)' }}>Annual dividend payments</div>
                                </div>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', flex: 1 }}>
                                    {['Dividend income', 'Share in bank ownership', 'Voting rights at AGM', 'Capital appreciation', 'Long-term wealth building'].map((f) => (
                                        <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--neutral-600)' }}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="btn btn-primary">Purchase Shares</Link>
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
