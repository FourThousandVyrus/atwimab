'use client';
import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ value, duration = 1500, suffix = '', prefix = '' }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let startTimestamp = null;
        const target = parseFloat(value);
        if (isNaN(target)) {
            setCount(value);
            return;
        }

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [hasAnimated, value, duration]);

    return (
        <span ref={ref} style={{ display: 'inline-block' }}>
            {prefix}
            {count.toLocaleString()}
            {suffix}
        </span>
    );
}
