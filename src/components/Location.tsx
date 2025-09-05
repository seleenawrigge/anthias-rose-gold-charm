import { MapPin, Phone, Mail, Clock, Car, Train } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Location = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      detail: '(555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'hello@anthiassalon.com',
      action: 'mailto:hello@anthiassalon.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      detail: '123 Luxury Avenue, Downtown District, City 12345',
      action: '#'
    }
  ];

  const hours = [
    { day: 'Monday', time: '9:00 AM - 7:00 PM' },
    { day: 'Tuesday', time: '9:00 AM - 7:00 PM' },
    { day: 'Wednesday', time: '9:00 AM - 7:00 PM' },
    { day: 'Thursday', time: '9:00 AM - 8:00 PM' },
    { day: 'Friday', time: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 5:00 PM' }
  ];

  return (
    <section id="location" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Visit <span className="text-luxury">Our Salon</span>
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed">
            Located in the heart of downtown, our luxurious salon is easily accessible 
            and provides a serene escape from the bustling city.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="fade-in">
            <div className="card-luxury overflow-hidden">
              <div className="h-80 bg-gradient-soft rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for map - in real implementation, use Google Maps or similar */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/20"></div>
                <div className="relative z-10 text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-heading font-semibold text-luxury mb-2">
                    Downtown Location
                  </h3>
                  <p className="text-elegant">
                    123 Luxury Avenue<br />
                    Downtown District<br />
                    City 12345
                  </p>
                  <button className="mt-4 btn-elegant">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 bg-white/70 backdrop-blur-sm border border-primary/10">
                <div className="flex items-center space-x-3">
                  <Car className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Parking</h4>
                    <p className="text-sm text-muted-foreground">Valet available</p>
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-white/70 backdrop-blur-sm border border-primary/10">
                <div className="flex items-center space-x-3">
                  <Train className="w-6 h-6 text-primary" />
                  <div>
                    <h4 className="font-semibold text-foreground">Transit</h4>
                    <p className="text-sm text-muted-foreground">Metro nearby</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-8 fade-in-delay">
            {/* Contact Information */}
            <div className="card-luxury">
              <h3 className="text-2xl font-heading font-semibold text-luxury mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.title}
                    href={info.action}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground">{info.detail}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="card-luxury">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-heading font-semibold text-luxury">
                  Business Hours
                </h3>
              </div>
              <div className="space-y-3">
                {hours.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex items-center justify-between py-2 border-b border-primary/10 last:border-b-0"
                  >
                    <span className="font-medium text-foreground">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <span className="font-medium text-primary">Note:</span> Extended hours available for special events and bridal parties
                </p>
              </div>
            </div>

            {/* Special Features */}
            <div className="card-luxury">
              <h3 className="text-xl font-heading font-semibold text-luxury mb-4">
                What Makes Us Special
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary font-bold">15+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary font-bold">500+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary font-bold">10</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Expert Stylists</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-primary font-bold">5★</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;