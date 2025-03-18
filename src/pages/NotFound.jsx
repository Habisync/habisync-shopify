import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <div className="bg-futuristicGray min-h-screen flex flex-col items-center justify-center text-white">
      <Navigation />
      <h1 className="text-6xl font-bold text-futuristicGreen">404</h1>
      <p className="mt-4 text-lg text-gray-300">Oops! The page you’re looking for doesn’t exist.</p>
      <a href="/" className="mt-6 px-6 py-3 bg-futuristicGreen text-black rounded-lg font-semibold hover:bg-futuristicLightGray">
        Return to Home
      </a>
      <Footer />
    </div>
  );
}
