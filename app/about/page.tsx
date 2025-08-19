import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import AboutHero from '@/components/sections/about-hero';
import CompanyStory from '@/components/sections/company-story';
import CoreValues from '@/components/sections/core-values';
import ClientLogos from '@/components/sections/client-logos';

export const metadata = {
  title: 'About Us - Africa Tech Studio',
  description: 'Learn about our mission to empower African businesses with cutting-edge technology solutions.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <CompanyStory />
      <CoreValues />
      <ClientLogos />
      <Footer />
    </main>
  );
}