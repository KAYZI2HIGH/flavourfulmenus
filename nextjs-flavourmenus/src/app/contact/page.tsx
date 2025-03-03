'use client'

import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Send,
} from "lucide-react";
import "leaflet/dist/leaflet.css";
import MapComponent from "@/components/MapComponents/MapComponent";

export default function Contact() {
  return (
    <main className="w-full min-h-screen bg-white pt-14">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">We'd love to hear from you</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Send us a message
              </h2>
              <p className="text-gray-600">
                Have a question or feedback? We're here to help.
              </p>
            </div>
            <form className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none resize-none"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 text-sm font-medium"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-600">
                    123 Restaurant Street
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">info@restaurant.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 11:00 AM - 10:00 PM
                    <br />
                    Saturday - Sunday: 10:00 AM - 11:00 PM
                  </p>
                </div>
              </div>
            </div>
            <div className="h-64 rounded-lg overflow-hidden">
             <MapComponent/>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-orange-500"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-500"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-500"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
