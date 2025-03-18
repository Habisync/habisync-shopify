import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-futuristicGray min-h-screen text-white">
      <Navigation />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-futuristicGreen">Contact Us</h1>
        <form className="mt-6">
          <input type="text" placeholder="Your Name" className="w-full p-3 bg-futuristicLightGray rounded-lg text-black mb-4" />
          <input type="email" placeholder="Your Email" className="w-full p-3 bg-futuristicLightGray rounded-lg text-black mb-4" />
          <textarea placeholder="Your Message" className="w-full p-3 bg-futuristicLightGray rounded-lg text-black mb-4"></textarea>
          <button type="submit" className="px-6 py-3 bg-futuristicGreen text-black rounded-lg font-semibold hover:bg-futuristicLightGray">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
