import { Button } from '@/components/ui/button';
import { Calendar, Star, Award } from 'lucide-react';
import heroImage from '@/assets/hero-salon.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Anthias Luxury Salon Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        <div className="max-w-2xl">
          <div className="fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">5.0 • 500+ Reviews</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              <span className="text-luxury">Anthias</span>
              <br />
              <span className="text-foreground">Luxury Salon</span>
            </h1>

            <p className="text-xl text-elegant mb-8 leading-relaxed">
              Experience the pinnacle of beauty and wellness in our award-winning salon. 
              Where luxury meets expertise, creating transformative experiences that elevate your natural beauty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                className="btn-luxury group"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Book Your Experience
              </Button>
              <Button 
                className="btn-elegant"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-primary" />
                <span>Award Winning</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-primary"></div>
                <span>Premium Products</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-primary"></div>
                <span>Expert Stylists</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 right-10 hidden lg:block animate-float">
          <div className="glass-effect p-6 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-heading font-bold text-luxury mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-32 right-32 hidden xl:block animate-float" style={{ animationDelay: '1s' }}>
          <div className="glass-effect p-4 rounded-xl">
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-luxury mb-1">500+</div>
              <div className="text-xs text-muted-foreground"> Happy Clients</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;