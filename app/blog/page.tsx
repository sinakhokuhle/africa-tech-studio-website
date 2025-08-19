import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import BlogHero from '@/components/sections/blog-hero';
import BlogGrid from '@/components/sections/blog-grid';

export const metadata = {
  title: 'Blog - Africa Tech Studio',
  description: 'Latest insights on web development, AI automation, and technology trends.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BlogHero />
      <BlogGrid />
      <Footer />
    </main>
  );
}