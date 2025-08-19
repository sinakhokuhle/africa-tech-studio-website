import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import PortfolioHero from '@/components/sections/portfolio-hero';
import ProjectsGrid from '@/components/sections/projects-grid';

export const metadata = {
  title: 'Portfolio - Africa Tech Studio',
  description: 'Explore our latest web development and AI automation projects.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PortfolioHero />
      <ProjectsGrid />
      <Footer />
    </main>
  );
}