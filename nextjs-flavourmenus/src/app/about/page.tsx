
import { team, values } from "@/constants";
import { MapPin, Sparkles, UtensilsCrossed } from "lucide-react";
import Image from "next/image";
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white pt-6">
      {/* Story Section */}
      <section className="bg-gray-50 py-16 px-4">
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
      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6"
              >
                <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-20 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Location Section */}
      <section className="py-20 px-4 max-w-[1200px] mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">
                      123 Restaurant Street
                      <br />
                      Foodie City, FC 12345
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 11am - 10pm</p>
                  <p className="text-gray-600">
                    Saturday - Sunday: 10am - 11pm
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Restaurant atmosphere"
                className="rounded-2xl"
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;