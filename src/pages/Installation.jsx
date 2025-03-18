import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Installation() {
  return (
    <div className="bg-futuristicGray min-h-screen text-white">
      <Navigation />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-futuristicGreen">Installation Booking</h1>
        <p className="mt-4 text-gray-300">
          Schedule your installation service with our trusted local experts.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          Legal Disclaimer: Installation services (Habissimo) are outsourced and provided by third-party vendors.
          Habisync is not liable for any issues related to these services. Please review our terms and conditions.
        </p>
        <form className="mt-6">
          <input type="text" placeholder="Your Address" className="w-full p-3 bg-futuristicLightGray rounded-lg text-black mb-4" />
          <input type="date" className="w-full p-3 bg-futuristicLightGray rounded-lg text-black mb-4" />
          <button type="submit" className="px-6 py-3 bg-futuristicGreen text-black rounded-lg font-semibold hover:bg-futuristicLightGray">
            Book Now
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
