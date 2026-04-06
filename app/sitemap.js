export default function sitemap() {
    const base = 'https://atwimabank.com';
    const now = new Date();

    const routes = [
        { url: base, priority: 1.0, changeFrequency: 'weekly' },
        { url: `${base}/personal-banking`, priority: 0.9, changeFrequency: 'monthly' },
        { url: `${base}/business-banking`, priority: 0.9, changeFrequency: 'monthly' },
        { url: `${base}/loans`, priority: 0.9, changeFrequency: 'monthly' },
        { url: `${base}/investments`, priority: 0.8, changeFrequency: 'monthly' },
        { url: `${base}/remittance`, priority: 0.8, changeFrequency: 'monthly' },
        { url: `${base}/calculators`, priority: 0.8, changeFrequency: 'monthly' },
        { url: `${base}/faq`, priority: 0.7, changeFrequency: 'monthly' },
        { url: `${base}/news`, priority: 0.7, changeFrequency: 'weekly' },
        { url: `${base}/about`, priority: 0.7, changeFrequency: 'monthly' },
        { url: `${base}/contact`, priority: 0.8, changeFrequency: 'monthly' },
        { url: `${base}/security`, priority: 0.6, changeFrequency: 'monthly' },
        { url: `${base}/careers`, priority: 0.6, changeFrequency: 'weekly' },
        { url: `${base}/downloads`, priority: 0.6, changeFrequency: 'monthly' },
        { url: `${base}/privacy-policy`, priority: 0.4, changeFrequency: 'yearly' },
    ];

    return routes.map(r => ({ ...r, lastModified: now }));
}
