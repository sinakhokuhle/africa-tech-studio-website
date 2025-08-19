import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import ClientLogos from '@/components/sections/client-logos';
import Testimonials from '@/components/sections/testimonials';
import CTABanner from '@/components/sections/cta-banner';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <ClientLogos />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  );
}