'use client';
import useScrollReveal from '../hooks/useScrollReveal';
import Image from 'next/image';
import styles from './Community.module.css';

export default function Community() {
    const imageRef = useScrollReveal();
    const contentRef = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });

    return (
        <section className={`section ${styles.section}`}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={`${styles.imageGrid} reveal-left`} ref={imageRef}>
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
                    <div className={`${styles.content} reveal-right`} ref={contentRef}>
                        <span className="section-label">Community Impact</span>
                        <h2 className="section-title">Investing in Our Community</h2>
                        <p className={styles.desc}>
                            As a community bank, we believe in giving back. Atwima Community Bank actively supports education,
                            healthcare, agriculture, and local development initiatives across the Ashanti Region.
                        </p>
                        <div className={styles.impacts}>
                            <div className={styles.impact}>
                                <div className={styles.impactIcon}>🎒</div>
                                <div>
                                    <h3 className={styles.impactTitle}>Education</h3>
                                    <p>Scholarships and school infrastructure support for local students.</p>
                                </div>
                            </div>
                            <div className={styles.impact}>
                                <div className={styles.impactIcon}>🤝</div>
                                <div>
                                    <h3 className={styles.impactTitle}>SME Empowerment</h3>
                                    <p>Financial literacy programs and business development workshops.</p>
                                </div>
                            </div>
                            <div className={styles.impact}>
                                <div className={styles.impactIcon}>🏘️</div>
                                <div>
                                    <h3 className={styles.impactTitle}>Local Development</h3>
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
