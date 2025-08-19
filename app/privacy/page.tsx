import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-24 prose prose-invert max-w-3xl">
        <h1>Privacy Policy</h1>
        <p>This is a generic privacy policy placeholder for Africa Tech Studio. Replace with your legal copy. We use cookies for analytics and to improve your experience. We do not sell your data.</p>
        <h2>Cookies</h2>
        <p>We use essential cookies and analytics cookies (Plausible or Google Analytics). You can opt out via the cookie banner.</p>
        <h2>Contact</h2>
        <p>For questions, email hello@africatechstudio.com.</p>
      </div>
      <Footer />
    </main>
  );
}


