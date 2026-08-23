'use client';

import { useState } from 'react';
import styles from './page.module.css';

const values = [
    { icon: '🤝', title: 'Community First', text: 'We believe in growing together with the communities we serve across the Ashanti Region.' },
    { icon: '📈', title: 'Growth Mindset', text: 'We encourage continuous learning and professional development for all team members.' },
    { icon: '🔒', title: 'Integrity', text: 'Honesty and transparency in every interaction with customers and colleagues.' },
    { icon: '⭐', title: 'Excellence', text: 'We strive to deliver exceptional service and exceed expectations every day.' },
];

export default function CareersClient() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', role: '', message: '' });
    const [sent, setSent] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const set = (k) => (e) => {
        if (k === 'phone') {
            setPhoneError('');
        }
        setForm(prev => ({ ...prev, [k]: e.target.value }));
    };

    const validatePhone = (num) => {
        // Matches standard Ghanaian formats: e.g. 0241234567, 0501234567, +233241234567, etc.
        const phoneRegex = /^(?:\+233|0)[235][0-9]{8}$/;
        return phoneRegex.test(num.replace(/\s+/g, ''));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validatePhone(form.phone)) {
            setPhoneError('Please enter a valid Ghanaian phone number (e.g. 0501 387 040).');
            return;
        }

        setSubmitting(true);

        const text = `Hello Atwima Community Bank!%0A%0AI am interested in a career opportunity.%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0APhone: ${encodeURIComponent(form.phone)}%0ARole of Interest: ${encodeURIComponent(form.role)}%0A%0AMessage: ${encodeURIComponent(form.message)}%0A%0A[Note: I will now attach my PDF CV to this chat]`;
        
        // Open WhatsApp
        window.open(`https://wa.me/233501387040?text=${text}`, '_blank', 'noopener,noreferrer');
        
        setTimeout(() => {
            setSent(true);
            setSubmitting(false);
        }, 1000);
    };

    return (
        <main>
            <section className={styles.hero}>
                <div className="container">
                    <span className="section-label" style={{ color: 'var(--primary-200)' }}>Join the Team</span>
                    <h1>Careers at Atwima Community Bank</h1>
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
                                <span className={styles.valueIcon} aria-hidden="true">{v.icon}</span>
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
                        <div className={styles.noVacancyIcon} aria-hidden="true">🏦</div>
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
                            <p>Fill out the form and submit to open WhatsApp. Please attach your PDF CV to the chat to complete your application.</p>
                            
                            <div className={styles.infoItems}>
                                <div className={styles.infoItem}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-600)" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                                    <span>HR Department: 0501 387 040</span>
                                </div>
                                <div className={styles.infoItem}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary-600)" strokeWidth="2" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                                    <span>
                                        Email Fallback: <a href="mailto:info@atwimabank.com?subject=Job%20Application%20-%20Expression%20of%20Interest" className={styles.mailLink}>info@atwimabank.com</a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.formCard}>
                            {sent ? (
                                <div className={styles.success}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    <h3>Submission Opened in WhatsApp!</h3>
                                    <p>Please remember to attach your CV document in the WhatsApp chat window that opened.</p>
                                    <button type="button" className="btn btn-secondary btn-sm" style={{ marginTop: 'var(--space-4)' }} onClick={() => setSent(false)}>
                                        Submit Another Application
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="form-group">
                                        <label htmlFor="name-input" className="form-label">Full Name *</label>
                                        <input 
                                            id="name-input"
                                            className="form-input" 
                                            type="text" 
                                            required 
                                            aria-required="true"
                                            value={form.name} 
                                            onChange={set('name')} 
                                            placeholder="Your full name" 
                                        />
                                    </div>
                                    <div className={styles.row}>
                                        <div className="form-group">
                                            <label htmlFor="email-input" className="form-label">Email *</label>
                                            <input 
                                                id="email-input"
                                                className="form-input" 
                                                type="email" 
                                                required 
                                                aria-required="true"
                                                value={form.email} 
                                                onChange={set('email')} 
                                                placeholder="your@email.com" 
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone-input" className="form-label">Phone *</label>
                                            <input 
                                                id="phone-input"
                                                className={`form-input ${phoneError ? styles.inputError : ''}`}
                                                type="tel" 
                                                required 
                                                aria-required="true"
                                                value={form.phone} 
                                                onChange={set('phone')} 
                                                placeholder="0501 387 040" 
                                            />
                                            {phoneError && <span className={styles.errorText} role="alert">{phoneError}</span>}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="role-input" className="form-label">Role of Interest</label>
                                        <input 
                                            id="role-input"
                                            className="form-input" 
                                            type="text" 
                                            value={form.role} 
                                            onChange={set('role')} 
                                            placeholder="e.g. Customer Support, Credit Officer..." 
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-input" className="form-label">Brief Message *</label>
                                        <textarea 
                                            id="message-input"
                                            className="form-input" 
                                            required 
                                            aria-required="true"
                                            rows={4} 
                                            value={form.message} 
                                            onChange={set('message')} 
                                            placeholder="Tell us about your qualifications..." 
                                        />
                                    </div>
                                    
                                    <div className={styles.submissionNotice} id="whatsapp-describe">
                                        Note: Clicking submit will launch WhatsApp. **Please remember to manually attach your PDF CV** in the chat window to finalize your application.
                                    </div>

                                    <button 
                                        type="submit" 
                                        className="btn btn-primary" 
                                        style={{ width: '100%', justifyContent: 'center' }}
                                        disabled={submitting}
                                        aria-describedby="whatsapp-describe"
                                    >
                                        {submitting ? 'Redirecting...' : 'Submit via WhatsApp'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
