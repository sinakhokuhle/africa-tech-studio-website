import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-24 prose prose-invert max-w-3xl">
        <h1>Cookie Policy</h1>
        <p>We use cookies to provide essential site functionality and analyze traffic. You can manage consent via the banner shown on first visit.</p>
      </div>
      <Footer />
    </main>
  );
}


