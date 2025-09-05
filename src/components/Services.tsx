import { Scissors, Sparkles, Heart, Flower, Crown, Gem } from 'lucide-react';
import { Card } from '@/components/ui/card';
import salonInterior from '@/assets/salon-interior-1.jpg';
import spaTreatment from '@/assets/spa-treatment.jpg';
import nailSalon from '@/assets/nail-salon.jpg';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Hair Styling & Color',
      description: 'Expert cuts, precision coloring, and luxury treatments using premium products for stunning transformations.',
      features: ['Precision Cuts', 'Color Correction', 'Highlights & Balayage', 'Hair Treatments'],
      image: salonInterior,
      price: 'From $85'
    },
    {
      icon: Sparkles,
      title: 'Facial & Skincare',
      description: 'Rejuvenating facial treatments tailored to your skin type, revealing your natural radiance.',
      features: ['Anti-Aging Facials', 'Deep Cleansing', 'Hydrating Treatments', 'Custom Skincare'],
      image: spaTreatment,
      price: 'From $120'
    },
    {
      icon: Gem,
      title: 'Nail Artistry',
      description: 'Exquisite manicures and pedicures with attention to detail and premium nail care products.',
      features: ['Gel Manicures', 'Luxury Pedicures', 'Nail Art', 'Cuticle Care'],
      image: nailSalon,
      price: 'From $45'
    },
    {
      icon: Crown,
      title: 'Bridal Packages',
      description: 'Complete bridal beauty services to make your special day absolutely perfect and memorable.',
      features: ['Bridal Hair', 'Wedding Makeup', 'Trial Sessions', 'Party Packages'],
      image: salonInterior,
      price: 'From $350'
    },
    {
      icon: Heart,
      title: 'Wellness Treatments',
      description: 'Relaxing massage therapy and wellness services to rejuvenate your body and mind.',
      features: ['Swedish Massage', 'Deep Tissue', 'Reflexology', 'Aromatherapy'],
      image: spaTreatment,
      price: 'From $95'
    },
    {
      icon: Flower,
      title: 'Special Occasions',
      description: 'Glamorous styling for special events, parties, and professional photoshoots.',
      features: ['Event Styling', 'Photoshoot Prep', 'Party Makeup', 'Group Bookings'],
      image: nailSalon,
      price: 'From $75'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Our <span className="text-luxury">Services</span>
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of luxury beauty and wellness services, 
            each designed to enhance your natural beauty and provide an exceptional experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`card-luxury group cursor-pointer overflow-hidden fade-in-delay${index % 3 === 0 ? '' : index % 3 === 1 ? ' fade-in-delay' : ' fade-in-delay-2'}`}
            >
              {/* Service Image */}
              <div className="relative h-48 mb-6 -mx-6 -mt-6 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-medium">{service.price}</span>
                </div>
              </div>

              {/* Service Content */}
              <div>
                <h3 className="text-2xl font-heading font-semibold mb-3 text-luxury">
                  {service.title}
                </h3>
                <p className="text-elegant mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Book Button */}
                <button
                  className="w-full mt-6 py-3 bg-gradient-primary text-white rounded-lg font-medium hover:shadow-elegant transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book This Service
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in">
          <div className="card-luxury max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold mb-4 text-luxury">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-elegant mb-6">
              We offer customized treatments and packages tailored to your specific needs. 
              Contact us to discuss your requirements.
            </p>
            <button
              className="btn-luxury"
              onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;