import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    title: 'About Us | Atwima Rural Bank',
    description: 'Learn about Atwima Rural Bank — our history, mission, values, board of directors, and senior management team.',
};

const boardMembers = [
    { name: 'Board Chairman', role: 'Chairman', initials: 'BC', avatar: 'https://picsum.photos/seed/boardchairman/200/200' },
    { name: 'Vice Chairman', role: 'Vice Chairman', initials: 'VC', avatar: 'https://picsum.photos/seed/vicechairman/200/200' },
    { name: 'Board Member', role: 'Director', initials: 'BM', avatar: 'https://picsum.photos/seed/boardmember1/200/200' },
    { name: 'Board Member', role: 'Director', initials: 'BM', avatar: 'https://picsum.photos/seed/boardmember2/200/200' },
];

const managementTeam = [
    { name: 'General Manager', role: 'Manager', initials: 'GM', avatar: 'https://picsum.photos/seed/generalmanager/200/200' },
    { name: 'Operations Manager', role: 'Operations', initials: 'OM', avatar: 'https://picsum.photos/seed/opsmanager/200/200' },
    { name: 'Credit Manager', role: 'Credit', initials: 'CM', avatar: 'https://picsum.photos/seed/creditmanager/200/200' },
    { name: 'Finance Manager', role: 'Finance', initials: 'FM', avatar: 'https://picsum.photos/seed/financemanager/200/200' },
];

const values = [
    { icon: '🤝', title: 'Integrity', desc: 'We uphold the highest standards of honesty and ethical conduct in all our dealings.' },
    { icon: '🎯', title: 'Customer First', desc: 'Our customers are at the heart of everything we do. Their success is our success.' },
    { icon: '🌱', title: 'Community Development', desc: 'We are committed to the social and economic development of the communities we serve.' },
    { icon: '💡', title: 'Innovation', desc: 'We continually improve our services and processes to meet the evolving needs of our customers.' },
];

export default function About() {
    return (
        <>
            <Header />
            <main>
                <section style={{ background: 'linear-gradient(135deg, var(--primary-900), var(--primary-800))', padding: 'calc(var(--header-height) + 4rem) 0 4rem', color: '#fff' }}>
                    <div className="container">
                        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>
                            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>Home</Link><span>/</span><span>About Us</span>
                        </nav>
                        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-5xl)', fontWeight: 700, marginBottom: '1rem' }}>About Atwima Rural Bank</h1>
                        <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.7)', maxWidth: 600, lineHeight: 1.75 }}>
                            A legacy of trust, service, and community development spanning over three decades.
                        </p>
                    </div>
                </section>

                {/* Our Story */}
                <section className="section" id="our-story">
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                            <div>
                                <span className="section-label">Our Story</span>
                                <h2 className="section-title">A Heritage of Trust</h2>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--neutral-500)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                                    Atwima Rural Bank PLC was incorporated in the early 1980s and has since grown to become one of the most trusted financial institutions in the Ashanti Region. Headquartered in Foase, Atwima, our bank was established with a clear mission: to provide accessible, affordable, and reliable banking services to the communities in the Atwima District and beyond.
                                </p>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--neutral-500)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                                    Over the years, we have expanded our reach with 6 branches across the region, serving thousands of individuals, families, and businesses. Our commitment to excellence and community has earned us the trust and loyalty of our customers.
                                </p>
                                <p style={{ fontSize: 'var(--text-lg)', color: 'var(--neutral-500)', lineHeight: 1.9 }}>
                                    Our motto — <strong style={{ color: 'var(--primary-700)' }}>&ldquo;A friend in need is a friend indeed&rdquo;</strong> — reflects our core philosophy of being there for our customers when they need us the most.
                                </p>
                            </div>
                            <div style={{ position: 'relative', height: '480px', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: 'var(--shadow-xl, 0 20px 60px rgba(0,0,0,0.15))' }}>
                                <Image fill src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" alt="Atwima Rural Bank team" sizes="(max-width:768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: 900, margin: '0 auto' }}>
                            <div className="card">
                                <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>🎯</span>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--primary-800)', marginBottom: '0.75rem' }}>Our Mission</h3>
                                <p style={{ color: 'var(--neutral-500)', lineHeight: 1.75, margin: 0 }}>
                                    To provide accessible, innovative, and sustainable financial services that empower our customers and communities to achieve their economic aspirations.
                                </p>
                            </div>
                            <div className="card">
                                <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>🔭</span>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--primary-800)', marginBottom: '0.75rem' }}>Our Vision</h3>
                                <p style={{ color: 'var(--neutral-500)', lineHeight: 1.75, margin: 0 }}>
                                    To become the leading community bank in Ghana, recognized for exceptional service, financial inclusion, and transformative impact on the lives of our customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="section">
                    <div className="container">
                        <div className="section-header centered">
                            <span className="section-label">Our Values</span>
                            <h2 className="section-title">What Guides Us</h2>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                            {values.map((v) => (
                                <div key={v.title} style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                                    <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{v.icon}</span>
                                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: '0.5rem' }}>{v.title}</h4>
                                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)', lineHeight: 1.75, margin: 0 }}>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Board of Directors */}
                <section className="section" id="board" style={{ background: 'var(--bg-secondary)' }}>
                    <div className="container">
                        <div className="section-header centered">
                            <span className="section-label">Governance</span>
                            <h2 className="section-title">Board of Directors</h2>
                            <p className="section-subtitle">Our experienced board provides strategic direction and governance.</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', maxWidth: 900, margin: '0 auto' }}>
                            {boardMembers.map((m, i) => (
                                <div key={i} style={{ textAlign: 'center' }}>
                                    <Image src={m.avatar} alt={m.name} width={100} height={100} style={{ borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem', display: 'block' }} />
                                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: '0.25rem' }}>{m.name}</div>
                                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)' }}>{m.role}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Management Team */}
                <section className="section" id="management">
                    <div className="container">
                        <div className="section-header centered">
                            <span className="section-label">Leadership</span>
                            <h2 className="section-title">Senior Management</h2>
                            <p className="section-subtitle">Dedicated professionals driving our operations and customer experience.</p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', maxWidth: 900, margin: '0 auto' }}>
                            {managementTeam.map((m, i) => (
                                <div key={i} style={{ textAlign: 'center' }}>
                                    <Image src={m.avatar} alt={m.name} width={100} height={100} style={{ borderRadius: '50%', objectFit: 'cover', margin: '0 auto 1rem', display: 'block' }} />
                                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--neutral-900)', marginBottom: '0.25rem' }}>{m.name}</div>
                                    <div style={{ fontSize: 'var(--text-sm)', color: 'var(--neutral-500)' }}>{m.role}</div>
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
