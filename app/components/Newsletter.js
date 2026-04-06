'use client';
import { useState } from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.iconWrap}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                        </svg>
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>Stay in the Loop</h3>
                        <p className={styles.text}>Get the latest on rates, new products, and community events. Join thousands of Atwima customers staying informed.</p>
                    </div>
                    <div className={styles.formWrap}>
                        {submitted ? (
                            <div className={styles.success}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                Thank you! You&apos;ll hear from us soon.
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className={styles.form}>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={styles.input}
                                    required
                                    aria-label="Email address"
                                />
                                <button type="submit" className="btn btn-primary">Subscribe</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
