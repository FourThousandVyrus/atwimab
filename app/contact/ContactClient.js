'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const branches = [
    { 
        name: 'Foase Branch (Head Office)', 
        address: 'P.O. Box 13, Foase-Atwima, Ashanti Region', 
        phone: '0501 387 040', 
        hours: '8:30 AM – 4:30 PM', 
        days: 'Monday – Friday',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Atwima+Community+Bank+Foase'
    },
    { 
        name: 'Kwadaso Branch', 
        address: 'Kwadaso, Kumasi', 
        phone: '0501 387 041', 
        hours: '8:30 AM – 4:30 PM', 
        days: 'Monday – Friday',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Atwima+Community+Bank+Kwadaso'
    },
    { 
        name: 'Patasi Branch', 
        address: 'Patasi, Kumasi', 
        phone: '0501 387 042', 
        hours: '8:30 AM – 4:30 PM', 
        days: 'Monday – Friday',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Atwima+Community+Bank+Patasi'
    },
    { 
        name: 'Mpasatia Branch', 
        address: 'Mpasatia, Ashanti Region', 
        phone: '0501 387 043', 
        hours: '8:30 AM – 4:30 PM', 
        days: 'Monday – Friday',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Atwima+Community+Bank+Mpasatia'
    },
    { 
        name: 'Allabar Branch', 
        address: 'Allabar, Kumasi', 
        phone: '0501 387 044', 
        hours: '8:30 AM – 4:30 PM', 
        days: 'Monday – Friday',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Atwima+Community+Bank+Allabar'
    },
    { 
        name: 'Daban Branch', 
        address: 'Daban, Kumasi', 
        phone: '0501 387 045', 
        hours: '8:30 AM – 4:30 PM', 
        days: 'Monday – Friday',
        mapUrl: 'https://www.google.com/maps/search/?api=1&query=Atwima+Community+Bank+Daban'
    },
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
    const day = now.getDay(); // 0 is Sunday, 6 is Saturday
    const hour = now.getHours();
    const minute = now.getMinutes();
    const time = hour + minute / 60;
    // Monday (1) to Friday (5), 8:30 AM to 4:30 PM (8.5 to 16.5)
    if (day >= 1 && day <= 5 && time >= 8.5 && time < 16.5) {
        return { status: 'Open Now', color: 'var(--secondary-500)', bg: 'var(--secondary-100)' };
    }
    return { status: 'Closed', color: '#ef4444', bg: '#fee2e2' };
}

export default function ContactClient() {
    const [msgForm, setMsgForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [msgSent, setMsgSent] = useState(false);
    const [isMsgSending, setIsMsgSending] = useState(false);
    const [msgPhoneError, setMsgPhoneError] = useState('');

    const [activeForm, setActiveForm] = useState('message'); // 'message' or 'appointment'
    
    const [appt, setAppt] = useState({ name: '', phone: '', branch: '', date: '', service: '' });
    const [apptSent, setApptSent] = useState(false);
    const [apptPhoneError, setApptPhoneError] = useState('');
    const [isApptSending, setIsApptSending] = useState(false);

    const setMsg = (k) => (e) => {
        if (k === 'phone') setMsgPhoneError('');
        setMsgForm(prev => ({ ...prev, [k]: e.target.value }));
    };
    
    const setAp = (k) => (e) => {
        if (k === 'phone') setApptPhoneError('');
        setAppt(prev => ({ ...prev, [k]: e.target.value }));
    };

    const validatePhone = (num) => {
        if (!num) return true; // Phone is optional in contact message
        const phoneRegex = /^(?:\+233|0)[235][0-9]{8}$/;
        return phoneRegex.test(num.replace(/\s+/g, ''));
    };

    const validatePhoneRequired = (num) => {
        const phoneRegex = /^(?:\+233|0)[235][0-9]{8}$/;
        return phoneRegex.test(num.replace(/\s+/g, ''));
    };

    const handleMsgSubmit = (e) => {
        e.preventDefault();
        
        if (msgForm.phone && !validatePhone(msgForm.phone)) {
            setMsgPhoneError('Please enter a valid Ghanaian phone number (e.g. 0501 387 040).');
            return;
        }

        setIsMsgSending(true);

        const msg = `Hello Atwima Community Bank!%0A%0AI would like to send a contact message:%0A%0AName: ${encodeURIComponent(msgForm.name)}%0AEmail: ${encodeURIComponent(msgForm.email)}%0APhone: ${encodeURIComponent(msgForm.phone || 'N/A')}%0ATopic: ${encodeURIComponent(msgForm.subject)}%0A%0AMessage: ${encodeURIComponent(msgForm.message)}`;
        
        // Open WhatsApp redirect
        window.open(`https://wa.me/233501387040?text=${msg}`, '_blank', 'noopener,noreferrer');
        
        setTimeout(() => {
            setMsgSent(true);
            setIsMsgSending(false);
        }, 1000);
    };

    const handleApptSubmit = (e) => {
        e.preventDefault();

        if (!validatePhoneRequired(appt.phone)) {
            setApptPhoneError('Please enter a valid Ghanaian phone number (e.g. 0501 387 040).');
            return;
        }

        setIsApptSending(true);

        const msg = `Hello Atwima Community Bank!%0A%0AI would like to book a branch visit:%0A%0AName: ${encodeURIComponent(appt.name)}%0APhone: ${encodeURIComponent(appt.phone)}%0ABranch: ${encodeURIComponent(appt.branch)}%0APreferred Date: ${encodeURIComponent(appt.date)}%0AService: ${encodeURIComponent(appt.service)}%0A%0APlease confirm my appointment. Thank you!`;
        
        window.open(`https://wa.me/233501387040?text=${msg}`, '_blank', 'noopener,noreferrer');
        
        setTimeout(() => {
            setApptSent(true);
            setIsApptSending(false);
        }, 1000);
    };

    const branchStatus = useMemo(() => getBranchStatus(), []);

    return (
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
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                            <span>0501 387 040</span>
                        </div>
                        <div className={styles.heroMetaItem}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                            <span style={{ color: branchStatus.color, fontWeight: 700 }}>{branchStatus.status}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Branch Locations */}
            <section className="section" id="branches-list">
                <div className="container">
                    <div className="section-header centered">
                        <span className="section-label">Our Branches</span>
                        <h2 className="section-title">Find Us Near You</h2>
                    </div>
                    <div className={styles.branchGrid}>
                        {branches.map((branch) => (
                            <div key={branch.name} className={styles.branchCard}>
                                <div className={styles.branchDetails}>
                                    <div className={styles.branchTop}>
                                        <h3 className={styles.branchName}>{branch.name}</h3>
                                        <span className={styles.statusBadge} style={{ color: branchStatus.color, background: branchStatus.bg }}>
                                            {branchStatus.status}
                                        </span>
                                    </div>
                                    <div className={styles.branchRow}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                        <span>{branch.address}</span>
                                    </div>
                                    <div className={styles.branchRow}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                                        <span>{branch.phone}</span>
                                    </div>
                                    <div className={styles.branchRow}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                                        <span>{branch.days}, {branch.hours}</span>
                                    </div>
                                </div>
                                <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className={styles.branchMapLink}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
                                    View Google Maps Direction
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Forms section */}
            <section className="section section-alt" id="contact-forms">
                <div className="container">
                    
                    {/* Form Switcher Button Group */}
                    <div className={styles.formToggleWrapper}>
                        <div className={styles.formToggle} role="tablist" aria-label="Contact Methods">
                            <button 
                                role="tab"
                                aria-selected={activeForm === 'message'}
                                aria-controls="message-panel"
                                id="tab-message"
                                className={`${styles.toggleBtn} ${activeForm === 'message' ? styles.active : ''}`}
                                onClick={() => setActiveForm('message')}
                            >
                                Send Us a Message
                            </button>
                            <button 
                                role="tab"
                                aria-selected={activeForm === 'appointment'}
                                aria-controls="appointment-panel"
                                id="tab-appointment"
                                className={`${styles.toggleBtn} ${activeForm === 'appointment' ? styles.active : ''}`}
                                onClick={() => setActiveForm('appointment')}
                            >
                                Book a Branch Visit
                            </button>
                            <div className={`${styles.toggleSlider} ${activeForm === 'appointment' ? styles.slideRight : ''}`} aria-hidden="true"></div>
                        </div>
                    </div>

                    <div className={`${styles.cardContainer} ${activeForm === 'appointment' ? styles.isFlipped : ''}`}>
                        <div className={styles.cardInner}>
                            
                            {/* Front Side: Message Form */}
                            <div 
                                id="message-panel"
                                role="tabpanel"
                                aria-labelledby="tab-message"
                                className={`${styles.cardSide} ${styles.cardFront}`}
                            >
                                <div className={styles.formPanel}>
                                    <div className={styles.formPanelHeader}>
                                        <div className={styles.formPanelIcon} style={{ background: 'var(--secondary-100)', color: 'var(--secondary-700)' }} aria-hidden="true">
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                        </div>
                                        <div>
                                            <h2 className={styles.formPanelTitle}>Send Us a Message</h2>
                                            <p className={styles.formPanelSub}>Submit your query below to launch a pre-filled WhatsApp message directly to our HR/Service line.</p>
                                        </div>
                                    </div>

                                    {msgSent ? (
                                        <div className={styles.successBox}>
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                            <h3>Message Forwarded to WhatsApp!</h3>
                                            <p>Please send the message in the WhatsApp window that opened to complete submission.</p>
                                            <button className="btn btn-secondary btn-sm" onClick={() => { setMsgSent(false); setMsgForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}>Send Another</button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleMsgSubmit} className={styles.form} noValidate>
                                            <div className={styles.row2}>
                                                <div className="form-group">
                                                    <label htmlFor="msg-name" className="form-label">Full Name *</label>
                                                    <input id="msg-name" className="form-input" type="text" required aria-required="true" placeholder="e.g. Kwame Mensah" value={msgForm.name} onChange={setMsg('name')} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="msg-email" className="form-label">Email *</label>
                                                    <input id="msg-email" className="form-input" type="email" required aria-required="true" placeholder="you@example.com" value={msgForm.email} onChange={setMsg('email')} />
                                                </div>
                                            </div>
                                            <div className={styles.row2}>
                                                <div className="form-group">
                                                    <label htmlFor="msg-phone" className="form-label">Phone Number</label>
                                                    <input 
                                                        id="msg-phone" 
                                                        className={`form-input ${msgPhoneError ? styles.inputError : ''}`}
                                                        type="tel" 
                                                        placeholder="0501 387 040" 
                                                        value={msgForm.phone} 
                                                        onChange={setMsg('phone')} 
                                                    />
                                                    {msgPhoneError && <span className={styles.errorText} role="alert">{msgPhoneError}</span>}
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="msg-subject" className="form-label">Topic of Interest *</label>
                                                    <select id="msg-subject" className="form-input" required aria-required="true" value={msgForm.subject} onChange={setMsg('subject')}>
                                                        <option value="">Select a topic</option>
                                                        <option value="Account Opening">Open a New Account</option>
                                                        <option value="Loan Inquiry">Loan Application / Inquiry</option>
                                                        <option value="Investments">Fixed Deposit &amp; Investments</option>
                                                        <option value="Remittance">Western Union / Remittance</option>
                                                        <option value="General Enquiry">General Enquiry</option>
                                                        <option value="Feedback">Feedback &amp; Suggestions</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="msg-text" className="form-label">Message *</label>
                                                <textarea id="msg-text" className="form-input" rows={5} required aria-required="true" placeholder="Tell us more..." value={msgForm.message} onChange={setMsg('message')} />
                                            </div>
                                            
                                            <div className={styles.submissionNotice} id="msg-wa-describe">
                                                Note: Clicking submit will open WhatsApp. Send the pre-formatted text to chat with our client support team.
                                            </div>

                                            <button 
                                                type="submit" 
                                                className="btn btn-primary" 
                                                disabled={isMsgSending} 
                                                style={{ width: '100%', justifyContent: 'center' }}
                                                aria-describedby="msg-wa-describe"
                                            >
                                                {isMsgSending ? 'Redirecting...' : 'Send via WhatsApp'}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>

                            {/* Back Side: Appointment Form */}
                            <div 
                                id="appointment-panel"
                                role="tabpanel"
                                aria-labelledby="tab-appointment"
                                className={`${styles.cardSide} ${styles.cardBack}`}
                            >
                                <div className={styles.formPanel}>
                                    <div className={styles.formPanelHeader}>
                                        <div className={styles.formPanelIcon} style={{ background: 'var(--primary-100)', color: 'var(--primary-600)' }} aria-hidden="true">
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                        </div>
                                        <div>
                                            <h2 className={styles.formPanelTitle}>Book a Branch Visit</h2>
                                            <p className={styles.formPanelSub}>Skip the queue. Select a branch, date, and service, and confirm your booking via WhatsApp.</p>
                                        </div>
                                    </div>

                                    {apptSent ? (
                                        <div className={styles.successBox}>
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                                            <h3>Appointment Request Formulated!</h3>
                                            <p>Please send the pre-filled message in the WhatsApp window to secure your booking.</p>
                                            <button className="btn btn-secondary btn-sm" onClick={() => { setApptSent(false); setAppt({ name: '', phone: '', branch: '', date: '', service: '' }); }}>Book Another</button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleApptSubmit} className={styles.form} noValidate>
                                            <div className={styles.row2}>
                                                <div className="form-group">
                                                    <label htmlFor="appt-name" className="form-label">Full Name *</label>
                                                    <input id="appt-name" className="form-input" type="text" required aria-required="true" placeholder="Your full name" value={appt.name} onChange={setAp('name')} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="appt-phone" className="form-label">Phone Number *</label>
                                                    <input 
                                                        id="appt-phone" 
                                                        className={`form-input ${apptPhoneError ? styles.inputError : ''}`}
                                                        type="tel" 
                                                        required 
                                                        aria-required="true"
                                                        placeholder="0501 387 040" 
                                                        value={appt.phone} 
                                                        onChange={setAp('phone')} 
                                                    />
                                                    {apptPhoneError && <span className={styles.errorText} role="alert">{apptPhoneError}</span>}
                                                </div>
                                            </div>
                                            <div className={styles.row2}>
                                                <div className="form-group">
                                                    <label htmlFor="appt-branch" className="form-label">Preferred Branch *</label>
                                                    <select id="appt-branch" className="form-input" required aria-required="true" value={appt.branch} onChange={setAp('branch')}>
                                                        <option value="">Select a branch</option>
                                                        {branches.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="appt-date" className="form-label">Preferred Date *</label>
                                                    <input 
                                                        id="appt-date" 
                                                        className="form-input" 
                                                        type="date" 
                                                        required 
                                                        aria-required="true"
                                                        value={appt.date} 
                                                        onChange={setAp('date')} 
                                                        min={new Date().toISOString().split('T')[0]} 
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="appt-service" className="form-label">Service Needed *</label>
                                                <select id="appt-service" className="form-input" required aria-required="true" value={appt.service} onChange={setAp('service')}>
                                                    <option value="">Select a service</option>
                                                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                                                </select>
                                            </div>

                                            <div className={styles.submissionNotice} id="appt-wa-describe">
                                                Note: Booking uses WhatsApp. Confirm the details by sending the generated text to complete scheduling.
                                            </div>

                                            <button 
                                                type="submit" 
                                                className="btn btn-primary" 
                                                disabled={isApptSending} 
                                                style={{ width: '100%', justifyContent: 'center' }}
                                                aria-describedby="appt-wa-describe"
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 'var(--space-1)' }} aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                                                {isApptSending ? 'Booking...' : 'Confirm via WhatsApp'}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
