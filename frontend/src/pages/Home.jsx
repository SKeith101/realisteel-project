import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhyChoose from '../components/WhyChoose';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import WhatsAppFAB from '../components/WhatsAppFAB';
import ScrollProgress from '../components/ScrollProgress';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ececec]">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <TrustBanner />
        <Services />
        <Testimonials />
        <Portfolio />
        <WhyChoose />
        <Process />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}