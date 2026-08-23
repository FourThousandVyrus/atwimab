'use client';
import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';
import styles from './Newsletter.module.css';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
    const [errorMsg, setErrorMsg] = useState('');
    const ref = useScrollReveal({ threshold: 0.2 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('submitting');
        setErrorMsg('');

        // Simulate API call
        try {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (email.toLowerCase() === 'fail@test.com') {
                        reject(new Error('This email is blacklisted or invalid.'));
                    } else {
                        resolve();
                    }
                }, 1000);
            });
            setStatus('success');
            setEmail('');
        } catch (err) {
            setStatus('error');
            setErrorMsg(err.message || 'An error occurred. Please try again.');
        }
    };

    return (
        <section id="newsletter" className={styles.section}>
            <div className="container">
                <div className={`${styles.inner} reveal`} ref={ref}>
                    <div className={styles.iconWrap}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                        </svg>
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Stay in the Loop</h2>
                        <p className={styles.text}>Get the latest on rates, new products, and community events. Join thousands of Atwima customers staying informed.</p>
                    </div>
                    <div className={styles.formWrap}>
                        <div aria-live="polite">
                            {status === 'success' ? (
                                <div className={styles.success}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                    Thank you! You&apos;ll hear from us soon.
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form} aria-busy={status === 'submitting'}>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                                            <input
                                                type="email"
                                                placeholder="Your email address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className={styles.input}
                                                required
                                                aria-required="true"
                                                disabled={status === 'submitting'}
                                                aria-label="Email address"
                                            />
                                            <button 
                                                type="submit" 
                                                className="btn btn-primary"
                                                disabled={status === 'submitting'}
                                            >
                                                {status === 'submitting' ? (
                                                    <span className={styles.spinner} aria-hidden="true"></span>
                                                ) : (
                                                    'Subscribe'
                                                )}
                                            </button>
                                        </div>
                                        {status === 'error' && (
                                            <div className={styles.error} role="alert">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                                                {errorMsg}
                                            </div>
                                        )}
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
