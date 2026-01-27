import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const BOOKING_URL = "https://book.squareup.com/appointments/y05wmv6jskjejk/location/LZ2ET42N7M0EA/services";

const VisitSection = () => {
  return (
    <section id="visit" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <p className="text-primary-foreground/60 text-sm uppercase tracking-[0.2em] mb-4">
              Come Say Hello
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 leading-tight">
              Visit The Cafe <br />
              <span className="italic">1839 Hahndorf</span>
            </h2>
            <p className="text-primary-foreground/70 mb-10 max-w-md leading-relaxed">
              We'd love to welcome you! Stop by for your morning breakfast, 
              a leisurely brunch, or simply to enjoy great coffee and good company.
            </p>

            {/* Book Now Button */}
            <Button 
              variant="heroOutline" 
              size="lg" 
              className="mb-10"
              onClick={() => window.open(BOOKING_URL, '_blank')}
            >
              Book a Table
            </Button>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-primary-foreground/70 text-sm">
                    Shop 3/56 Mount Barker Rd<br />
                    Hahndorf SA 5245
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Hours</h3>
                  <p className="text-primary-foreground/70 text-sm">
                    Open: 8am - 3pm<br />
                    Kitchen: 8:30am - 2:30pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Contact</h3>
                  <p className="text-primary-foreground/70 text-sm">
                    0452 583 301<br />
                    thecafe1839@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map Link */}
          <div className="relative">
            <a 
              href="https://maps.app.goo.gl/E8VKiXcbpgNLp8LD6"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-primary-foreground/10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors duration-300 group"
            >
              <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center text-center px-8">
                <div className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-10 h-10 text-primary-foreground/80" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-2">Find Us on Google Maps</h3>
                <p className="text-primary-foreground/60 text-sm mb-4">
                  Shop 3/56 Mount Barker Rd<br />
                  Hahndorf SA 5245
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground group-hover:underline">
                  Open in Google Maps →
                </span>
              </div>
            </a>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-foreground/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;