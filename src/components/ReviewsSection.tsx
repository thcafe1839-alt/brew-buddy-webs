import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely love this place! The coffee is amazing and the breakfast is to die for. The staff are so friendly and welcoming. A must-visit in Hahndorf!",
    date: "2 weeks ago"
  },
  {
    name: "James L.",
    rating: 5,
    text: "Best cafe in Hahndorf! The 1839 Breakky is incredible and the coffee is always perfect. Beautiful atmosphere and great service.",
    date: "1 month ago"
  },
  {
    name: "Emma K.",
    rating: 5,
    text: "Such a cozy spot with delicious food. We had the eggs benedict and flat whites - both were exceptional. Will definitely be back!",
    date: "3 weeks ago"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-4">
            What People Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Customer Reviews
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-accent text-accent" />
            ))}
          </div>
          <a 
            href="https://maps.app.goo.gl/E8VKiXcbpgNLp8LD6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors text-sm"
          >
            See all reviews on Google →
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-secondary/30 rounded-2xl p-8 border border-border hover:shadow-warm-lg transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{review.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <p className="font-medium text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
