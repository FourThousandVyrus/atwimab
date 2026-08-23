'use client';
import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — Intersection Observer hook for scroll-triggered animations.
 * 
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1). Default: 0.15
 * @param {string} options.rootMargin - Root margin string. Default: '0px 0px -60px 0px'
 * @param {boolean} options.once - If true, only triggers once. Default: true
 * @returns {React.RefObject} ref to attach to the target element
 * 
 * Usage:
 *   const ref = useScrollReveal();
 *   <section ref={ref} className="reveal">...</section>
 * 
 * The hook adds a `data-revealed="true"` attribute when the element enters viewport.
 * Use CSS: [data-revealed="true"] { opacity: 1; transform: none; }
 */
export default function useScrollReveal({
    threshold = 0.15,
    rootMargin = '0px 0px -60px 0px',
    once = true,
} = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            el.setAttribute('data-revealed', 'true');
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.setAttribute('data-revealed', 'true');
                    if (once) observer.unobserve(entry.target);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return ref;
}

/**
 * useStaggerReveal — For parent containers whose children animate with staggered delays.
 * Adds `data-stagger-revealed="true"` on the parent when visible.
 * Children use CSS transition-delay via :nth-child.
 */
export function useStaggerReveal({
    threshold = 0.12,
    rootMargin = '0px 0px -40px 0px',
} = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            el.setAttribute('data-stagger-revealed', 'true');
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.setAttribute('data-stagger-revealed', 'true');
                    observer.unobserve(entry.target);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, rootMargin]);

    return ref;
}
