import { useState } from "react";
import { UtensilsCrossed, Coffee, Cake } from "lucide-react";

type MenuCategory = "food" | "beverage" | "cakes";

interface MenuItem {
  name: string;
  description?: string;
  price: string;
  tag?: string;
  sizes?: {
    size: string;
    price: string;
  }[];
}

interface MenuSubcategory {
  title: string;
  items: MenuItem[];
  note?: string;
}

const foodMenu: MenuSubcategory[] = [
  {
    title: "Breakfast Classics",
    items: [
      {
        name: "Toast with Choice of Spread",
        description: "Sourdough/Fruit toast/Croissant/Gluten-Free with butter/strawberry jam/marmalade/vegemite",
        price: "$9.50"
      },
      {
        name: "Eggs on Toast (GFO)",
        description: "Eggs your way on Sourdough toast with butter on side. +add bacon ($6)",
        price: "$15.50"
      },
      {
        name: "Eggs Benny (GFO)",
        description: "Poached eggs, sautéed spinach, grilled asparagus, topped with hollandaise sauce on Turkish. +add bacon or ham or chorizo ($6) +add smoked salmon ($6.5)",
        price: "$18.50"
      },
      {
        name: "Big Bruschetta (GFO)",
        description: "Halloumi, poached egg, pesto & tomato salsa and avocado with balsamic glaze & olive oil on Sourdough. +add bacon or chorizo ($6)",
        price: "$21.50"
      },
      {
        name: "Smashed Avo (GFO/V)",
        description: "Smashed avocado, poached egg with extra virgin olive oil, fetta & tomato salsa, radish, sprinkle of dukkah, beetroot spread and lemon wedge on sourdough",
        price: "$21.90"
      },
      {
        name: "French Toast",
        description: "Brioche toast with fresh seasonal berries, berry couli, homemade berry compote & mascarpone",
        price: "$17.90"
      }
    ]
  },
  {
    title: "Sweet Treats",
    items: [
      {
        name: "Triple Stack Pancake - Biscoff & Berries",
        description: "Fluffy pancakes with seasonal berries, banana & lotus biscoff. +add vanilla ice-cream ($3)",
        price: "$19.90"
      },
      {
        name: "Triple Stack Pancake - Bacon & Maple",
        description: "Fluffy pancakes with crispy bacon and maple syrup. +add vanilla ice-cream ($3)",
        price: "$19.90"
      },
      {
        name: "Wafflicious",
        description: "Authentic Belgian waffles, fresh seasonal berries, walnuts and vanilla ice-cream with choice of sauce (maple/chocolate/caramel)",
        price: "$19.90",
        tag: "House Made"
      }
    ]
  },
  {
    title: "Signature Dishes",
    items: [
      {
        name: "1839 Feast",
        description: "Eggs your way, bacon, hashbrown, avocado, grilled tomato, halloumi, pork sausage, mushroom, butter & tomato chutney with a toast",
        price: "$28.90",
        tag: "Popular"
      },
      {
        name: "Super Bowl (GFO/V)",
        description: "Fresh spinach, organic tricolour quinoa, grilled asparagus, sautéed mushroom, avocado, beetroot dip, grilled halloumi & tomato salsa with a toast",
        price: "$23.90"
      },
      {
        name: "Fritters Hill (GFO)",
        description: "Homemade corn fritters, smashed avocado poached egg, pesto & tomato salsa, roquette with beetroot spread. +add bacon or chorizo ($6)",
        price: "$21.90"
      },
      {
        name: "Shakshuka 1839",
        description: "A hearty bowl of spiced tomato and capsicum sauce, topped with soft-poached egg, creamy avocado, fresh baby spinach and crumbled feta, served with crusty toast",
        price: "$19.90"
      }
    ]
  },
  {
    title: "Omelettes",
    note: "Toast on side",
    items: [
      {
        name: "Ham & Cheese",
        price: "$17.90"
      },
      {
        name: "Mushroom & Spinach",
        price: "$17.90"
      },
      {
        name: "Chorizo & Avocado",
        price: "$17.90"
      }
    ]
  },
  {
    title: "Breaky Burgers",
    note: "Turkish/Brioche bun",
    items: [
      {
        name: "Bacon & Egg (GFO)",
        description: "Bacon, fried egg, tomato, rocket, garlic aioli & tom-relish",
        price: "$20.50"
      },
      {
        name: "Halloumi & Egg (GFO)",
        description: "Halloumi, fried egg, avocado, rocket, garlic aioli & relish",
        price: "$20.50"
      },
      {
        name: "Hash-Stack (V)",
        description: "Hashbrown, bacon, fried egg, rocket, aioli, tasty cheese and relish",
        price: "$21.50"
      },
      {
        name: "Double Breaky Burger",
        description: "Double bacon, double fried egg, hashbrown, tomato, rocket, aioli and relish",
        price: "$24.90"
      }
    ]
  },
  {
    title: "Burgers",
    note: "All burgers on brioche bun with waffle fries",
    items: [
      {
        name: "Angus Beef Burger",
        description: "Beef patty, bacon, cheese, onion, tomato, pickle, lettuce, garlic aioli, mustard & tomato sauce",
        price: "$24.90"
      },
      {
        name: "Southern Chicken Burger",
        description: "Fried southern style crispy chicken, cheese, avocado, tomato, onion, lettuce, cucumber & garlic aioli",
        price: "$23.90"
      },
      {
        name: "Veggie Burger",
        description: "Grilled halloumi, avocado, tomato, onion, cucumber, lettuce, garlic aioli & pesto",
        price: "$22.90"
      }
    ]
  },
  {
    title: "Pasta",
    note: "+add prawns $6.0 | +add chicken $5.0 | +add chorizo $5.0",
    items: [
      {
        name: "Chilli & Garlic Linguine",
        description: "Fresh chilli, garlic, olive oil, parmesan cheese, rocket and parsley with garlic bread",
        price: "$20.50"
      },
      {
        name: "Penne Pesto",
        description: "Basil pesto, sun-dried tomatoes, rocket, lemon juice, parmesan cheese with garlic bread",
        price: "$20.50"
      }
    ]
  },
  {
    title: "Salads & Mains",
    items: [
      {
        name: "Chicken & Avocado Salad",
        description: "Grilled chicken, grilled asparagus, avocado, roasted pumpkin, cucumber, cherry tomato, mix leaves with extra virgin olive oil & drizzle of balsamic glaze",
        price: "$20.50"
      },
      {
        name: "Spiced Prawn Curry",
        description: "Juicy prawns in a rich golden creamy curry, infused with fresh spices with basmati rice on side",
        price: "$23.90"
      },
      {
        name: "Chorizo & Chicken Gumbo",
        description: "One pot slow cooked cajun chicken, chorizo, corn, capsicum served with greek yoghurt and basmati rice on side",
        price: "$22.50"
      }
    ]
  },
  {
    title: "Sides",
    items: [
      {
        name: "Bowl of Waffle Fries",
        description: "With tomato sauce",
        price: "$11.90"
      },
      {
        name: "Herb & Garlic Bread (5pcs)",
        description: "House-made herb and garlic bread toasted",
        price: "$11.90"
      },
      {
        name: "Tomato Bruschetta",
        description: "Basil pesto and tomato salsa with drizzle of extra virgin olive oil & balsamic glaze on sourdough toast",
        price: "$13.90"
      },
      {
        name: "Mozzarella Cheese Sticks (6pcs)",
        description: "Cheesy strings of mozzarella, coated with crispy breadcrumb, drizzled with garlic aioli",
        price: "$13.90"
      }
    ]
  },
  {
    title: "For Little Champions",
    note: "All kids meals $12.90",
    items: [
      {
        name: "Kids Pancake",
        description: "Strawberry & maple",
        price: "$12.90"
      },
      {
        name: "Kids Bacon & Egg",
        description: "Poached",
        price: "$12.90"
      },
      {
        name: "Kids Penne Napolitana",
        price: "$12.90"
      },
      {
        name: "Kids Waffle",
        description: "Choc sauce & ice-cream",
        price: "$12.90"
      },
      {
        name: "Chicken Nuggets & Chips",
        description: "With ketchup",
        price: "$12.90"
      }
    ]
  },
  {
    title: "Add Ons / Sides",
    items: [
      {
        name: "Relish / Hollandaise / Beetroot Dip",
        price: "$2.00"
      },
      {
        name: "Egg / Spinach / Tomato / Hashbrown",
        price: "$3.50"
      },
      {
        name: "Avocado / Mushrooms / Fetta",
        price: "$5.00"
      },
      {
        name: "Ham / Bacon / Chorizo / Halloumi",
        price: "$6.00"
      },
      {
        name: "Smoked Salmon",
        price: "$6.50"
      }
    ]
  }
];

const cakesMenu: MenuSubcategory[] = [
  {
    title: "Cakes & Pastries",
    items: [
      { name: "Portuguese Tart", price: "$4.20" },
      { name: "Chocolate Muffin", price: "$4.90" },
      { name: "Blueberry Muffin", price: "$4.90" },
      { name: "Chocolate Brownie (GF)", price: "$5.00" },
      { name: "Caramel Slice (GF)", price: "$6.90" },
      { name: "Carrot Cake", price: "$6.90" },
      { name: "Hummingbird Cake", price: "$6.90" },
      { name: "Plain Croissant", price: "$5.50" },
      { name: "Almond Croissant", price: "$8.90" },
      { name: "Assorted Cheesecake", price: "$6.90" }
    ]
  }
];

const beverageMenu: MenuSubcategory[] = [
  {
    title: "Coffee",
    note: "Extra shot, decaf, all alternative milks, any syrups add ons ($1.0)",
    items: [
      {
        name: "Latte",
        sizes: [{ size: "Cup/Sml", price: "$4.90" }, { size: "Mug/Med", price: "$6.00" }],
        price: ""
      },
      {
        name: "Flat White",
        sizes: [{ size: "Cup/Sml", price: "$4.90" }, { size: "Mug/Med", price: "$6.00" }],
        price: ""
      },
      {
        name: "Cappuccino",
        sizes: [{ size: "Cup/Sml", price: "$4.90" }, { size: "Mug/Med", price: "$6.00" }],
        price: ""
      },
      {
        name: "Long Black",
        sizes: [{ size: "Cup/Sml", price: "$4.80" }, { size: "Mug/Med", price: "$5.80" }],
        price: ""
      },
      {
        name: "Mocha",
        sizes: [{ size: "Cup/Sml", price: "$5.50" }, { size: "Mug/Med", price: "$6.50" }],
        price: ""
      },
      {
        name: "Dirty Chai",
        sizes: [{ size: "Cup/Sml", price: "$5.50" }, { size: "Mug/Med", price: "$6.50" }],
        price: ""
      },
      {
        name: "Espresso / Macchiato / Short Black",
        price: "$4.00"
      },
      {
        name: "Piccolo Latte / Long Macchiato",
        price: "$4.60"
      }
    ]
  },
  {
    title: "Iced Drinks",
    items: [
      { name: "Afogato", price: "$5.00" },
      { name: "Iced Long Black", price: "$6.00" },
      { name: "Iced Latte", price: "$6.70" },
      { name: "Iced Chai", price: "$7.50" },
      { name: "Iced Choc", price: "$7.50" },
      { name: "Iced Coffee", price: "$7.50" },
      { name: "Iced Mocha", price: "$7.90" },
      { name: "Iced Dirty Chai", price: "$7.90" }
    ]
  },
  {
    title: "Non-Coffee",
    items: [
      {
        name: "Hot Chocolate",
        sizes: [{ size: "Cup/Sml", price: "$4.90" }, { size: "Mug/Med", price: "$6.00" }],
        price: ""
      },
      {
        name: "Chai Latte",
        sizes: [{ size: "Cup/Sml", price: "$4.90" }, { size: "Mug/Med", price: "$6.00" }],
        price: ""
      },
      {
        name: "Matcha Latte",
        sizes: [{ size: "Cup/Sml", price: "$5.20" }, { size: "Mug/Med", price: "$6.20" }],
        price: ""
      },
      {
        name: "Beetroot Latte",
        sizes: [{ size: "Cup/Sml", price: "$5.20" }, { size: "Mug/Med", price: "$6.20" }],
        price: ""
      },
      {
        name: "Turmeric Latte",
        sizes: [{ size: "Cup/Sml", price: "$5.20" }, { size: "Mug/Med", price: "$6.20" }],
        price: ""
      },
      { name: "Kids Hot Chocolate", price: "$4.50" }
    ]
  },
  {
    title: "Tea",
    note: "Cup $4.00 / Pot $5.00",
    items: [
      { name: "English Breakfast", price: "" },
      { name: "Earl Grey", price: "" },
      { name: "Peppermint", price: "" },
      { name: "Green Tea", price: "" },
      { name: "Lemon & Ginger", price: "" }
    ]
  },
  {
    title: "Fresh Juices",
    note: "BESA Juices",
    items: [
      { name: "Apple", price: "$7.00" },
      { name: "Apple-Strawberry", price: "$7.00" },
      { name: "Orange", price: "$7.00" },
      { name: "Multivitamin", price: "$7.00" },
      { name: "Green", price: "$7.00" }
    ]
  },
  {
    title: "Milkshakes",
    note: "$8.00 each",
    items: [
      { name: "Vanilla", price: "$8.00" },
      { name: "Caramel", price: "$8.00" },
      { name: "Strawberry", price: "$8.00" },
      { name: "Chocolate", price: "$8.00" },
      { name: "Coffee", price: "$8.00" },
      { name: "Kids Milkshake", price: "$4.60" }
    ]
  },
  {
    title: "Smoothies",
    note: "$9.90 each",
    items: [
      { name: "Mango Tango", price: "$9.90" },
      { name: "Dragonfruit", price: "$9.90" },
      { name: "Tropical", price: "$9.90" },
      { name: "Banana-Rama", price: "$9.90" },
      { name: "Mixed Berries", price: "$9.90" }
    ]
  },
  {
    title: "From The Fridge",
    items: [
      { name: "Spring Water", price: "$3.90" },
      { name: "Coke / Coke Zero (Can)", price: "$4.00" },
      { name: "Fanta / Lemonade (Can)", price: "$4.00" },
      { name: "Ginger Beer", price: "$4.90" },
      { name: "Iced Tea (Peach/Lemon)", price: "$4.90" },
      { name: "Sparkling (San Pellegrino)", price: "$4.90" },
      { name: "Kids Apple Juice", price: "$3.80" }
    ]
  }
];

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("food");
  const currentMenu = 
    activeCategory === "food" ? foodMenu : 
    activeCategory === "beverage" ? beverageMenu : 
    cakesMenu;

  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-accent text-sm uppercase tracking-[0.2em] mb-4">
            Our Menu
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold text-foreground mb-4">
            Food & Beverages
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Crafted with passion, served with love. Available 8am - 3pm.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory("food")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === "food"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <UtensilsCrossed className="w-4 h-4" />
              Food
            </button>
            <button
              onClick={() => setActiveCategory("beverage")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === "beverage"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <Coffee className="w-4 h-4" />
              Drinks
            </button>
            <button
              onClick={() => setActiveCategory("cakes")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === "cakes"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <Cake className="w-4 h-4" />
              Cakes & Pastries
            </button>
          </div>
        </div>

        {/* Menu Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {currentMenu.map((subcategory) => (
            <div
              key={subcategory.title}
              className="bg-secondary/30 rounded-2xl p-6 md:p-8"
            >
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
                {subcategory.title}
              </h3>
              {subcategory.note && (
                <p className="text-accent text-sm italic mb-4">
                  {subcategory.note}
                </p>
              )}
              <div className="space-y-4">
                {subcategory.items.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-border/50 pb-3 last:border-0 last:pb-0"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">
                            {item.name}
                          </span>
                          {item.tag && (
                            <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <p className="text-muted-foreground text-sm mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        {item.sizes ? (
                          <div className="space-y-1">
                            {item.sizes.map((s) => (
                              <div key={s.size} className="text-sm">
                                <span className="text-muted-foreground">
                                  {s.size}:
                                </span>{" "}
                                <span className="text-accent font-medium">
                                  {s.price}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : item.price ? (
                          <span className="text-accent font-semibold">
                            {item.price}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Surcharge Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm italic">
            15% surcharge applies on all bills on Sundays & Public Holidays
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
