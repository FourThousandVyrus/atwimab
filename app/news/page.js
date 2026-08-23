import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import Link from 'next/link';
import NewsClient from './NewsClient';
import styles from './page.module.css';

export const metadata = {
    title: 'News & Announcements | Atwima Community Bank PLC',
    description: 'Stay updated with local banking news, interest rate changes, and community donation events from Atwima Community Bank. Proudly serving the Ashanti Region.',
    keywords: 'Atwima bank news, Foase community announcements, Ashanti region banking updates, community bank interest rates Ghana',
};

export default function NewsPage() {
    const listSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Atwima Community Bank News & Announcements',
        'description': 'Latest updates on interest rates, notices, product releases, and community contributions from Atwima Community Bank.',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'item': {
                    '@type': 'NewsArticle',
                    'headline': 'Fixed Deposit Rate Update: Now Earning Up to 22% Per Annum',
                    'datePublished': '2026-03-20',
                    'image': 'https://atwimabank.com/news/fixed-deposit.jpg',
                    'author': {
                        '@type': 'Organization',
                        'name': 'Atwima Community Bank PLC'
                    }
                }
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'item': {
                    '@type': 'NewsArticle',
                    'headline': 'Atwima Community Bank Supports 2026 Foase Community Health Fair',
                    'datePublished': '2026-02-10',
                    'image': 'https://atwimabank.com/news/health-fair.jpg',
                    'author': {
                        '@type': 'Organization',
                        'name': 'Atwima Community Bank PLC'
                    }
                }
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'item': {
                    '@type': 'NewsArticle',
                    'headline': 'Introducing Online Financial Calculators on Our Website',
                    'datePublished': '2026-01-15',
                    'image': 'https://atwimabank.com/news/calculators.jpg',
                    'author': {
                        '@type': 'Organization',
                        'name': 'Atwima Community Bank PLC'
                    }
                }
            }
        ]
    };

    return (
        <>
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
            />
            <main>
                <section className={styles.hero}>
                    <div className="container">
                        <div className={styles.heroContent}>
                            <nav className={styles.breadcrumbs} aria-label="Breadcrumbs">
                                <Link href="/">Home</Link>
                                <span aria-hidden="true">/</span>
                                <span>News</span>
                            </nav>
                            <h1 className={styles.heroTitle}>News &amp; Notices</h1>
                            <p className={styles.heroSub}>
                                The latest financial news, rate modifications, service updates, and community sponsorships from across the Ashanti Region.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <NewsClient />
                </section>
            </main>
            <Footer />
            <BackToTop />
            <WhatsAppButton />
        </>
    );
}
