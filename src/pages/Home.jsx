import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-futuristicGray min-h-screen flex flex-col">
      <Navigation />
      <main className="container mx-auto flex-grow flex flex-col items-center justify-center text-center py-12">
        <h1 className="text-6xl font-bold text-futuristicGreen animate-fadeIn">
          Revolutionize Your Smart Home
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Discover advanced automation, premium security, and unmatched energy efficiency.
        </p>
        <div className="mt-6">
          <a href="/products" className="mx-2 px-6 py-3 bg-futuristicGreen text-black rounded-lg font-bold hover:bg-futuristicLightGray transition-all">
            Explore Products
          </a>
          <a href="/customizer" className="mx-2 px-6 py-3 border border-futuristicGreen rounded text-futuristicGreen font-bold hover:bg-futuristicGray transition-all">
            Customize Your Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
