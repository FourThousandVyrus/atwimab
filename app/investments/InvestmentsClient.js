'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function InvestmentsClient() {
    const [principal, setPrincipal] = useState('1000');
    const [tenure, setTenure] = useState('12'); // '3' | '6' | '12'

    // Interactive FD returns calculation
    const rates = {
        '3': 0.14,
        '6': 0.18,
        '12': 0.22,
    };

    const calculation = useMemo(() => {
        const p = parseFloat(principal);
        if (isNaN(p) || p <= 0) return { interest: 0, total: 0, principalPercent: 100, growthPercent: 0 };
        const rate = rates[tenure] || 0.22;
        const interest = p * rate * (parseInt(tenure, 10) / 12);
        const total = p + interest;
        const principalPercent = (p / total) * 100;
        const growthPercent = (interest / total) * 100;

        return {
            interest,
            total,
            principalPercent,
            growthPercent,
        };
    }, [principal, tenure]);

    const formatGHS = (val) => {
        return new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS' }).format(val);
    };

    return (
        <div className="container">
            <div className={styles.layout}>
                
                {/* Investment Cards Grid */}
                <div className={styles.cardsGrid}>
                    
                    {/* Fixed Deposit Card */}
                    <div className={styles.card}>
                        <div className={styles.iconWrap} aria-hidden="true">📈</div>
                        <h2 className={styles.cardTitle}>ARB Fixed Deposit</h2>
                        <p className={styles.cardDesc}>
                            Lock in your funds for a secure, fixed period and earn high-yield returns. Perfect for personal goals or commercial treasury.
                        </p>
                        
                        <div className={`${styles.badgeBox} ${styles.fdBadgeBox}`}>
                            <div className={styles.badgeLabel}>Interest Rate</div>
                            <div className={styles.badgeValue}>Up to 22.00%</div>
                            <div className={styles.badgeSub}>per annum (12-month tenure)</div>
                        </div>

                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span><strong>Flexible Tenures:</strong> Select from 3, 6, 9, or 12-month terms.</span>
                            </li>
                            <li className={styles.featureItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span><strong>Low Minimum:</strong> Start investing with as low as <strong>GH₵100.00</strong>.</span>
                            </li>
                            <li className={styles.featureItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span><strong>Guaranteed Return:</strong> Capital and interest are fully protected.</span>
                            </li>
                            <li className={styles.featureItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span><strong>Maturity payout:</strong> Automated payout straight to your savings account.</span>
                            </li>
                        </ul>

                        <div className={styles.actions}>
                            <Link 
                                href="/contact" 
                                className="btn btn-primary" 
                                aria-label="Contact Us to Invest in Fixed Deposits"
                            >
                                Invest Now
                            </Link>
                            
                            <div className={styles.resourceLinks}>
                                <Link href="/downloads" className={styles.resourceLink}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                                    </svg>
                                    Application Form (PDF)
                                </Link>
                                <Link href="/calculators" className={styles.resourceLink}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                        <rect x="4" y="2" width="16" height="20" rx="2" /><line x1="9" y1="22" x2="15" y2="22" /><line x1="8" y1="6" x2="16" y2="6" /><line x1="8" y1="10" x2="16" y2="10" /><line x1="8" y1="14" x2="16" y2="14" /><line x1="8" y1="18" x2="16" y2="18" />
                                    </svg>
                                    Compare Calculators
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Shares Card */}
                    <div className={styles.card}>
                        <div className={styles.iconWrap} aria-hidden="true">🏛️</div>
                        <h2 className={styles.cardTitle}>ARB Shares</h2>
                        <p className={styles.cardDesc}>
                            Become a co-owner of Atwima Community Bank. Purchase equity shares to build long-term wealth, earn annual dividends, and support local growth.
                        </p>

                        <div className={`${styles.badgeBox} ${styles.sharesBadgeBox}`}>
                            <div className={styles.badgeLabel}>Investment Type</div>
                            <div className={styles.badgeValue}>Equity Growth</div>
                            <div className={styles.badgeSub}>Annual dividend payments &amp; AGM voting rights</div>
                        </div>

                        <ul className={styles.featureList}>
                            <li className={styles.featureItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span><strong>Dividend Income:</strong> Share in the profits of a profitable local bank.</span>
                            </li>
                            <li className={styles.featureItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span><strong>AGM Voting:</strong> Have your voice heard in general shareholder decisions.</span>
                            </li>
                            <li className={styles.featureItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span><strong>Capital Appreciation:</strong> Shares increase in value as the bank grows.</span>
                            </li>
                            <li className={styles.featureItem}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary-500)" strokeWidth="3" aria-hidden="true">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                <span><strong>Empower Community:</strong> Investments fund local agricultural and trade loans.</span>
                            </li>
                        </ul>

                        <div className={styles.actions}>
                            <Link 
                                href="/contact" 
                                className="btn btn-secondary" 
                                aria-label="Contact Us to Purchase Shares"
                            >
                                Purchase Shares
                            </Link>

                            <div className={styles.resourceLinks}>
                                <Link href="/downloads" className={styles.resourceLink}>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                                    </svg>
                                    Share Purchase Guide (PDF)
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Calculator Widget Panel */}
                <div className={styles.calcPanel}>
                    <h2 className={styles.calcTitle}>Growth Estimator</h2>
                    <p className={styles.calcDesc}>Estimate how much your money can grow with an Atwima Fixed Deposit.</p>
                    
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="calc-principal">Principal Amount (GH₵)</label>
                        <div className={styles.inputWrap}>
                            <span className={styles.currency} aria-hidden="true">₵</span>
                            <input 
                                id="calc-principal"
                                type="number" 
                                className={styles.input} 
                                value={principal} 
                                onChange={(e) => setPrincipal(e.target.value)}
                                min="100"
                                placeholder="1000"
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="calc-tenure">Investment Tenure</label>
                        <select 
                            id="calc-tenure"
                            className={styles.select} 
                            value={tenure} 
                            onChange={(e) => setTenure(e.target.value)}
                        >
                            <option value="3">3 Months (14.00% p.a.)</option>
                            <option value="6">6 Months (18.00% p.a.)</option>
                            <option value="12">12 Months (22.00% p.a.)</option>
                        </select>
                    </div>

                    <div className={styles.resultBox} aria-live="polite">
                        <div className={styles.resultLabel}>Total at Maturity</div>
                        <div className={styles.resultValue}>{formatGHS(calculation.total)}</div>
                        <div className={styles.resultMeta}>
                            Principal: {formatGHS(parseFloat(principal) || 0)} · Earned Interest: {formatGHS(calculation.interest)}
                        </div>

                        {/* Compound growth illustration graph */}
                        <div className={styles.graphContainer} aria-hidden="true">
                            <div 
                                className={styles.graphBar} 
                                style={{ 
                                    height: '100%', 
                                    width: `${calculation.principalPercent}%`, 
                                    background: 'var(--primary-200)', 
                                    borderRight: '2px solid #fff' 
                                }} 
                                title="Principal"
                            ></div>
                            <div 
                                className={styles.graphBar} 
                                style={{ 
                                    height: '100%', 
                                    width: `${calculation.growthPercent}%`, 
                                    background: 'var(--primary-600)' 
                                }} 
                                title="Earned Interest"
                            ></div>
                        </div>
                        <div className={styles.graphLabels}>
                            <span>Principal ({Math.round(calculation.principalPercent)}%)</span>
                            <span>Interest ({Math.round(calculation.growthPercent)}%)</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
