import cafeInteriorImg from "@/assets/cafe-interior.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm-lg">
              <img
                src={cafeInteriorImg}
                alt="Cozy cafe interior with plants and warm lighting"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-accent text-sm uppercase tracking-[0.2em] mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              More Than Just <br />
              <span className="italic">a Coffee Shop</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2018, Aroma was born from a simple belief: great coffee brings people together. 
                What started as a small corner shop has grown into a beloved community gathering space.
              </p>
              <p>
                We source our beans directly from sustainable farms across Ethiopia, Colombia, and Guatemala. 
                Each cup is crafted by our skilled baristas who share our passion for the perfect brew.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              <div>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-foreground">6+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Brewing</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-foreground">50k</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Customers</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-foreground">12</p>
                <p className="text-sm text-muted-foreground mt-1">Bean Origins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
