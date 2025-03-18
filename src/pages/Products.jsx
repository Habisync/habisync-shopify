import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { fetchProducts } from "../api";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchProducts().then(data => setProducts(data)).catch(err => console.error(err));
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-futuristicGray min-h-screen text-white">
      <Navigation />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold text-futuristicGreen">Our Products</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-3 mt-6 bg-futuristicLightGray rounded-lg text-black"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-futuristicLightGray p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-futuristicGreen">{product.name}</h2>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <p className="mt-2 font-semibold text-black">{product.price}</p>
              <a href={`/products/${product.id}`} className="mt-4 inline-block px-4 py-2 bg-futuristicGreen text-black rounded-lg hover:bg-futuristicLightGray">
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
