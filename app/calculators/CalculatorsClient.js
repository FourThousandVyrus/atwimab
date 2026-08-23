'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

/* ── Loan repayment (monthly annuity) ── */
function calcLoan(principal, annualRate, months) {
    if (!principal || !annualRate || !months) return null;
    const P = parseFloat(principal);
    const r = parseFloat(annualRate) / 100 / 12;
    const n = parseInt(months, 10);
    if (isNaN(P) || isNaN(r) || isNaN(n) || P <= 0 || r < 0 || n <= 0) return null;
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
    if (isNaN(P) || isNaN(r) || isNaN(t) || P <= 0 || r < 0 || t <= 0) return null;
    const maturity = P * (1 + r * t);
    return { maturity, interest: maturity - P };
}

const fmt = (n) => {
    if (n === null || isNaN(n)) return 'GH₵0.00';
    // Format GHS using standard Ghanaian formatting
    return new Intl.NumberFormat('en-GH', { style: 'currency', currency: 'GHS', minimumFractionDigits: 2 }).format(n);
};

export default function CalculatorsClient() {
    const [activeTab, setActiveTab] = useState('loan');
    const [copiedText, setCopiedText] = useState(null);

    // States for Loan Repayment
    const [loan, setLoan] = useState({ principal: 10000, rate: 28, months: 12 });
    
    // States for Fixed Deposit
    const [fd, setFd] = useState({ principal: 10000, rate: 22, months: 12 });
    
    // States for Susu Savings
    const [susu, setSusu] = useState({ daily: 20, days: 90 });

    // Memoized Results
    const loanResult = useMemo(() => {
        return calcLoan(loan.principal, loan.rate, loan.months);
    }, [loan.principal, loan.rate, loan.months]);

    const fdResult = useMemo(() => {
        return calcFD(fd.principal, fd.rate, fd.months);
    }, [fd.principal, fd.rate, fd.months]);

    const susuTotal = useMemo(() => {
        const d = parseFloat(susu.daily);
        const daysNum = parseInt(susu.days, 10);
        if (isNaN(d) || isNaN(daysNum) || d <= 0 || daysNum <= 0) return null;
        return d * daysNum;
    }, [susu.daily, susu.days]);

    // Handle number field constraints & sanitization
    const handleNumberInput = (setter, field, minVal, maxVal) => (e) => {
        const raw = e.target.value;
        if (raw === '') {
            setter(p => ({ ...p, [field]: '' }));
            return;
        }
        let val = parseFloat(raw);
        if (isNaN(val)) return;
        setter(p => ({ ...p, [field]: val }));
    };

    const handleBlurSanitize = (setter, field, minVal, maxVal, fallback) => (e) => {
        const raw = e.target.value;
        if (raw === '') {
            setter(p => ({ ...p, [field]: fallback }));
            return;
        }
        let val = parseFloat(raw);
        if (isNaN(val) || val < minVal) {
            setter(p => ({ ...p, [field]: minVal }));
        } else if (val > maxVal) {
            setter(p => ({ ...p, [field]: maxVal }));
        }
    };

    // Formatted quote messages for Copy/Print Actions
    const loanQuoteText = useMemo(() => {
        if (!loanResult) return '';
        return `Atwima Community Bank Quote: Commercial Loan of ${fmt(loan.principal)} for ${loan.months} months at ${loan.rate}% annual interest rate. Est. Monthly Repayment: ${fmt(loanResult.monthly)}. Total Interest: ${fmt(loanResult.interest)}.`;
    }, [loan, loanResult]);

    const fdQuoteText = useMemo(() => {
        if (!fdResult) return '';
        return `Atwima Community Bank Quote: Fixed Deposit of ${fmt(fd.principal)} for ${fd.months} months at ${fd.rate}% annual interest. Est. Maturity Value: ${fmt(fdResult.maturity)}. Interest Earned: ${fmt(fdResult.interest)}.`;
    }, [fd, fdResult]);

    const susuQuoteText = useMemo(() => {
        if (!susuTotal) return '';
        return `Atwima Community Bank Quote: Susu Daily Contribution of ${fmt(susu.daily)} for ${susu.days} days. Est. Accumulated Savings: ${fmt(susuTotal)}.`;
    }, [susu, susuTotal]);

    const copyToClipboard = (text) => {
        if (!navigator.clipboard) return;
        navigator.clipboard.writeText(text).then(() => {
            setCopiedText(text);
            setTimeout(() => setCopiedText(null), 2000);
        });
    };

    return (
        <main>
            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <span className="section-label" style={{ color: 'var(--secondary-400)' }}>Financial Tools</span>
                    <h1>Financial Calculators</h1>
                    <p className={styles.heroSub}>
                        Estimate payments, savings growth, and investments. Use sliders or type numbers below to get instant projections.
                    </p>
                </div>
            </section>

            {/* Tab Switcher for mobile viewports */}
            <section className="container">
                <div className={styles.tabsContainer} role="tablist" aria-label="Calculator Options">
                    <button 
                        role="tab"
                        aria-selected={activeTab === 'loan'}
                        aria-controls="loan-panel"
                        id="tab-loan"
                        className={`${styles.tabButton} ${activeTab === 'loan' ? styles.tabButtonActive : ''}`}
                        onClick={() => setActiveTab('loan')}
                    >
                        <span>💸</span> Loan Repayment
                    </button>
                    <button 
                        role="tab"
                        aria-selected={activeTab === 'fd'}
                        aria-controls="fd-panel"
                        id="tab-fd"
                        className={`${styles.tabButton} ${activeTab === 'fd' ? styles.tabButtonActive : ''}`}
                        onClick={() => setActiveTab('fd')}
                    >
                        <span>📈</span> Fixed Deposit
                    </button>
                    <button 
                        role="tab"
                        aria-selected={activeTab === 'susu'}
                        aria-controls="susu-panel"
                        id="tab-susu"
                        className={`${styles.tabButton} ${activeTab === 'susu' ? styles.tabButtonActive : ''}`}
                        onClick={() => setActiveTab('susu')}
                    >
                        <span>🪙</span> Susu Savings
                    </button>
                </div>
            </section>

            {/* Main Calculators Grid */}
            <section className="section">
                <div className="container">
                    <div className={styles.grid}>

                        {/* ── Loan Repayment Calculator ── */}
                        <div 
                            id="loan-panel"
                            role="tabpanel"
                            aria-labelledby="tab-loan"
                            className={`${styles.calcCard} ${activeTab === 'loan' ? styles.calcCardActive : ''}`}
                        >
                            <div className={`${styles.calcIcon} ${styles.loanIcon}`} aria-hidden="true">💸</div>
                            <h2 className={styles.calcTitle}>Loan Calculator</h2>
                            <p className={styles.calcDesc}>Estimate monthly repayments using the reducing balance method.</p>

                            {/* Loan Principal Input */}
                            <div className="form-group">
                                <div className={styles.sliderLabelGroup}>
                                    <label htmlFor="loan-principal" className="form-label">Loan Amount</label>
                                    <span id="loan-principal-val" className={styles.labelValue}>{fmt(loan.principal || 0)}</span>
                                </div>
                                <input 
                                    id="loan-principal"
                                    className="form-input" 
                                    type="number" 
                                    min="500" 
                                    max="100000" 
                                    placeholder="e.g. 10000"
                                    value={loan.principal} 
                                    onChange={handleNumberInput(setLoan, 'principal', 500, 100000)}
                                    onBlur={handleBlurSanitize(setLoan, 'principal', 500, 100000, 10000)}
                                />
                                <div className={styles.sliderContainer}>
                                    <input 
                                        type="range" 
                                        min="500" 
                                        max="100000" 
                                        step="500"
                                        aria-label="Loan Amount Slider"
                                        aria-describedby="loan-principal-val"
                                        value={loan.principal || 500} 
                                        className={styles.rangeInput}
                                        onChange={(e) => setLoan(p => ({ ...p, principal: parseFloat(e.target.value) }))}
                                    />
                                    <div className={styles.rangeLabels}>
                                        <span>GH₵500</span>
                                        <span>GH₵100,000</span>
                                    </div>
                                </div>
                            </div>

                            {/* Loan Rate Input */}
                            <div className="form-group">
                                <div className={styles.sliderLabelGroup}>
                                    <label htmlFor="loan-rate" className="form-label">Annual Rate (%)</label>
                                    <span id="loan-rate-val" className={styles.labelValue}>{loan.rate || 0}%</span>
                                </div>
                                <input 
                                    id="loan-rate"
                                    className="form-input" 
                                    type="number" 
                                    min="5" 
                                    max="50" 
                                    step="0.5"
                                    placeholder="e.g. 28"
                                    value={loan.rate} 
                                    onChange={handleNumberInput(setLoan, 'rate', 5, 50)}
                                    onBlur={handleBlurSanitize(setLoan, 'rate', 5, 50, 28)}
                                />
                                <div className={styles.sliderContainer}>
                                    <input 
                                        type="range" 
                                        min="5" 
                                        max="50" 
                                        step="0.5"
                                        aria-label="Annual Rate Slider"
                                        aria-describedby="loan-rate-val"
                                        value={loan.rate || 5} 
                                        className={styles.rangeInput}
                                        onChange={(e) => setLoan(p => ({ ...p, rate: parseFloat(e.target.value) }))}
                                    />
                                    <div className={styles.rangeLabels}>
                                        <span>5%</span>
                                        <span>50%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Loan Term Input */}
                            <div className="form-group">
                                <div className={styles.sliderLabelGroup}>
                                    <label htmlFor="loan-months" className="form-label">Loan Term (months)</label>
                                    <span id="loan-months-val" className={styles.labelValue}>{loan.months || 0} months</span>
                                </div>
                                <div className={styles.presets}>
                                    {[3, 6, 12, 18, 24, 36, 48, 60].map(m => (
                                        <button 
                                            key={m} 
                                            type="button"
                                            className={`${styles.preset} ${loan.months === m ? styles.presetActive : ''}`}
                                            onClick={() => setLoan(p => ({ ...p, months: m }))}
                                        >
                                            {m}m
                                        </button>
                                    ))}
                                </div>
                                <input 
                                    id="loan-months"
                                    className="form-input" 
                                    type="number" 
                                    min="3" 
                                    max="60" 
                                    placeholder="e.g. 12"
                                    value={loan.months} 
                                    onChange={handleNumberInput(setLoan, 'months', 3, 60)}
                                    onBlur={handleBlurSanitize(setLoan, 'months', 3, 60, 12)}
                                />
                                <div className={styles.sliderContainer}>
                                    <input 
                                        type="range" 
                                        min="3" 
                                        max="60" 
                                        step="1"
                                        aria-label="Loan Term Slider"
                                        aria-describedby="loan-months-val"
                                        value={loan.months || 3} 
                                        className={styles.rangeInput}
                                        onChange={(e) => setLoan(p => ({ ...p, months: parseInt(e.target.value, 10) }))}
                                    />
                                    <div className={styles.rangeLabels}>
                                        <span>3 months</span>
                                        <span>60 months</span>
                                    </div>
                                </div>
                            </div>

                            {/* Results Panel */}
                            <div aria-live="polite" className={styles.resultContainer}>
                                {loanResult ? (
                                    <div className={styles.result}>
                                        <div className={styles.resultItem}>
                                            <span>Monthly Repayment</span>
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
                                ) : <div className={styles.placeholder}>Enter details above to calculate</div>}
                            </div>

                            {/* Actions */}
                            {loanResult && (
                                <div className={styles.actionRow}>
                                    <button 
                                        type="button" 
                                        className={styles.actionBtn}
                                        onClick={() => copyToClipboard(loanQuoteText)}
                                    >
                                        {copiedText === loanQuoteText ? '✓ Copied' : '📋 Copy Quote'}
                                    </button>
                                    <a 
                                        href={`https://wa.me/233501387040?text=${encodeURIComponent(`Hello Atwima Community Bank, I would like to book a visit to apply for this loan quote:\n\n- Principal: ${fmt(loan.principal)}\n- Interest Rate: ${loan.rate}%\n- Term: ${loan.months} months\n- Estimated Monthly Payment: ${fmt(loanResult.monthly)}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.actionBtn}
                                        style={{ background: 'var(--primary-600)', color: '#ffffff', borderColor: 'var(--primary-700)' }}
                                    >
                                        💬 Book Visit
                                    </a>
                                </div>
                            )}

                            <Link href="/loans" className={`btn btn-secondary ${styles.cardLink}`} style={{ marginTop: 'var(--space-2)' }}>
                                View Loan Products
                            </Link>
                        </div>

                        {/* ── Fixed Deposit Calculator ── */}
                        <div 
                            id="fd-panel"
                            role="tabpanel"
                            aria-labelledby="tab-fd"
                            className={`${styles.calcCard} ${activeTab === 'fd' ? styles.calcCardActive : ''}`}
                        >
                            <div className={`${styles.calcIcon} ${styles.fdIcon}`} aria-hidden="true">📈</div>
                            <h2 className={styles.calcTitle}>Fixed Deposit</h2>
                            <p className={styles.calcDesc}>Calculate simple interest returns on locked-term investments.</p>

                            {/* FD Principal */}
                            <div className="form-group">
                                <div className={styles.sliderLabelGroup}>
                                    <label htmlFor="fd-principal" className="form-label">Deposit Amount</label>
                                    <span id="fd-principal-val" className={styles.labelValue}>{fmt(fd.principal || 0)}</span>
                                </div>
                                <input 
                                    id="fd-principal"
                                    className="form-input" 
                                    type="number" 
                                    min="1000" 
                                    max="500000" 
                                    placeholder="e.g. 10000"
                                    value={fd.principal} 
                                    onChange={handleNumberInput(setFd, 'principal', 1000, 500000)}
                                    onBlur={handleBlurSanitize(setFd, 'principal', 1000, 500000, 10000)}
                                />
                                <div className={styles.sliderContainer}>
                                    <input 
                                        type="range" 
                                        min="1000" 
                                        max="500000" 
                                        step="1000"
                                        aria-label="Deposit Amount Slider"
                                        aria-describedby="fd-principal-val"
                                        value={fd.principal || 1000} 
                                        className={styles.rangeInput}
                                        onChange={(e) => setFd(p => ({ ...p, principal: parseFloat(e.target.value) }))}
                                    />
                                    <div className={styles.rangeLabels}>
                                        <span>GH₵1,000</span>
                                        <span>GH₵500,000</span>
                                    </div>
                                </div>
                            </div>

                            {/* FD Rate */}
                            <div className="form-group">
                                <div className={styles.sliderLabelGroup}>
                                    <label htmlFor="fd-rate" className="form-label">Annual Rate (%)</label>
                                    <span id="fd-rate-val" className={styles.labelValue}>{fd.rate || 0}%</span>
                                </div>
                                <input 
                                    id="fd-rate"
                                    className="form-input" 
                                    type="number" 
                                    min="5" 
                                    max="40" 
                                    step="0.5"
                                    value={fd.rate} 
                                    onChange={handleNumberInput(setFd, 'rate', 5, 40)}
                                    onBlur={handleBlurSanitize(setFd, 'rate', 5, 40, 22)}
                                />
                                <div className={styles.sliderContainer}>
                                    <input 
                                        type="range" 
                                        min="5" 
                                        max="40" 
                                        step="0.5"
                                        aria-label="Annual Rate Slider"
                                        aria-describedby="fd-rate-val"
                                        value={fd.rate || 5} 
                                        className={styles.rangeInput}
                                        onChange={(e) => setFd(p => ({ ...p, rate: parseFloat(e.target.value) }))}
                                    />
                                    <div className={styles.rangeLabels}>
                                        <span>5%</span>
                                        <span>40%</span>
                                    </div>
                                </div>
                                <small className={styles.fdNote}>
                                    * Standard 12-month Fixed Deposit currently yields 22% p.a.
                                </small>
                            </div>

                            {/* FD Term */}
                            <div className="form-group">
                                <div className={styles.sliderLabelGroup}>
                                    <label htmlFor="fd-months" className="form-label">Duration (months)</label>
                                    <span id="fd-months-val" className={styles.labelValue}>{fd.months || 0} months</span>
                                </div>
                                <div className={styles.presets}>
                                    {[3, 6, 12, 18, 24, 36].map(m => (
                                        <button 
                                            key={m} 
                                            type="button"
                                            className={`${styles.preset} ${fd.months === m ? styles.presetActive : ''}`}
                                            onClick={() => setFd(p => ({ ...p, months: m }))}
                                        >
                                            {m}m
                                        </button>
                                    ))}
                                </div>
                                <input 
                                    id="fd-months"
                                    className="form-input" 
                                    type="number" 
                                    min="3" 
                                    max="36" 
                                    placeholder="e.g. 12"
                                    value={fd.months} 
                                    onChange={handleNumberInput(setFd, 'months', 3, 36)}
                                    onBlur={handleBlurSanitize(setFd, 'months', 3, 36, 12)}
                                />
                                <div className={styles.sliderContainer}>
                                    <input 
                                        type="range" 
                                        min="3" 
                                        max="36" 
                                        step="3"
                                        aria-label="FD Term Slider"
                                        aria-describedby="fd-months-val"
                                        value={fd.months || 3} 
                                        className={styles.rangeInput}
                                        onChange={(e) => setFd(p => ({ ...p, months: parseInt(e.target.value, 10) }))}
                                    />
                                    <div className={styles.rangeLabels}>
                                        <span>3 months</span>
                                        <span>36 months</span>
                                    </div>
                                </div>
                            </div>

                            {/* FD Results */}
                            <div aria-live="polite" className={styles.resultContainer}>
                                {fdResult ? (
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
                                ) : <div className={styles.placeholder}>Enter deposit details to see returns</div>}
                            </div>

                            {/* FD Actions */}
                            {fdResult && (
                                <div className={styles.actionRow}>
                                    <button 
                                        type="button" 
                                        className={styles.actionBtn}
                                        onClick={() => copyToClipboard(fdQuoteText)}
                                    >
                                        {copiedText === fdQuoteText ? '✓ Copied' : '📋 Copy Quote'}
                                    </button>
                                    <a 
                                        href={`https://wa.me/233501387040?text=${encodeURIComponent(`Hello Atwima Community Bank, I would like to book a visit to open a Fixed Deposit with this estimate:\n\n- Principal: ${fmt(fd.principal)}\n- Rate: ${fd.rate}%\n- Term: ${fd.months} months\n- Estimated Return: ${fmt(fdResult.maturity)}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.actionBtn}
                                        style={{ background: 'var(--primary-600)', color: '#ffffff', borderColor: 'var(--primary-700)' }}
                                    >
                                        💬 Book Visit
                                    </a>
                                </div>
                            )}

                            <Link href="/investments" className={`btn btn-secondary ${styles.cardLink}`} style={{ marginTop: 'var(--space-2)' }}>
                                View Investment Products
                            </Link>
                        </div>

                        {/* ── Susu Savings Calculator ── */}
                        <div 
                            id="susu-panel"
                            role="tabpanel"
                            aria-labelledby="tab-susu"
                            className={`${styles.calcCard} ${activeTab === 'susu' ? styles.calcCardActive : ''}`}
                        >
                            <div className={`${styles.calcIcon} ${styles.susuIcon}`} aria-hidden="true">🪙</div>
                            <h2 className={styles.calcTitle}>Susu Planner</h2>
                            <p className={styles.calcDesc}>Project total daily Susu contributions for mobile/market savings.</p>

                            {/* Susu Daily Contribution */}
                            <div className="form-group">
                                <div className={styles.sliderLabelGroup}>
                                    <label htmlFor="susu-daily" className="form-label">Daily Amount</label>
                                    <span id="susu-daily-val" className={styles.labelValue}>{fmt(susu.daily || 0)}</span>
                                </div>
                                <input 
                                    id="susu-daily"
                                    className="form-input" 
                                    type="number" 
                                    min="2" 
                                    max="500" 
                                    placeholder="e.g. 20"
                                    value={susu.daily} 
                                    onChange={handleNumberInput(setSusu, 'daily', 2, 500)}
                                    onBlur={handleBlurSanitize(setSusu, 'daily', 2, 500, 20)}
                                />
                                <div className={styles.sliderContainer}>
                                    <input 
                                        type="range" 
                                        min="2" 
                                        max="500" 
                                        step="1"
                                        aria-label="Daily Amount Slider"
                                        aria-describedby="susu-daily-val"
                                        value={susu.daily || 2} 
                                        className={styles.rangeInput}
                                        onChange={(e) => setSusu(p => ({ ...p, daily: parseFloat(e.target.value) }))}
                                    />
                                    <div className={styles.rangeLabels}>
                                        <span>GH₵2</span>
                                        <span>GH₵500</span>
                                    </div>
                                </div>
                            </div>

                            {/* Susu Days */}
                            <div className="form-group">
                                <div className={styles.sliderLabelGroup}>
                                    <label htmlFor="susu-days" className="form-label">Number of Days</label>
                                    <span id="susu-days-val" className={styles.labelValue}>{susu.days || 0} days</span>
                                </div>
                                <div className={styles.presets}>
                                    {[30, 60, 90, 180, 365].map(d => (
                                        <button 
                                            key={d} 
                                            type="button"
                                            className={`${styles.preset} ${susu.days == d ? styles.presetActive : ''}`}
                                            onClick={() => setSusu(p => ({ ...p, days: d }))}
                                        >
                                            {d}d
                                        </button>
                                    ))}
                                </div>
                                <input 
                                    id="susu-days"
                                    className="form-input" 
                                    type="number" 
                                    min="30" 
                                    max="365" 
                                    placeholder="e.g. 90"
                                    value={susu.days} 
                                    onChange={handleNumberInput(setSusu, 'days', 30, 365)}
                                    onBlur={handleBlurSanitize(setSusu, 'days', 30, 365, 90)}
                                />
                                <div className={styles.sliderContainer}>
                                    <input 
                                        type="range" 
                                        min="30" 
                                        max="365" 
                                        step="1"
                                        aria-label="Days Slider"
                                        aria-describedby="susu-days-val"
                                        value={susu.days || 30} 
                                        className={styles.rangeInput}
                                        onChange={(e) => setSusu(p => ({ ...p, days: parseInt(e.target.value, 10) }))}
                                    />
                                    <div className={styles.rangeLabels}>
                                        <span>30 days</span>
                                        <span>365 days</span>
                                    </div>
                                </div>
                            </div>

                            {/* Susu Results */}
                            <div aria-live="polite" className={styles.resultContainer}>
                                {susuTotal !== null ? (
                                    <div className={styles.result}>
                                        <div className={styles.resultItem}>
                                            <span>Total Accumulated</span>
                                            <strong className={styles.highlight}>{fmt(susuTotal)}</strong>
                                        </div>
                                        <div className={styles.resultItem}>
                                            <span>Daily Rate</span>
                                            <strong>{fmt(parseFloat(susu.daily || 0))}</strong>
                                        </div>
                                        <div className={styles.resultItem}>
                                            <span>Plan Duration</span>
                                            <strong>{susu.days} days</strong>
                                        </div>
                                    </div>
                                ) : <div className={styles.placeholder}>Enter daily savings goal to see projection</div>}
                            </div>

                            {/* Susu Actions */}
                            {susuTotal !== null && (
                                <div className={styles.actionRow}>
                                    <button 
                                        type="button" 
                                        className={styles.actionBtn}
                                        onClick={() => copyToClipboard(susuQuoteText)}
                                    >
                                        {copiedText === susuQuoteText ? '✓ Copied' : '📋 Copy Quote'}
                                    </button>
                                    <a 
                                        href={`https://wa.me/233501387040?text=${encodeURIComponent(`Hello Atwima Community Bank, I would like to book a visit to open a Susu Savings plan:\n\n- Daily Target: ${fmt(susu.daily)}\n- Duration: ${susu.days} days\n- Projected Savings: ${fmt(susuTotal)}`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.actionBtn}
                                        style={{ background: 'var(--primary-600)', color: '#ffffff', borderColor: 'var(--primary-700)' }}
                                    >
                                        💬 Book Visit
                                    </a>
                                </div>
                            )}

                            <Link href="/personal-banking#susu-account" className={`btn btn-secondary ${styles.cardLink}`} style={{ marginTop: 'var(--space-2)' }}>
                                Open a Susu Account
                            </Link>
                        </div>

                    </div>

                    {/* General Disclaimer */}
                    <div className={styles.disclaimer}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        <p>
                            <strong>Important Notice:</strong> These calculations are estimates for planning purposes only. 
                            Actual rates, loan limits, and terms are finalized at the branch office upon application. 
                            Please <Link href="/contact">contact a branch manager</Link> for official advice.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
