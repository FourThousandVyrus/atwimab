'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './SusuCalculator.module.css';

export default function SusuCalculator() {
    const [daily, setDaily] = useState('');
    const [days, setDays] = useState('');

    const total = daily && days ? parseFloat(daily) * parseInt(days, 10) : null;

    const formatGHS = (n) =>
        new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS', minimumFractionDigits: 2 }).format(n);

    const percent = total ? Math.min((total / 5000) * 100, 100) : 0;

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Explainer */}
                    <div className={styles.explainer}>
                        <span className="section-label">Susu Planner</span>
                        <h2 className={styles.title}>Try Our Susu Savings Planner</h2>
                        <p className={styles.desc}>
                            Susu is a time-honoured savings tradition in Ghana. At Atwima Rural Bank, our Susu Account lets you save small amounts daily and build toward your goals — with our collectors visiting you directly.
                        </p>
                        <div className={styles.steps}>
                            <div className={styles.step}>
                                <div className={styles.stepNum}>1</div>
                                <div>
                                    <strong>Set your daily amount</strong>
                                    <p>Decide how much you can save each day — even GH₵2 adds up fast.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNum}>2</div>
                                <div>
                                    <strong>Our collector visits you</strong>
                                    <p>No need to come to the branch. We come to your shop or home.</p>
                                </div>
                            </div>
                            <div className={styles.step}>
                                <div className={styles.stepNum}>3</div>
                                <div>
                                    <strong>Watch your savings grow</strong>
                                    <p>Your money is safe in your Atwima Susu account, earning interest.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Calculator */}
                    <div className={styles.calcCard}>
                        <div className={styles.calcHeader}>
                            <span className={styles.calcIcon}>🪙</span>
                            <span className={styles.calcTitle}>Susu Savings Calculator</span>
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="susu-daily">
                                Daily savings amount (GH₵)
                            </label>
                            <div className={styles.inputWrap}>
                                <span className={styles.prefix}>₵</span>
                                <input
                                    id="susu-daily"
                                    type="number"
                                    min="1"
                                    step="0.5"
                                    placeholder="e.g. 10"
                                    value={daily}
                                    onChange={(e) => setDaily(e.target.value)}
                                    className={styles.input}
                                />
                            </div>
                        </div>

                        <div className={styles.inputGroup}>
                            <label className={styles.label} htmlFor="susu-days">
                                Number of days
                            </label>
                            <div className={styles.presets}>
                                {[30, 60, 90, 180, 365].map(d => (
                                    <button
                                        key={d}
                                        type="button"
                                        className={`${styles.preset} ${days == d ? styles.presetActive : ''}`}
                                        onClick={() => setDays(String(d))}
                                    >
                                        {d}d
                                    </button>
                                ))}
                            </div>
                            <input
                                id="susu-days"
                                type="number"
                                min="1"
                                max="365"
                                placeholder="Or enter custom days"
                                value={days}
                                onChange={(e) => setDays(e.target.value)}
                                className={styles.input}
                                style={{ marginTop: 'var(--space-2)' }}
                            />
                        </div>

                        {total !== null && !isNaN(total) && total > 0 ? (
                            <div className={styles.result}>
                                <div className={styles.resultLabel}>Your projected savings</div>
                                <div className={styles.resultAmount}>{formatGHS(total)}</div>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressFill} style={{ width: `${percent}%` }}></div>
                                </div>
                                <div className={styles.progressLabel}>
                                    {percent < 100
                                        ? `${formatGHS(total)} saved toward a GH₵5,000 goal`
                                        : `You've exceeded the GH₵5,000 milestone! 🎉`}
                                </div>
                            </div>
                        ) : (
                            <div className={styles.placeholder}>
                                <span>Enter your daily amount and days above to see your projected savings.</span>
                            </div>
                        )}

                        <Link href="/contact" className={`btn btn-primary ${styles.cta}`}>
                            Open a Susu Account
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                        <p className={styles.note}>
                            <Link href="/calculators">See all financial calculators →</Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
