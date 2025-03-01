"use client";

import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useForm } from "react-hook-form";
import { submitCheckout } from "@/sanity/writeClient";
import { toast } from "sonner";
import { CheckCircle, Loader2 } from "lucide-react";
import { nanoid } from "nanoid";
import dynamic from "next/dynamic";
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  {
    ssr: false,
  }
);

interface FormData {
  name: string;
  email: string;
  phone: string;
  address: string;
}
const CheckoutPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    getValues,
  } = useForm<FormData>();

  const {name, email, phone, address} = getValues()

  const { cartItems, clearCart } = useCart();
 const subtotal = cartItems.reduce(
   (sum, item) => sum + item.price * item.quantity,
   0
 );
 const tax = subtotal * 0.1;
 const total = subtotal + tax;
  const submit = async (data: FormData) => {
    await submitCheckout({
      name: data.name,
      email: data.email,
      address: data.address,
      phone: data.phone,
      orderItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
        _key: nanoid(),
      })),
      totalPrice: total,
    });
    toast.success(`Order placed successfully!`, {
      position: "top-right",
      icon: (
        <CheckCircle
          className="text-green-500"
          size={24}
        />
      ),
      duration: 3000,
      className:
        "bg-white text-gray-900 shadow-lg border border-gray-200 rounded-lg",
    });
    clearCart();
    router.push("/confirmation");
  };

  const componentProps = {
    email,
    amount: total * 100,
    metadata: {
      custom_fields: [
        { display_name: "Name", variable_name: "name", value: name },
        { display_name: "Phone", variable_name: "phone", value: phone },
      ],
    },
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_TOKEN as string,
    text: "Place Order",
    onSuccess: () => submit({name, email, phone, address}),
  };

    const onSubmit = (data: FormData) => {
      console.log(data);
    };


    if (typeof window !== "undefined" && cartItems.length === 0) {
      router.push("/menu");
    }

  return (
    <div className="w-full bg-gray-50">
      <div className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Checkout</h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between"
                  >
                    <span className="text-lg">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="text-lg font-medium">
                      ₦{(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                <div
                  className="flex justify-between"
                >
                  <span className="text-lg">
                    Tax
                  </span>
                  <span className="text-lg font-medium">
                    ₦{tax.toFixed(2)}
                  </span>
                </div>
                <div className="border-t pt-4 mt-6">
                  <div className="flex justify-between">
                    <span className="text-xl font-semibold">Total</span>
                    <span className="text-2xl font-bold text-orange-600">
                      ₦{total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-xl shadow-md space-y-6"
          >
            <h2 className="text-2xl font-semibold">Delivery Information</h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: "Invalid email",
                    },
                  })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-lg text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[+]?[0-9]{7,15}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-lg text-gray-700 mb-2"
                >
                  Delivery Address
                </label>
                <textarea
                  id="address"
                  {...register("address", {
                    required:
                      "Please enter your delivery address so we know where to bring your order!",
                  })}
                  rows={4}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>
            </div>
            {!isValid && (
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg text-lg font-medium flex items-center justify-center gap-2 disabled:bg-orange-300 hover:bg-orange-600 transition-colors mt-8"
                disabled={isSubmitting}
              >
                {isSubmitting ?
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                : "Place Order"}
              </button>
            )}
            {isValid && (
              <PaystackButton
                {...componentProps}
                className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg text-lg font-medium flex items-center justify-center gap-2 disabled:bg-orange-300 hover:bg-orange-600 transition-colors mt-8 cursor-pointer"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage;
