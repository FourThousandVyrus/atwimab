'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef, useCallback } from 'react';
import styles from './KenteLoader.module.css';

const INITIAL_LOAD_MS = 1000;      // 1s brief flash on first site entry
const NAVIGATION_DISPLAY_MS = 1100; // 1.1s duration for all navigations
const EXIT_FADE_MS = 200;           // fade out animation time

export default function KenteLoader() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    const navigationTimerRef = useRef(null);
    const isNavigatingRef = useRef(false);

    // Initial page load
    useEffect(() => {
        setLoading(true);
        setShouldRender(true);
        document.body.style.overflow = 'hidden';
        const timer = setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = '';
        }, INITIAL_LOAD_MS);
        return () => {
            clearTimeout(timer);
            document.body.style.overflow = '';
        };
    }, []);

    // Fade out animation
    useEffect(() => {
        if (!loading && shouldRender) {
            const fadeTimer = setTimeout(() => setShouldRender(false), EXIT_FADE_MS);
            return () => clearTimeout(fadeTimer);
        }
    }, [loading, shouldRender]);

    const handleLinkClick = useCallback((e) => {
        // Find the anchor element
        let target = e.target;
        while (target && target.tagName !== 'A') {
            target = target.parentNode;
        }
        if (!target) return;

        const href = target.getAttribute('href');
        if (!href) return;

        // Skip special cases
        const isHash = href.startsWith('#');
        const isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//');
        const isLocal = href.startsWith('/') && !isExternal;
        const target_attr = target.getAttribute('target');
        const modifierPressed = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey;
        const isLeftClick = e.button === 0;

        // Let the browser handle non-local navigation
        if (!isLocal || isHash || target_attr === '_blank' || modifierPressed || !isLeftClick) {
            return;
        }

        // Don't intercept if already navigating
        if (isNavigatingRef.current) return;

        e.preventDefault();

        isNavigatingRef.current = true;

        // Show loader and lock scroll
        setLoading(true);
        setShouldRender(true);
        document.body.style.overflow = 'hidden';

        // Clear any previous navigation timer
        if (navigationTimerRef.current) {
            clearTimeout(navigationTimerRef.current);
        }

        // Navigate immediately
        router.push(href);

        // Show loader for exactly 1.3 seconds, then dismiss and unlock scroll
        navigationTimerRef.current = setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = '';
            isNavigatingRef.current = false;
            navigationTimerRef.current = null;
        }, NAVIGATION_DISPLAY_MS);
    }, [router]);

    // Attach click listener
    useEffect(() => {
        document.addEventListener('click', handleLinkClick, { capture: true });
        return () => {
            document.removeEventListener('click', handleLinkClick, { capture: true });
            if (navigationTimerRef.current) clearTimeout(navigationTimerRef.current);
            document.body.style.overflow = '';
        };
    }, [handleLinkClick]);

    if (!shouldRender) {
        return null;
    }

    return (
        <div className={`${styles.overlay} ${loading ? styles.active : styles.exit}`} aria-hidden="true">
            <div className={styles.loaderContainer}>
                <div className={styles.loader} />
                <div className={styles.loaderText}>
                    <span>Connecting with Confidence</span>
                    <span className={styles.dots}>...</span>
                </div>
            </div>
        </div>
    );
}
