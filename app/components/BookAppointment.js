'use client';
import { useState } from 'react';
import styles from './BookAppointment.module.css';

const branches = [
    'Foase (Head Office)',
    'Twedie Branch',
    'Kwadaso Branch',
    'Abuakwa Branch',
    'Nkawie Branch',
    'Toase Branch',
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

    const set = (k) => (e) => setForm(prev => ({ ...prev, [k]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        const msg = `Hello Atwima Rural Bank!%0A%0AI would like to book an appointment:%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ABranch: ${encodeURIComponent(form.branch)}%0APreferred Date: ${encodeURIComponent(form.date)}%0AService: ${encodeURIComponent(form.service)}%0A%0APlease confirm my appointment. Thank you!`;
        window.open(`https://wa.me/233501387040?text=${msg}`, '_blank', 'noopener,noreferrer');
        setOpen(false);
        setForm({ name: '', phone: '', branch: '', date: '', service: '' });
    };

    return (
        <>
            <button
                className={styles.trigger}
                onClick={() => setOpen(true)}
                aria-label="Book a branch appointment"
                title="Book an Appointment"
            >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className={styles.triggerLabel}>Book Visit</span>
            </button>

            {open && (
                <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && setOpen(false)} role="dialog" aria-modal="true" aria-labelledby="appt-title">
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <div>
                                <h2 id="appt-title" className={styles.modalTitle}>Book a Branch Visit</h2>
                                <p className={styles.modalSub}>We&apos;ll confirm via WhatsApp within 1 business hour.</p>
                            </div>
                            <button className={styles.close} onClick={() => setOpen(false)} aria-label="Close modal">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.row}>
                                <div className="form-group">
                                    <label className="form-label">Full Name *</label>
                                    <input className="form-input" type="text" required placeholder="Your full name" value={form.name} onChange={set('name')} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Phone Number *</label>
                                    <input className="form-input" type="tel" required placeholder="e.g. 0501 234 567" value={form.phone} onChange={set('phone')} />
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className="form-group">
                                    <label className="form-label">Preferred Branch *</label>
                                    <select className="form-input" required value={form.branch} onChange={set('branch')}>
                                        <option value="">Select a branch</option>
                                        {branches.map(b => <option key={b} value={b}>{b}</option>)}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Preferred Date *</label>
                                    <input
                                        className="form-input"
                                        type="date"
                                        required
                                        value={form.date}
                                        onChange={set('date')}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Service Needed *</label>
                                <select className="form-input" required value={form.service} onChange={set('service')}>
                                    <option value="">Select a service</option>
                                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>

                            <div className={styles.modalFooter}>
                                <p className={styles.waNote}>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Confirmation sent via WhatsApp
                                </p>
                                <button type="submit" className="btn btn-primary btn-lg">
                                    Confirm Appointment
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
