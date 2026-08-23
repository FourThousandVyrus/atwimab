'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './BookAppointment.module.css';

const branches = [
    'Foase Branch (Head Office)',
    'Kwadaso Branch',
    'Patasi Branch',
    'Mpasatia Branch',
    'Allabar Branch',
    'Daban Branch',
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

export default function BookAppointment() {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({ name: '', phone: '', branch: '', date: '', service: '' });
    const [phoneError, setPhoneError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const triggerRef = useRef(null);
    const modalRef = useRef(null);
    const wasOpen = useRef(false);

    const setVal = (k) => (e) => {
        if (k === 'phone') setPhoneError('');
        setForm(prev => ({ ...prev, [k]: e.target.value }));
    };

    const validatePhone = (num) => {
        const phoneRegex = /^(?:\+233|0)[235][0-9]{8}$/;
        return phoneRegex.test(num.replace(/\s+/g, ''));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validatePhone(form.phone)) {
            setPhoneError('Please enter a valid Ghanaian phone number (e.g. 0501 387 040).');
            return;
        }

        setIsSubmitting(true);

        const msg = `Hello Atwima Community Bank!%0A%0AI would like to book an appointment:%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ABranch: ${encodeURIComponent(form.branch)}%0APreferred Date: ${encodeURIComponent(form.date)}%0AService: ${encodeURIComponent(form.service)}%0A%0APlease confirm my appointment. Thank you!`;
        
        window.open(`https://wa.me/233501387040?text=${msg}`, '_blank', 'noopener,noreferrer');
        
        setTimeout(() => {
            setOpen(false);
            setIsSubmitting(false);
            setForm({ name: '', phone: '', branch: '', date: '', service: '' });
            setPhoneError('');
        }, 1200);
    };

    // Focus Trap & Refocus on Trigger when modal closes
    useEffect(() => {
        if (open) {
            wasOpen.current = true;
            // Focus the close button or first input when modal opens
            const focusables = modalRef.current?.querySelectorAll('input, select, button');
            if (focusables && focusables.length > 0) {
                focusables[1]?.focus(); // focus first input field (Full Name)
            }

            const handleKeyDown = (e) => {
                if (e.key === 'Escape') {
                    if (!isSubmitting) setOpen(false);
                    return;
                }
                if (e.key === 'Tab') {
                    if (!modalRef.current) return;
                    const focusList = modalRef.current.querySelectorAll('input, select, button');
                    if (focusList.length === 0) return;
                    const first = focusList[0]; // close button
                    const last = focusList[focusList.length - 1]; // submit button
                    if (e.shiftKey) {
                        if (document.activeElement === first) {
                            last.focus();
                            e.preventDefault();
                        }
                    } else {
                        if (document.activeElement === last) {
                            first.focus();
                            e.preventDefault();
                        }
                    }
                }
            };
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        } else {
            if (wasOpen.current) {
                // Return focus to the button that triggered the modal only when closing
                triggerRef.current?.focus();
                wasOpen.current = false;
            }
        }
    }, [open, isSubmitting]);

    return (
        <>
            <button
                ref={triggerRef}
                className={styles.trigger}
                onClick={() => setOpen(true)}
                aria-label="Book a branch appointment"
                title="Book an Appointment"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className={styles.triggerLabel}>Book Visit</span>
            </button>

            {open && (
                <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && !isSubmitting && setOpen(false)} role="dialog" aria-modal="true" aria-labelledby="appt-title">
                    <div className={styles.modal} ref={modalRef}>
                        <div className={styles.modalHeader}>
                            <div>
                                <h2 id="appt-title" className={styles.modalTitle}>Book a Branch Visit</h2>
                                <p className={styles.modalSub}>We&apos;ll confirm via WhatsApp within 1 business hour.</p>
                            </div>
                            <button className={styles.close} onClick={() => !isSubmitting && setOpen(false)} aria-label="Close modal" disabled={isSubmitting}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form} noValidate>
                            <div className={styles.row}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="modal-name">Full Name *</label>
                                    <input id="modal-name" className="form-input" type="text" required aria-required="true" placeholder="Your full name" value={form.name} onChange={setVal('name')} disabled={isSubmitting} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="modal-phone">Phone Number *</label>
                                    <input 
                                        id="modal-phone" 
                                        className={`form-input ${phoneError ? styles.inputError : ''}`}
                                        type="tel" 
                                        required 
                                        aria-required="true"
                                        placeholder="0501 387 040" 
                                        value={form.phone} 
                                        onChange={setVal('phone')} 
                                        disabled={isSubmitting}
                                    />
                                    {phoneError && <span className={styles.errorText} role="alert">{phoneError}</span>}
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="modal-branch">Preferred Branch *</label>
                                    <select id="modal-branch" className="form-input" required aria-required="true" value={form.branch} onChange={setVal('branch')} disabled={isSubmitting}>
                                        <option value="">Select a branch</option>
                                        {branches.map(b => <option key={b} value={b}>{b}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="modal-date">Preferred Date *</label>
                                    <input
                                        id="modal-date"
                                        className="form-input"
                                        type="date"
                                        required
                                        aria-required="true"
                                        value={form.date}
                                        onChange={setVal('date')}
                                        min={new Date().toISOString().split('T')[0]}
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="modal-service">Service Needed *</label>
                                <select id="modal-service" className="form-input" required aria-required="true" value={form.service} onChange={setVal('service')} disabled={isSubmitting}>
                                    <option value="">Select a service</option>
                                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>

                            <div className={styles.modalFooter}>
                                <p className={styles.waNote} id="modal-wa-desc">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Opens WhatsApp to send details.
                                </p>
                                <button 
                                    type="submit" 
                                    className="btn btn-primary btn-lg" 
                                    disabled={isSubmitting}
                                    aria-describedby="modal-wa-desc"
                                >
                                    {isSubmitting ? 'Redirecting...' : 'Confirm Appointment'}
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
