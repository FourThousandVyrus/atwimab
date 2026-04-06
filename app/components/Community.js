'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Community.module.css';

export default function Community() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) entry.target.classList.add(styles.visible); },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={`section ${styles.section}`} ref={ref}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.imageGrid}>
                        <div className={styles.imgPlaceholder}>
                            <Image fill src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80" alt="Education sponsorship programme" sizes="(max-width:768px) 100vw, 400px" style={{ objectFit: 'cover' }} />
                            <span className={styles.imgLabel}>🎓 Education Sponsorships</span>
                        </div>
                        <div className={styles.imgPlaceholder}>
                            <Image fill src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80" alt="Community health initiatives" sizes="(max-width:768px) 100vw, 200px" style={{ objectFit: 'cover' }} />
                            <span className={styles.imgLabel}>🏥 Health Initiatives</span>
                        </div>
                        <div className={styles.imgPlaceholder}>
                            <Image fill src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&q=80" alt="Agricultural support programme" sizes="(max-width:768px) 100vw, 200px" style={{ objectFit: 'cover' }} />
                            <span className={styles.imgLabel}>🌾 Agricultural Support</span>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <span className="section-label">Community Impact</span>
                        <h2 className="section-title">Investing in Our Community</h2>
                        <p className={styles.desc}>
                            As a community bank, we believe in giving back. Atwima Rural Bank actively supports education,
                            healthcare, agriculture, and local development initiatives across the Ashanti Region.
                        </p>
                        <div className={styles.impacts}>
                            <div className={styles.impact}>
                                <div className={styles.impactIcon}>🎒</div>
                                <div>
                                    <strong>Education</strong>
                                    <p>Scholarships and school infrastructure support for local students.</p>
                                </div>
                            </div>
                            <div className={styles.impact}>
                                <div className={styles.impactIcon}>🤝</div>
                                <div>
                                    <strong>SME Empowerment</strong>
                                    <p>Financial literacy programs and business development workshops.</p>
                                </div>
                            </div>
                            <div className={styles.impact}>
                                <div className={styles.impactIcon}>🏘️</div>
                                <div>
                                    <strong>Local Development</strong>
                                    <p>Infrastructure projects and community event sponsorships.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
