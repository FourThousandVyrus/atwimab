import styles from './RateTicker.module.css';

const rates = [
    '🏦 Savings Account: 5% p.a.',
    '📈 Fixed Deposit (6 months): 18% p.a.',
    '📈 Fixed Deposit (12 months): 22% p.a.',
    '💼 Salary Loan: From 28% p.a.',
    '🏪 Commercial Loan: From 30% p.a.',
    '💰 Susu Account: Flexible daily savings',
    '📊 ARB Shares: Annual dividend payout',
    '🌍 Western Union: Same-day remittance',
    '🏘️ 6 Branches across Ashanti Region',
    '🔒 GDPC Insured | Bank of Ghana Regulated',
];

export default function RateTicker() {
    return (
        <div className={styles.ticker} aria-label="Current rates and announcements">
            <div className={styles.label}>Live Rates</div>
            <div className={styles.trackWrap}>
                <div className={styles.track}>
                    {[...rates, ...rates].map((item, i) => (
                        <span key={i} className={styles.item}>
                            {item}
                            <span className={styles.sep} aria-hidden="true">|</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
