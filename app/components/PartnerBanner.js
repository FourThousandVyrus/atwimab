import Image from 'next/image';
import styles from './PartnerBanner.module.css';

export default function PartnerBanner() {
    return (
        <section className={styles.partnerSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.visual}>
                        <div className={styles.imageWrapper}>
                            <Image 
                                src="/guy.png" 
                                alt="Happy Customer" 
                                width={600} 
                                height={600} 
                                className={styles.personImage}
                            />
                        </div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.logosGrid}>
                            <div className={styles.logoItem}>
                                <Image src="/unity.png" alt="UnityLink" width={160} height={80} className={styles.partnerLogo} />
                            </div>
                            <div className={styles.logoItem}>
                                <Image src="/wu.png" alt="Western Union" width={160} height={80} className={styles.partnerLogo} />
                            </div>
                            <div className={styles.logoItem}>
                                <Image src="/mtn.jpeg" alt="MTN Mobile Money" width={160} height={80} className={styles.partnerLogo} />
                            </div>
                            <div className={styles.logoItem}>
                                <Image src="/ezwich.png" alt="e-zwich" width={160} height={80} className={styles.partnerLogo} />
                            </div>
                        </div>
                        <h2 className={styles.title}>Available at Atwima Community Bank</h2>
                        <div className={styles.actions}>
                            <button className="btn btn-primary btn-lg">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
