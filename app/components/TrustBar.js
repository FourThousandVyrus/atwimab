'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './TrustBar.module.css';

const stats = [
    { value: 30, suffix: '+', label: 'Years Serving You', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: 6, suffix: '', label: 'Branch Locations', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
    { value: 1000, suffix: 's', label: 'Happy Customers', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75' },
    { value: 100, suffix: '%', label: 'Deposit Insured (GDPC)', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' },
];

function Counter({ target, suffix, inView }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 1500;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);

    return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function TrustBar() {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setInView(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.trustBar} ref={ref}>
            <div className={styles.container}>
                {stats.map((stat) => (
                    <div key={stat.label} className={`${styles.stat} ${inView ? styles.visible : ''}`}>
                        <div className={styles.iconWrap}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d={stat.icon} />
                            </svg>
                        </div>
                        <div className={styles.statContent}>
                            <div className={styles.statValue}>
                                <Counter target={stat.value} suffix={stat.suffix} inView={inView} />
                            </div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
