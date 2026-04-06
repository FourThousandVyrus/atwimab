import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServiceCards from './components/ServiceCards';
import WhyChooseUs from './components/WhyChooseUs';
import DigitalBanking from './components/DigitalBanking';
import Testimonials from './components/Testimonials';
import Community from './components/Community';
import RatesSnapshot from './components/RatesSnapshot';
import CTABanner from './components/CTABanner';
import Newsletter from './components/Newsletter';
import BackToTop from './components/BackToTop';
import WhatsAppButton from './components/WhatsAppButton';
import SusuCalculator from './components/SusuCalculator';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ServiceCards />
        <WhyChooseUs />
        <DigitalBanking />
        <Community />
        <SusuCalculator />
        <Testimonials />
        <RatesSnapshot />
        <CTABanner />
        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
