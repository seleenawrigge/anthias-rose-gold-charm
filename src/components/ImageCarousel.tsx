import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-salon.jpg';
import salonInterior from '@/assets/salon-interior-1.jpg';
import spaTreatment from '@/assets/spa-treatment.jpg';
import nailSalon from '@/assets/nail-salon.jpg';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage,
      title: 'Luxury Salon Experience',
      subtitle: 'Where elegance meets expertise'
    },
    {
      image: salonInterior,
      title: 'Premium Hair Services',
      subtitle: 'Transform your look with our expert stylists'
    },
    {
      image: spaTreatment,
      title: 'Rejuvenating Spa Treatments',
      subtitle: 'Relax and restore your natural glow'
    },
    {
      image: nailSalon,
      title: 'Exquisite Nail Artistry',
      subtitle: 'Perfect manicures and pedicures'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Discover <span className="text-luxury">Anthias</span>
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed">
            Step into our world of luxury and see why clients choose Anthias for their beauty and wellness needs.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-luxury fade-in-delay">
          {/* Images */}
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                  index === currentSlide ? 'translate-x-0' : 
                  index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Slide Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="max-w-2xl">
                    <h3 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-lg md:text-xl opacity-90">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-primary" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-primary" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="mt-12 card-luxury max-w-4xl mx-auto text-center fade-in-delay-2">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Special Opening Promotion
            </h3>
            <p className="text-lg mb-6 opacity-90">
              New clients receive 20% off their first visit and a complimentary consultation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Your First Visit
              </button>
              <button
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;