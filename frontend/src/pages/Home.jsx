import Header from '../components/Header';
import Hero from '../components/Hero';
import GapSection from '../components/GapSection';
import Platform from '../components/Platform';
import CaseStudies from '../components/CaseStudies';
import Integrations from '../components/Integrations';
import Solutions from '../components/Solutions';
import TeamsGrid from '../components/TeamsGrid';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ececec]">
      <Header />
      <main>
        <Hero />
        <GapSection />
        <Platform />
        <CaseStudies />
        <Integrations />
        <Solutions />
        <TeamsGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
