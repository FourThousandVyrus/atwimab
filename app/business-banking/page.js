import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
    title: 'Business Banking | Atwima Community Bank',
    description: 'Business banking solutions including commercial loans, overdrafts, group lending, and business accounts for SMEs.',
};

const products = [
    { id: 'accounts', title: 'Business Accounts', image: '/atwima_bank_final_real.png', desc: 'Current and savings accounts tailored for businesses, with features that simplify your financial operations.', features: ['Cheque book facility', 'Dedicated business account manager', 'Bulk payment processing', 'Cash management services', 'Regular account statements'] },
    { id: 'commercial-loans', title: 'Commercial Loans', image: '/service_1.png', desc: 'Working capital and business expansion loans with competitive rates designed for the unique needs of Ghanaian businesses.', features: ['Flexible loan amounts', 'Tailored repayment schedules', 'Quick approval process', 'Expert business advisory', 'Working capital support'] },
    { id: 'commercial-overdraft', title: 'Commercial Overdraft', image: '/service_2.png', desc: 'Revolving credit facilities to manage cash flow gaps and seasonal business needs.', features: ['Revolving credit line', 'Immediate access to funds', 'Auto-renewal options', 'Low processing fees', 'Cash flow management'] },
    { id: 'group-loans', title: 'Group Loans', image: '/service_4.png', desc: 'Collective lending for groups of entrepreneurs, providing sustainable financial services to lower-income communities.', features: ['Group-based lending', 'Shared responsibility model', 'Financial literacy training', 'Community empowerment', 'Micro-enterprise support'] },
];

export default function BusinessBanking() {
    return (
        <>
            <Header />
            <main>
                <section style={{ background: 'linear-gradient(135deg, var(--primary-900), var(--primary-800))', padding: 'calc(var(--header-height) + 4rem) 0 4rem', color: '#fff' }}>
                    <div className="container">
                        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
                            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</Link><span>/</span><span>Business Banking</span>
                        </nav>
                        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-5xl)', fontWeight: 700, marginBottom: '1rem' }}>Business Banking</h1>
                        <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.7)', maxWidth: 600, lineHeight: 1.75 }}>
                            Empowering businesses across the Ashanti Region with flexible financial solutions. From startup to growth, we are your partner in success.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                            {products.map((p) => (
                                <div key={p.id} id={p.id} className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: 0 }}>
                                    <div style={{ width: '100%', height: '220px', overflow: 'hidden' }}>
                                        <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: '1rem' }}>{p.title}</h3>
                                        <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', lineHeight: 1.75, marginBottom: '1.5rem' }}>{p.desc}</p>
                                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', flex: 1 }}>
                                            {p.features.map((f) => (
                                                <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--neutral-600)' }}>
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>
                                        <Link href="/contact" className="btn btn-primary btn-sm">Get Started</Link>
                                    </div>
                                </div>
                            ))}
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
