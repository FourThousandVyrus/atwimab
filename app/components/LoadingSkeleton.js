'use client';
import styles from './LoadingSkeleton.module.css';

export default function LoadingSkeleton() {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                {/* Hero Skeleton */}
                <div className={styles.heroSkeleton}>
                    <div className={`${styles.skeleton} ${styles.title}`} />
                    <div className={`${styles.skeleton} ${styles.subtitle}`} />
                </div>
                
                {/* Grid Skeleton */}
                <div className={styles.grid}>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={styles.cardSkeleton}>
                            <div className={`${styles.skeleton} ${styles.icon}`} />
                            <div className={`${styles.skeleton} ${styles.cardTitle}`} />
                            <div className={`${styles.skeleton} ${styles.line}`} />
                            <div className={`${styles.skeleton} ${styles.line}`} style={{ width: '80%' }} />
                            <div className={`${styles.skeleton} ${styles.button}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
