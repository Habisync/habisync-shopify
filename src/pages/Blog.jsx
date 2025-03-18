import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Blog() {
  return (
    <div className="bg-futuristicGray min-h-screen text-white">
      <Navigation />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-futuristicGreen">Automation Blog</h1>
        <p className="mt-4 text-gray-300">Discover the latest tips, tricks, and insights into smart home automation.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-futuristicLightGray p-6 rounded-lg shadow-lg">
            <img src="/images/blog-energy.jpg" alt="Energy Saving Tips" className="w-full h-48 object-cover rounded" />
            <h2 className="text-2xl font-bold text-futuristicGreen mt-4">5 Energy-Saving Tips</h2>
            <p className="mt-2 text-gray-600">Learn how smart home devices can reduce your electricity bills.</p>
            <button className="mt-4 px-4 py-2 bg-futuristicGreen text-black rounded-lg hover:bg-futuristicLightGray">
              Read More
            </button>
          </div>
          <div className="bg-futuristicLightGray p-6 rounded-lg shadow-lg">
            <img src="/images/blog-security.jpg" alt="Home Security Tips" className="w-full h-48 object-cover rounded" />
            <h2 className="text-2xl font-bold text-futuristicGreen mt-4">Upgrade Home Security</h2>
            <p className="mt-2 text-gray-600">Explore the latest smart home technology for enhanced safety.</p>
            <button className="mt-4 px-4 py-2 bg-futuristicGreen text-black rounded-lg hover:bg-futuristicLightGray">
              Read More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
