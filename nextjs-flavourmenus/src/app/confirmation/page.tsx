import Link from "next/link";
import { CheckCircle } from "lucide-react";

const OrderConfirmationPage = () => {
  return (
    <div className="w-full bg-gray-50 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <CheckCircle className="h-24 w-24 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Order Confirmed!</h1>
          <p className="text-xl text-gray-600">
            Thank you for your order. We'll start preparing your delicious food
            right away!
          </p>
          <Link
            href="/"
            className="inline-block bg-orange-500 text-white py-3 px-8 rounded-lg text-lg font-medium hover:bg-orange-600 transition-colors"
          >
            Go to Order
          </Link>
        </div>
      </div>
    </div>
  );
};
export default OrderConfirmationPage;
