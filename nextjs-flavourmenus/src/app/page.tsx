import { ArrowRight, Sparkles, Star, UtensilsCrossed } from 'lucide-react';
import { categories, howItWorks, customerFavorites, sustainabilityFeatures, testimonials } from '../constants.js';
import Image from 'next/image';
import Link from 'next/link.js';
import AddToCartBtn from '@/components/AddToCartBtn';
import { getMenuItems, MenuItem } from '@/sanity/queris';

export default async function Home() {
  const sanityMenuItems = await getMenuItems();

  const menuItems = sanityMenuItems.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    },
    {} as Record<string, MenuItem[]>
  );

  return (
    <div className="w-full ">
      {/* Hero Section */}
      <section className="min-h-screen py-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 items-center min-h-[calc(100vh-4rem)]">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Experience the{" "}
              <span className="text-orange-500">Finest Flavors</span> in Every
              Bite
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Discover our handcrafted dishes made with fresh, locally-sourced
              ingredients. From traditional favorites to innovative culinary
              creations, every dish tells a story of passion and excellence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href={"/menu"}
                className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center group "
              >
                View Our Menu
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={"/contact"}
                className="flex items-center justify-center px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition-colors"
              >
                Make a Reservation
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">4.9</p>
                <p className="text-sm text-gray-600">Customer Rating</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">15+</p>
                <p className="text-sm text-gray-600">Years of Service</p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-600">Signature Dishes</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative w-full h-64">
                <Image
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
                  alt="Gourmet salad"
                  className="object-cover rounded-xl"
                  fill
                />
              </div>
              <div className="relative w-full h-64 hidden md:flex">
                <Image
                  src="https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
                  alt="Pasta dish"
                  className="object-cover rounded-xl"
                  fill
                />
              </div>
            </div>
            <div className="space-y-4 pt-8 ">
              <div className="relative w-full h-64 ">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
                  alt="Main course"
                  className=" object-cover rounded-xl"
                  fill
                />
              </div>
              <div className="relative w-full h-64 hidden md:flex">
                <Image
                  src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
                  alt="Burger"
                  className="object-cover rounded-xl"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={step.title}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-orange-100" />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Menu Categories
            </h2>
            <p className="text-gray-600">
              From appetizers to desserts, discover our wide range of carefully
              curated dishes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.title}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={category.image}
                    alt={category.title}
                    height={48}
                    width={100}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 group-hover:scale-105"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {category.items}
                    </span>
                    <Link
                      href={"/menu"}
                      className="text-orange-500 hover:text-orange-600 flex items-center gap-1 text-sm font-medium"
                    >
                      View Menu
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Chef's Specials Section */}
      {menuItems.ChefsSpecials && (
        <section className="max-w-7xl mx-auto px-4 md:px-10 py-16">
          <h2 className="text-3xl font-bold mb-12">Chef&apos;s Specials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.ChefsSpecials.map((dish) => (
              <div
                key={dish.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    fill
                  />
                  {dish.tag && (
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full">
                      {dish.tag}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {dish.name}
                      </h3>
                      <p className="text-gray-600">{dish.description}</p>
                    </div>
                    <span className="text-2xl font-bold text-orange-600">
                      ₦{dish.price}
                    </span>
                  </div>
                  <AddToCartBtn item={dish} />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* About Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At FoodieDelight, we believe that great food starts with
                exceptional ingredients and passionate chefs. Since 2015,
                we&apos;ve been crafting delicious meals that bring joy to our
                customers&apos; tables.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <UtensilsCrossed className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Expert Chefs</h3>
                    <p className="text-gray-600">
                      Professionally trained chefs with years of culinary
                      expertise
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Sparkles className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Fresh Ingredients</h3>
                    <p className="text-gray-600">
                      Locally sourced, premium quality ingredients
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                alt="Our Kitchen"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl hidden md:block">
                <p className="text-2xl font-bold">15+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Customer Favorites Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12">Customer Favorites</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerFavorites.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="object-cover transform hover:scale-105 transition-transform duration-300"
                  fill
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">
                    ₦{item.price}
                  </span>
                  <Link
                    href={"/menu"}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Sustainability Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Commitment to Sustainability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sustainabilityFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Exclusive Deals Section */}
      {menuItems.Deals && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Exclusive Deals & Offers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.Deals.map((deal) => (
                <div
                  key={deal.name}
                  className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={deal.image}
                      alt={deal.name}
                      fill
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full">
                      {deal.discount}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{deal.name}</h3>
                    <p className="text-gray-600 mb-4">{deal.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-orange-600 font-semibold">
                        Use code: {deal.code}
                      </span>
                      <Link
                        href={"/menu"}
                        className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                      >
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <p className="text-gray-600 mb-4">&quor;{testimonial.comment}&quot;</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Loyalty Banner */}
      <section className="bg-orange-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Rewards Program</h2>
          <p className="text-xl mb-6">
            Earn points with every order and get exclusive rewards!
          </p>
          <button className="bg-white text-orange-500 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
}
