import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-24 prose prose-invert max-w-3xl">
        <h1>Terms of Service</h1>
        <p>These terms are a placeholder. Use your own legal terms. By using our website, you agree to our terms and policies.</p>
        <h2>Use of Service</h2>
        <p>Do not misuse our services. You may not attempt to disrupt or access areas without authorization.</p>
        <h2>Contact</h2>
        <p>Contact: hello@africatechstudio.com</p>
      </div>
      <Footer />
    </main>
  );
}


