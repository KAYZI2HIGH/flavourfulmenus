import type { Metadata } from "next";
import './globals.css'
import { Navbar } from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Flavourful Menus",
  description:
    "Foodie Menus – Enjoy fresh, delicious meals made with high-quality ingredients. Order online for fast delivery or pickup. Savor great taste with every bite!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-screen min-h-dvh overflow-x-hidden"
      >
        <CartProvider>
        <Navbar/>
        {children}
        <Toaster/>

        </CartProvider>
      </body>
    </html>
  );
}
