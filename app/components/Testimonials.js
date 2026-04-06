'use client';
import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "Atwima Rural Bank has been my banking partner for over 15 years. Their personal touch and community commitment makes them stand out from the big banks.",
        name: "Kwame Mensah",
        role: "Business Owner, Kumasi",
        initials: "KM",
        avatar: "https://picsum.photos/seed/kwamemensah/80/80",
    },
    {
        quote: "The susu savings account helped me build discipline with my market earnings. Now I've saved enough to expand my shop. I'm grateful for their support.",
        name: "Ama Serwaa",
        role: "Market Trader, Foase",
        initials: "AS",
        avatar: "https://picsum.photos/seed/amaserwaa/80/80",
    },
    {
        quote: "When I needed a salary loan for my child's education, they processed it quickly and with fair rates. They truly understand working families.",
        name: "Joseph Adu-Gyamfi",
        role: "Teacher, Kwadaso",
        initials: "JA",
        avatar: "https://picsum.photos/seed/josephagyamfi/80/80",
    },
    {
        quote: "The Western Union service at their Abuakwa branch is always smooth. My family abroad sends money and I get it the same day. Very reliable.",
        name: "Abena Frimpong",
        role: "Retiree, Abuakwa",
        initials: "AF",
        avatar: "https://picsum.photos/seed/abenafrimpong/80/80",
    },
    {
        quote: "I opened a Kiddies Account for my daughter and the interest rate is impressive. I love how they encourage young people to save early.",
        name: "Emmanuel Owusu",
        role: "Civil Servant, Nkawie",
        initials: "EO",
        avatar: "https://picsum.photos/seed/emmanuelowusu/80/80",
    },
    {
        quote: "Their commercial loan terms are very reasonable compared to other banks. Helped me buy a second vehicle for my transport business.",
        name: "Yaw Boateng",
        role: "Transport Operator, Toase",
        initials: "YB",
        avatar: "https://picsum.photos/seed/yawboateng/80/80",
    },
];

export default function Testimonials() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className="section-header centered">
                    <span className="section-label">Testimonials</span>
                    <h2 className="section-title">What Our Customers Say</h2>
                    <p className="section-subtitle">Real stories from the people we serve every day across the Ashanti Region.</p>
                </div>
            </div>
            <div className={styles.carouselOuter}>
                <div className={styles.track}>
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.stars}>★★★★★</div>
                            <blockquote className={styles.quote}>"{t.quote}"</blockquote>
                            <div className={styles.author}>
                                <Image className={styles.avatar} src={t.avatar} alt={t.name} width={44} height={44} />
                                <div>
                                    <div className={styles.authorName}>{t.name}</div>
                                    <div className={styles.authorRole}>{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
