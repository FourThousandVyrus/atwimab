'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import BookAppointment from '../components/BookAppointment';
import Link from 'next/link';
import styles from './page.module.css';

/* ── Loan repayment (monthly annuity) ── */
function calcLoan(principal, annualRate, months) {
    if (!principal || !annualRate || !months) return null;
    const P = parseFloat(principal);
    const r = parseFloat(annualRate) / 100 / 12;
    const n = parseInt(months, 10);
    if (r === 0) return { monthly: P / n, total: P, interest: 0 };
    const monthly = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    return { monthly, total, interest: total - P };
}

/* ── Fixed deposit ── */
function calcFD(principal, annualRate, months) {
    if (!principal || !annualRate || !months) return null;
    const P = parseFloat(principal);
    const r = parseFloat(annualRate) / 100;
    const t = parseInt(months, 10) / 12;
    const maturity = P * (1 + r * t);
    return { maturity, interest: maturity - P };
}

const fmt = (n) => new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS', minimumFractionDigits: 2 }).format(n);

export default function CalculatorsPage() {
    // Loan calc state
    const [loan, setLoan] = useState({ principal: '', rate: '', months: '12' });
    const [fd, setFd] = useState({ principal: '', rate: '22', months: '12' });
    const [susu, setSusu] = useState({ daily: '', days: '90' });

    const loanResult = calcLoan(loan.principal, loan.rate, loan.months);
    const fdResult = calcFD(fd.principal, fd.rate, fd.months);
    const susuTotal = susu.daily && susu.days ? parseFloat(susu.daily) * parseInt(susu.days, 10) : null;

    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <span className="section-label">Financial Tools</span>
                        <h1>Financial Calculators</h1>
                        <p className={styles.heroSub}>Plan smarter with our free tools. No login required — just enter your numbers and get instant results.</p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className={styles.grid}>

                            {/* ── Loan Calculator ── */}
                            <div className={styles.calcCard}>
                                <div className={styles.calcIcon} style={{ background: 'var(--accent-100)', color: 'var(--accent-700)' }}>💸</div>
                                <h2 className={styles.calcTitle}>Loan Repayment Calculator</h2>
                                <p className={styles.calcDesc}>Estimate your monthly instalment for any loan amount and term.</p>

                                <div className="form-group">
                                    <label className="form-label">Loan Amount (GH₵)</label>
                                    <input className="form-input" type="number" min="100" placeholder="e.g. 5000"
                                        value={loan.principal} onChange={e => setLoan(p => ({ ...p, principal: e.target.value }))} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Annual Interest Rate (%)</label>
                                    <input className="form-input" type="number" min="1" max="100" step="0.5" placeholder="e.g. 28"
                                        value={loan.rate} onChange={e => setLoan(p => ({ ...p, rate: e.target.value }))} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Loan Term (months)</label>
                                    <select className="form-input" value={loan.months} onChange={e => setLoan(p => ({ ...p, months: e.target.value }))}>
                                        {[3, 6, 12, 18, 24, 36, 48, 60].map(m => <option key={m} value={m}>{m} months</option>)}
                                    </select>
                                </div>

                                {loanResult ? (
                                    <div className={styles.result}>
                                        <div className={styles.resultItem}>
                                            <span>Monthly Payment</span>
                                            <strong className={styles.highlight}>{fmt(loanResult.monthly)}</strong>
                                        </div>
                                        <div className={styles.resultItem}>
                                            <span>Total Repayment</span>
                                            <strong>{fmt(loanResult.total)}</strong>
                                        </div>
                                        <div className={styles.resultItem}>
                                            <span>Total Interest</span>
                                            <strong>{fmt(loanResult.interest)}</strong>
                                        </div>
                                    </div>
                                ) : <div className={styles.placeholder}>Enter details above to see results</div>}

                                <Link href="/loans" className="btn btn-secondary" style={{ width: '100%', marginTop: 'var(--space-4)', justifyContent: 'center' }}>View Loan Products</Link>
                            </div>

                            {/* ── Fixed Deposit Calculator ── */}
                            <div className={styles.calcCard}>
                                <div className={styles.calcIcon} style={{ background: 'var(--primary-100)', color: 'var(--primary-600)' }}>📈</div>
                                <h2 className={styles.calcTitle}>Fixed Deposit Calculator</h2>
                                <p className={styles.calcDesc}>See how much your deposit will earn at maturity.</p>

                                <div className="form-group">
                                    <label className="form-label">Deposit Amount (GH₵)</label>
                                    <input className="form-input" type="number" min="100" placeholder="e.g. 10000"
                                        value={fd.principal} onChange={e => setFd(p => ({ ...p, principal: e.target.value }))} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Annual Interest Rate (%)</label>
                                    <input className="form-input" type="number" min="1" max="100" step="0.5"
                                        value={fd.rate} onChange={e => setFd(p => ({ ...p, rate: e.target.value }))} />
                                    <small style={{ color: 'var(--secondary-600)', fontSize: 'var(--text-xs)', marginTop: 'var(--space-1)', display: 'block' }}>
                                        12-month FD currently at 22% p.a.
                                    </small>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Term</label>
                                    <select className="form-input" value={fd.months} onChange={e => setFd(p => ({ ...p, months: e.target.value }))}>
                                        <option value="6">6 months</option>
                                        <option value="12">12 months</option>
                                        <option value="24">24 months</option>
                                    </select>
                                </div>

                                {fdResult && fd.principal ? (
                                    <div className={styles.result}>
                                        <div className={styles.resultItem}>
                                            <span>Interest Earned</span>
                                            <strong className={styles.highlight}>{fmt(fdResult.interest)}</strong>
                                        </div>
                                        <div className={styles.resultItem}>
                                            <span>Maturity Value</span>
                                            <strong>{fmt(fdResult.maturity)}</strong>
                                        </div>
                                    </div>
                                ) : <div className={styles.placeholder}>Enter your deposit amount to see returns</div>}

                                <Link href="/investments" className="btn btn-secondary" style={{ width: '100%', marginTop: 'var(--space-4)', justifyContent: 'center' }}>View Investment Products</Link>
                            </div>

                            {/* ── Susu Calculator ── */}
                            <div className={styles.calcCard}>
                                <div className={styles.calcIcon} style={{ background: 'var(--secondary-100)', color: 'var(--secondary-700)' }}>🪙</div>
                                <h2 className={styles.calcTitle}>Susu Savings Calculator</h2>
                                <p className={styles.calcDesc}>Plan your daily Susu contributions and see your projected savings.</p>

                                <div className="form-group">
                                    <label className="form-label">Daily Contribution (GH₵)</label>
                                    <input className="form-input" type="number" min="1" step="0.5" placeholder="e.g. 10"
                                        value={susu.daily} onChange={e => setSusu(p => ({ ...p, daily: e.target.value }))} />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Number of Days</label>
                                    <div className={styles.presets}>
                                        {[30, 60, 90, 180, 365].map(d => (
                                            <button key={d} type="button"
                                                className={`${styles.preset} ${susu.days == d ? styles.presetActive : ''}`}
                                                onClick={() => setSusu(p => ({ ...p, days: String(d) }))}>
                                                {d}d
                                            </button>
                                        ))}
                                    </div>
                                    <input className="form-input" type="number" min="1" max="365" placeholder="Custom days"
                                        value={susu.days} onChange={e => setSusu(p => ({ ...p, days: e.target.value }))}
                                        style={{ marginTop: 'var(--space-2)' }} />
                                </div>

                                {susuTotal !== null && !isNaN(susuTotal) && susuTotal > 0 ? (
                                    <div className={styles.result}>
                                        <div className={styles.resultItem}>
                                            <span>Total Collected</span>
                                            <strong className={styles.highlight}>{fmt(susuTotal)}</strong>
                                        </div>
                                        <div className={styles.resultItem}>
                                            <span>Daily × Days</span>
                                            <strong>{fmt(parseFloat(susu.daily))} × {susu.days}</strong>
                                        </div>
                                    </div>
                                ) : <div className={styles.placeholder}>Enter daily amount and days to see your total</div>}

                                <Link href="/personal-banking#susu-account" className="btn btn-secondary" style={{ width: '100%', marginTop: 'var(--space-4)', justifyContent: 'center' }}>Open a Susu Account</Link>
                            </div>

                        </div>

                        <div className={styles.disclaimer}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                            Calculators provide indicative estimates only. Actual rates and terms may vary. Please <Link href="/contact">contact a branch</Link> for personalised advice.
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
            <BookAppointment />
        </>
    );
}
