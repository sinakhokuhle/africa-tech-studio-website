import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ServicesHero from '@/components/sections/services-hero';
import ServicesList from '@/components/sections/services-list';
import PricingPlans from '@/components/sections/pricing-plans';

export const metadata = {
  title: 'Our Services - Africa Tech Studio',
  description: 'Comprehensive web development, AI automation, and digital solutions for modern businesses.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServicesList />
      <PricingPlans />
      <Footer />
    </main>
  );
}