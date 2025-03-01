"use client";

import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState, createContext, useContext, useEffect } from "react";
import { toast } from "sonner";

interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getCartFromLocalStorage = (): CartItem[] => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  };

  useEffect(() => {
    setCartItems(getCartFromLocalStorage());
  }, []);
  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i._id === item._id);
      if (existingItem) {
        return prevItems.map((i) =>
          i._id === item._id ?
            {
              ...i,
              quantity: i.quantity + 1,
            }
          : i
        );
      }
      return [
        ...prevItems,
        {
          ...item,
          quantity: 1,
        },
      ];
    });
    toast.success(`${item.name} added to cart`, {
      position: "top-right",
      icon: (
        <CheckCircle
          className="text-green-500"
          size={24}
        />
      ),
      action: {
        label: "Cart",
        onClick: () => window.location.href = '/cart',
      },
      duration: 3000,
      className:
        "bg-white text-gray-900 shadow-lg border border-gray-200 rounded-lg",
    });
  };
  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ?
          {
            ...item,
            quantity,
          }
        : item
      )
    );
  };
  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
