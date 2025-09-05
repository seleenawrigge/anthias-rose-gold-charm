import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    stylist: '',
    notes: ''
  });
  const { toast } = useToast();

  const services = [
    'Hair Cut & Style',
    'Hair Color & Highlights',
    'Facial Treatment',
    'Manicure & Pedicure',
    'Massage Therapy',
    'Signature Glow Package',
    'Royal Treatment Package',
    'Bridal Bliss Package',
    'Custom Package'
  ];

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM'
  ];

  const stylists = [
    'Any Available Stylist',
    'Sarah - Senior Colorist',
    'Emma - Master Stylist',
    'Mia - Bridal Specialist',
    'Ava - Facial Expert',
    'Luna - Nail Artist'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, phone, service, date, and time are required.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the booking data to your backend
    toast({
      title: "Booking Request Sent!",
      description: "We'll confirm your appointment within 2 hours. Check your email for details.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      stylist: '',
      notes: ''
    });
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Book Your <span className="text-luxury">Appointment</span>
          </h2>
          <p className="text-xl text-elegant max-w-3xl mx-auto leading-relaxed">
            Ready to transform your look? Schedule your appointment with our expert team 
            and experience the luxury of Anthias Salon.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2 fade-in">
              <Card className="card-luxury">
                <h3 className="text-2xl font-heading font-semibold text-luxury mb-6">
                  Appointment Details
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full"
                      required
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Service *
                    </label>
                    <Select onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Preferred Date *
                      </label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        className="w-full"
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Preferred Time *
                      </label>
                      <Select onValueChange={(value) => handleInputChange('time', value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Stylist Preference */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Stylist Preference
                    </label>
                    <Select onValueChange={(value) => handleInputChange('stylist', value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose a stylist (optional)" />
                      </SelectTrigger>
                      <SelectContent>
                        {stylists.map((stylist) => (
                          <SelectItem key={stylist} value={stylist}>
                            {stylist}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Special Notes */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Special Requests or Notes
                    </label>
                    <Textarea
                      placeholder="Any allergies, special requests, or additional information..."
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      className="w-full h-24 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full btn-luxury">
                    Request Appointment
                  </Button>
                </form>
              </Card>
            </div>

            {/* Booking Info Sidebar */}
            <div className="space-y-6 fade-in-delay">
              {/* Contact Card */}
              <Card className="card-luxury">
                <h4 className="text-lg font-heading font-semibold text-luxury mb-4">
                  Quick Contact
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">(555) 123-4567</p>
                      <p className="text-sm text-muted-foreground">Call for same-day appointments</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">hello@anthiassalon.com</p>
                      <p className="text-sm text-muted-foreground">Questions about services</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Policy Card */}
              <Card className="card-luxury">
                <h4 className="text-lg font-heading font-semibold text-luxury mb-4">
                  Booking Policy
                </h4>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Confirmation within 2 hours of booking request</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>24-hour cancellation policy to avoid charges</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>Please arrive 10 minutes early for your appointment</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p>First-time clients receive complimentary consultation</p>
                  </div>
                </div>
              </Card>

              {/* Hours Card */}
              <Card className="card-luxury">
                <h4 className="text-lg font-heading font-semibold text-luxury mb-4">
                  Business Hours
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Mon - Wed</span>
                    <span className="text-foreground">9AM - 7PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Thu - Fri</span>
                    <span className="text-foreground">9AM - 8PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">8AM - 6PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">10AM - 5PM</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;