import { useState } from "react";
import { UtensilsCrossed, Coffee } from "lucide-react";
type MenuCategory = "food" | "beverage";
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
const foodMenu: MenuSubcategory[] = [{
  title: "Breakfast Classics",
  items: [{
    name: "Toast with Choice of Spread",
    description: "Sourdough/wheat toast/gluten free with butter, strawberry jam, marmalade or vegemite",
    price: "$8.90"
  }, {
    name: "Eggs on Toast (GFO)",
    description: "Sourdough toast with poached/fried/scrambled eggs and butter on side",
    price: "$14.50"
  }, {
    name: "Breakky Bruschetta (GFO)",
    description: "Basil pesto, feta & tomato salsa, poached egg with balsamic glaze & extra virgin olive oil on Sourdough",
    price: "$18.90"
  }, {
    name: "Avocado Toast (GFO/V)",
    description: "Smashed avocado, poached egg on toast with extra virgin olive oil, feta and tomato salsa on top, sprinkle of dukkah, beetroot spread",
    price: "$20.90"
  }, {
    name: "French Toast",
    description: "Brioche toast with fresh seasonal berries, berry coulis, homemade berry compote & mascarpone",
    price: "$17.90"
  }, {
    name: "Eggs Benny (GFO)",
    description: "Poached eggs, fresh baby spinach, grilled asparagus, hollandaise sauce on Sourdough",
    price: "$17.90"
  }]
}, {
  title: "Breaky Burgers",
  note: "On turkish/brioche bun",
  items: [{
    name: "Ham & Cheese",
    description: "Smoked leg ham, tasty cheese, tomato, rocket & aioli",
    price: "$17.90"
  }, {
    name: "Bacon & Egg (GFO)",
    description: "Fried egg, bacon, tomato, aioli, rocket and relish",
    price: "$17.90"
  }, {
    name: "Halloumi & Egg (GFO)",
    description: "Fried egg, halloumi, avocado, aioli, rocket and relish",
    price: "$18.90"
  }, {
    name: "Hash-Stack (GFO)",
    description: "Fried egg, bacon, rocket, aioli, hash brown, tasty cheese and relish",
    price: "$19.90"
  }, {
    name: "Double Breaky Burger",
    description: "Double bacon, double fried egg, hash brown, tomato, rocket, aioli and relish",
    price: "$23.80"
  }]
}, {
  title: "Signature Dishes",
  items: [{
    name: "1839 Breakky",
    description: "Poached/fried/scrambled eggs, grilled tomato, mushroom, bacon, chorizo, baked beans, potato gems, avocado, halloumi and toast with butter on side",
    price: "$26.80",
    tag: "Popular"
  }, {
    name: "Fritters Hill (GFO)",
    description: "Homemade corn fritters, poached egg, feta & tomato salsa, rocket with beetroot spread",
    price: "$18.90"
  }, {
    name: "Veggie Bowl (GFO/V)",
    description: "Fresh spinach, organic tricolour quinoa, grilled asparagus, sautéed mushroom, avocado, beetroot dip, grilled halloumi & tomato salsa with a toast",
    price: "$22.90"
  }]
}, {
  title: "Light Bites",
  items: [{
    name: "Toasties (Croissant/Sourdough)",
    description: "Smoked leg ham/bacon, tasty cheese, sliced tomato",
    price: "$14.90"
  }, {
    name: "Omelette - Ham and Cheese",
    description: "Served with toasted sourdough & butter on side",
    price: "$17.50"
  }, {
    name: "Omelette - Mushroom, Spinach and Cheese",
    description: "Served with toasted sourdough & butter on side",
    price: "$17.50"
  }]
}, {
  title: "Sweet Treats",
  items: [{
    name: "Pancake with Bacon and Maple Syrup",
    description: "Triple stack of pancakes",
    price: "$19.90"
  }, {
    name: "Pancake with Strawberry & Banana",
    description: "Triple stack with maple/chocolate/nutella",
    price: "$18.80"
  }, {
    name: "Wafflicious",
    description: "Authentic Belgian waffles, fresh berries, walnuts and vanilla ice-cream with choice of sauce (maple/chocolate/nutella)",
    price: "$18.90",
    tag: "House Made"
  }]
}, {
  title: "Kids Menu",
  items: [{
    name: "Kids Pancake (Maple)",
    price: "$11.90"
  }, {
    name: "Kids Waffle (Choc Sauce & Ice-cream)",
    price: "$11.90"
  }, {
    name: "Kids Bacon & Egg (Poached)",
    price: "$11.90"
  }]
}, {
  title: "Add Ons / Sides",
  items: [{
    name: "Relish/Hollandaise/Beetroot",
    price: "$2.00"
  }, {
    name: "Egg/Spinach/Tomato/Hashbrown",
    price: "$3.00"
  }, {
    name: "Avocado/Mushrooms/Fetta",
    price: "$5.00"
  }, {
    name: "Ham/Bacon(2)/Chorizo/Halloumi",
    price: "$6.00"
  }, {
    name: "Smoked Salmon",
    price: "$6.50"
  }]
}];
const beverageMenu: MenuSubcategory[] = [{
  title: "Coffee",
  note: "Extra shot, decaf, all alternative milks, any syrups add ons ($1.0)",
  items: [{
    name: "Latte",
    sizes: [{
      size: "Cup/Sml",
      price: "$4.90"
    }, {
      size: "Mug/Med",
      price: "$6.00"
    }],
    price: ""
  }, {
    name: "Flat White",
    sizes: [{
      size: "Cup/Sml",
      price: "$4.90"
    }, {
      size: "Mug/Med",
      price: "$6.00"
    }],
    price: ""
  }, {
    name: "Cappuccino",
    sizes: [{
      size: "Cup/Sml",
      price: "$4.90"
    }, {
      size: "Mug/Med",
      price: "$6.00"
    }],
    price: ""
  }, {
    name: "Long Black",
    sizes: [{
      size: "Cup/Sml",
      price: "$4.80"
    }, {
      size: "Mug/Med",
      price: "$5.80"
    }],
    price: ""
  }, {
    name: "Mocha",
    sizes: [{
      size: "Cup/Sml",
      price: "$5.50"
    }, {
      size: "Mug/Med",
      price: "$6.50"
    }],
    price: ""
  }, {
    name: "Dirty Chai",
    sizes: [{
      size: "Cup/Sml",
      price: "$5.50"
    }, {
      size: "Mug/Med",
      price: "$6.50"
    }],
    price: ""
  }, {
    name: "Espresso/Macchiato/Short Black",
    price: "$4.00"
  }, {
    name: "Piccolo Latte/Long Macchiato",
    price: "$4.60"
  }]
}, {
  title: "Iced Drinks",
  items: [{
    name: "Afogato",
    price: "$5.00"
  }, {
    name: "Iced Long Black",
    price: "$6.00"
  }, {
    name: "Iced Latte",
    price: "$6.70"
  }, {
    name: "Iced Chai",
    price: "$7.50"
  }, {
    name: "Iced Choc",
    price: "$7.50"
  }, {
    name: "Iced Coffee",
    price: "$7.50"
  }, {
    name: "Iced Mocha",
    price: "$7.90"
  }, {
    name: "Iced Dirty Chai",
    price: "$7.90"
  }]
}, {
  title: "Non-Coffee",
  items: [{
    name: "Hot Chocolate",
    sizes: [{
      size: "Cup/Sml",
      price: "$4.90"
    }, {
      size: "Mug/Med",
      price: "$6.00"
    }],
    price: ""
  }, {
    name: "Chai Latte",
    sizes: [{
      size: "Cup/Sml",
      price: "$4.90"
    }, {
      size: "Mug/Med",
      price: "$6.00"
    }],
    price: ""
  }, {
    name: "Matcha Latte",
    sizes: [{
      size: "Cup/Sml",
      price: "$5.20"
    }, {
      size: "Mug/Med",
      price: "$6.20"
    }],
    price: ""
  }, {
    name: "Beetroot Latte",
    sizes: [{
      size: "Cup/Sml",
      price: "$5.20"
    }, {
      size: "Mug/Med",
      price: "$6.20"
    }],
    price: ""
  }, {
    name: "Turmeric Latte",
    sizes: [{
      size: "Cup/Sml",
      price: "$5.20"
    }, {
      size: "Mug/Med",
      price: "$6.20"
    }],
    price: ""
  }, {
    name: "Kids Hot Chocolate",
    price: "$4.50"
  }]
}, {
  title: "Tea",
  note: "Cup $4.00 / Pot $5.00",
  items: [{
    name: "English Breakfast",
    price: ""
  }, {
    name: "Earl Grey",
    price: ""
  }, {
    name: "Peppermint",
    price: ""
  }, {
    name: "Green Tea",
    price: ""
  }, {
    name: "Lemon & Ginger",
    price: ""
  }]
}, {
  title: "Milkshakes & Smoothies",
  items: [{
    name: "Milkshakes",
    description: "Vanilla, Caramel, Strawberry, Chocolate, Coffee",
    price: "$8.00"
  }, {
    name: "Smoothies",
    description: "Mango Tango, Dragonfruit, Tropical, Banana-Rama, Mixed Berries",
    price: "$9.90"
  }, {
    name: "Kids Milkshake",
    price: "$4.60"
  }]
}, {
  title: "From The Fridge",
  items: [{
    name: "Spring Water",
    price: "$3.90"
  }, {
    name: "Coke/Coke Zero (Can)",
    price: "$4.00"
  }, {
    name: "Fanta/Lemonade (Can)",
    price: "$4.00"
  }, {
    name: "Ginger Beer",
    price: "$4.90"
  }, {
    name: "Iced Tea (Peach/Lemon)",
    price: "$4.90"
  }, {
    name: "Sparkling (San Pellegrino)",
    price: "$4.90"
  }, {
    name: "Kids Apple Juice",
    price: "$3.60"
  }]
}, {
  title: "Fresh Juices",
  note: "BESA Juices $7.00",
  items: [{
    name: "Apple",
    price: "$7.00"
  }, {
    name: "Apple-Strawberry",
    price: "$7.00"
  }, {
    name: "Orange",
    price: "$7.00"
  }, {
    name: "Multivitamin",
    price: "$7.00"
  }, {
    name: "Green",
    price: "$7.00"
  }]
}];
const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("food");
  const currentMenu = activeCategory === "food" ? foodMenu : beverageMenu;
  return <section id="menu" className="py-24 md:py-32 bg-background">
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
            Crafted with passion, served with love. Breakfast available 8am - 12pm.
          </p>

          {/* Category Tabs */}
          <div className="flex justify-center gap-4">
            <button onClick={() => setActiveCategory("food")} className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeCategory === "food" ? "bg-primary text-primary-foreground shadow-lg" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
              <UtensilsCrossed className="w-4 h-4" />
              Food Menu
            </button>
            <button onClick={() => setActiveCategory("beverage")} className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${activeCategory === "beverage" ? "bg-primary text-primary-foreground shadow-lg" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
              <Coffee className="w-4 h-4" />
              Drinks Menu
            </button>
          </div>
        </div>

        {/* Menu Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {currentMenu.map((subcategory, idx) => <div key={subcategory.title} className="bg-secondary/30 rounded-2xl p-6 md:p-8">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-2">
                {subcategory.title}
              </h3>
              {subcategory.note && <p className="text-accent text-sm italic mb-4">{subcategory.note}</p>}
              <div className="space-y-4">
                {subcategory.items.map(item => <div key={item.name} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">{item.name}</span>
                          {item.tag}
                        </div>
                        {item.description && <p className="text-muted-foreground text-sm mt-1">{item.description}</p>}
                      </div>
                      <div className="text-right shrink-0">
                        {item.sizes ? <div className="space-y-1">
                            {item.sizes.map(s => <div key={s.size} className="text-sm">
                                <span className="text-muted-foreground">{s.size}:</span>{" "}
                                <span className="text-accent font-medium">{s.price}</span>
                              </div>)}
                          </div> : item.price ? <span className="text-accent font-semibold">{item.price}</span> : null}
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>)}
        </div>

        {/* Surcharge Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm italic">
            15% surcharge applies on all bills on Sundays & Public Holidays
          </p>
        </div>
      </div>
    </section>;
};
export default MenuSection;