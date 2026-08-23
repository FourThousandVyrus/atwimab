import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import FaqClient from './FaqClient';

// Static FAQs for JSON-LD schema generation
const faqsData = [
    {
        category: 'Accounts',
        items: [
            { q: 'What types of accounts does Atwima Community Bank offer?', a: 'We offer Current Accounts, Savings Accounts, Salary Accounts, Susu Accounts, and Kiddies Accounts — each designed for different financial needs.' },
            { q: 'How do I open an account?', a: 'Visit any of our 6 branches with a valid national ID (Ghana Card, Voter\'s ID, or Passport), 2 passport photos, and an initial deposit. You can also call us to book an appointment.' },
            { q: 'What is the minimum balance for a savings account?', a: 'Our savings accounts have a minimal opening deposit. Please contact your nearest branch for the current minimum balance requirements.' },
            { q: 'Can I open a Kiddies Account for my child?', a: 'Yes. A parent or guardian can open a Kiddies Account for a child under 18. You will need the child\'s birth certificate and your own valid ID.' },
            { q: 'What is a Susu Account?', a: 'The Susu Account is our daily savings scheme. Our collector visits you at your home or business to collect your daily contribution, which is deposited into your account. It is ideal for market traders, artisans, and anyone who prefers door-to-door saving.' },
        ]
    },
    {
        category: 'Loans',
        items: [
            { q: 'What loans do you offer?', a: 'We offer Salary Loans, Commercial Loans, Transport Loans, Susu Loans, Funeral Loans, Church Development Loans, Group Loans, and Overdraft facilities.' },
            { q: 'What are the loan interest rates?', a: 'Rates start from 28% per annum for salary loans and 30% per annum for commercial loans. Rates are revised periodically in line with Bank of Ghana directives. Visit a branch for a personalised quote.' },
            { q: 'How do I apply for a loan?', a: 'Visit any of our branches with your valid ID, recent payslip or business registration documents, and completed loan application form. Our staff will guide you through the process.' },
            { q: 'How long does loan approval take?', a: 'Salary loans are typically processed within 3–5 working days once all required documents are submitted. Commercial loans may take longer depending on the amount and collateral.' },
            { q: 'Do you offer group loans?', a: 'Yes. Group loans are available for community groups, cooperatives, and associations. The group acts as a guarantee for each member.' },
        ]
    },
    {
        category: 'Investments',
        items: [
            { q: 'What investment products are available?', a: 'We offer ARB Fixed Deposits and ARB Shares. Fixed deposits currently earn up to 22% per annum for a 12-month term.' },
            { q: 'What is the minimum amount for a fixed deposit?', a: 'Contact our branches for current minimum deposit requirements as they may be updated periodically.' },
            { q: 'Can I withdraw my fixed deposit early?', a: 'Early withdrawal is subject to a penalty and reduced interest rate. Please discuss terms with our investment team before opening a fixed deposit.' },
            { q: 'What are ARB Shares?', a: 'ARB Shares are equity shares in Atwima Community Bank. As a shareholder you are a co-owner of the bank and receive annual dividend payments based on the bank\'s performance.' },
        ]
    },
    {
        category: 'Remittance',
        items: [
            { q: 'Can I receive money from abroad?', a: 'Yes. We are a Western Union agent. You can receive international money transfers at any of our 6 branches. Same-day processing is available.' },
            { q: 'What do I need to receive a Western Union transfer?', a: 'You need a valid ID (Ghana Card, Passport, or Voter\'s ID), the Money Transfer Control Number (MTCN) from the sender, and the exact amount sent.' },
            { q: 'What are the branch hours for remittance?', a: 'Remittance is available during normal banking hours: Monday–Friday 8:00 AM – 4:30 PM, Saturday 8:00 AM – 12:00 PM.' },
        ]
    },
    {
        category: 'Branches & Hours',
        items: [
            { q: 'Where are your branches located?', a: 'We have 6 branches: Foase (Head Office), Kwadaso, Patasi, Mpasatia, Allabar, and Daban — all in the Ashanti Region of Ghana.' },
            { q: 'What are your opening hours?', a: 'Monday to Friday: 8:30 AM – 4:30 PM. Saturday: 8:30 AM – 12:00 PM. Closed on Sundays and public holidays.' },
            { q: 'Do I need an appointment to visit?', a: 'No appointment is needed for routine transactions. However, for loans, investments, or complex services, we recommend booking an appointment via WhatsApp or phone so we can prepare for your visit.' },
            { q: 'How do I contact the bank?', a: 'Call or WhatsApp us on 0501 387 040, or email info@atwimabank.com. You can also use the contact form on our Contact page.' },
        ]
    }
];

export const metadata = {
    title: 'Frequently Asked Questions (FAQ) | Atwima Community Bank PLC',
    description: 'Find answers to common questions about opening savings and current accounts, loan applications, fixed deposit rates, and remittance services in the Ashanti Region.',
};

export default function FAQPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqsData.flatMap(cat => 
            cat.items.map(item => ({
                '@type': 'Question',
                'name': item.q,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': item.a
                }
            }))
        )
    };

    return (
        <>
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <FaqClient />
            <Footer />
            <BackToTop />
            <WhatsAppButton />
        </>
    );
}
