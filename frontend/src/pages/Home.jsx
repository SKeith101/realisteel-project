import useLenis from '../hooks/useLenis';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBanner from '../components/TrustBanner';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhyChoose from '../components/WhyChoose';
import Process from '../components/Process';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import WhatsAppFAB from '../components/WhatsAppFAB';
import ScrollProgress from '../components/ScrollProgress';

export default function Home() {
  useLenis();
  return (
    <div className="min-h-screen bg-[#ececec] overflow-x-hidden">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <TrustBanner />
        <Services />
        <Portfolio />
        <WhyChoose />
        <Process />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
