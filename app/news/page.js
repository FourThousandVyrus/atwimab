import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
    title: 'News & Announcements | Atwima Rural Bank PLC',
    description: 'Stay up to date with the latest news, rate changes, and community events from Atwima Rural Bank in the Ashanti Region.',
};

const articles = [
    {
        date: 'March 20, 2026',
        category: 'Rates',
        title: 'Fixed Deposit Rate Update: Now Earning Up to 22% Per Annum',
        summary: 'Atwima Rural Bank has updated its fixed deposit rates in response to the latest Bank of Ghana monetary policy. Customers can now earn up to 22% p.a. on 12-month deposits. Visit any branch or use our online calculator to plan your investment.',
        tag: 'Important',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    },
    {
        date: 'February 10, 2026',
        category: 'Community',
        title: 'Atwima Rural Bank Supports 2026 Foase Community Health Fair',
        summary: 'We were proud sponsors of the Foase Community Health Fair held at the Foase Recreation Park. Staff volunteered alongside medical teams to provide free savings consultations and financial literacy sessions to over 400 community members.',
        tag: 'News',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    },
    {
        date: 'January 15, 2026',
        category: 'Products',
        title: 'Introducing Online Financial Calculators on Our Website',
        summary: 'We are pleased to announce the launch of our free Financial Calculators — available now on atwimabank.com. Calculate your loan repayments, fixed deposit returns, and Susu savings projections instantly. No login required.',
        tag: 'New Feature',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    },
    {
        date: 'December 5, 2025',
        category: 'Notice',
        title: 'Holiday Banking Hours — Christmas & New Year 2025/2026',
        summary: 'All Atwima Rural Bank branches will operate on modified hours during the festive season. December 24: Close at 12:00 PM. December 25–26: Closed. December 31: Close at 12:00 PM. January 1: Closed. Normal hours resume January 2, 2026.',
        tag: 'Notice',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    },
    {
        date: 'November 12, 2025',
        category: 'Community',
        title: 'ARB Donates to Kwadaso JHS School Building Fund',
        summary: 'As part of our commitment to community development, Atwima Rural Bank donated GH₵15,000 to the Kwadaso Junior High School Building Fund. The contribution will be used for the construction of a new science laboratory for students.',
        tag: 'News',
        image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    },
];

const tagColors = {
    'Important': 'var(--error)',
    'New Feature': 'var(--primary-600)',
    'News': 'var(--secondary-600)',
    'Notice': 'var(--accent-600)',
};

export default function NewsPage() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <span className="section-label">Stay Informed</span>
                        <h1>News & Announcements</h1>
                        <p className={styles.heroSub}>The latest updates on rates, community impact, new services, and important notices from Atwima Rural Bank.</p>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className={styles.grid}>
                            {articles.map((a, i) => (
                                <article key={i} className={styles.card}>
                                    <div className={styles.cardThumb}>
                                        <Image fill src={a.image} alt={a.title} sizes="(max-width:768px) 100vw, 700px" style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className={styles.cardMeta}>
                                        <span className={styles.tag} style={{ background: `${tagColors[a.tag]}22`, color: tagColors[a.tag], border: `1px solid ${tagColors[a.tag]}44` }}>
                                            {a.tag}
                                        </span>
                                        <span className={styles.category}>{a.category}</span>
                                        <span className={styles.date}>{a.date}</span>
                                    </div>
                                    <h2 className={styles.cardTitle}>{a.title}</h2>
                                    <p className={styles.cardSummary}>{a.summary}</p>
                                    <div className={styles.cardFooter}>
                                        <Link href="/contact" className={styles.readMore}>
                                            Contact us for details →
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className={styles.subscribe}>
                            <h3>Never Miss an Update</h3>
                            <p>Get notified about rate changes, new products, and community events directly in your inbox.</p>
                            <Link href="/#newsletter" className="btn btn-primary">Subscribe to Updates</Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
        </>
    );
}
