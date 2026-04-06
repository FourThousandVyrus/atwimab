'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';
import styles from './page.module.css';

const branches = [
    { name: 'Foase (Head Office)', address: 'P.O. Box 13, Foase-Atwima, Ashanti Region', phone: '0501 387 040', hours: '8:30 AM – 4:30 PM', days: 'Monday – Friday' },
    { name: 'Twedie Branch', address: 'Twedie, Ashanti Region', phone: '0501 387 041', hours: '8:30 AM – 4:30 PM', days: 'Monday – Friday' },
    { name: 'Kwadaso Branch', address: 'Kwadaso, Kumasi', phone: '0501 387 042', hours: '8:30 AM – 4:30 PM', days: 'Monday – Friday' },
    { name: 'Abuakwa Branch', address: 'Abuakwa, Kumasi', phone: '0501 387 043', hours: '8:30 AM – 4:30 PM', days: 'Monday – Friday' },
    { name: 'Nkawie Branch', address: 'Nkawie, Ashanti Region', phone: '0501 387 044', hours: '8:30 AM – 4:30 PM', days: 'Monday – Friday' },
    { name: 'Toase Branch', address: 'Toase, Ashanti Region', phone: '0501 387 045', hours: '8:30 AM – 4:30 PM', days: 'Monday – Friday' },
];

const services = [
    'Open a New Account',
    'Loan Application',
    'Fixed Deposit / Investment',
    'Western Union / Remittance',
    'Susu Account Enquiry',
    'Business Banking',
    'General Enquiry',
];

function getBranchStatus() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const time = hour + minute / 60;
    if (day >= 1 && day <= 5 && time >= 8.5 && time < 16.5) return { status: 'Open Now', color: 'var(--secondary-500)', bg: 'var(--secondary-100)' };
    return { status: 'Closed', color: 'var(--error)', bg: '#FEE2E2' };
}

export default function Contact() {
    const [msgForm, setMsgForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [msgSent, setMsgSent] = useState(false);

    const [appt, setAppt] = useState({ name: '', phone: '', branch: '', date: '', service: '' });
    const [apptSent, setApptSent] = useState(false);

    const setMsg = (k) => (e) => setMsgForm(prev => ({ ...prev, [k]: e.target.value }));
    const setAp = (k) => (e) => setAppt(prev => ({ ...prev, [k]: e.target.value }));

    const handleMsgSubmit = (e) => {
        e.preventDefault();
        setMsgSent(true);
    };

    const handleApptSubmit = (e) => {
        e.preventDefault();
        const msg = `Hello Atwima Rural Bank!%0A%0AI would like to book a branch visit:%0A%0AName: ${encodeURIComponent(appt.name)}%0APhone: ${encodeURIComponent(appt.phone)}%0ABranch: ${encodeURIComponent(appt.branch)}%0APreferred Date: ${encodeURIComponent(appt.date)}%0AService: ${encodeURIComponent(appt.service)}%0A%0APlease confirm my appointment. Thank you!`;
        window.open(`https://wa.me/233501387040?text=${msg}`, '_blank', 'noopener,noreferrer');
        setApptSent(true);
    };

    const branchStatus = getBranchStatus();

    return (
        <>
            <Header />
            <main>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className="container">
                        <nav className={styles.breadcrumb}>
                            <Link href="/">Home</Link><span>/</span><span>Contact</span>
                        </nav>
                        <h1>Contact &amp; Branches</h1>
                        <p className={styles.heroSub}>We&apos;d love to hear from you. Visit any of our 6 branches, book an appointment, or send us a message.</p>
                        <div className={styles.heroMeta}>
                            <div className={styles.heroMetaItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                                <span>0501 387 040</span>
                            </div>
                            <div className={styles.heroMetaItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                <span style={{ color: branchStatus.color, fontWeight: 600 }}>{branchStatus.status}</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Branch Locations */}
                <section className="section">
                    <div className="container">
                        <div className="section-header centered">
                            <span className="section-label">Our Branches</span>
                            <h2 className="section-title">Find Us Near You</h2>
                        </div>
                        <div className={styles.branchGrid}>
                            {branches.map((branch) => (
                                <div key={branch.name} className={styles.branchCard}>
                                    <div className={styles.branchTop}>
                                        <h3 className={styles.branchName}>{branch.name}</h3>
                                        <span className={styles.statusBadge} style={{ color: branchStatus.color, background: branchStatus.bg }}>
                                            {branchStatus.status}
                                        </span>
                                    </div>
                                    <div className={styles.branchDetails}>
                                        <div className={styles.branchRow}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                            <span>{branch.address}</span>
                                        </div>
                                        <div className={styles.branchRow}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                                            <span>{branch.phone}</span>
                                        </div>
                                        <div className={styles.branchRow}>
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                                            <span>{branch.days}, {branch.hours}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Book a Visit + Send a Message */}
                <section className="section section-alt">
                    <div className="container">
                        <div className={styles.formsGrid}>

                            {/* Book Appointment */}
                            <div className={styles.formPanel}>
                                <div className={styles.formPanelHeader}>
                                    <div className={styles.formPanelIcon} style={{ background: 'var(--primary-100)' }}>
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--primary-600)" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                    </div>
                                    <div>
                                        <h2 className={styles.formPanelTitle}>Book a Branch Visit</h2>
                                        <p className={styles.formPanelSub}>We&apos;ll confirm via WhatsApp within 1 business hour.</p>
                                    </div>
                                </div>

                                {apptSent ? (
                                    <div className={styles.successBox}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                        <h3>Appointment Request Sent!</h3>
                                        <p>Your request was forwarded to our team via WhatsApp. We&apos;ll confirm your visit shortly.</p>
                                        <button className="btn btn-secondary" onClick={() => { setApptSent(false); setAppt({ name: '', phone: '', branch: '', date: '', service: '' }); }}>Book Another</button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleApptSubmit} className={styles.form}>
                                        <div className={styles.row2}>
                                            <div className="form-group">
                                                <label className="form-label">Full Name *</label>
                                                <input className="form-input" type="text" required placeholder="Your full name" value={appt.name} onChange={setAp('name')} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Phone Number *</label>
                                                <input className="form-input" type="tel" required placeholder="0501 234 567" value={appt.phone} onChange={setAp('phone')} />
                                            </div>
                                        </div>
                                        <div className={styles.row2}>
                                            <div className="form-group">
                                                <label className="form-label">Preferred Branch *</label>
                                                <select className="form-input" required value={appt.branch} onChange={setAp('branch')}>
                                                    <option value="">Select a branch</option>
                                                    {branches.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Preferred Date *</label>
                                                <input className="form-input" type="date" required value={appt.date} onChange={setAp('date')} min={new Date().toISOString().split('T')[0]} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Service Needed *</label>
                                            <select className="form-input" required value={appt.service} onChange={setAp('service')}>
                                                <option value="">Select a service</option>
                                                {services.map(s => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                                            Confirm via WhatsApp
                                        </button>
                                    </form>
                                )}
                            </div>

                            {/* Send a Message */}
                            <div className={styles.formPanel}>
                                <div className={styles.formPanelHeader}>
                                    <div className={styles.formPanelIcon} style={{ background: 'var(--secondary-100, #e6f4ea)' }}>
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-600, #2d8a3e)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                    </div>
                                    <div>
                                        <h2 className={styles.formPanelTitle}>Send Us a Message</h2>
                                        <p className={styles.formPanelSub}>We respond within 24 hours on business days.</p>
                                    </div>
                                </div>

                                {msgSent ? (
                                    <div className={styles.successBox}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                        <h3>Message Received!</h3>
                                        <p>Thank you for reaching out. Our team will respond within 24 business hours.</p>
                                        <button className="btn btn-secondary" onClick={() => { setMsgSent(false); setMsgForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}>Send Another</button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleMsgSubmit} className={styles.form}>
                                        <div className={styles.row2}>
                                            <div className="form-group">
                                                <label className="form-label">Full Name *</label>
                                                <input className="form-input" type="text" required placeholder="Kwame Mensah" value={msgForm.name} onChange={setMsg('name')} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Email *</label>
                                                <input className="form-input" type="email" required placeholder="you@example.com" value={msgForm.email} onChange={setMsg('email')} />
                                            </div>
                                        </div>
                                        <div className={styles.row2}>
                                            <div className="form-group">
                                                <label className="form-label">Phone Number</label>
                                                <input className="form-input" type="tel" placeholder="0501 000 000" value={msgForm.phone} onChange={setMsg('phone')} />
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">Subject *</label>
                                                <input className="form-input" type="text" required placeholder="How can we help?" value={msgForm.subject} onChange={setMsg('subject')} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label">Message *</label>
                                            <textarea className="form-input" rows={5} required placeholder="Tell us more..." value={msgForm.message} onChange={setMsg('message')} />
                                        </div>
                                        <button type="submit" className="btn btn-cta" style={{ width: '100%', justifyContent: 'center' }}>
                                            Send Message
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

