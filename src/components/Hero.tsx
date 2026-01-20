import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cafe.jpg";

const BOOKING_URL = "https://book.squareup.com/appointments/y05wmv6jskjejk/location/LZ2ET42N7M0EA/services";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="The Cafe 1839 Hahndorf - cozy cafe interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p 
            className="text-cream/80 text-sm md:text-base uppercase tracking-[0.3em] mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Hahndorf's Finest • Est. 1839
          </p>
          
          <h1 
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-cream mb-6 leading-tight opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            The Cafe 1839 <br />
            <span className="italic">Hahndorf</span>
          </h1>
          
          <p 
            className="text-cream/80 text-lg md:text-xl max-w-xl mx-auto mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Service with Smile
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open(BOOKING_URL, '_blank')}
            >
              Book Now
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#menu">View Menu</a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <a 
            href="#menu" 
            className="flex flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors group"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Steam Animation Elements */}
      <div className="absolute bottom-1/4 left-1/4 w-2 h-20 bg-cream/10 rounded-full blur-sm animate-steam" />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-16 bg-cream/10 rounded-full blur-sm animate-steam" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;
