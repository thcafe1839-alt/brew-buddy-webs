import cappuccinoImg from "@/assets/cappuccino.jpg";
import croissantImg from "@/assets/croissant.jpg";
import icedCoffeeImg from "@/assets/iced-coffee.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

const menuItems: MenuItem[] = [
  {
    name: "Signature Cappuccino",
    description: "Velvety espresso topped with silky steamed milk and artisanal latte art",
    price: "$5.50",
    image: cappuccinoImg,
    tag: "Popular",
  },
  {
    name: "Butter Croissant",
    description: "Freshly baked, golden flaky layers of French-style pastry",
    price: "$4.25",
    image: croissantImg,
    tag: "House Made",
  },
  {
    name: "Cold Brew Latte",
    description: "Smooth 18-hour cold brew blended with creamy oat milk over ice",
    price: "$6.00",
    image: icedCoffeeImg,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-4">
            Curated Selection
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Our Favorites
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Crafted with passion, served with love. Discover our most beloved creations.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-5 shadow-warm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.tag && (
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-accent font-semibold">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors group"
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-current after:origin-right after:scale-x-0 group-hover:after:origin-left group-hover:after:scale-x-100 after:transition-transform">
              View Full Menu
            </span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
