import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ContactHero from '@/components/sections/contact-hero';
import ContactForm from '@/components/sections/contact-form';
import ContactInfo from '@/components/sections/contact-info';

export const metadata = {
  title: 'Contact Us - Africa Tech Studio',
  description: 'Get in touch with our team for your next web development or AI automation project.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
      <Footer />
    </main>
  );
}