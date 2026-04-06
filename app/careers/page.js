'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import styles from './page.module.css';

const values = [
    { icon: '🤝', title: 'Community First', text: 'We believe in growing together with the communities we serve across the Ashanti Region.' },
    { icon: '📈', title: 'Growth Mindset', text: 'We encourage continuous learning and professional development for all team members.' },
    { icon: '🔒', title: 'Integrity', text: 'Honesty and transparency in every interaction with customers and colleagues.' },
    { icon: '⭐', title: 'Excellence', text: 'We strive to deliver exceptional service and exceed expectations every day.' },
];

export default function CareersPage() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', message: '' });
    const [sent, setSent] = useState(false);

    const set = (k) => (e) => setForm(prev => ({ ...prev, [k]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        const text = `Hello Atwima Rural Bank!%0A%0AI am interested in a career opportunity.%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0APhone: ${encodeURIComponent(form.phone)}%0ARole of Interest: ${encodeURIComponent(form.role)}%0A%0AMessage: ${encodeURIComponent(form.message)}`;
        window.open(`https://wa.me/233501387040?text=${text}`, '_blank', 'noopener,noreferrer');
        setSent(true);
    };

    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <span className="section-label">Join the Team</span>
                        <h1>Careers at Atwima Rural Bank</h1>
                        <p className={styles.heroSub}>Be part of a team that is making a real difference in the lives of families and businesses across the Ashanti Region.</p>
                    </div>
                </section>

                {/* Values */}
                <section className="section section-alt">
                    <div className="container">
                        <div className="section-header centered">
                            <span className="section-label">Our Culture</span>
                            <h2 className="section-title">Why Work With Us</h2>
                        </div>
                        <div className={styles.valuesGrid}>
                            {values.map(v => (
                                <div key={v.title} className={styles.valueCard}>
                                    <span className={styles.valueIcon}>{v.icon}</span>
                                    <h3 className={styles.valueTitle}>{v.title}</h3>
                                    <p>{v.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section className="section">
                    <div className="container">
                        <div className="section-header centered">
                            <span className="section-label">Vacancies</span>
                            <h2 className="section-title">Current Openings</h2>
                        </div>
                        <div className={styles.noVacancy}>
                            <div className={styles.noVacancyIcon}>🏦</div>
                            <h3>No Vacancies at This Time</h3>
                            <p>We do not have any positions currently advertised, but we are always open to hearing from talented individuals who share our values. Send us your CV and cover letter below and we will keep it on file for future opportunities.</p>
                        </div>
                    </div>
                </section>

                {/* CV Submission */}
                <section className="section section-alt">
                    <div className="container">
                        <div className={styles.formGrid}>
                            <div className={styles.formIntro}>
                                <span className="section-label">Express Interest</span>
                                <h2 className="section-title">Send Your CV</h2>
                                <p>Fill out the form and we will send your interest to our HR team via WhatsApp. Include a brief message about your skills and the type of role you are interested in.</p>
                                <div className={styles.infoItems}>
                                    <div className={styles.infoItem}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-600)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                                        <span>HR Department: 0501 387 040</span>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-600)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                        <span>info@atwimabank.com</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.formCard}>
                                {sent ? (
                                    <div className={styles.success}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                        <h3>Expression Sent!</h3>
                                        <p>Your interest has been forwarded to our HR team via WhatsApp. We will be in touch.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label className="form-label">Full Name *</label>
                                            <input className="form-input" type="text" required value={form.name} onChange={set('name')} placeholder="Your full name" />
                                        </div>
                                        <div className={styles.row}>
                                            <div className="form-group">
                                                <label className="form-label">Email *</label>
                                                <input className="form-input" type="email" required value={form.email} onChange={set('email')} placeholder="your@email.com" />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Phone *</label>
                                                <input className="form-input" type="tel" required value={form.phone} onChange={set('phone')} placeholder="0501 234 567" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Role of Interest</label>
                                            <input className="form-input" type="text" value={form.role} onChange={set('role')} placeholder="e.g. Customer Service, Loans Officer..." />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Brief Message *</label>
                                            <textarea className="form-input" required rows={4} value={form.message} onChange={set('message')} placeholder="Tell us about your skills and experience..." />
                                        </div>
                                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                            Submit Expression of Interest
                                        </button>
                                    </form>
                                )}
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
