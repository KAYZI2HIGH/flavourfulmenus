import {
  Award,
  CreditCard,
  Heart,
  Leaf,
  RecycleIcon,
  Shield,
  ThumbsUp,
  Truck,
  Users,
  Utensils,
} from "lucide-react";

export const categories = [
  {
    title: "Main Course",
    description: "Signature dishes crafted with premium ingredients",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    items: "25+ items",
  },
  {
    title: "Appetizers",
    description: "Start your meal with our delicious starters",
    image:
      "https://images.unsplash.com/photo-1541014741259-de529411b96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    items: "15+ items",
  },
  {
    title: "Desserts",
    description: "Sweet endings to your perfect meal",
    image:
      "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    items: "20+ items",
  },
  {
    title: "Beverages",
    description: "Refreshing drinks and cocktails",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    items: "30+ items",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    comment: "Amazing service and the food is always delivered hot and fresh!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mike Thompson",
    comment:
      "Best food delivery service I've ever used. Great selection of restaurants!",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Emily Chen",
    comment: "The rewards program is fantastic. I save money on every order!",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];
export const howItWorks = [
  {
    icon: <Utensils className="w-8 h-8 text-orange-500" />,
    title: "Choose Your Food",
    description: "Browse our menu and select your favorite dishes",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-orange-500" />,
    title: "Make Payment",
    description: "Quick, easy and secure payment methods",
  },
  {
    icon: <Truck className="w-8 h-8 text-orange-500" />,
    title: "Fast Delivery",
    description: "Track your order in real-time",
  },
];
export const features = [
  {
    icon: <div className="w-6 h-6 text-orange-500" />,
    title: "24/7 Service",
    description: "Order anytime, day or night",
  },
  {
    icon: <Shield className="w-6 h-6 text-orange-500" />,
    title: "Secure Payments",
    description: "Multiple secure payment options",
  },
  {
    icon: <Truck className="w-6 h-6 text-orange-500" />,
    title: "Fast Delivery",
    description: "Quick delivery to your doorstep",
  },
  {
    icon: <ThumbsUp className="w-6 h-6 text-orange-500" />,
    title: "Best Quality",
    description: "Fresh ingredients & great taste",
  },
];

export const customerFavorites = [
  {
    name: "Classic Burger Deluxe",
    description: "Hand-crafted patty with special sauce",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Margherita Pizza",
    description: "Fresh basil, mozzarella, and tomatoes",
    price: 18.99,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Grilled Salmon",
    description: "Norwegian salmon with seasonal vegetables",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];
export const sustainabilityFeatures = [
  {
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    title: "Organic Ingredients",
    description:
      "We source our ingredients from certified organic farms and suppliers",
  },
  {
    icon: <RecycleIcon className="w-6 h-6 text-green-600" />,
    title: "Eco-Friendly Packaging",
    description: "100% biodegradable and recyclable packaging materials",
  },
  {
    icon: <Award className="w-6 h-6 text-green-600" />,
    title: "Quality Assurance",
    description: "Rigorous quality control and food safety standards",
  },
];

export const menuItems = {
  Deals: [
    {
      id: 101,
      name: "Welcome Offer Bundle",
      price: 30.0,
      originalPrice: 60.0,
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      discount: "50% OFF",
      code: "WELCOME50",
      description: "Perfect for first-time orders",
    },
    {
      id: 102,
      name: "Family Feast",
      price: 75.0,
      originalPrice: 100.0,
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      discount: "$25 OFF",
      code: "FAMILY25",
      description: "Meal for 4 people",
    },
    {
      id: 103,
      name: "Weekend Special",
      price: 50.0,
      originalPrice: 50.0,
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      discount: "FREE DELIVERY",
      code: "WEEKEND",
      description: "Free delivery on orders above $50",
    },
  ],
  ChefsSpecials: [
    {
      id: 1001,
      name: "Truffle Infused Ribeye",
      description:
        "Premium ribeye steak with truffle butter and roasted vegetables",
      price: 34.99,
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "SIGNATURE",
    },
    {
      id: 1002,
      name: "Lobster Thermidor",
      description: "Fresh lobster in a rich, creamy sauce with herbs",
      price: 42.99,
      image:
        "https://images.unsplash.com/photo-1559742811-822873691df8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "PREMIUM",
    },
    {
      id: 1003,
      name: "Mediterranean Sea Bass",
      description: "Grilled sea bass with lemon herb sauce",
      price: 28.99,
      image:
        "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      tag: "NEW",
    },
  ],
  Meals: [
    {
      id: 1,
      name: "Signature Burger",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Fresh Pasta",
      price: 15.99,
      image:
        "https://images.unsplash.com/photo-1556761223-4c4282c73f77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ],
  Snacks: [
    {
      id: 3,
      name: "French Fries",
      price: 4.99,
      image:
        "https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Onion Rings",
      price: 5.99,
      image:
        "https://images.unsplash.com/photo-1639024471283-03518883512d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ],
  Drinks: [
    {
      id: 5,
      name: "Iced Coffee",
      price: 3.99,
      image:
        "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Fresh Juice",
      price: 4.99,
      image:
        "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const values = [
  {
    icon: Utensils,
    title: "Quality First",
    description:
      "We source the finest ingredients and maintain the highest standards in food preparation.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Every dish is crafted with passion and attention to detail, ensuring a memorable dining experience.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description:
      "We believe in creating a warm, welcoming environment where everyone feels at home.",
  },
];

export const team = [
  {
    name: "Chef Michael",
    role: "Executive Chef",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=377&q=80",
  },
  {
    name: "Chef Sarah",
    role: "Pastry Chef",
    image:
      "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    name: "Chef David",
    role: "Sous Chef",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=380&q=80",
  },
];
