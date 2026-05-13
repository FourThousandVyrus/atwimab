'use client';
import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "Atwima Community Bank has been my banking partner for over 15 years. Their personal touch and community commitment makes them stand out from the big banks.",
        name: "Mr. Kwame Mensah",
        role: "Business Owner, Kumasi",
        avatar: "/customer_entrepreneur_male_1778597821569.png",
    },
    {
        quote: "The susu savings account helped me build discipline with my market earnings. Now I've saved enough to expand my shop. I'm grateful for their support.",
        name: "Mrs. Ama Serwaa",
        role: "Market Trader, Foase",
        avatar: "/customer_trader_female_ghana_1778597838735.png",
    },
    {
        quote: "When I needed a salary loan for my child's education, they processed it quickly and with fair rates. They truly understand working families.",
        name: "Mr. Joseph Adu-Gyamfi",
        role: "Teacher, Kwadaso",
        avatar: "/customer_teacher_male_ghana_1778597852861.png",
    },
    {
        quote: "The Western Union service at their Abuakwa branch is always smooth. My family abroad sends money and I get it the same day. Very reliable.",
        name: "Mrs. Abena Frimpong",
        role: "Retiree, Abuakwa",
        avatar: "/customer_retiree_female_ghana_1778597868837.png",
    },
    {
        quote: "I opened a Kiddies Account for my daughter and the interest rate is impressive. I love how they encourage young people to save early.",
        name: "Mr. Emmanuel Owusu",
        role: "Civil Servant, Nkawie",
        avatar: "/customer_civil_servant_ghana_1778597887969.png",
    },
    {
        quote: "Their commercial loan terms are very reasonable compared to other banks. Helped me buy a second vehicle for my transport business.",
        name: "Mr. Yaw Boateng",
        role: "Transport Operator, Toase",
        avatar: "/customer_transport_operator_ghana_1778597908219.png",
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
                                <div className={styles.avatarWrapper}>
                                    <Image className={styles.avatar} src={t.avatar} alt={t.name} width={50} height={50} style={{ objectFit: 'cover' }} />
                                </div>
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
