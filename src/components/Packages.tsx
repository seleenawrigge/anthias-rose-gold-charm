import { Check, Star, Gift, Crown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import salonInterior from '@/assets/salon-interior-1.jpg';
import spaTreatment from '@/assets/spa-treatment.jpg';
import nailSalon from '@/assets/nail-salon.jpg';

const Packages = () => {
  const packages = [
    {
      title: 'Signature Glow',
      subtitle: 'Perfect for first-time clients',
      price: 199,
      originalPrice: 240,
      duration: '2.5 hours',
      image: spaTreatment,
      popular: false,
      icon: Star,
      services: [
        'Consultation & Skin Analysis',
        'Signature Facial Treatment',
        'Express Manicure',
        'Complimentary Beverage',
        'Product Recommendations'
      ],
      description: 'A perfect introduction to our luxury services with our most popular treatments.'
    },
    {
      title: 'Royal Treatment',
      subtitle: 'Our most popular package',
      price: 349,
      originalPrice: 420,
      duration: '4 hours',
      image: salonInterior,
      popular: true,
      icon: Crown,
      services: [
        'Full Hair Cut & Style',
        'Premium Color or Highlights',
        'Luxury Facial Treatment',
        'Full Manicure & Pedicure',
        'Scalp & Shoulder Massage',
        'Complimentary Lunch'
      ],
      description: 'The ultimate pampering experience with our complete range of premium services.'
    },
    {
      title: 'Bridal Bliss',
      subtitle: 'For your special day',
      price: 599,
      originalPrice: 750,
      duration: '6 hours',
      image: nailSalon,
      popular: false,
      icon: Gift,
      services: [
        'Bridal Hair Styling',
        'Professional Makeup',
        'Trial Session (separate day)',
        'Manicure & Pedicure',
        'Relaxing Facial',
        'Emergency Touch-up Kit',
        'Complimentary Champagne'
      ],
      description: 'Everything you need to look absolutely stunning on your wedding day.'
    }
  ];

  const addOns = [
    { service: 'Hair Extensions', price: 75 },
    { service: 'Eyebrow Shaping', price: 35 },
    { service: 'Eyelash Extensions', price: 95 },
    { service: 'Deep Tissue Massage', price: 65 },
    { service: 'Premium Hair Mask', price: 45 },
    { service: 'Nail Art Design', price: 25 }
  ];

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Luxury <span className="text-luxury">Packages</span>
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed">
            Curated combinations of our most popular services, designed to provide 
            exceptional value while delivering the ultimate luxury experience.
          </p>
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.title}
              className={`relative overflow-hidden group hover-lift ${
                pkg.popular 
                  ? 'card-luxury border-2 border-primary/30 shadow-luxury' 
                  : 'card-luxury'
              } fade-in-delay${index}`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-2 -right-2 z-10">
                  <Badge className="bg-gradient-primary text-white px-4 py-2 rounded-full shadow-elegant">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Package Image */}
              <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                    <pkg.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-white">
                    <div className="font-medium">{pkg.duration}</div>
                    <div className="text-sm opacity-90">{pkg.subtitle}</div>
                  </div>
                </div>
              </div>

              {/* Package Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-heading font-semibold text-luxury mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-elegant leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-heading font-bold text-luxury">
                    ${pkg.price}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${pkg.originalPrice}
                  </span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Save ${pkg.originalPrice - pkg.price}
                  </Badge>
                </div>

                {/* Services Included */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Services Included:</h4>
                  <ul className="space-y-2">
                    {pkg.services.map((service) => (
                      <li key={service} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Button */}
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 ${
                    pkg.popular
                      ? 'btn-luxury hover:scale-105'
                      : 'bg-secondary hover:bg-secondary-accent text-foreground hover:shadow-soft'
                  }`}
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book {pkg.title}
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Add-on Services */}
        <div className="card-luxury max-w-4xl mx-auto fade-in">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-semibold text-luxury mb-4">
              Add-On Services
            </h3>
            <p className="text-elegant">
              Enhance any package with these premium add-on services for the ultimate experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {addOns.map((addon) => (
              <div
                key={addon.service}
                className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
              >
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {addon.service}
                </span>
                <span className="text-luxury font-semibold">
                  +${addon.price}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              className="btn-elegant"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Customize Your Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;