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
                    8am - 2:30pm
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

          {/* Embedded Google Map */}
          <div className="relative">
            <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-primary-foreground/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.8!2d138.8075!3d-35.0283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab735c9e5555555%3A0x0!2sShop%203%2F56%20Mount%20Barker%20Rd%2C%20Hahndorf%20SA%205245!5e0!3m2!1sen!2sau!4v1699999999999!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Cafe 1839 Hahndorf Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-foreground/5 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;
