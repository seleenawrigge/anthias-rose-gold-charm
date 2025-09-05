import { useState, useEffect } from 'react';
import { X, Gift, Mail, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Show modal after 5 seconds or when user scrolls down 50%
    const timer = setTimeout(() => {
      if (!localStorage.getItem('newsletter-modal-shown')) {
        setIsOpen(true);
      }
    }, 5000);

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 50 && !localStorage.getItem('newsletter-modal-shown')) {
        setIsOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      // Here you would typically send the data to your newsletter service
      toast({
        title: "Welcome to Anthias!",
        description: "You've been successfully subscribed to our newsletter. Check your email for your exclusive 20% off coupon!",
        duration: 5000,
      });
      
      localStorage.setItem('newsletter-modal-shown', 'true');
      setIsOpen(false);
      setEmail('');
      setName('');
    }
  };

  const handleClose = () => {
    localStorage.setItem('newsletter-modal-shown', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-luxury overflow-hidden animate-fade-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-soft transition-all hover:scale-110"
        >
          <X className="w-4 h-4 text-foreground" />
        </button>

        {/* Header with gradient */}
        <div className="relative bg-gradient-hero p-8 text-center">
          <div className="absolute inset-0 bg-white/10"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-white mb-2">
              Exclusive Offer!
            </h2>
            <div className="flex items-center justify-center space-x-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-white text-white" />
              ))}
            </div>
            <p className="text-white/90 text-sm">
              Join our VIP list and get 20% off your first visit
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-heading font-semibold text-luxury mb-2">
              Stay in the Know
            </h3>
            <p className="text-elegant text-sm leading-relaxed">
              Be the first to know about new services, exclusive promotions, 
              and beauty tips from our expert stylists.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-secondary/30 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-foreground mb-3 flex items-center">
              <Mail className="w-4 h-4 text-primary mr-2" />
              VIP Member Benefits:
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>20% off your first appointment</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Early access to new services</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Monthly beauty tips & trends</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span>Birthday month special offers</span>
              </li>
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full btn-luxury"
            >
              Claim My 20% Discount
            </Button>
          </form>

          <p className="text-xs text-muted-foreground text-center mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterModal;