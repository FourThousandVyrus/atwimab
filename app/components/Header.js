'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import RateTicker from './RateTicker';

const navigation = [
    {
        label: 'Personal Banking',
        href: '/personal-banking',
        children: [
            { label: 'Current Account', href: '/personal-banking#current-account' },
            { label: 'Savings Account', href: '/personal-banking#savings-account' },
            { label: 'Salary Account', href: '/personal-banking#salary-account' },
            { label: 'Susu Account', href: '/personal-banking#susu-account' },
            { label: 'Kiddies Account', href: '/personal-banking#kiddies-account' },
        ],
    },
    {
        label: 'Business Banking',
        href: '/business-banking',
        children: [
            { label: 'Business Accounts', href: '/business-banking#accounts' },
            { label: 'Commercial Loans', href: '/business-banking#commercial-loans' },
            { label: 'Group Loans', href: '/business-banking#group-loans' },
        ],
    },
    {
        label: 'Loans',
        href: '/loans',
        children: [
            { label: 'Salary Loan', href: '/loans#salary-loan' },
            { label: 'Commercial Loan', href: '/loans#commercial-loan' },
            { label: 'Transport Loan', href: '/loans#transport-loan' },
            { label: 'Susu Loan', href: '/loans#susu-loan' },
            { label: 'Funeral Loan', href: '/loans#funeral-loan' },
            { label: 'Church Development Loan', href: '/loans#church-loan' },
        ],
    },
    {
        label: 'Investments',
        href: '/investments',
    },
    {
        label: 'Remittance',
        href: '/remittance',
        children: [
            { label: 'Western Union', href: '/remittance#western-union' },
            { label: 'How It Works', href: '/remittance#how-it-works' },
        ],
    },
    {
        label: 'Tools',
        href: '/calculators',
        children: [
            { label: 'Financial Calculators', href: '/calculators' },
            { label: 'FAQ', href: '/faq' },
            { label: 'News & Announcements', href: '/news' },
            { label: 'Downloads & Forms', href: '/downloads' },
        ],
    },
    {
        label: 'About Us',
        href: '/about',
        children: [
            { label: 'Our Story', href: '/about#our-story' },
            { label: 'Board of Directors', href: '/about#board' },
            { label: 'Senior Management', href: '/about#management' },
            { label: 'Community Involvement', href: '/about#community' },
            { label: 'Careers', href: '/careers' },
        ],
    },
    {
        label: 'Contact',
        href: '/contact',
    },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <RateTicker />
            <div className={styles.container}>
                <Link href="/" className={styles.logo} onClick={() => setMobileOpen(false)}>
                    <div className={styles.logoMark}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect width="40" height="40" rx="8" fill="#2596be" />
                            <path d="M10 28L20 12L30 28H10Z" fill="#D69E2E" opacity="0.9" />
                            <path d="M15 28L20 18L25 28H15Z" fill="white" opacity="0.8" />
                        </svg>
                    </div>
                    <div className={styles.logoText}>
                        <span className={styles.logoName}>Atwima Rural Bank</span>
                        <span className={styles.logoTagline}>A friend in need is a friend indeed</span>
                    </div>
                </Link>

                <nav className={`${styles.nav} ${mobileOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        {navigation.map((item) => (
                            <li
                                key={item.label}
                                className={styles.navItem}
                                onMouseEnter={() => setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={styles.navLink}
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {item.label}
                                    {item.children && (
                                        <svg width="12" height="12" viewBox="0 0 12 12" className={styles.chevron}>
                                            <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                                        </svg>
                                    )}
                                </Link>
                                {item.children && activeDropdown === item.label && (
                                    <div className={styles.dropdown}>
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                className={styles.dropdownLink}
                                                onClick={() => { setMobileOpen(false); setActiveDropdown(null); }}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.actions}>
                    <Link href="/security" className="btn btn-primary btn-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        Security Center
                    </Link>
                </div>

                <button
                    className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerActive : ''}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {mobileOpen && <div className={styles.overlay} onClick={() => setMobileOpen(false)} />}
        </header>
    );
}
