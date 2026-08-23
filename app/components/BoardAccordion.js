'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './BoardAccordion.module.css';

const boardMembers = [
    { 
        name: 'Mr. Ernest Gyau', 
        role: 'Chief Executive Officer', 
        initials: 'EG', 
        avatar: '/pics/CEO.jpg' 
    },
    { 
        name: 'Mr. Eric Appiah', 
        role: 'Chairman', 
        initials: 'EA', 
        avatar: '/MR. ERIC APPIAH chairman.jpg' 
    },
    { 
        name: 'Diana Adu-Danquah (ESQ)', 
        role: 'Member', 
        initials: 'DA', 
        avatar: '/DIANA ADU-DANQUAH (ESQ).jpg' 
    },
    { 
        name: 'Hon. Francisca Oteng Mensah', 
        role: 'Member', 
        initials: 'FM', 
        avatar: '/HON. FRANCISCA OTENG MENSAH.jpg' 
    },
    { 
        name: 'Mr. Boasiako Kwaku Duah', 
        role: 'Member', 
        initials: 'BD', 
        avatar: '/Mr Boasiako Kwaku Duah.jpg' 
    },
    { 
        name: 'Nana Yim Awere Ababio', 
        role: 'Member', 
        initials: 'NA', 
        avatar: '/NANA YIM AWERE ABABIO.jpg' 
    },
    { 
        name: 'Rev. Gyau Apraku', 
        role: 'Member', 
        initials: 'GA', 
        avatar: '/Rev. Gyau Apraku.jpg' 
    }
];

export default function BoardAccordion() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleKeyDown = (e, index) => {
        if (e.key === 'Enter' || e.key === ' ') {
            setActiveIndex(index);
            e.preventDefault();
        } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            const nextIndex = (index + 1) % boardMembers.length;
            setActiveIndex(nextIndex);
            document.getElementById(`board-tab-${nextIndex}`)?.focus();
            e.preventDefault();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            const prevIndex = (index - 1 + boardMembers.length) % boardMembers.length;
            setActiveIndex(prevIndex);
            document.getElementById(`board-tab-${prevIndex}`)?.focus();
            e.preventDefault();
        }
    };

    return (
        <div className={styles.boardSection}>
            <div className={styles.accordionContainer}>
                {boardMembers.map((m, i) => (
                    <button
                        key={i}
                        type="button"
                        className={`${styles.accordionItem} ${activeIndex === i ? styles.accordionItemActive : ''}`}
                        onClick={() => setActiveIndex(i)}
                        onMouseEnter={() => setActiveIndex(i)}
                        onFocus={() => setActiveIndex(i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        aria-expanded={activeIndex === i}
                        aria-controls={`board-panel-${i}`}
                        id={`board-tab-${i}`}
                    >
                        {/* Background Image with Overlay */}
                        <div className={styles.bgImageWrapper}>
                            <Image 
                                src={m.avatar} 
                                alt="" 
                                fill 
                                className={styles.bgImage}
                                sizes="(max-width: 768px) 100vw, 300px"
                                priority={i === 0}
                            />
                            <div className={styles.bgOverlay} />
                        </div>

                        {/* Scanning Line Effect */}
                        <div className={styles.scanLine} />

                        {/* Content Wrapper */}
                        <div className={styles.content}>
                            {/* Header indicator caret */}
                            <div className={styles.headerIndicator}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>

                            {/* Vertical Title (Collapsed State) */}
                            <div className={styles.collapsedInfo}>
                                {m.role} — {m.name}
                            </div>

                            {/* Expanded Info */}
                            <div 
                                id={`board-panel-${i}`}
                                role="region"
                                aria-labelledby={`board-tab-${i}`}
                                className={styles.expandedInfo}
                            >
                                <h3 className={styles.name}>{m.name}</h3>
                                <p className={styles.role}>{m.role}</p>
                                
                                <div className={styles.divider} />
                                

                            </div>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}