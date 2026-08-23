import Header from '../components/Header';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import CalculatorsClient from './CalculatorsClient';

export const metadata = {
    title: 'Financial Calculators | Loan, Fixed Deposit & Susu | Atwima Community Bank PLC',
    description: 'Calculate commercial loan payments, fixed deposit simple interest yields, and Susu daily savings plan goals online. Free tools localized for Kumasi and the Ashanti Region.',
};

export default function CalculatorsPage() {
    const calculatorSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Financial Calculators | Atwima Community Bank PLC',
        'description': 'Calculate commercial loan repayments, fixed deposit investment returns, and daily Susu savings accumulations.',
        'mainEntity': [
            {
                '@type': 'FinancialProduct',
                'name': 'Atwima Commercial & Personal Loan Calculator',
                'description': 'Calculate estimated monthly loan payments based on reducing balance interest rates.'
            },
            {
                '@type': 'FinancialProduct',
                'name': 'Atwima Fixed Deposit Investment Calculator',
                'description': 'Calculate maturity values and simple interest earned on locked deposit durations.'
            },
            {
                '@type': 'FinancialProduct',
                'name': 'Atwima Susu Daily Savings Planner',
                'description': 'Calculate total accumulated daily savings towards a financial milestone.'
            }
        ]
    };

    return (
        <>
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
            />
            <CalculatorsClient />
            <Footer />
            <BackToTop />
            <WhatsAppButton />
        </>
    );
}
