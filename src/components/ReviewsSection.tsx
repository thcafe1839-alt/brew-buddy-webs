import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

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
    text: "Best cafe in Hahndorf! The 1839 Feast is incredible and the coffee is always perfect. Beautiful atmosphere and great service.",
    date: "1 month ago"
  },
  {
    name: "Emma K.",
    rating: 5,
    text: "Such a cozy spot with delicious food. We had the eggs benedict and flat whites - both were exceptional. Will definitely be back!",
    date: "3 weeks ago"
  },
  {
    name: "Michael T.",
    rating: 5,
    text: "Hidden gem in Hahndorf! The Shakshuka was absolutely divine and the coffee rivals any Melbourne cafe. Lovely rustic atmosphere with very attentive staff.",
    date: "1 week ago"
  },
  {
    name: "Lisa R.",
    rating: 5,
    text: "Perfect brunch spot! The Smashed Avo is loaded with flavour and the chai latte was creamy and delicious. Already planning our next visit!",
    date: "4 days ago"
  },
  {
    name: "David W.",
    rating: 5,
    text: "Outstanding food and service! The Triple Stack Pancakes were fluffy perfection. Great coffee, cozy vibes, and the friendliest team. Highly recommend!",
    date: "5 days ago"
  },
  {
    name: "Sophie H.",
    rating: 5,
    text: "What a find! Fresh, tasty food with generous portions. The Big Bruschetta was amazing. Love the warm, welcoming atmosphere of this cafe.",
    date: "2 weeks ago"
  },
  {
    name: "Chris B.",
    rating: 5,
    text: "Best breakfast in the Adelaide Hills! The Wafflicious is a must-try. Staff are lovely and the coffee is top-notch. Our new favourite cafe!",
    date: "3 days ago"
  }
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate reviews every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
      setIsAnimating(false);
    }, 300);
  };

  const currentReview = reviews[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
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

        {/* Single Review Display */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors z-10"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors z-10"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Review Card */}
            <div 
              className={`bg-secondary/30 rounded-2xl p-8 md:p-12 border border-border text-center transition-all duration-300 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentReview.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Quote Icon */}
              <div className="text-accent/30 text-6xl font-serif leading-none mb-4">"</div>
              
              {/* Review Text */}
              <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
                {currentReview.text}
              </p>
              
              {/* Author */}
              <div>
                <p className="font-semibold text-foreground text-lg">{currentReview.name}</p>
                <p className="text-sm text-muted-foreground">{currentReview.date}</p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== currentIndex) {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsAnimating(false);
                    }, 300);
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-accent w-6" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
