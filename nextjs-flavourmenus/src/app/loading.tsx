import React from "react";
import { Utensils } from "lucide-react";
const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Logo and Loading Animation Container */}
      <div className="text-center">
        {/* Animated Restaurant Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 animate-ping rounded-full bg-orange-100 opacity-75"></div>
          <div className="relative">
            <div className="h-16 w-16 rounded-full bg-orange-500 flex items-center justify-center">
              <Utensils className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        {/* Restaurant Name */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          FlavourfulmMenu
        </h1>
        {/* Loading Text */}
        <p className="text-gray-600 mb-8">
          Preparing your culinary experience...
        </p>
        {/* Loading Bar */}
        <div className="w-64 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-orange-500 rounded-full animate-loading-bar"></div>
        </div>
        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full bg-orange-500 animate-loading-dot"
              style={{
                animationDelay: `${i * 200}ms`,
              }}
            />
          ))}
        </div>
      </div>
      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-600 to-transparent"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingPage;