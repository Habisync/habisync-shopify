import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Subscription() {
  return (
    <div className="bg-futuristicGray min-h-screen text-white">
      <Navigation />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-futuristicGreen">HabiSync+ Subscriptions</h1>
        <p className="mt-4 text-gray-300">
          Subscribe to receive exclusive benefits, including premium support and periodic device upgrades.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-futuristicLightGray p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-futuristicGreen">Basic</h2>
            <p>$10/month - 1 device upgrade/year</p>
            <button className="mt-4 px-4 py-2 bg-futuristicGreen text-black rounded-lg hover:bg-futuristicLightGray">
              Subscribe
            </button>
          </div>
          <div className="bg-futuristicLightGray p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-futuristicGreen">Plus</h2>
            <p>$20/month - 5% off on all purchases</p>
            <button className="mt-4 px-4 py-2 bg-futuristicGreen text-black rounded-lg hover:bg-futuristicLightGray">
              Subscribe
            </button>
          </div>
          <div className="bg-futuristicLightGray p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-futuristicGreen">Premium</h2>
            <p>$50/month - Exclusive benefits & premium support</p>
            <button className="mt-4 px-4 py-2 bg-futuristicGreen text-black rounded-lg hover:bg-futuristicLightGray">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
