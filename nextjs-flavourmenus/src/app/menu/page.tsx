import { Tag } from "lucide-react";
import Image from "next/image";
import AddToCartBtn from "@/components/AddToCartBtn";
import { getMenuItems, MenuItem } from "@/sanity/queris";

const MenuPage = async() => {
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
  const renderRegularItem = (item: MenuItem) => (
    <div
      key={item._id}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          className="object-cover transform hover:scale-105 transition-transform duration-300"
          fill
        />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
          <p className="text-2xl font-bold text-orange-600 mt-2">
            ₦{item.price}
          </p>
        </div>
        <AddToCartBtn item={item} />
      </div>
    </div>
  );
  const renderDealItem = (item: MenuItem) => (
    <div
      key={item._id}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 border-orange-100"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          className="object-cover transform hover:scale-105 transition-transform duration-300"
          fill
        />
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full">
          {item.discount}
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{item.description}</p>
          <div className="mt-2 flex items-center gap-2">
            <p className="text-2xl font-bold text-orange-600">₦{item.price}</p>
            {item.originalPrice && (item.originalPrice > item.price) && (
              <p className="text-lg text-gray-400 line-through">
                ₦{item.originalPrice}
              </p>
            )}
          </div>
          <div className="mt-2 flex items-center text-sm text-orange-600">
            <Tag className="h-4 w-4 mr-1" />
            Use code: <span className="font-semibold ml-1">{item.code}</span>
          </div>
        </div>
        <AddToCartBtn item={item} />
      </div>
    </div>
  );
  return (
    <section className="w-full bg-gray-50 pt-10">
      <div className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Our Menu</h1>
        </div>
      </div>
      <div className="w-full py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {Object.entries(menuItems).map(([category, items]) => (
              <section key={category} className="space-y-8">
                <h2 className="text-2xl font-semibold text-gray-900 border-b pb-4">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {items.map((item) =>
                    category === "Deals"
                      ? renderDealItem(item)
                      : renderRegularItem(item),
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default MenuPage;
