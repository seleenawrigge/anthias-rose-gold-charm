import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageCarousel from '@/components/ImageCarousel';
import Services from '@/components/Services';
import Packages from '@/components/Packages';
import Location from '@/components/Location';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';
import NewsletterModal from '@/components/NewsletterModal';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ImageCarousel />
        <Services />
        <Packages />
        <Location />
        <Booking />
      </main>
      <Footer />
      <NewsletterModal />
    </div>
  );
};

export default Index;
