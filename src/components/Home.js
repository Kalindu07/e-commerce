import React from "react";
import { Button } from "./ui/button";
import { ShoppingCart, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Your Style</h1>
        <p className="text-gray-600 mb-6 text-lg">
          Shop the latest trends in fashion for men, women, and kids.
        </p>
        <Button className="text-lg px-6 py-3">
          Shop Now <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {['Men', 'Women', 'Kids'].map((category) => (
          <div
            key={category}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{category}</h2>
            <p className="text-gray-500 mb-4">Explore {category.toLowerCase()} collection</p>
            <Button variant="outline">Shop {category}</Button>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((id) => (
            <div
              key={id}
              className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition"
            >
              <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
              <h3 className="text-lg font-semibold">Product {id}</h3>
              <p className="text-gray-500 mb-2">$49.99</p>
              <Button className="w-full">
                <ShoppingCart className="mr-2 w-4 h-4" /> Add to Cart
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
