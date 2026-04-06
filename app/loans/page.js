import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';

export const metadata = {
    title: 'Loans | Atwima Rural Bank',
    description: 'Explore our loan products — salary loans, commercial loans, transport loans, susu loans, and more with competitive rates and flexible terms.',
};

const loans = [
    { id: 'salary-loan', title: 'Salary Loan', icon: '💼', desc: 'Loans granted to salary workers such as teachers, nurses, and private company employees who receive their salary from the bank.', features: ['Quick processing', 'Competitive rates', 'Flexible repayment terms', 'Up to 36 months tenure', 'Minimal documentation'] },
    { id: 'commercial-loan', title: 'Commercial Loan', icon: '🏪', desc: 'Designed for people in commercial businesses to expand operations, purchase inventory, or fund business activities.', features: ['Working capital finance', 'Business expansion support', 'Flexible repayment schedule', 'Tailored to your business cycle', 'Expert business advisory'] },
    { id: 'commercial-overdraft', title: 'Commercial Overdraft', icon: '📊', desc: 'Short-term credit facility for traders and companies to enhance working capital and manage cash flow gaps.', features: ['Revolving credit line', 'Quick access to funds', 'Enhances working capital', 'Suitable for seasonal businesses', 'Renewable facility'] },
    { id: 'transport-loan', title: 'Transport Loan', icon: '🚗', desc: 'Financing for the acquisition of motor vehicles with flexible terms of repayment tailored to your income.', features: ['Vehicle acquisition finance', 'Flexible repayment terms', 'Competitive interest rates', 'New and used vehicles', 'Quick approval process'] },
    { id: 'salary-overdraft', title: 'Salary Overdraft', icon: '💰', desc: 'Short-term credit facility for salary workers who receive their salary from the bank, providing quick access to funds.', features: ['Instant access to extra funds', 'Automatic repayment from salary', 'No lengthy application process', 'Renewable monthly', 'Low processing fees'] },
    { id: 'susu-loan', title: 'Susu Loan', icon: '🪙', desc: 'Loans for susu customers to support their petty trading activities and grow their small businesses.', features: ['Available to susu account holders', 'Quick disbursement', 'Small business support', 'Flexible repayment', 'Financial inclusion focused'] },
    { id: 'funeral-loan', title: 'Funeral Loan', icon: '🕊️', desc: 'Support for bereaved customers to celebrate the final funeral rites of their loved ones with dignity.', features: ['Quick disbursement', 'Compassionate processing', 'Flexible terms', 'Minimal requirements', 'Supportive service'] },
    { id: 'church-loan', title: 'Church Development Loan', icon: '⛪', desc: 'Financing for churches for projects such as mission houses, chapels, instruments, and church bus acquisition.', features: ['Building & construction finance', 'Equipment acquisition', 'Vehicle purchase support', 'Flexible long-term repayment', 'Community development focus'] },
    { id: 'group-loan', title: 'Group Loans', icon: '👥', desc: 'Providing sustainable financial services to lower-income groups to improve their livelihood through collective responsibility.', features: ['Group-based lending', 'Lower income focused', 'Collective responsibility model', 'Financial inclusion', 'Livelihood improvement'] },
];

export default function Loans() {
    return (
        <>
            <Header />
            <main>
                <section style={{ background: 'linear-gradient(135deg, var(--primary-900), var(--primary-800))', padding: 'calc(var(--header-height) + 4rem) 0 4rem', color: '#fff' }}>
                    <div className="container">
                        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
                            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</Link><span>/</span><span>Loans</span>
                        </nav>
                        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-5xl)', fontWeight: 700, marginBottom: '1rem' }}>Loans & Credit</h1>
                        <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.7)', maxWidth: 600, lineHeight: 1.75 }}>
                            Flexible financing solutions designed for every need. From personal salary loans to business credit facilities, we help you achieve your goals with competitive rates.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '2rem' }}>
                            {loans.map((loan) => (
                                <div key={loan.id} id={loan.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <span style={{ fontSize: '2rem', width: 56, height: 56, background: 'var(--accent-100)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{loan.icon}</span>
                                        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-xl)', fontWeight: 700, color: 'var(--neutral-900)' }}>{loan.title}</h3>
                                    </div>
                                    <p style={{ fontSize: 'var(--text-base)', color: 'var(--neutral-500)', lineHeight: 1.75, marginBottom: '1.5rem' }}>{loan.desc}</p>
                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', flex: 1 }}>
                                        {loan.features.map((f) => (
                                            <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--neutral-600)' }}>
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link href="/contact" className="btn btn-primary btn-sm">Apply Now</Link>
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
